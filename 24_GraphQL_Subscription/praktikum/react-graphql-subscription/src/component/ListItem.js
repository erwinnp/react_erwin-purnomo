import { useState } from 'react';
import useUpdatePassanger from '../hooks/useUpdatePassanger';
import useDeletePassanger from '../hooks/useDeletePassanger';
import './Home.css';

const ListItem = (props) => {
  const { id, nama, umur, jenis_kelamin } = props.data;

  const [editForm, setEditForm] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    nama: '',
    umur: '',
    jenis_kelamin: '',
  });

  const { updatePassanger, updateLoad } = useUpdatePassanger();
  const { deletePassangerData, deleteLoad } = useDeletePassanger();

  const handleEditForm = () => {
    setEditForm(!editForm);
  };

  const handleInputUpdate = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatingData = () => {
    updatePassanger({
      variables: {
        id: id,
        nama: updatedData.nama,
        umur: Number(updatedData.umur),
        jenis_kelamin: updatedData.jenis_kelamin,
      },
    });
  };

  const deletedPassanger = (id) => {
    deletePassangerData({ variables: { id: id } });
  };

  if (updateLoad || deleteLoad) return <h1>Loading ...</h1>;

  return (
    <tbody>
      <>
        {editForm ? (
          <tr>
            <td>
              <form onSubmit={handleUpdatingData}>
                <input
                  name='nama'
                  value={updatedData.nama}
                  onChange={handleInputUpdate}
                  placeholder={nama}
                />
              </form>
            </td>
            <td>
              <form onSubmit={handleUpdatingData}>
                <input
                  name='umur'
                  value={updatedData.umur}
                  onChange={handleInputUpdate}
                  placeholder={umur}
                />
              </form>
            </td>
            <td>
              <form onSubmit={handleUpdatingData}>
                <input
                  name='jenis_kelamin'
                  value={updatedData.jenis_kelamin}
                  placeholder={jenis_kelamin}
                  onChange={handleInputUpdate}
                />
              </form>
            </td>
            <td>
              <form onSubmit={handleUpdatingData}>
                <td className='removeBorder' onClick={handleUpdatingData}>
                  <button>Save</button>
                </td>
                <td className='removeBorder' onClick={handleEditForm}>
                  <button>Cancel</button>
                </td>
              </form>
            </td>
          </tr>
        ) : (
          <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            <td className='removeBorder' onClick={() => deletedPassanger(id)}>
              <button>Hapus</button>
            </td>
            <td className='removeBorder' onClick={handleEditForm}>
              <button>Edit</button>
            </td>
          </tr>
        )}
      </>
    </tbody>
  );
};

export default ListItem;
