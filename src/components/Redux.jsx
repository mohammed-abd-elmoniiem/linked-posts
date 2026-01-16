import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/productsSlice';

export default function Redux() {

  const dispatch = useDispatch();

  const {counter,user} = useSelector(state=>state.counterReducer)
  const{isLoading,isError,products} = useSelector(state=>state.productReducer)
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <div>
      <h1>Redux</h1>
      <p>Counter: {counter}</p>
      <p>User: {user}</p>


      <div className="">
        <h2>products</h2>

        <div className="">
            {
             isLoading
            }
        </div>
      </div>
      
    </div>
  )
}
