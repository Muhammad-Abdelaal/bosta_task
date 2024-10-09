import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Menu.module.css';

import Context from '../../Store/Context';
import LangBtn from '../Header/LangBtn/LangBtn';

function Menu() {
    const {i18n, t} = useTranslation();

    const ctx = useContext(Context);
    const isMenuOpen = ctx.isMenuOpen;

    const menuItems = [
        t('header.home'),
        t('header.pricing'),
        t('header.contact_sales'),
    ]

    const menuItemsList = menuItems.map((item, index) => {

        return (
            <div key={index} className={classes['menu-item']} >{item}</div>
        )
    } )
  return (
    <div style={isMenuOpen ? {transform: 'translateX(0%)'} : {} } className={classes.menu}>
        <div>
            {menuItemsList}
            <div className={i18n.language === 'ar' ? classes.ar :''} ><LangBtn style={{color:'#e30613'}} /></div>
        </div>
        <div style={{display:'flex',flexDirection:'column', gap:'10px', marginTop:'30px'}}>
            <div className={classes.signin}>{t('header.signin')}</div>
            <div className={classes.signup}>{t('header.signup')}</div>
        </div>
    </div>
  )
}

export default Menu