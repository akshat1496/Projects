export default function MainContent() {
    return(
        <main className="Main-content container">
            <div className="Content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit at ratione quisquam asperiores neque eaque dolorem natus! Voluptas quisquam molestiae corrupti. Nesciunt officia in omnis ea quisquam, autem est.</p>
                <div className="btn">
                <button >Shop Now</button>
                <button className="btn-category">Category</button>
            </div>
            <div className="shopping-route">
                <p>Available On </p>
            </div>
            <div className="brand-logo">
                <img src="./public/amazon.png" alt="Logo1" />
                <img src="./public/flipkart.png" alt="Logo2" />
            </div>
            </div>
            
            
            <div className="logo">
                <img src="./public/hero-image.png" alt="Logo" />
            </div>
        </main>
    )
}