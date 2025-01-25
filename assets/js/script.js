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

// FAQ CHATBOT FUNCTIONALITY
document.getElementById("faq-chat-submit").addEventListener("click", async () => {
    const input = document.getElementById("faq-chat-input").value.trim();
    const display = document.getElementById("faq-chat-display");

    if (!input) return;

    const userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>You:</strong> ${input}`;
    display.appendChild(userMessage);

    try {
        const response = await fetch("http://localhost:3000/faq-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: input })
        });
        const data = await response.json();

        const botMessage = document.createElement("p");
        botMessage.innerHTML = `<strong>Bot:</strong> ${data.answer || "I'm sorry, I don't have an answer for that."}`;
        display.appendChild(botMessage);
    } catch (error) {
        console.error("Error:", error);
        const botMessage = document.createElement("p");
        botMessage.innerHTML = `<strong>Bot:</strong> Unable to process your request right now.`;
        display.appendChild(botMessage);
    }

    document.getElementById("faq-chat-input").value = "";
});

// RECOMMENDATION ENGINE
document.addEventListener("DOMContentLoaded", () => {
    const recommendationList = document.getElementById("recommendation-list");

    const recommendations = [
        { title: "Getting Started with AI", url: "/blog/ai-intro" },
        { title: "Learn About Our Data Science Projects", url: "/projects" },
        { title: "Check Out Our Services", url: "/services" },
    ];

    recommendations.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        recommendationList.appendChild(listItem);
    });
});

// PLOTLY VISUALIZATION INITIALIZATION
function initializePlotly() {
    const data = {
        x: ['2020', '2021', '2022', '2023', '2024'],
        y: [100, 150, 200, 250, 300],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' }
    };

    const layout = {
        title: 'Trend Prediction',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Value' }
    };

    Plotly.newPlot('chart-container', [data], layout);
}

// RUN FUNCTIONALITIES ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveMenuItem();
    initializeSearchFeature();
    initializePlotly();
});
// FUNCTION TO FILTER RESOURCES
function filterResources(category) {
    const allCards = document.querySelectorAll('.resource-card');

    allCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// FUNCTION TO TOGGLE RESOURCE DETAILS
function toggleResourceDetails(event) {
    const target = event.target.closest('.resource-card');
    if (target) {
        const details = target.querySelector('.resource-details');
        if (details) {
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        }
    }
}

// EVENT LISTENERS FOR RESOURCE INTERACTIONS
document.addEventListener('DOMContentLoaded', () => {
    // Attach click listener to filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.dataset.category;
            filterResources(category);
        });
    });

    // Attach click listener to resource cards for toggling details
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('click', toggleResourceDetails);
    });
});
