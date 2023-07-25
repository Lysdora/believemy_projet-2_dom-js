// Supprimer le div avec l'id #a-supprimer
const divAsupprimer = document.querySelector("#a-supprimer").remove();

//Créer un header

const header = document.createElement("header");
document.body.append(header);

//Créer un sous-header

const main = document.createElement("main");

document.body.append(main);

const ul = document.createElement("ul");
main.append(ul);

const li = document.createElement("li");
ul.append(li);

const li2 = document.createElement("li");
ul.append(li2);

// Créer un paragraphe
const paragraphe = document.createElement("p");

document.body.append(paragraphe);

const h1 = document.createElement("h1");
header.append(h1);

// styles

h1.textContent = "Bienvenue";
h1.style.textAlign = "center";
h1.style.color = "#fff";

header.style.backgroundColor = "#FFB07F";
header.style.padding = "3rem";

main.style.backgroundColor = "#F31559";

ul.style.display = "flex";
ul.style.padding = "2rem";
ul.style.listStyle = "none";
ul.style.color = "#fff";
ul.style.fontWeight = "bold";
ul.style.fontSize = "1.1rem";
li.textContent = "Accueil / ";
li2.textContent = "Une autre page";

paragraphe.textContent = "Ceci est un paragraphe créé avec JavaScript !";

paragraphe.style.marginLeft = "0.8rem";
