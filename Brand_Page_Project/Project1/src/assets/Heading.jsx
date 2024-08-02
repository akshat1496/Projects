export default function UpperHead() {
    return(
        <nav className="Navigation-Bar container">
            <div className="logo">
                <img src="../public/brand_logo.png" alt="logo"></img>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">About Us</li>
                <li href="#">Contact Us</li>
                <li href="#">Products</li>
            </ul>
            <button>
                    login
            </button>
        </nav>
       
    )
}