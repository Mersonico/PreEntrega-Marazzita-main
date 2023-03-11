

import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {items} ) => {
  return (
    <div style={ {
        display: "flex",
        width: "100%",
        minHeight: "80vh",
        justifyContent: "block",
        flexWrap: "wrap",
                
        gap: "20px",
        padding: "20px 0"
    } } >
        
        {
            items.map( (element)=>{
                return <Item key={element.id} element={element} />
            } )
        }

    </div>
  )
}

export default ItemList