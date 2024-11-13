// Exerice 9

// const nombre = window.prompt("Entrez un nombre : ");

// for(let i = 1; i <= 10; i++){
//     window.alert(`${nombre} * ${i} = ${nombre * i}`);
// }





// Exercice 10


let mots = prompt(`Entre un mot ici ce que vous voulez : `);

for(let i = 0; i < mots.length; i++){
    console.log("\n" + mots[i]);
};





// Exercice 11



// while(true){
//     let num = window.prompt(`Entrez votre numéro entre 1 et 10 : `);
//     if(num > 10 || num < 0){
//         window.alert("Veuillez mettre un nombre entre 0 et 10 :");
//         continue;
//     }
//     else if (num > 5){
//         window.alert(`Votre numéro est supérieur à 5`);
//         break;
//     }
//     else if(num < 5){
//         window.alert(`Votre numéro est inférieur à 5`);
//         break;
//     }
//     else {
//         window.alert(`Votre numéro est égal à 5`);
//         break;
//     }
// }




// Exercice 12




// function carre (number){
//     let resultat = number * number;
//     return resultat;
// };

// const nombre = window.prompt(`Entrez votre nombre ici :`);
// let resultat = carre(nombre);

// window.alert(`Le carré de votre ${nombre} est de ${resultat}`);