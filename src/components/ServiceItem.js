import React from 'react';

const ServiceItem = ({ service, onDelete, onEdit }) => {
  return (
    <div className="service-item card p-3 mb-3">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button onClick={() => onEdit(service)} className="btn btn-warning me-2">Edit</button>
      <button onClick={() => onDelete(service.id)} className="btn btn-danger">Delete</button>
    </div>
  );
  

};

export default ServiceItem;
