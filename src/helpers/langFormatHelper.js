
import i18next from 'i18next';
const langFormatHelper = {
  daysLangHandler: (timeStamp) => {
    const day = new Date(`${timeStamp}`).getDay();
    if (i18next.language === "en") {
      switch (day) {
        case 0:
          return "Sun ";
        case 1:
          return "Mon ";
        case 2:
          return "Tue ";
        case 3:
          return "Wed ";
        case 4:
          return "Thu ";
        case 5:
          return "Fri ";
        case 6:
          return "Sat ";
        default:
          return;
      }
    } else {
      switch (day) {
        case 0:
          return "الاحد";
        case 1:
          return "الاثنين";
        case 2:
          return "الثلثاء";
        case 3:
          return "الاربعاء";
        case 4:
          return "الخميس";
        case 5:
          return "الجمعة";
        case 6:
          return "السبت";
        default:
          return;
      }
    }
  },
  detailsLangHandler:(state) => {
    if (i18next.language === "ar") {
      switch (state) {
        case 'TICKET CREATED':
          return 'تم إنشاء الشحنة';
        case 'PACKAGE RECEIVED':
          return 'تم استلام الشحنة من التاجر';
        case 'DELIVERED TO SENDER':
          return 'لم يتم تسليم الشحنة';  
        case 'DELIVERED':
          return 'تم تسليم الشحنة';    
        case 'CANCELLED':
          return 'تم الغاء الشحنة';      
        case 'OUT FOR DELIVERY':
          return 'الشحنة خرجت للتسليم';   
        case 'IN TRANSIT':
          return 'مرحلة نقل';
        case 'NOT YET SHIPPED':
          return 'لم يتم الشحن بعد';
        case 'AVAILABLE FOR PICKUP':
          return 'متاح للاستلام';
        case 'WAITING FOR CUSTOMER ACTION':
          return 'فى انتظار العميل';   
        case 'Cancellation - The customer refuses to give the shipment to the star':
          return 'الغاء - العميل رفض تسليم الشحنة للمندوب';  
        case 'Uncovered Zone':
          return 'منطقة غير متاحة للتوصيل';  
        default:
          return state ;  
      }
    }
    else {
      return state
    }
  },
  hubLangHandler:(state) => {
    if (i18next.language === "ar") {
      switch (state) {
        case 'Cairo Sorting Facility':
         return 'القاهرة';
        case 'Haram Hub':
          return 'الهرم';
        case 'FM & Reverse Hub':
          return 'FM & Reverse Hub';
        case 'Tanta Hub':
          return 'طنطة';  
        case 'El-Mansoura Hub':
          return 'المنصورة';  
        default:
          return state;
      }
    }
    else {
      return state
    }
  },
  shipmentStateLangHandler:(currentState) => {
    if (i18next.language === "en") {
        switch (currentState) {
            case 'DELIVERED_TO_SENDER':
              return 'Delivered to sender';
            case 'DELIVERED':
              return 'Delivered';
            case 'CANCELLED':
              return 'Cancelled'
            default:
              return currentState;
        }
    }
    else {
        switch (currentState) {
            case 'DELIVERED_TO_SENDER':
              return 'لم يتم تسليم الشحنة';
            case 'DELIVERED':
              return 'تم تسليم الشحنة';
            case 'CANCELLED':
              return 'تم الغاء الشحنة'
            default:
              return;
        }
    }
  }
};

export default langFormatHelper;
