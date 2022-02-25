import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './ListItem'
import NewPark from './NewPark'

export default function ParkList(props) {

const [card, setCard] = useState([])

useEffect(()=> {
    getParks()
  }, [])
  

  function getParks(){
    fetch("http://localhost:3000/parks")
    .then((resp) => resp.json())
    .then((data) => {
        setCard(data)
        console.log(card)
    })
  }

    return (
        <div>
            <h1>Other National Parks</h1>
            <NewPark refresh={() => getParks()}/>
            <ul>
                {card.map((obj) => (
                    <ListItem key={obj.title} title={obj.title} desc={obj.desc} id={obj.id} refFunction={() => getParks()}/>
                ))}
            </ul>
        </div>
    )
}
