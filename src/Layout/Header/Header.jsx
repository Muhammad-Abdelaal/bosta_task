import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

import classes from "./Header.module.css";
import logo from "../../Assets/logo.png";
import logoAr from '../../Assets/logo-ar.png';

import Context from "../../Store/Context";
import NavItem from "./NavItem/NavItem";
import LangBtn from "./LangBtn/LangBtn";

function Header() {
  const {i18n, t} = useTranslation();
  const ctx = useContext(Context);
  const navigate = useNavigate()


  return (
    <div className={classes.header}>
      <nav className={classes["header-nav"]} >
        <img onClick={()=>{navigate('/')}} alt="logo" src={i18n.language === 'ar' ? logoAr :logo} className={i18n.language === 'ar' ? classes['logo-ar']:classes.logo } />

        <nav className={classes["navigaton"]} >
          <NavItem title = {t('header.home')} />
          <NavItem title = {t('header.pricing')} />
          <NavItem title = {t('header.contact_sales')} />
        </nav>

        <div className={classes['navigations-right']} >
          <NavItem className='sm-d-none' title={t('header.trackShipment.text')}type="track" />
          <div className={classes['nav-right-container']} >
            <div className={classes.signin}>{t('header.signin')}</div>
            <div className={classes.signup}>{t('header.signup')}</div>
            <LangBtn />
          </div>
          <div
            onClick={()=>{ctx.functions.switchMenuHandler()}}
            className={`burger-btn-container ${ctx.isMenuOpen === true ? "open" : ""}`}>
            <div className={"burger-btn"} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
