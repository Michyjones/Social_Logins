import React from 'react';
import TextInput from '../TextInput/TextInput';
import { Button, ButtonContainer } from './UIdesign.styled';

const UIdesign = () => {
  return (
    <>
      <TextInput
        type="text"
        name="firstName"
        placeholder="First Name"
        required
      />

      <TextInput type="text" name="lastName" placeholder="Last Name" required />
      <TextInput type="email" name="email" placeholder="Email" required />
      <TextInput type="phone" name="phone" placeholder="Phone" required />
      <ButtonContainer>
        <Button type="submit"> Submit</Button>
      </ButtonContainer>
    </>
  );
};

export default UIdesign;
