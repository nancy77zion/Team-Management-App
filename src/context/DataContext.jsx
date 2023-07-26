import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

// initializes 'selectedTeam' with the value retrieved from localStorage, 
//parsed as a JSON object if available, or sets the default value to "TeamB" if no valid data is found in localStorage.

const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  
const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
  id: 1,
  fullName: "Bob Jones",
  designation: "JavaScript Developer",
  gender: "male",
  teamName: "TeamA"
},
{
  id: 2,
  fullName: "Jill Bailey",
  designation: "Node Developer",
  gender: "female",
  teamName: "TeamA"
},
{
  id: 3,
  fullName: "Gail Shepherd",
  designation: "Java Developer",
  gender: "female",
  teamName: "TeamA"
},
{
  id: 4,
  fullName: "Sam Reynolds",
  designation: "React Developer",
  gender: "male",
  teamName: "TeamB"
},
{
  id: 5,
  fullName: "David Henry",
  designation: "DotNet Developer",
  gender: "male",
  teamName: "TeamB"
},
{
  id: 6,
  fullName: "Sarah Blake",
  designation: "SQL Server DBA",
  gender: "female",
  teamName: "TeamB"
},
{
  id: 7,
  fullName: "James Bennet",
  designation: "Angular Developer",
  gender: "male",
  teamName: "TeamC"
},
{
  id: 8,
  fullName: "Jessica Faye",
  designation: "API Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 9,
  fullName: "Lita Stone",
  designation: "C++ Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 10,
  fullName: "Daniel Young",
  designation: "Python Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 11,
  fullName: "Adrian Jacobs",
  designation: "Vue Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 12,
  fullName: "Devin Monroe",
  designation: "Graphic Designer",
  gender: "male",
  teamName: "TeamD"
}])

//useEffect hook to store data in the browser's localStorage.
//saves the updated 'employees' list as a JSON string in localStorage whenever 'employees' changes.

useEffect(() => {

  localStorage.setItem('employeeList',JSON.stringify(employees))

}, [employees]);

//ensures that the updated 'selectedTeam' value are always persisted in localStorage for later retrieval.
useEffect(() => {

  localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))

}, [selectedTeam]);


function handleSelectedTeam(event) {
  setTeam(event.target.value);
}

//handles the click event the employee card. It updates the teamName of the clicked employee
// based on the value of the selectedTeam variable. If the employee is already in the same team as the selectedTeam,
// their teamName is set to an empty string, effectively removing them from the team. If the employee is not in the same
// team as the selectedTeam, their teamName is updated to the value of selectedTeam, adding them to the specified team.
// Finally, it updates the state with the modified employees array [changeEmployeeCard varible] using setEmployees to trigger a re-render with the updated team information.

function handleEmployeeCardClick(event) {
  const changeEmployeeCard = employees.map((employee) =>
   employee.id === parseInt(event.currentTarget.id)
    ? (employee.teamName === selectedTeam)
    ? {...employee, teamName: ''} 
    : {...employee, teamName: selectedTeam} 
    : employee);
    setEmployees(changeEmployeeCard);
}

return <DataContext.Provider value={{
  employees, selectedTeam, handleSelectedTeam, handleEmployeeCardClick, setTeam
}}>
  {children}
</DataContext.Provider>
}

export default DataContext