//appel des fichiers json :
const fr = ('js/citations.json')
const en = ('js/quotes.json')

//création de variables :
let verbe = ""
let nom = ""

// variables pour récupérer depuis le fichier html les composants :
let btn = document.getElementById('btn')
let phr = document.getElementById('phrase')
let number = document.getElementById('number').value

//mettre les données dans un tableau array :
let citations = []  

// événément du bouton fr :
for (let x = 0; x < number; x++) {
    btn.addEventListener('click', updatePage)
}    

//if button fr

//récupérer toutes les citations depuis le lien json :
fetch(fr).then((data) => {
    data.json().then((data) => {
        citations = data
    })
})

//if btn en

// événément du bouton en :
for (let x = 0; x < number; x++) {
    btnen.addEventListener('click', quotes)
}

//récupérer toutes les citations depuis le lien json :
fetch(en).then((data) => {
    data.json().then((data) => {
        quotes = data
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
        //modifie le contenu de la balise + concaténation :
        phr.innerText = randomSujet['sujet'] + " " + randomVerbe['verbe'] + " " + randomNom['nom']
}

//bouton en :
function quotes() {
        //for(i=1,i<=nbcitation,i++)

        // for (let x = 0; x < number; x++) {
        let random = Math.floor(Math.random() * (quotes.length - 0))
        let randomSujet = quotes[random]
        let random2 = Math.floor(Math.random() * (quotes.length - 0))
        let randomVerbe = quotes[random2]
        let random3 = Math.floor(Math.random() * (quotes.length - 0))
        let randomNom = quotes[random3]
        //modifie le contenu de la balise + concaténation :
        phr.innerText = randomSujet['sujet'] + " " + randomVerbe['verbe'] + " " + randomNom['nom']
    //}
}
