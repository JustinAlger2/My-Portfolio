const projects = [
    {
        title: "My First Project",
        url: "https://justinalger.huskisites.com/webm1001/program/Portfolio/part5/Portfolio/Portfolio.html",
        description: "My first project is the first project I ever made, and it's cool because it taught me the basics of programming."
    },
    {
        title: "Weather App",
        url: "#",
        description: "A weather application that fetches real-time data from a weather API to display current weather conditions."
    },
    {
        title: "Portfolio Website",
        url: "#",
        description: "An interactive portfolio website to showcase my projects and skills, built using HTML, CSS, and JavaScript."
    }
];

const projectList = document.getElementById("project-list");
projects.forEach(project => {
    const listItem = document.createElement('li');
    listItem.className = 'project';
    const title = document.createElement('h2');
    const link = document.createElement('a');
    link.href = project.url;
    link.textContent = project.title;
    title.appendChild(link);
    const description = document.createElement('p');
    description.textContent = project.description;
    listItem.appendChild(title);
    listItem.appendChild(description);
    projectList.appendChild(listItem);
});