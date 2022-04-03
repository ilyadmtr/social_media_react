import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state:{
        profilePage: {
            posts:[
                {id: 1, message: "Hi. How are you?", likes: 16},
                {id: 2, message: "It`s my first post", likes: 20},
                {id: 3, message: "It`s my first post", likes: 18},
                {id: 4, message: "It`s my first post", likes: 40},
            ],
            newPostText: 'ILYA DMYTRENKO',
        },
        messagesPage:{
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
        },
        siteBar:{
            names:[
                {id:1, name: "Ilya"},
                {id:2, name: "Maksym"},
                {id:3, name: "Sergei"},
                {id:4, name: "Alona"},
                {id:5, name: "Denis"},
            ]
        }
    },
    _callSubscriber(){
        console.log('State was changed')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; // наблюдатель
    },


    dispatch(action){ // {type:'ADD-POST'}
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.siteBar, action);

        this._callSubscriber(this._state);
    }
}




export default store;
window.store= store;

// store - OOP
