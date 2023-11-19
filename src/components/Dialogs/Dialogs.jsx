import React from 'react';
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {

    let dialogs = props.userData.map((dialog) => (
        <Dialog id={dialog.id} name={dialog.name} ava={dialog.ava}/>
    ));
    
    let messages = props.messageData.map((message) => (
        <Message name={message.name} message={message.message} isUser={message.isUser}/>
    ));

    let newMessage = React.createRef();

    let sendMessage = () => {
        let message = newMessage.current.value;
        props.sendMessage("Валерия Воронцова", message, true);
    }

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.dialogs}>
                    {dialogs}
                </div>
                <div className={classes.messages}>
                    {messages}
                <textarea ref={newMessage}></textarea>
                <button onClick={ sendMessage }>Запостить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
