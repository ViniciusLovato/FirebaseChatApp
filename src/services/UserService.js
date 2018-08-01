import { database } from '../firebase/firebase';
import { snapshotToArray } from '../firebase/firebaseUtils';

class UserService {
  constructor() {
    this.ref = 'users';
  }

  register = (user) => {
    console.log(user);
    let { uid, displayName, email, photoURL } = user;
    database.ref(`${this.ref}/${uid}`).update({
      uid,
      displayName,
      email,
      photoURL
    })
  }

  findAll = () => {
    return database.ref(this.ref).once('value').then(snapshot => {
      return snapshotToArray(snapshot.val());
    })
  }

  listen = (callback) => {
    database.ref(this.ref).on('value', function(snapshot){
      callback(snapshotToArray(snapshot.val()))
    });
  }  
}

export default new UserService();