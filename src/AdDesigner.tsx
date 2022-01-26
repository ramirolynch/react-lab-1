import {useState} from 'react'

export function AdDesigner () {

    const [flavor, setFlavor] = useState('Chocolate')
    const [color, setColor] = useState(false)
    const [fontSize, setFontSize] = useState(40)

    function ChangeFlavor (e:any) {
        setFlavor(e.target.value)
        console.log(e.target.className)
    }

    function ChangeTheme(e:any) {
        setColor(!color)
    }

    function upSize() {
        setFontSize(fontSize + 1)
    }

    function downSize() {
        setFontSize(fontSize - 1)
    }

    const fontChange = {
        fontSize : `${fontSize}px`
    }

    return ( 
        <article>
            <h2>Ad Designer</h2>
            <div className={color ? 'lightTheme' : 'darkTheme'}>
                <p style={fontChange}>Vote For</p>
                <p className='Caveat' style={fontChange}>{flavor}</p>
            </div>

            <h3>What to Support</h3>
            <div>
            <button className={flavor === 'Chocolate' ? 'Selected' : 'NotSelected'}  value='Chocolate' onClick={ChangeFlavor}>Chocolate</button>
            <button className={flavor === 'Vanilla' ? 'Selected' : 'NotSelected'}  value='Vanilla' onClick={ChangeFlavor}>Vanilla</button>
            <button className={flavor === 'Strawberry' ? 'Selected' : 'NotSelected'}  value='Strawberry' onClick={ChangeFlavor}>Strawberry</button>
            </div>

            <h3>Color Theme</h3>
            <div>
            <button className={color === false ? 'NotSelected' : 'Selected'} value='Light' onClick={ChangeTheme}>Light</button>
            <button className={color === false ? 'Selected' : 'NotSelected'} value='Dark' onClick={ChangeTheme}>Dark</button>
            </div>
            <h3>Font Size</h3>
            
            <div>
            <button onClick={downSize}>Down</button>
            <p className='extraPad'>{fontSize}</p>
            <button onClick={upSize}>Up</button>
            </div>
          

        </article>
    )

}