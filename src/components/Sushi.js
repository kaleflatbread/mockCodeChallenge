import React, { Fragment } from 'react'

const Sushi = (props) => {
  // debugger
  return (props.sushis.map(sushi => {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={props.onClick}>
          {props.eaten ?
              null
            :
              <img value={sushi.id} src={sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }))
}

export default Sushi
