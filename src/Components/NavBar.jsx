import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({evand}) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">ورود</button>
                        </li>
                        <li className="nav-item">
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">عضویت</button>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                        <button className="btn btn-outline-dark" type="submit">ایجاد رویداد</button> 
                        </a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/events'>رویداد ها</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">تماس با برگزار کننده</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">گزارش</a>
                        </li>

                    </ul>
                    <form className="d-flex border">
                        <input className="form-control me-2 border-0" type="search" placeholder="جستجو" aria-label="Search"/>
                        <button className="btn" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <Link className="navbar-brand" to='/'>
                    <img className='' src={evand} alt="" style={{width: '6rem'}}/>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar