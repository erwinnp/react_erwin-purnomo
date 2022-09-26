import React, { useState } from 'react';
import FormField from './FormField';
import '../assets/styles/Form.css';
import FormRadio from './FormRadio';
import FormFile from './FormFile';
import FormTextArea from './FormTextArea';
import FormKelas from './FormKelas';
import { useRef } from 'react';

const Form = () => {
  const data = {
    namaLengkap: '',
    email: '',
    noHandphone: '',
    pendidikan: '',
    kelas: '',
    harapan: '',
  };

  const [baseData, setBaseData] = useState(data);
  const suratFile = useRef(null);
  const [errorNama, setErrorNama] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorHandphone, setErrorHandphone] = useState('');

  const regexName = /^[A-Za-z ]*$/;
  const regexEmail = /^\w+([\].-]?\w+)*@\w+([\].-]?\w+)*(\.\w{2,3})+$/;
  const regexPhone = /^[\d-]{9,14}$/;

  const handleSubmit = (e) => {
    if (errorNama !== '') {
      alert('Data pendaftar tidak valid');
    } else if (errorEmail !== '') {
      alert('Data pendaftar tidak valid');
    } else {
      alert(`Data pendaftar ${baseData.namaLengkap} berhasil mendaftar`);
    }
    handleReset();
    e.preventDefault();
  };

  const handleReset = () => {
    setBaseData(baseData);
    setErrorNama('');
    setErrorEmail('');
    setErrorHandphone('');
    suratFile.current.value = '';
  };

  const handleChange = (e) => {
    setBaseData({ ...baseData, [e.target.name]: e.target.value });

    if (e.target.name === 'namaLengkap') {
      if (regexName.test(e.target.value)) {
        setErrorNama('');
      } else {
        setErrorNama('Nama harus berupa huruf!');
      }
    }

    if (e.target.name === 'email') {
      if (regexEmail.test(e.target.value)) {
        setErrorEmail('');
      } else {
        setErrorEmail('Email yang dimasukkan tidak sesuai!');
      }
    }

    if (e.target.name === 'noHandphone') {
      if (regexPhone.test(e.target.value)) {
        setErrorHandphone('');
      } else {
        setErrorHandphone('No handphone harus berupa angka!');
      }
    }
  };

  return (
    <form>
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>
      <FormField
        label='Nama Lengkap :'
        type='text'
        placeholder='Nama lengkap'
        name='namaLengkap'
        value={baseData.namaLengkap}
        onChange={handleChange}
      />
      <FormField
        label='Email :'
        type='text'
        placeholder='Email'
        name='email'
        value={baseData.email}
        onChange={handleChange}
      />
      <FormField
        label='No Handphone :'
        type='text'
        placeholder='No handphone'
        name='noHandphone'
        value={baseData.noHandphone}
        onChange={handleChange}
      />
      <div>
        <label>Latar Belakang Pendidikan :</label>
        <FormRadio
          labelRadio='IT'
          name='pendidikan'
          value={baseData.pendidikan}
          onChange={handleChange}
        />
        <FormRadio
          labelRadio='Non IT'
          name='pendidikan'
          value={baseData.pendidikan}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <label>Kelas Yang Dipilih :</label>
        <FormKelas />
      </div>
      <div style={{ marginTop: '0.74rem' }}>
        <label>Foto Surat Kesungguhan :</label>
        <FormFile />
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <label>Harapan Untuk Coding Bootcamp :</label>
        <FormTextArea />
      </div>
      <span>
        <p>Peringatan :</p>
        <li>{errorNama}</li>
        <li>{errorEmail}</li>
        <li>{errorHandphone}</li>
      </span>
      <div className='btn-wrapper'>
        <button
          className='btn btn-submit'
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <button
          className='btn btn-reset'
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
