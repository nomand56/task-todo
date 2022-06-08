import React from 'react'
import { todoContext } from '../../Context/Context';
import { useContext } from 'react'
function Todo() {

    const { state, Add_Todo ,dispatch,Move_TODO} = useContext(todoContext);
    const [todo, setTodo] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        Add_Todo({  
            id: Math.floor(Math.random()*100000),
            Name: todo,
            isDone: false,
        })
        setTodo(todo.isDone=true)
        
    
        }


    return (
        <div className='todo-main'>
            <div className='todo-header'>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="What needs to be done?" onChange={(e)=> setTodo(e.target.value)} />
                    <input type="submit" value="Add" />
                </form>
            </div>
            <div className='todo-center'>
                <div className='todo-list'>

                    {state.map((todo) => {
                        return <div className='todo-item' key={todo.id}>
                
                            <li>{todo.Name}</li>

                        <button onClick={()=>{
                            setTodo(todo.isDone=true)
                            Move_TODO({
                                type: 'Move_TODO',
                                payload: todo,
                            })
                        }}> move next  
                        
                          </button>
                        </div>
                    })}
                    <ul>

                    </ul>




                </div>




            </div>




        </div>
    )
}

export default Todo