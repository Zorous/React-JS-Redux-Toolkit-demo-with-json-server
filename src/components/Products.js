import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TestAccess, handleDeleteR , handleInsert} from '../Redux/Slices/ProductsSlice';

function Products() {
const [title,setTitle]= useState();
const [category,setCategory]= useState();

const productsS = useSelector((state)=>state.products)

const dispatch = useDispatch();

        return (
          <div>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add a Product</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div style={{}}>
      <form name='f1'>
      <table>
      <tr>
      <td><b>Products title : </b></td>
      <td><input type={"text"} name="title"  onChange={(e)=>{setTitle(e.target.value)}}  /></td>
      </tr> <br/>
      <tr>
      <td><b>Products Category : </b></td>
      <td><input type={"text"} name="category" onChange={(e)=>{setCategory(e.target.value)}} /></td>
      </tr>
      <tr>
      <td colSpan={2} align="right"> <br/>
      <button type="button" className="btn btn-success" onClick={()=>dispatch(handleInsert({title:title,category:category}))}>+ Add</button>
      </td>
      </tr>
      </table>
      
      </form>
   </div>   
      </div>
    </div>
  </div>
</div>

          <div style={{margin:"3vh 47vw",display:"flex"}}>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
            {productsS.map((item,index)=>{
                return(
                    <tr>
                <th scope="row">{index}</th>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                <button className="btn btn-danger"  
                onClick={()=>{
                  dispatch(handleDeleteR(item.id))
                }}>
                Delete</button> &nbsp; &nbsp;    
                <button className="btn btn-warning">Update</button>
                </td>
              </tr>
                )
            })} 
            

            </tbody>
          </table>
          </div>
         
        );
      }


export default Products