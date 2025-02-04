import React from "react"
import Card from "./Card"

export default function CardList({robots}) {
      return (robots.map((user, i) => {
        // console.log(user);
        return (
          <Card 
            key={robots[i].id}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
          />
        )
      }))
}