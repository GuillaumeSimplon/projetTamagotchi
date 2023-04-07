import { Human } from "./script-class/Human"

import soucoupe1 from "./img/soucoupe1.png";
import soucoupe2 from "./img/soucoupe2.png";
import soucoupe3 from "./img/soucoupe3.png";

import fusee1 from "./img/fusee1.png";
import fusee2 from "./img/fusee2.png";
import fusee3 from "./img/fusee3.png";

import weaponHuman from "./img/weaponHuman.png";
import weaponAlien from "./img/weaponAlien.png";



import explosion_01 from "./img/explosion-01.png";
import explosion_02 from "./img/explosion-02.png";
import explosion_03 from "./img/explosion-03.png";

import explosion_04 from "./img/explosion-04.png";
import explosion_05 from "./img/explosion-05.png";
import explosion_06 from "./img/explosion-06.png";

import explosion_07 from "./img/explosion-07.png";
import explosion_08 from "./img/explosion-08.png";
import explosion_09 from "./img/explosion-09.png";

import explosion_10 from "./img/explosion-10.png";
import explosion_11 from "./img/explosion-11.png";
import explosion_12 from "./img/explosion-12.png";

import explosion_13 from "./img/explosion-13.png";
import explosion_14 from "./img/explosion-14.png";


const playerHuman: any = new Human('Kévin', 20, 10, 30)
console.log(playerHuman.getRepair());


////////////////////////////////////////////////////////////////////////////////////////////////
// const backgroundStartLaunch: Element | null = document.querySelector('.backgroundStartLaunch')
// if (backgroundStartLaunch)
// backgroundStartLaunch.style.display = 'none';

////////////////////////////////////////////////////////////////////////////////////////////////
// const game: Element | null = document.querySelector('.game')
// if (game)
// game.style.display = 'none';







/////////////////////////////////////////
////// MES CONSTANTES ET VARIABLES //////
/////////////////////////////////////////

// Pour afficher ma section game lorsque je clique sur GO !
const btnGo = document.querySelector('#btnGo');

// Mon input de saisie du nom de joueur
const inputName = document.getElementById("nameEnter");

// Mon input radio checkbox pour la selection de la race humaine ou alien
const selectRace = document.querySelectorAll('input[name="selectRace"]');





//////////////////////
////// LAUNCHER //////
//////////////////////

// Etape : 1 Cacher ma section Game à l'écran titre
document.addEventListener('DOMContentLoaded', function () {
  const gameSection = document.querySelector('.game');
  if (gameSection) {
    gameSection.classList.add('hidden');
    gameSection.style.display = 'none';
  }
});



// BOUTON GO !
// Etape 2 : Le bouton 'GO' cache l'écran titre et charge le jeu
if (btnGo) {
  btnGo.addEventListener('click', function (event) {
    const gameSection = document.querySelector('.game');
    if (gameSection) {
      gameSection.classList.remove('hidden');
      gameSection.style.display = 'none';
    }

    const backgroundStartLaunch = document.querySelector('.backgroundStartLaunch');
    if (backgroundStartLaunch) {
      backgroundStartLaunch.classList.add('hidden');
      if (gameSection)
        gameSection.style.display = '';
    }
  });
}

// Etape 3 : Désactiver le bouton "Go !" tant que les conditions ne sont pas remplies
if (btnGo)
  btnGo.disabled = true;

// Etape 4 : Vérifier si les conditions sont remplies à chaque fois que l'utilisateur effectue une action
for (let i = 0; i < selectRace.length; i++) {
  selectRace[i].addEventListener("click", checkConditions);
}
if (inputName)
  inputName.addEventListener("input", checkConditions);

// Etape 5 : Vérifier si les conditions sont remplies
function checkConditions() {
  let checkedRace = false; // VARIABLE
  for (let i = 0; i < selectRace.length; i++) {
    if (selectRace[i].checked) {
      checkedRace = true;
      break;
    }
  }
  if (btnGo && inputName && checkedRace && inputName.value.length >= 3 && inputName.value.length <= 22) {
    btnGo.disabled = false;
  } else {
    if (btnGo)
      btnGo.disabled = true;
  }
}



// Etape 6 : Selon le choix de race, le vaisseau choisi sera à droite et devra survivre. L'autre sera à gauche




//////////////////
////// GAME //////
//////////////////

// Etape 1 : les boutons '+' permettent d'incrémenter la barre à laquelle ils sont affiliés à 100% de leur taille


// Etape 2.1 : Les barres diminuent de 100% à 50% en 2 sec
// Etape 2.2 : Les barres diminuent de 50% à 15% en 4 sec
// Etape 2.3 : Les barres diminuent de 15% à 0% en 8 sec
// Voir comment gérer les couleurs VERTE, ORANGE et ROUGE (avec 3 class ?)


// Etape 3.0 : Si la barre 'Repair' pour l'humain est >= à 50%, alors human.png niv 1
// Etape 3.01 : Si la barre 'Shield' pour l'alien est >= à 50%, alors alien.png niv 1

// Etape 3.1 : Si la barre 'Repair' pour l'humain est <= à 50%, alors human.png niv 2
// Etape 3.11 : Si la barre 'Shield' pour l'alien est <= à 50%, alors alien.png niv 2

// Etape 3.2 : Si la barre 'Repair' pour l'humain est <= à 15%, alors human.png niv 3
// Etape 3.21 : Si la barre 'Shield' pour l'alien est <= à 15%, alors alien.png niv 3



// Etape 4.0 : Si les 3 barres <= à 0%,
//      alors animation 1 sec explosion.png, duration total 2 sec, puis écran 'Game Over' + remove section game

// ==> ==> ==> ==> ==> ==> TROUVER COMMENT CRÉER UNE ANIMATION D'EXPLOSION AVEC LES 14 explosion.png







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////:
// BLOQUER LES BARRES DE PROGRESSION SUR L'ÉCRAN DE DÉMARRAGE + LES LANCER QUAND CLIQUE SUR GO !

// Récupération des barres de progression

const barRad = document.getElementById('barRad');
const barStress = document.getElementById('barStress');
const barCustom = document.getElementById('barCustom');
const btnIncrementationRad: Element | null = document.getElementById('btnIncrementationRad');
const btnIncrementationStress: Element | null = document.getElementById('btnIncrementationStress');
const btnIncrementationCustom: Element | null = document.getElementById('btnIncrementationCustom');


// const barRepair = document.getElementById('barRepair');
// const barShield = document.getElementById('barShield');

// Fonction qui décrémente les barres de progression
const decrementProgress = function (progressBar: HTMLElement, btnIncrementation: HTMLElement) {
  let progress = 100; // Initialisation de la valeur de la barre de progression
  let decrementTime = 50; // Initialisation du temps de décrémentation en millisecondes


  //
  btnIncrementation.addEventListener("click", function () {
    progress += 33;
  });

  // Fonction qui décrémente la valeur de la barre de progression avec différents temps en fonction de la valeur de progress
  const decrement = function () {
    let radEmpty = false; // Initialisation de la variable pour la barre rad
    let stressEmpty = false; // Initialisation de la variable pour la barre stress
    let customEmpty = false; // Initialisation de la variable pour la barre custom

    if (progressBar.parentElement && progressBar.parentElement.offsetHeight > 0) { // Vérifie que la section parente est affichée
      progress -= 1; // Réduction de la valeur de la barre de progression de 1 unité

      if (progress >= 50) { // Si la barre de progression est entre 100% et 50%
        decrementTime = 50; // Le temps de décrémentation est de 2 secondes

      } else if (progress < 50 && progress > 15) { // Si la barre de progression est entre 50% et 15%
        decrementTime = 100; // Le temps de décrémentation est de 4 secondes

      } else if (progress <= 15) { // Si la barre de progression est entre 15% et 0%
        decrementTime = 150; // Le temps de décrémentation est de 8 secondes
      }
      progressBar.style.width = `${progress}%`; // Mise à jour la largeur de la barre de progression

      if (progress > 0) { // Si la barre de progression n'est pas complètement remplie
        setTimeout(decrement, decrementTime); // On rappelle la fonction pour continuer à décrémenter
      }




      // MODIFIER L'ÉTAT DES VAISSEAUX EN FONCTION DE LEURS DÉGATS ET DE LA BARCUSTOM
      const humanSelected = (document.getElementById("selectHuman") as HTMLInputElement).checked;
        const alienSelected = (document.getElementById("selectAlien") as HTMLInputElement).checked;
      if (progressBar === barCustom) {
        

        if (alienSelected && btnIncrementationCustom && progress >= 50) {
          shipRight?.setAttribute("src", `${soucoupe1}`);
        }
        else if (humanSelected && btnIncrementationCustom && progress >= 50) {
          shipRight?.setAttribute("src", `${fusee1}`);
        }


        else if (alienSelected && btnIncrementationCustom && progress < 50 && progress > 15) {
          shipRight?.setAttribute("src", `${soucoupe2}`);
        }
        else if (humanSelected && btnIncrementationCustom && progress < 50 && progress > 15) {
          shipRight?.setAttribute("src", `${fusee2}`);
        }


        else if (alienSelected && btnIncrementationCustom && progress <= 15 && progress > 0) {
          shipRight?.setAttribute("src", `${soucoupe3}`);
        }
        else if (humanSelected && btnIncrementationCustom && progress <= 15 && progress > 0) {
          shipRight?.setAttribute("src", `${fusee3}`);
        }

        
      }
      // if {
      //   (progressBar === barRad && progressBar === barStress && progressBar === barCustom)
        if (humanSelected || alienSelected && btnIncrementationCustom && progress <= 0) {
          // shipRight?.style.opacity = "0";
          if (barRad?.style.width === "0%" && barStress?.style.width === "0%" && barCustom?.style.width === "0%") {
            shipRight?.style.opacity = "0";
            weapon?.style.opacity = "0";


            const explosion: HTMLElement | null = document.getElementById('explosion');
            explosion?.classList.add('explosion');
            explosion?.style.opacity = "0";

          }
        // }
      }
    }
  };

  setTimeout(decrement, 500); // On appelle la fonction pour la première fois avec un délai de 500 millisecondes
}

if (btnGo)
  btnGo.addEventListener('click', () => {
    const progressContainer = document.querySelector('.bar') as HTMLElement;
    progressContainer.style.display = ''; // Affiche la section parente des barres de progression

    decrementProgress(barRad, btnIncrementationRad);
    decrementProgress(barStress, btnIncrementationStress);
    decrementProgress(barCustom, btnIncrementationCustom);
    console.log(btnIncrementationRad);
    console.log(btnIncrementationStress);
    console.log(btnIncrementationCustom);

  });










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INTERCHANGER LES VÉHICULES EN FONCTION DU CHOIX DE LA RACE

const shipLeft = document.querySelector("#shipLeft > img");
const shipRight = document.querySelector("#shipRight > img");
const weapon = document.querySelector("#weaponShip > img");

if (btnGo) {
  btnGo.addEventListener("click", function (event: Event) {
    const humanSelected = (document.getElementById("selectHuman") as HTMLInputElement).checked;
    const alienSelected = (document.getElementById("selectAlien") as HTMLInputElement).checked;

    if (alienSelected) {
      shipLeft?.setAttribute("src", `${fusee1}`);
      weapon?.setAttribute("src", `${weaponHuman}`);
      shipRight?.setAttribute("src", `${soucoupe1}`);


    } else if (humanSelected) {
      shipRight?.setAttribute("src", `${fusee1}`);
      weapon?.setAttribute("src", `${weaponAlien}`);
      shipLeft?.setAttribute("src", `${soucoupe1}`);


    } else {
      // neither human nor alien selected
      // handle error or do nothing
    }
  });
}




