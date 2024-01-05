import "./App.css";
import Main from "./view/Main";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/" element={<CreateProduct />}  />
                    <Route path="/product/:id" element={<OneProduct />}  />
                    <Route path="/product/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
//make sure these are the routes they want//
export default App;