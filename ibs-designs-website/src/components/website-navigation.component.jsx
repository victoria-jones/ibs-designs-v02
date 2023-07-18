import { Link } from 'react-router-dom';

//social media icons
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg';
import { ReactComponent as TiktokIcon } from '../assets/svg/tiktok.svg';
import { ReactComponent as MailIcon } from '../assets/svg/mail.svg';
import { ReactComponent as YoutubeIcon } from '../assets/svg/youtube.svg';

export default function WebsiteNavigation ({ links, mainNav, footerNav, socialNav, socialNavIcon, mobileMenu, closeMenu }) {

    const socialIcon = {
        'instagram': InstagramIcon,
        'tiktok': TiktokIcon,
        'youtube': YoutubeIcon,
        'email': MailIcon
    }

    return (
        <nav className={`website-navigation
            ${mainNav ? 'website-navigation__main' : ''}
            ${footerNav ? 'website-navigation__footer' : ''}
            ${socialNav ? 'website-navigation__social' : ''}
            ${mobileMenu ? 'website-navigation__mobile' : ''}
        `}>
            <ul className={`website-navigation__list
                ${mainNav ? 'website-navigation__main__list' : ''}
                ${footerNav ? 'website-navigation__footer__list' : ''}
                ${socialNav ? 'website-navigation__social__list' : ''}
                ${mobileMenu ? 'website-navigation__mobile__list' : ''}
            `}>
                {links.map(link => {
                    let SelectedSocialIcon;

                    if(socialNav) {
                        if(socialNavIcon !== undefined) {
                            SelectedSocialIcon = socialIcon[socialNavIcon[links.indexOf(link)]];
                        }
                    }

                        return (
                            <li className={`website-navigation__item
                                ${mainNav ? 'website-navigation__main__item' : ''}
                                ${footerNav ? 'website-navigation__footer__item' : ''}
                                ${socialNav ? 'website-navigation__social__item' : ''}
                                ${mobileMenu ? 'website-navigation__mobile__item' : ''}
                                `}
                                key={`list-item-${links.indexOf(link)}`}
                            >
                                {
                                    socialNav && link !== 'email' ?
                                    (
                                        <a
                                            className={`website-navigation__link
                                                ${mainNav ? 'website-navigation__main__link' : ''}
                                                ${footerNav ? 'website-navigation__footer__link' : ''}
                                                ${socialNav ? 'website-navigation__social__link' : ''}
                                                ${mobileMenu ? 'website-navigation__mobile__link' : ''}
                                            `}
                                            key={`list-link-${links.indexOf(link)}`}
                                            href={link}
                                            onClick={closeMenu}
                                        >
                                            <SelectedSocialIcon
                                                className={`website-navigation__social-icon`}
                                            />
                                        </a>
                                    ) :
                                    (
                                        <Link
                                            className={`website-navigation__link
                                                ${mainNav ? 'website-navigation__main__link' : ''}
                                                ${footerNav ? 'website-navigation__footer__link' : ''}
                                                ${socialNav ? 'website-navigation__social__link' : ''}
                                                ${mobileMenu ? 'website-navigation__mobile__link' : ''}
                                            `}
                                            key={`list-link-${links.indexOf(link)}`}
                                            to={`/${link === 'home' ? '' : link}`}
                                            onClick={closeMenu}
                                        >
                                            {socialNav ?
                                                (
                                                    <SelectedSocialIcon
                                                        className={`website-navigation__social-icon`}
                                                    />
                                                )
                                                :
                                                link
                                            }
                                        </Link>
                                    )

                                }

                            </li>
                        )
                    }
                )}
            </ul>
        </nav>
    );
}