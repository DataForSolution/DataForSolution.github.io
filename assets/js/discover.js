document.addEventListener("DOMContentLoaded", async () => {

    const input = document.getElementById("knowledge-search");
    const button = document.getElementById("knowledge-search-btn");
    const results = document.getElementById("knowledge-results");

    if (!input || !button || !results) return;

    let knowledge = [];

    try {

        const response = await fetch("/assets/data/search-index.json");
        knowledge = await response.json();

    } catch (err) {

        results.innerHTML = "<p>Unable to load the knowledge index.</p>";
        console.error(err);
        return;

    }

    function searchPlatform() {

        const query = input.value.trim().toLowerCase();

        if (query === "") {

            results.innerHTML = "Start typing to explore the platform.";
            return;

        }

        const matches = knowledge.filter(item => {

            return (

                item.title.toLowerCase().includes(query)

                ||

                item.keywords.join(" ").toLowerCase().includes(query)

                ||

                item.category.toLowerCase().includes(query)

            );

        });

        if (matches.length === 0) {

            results.innerHTML = "<p>No results found.</p>";
            return;

        }

        results.innerHTML = matches.map(item => `

            <div class="discover-card">

                <h3>${item.title}</h3>

                <p><strong>${item.category}</strong></p>

                <p>${item.academy}</p>

                <a href="${item.url}">Open →</a>

            </div>

        `).join("");

    }

    button.addEventListener("click", searchPlatform);

    input.addEventListener("keyup", event => {

        if (event.key === "Enter") {

            searchPlatform();

        }

    });

});
