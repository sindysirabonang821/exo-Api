function creation(element) {
   return document.createElement(element)
}

function attributionParentEnfant(parent,enfant){
    return parent.appendChild(enfant)
}

let affichage = document.getElementById("vertical")

fetch("https://restcountries.com/v3.1/all")
.then((reponse)=>
    reponse.json()
)
.then((donne)=>{
    console.log(donne),

donne.forEach((pays) => {
    let li = creation("li")
    let img = creation("img")
    let span= creation("span")

    img.src = pays.flags.png;
    span.innerHTML = pays.name.common;
      // Ajouter les éléments img et span au div
      attributionParentEnfant(li, img);
      attributionParentEnfant(li, span);
      // Ajouter le div au conteneur d'affichage
      attributionParentEnfant(affichage, li);
})
    
})
 .catch((error) => {
        console.log(error);
    });
