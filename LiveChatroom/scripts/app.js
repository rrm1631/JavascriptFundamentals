//DOM
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

//Check localstorage for username
const username = localStorage.username ? localStorage.username : 'anonymous' ;

//Instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', username);

//Get Chats
chatroom.getChat((data)=>{
    // console.log(data); 
    chatUI.render(data);
});

//Add New Chat
newChatForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const message = newChatForm.message.value.trim();

    chatroom.addChat(message).then(()=>{
        newChatForm.reset();
    }).catch((err)=>{
        console.log(err)
    });
});

//Update username
newNameForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    //show & hide
    updateMsg.innerText = `Your name was updated to ${newName}`;

    setTimeout(()=>{
        updateMsg.innerText = ``;
    }, 3000)
});


//Update chat room
rooms.addEventListener('click', (e)=>{
    // console.log(e);
    if(e.target.tagName === 'BUTTON'){ //EVENT DELIGATION, make sure its a the BUTTON that you've click
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChat( (chat)=>{
            chatUI.render(chat);
        });
    }
});