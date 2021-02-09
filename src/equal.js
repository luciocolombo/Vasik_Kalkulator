import React from 'react'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"

function Equal({handleRes}) {
    return (
        <div>
            <Button className="border equalbutton" onClick={handleRes}>=</Button>
        </div>
    )
}

export default Equal
