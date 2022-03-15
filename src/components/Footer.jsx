const Footer = () => {
    return (
        <div className="d-flex flex-column h-100">
            <section className="hero text-white py-5 flex-grow-1">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="display-4">Jatin Mahajan</h1>
                            <p className="fst-italic text-muted">Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport. Snippet by <a className="text-primary" href="https://bootstrapious.com/" target="_blank">Bootstrapious</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="/"><b>Home</b></a></li>
                                <li><a href="https://www.linkedin.com/in/jatin-mahajan711/">LinkedIn</a></li>
                                <li><a href="https://my-portfolio-orcin-mu.vercel.app/">Portfolio</a></li>
                                <li><a href="https://github.com/jatin711-debug">GitHub</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Subscribe to my newsLetter</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane">Sub</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;