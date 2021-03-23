import React, {Component} from 'react';
import './App.css';
import Todos from './Component/Todos'
import Header from './Component/layout/Header'
import AppTodos from './Component/AddTodos'
// import{v4 as uuid} from 'uuid'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './Component/pages/About'
import axios from 'axios'
class App extends Component {
  state={
    todos: [
      // {
      //   'title':'Take out the trash',
      //   'id': uuid(),
      //   'completed':false
      // },
      // {
      //   'title':'Dinner',
      //   'id': uuid(),
      //   'completed':false
      // },
      // {
      //   'title':'Meeting',
      //   'id': uuid(),
      //   'completed':false
      // },
    ]
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res=>this.setState( {todos: res.data}))
  }
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
      })
    })
  }
  delTodo=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>
      todo.id!==id
      )]
    }))
    // this.setState({todos:[...this.state.todos.filter(todo=>
    //   todo.id!==id
    //   )]
    // });
  }
  addTodo=(title)=>{
    // const newTodo={ 
    //   id:uuid(),
    //   title,
    //   completed:false
    // }
    axios.post("https://jsonplaceholder.typicode.com/todos",
      {title,
        completed:false}).then(res=>this.setState({todos:[...this.state.todos,res.data]}));
    // this.setState({todos:[...this.state.todos,newTodo]})
  }
  render(){return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" render={props =>(
        <React.Fragment>
          <AppTodos addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )}  />
      <Route path="/about" component={About} />

    </div>
    </Router>
  );
}
}
export default App;
