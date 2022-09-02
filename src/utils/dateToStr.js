
const dateToStr = date => date.toLocaleString('en-US', 
    {year: 'numeric',
    month: '2-digit',
    day: '2-digit'}
    );

export default dateToStr;

