// let num1 = prompt(`Entrez votre 1 nombre ici : `);
// let num2 = prompt(`Entrez votre 2ème nombre ici : `);

// let multiplication = Math.trunc(num1) * Math.trunc(num2);

// window.alert(multiplication);

function valider() {
    const premier = document.getElementById("firstNumber").value;
    const deuxieme = document.getElementById("secondNumber").value;

    const num1 = Math.trunc(premier);
    const num2 = Math.trunc(deuxieme);
    const multipli = num1 * num2;

    window.alert(multipli)


}
