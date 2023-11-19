import { NavLink } from "react-router-dom";
import classes from "./Dialog.module.css";

function Dialog(props){
    return(
        <NavLink to={"/dialogs/" + props.id}><div className={classes.dialog}>
            <img src={props.ava} alt="ava"/>
            <p><b>{props.name}</b></p>
        </div></NavLink>
    )
}

export default Dialog;