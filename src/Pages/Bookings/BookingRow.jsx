

const BookingRow = ({booking, handleDelete,handleBookingConfirm}) => {
    const {_id, email, service, img,price,title,status} = booking
    return (
        <tr>
        <th>
        {status==="confirm" ? <button disabled className="btn btn-circle btn-sm"><svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg></button> :<button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>}
        </th>
        <td>
          
            <div className="avatar">
              <div className="rounded h-24 w-24">
                {img && < img
                  src={img}
                  alt={title} /> }
              </div>
         
            
          </div>
        </td>
        <td>
          {service}
        </td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
{
     status==="confirm" ?  <span className="font-body text-primary">Confirmed</span>          :
     <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-sm">Confirm</button>

}        </th>
      </tr>
    );
};

export default BookingRow;