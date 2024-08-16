import { useEffect, useState } from "react";
import ser from "../../../../public/services.json"
import ServicesCard from "./ServicesCard";

const OurServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    } ,[]  )
    return (
       <div className="my-4"> 
         <div className="text-center space-y-4 ">
           <h1 className="text-orange-600 font-bold text-xl">Service</h1> 
           <p className="text-4xl font-bold">Our Service Area</p>
           <p className="w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        </div>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4 border-2 rounded-xl w-full">
       {
        services.map(service=><ServicesCard service={service} key={service._id}></ServicesCard>)
       }
       
       </div>
       <div className="text-center">
       <button className="btn btn-outline text-orange-600 ">More Services</button>
       </div>
       </div>
    );
};

export default OurServices;