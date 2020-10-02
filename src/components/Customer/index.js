import React from 'react';
import { Link } from 'react-router-dom';

const Customer = ({customer}) => {
  return (
    <>
    <div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">{customer.fullname}</h5>
    <p className="card-text">Address: {customer.address}</p>
    <p className="card-text">Phone Number: {customer.phone}</p>
    <p className="card-text">Email: {customer.email}</p>
    <Link to={`/edit/${customer.customerId}`}><td>Update user detail</td></Link> 
  </div>
</div>
<br></br>
<h3 className="card-title text-center">Plots Allocations</h3>
<br></br>
  <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Plot ID</th>
      <th scope="col">Customer ID</th>
      <th scope="col">Plot Number</th>
      <th scope="col">Plot Dimension</th>
      <th scope="col">Estate Name </th>
      <th scope="col">Estate Address</th>
      <th scope="col">Allocation Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {customer.plots
      && customer.plots.length > 0
      && customer.plots.map((plot, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{customer.customerId}</td>
          <td>{plot.plotNumber}</td>
          <td>{plot.plotDimensions}</td>
          <td>{plot.estate}</td>
          <td>{plot.estateAddress}</td>
          <td>{plot.createdAt}</td>
          <Link to={`/re-allocate/?p=${plot.plotNumber}`}><td>Re-allocate</td></Link> 
        </tr>
    ))}
  </tbody>
</table>
    </>
  );
};

export default Customer;
