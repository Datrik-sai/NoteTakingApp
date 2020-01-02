import React, { Component } from "react";
import { Icon } from "antd";
import * as moment from "moment";
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
                        <div className="s1">
                            <moment
                                style={{
                                    fontSize: 10,
                                    float: "left",
                                    padding: 2,
                                    color: "green",
                                    
                                }}
                            >
                                {moment().format("MMMM Do YYYY,LT")}
                            </moment>
                            <br />
                            {val.title}-{val.note}
                            <Icon
                                type="delete"
                                style={{
                                    fontSize: "15px",
                                    color: "rgb(179, 76, 76)",
                                    float: "right",
                                    cursor: "pointer",
                                    marginRight: 30,
                                    padding: 5,
                                    outline: "none"
                                }}
                                theme="filled"
                                onClick={() => this.removeHandler(index)}
                            />
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
