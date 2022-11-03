import React from "react"
import "../styles/BotonDelete.css"
export default function BotonDelete(props){
    return(
        <div className="delete-container" onClick={props.manejarDelete}>
            {props.children}
        </div>
    )
}