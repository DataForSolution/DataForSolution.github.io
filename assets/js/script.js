// FUNCTION TO SHOW SPECIFIC SECTIONS
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        // Scroll to the selected section smoothly, accounting for fixed navigation
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
            // Show the corresponding service description
            detailsDiv.innerHTML = `<p>${serviceDescriptions[serviceId]}</p>`;
            detailsDiv.style.display = "block";
        } else {
            // Show a warning if the service ID is not found
            detailsDiv.innerHTML = `<p>Details for this service are not available.</p>`;
            detailsDiv.style.display = "block";
            console.warn(`Service ID '${serviceId}' not found in serviceDescriptions.`);
        }
    } else {
        console.error("Element with ID 'service-details' not found.");
    }
}

// EVENT LISTENER FOR SERVICE SELECTION (OPTIONAL FEATURE)
document.addEventListener('click', (event) => {
    if (event.target && event.target.dataset.serviceId) {
        showServiceDetails(event.target.dataset.serviceId);
    }
});
