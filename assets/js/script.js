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

// Dynamic loading or live updates for the Live Projects Section
document.addEventListener("DOMContentLoaded", () => {
    console.log("Live Projects Section Loaded");
    // Add any dynamic functionality here
});
// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Check if the user has a preferred theme
    const userPreference = localStorage.getItem("theme");
    if (userPreference === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Add event listener to toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Save user preference to localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});
// Handle Data Cleaning Tool
document.getElementById("data-cleaning-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = e.target.querySelector('input[type="file"]');
    const resultDiv = document.getElementById("cleaning-result");

    if (fileInput.files.length === 0) {
        resultDiv.textContent = "Please upload a CSV file.";
        return;
    }

    const formData = new FormData();
    formData.append("csv-file", fileInput.files[0]);

    try {
        const response = await fetch("/api/data-cleaning", {
            method: "POST",
            body: formData
        });
        const result = await response.json();
        resultDiv.innerHTML = `<p>Dataset cleaned successfully! Download your cleaned dataset <a href="${result.download_url}" target="_blank">here</a>.</p>`;
    } catch (error) {
        resultDiv.textContent = "An error occurred while cleaning the dataset.";
        console.error(error);
    }
});

// Handle Prediction Tool
document.getElementById("prediction-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputFeature = e.target.querySelector('input[name="input-feature"]').value.trim();
    const resultDiv = document.getElementById("prediction-result");

    if (!inputFeature) {
        resultDiv.textContent = "Please provide an input value.";
        return;
    }

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
