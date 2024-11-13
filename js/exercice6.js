function valider() {
    const premier = document.getElementById("firstNumber").value;
    const deuxieme = document.getElementById("secondNumber").value;

    const div = premier % deuxieme;

    window.alert(div)


}
