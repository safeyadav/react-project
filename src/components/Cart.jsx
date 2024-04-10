
import React from "react"
import { Link } from "react-router-dom"

const Cart = (parameter) => {
  // data destructuring

  const {image,title,price,id}=parameter.item



  return (
    <>

<div className="col">
        <div className="card">
          <img src={image}className="card-img-top" alt={image} width={300} height={300}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <p className="card-text">The ultimate iPad experience with the most advanced technology.it’s nimble and quick, with a silent, fanless design and a beautiful Retina display</p> */}
            <p>${price}</p>
            <Link to={`/productdetail/${id}`} className='btn btn-warning '>View More...</Link>
          </div>
        </div>
      </div>


    </>
  )
}

export default Cart