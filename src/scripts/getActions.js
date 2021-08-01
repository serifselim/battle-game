const attack = (youData, enemyData) => {
    youData.health--;
}

const magic = (youData, enemyData) => {
    console.log("magic");
}

const health = (youData, enemyData) => {
    console.log("health");
}

const sur = (youData, enemyData) => {
    console.log("sur");
}

const getActions = (youData, enemyData) => {
    return {
        attack,
        magic,
        health,
        sur
    }
}

export default getActions;