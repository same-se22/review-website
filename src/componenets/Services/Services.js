import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [id , setId] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/same-se22/fakeData/main/products.JSON')
        .then(res => res.json())
        .then(data => setId(data));

    }, []);
     const displayService = id.filter(service => service)
    return ( 
        <div className = "row my-5" >

        <h2 className = "text-center service-heading mt-5 mb-3" > What We Teach </h2> 
        <p className = "text-center service-paragraph mt-1 mb-5" > We have already teach amazing things
        for our students. </p> 
            {displayService.map(item =>
                <div key = {item.id} className = "col-lg-4" >
                 <div className = "card service-card text-center p-4 mb-5" >
          <div className = "" >
                <h5 className = "service-title mb-4" > {item.name} </h5> 
                <p className = " m-0 price-text" > {item.price}
                tk per month </p> 
                <p className = "service-text mb-3" > {item.about} </p> 
                </div> 
                <img src = {item.img} className = "card-pic" alt = "..." />
                </div> 
                </div>
            )
        }

        

          </div>
  )

};

export default Services;