//appel des fichiers json 
const fr = ('js/citations.json')
const en = ('js/quotes.json')

// variables pour récupérer depuis le fichier html les composants 
let btn = document.getElementById('btn')
let btnen = document.getElementById('btnen')
let phr = document.getElementById('phrase')

//mettre les données dans un tableau array 
let citations = []  

//récupérer toutes les citations depuis le lien json fr
fetch(fr).then((data) => {
    data.json().then((data) => {
        citations = data
    })
})

//fonction random fr :
function Random_phrase() {
                       
    //choix au hasard d'une citation parmis la liste 
    let random = Math.floor(Math.random() * (citations.length)) 
    let randomSujet = citations[random]
    let random2 = Math.floor(Math.random() * (citations.length))
    let randomVerbe = citations[random2]
    let random3 = Math.floor(Math.random() * (citations.length))
    let randomNom = citations[random3]
    
    //concaténation 
    let phrase_random= randomSujet['sujet'] + " " + randomVerbe['verbe'] + " " + randomNom['nom']
    
    //Test de l'affichage de phrase dans la console
    console.log(phrase_random)
    
    //Renvoie la phrase randomisée
    return phrase_random
}

// événément du bouton fr 
    btn.addEventListener('click', function() {
        //actualise le nombre de phrase à écrire
        let number = document.getElementById("number").value
    
        //efface le contenu de la balise texte
        while(phr.firstChild){
            phr.removeChild(phr.firstChild)
        }

        //message d'erreur si le nombre entré n'est pas entre 1 et 5
        if (number > 5 || number <= 0 ){
            let erreur = "Je ne peux génerer que 5 phrases maximum ! Ma créatrice n'était pas très douée pour que j'en fasse plus :D"
            let phrase = document.createTextNode(erreur)
            phr.appendChild(phrase)
        }
        else { //boucle pour afficher chacune des phrases  
            for (let test = 0; test < number; test++ ) {

                //création variable contenant phrase et saut de ligne
                let saut = document.createElement("br")
                let phrase = document.createTextNode(Random_phrase())

                //ajoute le texte de la variable
                phr.appendChild(phrase)
                //ajoute un <br> pour le saut de ligne entre les phrases
                phr.appendChild(saut)
            }
        }    
        
    })

//récupérer toutes les citations depuis le lien json en :
fetch(en).then((data) => {
    data.json().then((data) => {
        quotes = data
    })
})

//bouton en :
function Random_quotes() {
                       
    //choix au hasard d'une citation parmis la liste :
    let random = Math.floor(Math.random() * (quotes.length))
    let randomSujet = quotes[random]
    let random2 = Math.floor(Math.random() * (quotes.length))
    let randomVerbe = quotes[random2]
    let random3 = Math.floor(Math.random() * (quotes.length))
    let randomNom = quotes[random3]
    
    //concaténation :
    let phrase_random= randomSujet['sujet'] + " " + randomVerbe['verbe'] + " " + randomNom['nom']
    
    //Test de l'affichage de phrase dans la console
    console.log(phrase_random)
    
    //Renvoie la phrase randomisée
    return phrase_random
}

// événément du bouton en :
btnen.addEventListener('click', function() {
    //actualise le nombre de phrase à écrire
    let number = document.getElementById("number").value

    //efface le contenu de la balise texte
    while(phr.firstChild){
        phr.removeChild(phr.firstChild)
    }

    //message d'erreur si le nombre entré n'est pas entre 1 et 5
    if (number > 5 || number <= 0 ){
        let erreur = "Je ne peux génerer que 5 phrases maximum ! Ma créatrice n'était pas très douée pour que j'en fasse plus :D"
        let phrase = document.createTextNode(erreur)
        phr.appendChild(phrase)
    }
    else { //boucle pour afficher chacune des phrases  
        for (let test = 0; test < number; test++) {

            //création variable contenant phrase et saut de ligne
            let saut = document.createElement("br")
            let phrase = document.createTextNode(Random_quotes())

            //ajoute le texte de la variable
            phr.appendChild(phrase)

            //ajoute un <br> pour le saut de ligne entre les phrases
            phr.appendChild(saut)
        }
    }    
})


