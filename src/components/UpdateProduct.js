import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom" ;

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const [headerTitle, setHeaderTitle] = useState("");
    const { productList, setProductList} = props;

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setHeaderTitle(res.data.title);
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            description,
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <header>Note </header>
            <p>Write a new Note!</p>

            <Link to="/">Go back home</Link>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Note Title</label>
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
                    <label>Note Body</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>
                

                <br />
                <input class="submit-input" type="submit" value="Edit Note" />
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default UpdateProduct;