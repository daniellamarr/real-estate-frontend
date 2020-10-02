import React from 'react';

const UpdateUser = ({fullname, email, customerId, address, phone, onChangeText, submitForm}) => {
  return (
    <>
      <h2>Update Customer Details</h2>
      <form onSubmit={e => submitForm(e)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">FullName</label>
            <input type="text" className="form-control" id="fullname" value={fullname} onChange={e => onChangeText('fullname', e.target.value)} />
          </div>
        </div>
        {/* <div className="form-group">
          <label for="inputAddress2">Customer Id</label>
          <input type="text" className="form-control" id="customerId" placeholder="6788yy" value={customerId} onChange={e => onChangeText('customerId', e.target.value)} />
        </div> */}
        <div className="form-group">
          <label for="inputAddress">Email</label>
          <input type="text" className="form-control" id="email" placeholder="email@emil.com" value={email} onChange={e => onChangeText('email', e.target.value)} />
        </div>

        <div className="form-group">
          <label for="inputAddress2">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Apartment, studio, or floor" value={address} onChange={e => onChangeText('address', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="Apartment, studio, or floor" value={phone} onChange={e => onChangeText('phone', e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Update Customer</button>
      </form>
    </>
  );
};

export default UpdateUser;
