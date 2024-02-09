import {Link} from "react-router-dom";

interface Props {

}

export const NavBar: React.FC<Props> = ({}) => {
    return (
        <section className="section-navbar">
            <h2>Navigation Bar</h2>
            <Link to="/menu">Menu</Link>
            <Link to="/shopping-cart">Shopping Cart</Link>
        </section>
    );
};