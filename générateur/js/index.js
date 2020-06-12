//appel des fichiers json
const fr = ('js/citations.json')
const en = ('js/quotes.json')

// variables pour récupérer depuis le fichier html les composants :
let sujet = ""
let verbe= ""
let nom = ""
let btn = document.getElementById('btn')
let phr = document.getElementById('phrase')
let number = document.getElementById('number')
let citations = []  //mettre les données dans un tableau array 

// événément du bouton fr :
btn.addEventListener('click', updatePage)

//if button fr

//récupérer toutes les citations depuis le lien json :
fetch(fr).then((data) => {
    data.json().then((data) => {
        citations = data

        //affichage du fichier citations.json :
        console.log(citations) 
        
    })
})

//if btn en

// événément du bouton en :
btnen.addEventListener('click', quotes)

fetch(en).then((data) => {
    data.json().then((data) => {
        quotes = data

        //affichage du fichier quotes.json :
        console.log(quotes) 
        
    })
})



//bouton fr :
function updatePage() {
    //for(i=1,i<=nbcitation,i++)

    //choix au hasard d'une citation parmis la liste :
    let random = Math.floor(Math.random() * (citations.length - 0))
    let randomSujet = citations[random]
    let random2 = Math.floor(Math.random() * (citations.length - 0))
    let randomVerbe = citations[random2]
    let random3 = Math.floor(Math.random() * (citations.length - 0))
    let randomNom = citations[random3]

    console.log(randomSujet)

    //modifie le contenu de la balise + concaténation :
    phr.innerText=randomSujet['sujet']+" "+randomVerbe['verbe']+" "+randomNom['nom']
}

//bouton english :
function quotes() {
    //for(i=1,i<=nbcitation,i++)

    let random = Math.floor(Math.random() * (quotes.length - 0))
    let randomSujet = quotes[random]
    let random2 = Math.floor(Math.random() * (quotes.length - 0))
    let randomVerbe = quotes[random2]
    let random3 = Math.floor(Math.random() * (quotes.length - 0))
    let randomNom = quotes[random3]

    console.log(randomSujet)

    phr.innerText=randomSujet['sujet']+" "+randomVerbe['verbe']+" "+randomNom['nom']
}

//nettois les phrases avant d'en gÃ©nÃ©rer de nouvelles
phrase = document.querySelector("phrase").value;        //reprend le theme choisis aprÃ¨s le click
    phrase = document.getElementById("number").value;   //reprend le nombre choisis aprÃ¨s le click
    while (importSentence.firstChild) {
        importSentence.removeChild(importSentence.firstChild);
} 


//boucle pour générer le bon nombre de phrases :
for (let x = 0; x < number; x++) {
    let space = document.createElement("br");
    let newSentence = document.createTextNode(randomSentence());
    importSentence.appendChild(newSentence);    //imprime la nouvelle phrase
    importSentence.appendChild(space);          //imprime un retour à  la ligne
}   