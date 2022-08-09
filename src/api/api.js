import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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

async function get(col, item) {
    const docRef = doc(db, col, item);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
}