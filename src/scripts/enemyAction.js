const attack = (youData) => {
    let dmg = Math.floor(Math.random() * 10 + 5);
    youData.health -= dmg;
}

const enemyAction = (youData, enemyData) => {
    // let random = Math.floor(Math.random() * 2);
    attack(youData);
}

export default enemyAction;