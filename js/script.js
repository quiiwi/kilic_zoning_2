var A, B;
B = document.getElementById("bgcolor")
function mafonction(){
    A = prompt("choisissez une couleur");
    switch (A){
        case "rouge":
        bgcolor.style.backgroundColor = "red";
        break;

        case "bleu":
        bgcolor.style.backgroundColor = "blue";
        break;

        case "jaune":
        bgcolor.style.backgroundColor = "yellow";
        break;

        case "noir":
        bgcolor.style.backgroundColor = "black";
        break;

        case "blanc":
        bgcolor.style.backgroundColor = "white";
        break;

        case "violet":
        bgcolor.style.backgroundColor = "purple";
        break;

        default:
        alert("les couleurs disponibles sont: rouge, bleu, jaune, noir, blanc, violet.")
    }
}