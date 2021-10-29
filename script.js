alert("Trouver Mr Pumpkin !");

$("#pumpkin").click(function(){
  alert("Gagné !");
})


// Affichage de la taille de l'écran
var tailleEcranW = $(window).width();
var tailleEcranH = $(window).height();
console.log("L'écran mesure" + " " + tailleEcranW + " " + "par" + " " + tailleEcranH );

// Test génération des nombres aléatoires
var tailleEcranWPx = getRandomIntInclusive(1, (tailleEcranW-150))+"px";
console.log(tailleEcranWPx);
var tailleEcranHPx = getRandomIntInclusive(1, (tailleEcranH-150))+"px";
console.log(tailleEcranHPx);

// Génération des positions aléatoires
$("#pumpkin").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#pumpkin").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#ghost").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#ghost").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#candy").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#candy").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#black-cat").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#black-cat").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#lollipop").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#lollipop").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#werewolf").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#werewolf").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#zombi").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#zombi").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

$("#witch").css("left",(getRandomIntInclusive(1, (tailleEcranW-150))+"px"));
$("#witch").css("top",(getRandomIntInclusive(1, (tailleEcranH-150))+"px"));

// Test multiclonage ;) - Problème rencontré sur la génération de la position aléatoire
$("#ghost").clone().appendTo("body").css({"left": "100px", "top":"50px"});

// Fonction aléatoire
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}