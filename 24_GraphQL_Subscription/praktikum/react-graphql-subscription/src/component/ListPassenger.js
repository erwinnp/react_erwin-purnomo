import { useState } from 'react';
import useGetPassanger from '../hooks/useGetPassanger';
import useSubsPassanger from '../hooks/useSubsPassanger';
import ListItem from './ListItem';

const ListPassenger = (props) => {
  const { allDatas, allDataLoad, allDataError } = useSubsPassanger();

  const { getPassangerById, passangers, dataLoad, dataError } =
    useGetPassanger();

  const [inputId, setInputId] = useState(0);

  const handleGetPassangerById = () => {
    getPassangerById({
      variables: {
        id: inputId,
      },
    });
  };

  const handleChangeInputId = (e) => {
    if (e.target) {
      const value = e.target.value;
      setInputId(value);
    }
  };

  if (allDataLoad || dataLoad) return <h1>Loading...</h1>;
  if (allDataError || dataError)
    return <h1>`Error ${console.log(allDataError)}`</h1>;

  return (
    <div>
      <div style={{ marginBottom: '50px' }}>
        <table cellPadding='5px' cellSpacing='0' style={{ margin: 'auto' }}>
          <thead bgcolor='red'>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor='white' className='removeBorder'></td>
          </thead>
          {allDatas?.list_pengunjung.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              deletedPassanger={props.deletedPassanger}
            />
          ))}
        </table>
      </div>
      <div>
        <div style={{ marginBottom: '18px' }}>
          <input
            style={{ padding: '4px', marginRight: '4px' }}
            type='text'
            value={inputId}
            onChange={handleChangeInputId}
          />
          <button style={{ padding: '4px' }} onClick={handleGetPassangerById}>
            Cek Pengunjung
          </button>
        </div>
        <table cellPadding='5px' cellSpacing='0' style={{ margin: 'auto' }}>
          <thead bgcolor='red'>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor='white' className='removeBorder'></td>
          </thead>
          {passangers?.list_pengunjung.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              deletedPassanger={props.deletedPassanger}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListPassenger;
