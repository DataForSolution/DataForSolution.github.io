// FUNCTION TO SHOW SPECIFIC SECTIONS
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        window.scrollTo({ top: selectedSection.offsetTop - 80, behavior: 'smooth' });
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }
}

// SERVICE DESCRIPTIONS OBJECT
const serviceDescriptions = {
    "business-analytics": "We provide insights to drive business decisions with AI-driven data analysis.",
    "data-entry": "Accurate and efficient data entry services to ensure reliable records.",
    "data-reporting": "Custom data reports and visualization for effective decision-making.",
    "strategic-planning": "Helping businesses align data strategies with business goals.",
    "healthcare-consulting": "Providing AI-powered solutions for healthcare analytics and imaging.",
    "financial-analysis": "Data-driven financial insights to optimize budgeting and investments.",
    "market-research": "Market trend analysis and consumer behavior insights."
};

// FUNCTION TO DISPLAY SERVICE DETAILS
function showServiceDetails(serviceId) {
    const detailsDiv = document.getElementById("service-details");
    if (detailsDiv) {
        if (serviceDescriptions[serviceId]) {
            detailsDiv.innerHTML = `<p>${serviceDescriptions[serviceId]}</p>`;
            detailsDiv.style.display = "block";
        } else {
            detailsDiv.innerHTML = `<p>Details for this service are not available.</p>`;
            detailsDiv.style.display = "block";
            console.warn(`Service ID '${serviceId}' not found in serviceDescriptions.`);
        }
    } else {
        console.error("Element with ID 'service-details' not found.");
    }
}

// EVENT LISTENER FOR SERVICE SELECTION
document.addEventListener('click', event => {
    if (event.target && event.target.dataset.serviceId) {
        showServiceDetails(event.target.dataset.serviceId);
    }
});

// HIGHLIGHT ACTIVE MENU ITEM
function highlightActiveMenuItem() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// SEARCH FUNCTIONALITY
function initializeSearchFeature() {
    const searchForm = document.getElementById('menu-search-form');
    const searchInput = document.getElementById('menu-search-input');

    if (!searchForm || !searchInput) {
        console.error("Search form or input element not found.");
        return;
    }

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();

        if (!query) {
            alert('Please enter a search term.');
            return;
        }

        const pages = [
            { title: "Services", url: "/services/", content: "Business Analytics, Data Entry, Data Reporting, Strategic Planning, Healthcare Consulting, Financial Analysis" },
            { title: "Projects", url: "/projects/", content: "Chest Cancer Detection, Adversarial Attacks, Support Vector Machine" },
            { title: "Contact", url: "/contact/", content: "kent.sew@gmail.com, GitHub DataForSolution" },
            { title: "Blog", url: "/blog/", content: "Latest articles on AI and Data Science" },
            { title: "About", url: "/about/", content: "Lissan, Data Scientist, PET/CT Specialist, AI, healthcare, data science" }
        ];

        const results = pages.filter(page => page.content.toLowerCase().includes(query));
        displaySearchResults(results);
    });
}

function displaySearchResults(results) {
    let resultsContainer = document.getElementById('search-results');

    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'search-results';
        resultsContainer.style.position = 'absolute';
        resultsContainer.style.top = '60px';
        resultsContainer.style.right = '20px';
        resultsContainer.style.width = '300px';
        resultsContainer.style.background = '#222';
        resultsContainer.style.padding = '15px';
        resultsContainer.style.borderRadius = '5px';
        resultsContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        resultsContainer.style.zIndex = '1000';
        document.body.appendChild(resultsContainer);
    }

    resultsContainer.innerHTML = results.length
        ? results.map(result => `<p><a href="${result.url}" style="color: #4CAF50; text-decoration: none;">${result.title}</a></p>`).join('')
        : '<p style="color: lightgray;">No results found.</p>';

    resultsContainer.style.display = 'block';
}

// RUN HIGHLIGHT AND SEARCH FUNCTIONALITY ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveMenuItem();
    initializeSearchFeature();
});

// Ensure YouTube iframe is responsive and centered
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector(".youtube-embed-container iframe");
    if (iframe) {
        iframe.style.display = "block";
        iframe.style.margin = "0 auto";
    }
});

// CHAT FUNCTIONALITY
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatDisplay = document.querySelector("#chat-display");

chatForm.addEventListener("submit", async e => {
    e.preventDefault();

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatDisplay.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = "";

    try {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        if (data.reply) {
            chatDisplay.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
        } else {
            chatDisplay.innerHTML += `<p><strong>Bot:</strong> Something went wrong!</p>`;
        }
    } catch (error) {
        console.error("Error:", error);
        chatDisplay.innerHTML += `<p><strong>Bot:</strong> Unable to connect to the server.</p>`;
    }
});
