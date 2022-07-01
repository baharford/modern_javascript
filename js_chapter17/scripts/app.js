// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');

// add a new chat
newChatForm.addEventListener('submit', e => { 
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => { 
    e.preventDefault();

    // update name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    // show , then hide , the update message
    updateMessage.innerText = `Your name was updated to ${newName}!`;
    setTimeout(() => updateMessage.innerText = '', 3000);
});

// check localStorage for a name
const username = localStorage.getItem('username') ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats and render
chatroom.getChats((data) => { 
    chatUI.render(data);
});


