import React, { useState } from "react";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
    const [productList, setProductList] = useState([]);

    return (
        <div>
            <DisplayAll
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    );
};

export default Main;

//make sure if they want 2 things on page//