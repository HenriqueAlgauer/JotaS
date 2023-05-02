import './box.css'

function Box({color, textSize}){
    return(
        <div backgroundColor={color} className="box">
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex, repellat nam tempora quisquam debitis praesentium asperiores perferendis unde qui aspernatur fugit at aliquam accusantium. Tenetur esse iste architecto quasi.</p>
        </div>
    )
}

Box.defaultProps = {
    backgroundColor: '#ebb152',
}

export {Box}