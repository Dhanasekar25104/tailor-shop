import "./Review.css"
import { useEffect, useState } from "react";
import Reviewcard from "../components/Review-card";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useForm} from "react-hook-form"

export default function Review(){
  const {register,handleSubmit,formState:{errors},trigger,reset}=useForm()

    const [change,setChange]=useState(false);
    const[data,setData]=useState([]);
    const [update,setUpdate]=useState(0);
 
  function handleClick(){
    setChange(pre=>!pre)
  }


  const onSubmit=async (data)=>{
    const isValid=trigger();
 if(isValid){
  try{
              await axios.post("http://localhost:3001/review",data)
              toast.success('Review Added Successfully', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                width:"500px"
              
                 });
          }
          catch(err){
              console.log(err)
          }
          setUpdate(pre=>pre+1)
         reset();

         
 }

}
  useEffect( ()=>{
    async function fetchData(){
    try{
    const value=await axios.get("http://localhost:3001/review")
    setData(value.data)
  
  }

    catch(err){
      console.log(err)
    }}
    fetchData();

  },[update])
    return(
        <div className="review-form">
            <button onClick={handleClick}>{change?"X":"+Add Review"}</button>
          {change && <form onSubmit={handleSubmit(onSubmit)} >
              
              <input type="text" placeholder="Name" {...register("name",{required:"Name is required"})}></input>
              {errors.name &&   <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.name.message}</p>}

              <select   {...register("rating",{required:"Rating is required"})} >
                    <option value="">Select a rating</option>
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 star</option>
             </select>
             {errors.rating &&   <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.rating.message}</p>}

             <textarea  placeholder="Write a review..."  {...register("review",{required:"Review is required"})}></textarea>
             {errors.review &&   <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.review.message}</p>}

                <button type="submit">Submit</button>
               

            </form>}
            <ToastContainer className="custom-toast-container" />
            {data.map(data=>(
                <Reviewcard
                name={data.name}
                rating={data.rating}
                review={data.review}
                ></Reviewcard>
            ))
            
            }


        </div>

    )
}