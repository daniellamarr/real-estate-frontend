import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import CustomerComponent from '../../components/Customer';
import {fetchUser} from '../../api/userApi';

const Customer = ({match}) => {
  const [customer, setCustomer] = useState({});
  const customerId = match.params.customerId;

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        const response = await fetchUser(customerId);
        const {success, data} = response.data;
        if (success) {
          setCustomer(data);
        }
      } catch(err) {}
    }

    loadCustomer();
  }, [customerId]);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <CustomerComponent customer={customer} />
      </div>
    </>
  );
};

export default Customer;