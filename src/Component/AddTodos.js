import React,{Component} from 'react';

class AddTodos extends Component{
    state={
        title:''
    }
    onChange=(e)=>this.setState({[e.target.name]: e.target.value });
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display: "flex"}}> 
                <input type="text"
                name="title"
                style={{flex:'10'}} 
                placeholder="Add Todo..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Submit"
                style={{flex:'1'}}
                className="btn"/>
            </form>
        );
    }
}
export default AddTodos;