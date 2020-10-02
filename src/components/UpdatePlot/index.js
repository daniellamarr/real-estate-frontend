import React from 'react';

const UpdatePlot = ({customerId, plotNumber, onChangeText, submitForm}) => {
  return (
    <>
      <h2>Re-Allocate plot to another Customer</h2>
      <form onSubmit={e => submitForm(e)}>
        <div className="form-group">
          <label for="inputAddress2">New Customer Id</label>
          <input type="text" className="form-control" id="customerId" placeholder="Customer ID" value={customerId} onChange={e => onChangeText('customerId', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Existing Plot Number</label>
          <input type="text" className="form-control" id="plotNumber" placeholder="Plot Number" value={plotNumber} disabled />
        </div>
        
        <button type="submit" className="btn btn-primary">Re-allocate</button>
      </form>
    </>
  );
};

export default UpdatePlot;
