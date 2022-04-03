import React from "react";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        messages:state.messagesPage.messages,
        dialogs:state.messagesPage.dialogs,
        newMessageText:state.messagesPage.newMessageText,
    }
}
let mapDispachToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispachToProps),
    withAuthRedirect,
)(Dialogs)
