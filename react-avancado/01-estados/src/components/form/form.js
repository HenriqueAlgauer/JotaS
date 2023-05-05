import {useState} from "react";
import './form.css'

const Form = (props) =>{
    
    const [inputs, setInputs] = useState({
        image: ''
    })

    const handelInputImage = (event) =>{
        setInputs({
            image: event.target.value
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
                    <input type="text" id="image" name='image' onChange={handelInputImage} value={inputs.image}/>
                </div>
                <input className='submit' type="submit" />

            </form>
        </>
    )
}

export {Form}