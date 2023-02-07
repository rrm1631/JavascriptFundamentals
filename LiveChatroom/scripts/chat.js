class Chatroom{

    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chatsCollection = db.collection('chats');
        this.unsub;
    }

    async addChat(message){
        //format chat object
        const now = new Date();
        const chat = {
            message : message,
            username : this.username,
            room : this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        }

        //save chat
        const response = await this.chatsCollection.add(chat);
        return response;
    }

    //Realtime Listener for DB Changes
    getChat(callback){
        this.unsub = db.collection('chats')
        .where('room', '==', this.room) //'property', 'logicaloperator', 'value' 
        .orderBy('created_at')
        .onSnapshot((snapshot) =>{
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update ui
                    callback(change.doc.data());
                }
            });
        });
    }

    updateName(username){
        this.username = username;
        //Set LocalStorage
        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}



// setTimeout(()=>{
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('Wario');
//     chatroom.getChat((data)=>{
//         console.log(data);
//     });

//     chatroom.addChat("Hello");
// }, 3000)





//Add new chat document
// chatroom.addChat("Hello Everyone").then(()=>{
//     console.log("Chat Added");
// }).catch((error)=>{
//     console.log(error);
// });