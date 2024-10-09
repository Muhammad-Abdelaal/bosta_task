import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import classes from './NavItem.module.css'
import TrackShipment from '../../../Components/Shared/TrackShipment/TrackShipment';
import Card from '../../../UI/Card';

function NavItem({title, type, className}) {
  
  return (
    <div className={`${classes['nav-item']} ${className}`}>
        <div className={type === 'track' ? classes['nav-track-shipment'] : classes['navigation-item'] }>{title} 
          { type === 'nav-dropdown' || type === 'track' ?
          <FontAwesomeIcon  className={type === 'nav-dropdown' ? classes['navigation-item-icon'] : classes['track-shipment-icon']} icon={faAngleDown} /> :'' }
        </div>
        {type === 'track' &&
         <div className={classes['nav-search-container']} >
          <Card style={{backgroundColor:'white'}}>
           <TrackShipment />
          </Card>
        </div>}
    </div>
  )
}

export default NavItem;