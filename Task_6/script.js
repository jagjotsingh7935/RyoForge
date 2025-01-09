// Display an alert when the page loads
window.onload = () => {
  alert("Welcome to my portfolio!");
};

// Toggle "About Me" section
const aboutMe = document.getElementById("aboutMe");
document.getElementById("toggleAbout").addEventListener("click", () => {
  aboutMe.classList.toggle("hidden");
});

// Toggle "Projects" section
const projects = document.getElementById("projects");
document.getElementById("toggleProjects").addEventListener("click", () => {
  projects.classList.toggle("hidden");
});

// Create an array of projects
const projectArray = [
  { title: "Project 1", description: "A cool project", date: "2025-0-04" },
  { title: "Project 2", description: "Another awesome project", date: "2023-06-15" },
];

const projectList = document.getElementById("projectList");

// Function to display projects
const displayProjects = () => {
  projectList.innerHTML = "";
  projectArray.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.textContent = project.title;
    projectDiv.addEventListener("mouseover", () => {
      alert(`Details:\n${project.description}\nDate: ${project.date}`);
    });
    projectList.appendChild(projectDiv);
  });
};
displayProjects();

// Add a new project
document.getElementById("addProject").addEventListener("click", () => {
  const newProject = {
    title: `Project ${projectArray.length + 1}`,
    description: "A newly added project",
    date: new Date().toISOString().split("T")[0],
  };
  projectArray.push(newProject);
  displayProjects();
});

// Form validation
const form = document.getElementById("contactForm");
const formAlert = document.getElementById("formAlert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    formAlert.classList.remove("hidden");
  } else {
    formAlert.classList.add("hidden");
    alert("Form submitted successfully!");
    form.reset();
  }
});
