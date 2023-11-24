import "./Booking.css"
import Aos from "aos" 
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "react-hook-form"
export default function Booking(){
  Aos.init();

const {register,handleSubmit,formState:{errors},trigger,reset}=useForm()

  const onSubmit=async (data)=>{
    const isValid=trigger();
 if(isValid){
  try{
              await axios.post("http://localhost:3001/booking",data)
              toast.success('Order Placed Successfully', {
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
          reset();
         
 }

}

 
    return(
        <div className="booking-form">

        <div className="booking">
            <div className="important-details">
        
        <form  data-aos="fade-right" data-aos-duration="1000" onSubmit={handleSubmit(onSubmit)}>
            <lable>Name</lable>
            <input type="text"   {...register("name",{required: "Name is required"})}></input>
           {errors.name &&  <p  style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.name.message}</p>}
            <lable>Email</lable>
            <input type="email"    {...register("email",{required: "Email is required",pattern:{value:/^\S+@\S+$/i ,message:"Invalid email type"}})}></input>
            {errors.email&&  <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.email.message}</p>}
            <lable>Phone no</lable>
            <input type="number"  {...register("phone_no",{required: "Phone no is required"})}></input>
            {errors.phone_no && <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.phone_no.message}</p>}
            <lable>Type of dress</lable>
            <input type="text"   {...register("type_of_dress",{required: "Type of dress is required"})}></input>
            {errors.type_of_dress&&  <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.type_of_dress.message}</p>}
            <lable>Quantity</lable>
            <input type="number"  {...register("quantity",{required: "Quantity is required"})}></input>
            {errors.quantity && <p style={{color:"red"}} ><i class="fa-solid fa-circle-exclamation"></i>{errors.quantity.message}</p>}
            <lable>Date you needed</lable>
            <input type="date"  {...register("date_you_needed",{required: "Date you needed is required"})}></input>
            {errors.date_you_needed && <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.date_you_needed.message}</p>}
            <select  {...register("type_of_service" ,{required: "Type of service is required"})}>
            <option value="">Type of service</option>
            <option value="custom tailoring">Custome tailoring</option>
            <option value="alteration">Alteration</option>
            <option value="clothing repair">Clothing repair</option>
            </select>
            {errors.type_of_service&& <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.type_of_service.message}</p>}

            <select  {...register("cloth_providing_method" ,{required: "Cloth providing method is required"})}>
                <option value="">Cloth providing method</option>
                <option value="pickup">Pickup</option>
                <option value="delivery">Drop-off</option>
            </select>
            {errors.cloth_providing_method &&  <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.cloth_providing_method.message}</p>}

            <select   {...register("preferred_delivery_method",{required: "Preferred delivery method is required"})}>
                <option value="">Preferred delivery method</option>
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>

            </select>
            {errors.preferred_delivery_method &&   <p style={{color:"red"}}><i class="fa-solid fa-circle-exclamation"></i>{errors.preferred_delivery_method.message}</p>}

            
            <lable>Address</lable>
            <textarea  {...register("address")}></textarea>
            <lable>Style and design preferences</lable>
            <textarea    {...register("style_and_design_preferences")}></textarea>
            <lable>Special request</lable>
            <textarea {...register("Special_request")}></textarea>
            <div className="form-buttons">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            </div>
        </form>

        </div>

        
                 
        </div>
        <ToastContainer className="custom-toast-container" />

         </div>
    )
}