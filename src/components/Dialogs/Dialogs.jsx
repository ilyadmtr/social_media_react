import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/formsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

let maxLength10 = maxLengthCreator(10);


const AddMessageForm = (props) =>{
    return  <form className={s.message_bar} onSubmit={props.handleSubmit}>
        <div>
            <Field value={props.newMessageText } component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"} validate={[requiredField, maxLength10]}></Field>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: `message`})(AddMessageForm)

const Dialogs = (props) => {
    const messagesElement = props.messages.map(el => (<Message value={el.value} key={el.id} />))
    const dialogsElement = props.dialogs.map(el => (<DialogItem name={el.name} key={el.id} id={el.id}/>))
    let onSubmit = (data) => {
        let text = data.newMessageBody;
        props.sendMessage(text);
    }

    if(!props.isAuth){
         return <Navigate to='/login/'/>
    }
    return (
        <div className={s.dialogs}>
            <h3>Dialogs:</h3>
            <div className={s.dialog_wrapper}>
                <div className={s.dialog_items}>
                    {dialogsElement}
                </div>
                <div className={s.message_wrapper}>
                    <div className={s.messages}>
                        {messagesElement}
                    </div>
                    <AddMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}



export default Dialogs;