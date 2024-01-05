import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const DisplayAll = (props) => {
    
    const { productList, setProductList} = props;
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setProductList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>Note Wall</header>
            <h5>Leave a note</h5>
            <Link to="/product">Write note</Link>
            < br/>
            
            

            {
            
                productList.map((product, index) => (
                    <div key={index}>
                        
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        
                        <Link to={`/product/${product._id}`}>{product.description}</Link>
                        <br />

                        <button onClick={() => navigate(`/product/edit/${product._id}`)}>
                            Edit
                        </button>

                        
                    </div>
                ))
            
            }
        </div>
    );
};

export default DisplayAll;