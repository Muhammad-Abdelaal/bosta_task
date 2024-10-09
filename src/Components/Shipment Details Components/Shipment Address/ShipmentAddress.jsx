
import { useTranslation } from 'react-i18next';

import Card from '../../../UI/Card';
import classes from './ShipmentAddress.module.css';
import issueImage from '../../../assets/issue.webp';

function ShipmentAddress() {
    const {t} = useTranslation();

    return (
        <div className={classes['address-main-container']}>
            <div className={classes['address-title']}>{t('shipmentDetails.deliveryAddress')}</div>
            <Card className={classes['address-container']}>
                <div className={classes['address-details']}>
                    امبابة, شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 33,القاهرة
                </div>
                <div  className={classes['address-issue-main-container']} >
                    <div>
                        <img src={issueImage} width={120} alt="" />
                    </div>
                    <div>
                        <p className={classes['address-issue-title']}>{t('shipmentDetails.reportIssueTitle')}</p>
                        <button className={classes['address-issue-button']}>{t('shipmentDetails.reportIssue')}</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ShipmentAddress; 