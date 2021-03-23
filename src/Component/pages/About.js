import React from 'react'
 

function About(){
    return(
        <React.Fragment style={aboutStyle}>
            <h1>About</h1>
            <h6>This is a Todo List App. Version 1.0.0</h6>
            <p>Harsh Mehta</p>
        </React.Fragment>
    )
}
const aboutStyle={
    textAlign:'center'
}
export default About;