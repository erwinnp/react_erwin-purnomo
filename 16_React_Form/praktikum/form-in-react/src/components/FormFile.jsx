import React from 'react';
import '../assets/styles/FormFile.css';

const FormFile = (props) => {
  const { name, value, labelFile, onChange } = props;
  return (
    <div className='form-file'>
      <input
        className='input-file'
        type='file'
        name={name}
        value={value}
        labelFile={labelFile}
        onChange={onChange}
      />
    </div>
  );
};

export default FormFile;
