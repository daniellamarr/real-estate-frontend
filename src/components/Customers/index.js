import React from 'react';
import { Link } from 'react-router-dom';

const AllCustomers = ({customers, removeUser}) => {
  return (
    <>

    <nav className="navbar navbar-light bg-light">
    <div className="container">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Link to="/create-user"><button className="btn btn-success">Create User</button></Link>
        <Link to="/allocate-plot"><button className="btn btn-success">Allocate Plot</button></Link>
    </div>
    </nav>

    <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{customer.customerId}</td>
              <td>{customer.fullname}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td><Link to={`/customer/${customer.customerId}`}>View</Link>  | <button className="bg-danger" onClick={() => removeUser(customer.customerId)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  );
};

export default AllCustomers;
