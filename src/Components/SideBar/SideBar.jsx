import { useState } from 'react';
import './SideBar.css'
import Logo from '../../assets/logo.png'
import { SideBarData } from '../../Data/Data';
import { useNavigate } from 'react-router-dom';

function SideBar() {

    const navigate = useNavigate();
    const [selected, setselected] = useState(0);


    function handleClick(path, index) {
        setselected(index);
        navigate(path)
    }
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} alt='' onClick={()=> navigate('/')} />
            </div>
            <div className="menu">
                {SideBarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => handleClick(item.navComponent, index)}
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