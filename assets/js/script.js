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
    if (!detailsDiv) return console.error("Element with ID 'service-details' not found.");

    detailsDiv.innerHTML = serviceDescriptions[serviceId] 
        ? `<p>${serviceDescriptions[serviceId]}</p>` 
        : `<p>Details for this service are not available.</p>`;

    detailsDiv.style.display = "block";
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

    if (!searchForm || !searchInput) return console.error("Search form or input element not found.");

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return alert('Please enter a search term.');

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
        document.body.appendChild(resultsContainer);
    }

    resultsContainer.innerHTML = results.length
        ? results.map(result => `<p><a href="${result.url}" style="color: #4CAF50;">${result.title}</a></p>`).join('')
        : '<p style="color: lightgray;">No results found.</p>';

    resultsContainer.style.display = 'block';
}

// DARK MODE TOGGLE FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (!darkModeToggle) return;

    const userPreference = localStorage.getItem("theme");
    if (userPreference === "dark") document.body.classList.add("dark-mode");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
});

// HANDLE PREDICTION TOOL
document.addEventListener("DOMContentLoaded", () => {
    const predictionForm = document.getElementById("prediction-form");
    if (!predictionForm) return;

    predictionForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const inputFeature = predictionForm.querySelector('input[name="input-feature"]').value.trim();
        const resultDiv = document.getElementById("prediction-result");

        if (!inputFeature) return resultDiv.textContent = "Please provide an input value.";

        try {
            const response = await fetch("/api/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ feature: inputFeature })
            });
            const result = await response.json();
            resultDiv.innerHTML = `<p>Prediction: ${result.prediction}</p>`;
        } catch (error) {
            resultDiv.textContent = "An error occurred while generating the prediction.";
            console.error(error);
        }
    });
});

// SUBSCRIPTION MODAL FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
    const readButtons = document.querySelectorAll('.read-book-btn');
    const modal = document.getElementById('subscription-modal');
    const closeModal = document.getElementById('close-modal');
    let selectedBookUrl = null;

    if (!modal || !closeModal) return;

    readButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedBookUrl = button.getAttribute('data-book-url');
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => modal.style.display = 'none');

    document.getElementById('subscription-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing! Redirecting to the book...');
            modal.style.display = 'none';
            if (selectedBookUrl) window.open(selectedBookUrl, '_blank');
        }
    });
});

// HANDLE QUIZZES AND CHALLENGES
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.quiz-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const quizId = button.dataset.quizId;
            const response = await fetch(`/quiz?quiz_id=${quizId}`);
            const data = await response.json();
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = `<h3>${data.title}</h3>` +
                data.questions.map((q, i) => `<p><strong>${i + 1}. ${q.question}</strong></p>`).join('');
        });
    });
});

// INITIALIZE SEARCH AND HIGHLIGHT MENU ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    initializeSearchFeature();
    highlightActiveMenuItem();
});
