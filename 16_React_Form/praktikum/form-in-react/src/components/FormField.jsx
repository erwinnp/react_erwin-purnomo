import React from 'react';
import '../assets/styles/FormField.css';

const FormField = (props) => {
  const { type, placeholder, name, label, value, onChange } = props;
  return (
    <div className='form-field'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormField;
