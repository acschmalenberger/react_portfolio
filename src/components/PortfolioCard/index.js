import React from "react";
import { Card } from 'react-bootstrap'
import Data from "../../data.js"

function PortfolioCard() {
  return(
    
    <div>

    {Data.map((item)=>{
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {item.image}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Link href="#">{item.link}</Card.Link>
          </Card.Body>
        </Card>
          );
    })}

    </div>

  )

}



export default PortfolioCard;

