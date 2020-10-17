import React, { Component } from "react";
import TodoItem from "./TodoItem"
import "./TodoList.css";

class Todolist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [

            ]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
        
    }

    deleteItem(key) {
        let itemArray = this.state.items.filter((item)=> item.key !== key);

        this.setState({
            items: itemArray
        });
    }

    addItem(e) {
        let itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(itemArray);
        e.preventDefault();
    
}

render() {
    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(el) => this._inputElement = el} placeholder="Введите задачу"></input>
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <TodoItem delete = {this.deleteItem} entries={this.state.items}/>
        </div>

    )
}
}

export default Todolist;