import React, { useEffect, useRef, useState } from 'react'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const navbarRef = useRef();
    const dropdownRef1 = useRef();
    const dropdownRef2 = useRef();

    useEffect(() => {
        // // console.log(dropdownRef1)
        // // console.log(dropdownRef2)

        if(window.innerWidth > 1000){
            const mouseHover = (dropdown, e) => {
                // console.log(dropdown, e)
                // console.log(dropdown.current.lastElementChild.style)
                dropdown.current.lastElementChild.style.opacity = '1';
                dropdown.current.lastElementChild.style.visibility = 'visible';
    
    
                navbarRef.current.style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
                // console.log(navbarRef.current.style.backgroundColor);
            }
    
            const mouseOut = (dropdown, e) => {
                // console.log(dropdown, e)
                // console.log(dropdown.current.lastElementChild.style)
                dropdown.current.lastElementChild.style.opacity = '0';
                dropdown.current.lastElementChild.style.visibility = 'hidden';
    
    
                navbarRef.current.style.background = 'transparent';
                // console.log(navbarRef.current.style.backgroundColor);
            }
    
    
    
            [dropdownRef1, dropdownRef2].forEach(dropdown => {
                // console.dir(dropdown.current)
                dropdown.current.addEventListener("mouseover", mouseHover.bind(this, dropdown));
    
                dropdown.current.addEventListener("mouseout", mouseOut.bind(this, dropdown));
    
            })
    
    
            return () => {
                [dropdownRef1, dropdownRef2].forEach(dropdown => {
                    // console.dir(dropdown.current)
                    dropdown.current.removeEventListener("mouseover", mouseHover);
    
                    dropdown.current.removeEventListener("mouseout", mouseOut);
                });
            }
        }


        



    }, [window.innerWidth]);

    


    return (
        <>
            <header className='navbar-wrapper' ref={navbarRef}>
                <nav className={`navbar ${showMenu && 'change'}` }>

                    <div className="menu" onClick={()=> setShowMenu(!showMenu)}>
                        <div className="menu-icon">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                        <span>Menu</span>
                    </div>

                    <div className="navbar-logo">
                        <span className="p-1">P</span>
                        <span className="p-2">P</span>
                        Paypal
                    </div>

                    <ul className="nav-list">

                        <li className="nav-list-items 1" ref={dropdownRef1}>

                            <a href="#" className="nav-list-link">Personal <i className="fas fa-chevron-down"></i></a>

                            <ul className="nav-dropdown nav-dropdown-personal">

                                <li className="nav-dropdown-item nav-dropdown-heading">
                                    <a href="#">
                                        <i className="fas fa-chevron-down"></i>Personal
                                    </a>
                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">How Paypal works</a>

                                    <a href="" className="nav-dropdown-link-2">
                                        What can you do with a personal account
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Pay online
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        Online payment without borders
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Send payments
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        Send payments abroad
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Search for deals
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        Pay with PayPal and send money
                                    </a>

                                </li>

                            </ul>


                        </li>

                        <li className="nav-list-items 2" ref={dropdownRef2}>

                            <a href="#" className="nav-list-link">Business <i className="fas fa-chevron-down"></i></a>

                            <ul className="nav-dropdown nav-dropdown-business">

                             <li className="nav-dropdown-item nav-dropdown-heading">
                                    <a href="#">
                                        <i className="fas fa-chevron-down"></i>Business
                                    </a>
                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">All business solutions
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        See our range of products
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Accept online payments
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        Get paid on your website
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Send invoices
                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        Create and email online invoices
                                    </a>

                                </li>

                                <li className="nav-dropdown-item">

                                    <a href="" className="nav-dropdown-link-1">Sell internationally

                                    </a>

                                    <a href="" className="nav-dropdown-link-2">
                                        PayPal supports your global growth
                                    </a>

                                </li>

                            </ul>


                        </li>

                        <li className="nav-list-items">

                            <a href="#" className="nav-list-link">Partners and Developers</a>

                        </li>

                    </ul>

                    <div className="navbar-buttons">

                        <button className="button navbar-btn login-btn">Login</button>

                        <button className="button navbar-btn signup-btn">Signup</button>


                    </div>






                </nav>


            </header>

            <div className="banner">

                <h1 className="banner-heading">W've got you covered</h1>

                <p className="banner-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia eaque debitis voluptates ea facere.</p>

                <button className="blue-btn">Learn More</button>

            </div>

        </>
    )
}

export default Header   