import React from 'react'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {

  const { employees, selectedTeam} = useContext(DataContext);
  const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length;

  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'member' : 'members'} </h3>
          <p>click on cards to select team members</p>
        </div>
      </div>
    </header>
  )
}

export default Header