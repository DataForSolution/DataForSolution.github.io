// Show & Hide Sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Search Functionality
function searchSite() {
    let query = document.getElementById("search-input").value.toLowerCase();
    let sections = document.querySelectorAll("section, .project-card");

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
    return false;
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
}

if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}

// Scroll to Top Button
window.onscroll = function() {
    document.getElementById("back-to-top").style.display = (window.scrollY > 200) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
