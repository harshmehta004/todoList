import React , {Component} from 'react';
import PropTypes from 'prop-types';

 class TodoItem extends Component{
     getStyle=()=>{
         return {
             textDecoration:this.props.todo.completed?'line-through':'none',
             backgroundColor:'lightgrey',
             padding: '10px',
             borderBottom:'1px black dotted'
         }
     }
     
     render(){
        //  console.log(this.props.todos);
        const {id,title}=this.props.todo; 
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> 
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
             </div>
         );
     }
 }
 const btnStyle={
     backgroundColor:'red',
     color:'white',
     borderRadius:'50%',
     cursor:'pointer',
     float:'right',
     border:'none',
     padding:'5px 9px'
 }
 TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}
 export default TodoItem;