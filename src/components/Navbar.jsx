 const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <form className="d-flex input-group w-auto">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span className="input-group-text text-white border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
            </form>
        </div>
        </nav>
    )
}

export default Navbar;
