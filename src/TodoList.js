import React, { Component } from "react";

class Todolist extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="Введите задачу"></input>
                        <button type="submit">ok</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Todolist;