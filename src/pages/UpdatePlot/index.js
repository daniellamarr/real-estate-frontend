import React, {useEffect, useState} from 'react';
import qs from 'qs';
import {reallocatePlot} from '../../api/plotApi';
import Header from '../../components/Header';
import UpdatePlotComponent from '../../components/UpdatePlot';

const UpdatePlot = ({location}) => {
  const [customerId, setCustomerId] = useState('');
  const [plotNumber, setPlotNumber] = useState('');

  useEffect(() => {
    const query = qs.parse(location.search, {ignoreQueryPrefix: true});
    setPlotNumber(query.p);
  }, [location.search]);

  const onChangeText = (field, value) => {
    switch(field) {
      case 'customerId':
        setCustomerId(value);
        break;
      case 'plotNumber':
        setPlotNumber(value);
        break;
      default:
        return;
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await reallocatePlot({
        customerId,
        plotNumber,
      });

      const {success} = response.data;
      if (success) {
        alert('Plot was reallocated successfully');
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
      <UpdatePlotComponent
        customerId={customerId}
        plotNumber={plotNumber}
        onChangeText={onChangeText}
        submitForm={submitForm}
      />
      </div>
    </>
  );
};

export default UpdatePlot;
