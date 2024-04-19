import React, { useState } from 'react';
import Logo from '../../images/cholaLogo2.png';
import { MdDashboard } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { FaCar, FaHistory } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { MdOutlinePayment } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { GrTransaction } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { TbBrandBooking } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { MdFeedback } from "react-icons/md";

interface SubmenuItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path?: string;
  submenu?: SubmenuItem[];
}

const menuItems: MenuItem[] = [
  { icon: <MdDashboard />, label: 'Dashboard', path: '/' },
  {
    icon: <FiUsers />,
    label: 'All Users',
    submenu: [

      { icon: <FaCar />, label: 'Drivers', path: '/driver-table' },
      { icon: <FaUsers />, label: 'Riders', path: '/rider-table' },
      { icon: <RiAdminFill />, label: 'admins', path: '/admin-table' },
    ],
  },
  {
    icon:<TbReportSearch/>,
    label:'Reports',
    submenu:[
      {icon:<RiMoneyDollarCircleLine/>,label:'Revenue',path:'/chart/revenue'},
      {icon:<FaUsers/>, label:'Users', path:'/charts/users'}
    ]

  },
  {
    icon: <GrTransaction/>,
    label: 'Transactions',
    submenu:[
      {icon:<FaUsers/>,label:'Riders Transactions', path:'/transection/riders'},
      {icon:<RiRefund2Fill/>, label:'Riders Refunds', path:'/transection/refunds'}
    ]
  },
  {
    icon:<FaCarSide/>,
    label:'Rides',
    submenu:[
      {icon:<MdOutlineManageAccounts/>,label:'Ride Management',path:'/ridemanagment'},
      {icon:<TbBrandBooking/>,label:'Ride Bookings',path:'/ridebooking'}

    ]
  },
  { icon: <MdOutlinePayment />, label: 'Payment Methods', path: '/payment-method' },
  { icon: <FaHistory />, label: 'RideHistory', path: '/ride-history' },
  {icon:<MdFeedback/>,label:'FeedBack',path:'/feedback'},

  {icon:<FaPhoneAlt/>,label:'general', path:'/supportnumber'}
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>('dashboard');
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setOpenSubmenus((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const isSubmenuOpen = (itemName: string) => openSubmenus[itemName] || false;

  const getMenuStyle = (itemName: string) => {
    const isActive = activeItem === itemName;

    return {
      base: 'text-gray-900 text-[19px] gap-[15px] flex items-center py-[10px] pl-7 cursor-pointer transition duration-300 ease-in-out relative',
      active: isActive ? 'bg-white text-[19px] text-gray-900' : 'text-[19px] bg-transparent text-gray-900',
      hover: !isActive ? 'hover:bg-white hover:text-gray-900 text-[19px]' : 'text-[19px] hover:bg-white hover:text-gray-900',
      hoverBg: !isActive ? 'hover:before:bg-white hover:before:h-[3px] text-[19px]' : '',
    };
  };

  return (
    <div className="h-[800px] overflow-y-auto 
    
     100 bg-[#d8d4ff]
    ">
      <div className="flex items-center justify-center
gap-1 ">

        <img src={Logo} alt="" className="h-17 w-[140px]  sticky top-0 mr-[20px]" />
      </div>
      <div className="flex flex-col pt-5 h-[320px] text-[19px] text-gray-900 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="text-[19px]">
            {item.submenu ? (
              <div className="relative text-[19px]">
                <div
                  className={`text-[19px] ${getMenuStyle(item.label).base} ${getMenuStyle(item.label).active} ${getMenuStyle(item.label).hover}`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.icon}
                  <p className="text-[16px] text-gray-900">{item.label}</p>
                </div>
                <div className={`ml-10 text-[19px] ${isSubmenuOpen(item.label) ? 'block' : 'hidden'} mt-2`}>
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <Link
                      key={submenuIndex}
                      to={submenuItem.path}
                      className={`text-[19px] ${getMenuStyle(submenuItem.label).base} ${getMenuStyle(submenuItem.label).active} ${getMenuStyle(submenuItem.label).hover}`}
                      onClick={() => handleItemClick(submenuItem.label)}
                    >
                      <div className="text-gray-900 text-[16px]">{submenuItem.icon}</div>
                      <p className="text-[16px] text-gray-900">{submenuItem.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={item.path || ''}
                className={`${getMenuStyle(item.label).base} ${getMenuStyle(item.label).active} ${getMenuStyle(item.label).hover}`}
                onClick={() => handleItemClick(item.label)}
              >
                <div className="text-gray-900 text-[16px]">{item.icon}</div>
                <p className="text-[16px] font-poppins text-gray-900">{item.label}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="border-b-[1px] border-gray-100/[0.3] mt-[320px]"></div>
      <div className="text-gray-900 fixed bottom ml-7 mt-1">
        <Button className="bg-white flex items-center   px-7 py-5" onClick={() => navigate('/admin-login')}>
          <CiLogout className="text-black" size={20} />
          <span className="ml-2">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;