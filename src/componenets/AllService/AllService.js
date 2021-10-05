import React, {
    useEffect,
    useState
} from 'react';

const AllService = () => {
        // display all services in services page
        const [services, setServices] = useState([])
        useEffect(() => {
            fetch("https://raw.githubusercontent.com/same-se22/fakeData/main/products.JSON")
                .then(res => res.json())
                .then(data => setServices(data))
        }, [])
        return ( 
            <div className = "container mt-3" >
            <div className = "row" >
            <h1 className = "text-center service-heading mt-5 mb-3" > Our Services </h1>
             {services.map(service => < div key = {service.id} className = "col-lg-4 my-5" >
                        <div className = "card service-card text-center p-4 mt-4" >

                        <div className = "" >
                        <h5 className = "service-title mb-4" > {service.name} </h5> 
                        <p className = " m-0 price-text" > {service.price} tk per course </p> 
                        <p className = "service-text mb-3" > {service.about} </p>
                        </div> 
                        <img src = {service.img} className = "card-pic" alt = "..." />
                        </div> 
                        </div>
                        )
                    } 
                    </div> 
                    </div>

            );
        };

        export default AllService;