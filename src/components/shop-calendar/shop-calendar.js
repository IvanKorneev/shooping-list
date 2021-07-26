import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./shop-calendar.sass"

const ShopCalendar = () => {

    const [data, setData] = useState(new Date());

    const onChange = (data) => {
        setData(data)
    };
    return (
        <div className='shop-calendar'>
            <Calendar onChange={onChange} value={data}/>
            {console.log(data)}
        </div>
    );
}
export default ShopCalendar;