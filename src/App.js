import React, { useState } from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';


const App = () => {
  const [services, setServices] = useState([]);

  const handleAdd = (newService) => {
    setServices([...services, newService]); // Add new service to the list
  };

  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id)); // Remove service by id
  };

  const handleEdit = (editedService) => {
    setServices(services.map(service => 
      service.id === editedService.id ? editedService : service // Update service
    ));
  };

  return (
    <div>
      <h1>Healthcare Services</h1>
      <ServiceAdd onAdd={handleAdd} />
      <ServiceList services={services} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
