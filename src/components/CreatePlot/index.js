import React from 'react';

const CreatePlot = ({customerId, plotNumber, plotDimensions, estate, estateAddress, onChangeText, submitForm}) => {
  return (
    <>
      <h2>Allocate plot to a Customer</h2>
      <form onSubmit={e => submitForm(e)}>
        <div className="form-group">
          <label for="inputAddress2">Customer Id</label>
          <input type="text" className="form-control" id="customerId" placeholder="Customer ID" value={customerId} onChange={e => onChangeText('customerId', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Plot Number</label>
          <input type="text" className="form-control" id="plotNumber" placeholder="Plot Number" value={plotNumber} onChange={e => onChangeText('plotNumber', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Plot Dimension</label>
          <input type="text" className="form-control" id="plotDimensions" placeholder="Plot Dimension" value={plotDimensions} onChange={e => onChangeText('plotDimensions', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Estate Name</label>
          <input type="text" className="form-control" id="estate" placeholder="Estate name" value={estate} onChange={e => onChangeText('estate', e.target.value)} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Estate Address</label>
          <input type="text" className="form-control" id="estateAddress" placeholder="Estate Address" value={estateAddress} onChange={e => onChangeText('estateAddress', e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Allocate</button>
      </form>
    </>
  );
};

export default CreatePlot;
