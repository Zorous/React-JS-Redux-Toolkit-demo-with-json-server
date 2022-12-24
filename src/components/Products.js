import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TestAccess, handleDeleteR , handleInsert, updateProduct, getProducts} from '../Redux/Slices/ProductsSlice';

function Products() {
const [title,setTitle]= useState();
const [category,setCategory]= useState("");
const [Image ,setImage] = useState(null);

const {isLoading,products,error} = useSelector((state)=>state.products)
const productsS = useSelector((state)=>state.products.products)
const dispatch = useDispatch();


const [isClicked, setisClicked] = useState(false);
const [CurrentItem ,setCurrentItem] = useState(0);
const [CurrentItemN ,setCurrentItemN] = useState("");

useEffect(()=>{
    dispatch(getProducts())
},[dispatch])




return (
    <div>




        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                       {isClicked?<b>Update product</b>:<b>Add a Product</b>} 
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
                                        <td><b>Title :  </b></td>
                                        <td><input type={"text"}  id="title" 
                                        placeholder={isClicked?CurrentItemN:""}
                                        onChange={(e)=>{setTitle(e.target.value)}}/></td>
                                    </tr> <br />
                                    <tr>
                                        <td><b>Category :  </b></td>
                                        <td><input type={"text"} id="category" 
                                        placeholder={isClicked?category:""}
                                        onChange={(e)=>{setCategory(e.target.value)}}/></td>
                                    </tr> <br />
                                    <tr>
                                        <td><b>Image :  </b></td>
                                        <td><input type={"file"} id="image" 
                                        onChange={(event) => {
                                          console.log(event.target.files[0]);
                                          setImage(event.target.files[0]);
                                        }}/></td>
                                    </tr> <br />
                          
                                    <tr>
                                        <td colSpan={2} align="right"> <br />
                                            <button type="button" className="btn btn-success" onClick={()=>{
                                               isClicked?dispatch(updateProduct({id:CurrentItem,titleN:title,categoryN:category})) :  dispatch(handleInsert({title:title,category:category,image:Image}))
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


        {error?<div class="alert alert-danger" role="alert">
        {error}
      </div>:""}

        <div style={{ margin: "3vh 47vw", display: "flex" }}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
            onClick={()=>{setisClicked(false)}}>
                + Add a Product
            </button>
        </div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">image</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {isLoading?("loading ..."):productsS && productsS.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td><img src={item.images[0]} alt="user" style={{ width: "80px", height: "80px;" }} /></td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => {
                                        dispatch(handleDeleteR(item.id))
                                    }}>
                                    Delete</button> &nbsp; &nbsp;
                                <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal"
                                onClick={() => {
                                    setisClicked(true)
                                    setCurrentItem(item.id)
                                    setCurrentItemN(item.title)
                                    setCategory(item.category)
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


export default Products