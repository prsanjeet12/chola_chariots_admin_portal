// Header.js

import React, { useState } from 'react';
import { Tooltip, Button,Popover } from 'antd';
import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import User from '../../images/User.png';
import Logo from '../../images/Logo2.png'


interface HeaderProps {
    activePage: string;
  }
const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const navigate = useNavigate();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleTooltipVisibleChange = (visible:boolean) => {
    setIsTooltipVisible(visible);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/accountupdate');
    setIsTooltipVisible(false);
  };

  return (
    <div className='flex items-center bg-white justify-between 
    h-[70px] shadow-lg  px-[30px] '>
       {/* <div className="flex items-center justify-center
gap-1">
        <img src={Logo} alt="" className="h-15 w-[140px] mt-1  mr-[20px]" />
      </div> */}
      <div className='flex items-center rounded-[5px]'>
        <p className='text-white'>{activePage}</p>
      </div>
      <div>
        <div>
        <Popover
  content={
    <div className=''>
      <button  className='flex bg-black px-3 py-2 rounded-md text-white flex-col sm:flex-row mb-4' onClick={() => navigate('/admin/accountupdate')}>
        Update 
      </button>
      <button  className='bg-black px-3 py-2 rounded-md text-white ' onClick={() => navigate('/admin-login')}>
Logout 
      </button>
    </div>
  }
  trigger='hover' // Change trigger to 'hover'
  placement='bottomRight'
>
  <div>
    <img src={User} alt='' />
  </div>
</Popover>;
        </div>
      </div>
    </div>
  );
};

export default Header;
