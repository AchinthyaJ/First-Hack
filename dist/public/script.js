// GNews API configuration
const GNEWS_API_KEY = 'eaad89d324eaa978f996c6d028c7ddee'; // You'll need to get this from https://gnews.io/
const GNEWS_BASE_URL = 'https://gnews.io/api/v4/search';

// Fallback to mock data for demo purposes
const mockArticles = [
    {
        title: "Latest Cybersecurity Threats in 2025",
        description: "Explore the emerging cybersecurity threats that organizations need to be aware of in 2025.",
        url: "https://www.cisa.gov/news-events/cybersecurity-advisories",
        publishedAt: "2025-01-27T10:00:00Z",
        source: { name: "Tech Security Today" }
    },
    {
        title: "AI-Powered Hacking Tools on the Rise",
        description: "How artificial intelligence is being used to create more sophisticated hacking tools.",
        url: "https://www.darkreading.com/threat-intelligence/ai-powered-attacks",
        publishedAt: "2025-01-27T09:30:00Z",
        source: { name: "Cyber Defense Weekly" }
    },
    {
        title: "Blockchain Security: Best Practices",
        description: "Essential security measures for protecting blockchain applications and smart contracts.",
        url: "https://blog.coinbase.com/blockchain-security-best-practices",
        publishedAt: "2025-01-27T08:45:00Z",
        source: { name: "Blockchain Security Journal" }
    },
    {
        title: "Zero-Day Vulnerabilities Discovered",
        description: "Security researchers have identified critical zero-day vulnerabilities in popular software.",
        url: "https://nvd.nist.gov/vuln/search",
        publishedAt: "2025-01-27T08:00:00Z",
        source: { name: "Vulnerability Research Lab" }
    },
    // Hacking News Articles
    {
        title: "New Ransomware Campaign Targets Healthcare Systems",
        description: "A sophisticated ransomware group has launched targeted attacks against major healthcare providers worldwide.",
        url: "https://www.bleepingcomputer.com/news/security/ransomware/",
        publishedAt: "2025-01-27T15:30:00Z",
        source: { name: "Healthcare Security Alert" },
        category: "hacking"
    },
    {
        title: "Critical SSH Vulnerability Allows Remote Code Execution",
        description: "Security researchers discover a critical flaw in OpenSSH that could allow attackers to execute arbitrary code.",
        url: "https://www.openssh.com/security.html",
        publishedAt: "2025-01-27T14:45:00Z",
        source: { name: "Security Research Today" },
        category: "hacking"
    },
    {
        title: "APT Group Exploits Microsoft Exchange Servers",
        description: "Advanced persistent threat actors are actively exploiting newly discovered vulnerabilities in Exchange servers.",
        url: "https://msrc.microsoft.com/update-guide/vulnerability",
        publishedAt: "2025-01-27T13:20:00Z",
        source: { name: "Threat Intelligence Weekly" },
        category: "hacking"
    },
    {
        title: "Social Engineering Attacks Increase by 300% in 2025",
        description: "Cybercriminals are increasingly using sophisticated social engineering techniques to bypass security measures.",
        url: "https://www.sans.org/white-papers/social-engineering/",
        publishedAt: "2025-01-27T12:15:00Z",
        source: { name: "Social Engineering Watch" },
        category: "hacking"
    },
    {
        title: "New Phishing Campaign Mimics Popular Banking Apps",
        description: "Hackers create convincing replicas of banking applications to steal user credentials and financial data.",
        url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-scams-and-crimes/internet-fraud",
        publishedAt: "2025-01-27T11:30:00Z",
        source: { name: "Financial Security News" },
        category: "hacking"
    },
    {
        title: "Supply Chain Attack Compromises Software Development Tools",
        description: "Malicious actors infiltrate popular development tools, potentially affecting thousands of applications.",
        url: "https://www.crowdstrike.com/cybersecurity-101/cyberattacks/supply-chain-attacks/",
        publishedAt: "2025-01-27T10:45:00Z",
        source: { name: "DevSec Alert" },
        category: "hacking"
    },
    
    // Cybersecurity News Articles
    {
        title: "New AI-Powered Threat Detection System Launched",
        description: "Leading cybersecurity firm releases advanced AI system capable of detecting previously unknown threats.",
        url: "https://www.crowdstrike.com/products/threat-intelligence/",
        publishedAt: "2025-01-27T16:00:00Z",
        source: { name: "AI Security Today" },
        category: "cybersecurity"
    },
    {
        title: "Government Announces New Cybersecurity Framework",
        description: "Federal agencies release comprehensive guidelines for protecting critical infrastructure from cyber threats.",
        url: "https://www.nist.gov/cyberframework",
        publishedAt: "2025-01-27T15:15:00Z",
        source: { name: "Government Security Bulletin" },
        category: "cybersecurity"
    },
    {
        title: "Multi-Factor Authentication Becomes Mandatory for Federal Contractors",
        description: "New regulations require all government contractors to implement advanced authentication measures.",
        url: "https://www.cisa.gov/mfa",
        publishedAt: "2025-01-27T14:30:00Z",
        source: { name: "Federal Compliance News" },
        category: "cybersecurity"
    },
    {
        title: "Quantum-Resistant Encryption Standards Finalized",
        description: "NIST releases final standards for cryptographic algorithms designed to withstand quantum computer attacks.",
        url: "https://csrc.nist.gov/projects/post-quantum-cryptography",
        publishedAt: "2025-01-27T13:45:00Z",
        source: { name: "Quantum Security Journal" },
        category: "cybersecurity"
    },
    {
        title: "Cloud Security Spending Reaches Record High",
        description: "Organizations worldwide increase cloud security investments as remote work continues to grow.",
        url: "https://aws.amazon.com/security/",
        publishedAt: "2025-01-27T12:30:00Z",
        source: { name: "Cloud Security Report" },
        category: "cybersecurity"
    },
    {
        title: "Cybersecurity Skills Gap Widens Despite Training Programs",
        description: "Industry report shows growing demand for cybersecurity professionals outpaces available talent.",
        url: "https://www.isc2.org/Research/Workforce-Study",
        publishedAt: "2025-01-27T11:45:00Z",
        source: { name: "Cybersecurity Workforce Study" },
        category: "cybersecurity"
    },
    
    // Smartphone Technology Articles
    {
        title: "New iPhone Security Feature Blocks Advanced Spyware",
        description: "Apple introduces revolutionary security technology that prevents state-sponsored surveillance tools.",
        url: "https://support.apple.com/guide/security/",
        publishedAt: "2025-01-27T16:30:00Z",
        source: { name: "Mobile Security News" },
        category: "smartphone technology"
    },
    {
        title: "Android 15 Introduces Enhanced Privacy Controls",
        description: "Google's latest Android version includes advanced privacy features and improved app permissions.",
        url: "https://developer.android.com/about/versions/15/privacy",
        publishedAt: "2025-01-27T15:45:00Z",
        source: { name: "Android Security Update" },
        category: "smartphone technology"
    },
    {
        title: "5G Network Vulnerabilities Expose User Data",
        description: "Security researchers identify critical flaws in 5G infrastructure that could compromise user privacy.",
        url: "https://www.nist.gov/news-events/news/2023/01/nist-releases-cybersecurity-guidance-5g-cloud-infrastructures",
        publishedAt: "2025-01-27T14:15:00Z",
        source: { name: "5G Security Watch" },
        category: "smartphone technology"
    },
    
    // Tech Scams Articles
    {
        title: "Cryptocurrency Investment Scams Surge 400% in 2025",
        description: "Fraudsters exploit crypto market volatility to deceive investors with fake investment opportunities.",
        url: "https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2022/06/reports-show-scammers-cashing-crypto-craze",
        publishedAt: "2025-01-27T17:00:00Z",
        source: { name: "Fraud Prevention Alert" },
        category: "tech scams"
    },
    {
        title: "AI-Generated Deepfake Scams Target Elderly Population",
        description: "Scammers use advanced AI to create convincing video calls impersonating family members.",
        url: "https://www.aarp.org/money/scams-fraud/info-2023/deepfake-scams.html",
        publishedAt: "2025-01-27T16:15:00Z",
        source: { name: "Elder Fraud Protection" },
        category: "tech scams"
    },
    {
        title: "Fake Tech Support Calls Increase During Holiday Season",
        description: "Cybercriminals ramp up fake technical support scams targeting unsuspecting computer users.",
        url: "https://www.microsoft.com/en-us/security/blog/tech-support-scams/",
        publishedAt: "2025-01-27T15:30:00Z",
        source: { name: "Scam Alert Network" },
        category: "tech scams"
    },
    
    // Gaming Technology Articles
    {
        title: "Gaming Platforms Implement Advanced Anti-Cheat Systems",
        description: "Major gaming companies deploy AI-powered systems to detect and prevent cheating in online games.",
        url: "https://blog.counter-strike.net/index.php/category/updates/",
        publishedAt: "2025-01-27T17:30:00Z",
        source: { name: "Gaming Security Today" },
        category: "gaming technology"
    },
    {
        title: "NFT Gaming Marketplace Suffers Major Security Breach",
        description: "Popular blockchain gaming platform loses millions in digital assets due to smart contract vulnerability.",
        url: "https://blog.opensea.io/security/",
        publishedAt: "2025-01-27T16:45:00Z",
        source: { name: "Blockchain Gaming News" },
        category: "gaming technology"
    },
    
    // Blockchain & Cryptocurrency Articles
    {
        title: "DeFi Protocol Loses $50M in Flash Loan Attack",
        description: "Sophisticated attackers exploit smart contract vulnerabilities to drain decentralized finance protocol.",
        url: "https://blog.chainalysis.com/reports/defi-hacks-2023/",
        publishedAt: "2025-01-27T18:00:00Z",
        source: { name: "DeFi Security Alert" },
        category: "blockchain cryptocurrency"
    },
    {
        title: "Central Bank Digital Currency Pilot Program Launches",
        description: "Federal Reserve begins testing digital dollar with enhanced security and privacy features.",
        url: "https://www.federalreserve.gov/central-bank-digital-currency.htm",
        publishedAt: "2025-01-27T17:15:00Z",
        source: { name: "CBDC News" },
        category: "blockchain cryptocurrency"
    },
    
    // AI & Machine Learning Articles
    {
        title: "AI Model Poisoning Attacks Threaten Machine Learning Systems",
        description: "Researchers demonstrate how malicious data can corrupt AI training processes and compromise model integrity.",
        url: "https://blog.openai.com/safety/",
        publishedAt: "2025-01-27T18:30:00Z",
        source: { name: "AI Security Research" },
        category: "artificial intelligence machine learning"
    },
    {
        title: "Large Language Models Show Vulnerability to Prompt Injection",
        description: "Security experts reveal how attackers can manipulate AI chatbots to bypass safety restrictions.",
        url: "https://research.google/blog/",
        publishedAt: "2025-01-27T17:45:00Z",
        source: { name: "LLM Security Watch" },
        category: "artificial intelligence machine learning"
    }
];

// Enhanced fetch function with GNews API
async function fetchGNewsArticles(query, maxResults = 15) {
    try {
        // Filter articles by category or search term
        let filteredArticles = mockArticles.filter(article => {
            const matchesCategory = article.category && article.category.toLowerCase().includes(query.toLowerCase());
            const matchesTitle = article.title.toLowerCase().includes(query.toLowerCase());
            const matchesDescription = article.description.toLowerCase().includes(query.toLowerCase());
            
            return matchesCategory || matchesTitle || matchesDescription;
        });
        
        // Sort by publication date (most recent first)
        filteredArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
        // Limit results
        filteredArticles = filteredArticles.slice(0, maxResults);
        
        // If no filtered results, return recent articles from all categories
        if (filteredArticles.length === 0) {
            const allArticles = [...mockArticles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            filteredArticles = allArticles.slice(0, maxResults);
        }
        
        return filteredArticles;
    } catch (error) {
        console.error('Error fetching articles:', error);
        // Return recent articles as fallback
        const fallbackArticles = [...mockArticles]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, maxResults);
        return fallbackArticles;
    }
}

// Function to get articles for main page sections
async function getMainPageArticles(category, maxResults = 8) {
    try {
        let categoryArticles = mockArticles.filter(article => {
            if (!article.category) {
                // For articles without explicit category, match by title/description
                return article.title.toLowerCase().includes(category.toLowerCase()) ||
                       article.description.toLowerCase().includes(category.toLowerCase());
            }
            return article.category.toLowerCase().includes(category.toLowerCase());
        });
        
        // Sort by publication date (most recent first)
        categoryArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
        // If we don't have enough articles for this category, add some general recent articles
        if (categoryArticles.length < maxResults) {
            const generalArticles = mockArticles
                .filter(article => !categoryArticles.includes(article))
                .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
                .slice(0, maxResults - categoryArticles.length);
            
            categoryArticles = [...categoryArticles, ...generalArticles];
        }
        
        return categoryArticles.slice(0, maxResults);
    } catch (error) {
        console.error('Error getting main page articles:', error);
        return mockArticles.slice(0, maxResults);
    }
}

// Update the original function to use better filtering
async function fetchGNewsArticlesOriginal(query, maxResults = 10) {
    try {
        // Always use mock data for demo since API key is not configured
        const filteredArticles = mockArticles.filter(article => 
            (article.category && article.category.toLowerCase().includes(query.toLowerCase())) ||
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
        
        // Sort by date and limit results
        const sortedArticles = filteredArticles
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, maxResults);
        
        // If no filtered results, return all mock articles
        return sortedArticles.length > 0 ? sortedArticles : mockArticles.slice(0, maxResults);
    } catch (error) {
        console.error('Error fetching articles:', error);
        return mockArticles.slice(0, maxResults); // Fallback to mock data
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
const codeSnippets = [
    `
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
`,
    `
// Network Penetration Testing Framework
import { NetworkScanner } from './modules/scanner.js';
import { VulnerabilityAssessment } from './modules/vuln-assessment.js';
import { ExploitFramework } from './modules/exploits.js';

class PenetrationTester {
    constructor(target) {
        this.target = target;
        this.results = {
            reconnaissance: {},
            scanning: {},
            enumeration: {},
            vulnerabilities: [],
            exploits: [],
            postExploitation: {}
        };
    }

    async performReconnaissance() {
        console.log('🔍 Starting reconnaissance phase...');
        
        // DNS enumeration
        const dnsResults = await this.enumerateDNS(this.target);
        console.log('📋 DNS enumeration completed');
        
        // WHOIS lookup
        const whoisData = await this.performWhoisLookup(this.target);
        console.log('📊 WHOIS data retrieved');
        
        // Social media intelligence
        const osintResults = await this.gatherOSINT(this.target);
        console.log('🕵️ OSINT gathering completed');
        
        this.results.reconnaissance = {
            dns: dnsResults,
            whois: whoisData,
            osint: osintResults
        };
    }

    async performNetworkScanning() {
        console.log('🌐 Initiating network scanning...');
        
        const scanner = new NetworkScanner(this.target);
        
        // Port scanning
        const openPorts = await scanner.scanPorts();
        console.log(\`🔓 Found \${openPorts.length} open ports\`);
        
        // Service detection
        const services = await scanner.detectServices(openPorts);
        console.log('🔧 Service detection completed');
        
        // OS fingerprinting
        const osFingerprint = await scanner.detectOS();
        console.log('💻 OS fingerprinting completed');
        
        this.results.scanning = {
            ports: openPorts,
            services: services,
            os: osFingerprint
        };
    }

    async performVulnerabilityAssessment() {
        console.log('🛡️ Starting vulnerability assessment...');
        
        const vulnScanner = new VulnerabilityAssessment();
        
        // CVE database lookup
        const cveResults = await vulnScanner.scanForCVEs(this.results.scanning.services);
        console.log(\`⚠️ Found \${cveResults.length} potential vulnerabilities\`);
        
        // Custom vulnerability checks
        const customVulns = await vulnScanner.performCustomChecks(this.target);
        console.log('🔍 Custom vulnerability checks completed');
        
        this.results.vulnerabilities = [...cveResults, ...customVulns];
    }

    async attemptExploitation() {
        console.log('💥 Beginning exploitation phase...');
        
        const exploitFramework = new ExploitFramework();
        
        for (const vuln of this.results.vulnerabilities) {
            if (vuln.severity === 'CRITICAL' || vuln.severity === 'HIGH') {
                console.log(\`🎯 Attempting to exploit: \${vuln.name}\`);
                
                const exploitResult = await exploitFramework.executeExploit(vuln, this.target);
                
                if (exploitResult.success) {
                    console.log('✅ Exploitation successful!');
                    this.results.exploits.push(exploitResult);
                    
                    // Attempt privilege escalation
                    const privEsc = await this.attemptPrivilegeEscalation(exploitResult);
                    if (privEsc.success) {
                        console.log('👑 Privilege escalation successful!');
                    }
                } else {
                    console.log('❌ Exploitation failed');
                }
            }
        }
    }

    async performPostExploitation() {
        console.log('🔓 Post-exploitation activities...');
        
        // Data exfiltration simulation
        const sensitiveData = await this.locateSensitiveData();
        console.log(\`📁 Located \${sensitiveData.length} sensitive files\`);
        
        // Persistence mechanisms
        const persistence = await this.establishPersistence();
        console.log('🔒 Persistence mechanisms established');
        
        // Lateral movement
        const lateralTargets = await this.identifyLateralTargets();
        console.log(\`🎯 Identified \${lateralTargets.length} lateral movement targets\`);
        
        this.results.postExploitation = {
            data: sensitiveData,
            persistence: persistence,
            lateralMovement: lateralTargets
        };
    }

    generateReport() {
        const report = {
            target: this.target,
            timestamp: new Date().toISOString(),
            summary: {
                vulnerabilitiesFound: this.results.vulnerabilities.length,
                successfulExploits: this.results.exploits.length,
                riskLevel: this.calculateRiskLevel()
            },
            findings: this.results,
            recommendations: this.generateRecommendations()
        };
        
        console.log('📋 Penetration test report generated');
        return report;
    }
}

// Initialize penetration testing
const penTest = new PenetrationTester('target-system.local');
console.log('🚀 Penetration testing framework initialized');
`,
    `
// Advanced Malware Analysis Laboratory
class MalwareAnalyzer {
    constructor() {
        this.sandbox = new VirtualSandbox();
        this.staticAnalysis = new StaticAnalyzer();
        this.dynamicAnalysis = new DynamicAnalyzer();
        this.behaviorAnalysis = new BehaviorAnalyzer();
    }

    async analyzeSample(malwareSample) {
        console.log('🦠 Starting malware analysis...');
        
        // Static analysis phase
        console.log('📊 Performing static analysis...');
        const staticResults = await this.staticAnalysis.analyze(malwareSample);
        
        // File entropy analysis
        const entropy = this.calculateEntropy(malwareSample);
        console.log(\`📈 File entropy: \${entropy.toFixed(2)}\`);
        
        // String extraction
        const strings = this.extractStrings(malwareSample);
        console.log(\`🔤 Extracted \${strings.length} strings\`);
        
        // PE header analysis
        const peAnalysis = this.analyzePEHeader(malwareSample);
        console.log('🏗️ PE structure analyzed');
        
        // Dynamic analysis in sandbox
        console.log('🔬 Deploying to sandbox environment...');
        const sandboxResults = await this.sandbox.execute(malwareSample);
        
        // Network behavior monitoring
        const networkActivity = await this.monitorNetworkActivity();
        console.log(\`🌐 Network connections: \${networkActivity.connections.length}\`);
        
        // File system monitoring
        const fileSystemChanges = await this.monitorFileSystem();
        console.log(\`📁 File system changes: \${fileSystemChanges.length}\`);
        
        // Registry monitoring (Windows)
        const registryChanges = await this.monitorRegistry();
        console.log(\`🗃️ Registry modifications: \${registryChanges.length}\`);
        
        // Process behavior analysis
        const processTree = await this.analyzeProcessTree();
        console.log('🌳 Process tree analyzed');
        
        return this.generateAnalysisReport({
            static: staticResults,
            dynamic: sandboxResults,
            network: networkActivity,
            filesystem: fileSystemChanges,
            registry: registryChanges,
            processes: processTree
        });
    }

    generateThreatIntelligence(analysisResults) {
        console.log('🧠 Generating threat intelligence...');
        
        const indicators = this.extractIOCs(analysisResults);
        const yara_rules = this.generateYaraRules(analysisResults);
        const mitre_tactics = this.mapToMitreTactics(analysisResults);
        
        return {
            indicators_of_compromise: indicators,
            yara_signatures: yara_rules,
            mitre_attack_mapping: mitre_tactics,
            threat_classification: this.classifyThreat(analysisResults)
        };
    }
}

// Threat hunting operations
class ThreatHunter {
    constructor() {
        this.queries = new ThreatHuntingQueries();
        this.analytics = new BehaviorAnalytics();
    }

    async huntForThreats(environment) {
        console.log('🎯 Initiating threat hunting operation...');
        
        // Anomaly detection
        const anomalies = await this.detectAnomalies(environment);
        console.log(\`⚠️ Detected \${anomalies.length} anomalies\`);
        
        // IOC hunting
        const iocMatches = await this.huntForIOCs(environment);
        console.log(\`🔍 IOC matches found: \${iocMatches.length}\`);
        
        // Behavioral analysis
        const suspiciousBehavior = await this.analyzeBehavior(environment);
        console.log('🕵️ Behavioral analysis completed');
        
        return {
            anomalies: anomalies,
            ioc_matches: iocMatches,
            behavioral_indicators: suspiciousBehavior
        };
    }
}

console.log('🔬 Malware analysis laboratory online');
console.log('🎯 Threat hunting systems active');
`
];

let currentSnippetIndex = 0;
let enterCount = 0;
let backspaceCount = 0;
let codeIndex = 0;

function getRandomSnippet() {
    return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
}

function switchToNextSnippet() {
    currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
    codeIndex = 0;
    const codeDisplay = document.getElementById('codeDisplay');
    if (codeDisplay) {
        codeDisplay.textContent = '';
    }
}

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
    
    let charsToAdd = Math.floor(Math.random() * 4) + 2; // Random between 2-5 characters
    const currentSnippet = codeSnippets[currentSnippetIndex];

    if (event.key === 'Enter') {
        enterCount++;
        if (enterCount === 3) {
            enterCount = 0;
            switchToNextSnippet();
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
            switchToNextSnippet();
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Denied';
            document.getElementById('entryBox').style.color = '#ff0000';
        }
        return;
    }

    // Special key combinations for advanced effects
    if (event.ctrlKey && event.key === 'c') {
        // Simulate system breach
        codeDisplay.textContent += '\n\n🚨 SYSTEM BREACH DETECTED 🚨\n';
        codeDisplay.textContent += 'Initiating countermeasures...\n';
        codeDisplay.textContent += 'Firewall status: COMPROMISED\n';
        codeDisplay.textContent += 'Deploying honeypot...\n\n';
        return;
    }
    
    if (event.ctrlKey && event.key === 'x') {
        // Switch to next code snippet
        switchToNextSnippet();
        return;
    }

    if (codeIndex < currentSnippet.length) {
        let nextPart = currentSnippet.substring(codeIndex, codeIndex + charsToAdd);
        codeDisplay.textContent += nextPart;
        codeIndex += charsToAdd;
    } else {
        // Auto-switch to next snippet when current one is complete
        switchToNextSnippet();
    }
    
    // Add some random "glitch" effects
    if (Math.random() < 0.02) { // 2% chance
        const glitchChars = ['█', '▓', '▒', '░', '▄', '▀'];
        const glitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        codeDisplay.textContent += glitch;
        setTimeout(() => {
            codeDisplay.textContent = codeDisplay.textContent.slice(0, -1);
        }, 100);
    }
    
    // Occasionally add system messages
    if (Math.random() < 0.005) { // 0.5% chance
        const messages = [
            '\n[SYSTEM] Intrusion detected...\n',
            '\n[ALERT] Unauthorized access attempt\n',
            '\n[WARNING] Security protocol activated\n',
            '\n[INFO] Encrypting data streams...\n'
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];
        codeDisplay.textContent += message;
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
    showNotification('Help request submitted successfully! The community will help you soon.', 'success');
    
    loadOpinions();
});

function loadOpinions() {
    const opinionsList = document.getElementById('opinionsList');
    if (!opinionsList) return;
    
    opinionsList.innerHTML = '';
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    
    if (opinions.length === 0) {
        opinionsList.innerHTML = '<p class="no-opinions">No help requests yet. Be the first to ask for help!</p>';
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
        getMainPageArticles('hacking', 8).then(articles => {
            displayArticles(articles, contentSection);
        }).catch(error => {
            console.error('Error loading hacking news:', error);
            displayArticles(mockArticles.slice(0, 8), contentSection);
        });
    }
    
    if (contentCyberSection) {
        getMainPageArticles('cybersecurity', 8).then(articles => {
            displayArticles(articles, contentCyberSection);
        }).catch(error => {
            console.error('Error loading cybersecurity news:', error);
            displayArticles(mockArticles.slice(0, 8), contentCyberSection);
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