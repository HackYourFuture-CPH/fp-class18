function handleAuthErrors({ code, message }) {
  switch (code) {
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      return alert('Wrong password.');
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      return alert('Your password is too weak.');
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      return alert(message);
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      return alert(message);

    default:
      return alert(message);
  }
}

const FIREBASE_ERROR_CODES = {
  WEAK_PASSWORD: 'auth/weak-password',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
};

/**
 *
 * @param {email, password} (sign in user)
 */
export async function signIn(auth, { email, password }) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function signUp(auth, { email, password }) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function resetPassword(auth, { email }) {
  // [START sendpasswordemail]
  try {
    await auth.sendPasswordResetEmail(email);
    // Password Reset Email Sent!
    alert('Password Reset Email Sent!');
  } catch (error) {
    handleAuthErrors(error);
  }
  // [END sendpasswordemail];
}

export function signOut(auth) {
  auth.signOut();
}

export async function signInWithGoogle(auth, provider) {
  try {
    await auth.signInWithPopup(provider);
    addUserToDatabase(auth.currentUser.uid);
  } catch (error) {
    handleAuthErrors(error);
  }
}

function addUserToDatabase(userId) {
  fetch(`api/users/${userId}`)
    .then(async (res) => {
      checkIfError(res);
      const data = await res.json();
      //if not present add new user id to database
      if (!data[0]) {
        fetch('api/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }),
        })
          .then((res) => checkIfError(res))
          .catch((e) => console.log('Could not add user to Database:', e));
      }
    })
    .catch((e) =>
      console.log('Could not check if user present in Database:', e),
    );
}

async function checkIfError(res) {
  console.log(res.ok);
  if (!res.ok) {
    const errorBody = await res.text();
    console.log(errorBody);
    throw new Error(res.statusText + errorBody);
  }
}
