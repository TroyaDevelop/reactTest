import classes from "./Message.module.css";

function Message(props) {

    let isUser = null;
    if(props.isUser === true){
        isUser = classes.userMessage;
    } else {
        isUser = classes.nouserMessage;
    }

    return (
        <div className={`${classes.message} ${isUser}`}>
            <h4>{props.name}</h4>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;