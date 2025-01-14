// SHOW SECTION FUNCTION (FIXED)
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        window.scrollTo({ top: selectedSection.offsetTop - 80, behavior: 'smooth' });
    }
}

// FIX SERVICE DETAILS NOT DISPLAYING
const serviceDescriptions = {
    "business-analytics": "We provide insights to drive business decisions with AI-driven data analysis.",
    "data-entry": "Accurate and efficient data entry services to ensure reliable records.",
    "data-reporting": "Custom data reports and visualization for effective decision-making.",
    "strategic-planning": "Helping businesses align data strategies with business goals.",
    "healthcare-consulting": "Providing AI-powered solutions for healthcare analytics and imaging.",
    "financial-analysis": "Data-driven financial insights to optimize budgeting and investments.",
    "market-research": "Market trend analysis and consumer behavior insights."
};

// FUNCTION TO SHOW SERVICE DETAILS
function showServiceDetails(serviceId) {
    const detailsDiv = document.getElementById("service-details");
    if (detailsDiv) {
        detailsDiv.innerHTML = `<p>${serviceDescriptions[serviceId]}</p>`;
        detailsDiv.style.display = "block";
    }
}
