import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import UpdateUserComponent from '../../components/UserUpdate';
import {fetchUser, updateUser} from '../../api/userApi';

const UpdateUser = ({match}) => {
  const customerUniqId = match.params.customerId;
  const [fullname, setFullname] = useState('');
  const [email, setEmail]= useState('');
  const [customerId, setCustomerId]= useState('');
  const [address, setAddress]= useState('');
  const [phone, setPhone]= useState('');

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        const response = await fetchUser(customerUniqId);
        const {success, data} = response.data;
        if (success) {
          setFullname(data.fullname);
          setEmail(data.email);
          setCustomerId(data.customerId);
          setAddress(data.address);
          setPhone(data.phone);
        }
      } catch(err) {}
    }

    loadCustomer();
  }, [customerId, customerUniqId]);

  const onChangeText = (field, value) => {
    switch(field) {
      case 'fullname':
        setFullname(value);
        break;
      case 'customerId':
        setCustomerId(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser({
        fullname,
        customerId,
        email,
        address,
        phone
      }, customerId);

      const {success} = response.data;
      if (success) {
        alert('User was updated successfully');
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
        <UpdateUserComponent
          fullname={fullname}
          email={email}
          customerId={customerId}
          address={address}
          phone={phone}
          onChangeText={onChangeText}
          submitForm={submitForm}
        />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UpdateUser;
