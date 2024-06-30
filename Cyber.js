document.addEventListener("DOMContentLoaded", function() {
    const contentSection = document.getElementById('content');
    const url = `https://newsapi.org/v2/everything?q=Cyber security&apiKey=c18dd1e018524cd285999d0ca8f582fc`;

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

    fetchArticles();

    // Update every 5 minutes
    setInterval(fetchArticles, 1 * 60 * 1000);
});
