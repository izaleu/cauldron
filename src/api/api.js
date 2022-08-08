import { collection, getDocs, query, where } from "firebase/firestore";

let db;

function initApi(database) {
    db = database;
}

async function getRecipes() {
    const recipesSnap = await getDocs(collection(db, 'recipes'));
    let recipes = [];
    recipesSnap.forEach(doc => {
        recipes.push(doc.data());
    })
    return recipes;
}

export {
    getRecipes,
    initApi
}