import React from 'react';
import './App.css';
export default class List extends React.Component{
    
    render(){
    List = props => (
    <ul>
    {props.items.map((item, index)=> <li key={index}> {item}</li>)}
        </ul>
);
return(
<div> 
<ul id = 'fine'>
    {this.props.items.map((item, index)=> <li key={index}> {item}</li>)}
   
        </ul>
</div>
);
    }
}