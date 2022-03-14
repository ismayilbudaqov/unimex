import React from 'react'
import { useState } from 'react'
import {FaSearch,FaUser,FaShoppingBasket,FaBars,} from "react-icons/fa"
import{useSelector,useDispatch} from "react-redux"
import {NavLink} from "react-router-dom"
function Header() {
  const sebet = useSelector(state => state.basketReducer)
const dispatch =useDispatch()
const hesabla = () =>{
  let y = 0
  sebet.map(index => {

    y += Number(index.quantity) * Number(index.price);
  })
 return y
}


const handleSil = (id) => {
  dispatch({type:"REMOVE" , payload:id})

}
  return (
    <div className='container'>
     <div className='header'>
         <h1>UNEOX</h1>

         <ul className='dropdown'>
             <li className='dropdown-content'>LAYOUT</li>
             <li className='dropdown-content'>SHOP</li>
             <li className='dropdown-content'>LOOKBOOK</li>
             <li className='dropdown-content'>BLOG</li>
             <li className='dropdown-content'>PAGE</li>
             <li className='dropdown-content'>CONTACT</li>
         </ul>
         <div className='icons'>
<FaSearch/>
<NavLink to="/login"> <FaUser/> </NavLink>


<div class="cart-button">
<FaShoppingBasket className='cart-button'/>
 
  <div class="cart-dropdown">
  
  {
        sebet && sebet.map((index,key) =>(
          <div className='basket-are'>
          <div className='basket_img'>

<img src={index.image} alt="" />
          </div>

<span> $ {index.price}</span>


          <div>{index.quantity}</div>
        
          <svg className='sil' onClick={()=> handleSil(index.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.538 12.792l-.511-.329 1.799-.206.642 1.674-.506-.32c-.494.8-.948 1.738-.66 2.632-.835-.707-1.302-1.251-1.302-1.908 0-.474.309-1.112.538-1.543zm1.353 1.875c-.254.311-.334.962-.251 1.357.038.181.197.31.383.31h1.645v-1.667h-1.777zm3.569 1.725v.608l-1.124-1.421 1.124-1.427v.599c.94-.002 1.933-.111 2.54-.827-.161 1.082-.377 1.766-.935 2.112-.403.25-1.118.325-1.605.356zm.891-2.138c.396.053.993-.223 1.285-.502.134-.127.159-.331.062-.488l-.867-1.397-1.417.877.937 1.51zm-.313-3.853l.536-.286-.699 1.671-1.774-.258.527-.285c-.458-.822-1.055-1.676-1.976-1.86.635-.238 1.147-.383 1.578-.383.748 0 1.181.421 1.808 1.401zm-2.297.265c-.147-.373-.677-.762-1.062-.882-.176-.055-.366.021-.456.183l-.804 1.436 1.456.813.866-1.55zm9.259-4.666l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z"/></svg>
          </div>
          
        ))}
        <span>Totap-rice: $ {hesabla()}</span>
  </div>
</div>
<FaBars />

         </div>
     </div>
    </div>
  )
}

export default Header
