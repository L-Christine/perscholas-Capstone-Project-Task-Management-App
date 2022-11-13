import React from 'react'
import { FaInbox, FaCalendarDay, FaCalendarWeek, FaAngleDown, FaTasks } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className='sidebar' data-testid='sidebar'>
        <ul className='sidebarList1'>
            <li>
                <span><FaInbox /></span>
                <span>Inbox</span>
            </li>
            <li>
                <span><FaCalendarDay /></span>
                <span>Today</span>
            </li>
            <li>
                <span><FaCalendarWeek /></span>
                <span>Next Week</span>
            </li>
        </ul>

        <div className='sidebarList2'>
            <span>
                <FaAngleDown />
            </span>
            <h2>Tasks</h2>
        </div>

        <ul className='sidebarTasks'>TASKS!!!!</ul>
        {/* Add tasks component here */}
    </div>
  )
}
