import React from "react";
import editicon from "../../../../assets/images/edit.png"
import classes from "./Tdata.css"

function tdata(props) {
    let {data} = props
    let id = data.id;
    let keys = Object.keys(data);
    keys.shift();
    return keys.map(item => {
        return (
            <td 
                key={id + item}
            > 
                {data[item]}
                {props.editableTh.indexOf(item) !== -1 &&
                  <span 
                    className={classes.edit_icon}
                    onClick={() => props.editHandeler(id, item)}
                  >
                        <img src={editicon} alt="Edit icon"/>
                    </span>
                }
            </td>
        )
    })
}
export default tdata;