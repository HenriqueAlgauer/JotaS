import {useState} from "react";
import './form.css'

const Form = (props) =>{
    
    const [inputs, setInputs] = useState ({
        image: '',
        value: '',
        suit: ''
    })
    

    const handleInputChange = (event)=>{
        const {target} = event
        const {name, value} = target
        
        setInputs({
            ...inputs,
            [name]: value
        })
    } 

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className='form-label'>
                    <label htmlFor="image" >Endereço da imagem da carta</label>
                    <input type="text" id="image" name='image' onChange={handleInputChange} value={inputs.image}/>
                </div>
                <div className='form-label'>
                    <label htmlFor="value" >Nome da carta</label>
                    <input type="text" id="value" name='value' onChange={handleInputChange} value={inputs.value}/>
                </div>
                <div className='form-label'>
                    <label htmlFor="suit" >Naipe de Carta</label>
                    <input type="text" id="suit" name='suit' onChange={handleInputChange} value={inputs.suit}/>
                </div>
                                
                <input type="submit" />
            </form>
        </>
    )
}

export {Form}