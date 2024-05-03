



const MedicineCard = ({medicine}) => {

 const {id,name,photo,description,benefit,side_effect,alert,price,deliveryTime} = medicine;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border">
        <figure>
          <img
          className="p-5 rounded-3xl"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Description: {description}</p>
          <p>Benefit: {benefit}</p>
          <p>Side Effect:{side_effect}</p>
          <p>Alert: {alert}</p>
          <div className="flex justify-between">
            <p>Price: {price} $</p>
            <p>Delivery Time: {deliveryTime}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success btn-outline">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
