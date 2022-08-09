import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { get as getStoreValue } from 'svelte/store';
import { user as userStore } from '../stores/users';
import { auth as authStore } from '../stores/auth';

export function initAuth(app) {
  authStore.set(getAuth(app));

  onAuthStateChanged(getStoreValue(authStore), (user) => {
    if (user) {
      userStore.set(user);
    } else {
      userStore.set(null);
    }
  });
}

export async function logout() {
  return signOut(getStoreValue(authStore)).then(() => {
    // do nothing
  }).catch(error => {
    console.error("Encountered error while trying to sign out:", error);
  });
}