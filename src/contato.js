const toPort = document.getElementById("port");
const toEng = document.getElementById("eng");

const proj = document.getElementById("proj");
const contact = document.getElementById("contact");
const title = document.getElementById("title");

let dict = {
    eng: {
        proj: "Projects",
        contact: "Contact",
        title: "📫 Wanna contact me?"
    },
    pt: {
        proj: "Projetos",
        contact: "Contato",
        title: "📫 Quer entrar em contato comigo?"
    }
}

//Start
let lang = window.localStorage.getItem('lang');
if(lang == "pt"){
    proj.textContent = dict.pt.proj;
    contact.textContent = dict.pt.contact;
    title.textContent = dict.pt.title;
}
else{
    proj.textContent = dict.eng.proj;
    contact.textContent = dict.eng.contact;
    title.textContent = dict.eng.title;
}


//Switcher
toPort.addEventListener("click", () => {
    window.localStorage.setItem('lang', 'pt');
    proj.textContent = dict.pt.proj;
    contact.textContent = dict.pt.contact;
    title.textContent = dict.pt.title;
    return;
})

toEng.addEventListener("click", () => {
    window.localStorage.setItem('lang', 'en');
    proj.textContent = dict.eng.proj;
    contact.textContent = dict.eng.contact;
    title.textContent = dict.eng.title;
    return;
})