import { Fragment, } from 'react';

import classes from './ShipmentDetails.module.css';
import Card from '../../../UI/Card';
import Border from '../../../UI/Border';

import dateHelpers from '../../../helpers/dateHelpers';
import langFormatHelper from '../../../helpers/langFormatHelper';
import { useTranslation } from 'react-i18next';


function ShipmentDetails({shipmentData}) {

  const {t} = useTranslation();
  const stateCases = ['TICKET_CREATED', 'PACKAGE_RECEIVED', 'OUT_FOR_DELIVERY' , 'DELIVERED', 'CANCELLED','DELIVERED_TO_SENDER'];
  let stateCasesInecies = [];

  // computed
  const transitionEvents = shipmentData.TransitEvents;
  const shipmentCurrentStateColor = shipmentData.CurrentStatus.state === 'DELIVERED_TO_SENDER' ? '#F9BA02' :shipmentData.CurrentStatus.state === 'DELIVERED' ? '#36B600' :'#F40005';
  let lastHub = transitionEvents ? transitionEvents.find(item => item.hub) && transitionEvents.find(item => item.hub).hub  :'';
  let cancellationReason = transitionEvents ? transitionEvents.find(item => item.reason) && transitionEvents.find(item => item.reason).reason  :'';
  //--------
  
  


  stateCases.forEach(state => {
    if (gettingStateIndex(state) !== undefined) {
      stateCasesInecies.push(gettingStateIndex(state))
    }
  })
  function gettingStateIndex (state) {
    const foundItem = transitionEvents.find(item => {
      return item.state === state
    })
    if (foundItem) {
      const foundItemIndex = transitionEvents.findIndex(item => {
        return item.timestamp === foundItem.timestamp
      })
      return foundItemIndex
    }
  }

  
  const transitionEventsList = transitionEvents && transitionEvents.map ((item, index) => {
    
    lastHub = item.hub ? item.hub : lastHub;
    const formattedState = item.state.split('_').join(' ');

   
    return (
      <div  key={item.timestamp} className={classes['transition-event']}>
        <div >{lastHub !== undefined ? langFormatHelper.hubLangHandler(lastHub): '_'}</div>
        <div >{dateHelpers.yearFormatHandler(item.timestamp)}</div>
        <div >{dateHelpers.hourFormatHandler(item.timestamp)}</div>
        <div>
          <p>
            {langFormatHelper.detailsLangHandler(formattedState)}
          </p>
          {
            index === transitionEvents.length-1 && cancellationReason !== '' ?
            <p style={{color:shipmentCurrentStateColor}} className={classes['cancellation-reason']}>{langFormatHelper.detailsLangHandler(cancellationReason)}</p> :''
          }
        </div>
      </div> 
    )
   
  })

  return (
    <Fragment>
        <div className={classes['shipment-details']}>
            <div className={classes['shipment-details-title']} >{t('shipmentDetails.shipmentDetails')}</div>
            <Card style={{overflowX:'auto'}}>
              <div className={classes['shipment-details-container']}>
                  <div className={classes['shipment-details-container-header']}> 
                    <div className={classes['header-title']}>{t('shipmentDetails.branch')}</div>
                    <div className={classes['header-title']}>{t('shipmentDetails.date')}</div>
                    <div className={classes['header-title']}>{t('shipmentDetails.time')}</div>
                    <div className={classes['header-title']}>{t('shipmentDetails.details')}</div>
                  </div>
                  <Border />
                  <div className={classes['shipment-details-container-header-details']}>
                    {transitionEventsList}
                  </div>
              </div>
            </Card>
        </div>
    </Fragment>
  )
}

export default ShipmentDetails;