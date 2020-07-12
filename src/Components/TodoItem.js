import React from 'react'

const Todoitem = (props) => {
    return (
        <div className='mt-2 text-center'
        // style={{ fontSize: '20px', fontWeight: '600' }}
        >


            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5> {props.arrname}</h5>
                <span className="ml-auto">
                    <i className='fas fa-pen text-warning ml-4' onClick={props.edititem}></i>
                    <i className='fas fa-trash text-danger ml-3' onClick={props.delete}></i>
                </span>
            </li>





        </div>
    )
}
export default Todoitem;