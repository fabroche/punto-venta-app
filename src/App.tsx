import './App.css'
import {ProductList} from "./components/ProductList";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {MenuPage} from "./pages/MenuPage";
import {LoginPage} from "./pages/LoginPage";
import {ShoppingCartPage} from "./pages/ShoppingCartPage";
import {NavBar} from "./components/NavBar";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/menu"/>}
                ></Route>
                <Route
                    path="/login"
                    element={<LoginPage/>}
                ></Route>
                <Route
                    path="/menu"
                    element={<MenuPage/>}
                ></Route>
                <Route
                    path="/shopping-cart"
                    element={<ShoppingCartPage/>}
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
