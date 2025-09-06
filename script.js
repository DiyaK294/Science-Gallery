let scientists = [
    {
        name: "Albert Einstein",
        field: "Physics",
        image: "https://example.com/einstein.jpg",
        bio: "Developed the theory of relativity."
    },
    {
        name: "Marie Curie",        
        field: "Chemistry",
        image: "https://example.com/curie.jpg",
        bio: "Pioneered research on radioactivity."
    },
    {
        name: "Isaac Newton",
        field: "Physics",
        image: "https://example.com/newton.jpg",
        bio: "Formulated the laws of motion and universal gravitation."
    },
    {
        name: "Charles Darwin",
        field: "Biology",
        image: "https://example.com/darwin.jpg",
        bio: "Developed the theory of evolution by natural selection."
    }
];

function filterScientists() {
    const searchBar = document.getElementById("searchBar");
    const filter = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        if (name.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}