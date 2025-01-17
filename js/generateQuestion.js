const generateQuestion = (pays) => {
    const random = parseInt(Math.random() * 250);

    const paysUniq = pays[random];

    const question = {
        flag: paysUniq.flag,
        reponse: paysUniq.name,
    };

    return question;
};