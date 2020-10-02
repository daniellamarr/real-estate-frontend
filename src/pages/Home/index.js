import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Customers from '../../components/Customers';
import {fetchUsers, deleteUser} from '../../api/userApi';

const Home = () => {
  const [customers, setCustomers] = useState([]);

  const loadCustomers = async () => {
    try {
      const response = await fetchUsers();
      const {success, data} = response.data;
      if (success) {
        setCustomers(data);
      }
    } catch(err) {}
  }

  const removeUser = async customerId => {
    try {
      const response = await deleteUser(customerId);
      if (response.data.success) {
        window.location.reload();
      }
    } catch(err) {
      alert(err.response.data.message);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
      <Customers customers={customers} removeUser={removeUser} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
