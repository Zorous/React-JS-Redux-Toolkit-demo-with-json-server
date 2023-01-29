import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser,addUser,updateUser } from '../Redux/Slices/UsersSlice';






function Users() {
    const [login, setLogin] = useState([]);
    const [isClicked, setisClicked] = useState(false);
    const [CurrentItem ,setCurrentItem] = useState(0);
    const [CurrentItemN ,setCurrentItemN] = useState("");

    


let usersV=[]

    const dispatch = useDispatch();
    
     usersV = useSelector((state) => state.users)

if(!usersV){
   const Message = "Error"
}



    // useEffect(() => {
    //     axios.get('https://api.github.com/users')
    //         .then((response) => {
    //             setUsers(response.data)
    //             console.log("x",usersV[0])

    //         })
    // }, [])



    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                           {isClicked?<b>Update user</b>:<b>Add a User</b>} 
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{}}>
                                <form name='f1'>
                                    <table>
                                        <tr>
                                            <td><b>log in :  </b></td>
                                            <td><input type={"text"} name="title" 
                                            placeholder={isClicked?CurrentItemN:""}
                                            onChange={(e)=>{setLogin(e.target.value)}}/></td>
                                        </tr> <br />
                              
                                        <tr>
                                            <td colSpan={2} align="right"> <br />
                                                <button type="button" className="btn btn-success" onClick={()=>{
                                                   isClicked?dispatch(updateUser({id:CurrentItem,newValue:login})) :  dispatch(addUser({login:login}))
                                                }} data-dismiss="modal">
                                                {isClicked?<b>Update </b>:<b> + Add </b>}
                                                </button>
                                            </td>
                                        </tr>
                                    </table>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ margin: "3vh 47vw", display: "flex" }}>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                onClick={()=>{setisClicked(false)}}>
                    + Add a User
                </button>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">login</th>
                        <th scope="col">image</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersV?.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{item.id}</td>
                                <td>{item.login}</td>
                                <td><img src={item.avatar_url} alt="user" style={{ width: "80px", height: "80px;" }} /></td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(DeleteUser(item.id))
                                        }}>
                                        Delete</button> &nbsp; &nbsp;
                                    <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal"
                                    onClick={() => {
                                        setisClicked(true)
                                        setCurrentItem(item.id)
                                        setCurrentItemN(item.login)
                                    }}>Update</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>

    )
}

export default Users