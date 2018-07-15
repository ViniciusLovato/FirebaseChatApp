import { database } from '../firebase/firebase';
import { snapshotToArray } from '../firebase/firebaseUtils';

class ChatService {
  constructor() {
    this.ref = 'chats';
  }

  create = (chat) => {
    const newChatKey =  database.ref(this.ref).push().key;
    database.ref(`${this.ref}/${newChatKey}`).update({
      title: chat.title,
      lastMessage: null,
      timestamp: new Date().getTime()
    })
  }

  edit = (chatID, chat) => {
    database.ref(`${this.ref}/${chatID}`).update({
      title: chat.name
    })
  }

  delete = (chatID) => {
    database.ref(`${this.ref}/${chatID}`).delete();
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

export default new ChatService();