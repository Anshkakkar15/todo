import React, { useState ,useEffect } from "react";
import Additem from "../Additem";
import Notes from "./Notes";

export default function Home() {

  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  }
  else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = (note) => {
    console.log('deleting',)
    setNotes(notes.filter((e) => {
      return e !== note;
    }))
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const addNotes = (title,description) =>{
    console.log('i am adding note',title,description)
    let sno;
    if (notes.length === 0) {
      sno = 0;
    }
    else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      description: description,
    }
    setNotes([...notes, myNote]);
    console.log(myNote);
  }

  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <div>
      <Additem addNotes={addNotes} />
      <Notes notes={notes} onDelete={onDelete} />
    </div>
  );
}
