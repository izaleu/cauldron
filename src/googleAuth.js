import { 
    getAuth, 
    signInWithPopup,
    signOut,
    GoogleAuthProvider 
} from "firebase/auth";

export function googleSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            return result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            return { errorCode, errorMessage }
        });
}

export function googleSignOut () {
    const auth = getAuth();
    return signOut(auth).then(result => {
        // console.log('Signed out?', result);
    }).catch(error => {
        // console.error("Encountered error while trying to sign out:", error)
    });
}