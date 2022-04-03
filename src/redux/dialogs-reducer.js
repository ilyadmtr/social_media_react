const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messages: [
        {id: 1, value: 'Hello'},
        {id: 2, value: 'How are you?'},
        {id: 3, value: 'I am fine thank you'},
    ],
    dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Liuda'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Sergei'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Maksym'},
        {id: 7, name: 'Olga'},
        {id: 8, name: 'Andrey'},
        {id: 9, name: 'Rostik'},
        {id: 10, name: 'Pasha'}
    ],
    newMessageText:''
}

export const dialogsReducer = (state = initialState, action) => {
    let stateCopy  ={...state};
    stateCopy.messages = [...state.messages]
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 5,
                value: action.newMessageText,
            };
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
    }
    return state;
}


export const sendMessageActionCreator = (newMessageText) => {
    return {type: SEND_MESSAGE, newMessageText}
}