import React from 'react';
import Todoitem from './TodoItem';
const TodoList = (props) => {
    return (
        <div className='mt-5'>
            <h2>Todo-List</h2>

            {

                props.Todolistarr.map(arr => {
                    return <Todoitem arrname={arr.item}
                        key={arr.id}
                        delete={() => props.del(arr.id)}
                        edititem={() => props.edititem(arr.id)}
                    />
                })

            }


            <button className='btn btn-danger btn-block mt-5' onClick={props.clearall}>Clear All</button>
        </div>
    )
}
export default TodoList;