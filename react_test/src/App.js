import React from 'react';
import './App.css';
import List from './todolist.js';
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }
    onChange=(event)=>{
this.setState({term: event.target.value});
    }
  
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }
    clear(){
        this.setState({
            term: '',
            items: []
        })
    };
        render() {
            return(
          <div>
              <form className = "App" onSubmit = {this.onSubmit}>
              <input value = {this.state.term} onChange= {this.onChange} placeholder = 'Enter your todo list' required = 'required' />
              <button>SUBMIT</button>
              </form>
              <List items = {this.state.items} />
              <button onClick = {this.clear.bind(this)}>Clear Todo List</button>
    </div>
      );
    }
}

   
    


