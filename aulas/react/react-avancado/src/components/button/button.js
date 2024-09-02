import React from 'react'
import './button.css'

// const Button =  (props)=>{
//     return (
//     <>
//         <button className='btn'> {props.label}</button>
//     </>
// )}

const sayHello = ()=>{
    console.log('hello');
}

class Button extends React.Component{
    render(){
        return (
            <>
                <button className='btn' onClick={sayHello}> {this.props.label}</button>
            </>
        )
    }
}

Button.defaultProps ={
    label: 'Clique Aqui',

}

export {Button}