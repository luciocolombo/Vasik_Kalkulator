import React from 'react'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
function Numeros({num, handleNum}) {
    return (
        <div>
            <Button className="border" onClick={()=>handleNum({num})}>{num}</Button>
        </div>
    )
}

export default Numeros
