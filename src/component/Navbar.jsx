import React from 'react'

const Navbar = () => {
    return (
      <>
     <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">
      E-Commerce
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
             About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
            </a>
        </li>
    
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="buttons">
           <button className="btn"></button>
      </div>

    </div>
  </div>
</nav>
      </>
    )
}

export default Navbar
