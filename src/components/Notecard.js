import React from 'react';
import "./Notes.css";

export default function Notecard({note,onDelete}) {
 
  return (
    <div>
      <div className="card">
            <div className="heading">
                <h4> {note.title}</h4>
            </div>
            <div className="description">
                <p>{note.description}</p>
            </div>
            <button className="btn" onClick={()=>{onDelete(note)}}>Delete</button>
        </div>
    </div>
  )
}
