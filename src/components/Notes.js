import React from "react";
import "./Notes.css";
import Notecard from "./Notecard";

export default function Notes(props) {

    return (
        <>
        <hr />
            <h1>Your Notes</h1>
            {props.notes.map((note) => {
                return <Notecard note={note} key={note.sno} onDelete={props.onDelete} />
            })}
        </>
    );
}
