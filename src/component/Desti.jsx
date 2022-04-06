import React from 'react'

const Desti = (props) => {
  return (
   <>
       <div className="grid-items">
               <div>
                   <img src={props.img} alt="" />
                   <h4>fly to {props.name} </h4> 
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae nesciunt esse saepe,
                    vitae numquam maxime cupiditate, vel, 
                   inventore ducimus ipsum minus sunt a excepturi fugit vero veniam tempore voluptate?</p>
               </div>
           </div>
   </>
  )
}

export default Desti