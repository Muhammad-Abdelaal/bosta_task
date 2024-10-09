const ROOT = document.getElementById('root');

const dateHelpers = {
    yearFormatHandler: (timeStamp) => {
        return new Date(`${timeStamp}`).toLocaleString().split(',')[0]
    },
    hourFormatHandler:(timeStamp) => {
        const pm = ROOT.dir === 'rtl' ? 'م' : 'PM'
        const am = ROOT.dir === 'rtl' ? 'ص' : 'AM'
        const hours = new Date(`${timeStamp}`).toLocaleString().split(',')[1];
        const timePeriod = hours.slice(hours.length-2).trim() === 'PM' ? pm : am 
        return `${hours.slice(0,5)} ${timePeriod}`
    },

}

export default dateHelpers;