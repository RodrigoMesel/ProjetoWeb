let lang = "pt";

const toPort = document.getElementById("port");
const toEng = document.getElementById("eng");

const proj = document.getElementById("proj");
const contact = document.getElementById("contact");
const title = document.getElementById("title");
const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");

let dict = {
    eng: {
        proj: "Projects",
        contact: "Contact",
        title: "Hi! I'm Rodrigo Mesel 👋",
        desc1: "💻 I'm a 4th semester student of computer science at the informatic center of the Federal University of Pernambuco.",
        desc2: "👥 I was a teaching assistant for 1 semester of introduction to programming course, and for 2 semesters of algorithms and data structure course.",
        desc3: "📚 I am currently deepening my knowledge in backend, database and artificial intelligence. And for that, I'm improving myself in languages like SQL, MongoDB, Angular and Python.",
    },
    pt: {
        proj: "Projetos",
        contact: "Contato",
        title: "Olá! Sou Rodrigo Mesel 👋",
        desc1: "💻 Sou um estudante do 4º período de ciência da computação no centro de informática da Universidade Federal de Pernambuco.",
        desc2: "👥 Fui monitor por 1 período da cadeira introdução a programação, e por 2 da cadeira algoritmos e estrutura de dados.",
        desc3: "📚 Atualmente estou aprofundando meus conhecimentos em backend, banco de dados e inteligência artifical. Para isso, estou me aprimorando em linguagens como SQL, MongoDB, Angular e Python."
    }
}

toPort.addEventListener("click", () => {
    lang = "pt";
    proj.textContent = dict.pt.proj;
    contact.textContent = dict.pt.contact;
    title.textContent = dict.pt.title;
    desc1.textContent = dict.pt.desc1;
    desc2.textContent = dict.pt.desc2;
    desc3.textContent = dict.pt.desc3;
    return;
})

toEng.addEventListener("click", () => {
    lang = "en";
    proj.textContent = dict.eng.proj;
    contact.textContent = dict.eng.contact;
    title.textContent = dict.eng.title;
    desc1.textContent = dict.eng.desc1;
    desc2.textContent = dict.eng.desc2;
    desc3.textContent = dict.eng.desc3;
    return;
})