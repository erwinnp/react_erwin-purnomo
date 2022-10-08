import React from 'react';
import '../assets/styles/FormRadio.css';

const FormRadio = (props) => {
  const { name, value, labelRadio, onChange } = props;
  return (
    <div className='form-radio'>
      <label>{labelRadio}</label>
      <input
        className='input-radio'
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRadio;
