import React from 'react';
import './css/Navbar.css';


export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container">
                    <a className="navbar-brand mt-2 mt-lg-0">
                        <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-filled.png'} alt="Logo"></img>
                        <h1 className="logo-name">Gokul</h1>
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav navbar-left-auto mt-2 ml-auto mt-lg-0">
                            <li className="nav-item ml-auto mx-lg-4">
                                <a className="nav-link project" href="#project">PROJECTS</a>
                            </li>
                            <li className="nav-item ml-auto mx-lg-3">
                                <a className="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item ml-auto mx-lg-3">
                                <a className="nav-link" href="#skills">SKILLS</a>
                            </li>
                            <li className="nav-item ml-auto mx-lg-3">
                                <a className="nav-link" href="#contact">CONTACT</a>
                            </li>
                            <li className="nav-item ml-auto mx-lg-3">
                                <a className="nav-link resume p-2" href={process.env.PUBLIC_URL + '/pdf/resume.pdf'} download>DOWNLOAD RESUME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}