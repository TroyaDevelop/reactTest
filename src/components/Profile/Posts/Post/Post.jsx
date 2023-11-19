import classes from "./Post.module.css";

function Post(props){
    return(
        <div className={classes.post}>
            <img src={props.ava} alt="avatar" />
            <p><b>{props.name}</b></p>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;