import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export function initAuth (userStore) {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    // console.log("Auth state changed", user);
    if (user) {
      userStore.set(user);
    } else {
      userStore.set(null);
    }
  });
}

export async function logout () {
    const auth = getAuth();
    return signOut(auth).then(() => {
        // do nothing
    }).catch(error => {
        console.error("Encountered error while trying to sign out:", error);
    });
}
