import '../styles/components/logo.styles.scss';

import logoText from '../assets/images/logo/separated_logo/ibs-circle-text_small.png';
import logoShiddonaut from '../assets/images/logo/separated_logo/ibs-circle-shiddonaut_small.png';

const Logo = ({ logoClass }) => (
    <div className={`logo
        ${logoClass ? 'logo__' + logoClass : ''}
    `}>
        <img
            src={logoText}
            className="logo__text"
        />
        <img
            src={logoShiddonaut}
            className="logo__shiddonaut"
        />
    </div>
);

export default Logo;