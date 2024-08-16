import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {_id,title, img, price} = service
    return (
        <div className="card bg-base-100 w-96 shadow-xl my-4 mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="text-orange-600 font-semibold">Price: ${price}</p>
          <div className="card-actions">
           <Link to={`/book/${_id}`}>
           <button className="btn bg-orange-600">Book Now</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;