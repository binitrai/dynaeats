import React from 'react';
import classes from "./UserInfo.css";
import {connect} from "react-redux";
function UserInfo (props) {
    if (props.auth) {
        return (
            <div className={classes.UserInfo}>User : {props.name}</div>
        )
    } else {
        return null;
    }
}
const mapStateToProps = state => {
    return {
        auth : state.auth,
        name : state.name

    }
}

export default connect(mapStateToProps)(UserInfo);