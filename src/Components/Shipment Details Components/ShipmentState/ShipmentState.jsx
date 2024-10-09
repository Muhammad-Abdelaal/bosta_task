
import Card from "../../../UI/Card";
import classes from "./ShipmentState.module.css";
import Border from "../../../UI/Border";

import langFormatHelper from "../../../helpers/langFormatHelper";
import dateHelpers from "../../../helpers/dateHelpers";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

function ShipmentState({shipmentData}) {
  const {i18n,t} = useTranslation();
  const phases = ['TICKET_CREATED', 'PACKAGE_RECEIVED', 'OUT_FOR_DELIVERY', 'DELIVERED',];

  // computed
  const transitionEvents = shipmentData.TransitEvents;
  let cancellationReason = transitionEvents ? transitionEvents.find(item => item.reason) && transitionEvents.find(item => item.reason).reason  :'';
  const shipmentCurrentStateColor = shipmentData.CurrentStatus.state === 'DELIVERED_TO_SENDER' ? '#F9BA02' :shipmentData.CurrentStatus.state === 'DELIVERED' ? '#36B600' :'#F40005';
  const isDelivered = shipmentData.CurrentStatus.state === 'DELIVERED';
  const isReceived = shipmentData.TransitEvents.find(item => item.state === 'PACKAGE_RECEIVED');
  const isOutForDelivery = shipmentData.TransitEvents.find(item => item.state === 'OUT_FOR_DELIVERY'); 

  let currentPhase ;
  if (transitionEvents) {
    for(let i = 0 ; i < transitionEvents.length ; i++) {
      if (phases.includes(transitionEvents[i].state)) {
        currentPhase = transitionEvents[i].state;
      }
    }
  }
  //--------

  return (
    <Card>
      <div className={classes["shipment-state"]}>

        <div className={classes["shipment-state-item"]}>
          <div className={classes["shipment-state-item-title"]}>
            {`${t('shipmentDetails.trackingNumber')} ${shipmentData.TrackingNumber}`}
          </div>
          <div style={{color:shipmentCurrentStateColor}} className={classes["shipment-state-item-data"]}> {langFormatHelper.shipmentStateLangHandler(shipmentData.CurrentStatus.state)}</div>
        </div>

        <div className={classes["shipment-state-item"]}>
          <div className={classes["shipment-state-item-title"]}>{`${t('shipmentDetails.lastUpdate')}`}</div>
          <div className={classes["shipment-state-item-data"]}>
            <span>{langFormatHelper.daysLangHandler(shipmentData.CurrentStatus.timestamp)}</span>
            <span> {i18n.language === 'en' ? 'at' : 'فى'}{` ${dateHelpers.hourFormatHandler(shipmentData.CurrentStatus.timestamp)} ${dateHelpers.yearFormatHandler(shipmentData.CurrentStatus.timestamp)}`}</span>
          </div>
        </div>

        <div className={classes["shipment-state-item"]}>
          <div className={classes["shipment-state-item-title"]}>{t('shipmentDetails.provider')}</div>
          <div className={classes["shipment-state-item-data"]}>{shipmentData.provider}</div>
        </div>

        <div className={classes["shipment-state-item"]}>
          <div className={classes["shipment-state-item-title"]}>{t('shipmentDetails.deliveryDate')}</div>
          <div className={classes["shipment-state-item-data"]}>{shipmentData.PromisedDate ? dateHelpers.yearFormatHandler(shipmentData.PromisedDate) : dateHelpers.yearFormatHandler(new Date(Date.now()).toLocaleString()) }</div>
        </div>

      </div>
      
      <Border />

      <div className={classes["shipment-progress"]}>
        <div className={classes["shipment-progress-bar"]} >
            <div style={{backgroundColor:shipmentCurrentStateColor}} className={classes["shipment-progress-bar-circle"]}><FontAwesomeIcon className={classes.checkmark} icon={faCheck} /></div>
            <div style={isDelivered || isReceived? {backgroundColor:shipmentCurrentStateColor} : {}} className={classes["shipment-progress-bar-line"]}></div>
            <div style={isDelivered || isReceived? {backgroundColor:shipmentCurrentStateColor} : {}} className={classes["shipment-progress-bar-circle"]}><FontAwesomeIcon className={classes.checkmark} icon={faCheck} /></div>
            <div style={isDelivered || isOutForDelivery? {backgroundColor:shipmentCurrentStateColor} : {}} className={classes["shipment-progress-bar-line"]}></div>
            <div style={!isDelivered && isOutForDelivery?{backgroundColor:shipmentCurrentStateColor, minWidth:'41px', minHeight:'41px'}:isDelivered || isOutForDelivery? {backgroundColor:shipmentCurrentStateColor}  : {}} className={classes["shipment-progress-bar-circle"]}>{!isDelivered && isOutForDelivery? <FontAwesomeIcon style={i18n.language === 'ar'?{transform:'rotateY(180deg)'}:{}} className={classes.checkmark} icon={faTruckFast} /> :<FontAwesomeIcon className={classes.checkmark} icon={faCheck} />}</div>
            <div style={isDelivered ? {backgroundColor:shipmentCurrentStateColor} : {}} className={classes["shipment-progress-bar-line"]}></div>
            <div style={isDelivered ? {backgroundColor:shipmentCurrentStateColor} : {}} className={classes["shipment-progress-bar-circle"]}><FontAwesomeIcon className={classes.checkmark} icon={faCheck} /></div>
        </div>
        <div className={classes["shipment-progress-text"]}  >
            <div className={classes.phase}>
              <p>{t('shipmentDetails.shipmentCreated')}</p>
              {currentPhase === 'TICKET_CREATED' && <span style={{color:shipmentCurrentStateColor, fontSize:14, fontWeight:600, maxWidth:'150px'}}>{langFormatHelper.detailsLangHandler(cancellationReason)}</span>}
            </div>
            <div className={classes.phase}>
              <p>{t('shipmentDetails.packageReceived')}</p>
              {currentPhase === 'PACKAGE_RECEIVED' && <span style={{color:shipmentCurrentStateColor, fontSize:14, fontWeight:600, maxWidth:'150px'}}>{langFormatHelper.detailsLangHandler(cancellationReason)}</span>}
            </div>
            <div className={classes.phase}>
              <p>{t('shipmentDetails.outForDelivery')}</p>
              {currentPhase === 'OUT_FOR_DELIVERY' && <span style={{color:shipmentCurrentStateColor, fontSize:14, fontWeight:600, maxWidth:'150px'}}>{langFormatHelper.detailsLangHandler(cancellationReason)}</span>}
              </div>
            <div className={classes.phase}>
              <p>{t('shipmentDetails.delivered')}</p>
            </div>
        </div>
      </div>
    </Card>
  );
}

export default ShipmentState;
