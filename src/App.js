import React, { Component } from 'react';
import './App.css';
import Todoinput from './Components/TodoInput';
import Todolist from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uniqid from 'uniqid';


class App extends Component {
  state = {
    items: [],
    item: '',
    id: uniqid(),
    isitem: false
  }

  todoinputHandler = (event) => {
    this.setState({
      item: event.target.value,
    })
  }
  // <-- add list items to array using on submit event !-->
  AddtodoHandler = (event) => {
    event.preventDefault();

    const Listitems = {
      id: this.state.id,
      item: this.state.item
    }

    const updatedlist = [...this.state.items, Listitems];
    this.setState({
      items: updatedlist,
      item: '',
      id: uniqid(),
      isitem: false,
    })
  }

  clearStateHandler = () => {
    this.setState({
      items: [],
    })
  }
  deleteItemHandler = (id) => {
    const delIndex = this.state.items.filter(item =>
      item.id !== id
    )
    this.setState({
      items: delIndex
    })
  }

  editItemHandler = (id) => {
    const delIndex = this.state.items.filter(item =>
      item.id !== id)
    const filteredarr = this.state.items.find(item =>
      item.id === id);
    this.setState({
      items: delIndex,
      item: filteredarr.item,
      isitem: true,
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="row">

          <div className="col-10 col-md-8 mx-auto text-center">

            <Todoinput click={this.todoinputHandler}
              submititem={this.AddtodoHandler}
              inputValue={this.state.item}
              isitem={this.state.isitem}

            />
            <Todolist
              Todolistarr={this.state.items}
              clearall={this.clearStateHandler}
              del={(id) => this.deleteItemHandler(id)}
              edititem={(id) => this.editItemHandler(id)}
            />
          </div>
        </div>
      </div>
    )
  }
}





export default App;
