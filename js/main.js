let groupeQuestions = {
    question : null,
    reponse : null,
    fin : null
};

let pays = [];
let question = {};

const init = async () => {
    groupeQuestions.drapeauAtrouver = document.querySelector('#drapeauAtrouver');
    groupeQuestions.reponse = document.querySelector('#reponse');
    groupeQuestions.resultats = document.querySelector('#resultats');

    const reponse = await fetch("https://restcountries.com/v2/all");
    pays = await reponse.json();

    drapeauAtrouver = generateQuestion(pays);

    console.log(groupeQuestions);
    groupeQuestions.drapeauAtrouver.querySelector('img').setAttribute('src',drapeauAtrouver.flag);

};

window.onload = init;