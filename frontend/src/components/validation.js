export default function Validation(formValues){
    const  error={}
    if(formValues.name===""){
        error.name="Name is required"
    }
    if(formValues.email===""){
        error.email="Email is required"
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email)){
        error.email="Email did not match"
    } 
   if(formValues.phone_no===null){
       error.phone_no="Phone number is required"
   }
   if(formValues.type_of_dress===""){
    error.type_of_dress="Type of dress is required"
    }
   if(formValues.quantity===null){
    error.quantity="Quantity is required"
    }
    if(formValues.date_you_needed===""){
        error.date_you_needed="Date you needed is required"
        }
    if(formValues.type_of_service===""){
        error.type_of_service="Type of service is required"
    }
    if(formValues.cloth_providing_method===""){
        error.cloth_providing_method="Cloth providing method is required"
    }
    if(formValues.preferred_delivery_method===""){
        error.preferred_delivery_method="Preferred delivery method is required"
    }
    return error;
}