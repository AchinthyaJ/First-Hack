// GNews API configuration
const GNEWS_API_KEY = 'YOUR_GNEWS_API_KEY'; // You'll need to get this from https://gnews.io/
const GNEWS_BASE_URL = 'https://gnews.io/api/v4/search';

// Fallback to mock data for demo purposes
const mockArticles = [
    {
        title: "Latest Cybersecurity Threats in 2025",
        description: "Explore the emerging cybersecurity threats that organizations need to be aware of in 2025.",
        url: "#",
        publishedAt: "2025-01-27T10:00:00Z",
        source: { name: "Tech Security Today" }
    },
    {
        title: "AI-Powered Hacking Tools on the Rise",
        description: "How artificial intelligence is being used to create more sophisticated hacking tools.",
        url: "#",
        publishedAt: "2025-01-27T09:30:00Z",
        source: { name: "Cyber Defense Weekly" }
    },
    {
        title: "Blockchain Security: Best Practices",
        description: "Essential security measures for protecting blockchain applications and smart contracts.",
        url: "#",
        publishedAt: "2025-01-27T08:45:00Z",
        source: { name: "Blockchain Security Journal" }
    },
    {
        title: "Zero-Day Vulnerabilities Discovered",
        description: "Security researchers have identified critical zero-day vulnerabilities in popular software.",
        url: "#",
        publishedAt: "2025-01-27T08:00:00Z",
        source: { name: "Vulnerability Research Lab" }
    }
];

// Enhanced fetch function with GNews API
async function fetchGNewsArticles(query, maxResults = 10) {
    try {
        // For demo purposes, we'll use mock data
        // In production, uncomment the following lines and add your API key
        /*
        const url = `${GNEWS_BASE_URL}?q=${encodeURIComponent(query)}&token=${GNEWS_API_KEY}&lang=en&max=${maxResults}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.articles;
        */
        
        // Mock data for demo
        return mockArticles.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
    } catch (error) {
        console.error('Error fetching articles:', error);
        return mockArticles; // Fallback to mock data
    }
}

// Category button handlers with improved functionality
const categoryHandlers = {
    'selector1': 'hacking',
    'selector2': 'cybersecurity',
    'selector3': 'smartphone technology',
    'selector4': 'tech scams',
    'selector5': 'gaming technology',
    'selector6': 'blockchain cryptocurrency',
    'selector7': 'artificial intelligence machine learning',
    'selector8': 'AI gaming',
    'selector9': 'neuralink',
    'selector10': 'telecommunication networking',
    'selector11': 'metaverse virtual reality'
};

// Initialize category buttons
Object.keys(categoryHandlers).forEach(selectorId => {
    const element = document.getElementById(selectorId);
    if (element) {
        element.onclick = async function() {
            const contentSection = document.getElementById('content-loaded');
            const query = categoryHandlers[selectorId];
            
            // Show loading state
            contentSection.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><p>Loading articles...</p></div>';
            
            try {
                const articles = await fetchGNewsArticles(query);
                displayArticles(articles, contentSection);
            } catch (error) {
                contentSection.innerHTML = `<div class="error-message"><p>Error loading content: ${error.message}</p></div>`;
            }
        };
    }
});

// Enhanced article display function
function displayArticles(articles, container) {
    if (!articles || articles.length === 0) {
        container.innerHTML = '<div class="no-articles"><p>No articles found for this category.</p></div>';
        return;
    }

    container.innerHTML = '';
    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article-card';
        articleElement.style.animationDelay = `${index * 0.1}s`;
        
        const publishedDate = new Date(article.publishedAt || Date.now()).toLocaleDateString();
        const sourceName = article.source?.name || 'Unknown Source';
        
        articleElement.innerHTML = `
            <div class="article-header">
                <span class="article-source">${sourceName}</span>
                <span class="article-date">${publishedDate}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-description">${article.description || 'No description available.'}</p>
            <div class="article-footer">
                <a href="${article.url}" target="_blank" class="read-more-btn">
                    <span>Read Full Article</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </a>
            </div>
        `;
        container.appendChild(articleElement);
    });

    // Add scroll animation
    const elementsToAnimate = container.querySelectorAll('.article-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => observer.observe(el));
}

// Hacker typer functionality
const codeSnippet = `
// Advanced Cybersecurity Analysis System
class SecurityAnalyzer {
    constructor() {
        this.threats = [];
        this.vulnerabilities = [];
        this.isScanning = false;
    }

    async initiateScan(target) {
        console.log(\`Initiating security scan on \${target}\`);
        this.isScanning = true;
        
        const scanResults = await this.performDeepScan(target);
        this.analyzeThreatVectors(scanResults);
        
        return this.generateReport();
    }

    performDeepScan(target) {
        return new Promise((resolve) => {
            const scanData = {
                ports: this.scanPorts(target),
                services: this.identifyServices(target),
                vulnerabilities: this.detectVulnerabilities(target)
            };
            
            setTimeout(() => resolve(scanData), 2000);
        });
    }

    scanPorts(target) {
        const commonPorts = [21, 22, 23, 25, 53, 80, 110, 443, 993, 995];
        return commonPorts.filter(() => Math.random() > 0.7);
    }

    identifyServices(target) {
        const services = ['HTTP', 'HTTPS', 'SSH', 'FTP', 'SMTP'];
        return services.filter(() => Math.random() > 0.5);
    }

    detectVulnerabilities(target) {
        const vulns = [
            'SQL Injection',
            'Cross-Site Scripting (XSS)',
            'Buffer Overflow',
            'Authentication Bypass',
            'Directory Traversal'
        ];
        return vulns.filter(() => Math.random() > 0.6);
    }

    analyzeThreatVectors(scanData) {
        console.log('Analyzing threat vectors...');
        scanData.vulnerabilities.forEach(vuln => {
            this.threats.push({
                type: vuln,
                severity: Math.random() > 0.5 ? 'HIGH' : 'MEDIUM',
                timestamp: new Date().toISOString()
            });
        });
    }

    generateReport() {
        return {
            scanComplete: true,
            threatsFound: this.threats.length,
            threats: this.threats,
            recommendations: this.getRecommendations()
        };
    }

    getRecommendations() {
        return [
            'Update all software to latest versions',
            'Implement strong authentication mechanisms',
            'Regular security audits and penetration testing',
            'Employee cybersecurity training',
            'Network segmentation and monitoring'
        ];
    }
}

// Initialize security system
const securitySystem = new SecurityAnalyzer();

// Simulate real-time monitoring
setInterval(() => {
    if (Math.random() > 0.8) {
        console.log('🔒 Security alert: Suspicious activity detected');
        console.log('📊 Running automated threat analysis...');
    }
}, 5000);

// Advanced encryption utilities
function advancedEncrypt(data, key) {
    let encrypted = '';
    for (let i = 0; i < data.length; i++) {
        const charCode = data.charCodeAt(i);
        const keyChar = key.charCodeAt(i % key.length);
        encrypted += String.fromCharCode(charCode ^ keyChar);
    }
    return btoa(encrypted);
}

function advancedDecrypt(encryptedData, key) {
    const decoded = atob(encryptedData);
    let decrypted = '';
    for (let i = 0; i < decoded.length; i++) {
        const charCode = decoded.charCodeAt(i);
        const keyChar = key.charCodeAt(i % key.length);
        decrypted += String.fromCharCode(charCode ^ keyChar);
    }
    return decrypted;
}

// Network analysis tools
class NetworkAnalyzer {
    static analyzeTraffic(packets) {
        console.log('📡 Analyzing network traffic...');
        const analysis = {
            totalPackets: packets.length,
            suspiciousPackets: packets.filter(p => p.suspicious).length,
            protocols: [...new Set(packets.map(p => p.protocol))],
            topSources: this.getTopSources(packets)
        };
        return analysis;
    }

    static getTopSources(packets) {
        const sources = {};
        packets.forEach(packet => {
            sources[packet.source] = (sources[packet.source] || 0) + 1;
        });
        return Object.entries(sources)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5);
    }
}

// Penetration testing framework
class PenTestFramework {
    constructor() {
        this.modules = [
            'reconnaissance',
            'scanning',
            'enumeration',
            'vulnerability_assessment',
            'exploitation',
            'post_exploitation',
            'reporting'
        ];
    }

    async runTest(target, modules = this.modules) {
        console.log(\`🎯 Starting penetration test on \${target}\`);
        
        for (const module of modules) {
            console.log(\`📋 Running \${module} module...\`);
            await this.executeModule(module, target);
        }
        
        console.log('✅ Penetration test completed');
        return this.generatePenTestReport();
    }

    async executeModule(module, target) {
        // Simulate module execution
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(\`   ✓ \${module} completed\`);
                resolve();
            }, Math.random() * 1000 + 500);
        });
    }

    generatePenTestReport() {
        return {
            testDate: new Date().toISOString(),
            findings: Math.floor(Math.random() * 10) + 1,
            riskLevel: ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)],
            recommendations: [
                'Patch identified vulnerabilities',
                'Strengthen access controls',
                'Implement monitoring solutions',
                'Conduct regular security training'
            ]
        };
    }
}

// Initialize systems
console.log('🚀 Cybersecurity systems initialized');
console.log('🔐 Ready for security operations');

// Continuous monitoring
setInterval(() => {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] System status: OPERATIONAL\`);
}, 10000);
`;

let enterCount = 0;
let backspaceCount = 0;
let codeIndex = 0;

// Hacker typer event listeners
document.getElementById('okButton')?.addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('container').style.display = 'flex';
    document.getElementById('entryBox').value = '';
    enterCount = 0;
    backspaceCount = 0;
});

document.addEventListener('keydown', function(event) {
    let codeDisplay = document.getElementById('codeDisplay');
    if (!codeDisplay) return;
    
    let charsToAdd = 3;

    if (event.key === 'Enter') {
        enterCount++;
        if (enterCount === 3) {
            enterCount = 0;
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Granted';
            document.getElementById('entryBox').style.color = '#00ff00';
        }
        return;
    }

    if (event.key === 'Backspace') {
        backspaceCount++;
        if (backspaceCount === 3) {
            backspaceCount = 0;
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Denied';
            document.getElementById('entryBox').style.color = '#ff0000';
        }
        return;
    }

    if (codeIndex < codeSnippet.length) {
        let nextPart = codeSnippet.substring(codeIndex, codeIndex + charsToAdd);
        codeDisplay.textContent += nextPart;
        codeIndex += charsToAdd;
    } else {
        codeIndex = 0;
    }
    
    codeDisplay.scrollTop = codeDisplay.scrollHeight;
});

// Password cracker functionality
document.getElementById('icon1')?.addEventListener('click', function() {
    document.getElementById('passwordCracker')?.classList.remove('hidden');
});

document.getElementById('icon2')?.addEventListener('click', function() {
    document.getElementById('passwordCracker')?.classList.remove('hidden');
});

document.getElementById('icon3')?.addEventListener('click', function() {
    document.getElementById('passwordCracker')?.classList.remove('hidden');
});

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

document.getElementById('crackButton')?.addEventListener('click', function() {
    let passwordInput = document.getElementById('passwordInput')?.value;
    let crackerOutput = document.getElementById('crackerOutput');
    
    if (!crackerOutput) return;

    crackerOutput.textContent = 'Initializing crack sequence...\n';
    
    setTimeout(() => {
        crackerOutput.textContent += 'Analyzing target system...\n';
    }, 500);
    
    setTimeout(() => {
        crackerOutput.textContent += 'Running dictionary attack...\n';
    }, 1000);
    
    setTimeout(() => {
        crackerOutput.textContent += 'Attempting brute force...\n';
    }, 1500);

    setTimeout(() => {
        crackerOutput.textContent += `✅ Password cracked: ${generatePassword()}\n`;
        crackerOutput.textContent += '🔓 Access granted to system\n';
    }, 2500);
});

// Opinion form functionality
document.getElementById('opinionForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name')?.value;
    const person = document.getElementById('person')?.value;
    const opinion = document.getElementById('opinion')?.value;

    if (!name || !person || !opinion) return;

    const opinionObject = { name, person, opinion, timestamp: new Date().toISOString() };
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.unshift(opinionObject); // Add to beginning
    localStorage.setItem('opinions', JSON.stringify(opinions));

    // Clear form
    document.getElementById('opinionForm').reset();
    
    // Show success message
    showNotification('Solution submitted successfully!', 'success');
    
    loadOpinions();
});

function loadOpinions() {
    const opinionsList = document.getElementById('opinionsList');
    if (!opinionsList) return;
    
    opinionsList.innerHTML = '';
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    
    if (opinions.length === 0) {
        opinionsList.innerHTML = '<p class="no-opinions">No solutions shared yet. Be the first to contribute!</p>';
        return;
    }
    
    opinions.forEach((opinion, index) => {
        const opinionDiv = document.createElement('div');
        opinionDiv.classList.add('opinion');
        opinionDiv.style.animationDelay = `${index * 0.1}s`;
        
        const date = new Date(opinion.timestamp || Date.now()).toLocaleDateString();
        
        opinionDiv.innerHTML = `
            <div class="opinion-header">
                <strong class="solution-title">${opinion.person}</strong>
                <span class="opinion-date">${date}</span>
            </div>
            <p class="opinion-content">${opinion.opinion}</p>
            <div class="opinion-author">— ${opinion.name}</div>
        `;
        opinionsList.appendChild(opinionDiv);
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load main page articles
    const contentSection = document.getElementById('content');
    const contentCyberSection = document.getElementById('content-cyber');
    
    if (contentSection) {
        fetchGNewsArticles('hacking cybersecurity', 4).then(articles => {
            displayArticles(articles, contentSection);
        });
    }
    
    if (contentCyberSection) {
        fetchGNewsArticles('cybersecurity threats', 4).then(articles => {
            displayArticles(articles, contentCyberSection);
        });
    }
    
    // Load opinions
    loadOpinions();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});