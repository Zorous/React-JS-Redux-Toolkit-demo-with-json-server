import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { testOne } from '../Redux/Slices/UsersSlice2';
import Users from './Users'

function Users2() {
const dispatch = useDispatch();

const users = useSelector((state => state.users2))

console.log(users)

  return (
    <div>
    <button className="btn btn-success"
    onClick={()=>dispatch(testOne({id:1,name:"ouss"}))}
    >Testing access</button>

    <button className="btn btn-success"
    onClick={<Users />}
    >Testing access2</button>
    </div>
  )
}

export default Users2