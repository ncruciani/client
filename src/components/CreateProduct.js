import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom" ;

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors , setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        

        axios
            .post("http://localhost:8000/api/products", {
                title, 
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle("");
                setDescription("");
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [] ; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    };

    return (
        <div>
            <header>Write Notes</header>
            <Link to="/">Go back home</Link>
            <form onSubmit={submitHandler}>
                {errors.map((err , index) =>(
                    <p key={index}>{err}</p>
                ))}
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                <input class="submit-input" type="submit" value="Write this note!" />
            </form>
        </div>
    );
};

export default CreateProduct;