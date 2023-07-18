import '../styles/components/header.styles.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import Logo from 'logo/file/location';

import WebsiteNavigation from './website-navigation.component';
import Logo from './logo.component';
import ViewportSize from './viewport-size.component';

export default function Header () {
    const { width } = ViewportSize();
    const [mobileView, setMobileView] = useState(false);

    //watch mobilebreakpoint for menu
    useEffect(()=> {
        const mobileBreakpoint = 900;
        width <= mobileBreakpoint ? setMobileView(true) : setMobileView(false);
    }, [width]);

    const links = [
        "home",
        "about",
        "contact",
        "shop"
    ];

    const socialLinks = [
        "https://www.tiktok.com/@ibs.designs",
        "#"
    ];

    const socialIcons = [
        "tiktok",
        "instagram"
    ];

    const closeMenu = () => {
        const checkbox = document.getElementById("mobile-menu-checkbox");
        checkbox.checked = false;
    }

    if ( mobileView ) {
        return (
            <header className="header header__mobile">
                <div className="header__mobile__logo">
                    <Link to="/">
                        <Logo logoClass="header" />
                    </Link>
                </div>

                <div className="header__mobile__menu">
                    <input type="checkbox" id="mobile-menu-checkbox" className="header__mobile__checkbox" />
                    <label htmlFor="mobile-menu-checkbox" className="header__mobile__menu__label">
                        <div className="header__mobile__menu__icon">
                        </div>
                    </label>

                    <div className="header__mobile__menu__dropmenu">
                        <div className="header__mobile__menu__main header__mobile__menu--part">
                            <WebsiteNavigation
                                links={links}
                                mainNav
                                mobileMenu
                                closeMenu={closeMenu}
                            />
                        </div>

                        <div className="header__mobile__menu__social header__mobile__menu--part">
                            <WebsiteNavigation
                                links={socialLinks}
                                socialNav
                                socialNavIcon={socialIcons}
                                closeMenu={closeMenu}
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header section-margin">
                <div className="header--left">
                    <Link to="/">
                        <Logo logoClass="header" />
                    </Link>
                    <WebsiteNavigation
                        links={links}
                        mainNav
                    />
                </div>
                <div className="header--right">
                    <WebsiteNavigation
                        links={socialLinks}
                        socialNav
                        socialNavIcon={socialIcons}
                    />
                </div>
            </header>
        );
    }

}