import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import ServiceAdd from './ServiceAdd'; // Import ServiceAdd

const ServiceList = ({ services, onDelete, onEdit }) => {
  const [editService, setEditService] = useState(null);

  const handleEditClick = (service) => {
    setEditService(service); // Set the service to be edited
  };

  return (
    <div>
      <h2>Healthcare Services</h2>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          onDelete={onDelete}
          onEdit={handleEditClick} // Pass handleEditClick to onEdit
        />
      ))}
      {editService && (
        <ServiceAdd 
          onAdd={(updatedService) => {
            onEdit({ ...editService, ...updatedService }); // Update service details
            setEditService(null); // Clear edit mode
          }} 
          initialData={editService} // Pass existing data for editing
        />
      )}
    </div>
  );
};

export default ServiceList;
