// Show/Hide Back-to-Top Button
window.onscroll = function () {
    let backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        backToTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form Submission Alert
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.onsubmit = function (event) {
            event.preventDefault();
            alert("Thank you! Your message has been sent.");
        };
    }
});

// Function to Show Selected Section
function showSection(sectionId) {
    // Hide only direct sections inside <body> to prevent breaking nested elements
    document.querySelectorAll("body > section").forEach(section => {
        section.style.display = "none";
    });

    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";

        // Smooth scroll to section with extra space for visibility
        window.scrollTo({
            top: selectedSection.offsetTop - 80, // Adjust for fixed menu
            behavior: "smooth"
        });
    }
}

// Search Functionality
function searchSite() {
    let query = document.getElementById("search-input").value.toLowerCase();
    let sections = document.querySelectorAll("body > section");
    let found = false;

    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.style.display = "block";
            found = true;
        } else {
            section.style.display = "none";
        }
    });

    if (!found) {
        alert("No results found.");
    }

    return false; // Prevent form submission
}

// Service Details Data
const serviceDescriptions = {
    "business-analytics": "Helping businesses make data-driven decisions.",
    "data-entry": "Accurate and efficient data input for better management.",
    "data-reporting": "Generating insightful reports for better analysis.",
    "strategic-planning": "Long-term planning to achieve business success.",
    "healthcare-consulting": "Providing AI-driven insights for healthcare improvements.",
    "financial-analysis": "In-depth financial evaluation for informed decision-making.",
    "financial-reporting": "Preparing professional reports for financial transparency.",
    "market-research": "Researching market trends to help business growth.",
    "online-research": "Gathering online insights for industry trends."
};

// Function to Show Service Details
function showServiceDetails(serviceId) {
    const detailsDiv = document.getElementById("service-details");
    if (detailsDiv) {
        detailsDiv.innerHTML = `<p>${serviceDescriptions[serviceId]}</p>`;
        detailsDiv.style.display = "block"; // Make it visible
    }
}

// Typing Effect for Welcome Message
document.addEventListener("DOMContentLoaded", function () {
    let text = "Welcome to LLmachine";
    let i = 0;

    function typeWriter() {
        let textContainer = document.querySelector(".typing-text");
        if (textContainer && i < text.length) {
            textContainer.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Simulate AI stats update
    setInterval(() => {
        let accuracyElement = document.getElementById("ai-accuracy");
        let modelsElement = document.getElementById("ai-models");
        let dataElement = document.getElementById("ai-data");

        if (accuracyElement) accuracyElement.textContent = (97.5 + Math.random() * 0.5).toFixed(1) + "%";
        if (modelsElement) modelsElement.textContent = Math.floor(1200 + Math.random() * 50);
        if (dataElement) dataElement.textContent = (5 + Math.random()).toFixed(1) + "TB+";
    }, 3000);
});

// AI Chatbot Integration
document.addEventListener("DOMContentLoaded", function () {
    let askAIForm = document.getElementById("ask-ai-form");
    if (askAIForm) {
        askAIForm.onsubmit = async function (event) {
            event.preventDefault();

            let userInput = document.getElementById("ask-ai-input").value.trim();
            let responseDiv = document.getElementById("ai-response");

            if (!userInput) {
                responseDiv.innerHTML = "⚠️ Please enter a question.";
                return;
            }

            responseDiv.innerHTML = "Thinking... ⏳"; // Show loading message

            // Fetch API Key from Local Storage
            const apiKey = localStorage.getItem("OPENAI_KEY");
            if (!apiKey) {
                responseDiv.innerHTML = "⚠️ API Key Missing! Set it in LocalStorage.";
                return;
            }

            // OpenAI API Call
            const url = "https://api.openai.com/v1/chat/completions";
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            };

            const body = JSON.stringify({
                model: "gpt-3.5-turbo", // Change to "gpt-4" if you have access
                messages: [{ role: "user", content: userInput }],
                max_tokens: 200
            });

            try {
                const response = await fetch(url, { method: "POST", headers, body });
                const data = await response.json();

                if (data.choices && data.choices.length > 0) {
                    responseDiv.innerHTML = `<strong>🤖 AI:</strong> ${data.choices[0].message.content}`;
                } else {
                    responseDiv.innerHTML = "⚠️ AI could not generate a response.";
                }
            } catch (error) {
                responseDiv.innerHTML = "❌ Error connecting to AI.";
                console.error("AI API Error:", error);
            }

            // Clear input after submitting
            document.getElementById("ask-ai-input").value = "";
        };
    }
});
