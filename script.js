
// Task 1 - Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
        themeBtn.textContent = "☀";
        themeBtn.title = "Light Mode";
        themeBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeBtn.textContent = "☾";
        themeBtn.title = "Dark Mode";
        themeBtn.setAttribute("aria-label", "Switch to dark mode");
    }

});

// Task 2 - Show More / Show Less
const aboutBtn = document.getElementById("aboutBtn");
const moreAbout = document.getElementById("moreAbout");

aboutBtn.addEventListener("click", function () {

    moreAbout.hidden = !moreAbout.hidden;

    const expanded = !moreAbout.hidden;

    if (expanded) {
        aboutBtn.textContent = "Show Less";
    } else {
        aboutBtn.textContent = "Show More";
    }

    aboutBtn.setAttribute("aria-expanded", String(expanded));

});

// Task 3 - Dynamic Projects
const projects = [
    {
        title: "Movie Review Sentiment Analysis",
        description: "Developed an NLP sentiment analysis model for movie reviews using text preprocessing, TF-IDF feature extraction, and a Linear SVM. The model's performance was evaluated using standard machine learning metrics.",
        category: "Programming",
        technologies: ["Python", "TF-IDF", "Linear SVM"],
        link: "https://github.com/reemsdiv/Movie-Reviews-Analysis"
    },

    {
        title: "Personal CV Website",
        description: "Created a responsive personal CV website using HTML and CSS, then enhanced it with interactive JavaScript DOM features.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: ""
    }
];

const projectContainer = document.getElementById("projectContainer");

function displayProjects(projectList) {

    // Clear old cards to prevent duplicates
    projectContainer.replaceChildren();

    projectList.forEach(function (project) {

        // Create project card
        const card = document.createElement("article");
        card.classList.add("project-card");

        // Create title
        const heading = document.createElement("h3");
        heading.textContent = project.title;

        // Create description
        const description = document.createElement("p");
        description.textContent = project.description;

        // Create category
        const category = document.createElement("p");
        category.textContent = "Category: " + project.category;

        // Create technologies
        const technologies = document.createElement("p");
        technologies.textContent =
            "Technologies: " + project.technologies.join(", ");

        // Add elements to card
        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(technologies);

        // Create link if available
        if (project.link) {

            const link = document.createElement("a");

            link.href = project.link;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View Project";

            card.appendChild(link);
        }

        // Add card to page
        projectContainer.appendChild(card);

    });

}

// Task 4 - Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.category;

        let filteredProjects;

        if (selectedCategory === "All") {

            filteredProjects = projects;

        } else {

            filteredProjects = projects.filter(function (project) {
                return project.category === selectedCategory;
            });

        }

        // Display matching projects
        displayProjects(filteredProjects);

        // Update active button
        filterButtons.forEach(function (filterButton) {

            const active = filterButton === button;

            filterButton.classList.toggle("active", active);

            filterButton.setAttribute(
                "aria-pressed",
                String(active)
            );

        });

    });

});

// Display all projects when the page loads
displayProjects(projects);

// Task 5 - Print / Save as PDF
const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
    window.print();
});
