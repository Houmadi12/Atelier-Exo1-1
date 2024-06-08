// Une fonction de validation de formulaire
let nb1 = 0;
let nb2 = 0;
let somme = 0;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nb1 = Number.parseInt(document.getElementById("nb1").value);
    nb2 = Number.parseInt(document.getElementById("nb2").value);

    respons.textContent = nb1+nb2;

    return false;
} 



