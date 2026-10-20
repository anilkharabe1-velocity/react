import "./Header.css";

const Header = ()=>{
    return (
        <div className="Header">
            <div className="logo-div">
                <img className="logo" src={"https://img.magnific.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg?semt=ais_hybrid&w=740&q=80"}></img>
            </div>
            <h1>Food Delivery App</h1>
            <div className="nav-bar">
                <ul>
                    <li>
                        Home
                    </li>
                     <li>
                        About
                    </li>
                    <li>
                        Cart(5)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;