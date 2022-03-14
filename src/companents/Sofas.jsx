import React from 'react'
import stols from "../images/stols.jpg"
import sofas from "../images/sofas.jpg"
function Sofas() {
  return (
      <div className='sofapage'>

      
<div className='stosl'>

<img src={stols} alt="" />
<div className='items'>
    <h1>Stools</h1>
    <span>8 items</span>
</div>
</div>


<div className='sofas'>

<img src={sofas} alt="" />
<div className='items'>
    <h1>Sofas</h1>
    <span>7 items</span>
</div>
</div>



      </div>
  )
}

export default Sofas
