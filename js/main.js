// Groupe d'éléments du DOM
let groupeQuestions = {
    drapeauAtrouver: null,
    reponse: null,
    resultats: null,
};

// Variables globales
let pays = [];
let drapeauAtrouver = {};

// Initialisation de la page
const init = async () => {
    // Lien avec les éléments du DOM
    groupeQuestions.drapeauAtrouver = document.querySelector('#drapeauAtrouver');
    groupeQuestions.reponse = document.querySelector('#reponse');
    groupeQuestions.resultats = document.querySelector('#resultats');

    // Ajout des classes cachées au démarrage
    document.getElementById('sans-aide').style.visibility = 'hidden';
    document.getElementById('choix4').style.visibility = 'hidden';

    // Récupération des données depuis l'API
    try {
        const reponse = await fetch("https://restcountries.com/v2/all");
        pays = await reponse.json();

        // Génération d'une question aléatoire
        drapeauAtrouver = generateQuestion(pays);

        // Ajout du drapeau dans l'image si elle existe
        const image = groupeQuestions.drapeauAtrouver.querySelector('img');
        if (image && drapeauAtrouver.flag) {
            image.setAttribute('src', drapeauAtrouver.flag);
            image.setAttribute('alt', `Drapeau du pays à trouver`);
        } else {
            console.error("L'image ou la propriété 'flag' est manquante.");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'API :", error);
    }
};

// Gestion des choix sans aide
function choixSansAide() {
    // Masquer la sélection de difficulté
    const choixDifficulte = document.querySelector('#choix-difficulte');
    if (choixDifficulte) {
        choixDifficulte.classList.add('display-none');
    }

    // Afficher l'option sans aide
    const sansAide = document.getElementById('sans-aide');
    if (sansAide) {
        sansAide.style.visibility = 'visible';
    }
}

// Démarrage de l'application au chargement de la page
window.onload = init;
