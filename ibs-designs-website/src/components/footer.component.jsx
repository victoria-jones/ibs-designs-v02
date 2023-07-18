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
            <p>footer</p>
            <Link to ="/">
                <Logo logoClass="footer" />
            </Link>
            <WebsiteNavigation
                links={links}
                socialNav
                socialNavIcon={socialIcons}
            />
        </footer>
    );
}