 const Navbar = () => {
    return (
        <>
    <div className="container-navbar">
        <div className="logo-main">
        <h1>VITE</h1>
        </div>
        <div className="links-container">

            <ul>
                <li id="active-link"><a href="" title="Home">Home</a></li>
                
                <li><a href="" title="About Us">About</a></li>
                <li><a href="" title="Services">Services</a></li>
                <li className="login-icon" title="Login">
                    
                </li>
                <div className="bottom-line"></div>
            </ul>
        </div>
    </div>
    

        </>
    )
}

export default Navbar;
