document.getElementById("selector1").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Hacking&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    
    
    document.getElementById("selector2").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=cyber-security&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector3").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=smartphone&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector4").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Tech-Scams&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector5").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Gaming&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector6").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Blockchain+and+cryptocurrency&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector7").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=AI+and+ML&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    document.getElementById("selector8").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=AI+in+Gaming&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector9").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Neuralink&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector10").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Telecommunication+and+networking&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };
    
    document.getElementById("selector11").onclick = function(){
    const contentSection = document.getElementById('content-loaded');
    const url = `https://newsapi.org/v2/everything?q=Metaverse+and+Virtual+Reality&apiKey=c18dd1e018524cd285999d0ca8f582fc`;
    
    async function fetchArticles() {
        try {
            const response = await fetch(url);
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }
    
            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }
    
            contentSection.innerHTML = '';
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
        
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
    if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
        } else {
        element.classList.remove("fade-in-up");
        }
    });
    });
    }
    
    fetchArticles();
    
    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
    };


    const codeSnippet = `
function fetchData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => reject(new Error(xhr.statusText));
        xhr.send();
    });
}

async function processData(url) {
    try {
        const data = await fetchData(url);
        console.log("Data received:", data);
        // Process the data
        data.forEach(item => {
            console.log("Processing item:", item);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

processData("https://api.example.com/data");

// Python Code
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3,6,8,10,1,2,1]))

// More JavaScript
function encrypt(text, key) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) ^ key);
    }
    return encrypted;
}

const secretMessage = "Secret Message";
const key = 42;
const encryptedMessage = encrypt(secretMessage, key);
console.log("Encrypted Message:", encryptedMessage);

const decryptedMessage = encrypt(encryptedMessage, key);
console.log("Decrypted Message:", decryptedMessage);

// Pseudo Code for hacking simulation
initialize_hack_module();
while (target_is_online()) {
    exploit_vulnerability();
    if (access_granted()) {
        retrieve_sensitive_data();
        log_activity();
        cover_tracks();
    } else {
        attempt_bypass();
    }
    wait_for_next_cycle();
}

shutdown_hack_module();

// C Code for variety
#include <stdio.h>

void hack_function() {
    printf("Hacking in progress...\\n");
    for (int i = 0; i < 10; i++) {
        printf("Step %d complete\\n", i+1);
    }
    printf("Hack successful!\\n");
}

int main() {
    hack_function();
    return 0;
}

// More JavaScript for the end
(function() {
    let hackTimer = setInterval(() => {
        console.log("Hacking in progress...");
    }, 1000);

    setTimeout(() => {
        clearInterval(hackTimer);
        console.log("Hack complete.");
    }, 10000);
})();
`;

let enterCount = 0;
let backspaceCount = 0;
let codeIndex = 0;


document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('container').style.display = 'flex';
    document.getElementById('entryBox').value = '';
    document.getElementById('entryBox').placeholder = 'This Site is not meant for Mobile, Please ';
    enterCount = 0;
    backspaceCount = 0;
});

document.addEventListener('keydown', function(event) {
    let codeDisplay = document.getElementById('codeDisplay');
    let charsToAdd = 4;

    if (event.key === 'Enter') {
        enterCount++;
        if (enterCount === 3) {
            enterCount = 0;
            document.getElementById('overlay').style.display = 'flex';
            document.getElementById('container').style.display = 'none';
            document.getElementById('entryBox').value = 'Access Granted';
            document.getElementById('entryBox').style.color = 'green';
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
            document.getElementById('entryBox').style.color = 'red';
        }
        return;
    }

    if (codeIndex < codeSnippet.length) {
        let nextPart = codeSnippet.substring(codeIndex, codeIndex + charsToAdd);
        codeDisplay.textContent += nextPart;
        codeIndex += charsToAdd;
    } else {
        codeIndex = 0; // Reset codeIndex to start from the beginning of the code snippet
    }
});
window.setInterval(function() {
    var elem = codeDisplay
    elem.scrollTop = elem.scrollHeight;
  }, 0);
// Handle icon clicks to open password cracker
document.getElementById('icon1').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
document.getElementById('icon2').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
document.getElementById('icon3').addEventListener('click', function() {
    document.getElementById('passwordCracker').classList.remove('hidden');
});
  

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
}
// Handle password cracking
document.getElementById('crackButton').addEventListener('click', function() {
    let passwordInput = document.getElementById('passwordInput').value;
    let crackerOutput = document.getElementById('crackerOutput');

    crackerOutput.textContent = 'Cracking password...\n';
    

    // Simulate password cracking process
    setTimeout(() => {
        crackerOutput.textContent += `Password cracked: ${generatePassword()}\n`;
    }, 2000); // Simulate delay for password cracking
});

window.onload = function(){
    document.getElementById('close').onclick = function(){
        
        return false;
    };
};

document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const person = document.getElementById('person').value;
    const opinion = document.getElementById('opinion').value;

    const opinionObject = { name, person, opinion };
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.push(opinionObject);
    localStorage.setItem('opinions', JSON.stringify(opinions));

    loadOpinions();
});

function loadOpinions() {
    const opinionsList = document.getElementById('opinionsList');
    opinionsList.innerHTML = '';
    const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
    opinions.forEach(opinion => {
        const opinionDiv = document.createElement('div');
        opinionDiv.classList.add('opinion');
        opinionDiv.innerHTML = `<strong>${opinion.person}</strong><p>${opinion.opinion}</p>`;
        opinionsList.appendChild(opinionDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadOpinions);

document.addEventListener("DOMContentLoaded", function() {
    const contentSection = document.getElementById('content-cyber');
    const url = `https://newsapi.org/v2/everything?q=cyber-security&apiKey=c18dd1e018524cd285999d0ca8f582fc`;

    async function fetchArticles() {
        try {
            const response = await fetch(url);

            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }

            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }

            contentSection.innerHTML = '';
            data.articles.slice(0, 4).forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
     
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}
   
    fetchArticles();

    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
});


document.addEventListener("DOMContentLoaded", function() {
    const contentSection = document.getElementById('content');
    const url = `https://newsapi.org/v2/everything?q=hacking&apiKey=c18dd1e018524cd285999d0ca8f582fc`;

    async function fetchArticles() {
        try {
            const response = await fetch(url);

            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Check if the API response contains errors
            if (data.status !== "ok") {
                throw new Error(`API error! status: ${data.status}, message: ${data.message}`);
            }

            if (data.articles.length === 0) {
                throw new Error('No articles found.');
            }

            contentSection.innerHTML = '';
            data.articles.slice(0, 4).forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                contentSection.appendChild(articleElement);
            });
        } catch (error) {
            contentSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error('Error fetching articles:', error);
        }
    }
     
    const elementsToFadeInUpOnScroll = document.querySelectorAll("article")
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}
   
    fetchArticles();

    // Update every 5 minutes
    setInterval(fetchArticles,5 * 60 * 1000);
});


