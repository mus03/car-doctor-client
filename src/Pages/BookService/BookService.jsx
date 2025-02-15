import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPovider";

const BookService = () => {
    const service =  useLoaderData()
    const {title,_id,price,img} = service
const {user} =  useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        console.log(name,email,date)
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price:price,
        }
        console.log("booking",booking)

        fetch("http://localhost:5000/bookings",{
            method:"post",
            headers:{
                "content-type":"application/json"
        },
        body  : JSON.stringify(booking)
    })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert("booking done")
            }
        })
        
    }
    return (
        <div>
            <h2 className="text-center text-3xl">Book Services:{title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Ammount</span>
          </label>
          <input type="text" defaultValue={"$"+price} placeholder="password" className="input input-bordered" required />
          
        </div>
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Your Comment</span>
          </label>
          <input type="text" placeholder="Comment" className="input input-bordered" required />
          
        </div> */}
        <div className="form-control mt-6">
          <input  className="btn  bg-orange-600 text-white" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
    );
};

export default BookService;