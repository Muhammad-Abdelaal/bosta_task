
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './TrackShipment.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


function TrackShipment({place}) {
  const {t} = useTranslation();
  const inputRef = useRef();
  const navigate = useNavigate();

  const functions = {
    getShipmentDetails: async (e)=>{
      e.preventDefault();
      navigate(`/track-shipment/${inputRef.current.value}`)
    }
  }

  
  return (
    <form onSubmit={functions.getShipmentDetails} className={classes.form}>
        {place === 'nav' ? <div className={classes['form-title-nav']}>{t('header.trackShipment.text')}</div> : <div className={classes['form-title']}>{t('header.trackShipment.text')}</div>  }
        <div className={classes['form-actions']}>
          <input ref = {inputRef} placeholder = {t('header.trackShipment.dropdownItems.inputPlaceholder')} className={classes['search-input']} type='text' />
          <button className={classes['search-btn']} ><FontAwesomeIcon className={classes['search-icon']} icon={faSearch} /></button>
        </div>
    </form>
  )
}

export default TrackShipment;