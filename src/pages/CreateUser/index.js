import React, {useState} from 'react';
import Header from '../../components/Header';
import CreateUserComponent from '../../components/CreateUser';
import {createUser} from '../../api/userApi';

const CreateUser = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail]= useState('');
  const [customerId, setCustomerId]= useState('');
  const [address, setAddress]= useState('');
  const [phone, setPhone]= useState('');

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
      const response = await createUser({
        fullname,
        customerId,
        email,
        address,
        phone
      });

      const {success} = response.data;
      if (success) {
        alert('User was created successfully');
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
        <CreateUserComponent
          fullname={fullname}
          email={email}
          customerId={customerId}
          address={address}
          phone={phone}
          onChangeText={onChangeText}
          submitForm={submitForm}
        />
      </div>
    </>
  );
};

export default CreateUser;
