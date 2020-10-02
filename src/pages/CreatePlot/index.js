import React, {useState} from 'react';
import Header from '../../components/Header';
import CreatePlotComponent from '../../components/CreatePlot';
import {allocatePlot} from '../../api/plotApi';

const CreatePlot = () => {
  const [customerId, setCustomerId] = useState('');
  const [plotNumber, setPlotNumber] = useState('');
  const [plotDimensions, setPlotDimensions]= useState('');
  const [estate, setEstate]= useState('');
  const [estateAddress, setEstateAddress]= useState('');

  const onChangeText = (field, value) => {
    switch(field) {
      case 'customerId':
        setCustomerId(value);
        break;
      case 'plotNumber':
        setPlotNumber(value);
        break;
      case 'plotDimensions':
        setPlotDimensions(value);
        break;
      case 'estate':
        setEstate(value);
        break;
      case 'estateAddress':
        setEstateAddress(value);
        break;
      default:
        return;
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await allocatePlot({
        customerId,
        plotNumber,
        plotDimensions,
        estate,
        estateAddress,
      });

      const {success} = response.data;
      if (success) {
        alert('Plot was allocated successfully');
        window.location.reload();
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
      <CreatePlotComponent
        customerId={customerId}
        plotNumber={plotNumber}
        plotDimensions={plotDimensions}
        estate={estate}
        estateAddress={estateAddress}
        onChangeText={onChangeText}
        submitForm={submitForm}
      />
      </div>
    </>
  );
};

export default CreatePlot;
