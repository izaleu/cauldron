import { collection, doc, getDoc, getDocs } from "firebase/firestore";

let db;

function initApi(database) {
    db = database;
}

// API calls

async function getRecipes() {
    return getAll('recipes');
}

async function getUser(userId) {
    return get('users', userId);
}

// internal

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


export {
    getRecipes,
    initApi
}