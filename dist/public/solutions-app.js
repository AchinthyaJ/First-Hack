// Enhanced Solutions App with Cloud Storage and Real-time Features
class SolutionsApp {
    constructor() {
        this.socket = io();
        this.currentUser = null;
        this.selectedPriority = 'medium';
        this.problems = [];
        this.currentFilters = {
            search: '',
            category: '',
            status: ''
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSocketListeners();
        this.loadProblems();
        this.checkAuthStatus();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('problemForm').addEventListener('submit', (e) => {
            this.handleProblemSubmission(e);
        });

        // Priority selection
        document.querySelectorAll('.priority-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectPriority(e.target.closest('.priority-option'));
            });
        });

        // Filters
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.currentFilters.search = e.target.value;
            this.debounce(() => this.loadProblems(), 300)();
        });

        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.currentFilters.category = e.target.value;
            this.loadProblems();
        });

        document.getElementById('statusFilter').addEventListener('change', (e) => {
            this.currentFilters.status = e.target.value;
            this.loadProblems();
        });

        // Character counters
        this.setupCharacterCounters();
    }

    setupSocketListeners() {
        this.socket.on('problemCreated', (problem) => {
            this.addProblemToList(problem, true);
            this.showNotification('New problem added to the community!', 'info');
        });

        this.socket.on('problemUpdated', (problem) => {
            this.updateProblemInList(problem);
        });

        this.socket.on('solutionCreated', ({ problemId, solution }) => {
            this.updateProblemSolutionCount(problemId);
            this.showNotification('New solution added!', 'success');
        });
    }

    setupCharacterCounters() {
        const titleInput = document.getElementById('problemTitle');
        const descriptionTextarea = document.getElementById('problemDescription');

        this.addCharacterCounter(titleInput, 100);
        this.addCharacterCounter(descriptionTextarea, 2000);
    }

    addCharacterCounter(element, maxLength) {
        const counter = document.createElement('div');
        counter.style.cssText = `
            font-size: 0.8rem;
            color: var(--text-secondary);
            text-align: right;
            margin-top: 0.25rem;
        `;
        
        const updateCounter = () => {
            const remaining = maxLength - element.value.length;
            counter.textContent = `${remaining} characters remaining`;
            counter.style.color = remaining < 20 ? 'var(--error-color)' : 'var(--text-secondary)';
        };

        element.addEventListener('input', updateCounter);
        element.parentNode.appendChild(counter);
        updateCounter();
    }

    selectPriority(option) {
        document.querySelectorAll('.priority-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');
        this.selectedPriority = option.dataset.priority;
    }

    async handleProblemSubmission(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = '⏳ Submitting...';

            const formData = {
                title: document.getElementById('problemTitle').value.trim(),
                description: document.getElementById('problemDescription').value.trim(),
                category: document.getElementById('problemCategory').value,
                priority: this.selectedPriority,
                tags: this.parseTags(document.getElementById('problemTags').value)
            };

            // Validate form
            if (!formData.title || !formData.description) {
                throw new Error('Title and description are required');
            }

            const response = await this.apiCall('/api/problems', 'POST', formData);
            
            if (response.ok) {
                const result = await response.json();
                this.showNotification('Problem submitted successfully! The community will help you soon.', 'success');
                this.resetForm();
                this.loadProblems(); // Refresh the list
            } else {
                const error = await response.json();
                throw new Error(error.error || 'Failed to submit problem');
            }
        } catch (error) {
            console.error('Error submitting problem:', error);
            this.showNotification(error.message || 'Failed to submit problem. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    parseTags(tagsString) {
        return tagsString
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0)
            .slice(0, 10); // Limit to 10 tags
    }

    resetForm() {
        document.getElementById('problemForm').reset();
        document.querySelectorAll('.priority-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        document.querySelector('.priority-option[data-priority="medium"]').classList.add('selected');
        this.selectedPriority = 'medium';
    }

    async loadProblems() {
        const problemsList = document.getElementById('problemsList');
        
        try {
            // Show loading state
            problemsList.innerHTML = `
                <div class="loading-container">
                    <div class="loading-spinner"></div>
                    <p>Loading community problems...</p>
                </div>
            `;

            const queryParams = new URLSearchParams();
            if (this.currentFilters.search) queryParams.append('search', this.currentFilters.search);
            if (this.currentFilters.category) queryParams.append('category', this.currentFilters.category);
            if (this.currentFilters.status) queryParams.append('status', this.currentFilters.status);
            queryParams.append('limit', '20');

            const response = await this.apiCall(`/api/problems?${queryParams}`);
            
            if (response.ok) {
                const data = await response.json();
                this.problems = data.problems;
                this.renderProblems(data.problems);
            } else {
                throw new Error('Failed to load problems');
            }
        } catch (error) {
            console.error('Error loading problems:', error);
            problemsList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    <h3>Failed to load problems</h3>
                    <p>Please try again later</p>
                </div>
            `;
        }
    }

    renderProblems(problems) {
        const problemsList = document.getElementById('problemsList');
        
        if (problems.length === 0) {
            problemsList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">💭</div>
                    <h3>No problems found</h3>
                    <p>Be the first to ask for help or try adjusting your filters</p>
                </div>
            `;
            return;
        }

        problemsList.innerHTML = problems.map(problem => this.createProblemCard(problem)).join('');
    }

    createProblemCard(problem) {
        const createdDate = new Date(problem.createdAt).toLocaleDateString();
        const timeAgo = this.getTimeAgo(new Date(problem.createdAt));
        
        return `
            <div class="problem-card" data-problem-id="${problem.id}">
                <div class="problem-header">
                    <div>
                        <h3 class="problem-title">${this.escapeHtml(problem.title)}</h3>
                        <div class="problem-meta">
                            <span class="status-badge ${problem.status}">${this.capitalizeFirst(problem.status)}</span>
                            <span class="priority-badge ${problem.priority}">${this.capitalizeFirst(problem.priority)}</span>
                            <span class="category-badge">${this.capitalizeFirst(problem.category)}</span>
                        </div>
                    </div>
                </div>
                
                <p class="problem-description">${this.escapeHtml(problem.description)}</p>
                
                ${problem.tags && problem.tags.length > 0 ? `
                    <div style="margin-bottom: 1rem;">
                        ${problem.tags.map(tag => `<span style="
                            display: inline-block;
                            background: rgba(99, 102, 241, 0.1);
                            color: var(--primary-color);
                            padding: 0.25rem 0.5rem;
                            border-radius: 12px;
                            font-size: 0.75rem;
                            margin-right: 0.5rem;
                            margin-bottom: 0.25rem;
                        ">#${this.escapeHtml(tag)}</span>`).join('')}
                    </div>
                ` : ''}
                
                <div class="problem-footer">
                    <span>📅 ${timeAgo}</span>
                    <span class="solutions-count">
                        💡 ${problem.solutions ? problem.solutions.length : 0} solutions
                    </span>
                </div>
            </div>
        `;
    }

    addProblemToList(problem, isNew = false) {
        const problemsList = document.getElementById('problemsList');
        const emptyState = problemsList.querySelector('.empty-state');
        
        if (emptyState) {
            problemsList.innerHTML = '';
        }

        const problemCard = document.createElement('div');
        problemCard.innerHTML = this.createProblemCard(problem);
        problemCard.firstElementChild.classList.add(isNew ? 'new' : '');
        
        problemsList.insertBefore(problemCard.firstElementChild, problemsList.firstChild);
        this.problems.unshift(problem);
    }

    updateProblemInList(updatedProblem) {
        const problemCard = document.querySelector(`[data-problem-id="${updatedProblem.id}"]`);
        if (problemCard) {
            problemCard.outerHTML = this.createProblemCard(updatedProblem);
        }
        
        const problemIndex = this.problems.findIndex(p => p.id === updatedProblem.id);
        if (problemIndex !== -1) {
            this.problems[problemIndex] = updatedProblem;
        }
    }

    updateProblemSolutionCount(problemId) {
        const problemCard = document.querySelector(`[data-problem-id="${problemId}"]`);
        if (problemCard) {
            const solutionsCount = problemCard.querySelector('.solutions-count');
            if (solutionsCount) {
                const currentCount = parseInt(solutionsCount.textContent.match(/\d+/)[0]);
                solutionsCount.textContent = `💡 ${currentCount + 1} solutions`;
            }
        }
    }

    async checkAuthStatus() {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                // In a real app, you'd validate the token with the server
                this.currentUser = { token };
            } catch (error) {
                localStorage.removeItem('authToken');
            }
        }
    }

    async apiCall(url, method = 'GET', data = null) {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (this.currentUser && this.currentUser.token) {
            options.headers['Authorization'] = `Bearer ${this.currentUser.token}`;
        }

        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(url, options);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
        
        return date.toLocaleDateString();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SolutionsApp();
});

// Add some demo problems for testing (remove in production)
if (window.location.hostname === 'localhost') {
    setTimeout(() => {
        const demoProblems = [
            {
                id: 'demo1',
                title: 'React useState not updating component',
                description: 'I\'m trying to update state in my React component but the UI is not re-rendering. I\'m using useState hook but something seems wrong.',
                category: 'programming',
                priority: 'medium',
                status: 'open',
                tags: ['react', 'javascript', 'hooks'],
                createdAt: new Date(Date.now() - 3600000).toISOString(),
                solutions: []
            },
            {
                id: 'demo2',
                title: 'SQL injection vulnerability in login form',
                description: 'I found a potential SQL injection vulnerability in our login form. How can I fix this securely?',
                category: 'cybersecurity',
                priority: 'high',
                status: 'in-progress',
                tags: ['sql', 'security', 'vulnerability'],
                createdAt: new Date(Date.now() - 7200000).toISOString(),
                solutions: ['sol1', 'sol2']
            },
            {
                id: 'demo3',
                title: 'CSS Grid layout not working on mobile',
                description: 'My CSS Grid layout looks perfect on desktop but breaks on mobile devices. Need help with responsive design.',
                category: 'web',
                priority: 'low',
                status: 'solved',
                tags: ['css', 'responsive', 'mobile'],
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                solutions: ['sol3']
            }
        ];

        // Simulate loading demo problems
        const app = window.solutionsApp;
        if (app) {
            app.problems = demoProblems;
            app.renderProblems(demoProblems);
        }
    }, 1000);
}