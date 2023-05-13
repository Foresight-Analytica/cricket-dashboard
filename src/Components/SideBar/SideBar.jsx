import  { useState } from 'react';
import './SideBar.css'
import Logo from '../../assets/logo.png'
import {SideBarData } from '../../Data/Data';

function SideBar() {

    const [selected, setselected] = useState(0);

  return (
    <div className="sidebar">
        <div className="logo">
            <img src={Logo} alt='' />
        </div>
        <div className="menu">
            {SideBarData.map((item,index)=>{
                return(
                    <div className={selected===index? 'menuItem active':'menuItem'} 
                    key={index} 
                    onClick={()=> setselected(index)}
                    >
                        <img src={item.icon} alt={item.heading} style={{ width: '30px', height: '30px' }} />
                        <span>
                            {item.heading}
                        </span>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default SideBar