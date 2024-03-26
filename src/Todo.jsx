import React from 'react'
import './App.css'
const Todo = () => {
  return (
    <>
    <div className='main_div'>
        <div className='child-div'>
            <figure>
                <img src='' alt='todologo'/>
                <figcaption>Add your list hear</figcaption>
            </figure>

            <div className='addItems'>
              <input type='text' placeholder='add items'/>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </div>

            <div className='showItems'>
              <div className='eachItems'>
                <h3>Apple</h3>
                <i class="fa fa-trash-alt add-btn" title='Delete Item'></i>
              </div>
            </div>
            <div className='showItems'>
              <button className='btn effect04' data-sm-link-text='Remove all'><span>Check list</span></button>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Todo