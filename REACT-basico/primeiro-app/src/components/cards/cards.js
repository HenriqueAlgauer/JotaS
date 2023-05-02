import { Card } from "../card/card"

const cardsTitle = ['Titulo Card 1','Titulo Card 2','Titulo Card 3',]

const Cards = ()=>{
    return(
        <div>
            <h2>Meus Cards</h2>
            <div>
                {cardsTitle.map((cardTitle, index) => {
                    return (
                    <Card key={index}>
                        <h3>{cardTitle}</h3>
                        <p>esse eh um texto do card</p>
                    </Card>
                    )
                })}
            </div>
        </div>
    )
}

export {Cards}