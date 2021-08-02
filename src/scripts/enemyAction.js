const attack = (youData, rndm) => {
    youData.health -= rndm;
}

const health = (enemyData, rndm) => {
    enemyData.health += rndm;
    enemyData.mana -= rndm - 2;
}

const enemyAction = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 15 + 5);
    if (enemyData.health < 50 && enemyData.mana >= rndm && rndm < 12) {
        health(enemyData, rndm);
    } else {
        attack(youData, rndm);
    }
}

export default enemyAction;