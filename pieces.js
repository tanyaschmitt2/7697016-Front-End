// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//Created new DOM elements
const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune categorie)";

//Creation of DOM elements for the exercise
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";


//Attached the DOM elements to the rest of the document
const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

// Ajout des element au DOM pour l'exercice
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);