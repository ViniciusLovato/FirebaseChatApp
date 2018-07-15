import { database } from '../firebase/firebase';
import { snapshotToArray } from '../firebase/firebaseUtils';

class ChatService {
  constructor() {
    this.ref = 'messages';
  }

  create = (chat) => {

  }

  edit = (chatID, chat) => {

  }

  delete = (chatID) => {
   
  }

  findAll = () => {
    return database.ref(this.ref).once('value').then(snapshot => {

  }

  listen = (callback) => {

  }  
}

export default new ChatService();