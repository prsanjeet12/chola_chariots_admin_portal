import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiderBarView from './components/Sidebar/SiderBarView.tsx';

import Header from './components/Header/Header.tsx';
import RiderTable from './components/Tables/RiderTable.tsx';
import DriverTable from './components/Tables/DiverTable.tsx';
import RideHistoryTable from './components/Tables/RideHistoryTable.tsx';
import PaymentMethodTable from './components/Tables/PaymentMethodTable.tsx';
import LoginPage from './components/authorization/LoginPage.tsx';
import PermissionPage from './components/PermissionPage.tsx'
import AdminTable from './components/Tables/AdminTable.tsx';
import UserLogList from './components/Tables/UserLogList.tsx';
import FeedbackTable from './components/Tables/FeedbackTable.tsx';
import Dashboard from './components/Tables/Dashboard.tsx';
// import Revenue from './components/Tables/Revenue.tsx';
import SupportNumber from './components/SupportNumber.tsx'
import Api from './components/ConfigApi/Api.tsx'
import DriverSerchage from './components/Tables/DriverSerChargeTable.tsx'
import AdminSetting from './components/Settings/AdminSetting.tsx';
import AccountSettings from './components/Settings/AccountSettings.tsx';
import RideManagementTable from './components/Tables/RideMangmentTable.tsx';
import RiderRefundsTable from './components/Tables/Transactions/RiderRefundTable.tsx';
import AccountUpdate from './components/Update/AccountUpdate.tsx';
import RidersTransactionsTable from './components/Tables/Transactions/RidersTransactions.tsx';
import RideBookingTable from './components/Tables/RideBookingTable.tsx';
import Revenue from './components/Charts/Revenue.tsx'
import Revenuee from './components/Charts/Revenue/Revenuee.tsx'
import Home from './components/Tables/Home.tsx'
// import UsersChart from './components/Charts/Users/UsersChart.tsx'
import Demo from './components/Tables/Demo.tsx'
import UserChart from './components/Charts/UsersChart/UsersChart.tsx' 

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <div className="flex bg-[hsl(220,30%,96%)] h-[800px]">
              <div className="basis-[16%]  bg-[hsl(220,30%,96%)] max-h-[1000px]">
                <SiderBarView setActivePage={handleSetActivePage} />
              </div>
              
              <div className="basis-[84%] max-h-[100vh] border font-poppins">
                <Header activePage={activePage} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path='/home' element={<Home/>}/>
                 <Route path='/api' element={<Api/>}/>
                  <Route path="/driver-table" element={<DriverTable />} />
                  <Route path="/rider-table" element={<RiderTable />} />
                  <Route path="/ride-history" element={<RideHistoryTable />} />
                  <Route path="/payment-method" element={<PaymentMethodTable />} />
                  <Route path="/admin-table" element={<AdminTable />} />
                  <Route path="/user-logs" element={<UserLogList />} />
                  <Route path="/revenue" element={<Revenue />} />
                  
                  <Route path='/supportnumber' element={<SupportNumber/>}/>
                  <Route path="/transection/riders" element={<RidersTransactionsTable />} />
                  <Route path="/account-settings" element={<AccountSettings />} />
                  <Route path="/transection/refunds" element={<RiderRefundsTable />} />
                  <Route path="/ridemanagment" element={<RideManagementTable />} />
                  <Route path="/ridebooking" element={<RideBookingTable />} />
                  <Route path="/admin/accountupdate" element={<AccountUpdate />} />
                  <Route path='/driverSerchage' element={<DriverSerchage/>}/>
                  <Route path="/feedback" element={<FeedbackTable />} />
                  <Route path='/revenue' element={<Revenue/>}/>
                  <Route path='/Permission' element={<PermissionPage/>}/>
                  <Route path='/chart/revenue' element={<Revenuee/>}/>
                  <Route path='charts/users' element={<UserChart/>}/>
                  <Route path='/demo' element={<Demo/>}/>
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;