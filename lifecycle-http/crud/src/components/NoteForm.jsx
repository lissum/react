import { useState } from "react";

const NoteForm = ({ onAdd }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onAdd(content);
            setContent('');
        }
    };

    return (
        <div className="note-form">
      <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your note"
          rows="4"
          cols="50"
      />
            <br />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};


export default NoteForm;