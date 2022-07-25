import React,{useState} from 'react'

export default function Additem({addNotes}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitNotes = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }
        else {
            addNotes(title, description);
            setTitle("");
            setDescription("");
        }
    };
    return (
        <div>
            <form onSubmit={submitNotes}>
                <h1>Add Notes</h1>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title here"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <label htmlFor="description">Description</label>
                <textarea
                    cols="30"
                    name="description"
                    rows="10"
                    placeholder="Enter Your notes here"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
                <button className="addBtn" type="submit">
                    Add Note
                </button>
                <div>
                </div>
            </form>
        </div>
    )
}
