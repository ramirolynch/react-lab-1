import {useState} from 'react'

export function Votes () {

    const [vanillaVotes, setVanillaVotes ] = useState(0)
    const [chocolateVotes, setChocolateVotes ] = useState(0)
    const [strawberryVotes, setStrawberryVotes ] = useState(0)
    const [widthVanilla, setWidthVanilla] = useState(0)
    const [widthChocolate, setWidthChocolate] = useState(0)
    const [widthStrawberry, setWidthStrawberry] = useState(0)

    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes
    let vanillaPercent = ((vanillaVotes / totalVotes) * 100) || 0;
    let chocolatePercent = ((chocolateVotes / totalVotes) * 100) || 0;
    let strawberryPercent = ((strawberryVotes / totalVotes) * 100) || 0;


    function addVote(e:any) {

        if(e.target.value === 'Chocolate') {
            setChocolateVotes(chocolateVotes + 1)
        }
        else if (e.target.value === 'Vanilla') {
            setVanillaVotes(vanillaVotes + 1)
        }
        else {
            setStrawberryVotes(strawberryVotes + 1)          
        }
    }

   

    return (
        <article>
            <h2>Vote Here</h2>
            <button onClick={addVote} value='Chocolate'>Chocolate</button>
            <button onClick={addVote} value='Vanilla'>Vanilla</button>
            <button onClick={addVote} value='Strawberry'>Strawberry</button>

            <h3>Chocolate: {chocolateVotes} ({chocolatePercent.toFixed(2)}%)</h3>

            { chocolateVotes > 0 && <div style={{width:`${chocolatePercent}%`}} className='choco'></div> }

            {chocolateVotes === 0 && <p>There are no votes</p>}

            <h3>Vanilla: {vanillaVotes} ({vanillaPercent.toFixed(2)}%)</h3>

            {vanillaVotes > 0 && <div style={{width:`${vanillaPercent}%`}} className='vani'></div>}
            {vanillaVotes === 0 && <p>There are no votes</p>}

            <h3>Strawberry: {strawberryVotes} ({strawberryPercent.toFixed(2)}%)</h3>

            {strawberryVotes > 0 && <div style={{width:`${strawberryPercent}%`}} className='straw'></div>}
            {strawberryVotes === 0 && <p>There are no votes</p>}

        </article>
    )
}