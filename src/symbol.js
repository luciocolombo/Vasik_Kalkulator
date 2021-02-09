import React from 'react'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
function Symbol({symbol, handleSymbol}) {
    return (
        <div>
            <Button className="border" onClick={()=>handleSymbol({symbol})}>{symbol}</Button>
        </div>
    )
}

export default Symbol
