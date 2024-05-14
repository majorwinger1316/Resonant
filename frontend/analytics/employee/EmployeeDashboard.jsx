import React from 'react'
import EmployeeSidebar from '../src/components/EmployeeSidebar'
import "../src/styles/EmployeeDashboard.css"

function EmployeeDashboard() {
  return (
    <div className='employee'>
    <EmployeeSidebar />
    <div>
      <h1>This is the Employee dashboard</h1>
    </div>
    </div>
  )
}

export default EmployeeDashboard
