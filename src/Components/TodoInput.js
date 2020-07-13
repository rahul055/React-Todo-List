import React from 'react'

const todoinput = (props) => {
    // const { todoinputHandler, inputValue } = props
    const isitems = props.itemsnull;

    return (
        <div className='card card-body mt-5'>
            <div className='form-group'>
                <form onSubmit={props.submititem}>
                    <div >

                        <div className='input-group mb-2'>
                            <div className='input-group-prepend'>
                                <div className="input-group-text">

                                    <i className='fas fa-book text-danger' style={{ fontSize: '2rem' }}></i>
                                </div>
                            </div>
                            <input type='text'
                                className='form-control form-control-lg'
                                onChange={props.click}
                                placeholder='Type to add note'
                                value={props.inputValue}


                            />
                        </div>
                        <button type="submit"
                            disabled={isitems}
                            className=
                            {props.isitem ? "btn btn-block btn-success mt-3" : 'btn btn-block btn-primary mt-3'}
                        >
                            {props.isitem ? 'Edit and ' : ""}
                            {isitems ? "Disabled" : "Add Note"}
                        </button>
                        {/* <input type="submit" value="Click To Add Note's" className='btn btn-block btn-primary mt-3' /> */}

                    </div>

                </form>
            </div>

        </div >
    )
}
export default todoinput;