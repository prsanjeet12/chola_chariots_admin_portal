import React from 'react'
import TopCards from './TopCards'
import BarChart  from './BarChart'
import RecentRiderTransactions from './RecentTransaction'
const Revenuee:React.FC = () => {
  return (
    <div>
      <TopCards/>
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart/>
        <RecentRiderTransactions/>
          
        </div>
    </div>
  )
}

export default Revenuee
