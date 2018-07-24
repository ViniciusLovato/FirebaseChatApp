import { database } from '../firebase/firebase';
import { snapshotToArray } from '../firebase/firebaseUtils';

class MessageService {
  constructor() {
    this.ref = 'messages';
  }

  sendMessage = (message, chat, username) => {
    const newMessageKey =  '-LHQDF0DxtDr34djKroV';
    database.ref(`${this.ref}/${newMessageKey}`).push({
      message: message,
      username: username,
      timestamp: new Date().getTime()
    })
  }


  listen = (callback) => {
    database.ref(`${this.ref}/-LHQDF0DxtDr34djKroV`).on('value', function(snapshot){
      callback(snapshotToArray(snapshot.val()))
    });
  }  
}

export default new MessageService();