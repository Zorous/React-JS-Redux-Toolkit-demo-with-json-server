import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteRow } from '../Redux/Slices/TestingSlice';

function Test() {

const dispatch = useDispatch();


//Getting the initiale states value
const testV = useSelector((state)=>state.testX)
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Hobby</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testV.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.hobby}</td>
                                <td>
                                    <button className="btn btn-danger"  
                                    onClick={()=>
                                        dispatch(DeleteRow(item.id))
                                      }
                                      >
                                      
                                        Delete</button> &nbsp; &nbsp;
                                    <button className="btn btn-warning">Update</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
                }

    export default Test