let lang = "pt";

const toPort = document.getElementById("port");
const toEng = document.getElementById("eng");

const proj = document.getElementById("proj");
const contact = document.getElementById("contact");
const title = document.getElementById("title");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const git = document.getElementById("git")

let dict = {
    eng: {
        proj: "Projects",
        contact: "Contact",
        title: "My projects 📄",
        first: "This first project was a work from the Introduction to Computing course, in which I had my first contact with HTML and CSS. It was my first site about me.",
        second: "AluCar is a car rental website, it was a group project of the Software and Systems Engineering course. In this project I developed many skills with HTML, SCSS and TypeScript.",
        third: "This last project was a game developed in python in the introduction to programming chair.",
        git: "You can check out these projects and others on my github:"
    },
    pt: {
        proj: "Projetos",
        contact: "Contato",
        title: "Meus projetos 📄",
        first: "Este primeiro projeto foi um trabalho da cadeira introdução a computação, em que tive o meu primeiro contato com HTML e CSS. Foi meu primeiro site sobre mim.",
        second: "AluCar é um site de uma locadora de carros, foi um projeto em grupo da cadeira Engenharia de software e sistemas. Nesse projeto desenvolvi muitas habilidades com HTML, SCSS e TypeScript.",
        third: "Este último projeto foi um jogo desenvolvido em python na cadeira introdução a programação.",
        git: "Você pode conferir esses projestos e outros no meu github:"
    }
}

toPort.addEventListener("click", () => {
    lang = "pt";
    proj.textContent = dict.pt.proj;
    contact.textContent = dict.pt.contact;
    title.textContent = dict.pt.title;
    first.textContent = dict.pt.first;
    second.textContent = dict.pt.second;
    third.textContent = dict.pt.third;
    git.textContent = dict.pt.git;
    return;
})

toEng.addEventListener("click", () => {
    lang = "en";
    proj.textContent = dict.eng.proj;
    contact.textContent = dict.eng.contact;
    title.textContent = dict.eng.title;
    first.textContent = dict.eng.first;
    second.textContent = dict.eng.second;
    third.textContent = dict.eng.third;
    git.textContent = dict.eng.git;
    return;
})