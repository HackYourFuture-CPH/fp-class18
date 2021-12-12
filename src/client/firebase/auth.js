/* eslint-disable no-alert */
function handleAuthErrors({ code, message }) {
  switch (code) {
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      // eslint-disable-next-line no-alert
      return alert('Wrong password.');
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      // eslint-disable-next-line no-alert
      return alert('Your password is too weak.');
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      // eslint-disable-next-line no-alert
      return alert(message);
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      // eslint-disable-next-line no-alert
      return alert(message);

    default:
      // eslint-disable-next-line no-alert
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
    // eslint-disable-next-line no-alert
    alert('Password Reset Email Sent!');
  } catch (error) {
    handleAuthErrors(error);
  }
  // [END sendpasswordemail];
}

export function signOut(auth) {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('shoppingCart');
    })
    .catch((error) => {
      handleAuthErrors(error);
    });
}

export async function signInWithGoogle(auth, provider) {
  try {
    await auth.signInWithPopup(provider);
    addUserToDatabase(auth.currentUser.uid);
    localStorage.setItem('user', JSON.stringify(auth.currentUser));
  } catch (error) {
    handleAuthErrors(error);
  }
}

function addUserToDatabase(userId) {
  fetch(`api/users/${userId}`)
    .then(async (res) => res.json())
    .then((data) => {
      // if not present add new user id to database
      if (!data[0]) {
        fetch('api/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }),
        }).catch((e) => {
          throw new Error('Could not add user to Database:', e.message);
        });
      }
    })
    .catch((e) => {
      throw new Error('Could not check if user present in Database:', e);
    });
}
