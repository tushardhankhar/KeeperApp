import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes";

function createNote(notes){
    return(
        <Note
            key={notes.id}
            title={notes.title}
            content={notes.content} />
    )
}

function App(){
    return (
        <div>
            <Header />
            {notes.map(createNote)}
            <Footer />

        </div>

    );
}

export default App;