import { Component } from "react";
import './panel.css'

class Panel extends Component{
    constructor(){
        super()
        this.state ={
            title: 'Titulo do Painel'
        }
    } 
    render(){
        return(
            <section className='panel' onClick={()=> this.setState({title: 'Titulo Novo'})}>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export {Panel}