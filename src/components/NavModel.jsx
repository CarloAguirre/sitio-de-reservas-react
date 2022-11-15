

export const NavModel = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
    <div className="container-fluid">
      <div className="ms-4">
        <a className="navbar-brand link-light fw-semibold" href="#">TRIP-INN
        <span><i class="fa-solid fa-magnifying-glass-location ms-1"></i></span>
        </a>
      </div>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link link-light" aria-current="page" href="#">Home</a>
          <a className="nav-link link-light" href="#">Features</a>
          <a className="nav-link link-light" href="#">Pricing</a>
          <a className="nav-link disabled link-light">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
  )
}
