import rerender from "../../render";

let state = {
    userData: [
        { id: 1, name: "Артём Поваляев", ava: "https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak.jpg"},
        { id: 2, name: "Майя Поваляева", ava: "https://facts.museum/img/facts/370.jpg"},
        { id: 3, name: "Андрей Воронцов", ava: "https://img.freepik.com/premium-photo/the-wolf-wallpapers-hd-wallpapers_901003-35062.jpg"},
    ],

    messageData: [
        { id: 1, name: "Артём Поваляев", message: "Прости дурака, пожалуйста", isUser: false},
        { id: 2, name: "Валерия Воронцова", message: "Нет.", isUser: true},
        { id: 3, name: "Артём Поваляев", message: "Я тебя очень люблю и ценю твои чувства, солнышко. Прости пожалуйста.", isUser: false},
        { id: 4, name: "Валерия Воронцова", message: "Я подумаю.", isUser: true},
    ],

    postsData: [
        { id: 1, name: "Артём Поваляев", message: "Я пишу на странице самой красивой девочки!", ava: "https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak.jpg"},
        { id: 2, name: "Артём Поваляев", message: "Чо онлайн не заходишь?", ava: "https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak.jpg"},
    ],
    newPostText: '',
}

export let addPost = (name, message, ava) => {
    let newPost = {
        id: 5,
        name: name,
        message: message,
        ava: ava,
    };
    state.postsData.push(newPost);
    rerender(state);
}

export let sendMessage = (userName, message, isUser) => {
    let newMessage = {
        id: 3,
        name: userName,
        message: message,
        isUser: isUser,
    }
    state.messageData.push(newMessage);
    rerender(state);
}

export let changeNewPostText = (text) => {
    state.newPostText = text;
    rerender(state);
}


export default state;