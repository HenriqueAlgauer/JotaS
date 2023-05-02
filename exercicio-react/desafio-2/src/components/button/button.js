import './button.css'

function showLabel(label){
    alert(`A label desse botão é ${label}`);
}

function Button({label}){
    return(
        <>
            <button onClick={()=>showLabel(label)} >{label}</button>
        </>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export { Button }