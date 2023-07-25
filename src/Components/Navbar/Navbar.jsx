import React, { memo, useEffect, useState } from 'react';
import "./Navbar.css";
import Logo from '../Logo/Logo';
import { menu } from '../../../public/constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Active = (element) => {
        document.querySelectorAll(".nav-link").forEach((item) => {
            item.classList.remove("active");
        });
        element.target.classList.add("active");
    };

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <Logo className={"logo"} />
                <ul className='navbar_nav' style={isOpen ? { height: "500px", display: "flex"} : {}}>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} onClick={Active} className={`nav-link ${item.isActive ? "active" : ""}`}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div title='open menu if click' className={`open-menu ${isOpen ? "active" : ""}`} onClick={() => openMenu()}>
                    <div className={"line "+(isOpen ? "change" :"")}></div>
                    <div className={"line "+(isOpen ? "change" :"")}></div>
                    <div className={"line "+(isOpen ? "change" :"")}></div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
