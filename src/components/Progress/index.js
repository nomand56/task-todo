import React from 'react'
import "./style.css"
import { todoContext } from '../../Context/Context'
import { useContext } from 'react'
function Progress() {
const { state, dispatch } = useContext(todoContext);

  return (
    <div>
        <div className='todo-center'>
                <div className='todo-list'>
                    <ul>
                        {state.map((todo) => {
                      return  <li>
                            {todo.Name}
                        </li>
                        })}
                    </ul>

                </div>
        </div>
    </div>
  )
}

export default Progress