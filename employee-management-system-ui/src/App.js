import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import React  from 'react';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<EmployeeList />} />
        <Route index element = {<EmployeeList />} />
        <Route path='/employeeList' element = {<EmployeeList />} />
        <Route path='/addEmployee' element = {<AddEmployee />} />
        <Route path='/updateEmployee/:id' element = {<UpdateEmployee />} />
      </Routes>

    </BrowserRouter>
    
    </>
  );
}


export default App;
