import React, { Component } from 'react';
import Task from './Task';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete(key){
        var filterIts =this.state.items.filter(
            it => {
                return (it.key !== key) //filtra elementos diferentes do elemento a deletar
            }
        );

        this.setState({
            items: filterIts
        });
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            var it = {
                text: this._inputElement.value,
                key: Date.now()
            };
            //this.state.items.push(it);
            this.setState(ps => {
                return {
                    items: ps.items.concat(it)
                };
            });
        }

        console.log('TESTE', this.state.items);

        this._inputElement.value = "";
        e.preventDefault();        
        
    }

    render() {
        return (
                <div>
                    <div>
                        <form onSubmit={this.addItem}>
                            <input placeholder="O que precisa ser feito?" ref={entrada => this._inputElement = entrada }></input>
                            <button type="submit" style={{display: 'none'}}></button>                           
                        </form>
                    </div>
                    <Task elementos={this.state.items}
                          delete={this.delete}
                    />
                </div>
            );
        }
    }

export default TodoList;