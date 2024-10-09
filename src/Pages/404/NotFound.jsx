import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';
import { useTranslation } from 'react-i18next';

function NotFound() {
    const {t} = useTranslation();
    return (
        <div className={classes['notfound-container']}>
            <div className={classes['notfound-text-container']}>
            <h1 className={classes['notfound-text']}>404 <br />{t('notfound.notfound')}</h1>
            </div>
            <Link to={'/'} className={classes['notfound-navlink']}>{t('notfound.home')}</Link>
        </div>
    )
}

export default NotFound;