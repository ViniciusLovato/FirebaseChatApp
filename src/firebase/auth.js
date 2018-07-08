import { auth, provider } from './firebase';

export const GoogleSignIn = () => 
  auth.signInWithPopup(provider);

export const SignOut = () =>
  auth.signOut();