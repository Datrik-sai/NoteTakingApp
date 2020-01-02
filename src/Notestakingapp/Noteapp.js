import React, { Component } from "react";

class Noteapp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    addNoteHandler = event => {
        console.log("its working");
        if (this.theTitle.value.value != "") {
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }

        this.setState(prevstate => {
            return {
                items: prevstate.items.concat(newItem)
            };
        });

        this.theNote.value = "";
        this.theTitle.value = "";
        event.preventDefault();
    };
    removeHandler = index => {
        let { items } = this.state;

        console.log(index);
        items.splice(index, 1);
        this.setState({ items });
    };

    render() {
        return (
            <div>
                <div className="Navbar">
                    <h1>Note Taking App</h1>
                </div>
                <header>
                    {this.state.items.map((val, index) => (
                        <div>
                            {val.title}-{val.note}
                            <button onClick={() => this.removeHandler(index)}>Delete</button>
                        </div>
                  ))}
        </header>

                <div className="footer">
                    <form onSubmit={this.addNoteHandler}>
                        <input
                            type="text"
                            placeholder="Enter the note here"
                            ref={title => (this.theTitle = title)}
                        />
                        <textarea
                            placeholder="Enter the text here"
                            ref={note => (this.theNote = note)}
                        />

                        <button type="submit">ADD NOTE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Noteapp;
