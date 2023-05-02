import './box.css'

function Box({bgColor, textSize,children}){
    return(
        <div 
        style={{backgroundColor:bgColor, textTransform: textSize}} 
        className="box">
            {children}
        </div>
    )
}

Box.defaultProps = {
    bgColor: '#ebb152',
    textSize: 'uppercase'
}

export {Box}