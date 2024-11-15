function valider (){
    let shoeSize = document.getElementById("shoeSize").value;
    let yearOfBirth = document.getElementById("yearOfBirth").value;
    shoeSize = shoeSize * 2;
    shoeSize = shoeSize + 5;
    shoeSize = shoeSize * 50;
    shoeSize = shoeSize - yearOfBirth;
    shoeSize = shoeSize + 1766;
    window.alert(shoeSize);
}