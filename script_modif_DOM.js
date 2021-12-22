function changeTitles() {
  document.getElementsByTagName("h1")[0].innerHTML="Ce que j'ai appris avec Chris";
  document.getElementsByTagName("h1")[0].nextElementSibling.innerHTML="Dans un cadre de formation intensive, Chris m'aide à développer mes compétences";
}

changeTitles();

function changeCallToActions(){
    document.getElementsByTagName("h1")[0].nextElementSibling.nextElementSibling.querySelector("a").innerHTML="OK je veux tester";
    document.getElementsByTagName("h1")[0].nextElementSibling.nextElementSibling.querySelector("a").href="https://chrisb.fr";
    document.getElementsByTagName("h1")[0].nextElementSibling.nextElementSibling.querySelectorAll("a")[1].innerHTML="Non merci";
    document.getElementsByTagName("h1")[0].nextElementSibling.nextElementSibling.querySelectorAll("a")[1].href="https://www.pole-emploi.fr/accueil/";
}

changeCallToActions();

function changeLogoName(){
    document.getElementsByTagName("strong")[0].innerHTML="Chris est le meilleur formateur";
    document.getElementsByTagName("strong")[0].style.fontSize="2em";
}

changeLogoName();

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

function populateImages(){
    var inserer=document.querySelectorAll(".card img");
    for(var i=0; i<inserer.length; i++){
        inserer[i].src=imagesArray[i];
    }inserer[6].src="https://img.icons8.com/color/480/000000/heroku.png";
}

populateImages();

function deleteLastCards(){
    var sup=document.querySelectorAll(".card");
    for(var i=6; i<sup.length; i++){
        sup[i].remove();
    }
}

deleteLastCards();

function changeCardsText(){
    let description=[];

    let descriptionHtml=document.createElement("p");
    let texteHtml=document.createTextNode("L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web")
    descriptionHtml.appendChild(texteHtml);

    let descriptionCss=document.createElement("p");
    let texteCss=document.createTextNode("Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML")
    descriptionCss.appendChild(texteCss);

    let descriptionJs=document.createElement("p");
    let texteJs=document.createTextNode("JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype")
    descriptionJs.appendChild(texteJs);

    description.push(descriptionHtml);
    description.push(descriptionCss);
    description.push(descriptionJs);

    var changeCards=document.querySelectorAll(".card");

    for(i=0;i<description.length;i++){
        changeCards[i].childNodes[3].replaceChild(description[i],changeCards[i].childNodes[3].childNodes[1])
    }
}

changeCardsText();

function changeViewButtons(){
    var changeButton=document.getElementsByClassName("btn-outline-secondary");
    for(i=0;i<changeButton.length;i++){
        if(changeButton[i].innerHTML.includes("View")){
            changeButton[i].className="btn btn-sm btn-success";
        }
    }
}

changeViewButtons();