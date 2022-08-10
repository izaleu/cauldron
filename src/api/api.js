import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { get as getStoreValue } from 'svelte/store';
import { user as userStore } from '../stores/users';

// init
let db;

export function initApi(database) {
    db = database;
}

// API calls
export async function getRecipes() {
    return getAll('recipes');
}

export async function getRecipe(id) {
    return get('recipes', id).then(async recipe => {
        const results = await Promise.all([
            ...recipe.tags.map(tagDoc => getDoc(tagDoc).then(tagResult => tagResult.data().displayName)),
            ...recipe.ingredients.map(async ingredient => {
                const ingredientDoc = await getDoc(ingredient.ingredient).then(ingredientResult => ingredientResult);
                return {
                    ...ingredient,
                    ingredient: ingredientDoc.data()
                }
            }
        )]);

        return {
            ...recipe,
            tags: results.splice(0, recipe.tags.length),
            ingredients: results
        };
    });
}

export async function getSavedRecipes() {
    const user = await getCurrentUser();
    let requests = [];
    user.savedRecipes.forEach(recipeDoc => {
        requests.push(getDoc(recipeDoc).then(docResult => docResult.data()));
    });
    return Promise.all(requests).then(dataResult => dataResult);
}

export async function getCurrentUser() {
    let user = getStoreValue(userStore);
    return (user?.uid) ? getUser(user.uid) : null;
}

// internal
async function getUser(userId) {
    return get('users', userId);
}

async function getAll(col) {
    const snap = await getDocs(collection(db, col));
    let results = [];
    snap.forEach(doc => {
        results.push(doc.data());
    })
    return results;
}

// TODO: Add catch 
async function get(col, item) {
    const isProd = process.env.NODE_ENV !== 'development';

    const docRef = doc(db, col, item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if (!isProd) console.log("[DEV] Document data:", docSnap.data());
        return docSnap.data();
    } else {
        if (!isProd) {
            console.error("No such document!", docSnap);
        } else {
            console.error("[DEV] Failed to fetch resource, errorCode: 404");
        }
        return null;
    }
}