import React, { Fragment, useEffect, useState } from 'react';
import ShipmentState from '../../Components/Shipment Details Components/ShipmentState/ShipmentState';
import ShipmentDetails from '../../Components/Shipment Details Components/ShipmentDetails/ShipmentDetails';
import ShipmentAddress from '../../Components/Shipment Details Components/Shipment Address/ShipmentAddress';
import classes from './ShipmentDetailsPage.module.css';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ShipmentTrackingPage() {
  const [shipmentData, setShipmentData] = useState([]);
  const navigate = useNavigate()
  const baseURL = import.meta.env.VITE_BASE_URL;
  const params = useParams();

  useEffect(()=>{
    async function getData(){
      try {
        const response = await axios(`${baseURL}${params.shipmentId}`);
        if (!response.data.CurrentStatus) {
          throw new Error('Shipment was not found')
        }
        setShipmentData({data:response.data,err:null});
      }
      catch(err){
        setShipmentData({data:null,err:err?.response?.data?.error || err});
        navigate('/404');
      }
    }
    getData();
  },[baseURL, navigate, params.shipmentId])
  return (
    <Fragment>
      {shipmentData.length !== 0 ? 
        <ShipmentState shipmentData={shipmentData.data}  />
      : ''}
      {shipmentData.length !== 0 ? 
        
        <div className={classes['details-main-container']}>
          <ShipmentDetails shipmentData={shipmentData.data} /> 
          <ShipmentAddress/>
        </div>
      : ''}
      
        
    </Fragment>
  )
}

export default React.memo(ShipmentTrackingPage) ;