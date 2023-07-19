import '../styles/components/footer.styles.scss';

import { Link } from 'react-router-dom';

import Logo from './logo.component';
import WebsiteNavigation from './website-navigation.component';

export default function Footer () {
    const links = [
        "#",
        "https://www.tiktok.com/@ibs.designs"
    ]

    const socialIcons = [
        "instagram",
        "tiktok"
    ]
    return(
        <footer className="footer">
            <div className="footer__logo">
                <Link to ="/">
                    <Logo logoClass="footer" />
                </Link>
            </div>

            <div className="footer__socialnav">
                <WebsiteNavigation
                    links={links}
                    socialNav
                    socialNavIcon={socialIcons}
                />
            </div>
        </footer>
    );
}