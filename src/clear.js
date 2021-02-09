import React from 'react'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
function Clear({handleCle}) {
    return (
        <div>
           <Button onClick={handleCle}>Clear</Button> 
        </div>
    )
}

export default Clear