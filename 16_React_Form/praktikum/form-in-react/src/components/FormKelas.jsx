import React from 'react';

const FormKelas = (props) => {
  const { type, name, value, onChange } = props;
  return (
    <div>
      <select
        style={{ width: '100%', padding: '0.3rem 0' }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        <option value=''>Pilih Salah Satu Program</option>
        <option value='Kelas Front-End'>Kelas Front-End</option>
        <option value='Kelas Back-End'>Kelas Back-End</option>
        <option value='Kelas Fullstack'>Kelas Fullstack</option>
      </select>
    </div>
  );
};

export default FormKelas;
