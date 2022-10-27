import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../store/features/clientSlice';

const ListGallery = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <>
      {list.map((item) => {
        return (
          <div className='card gallery-card mx-4' key={item.id}>
            <img
              src={item.avatar}
              alt='Img'
              className='card-img-top img-fluid'
            />
            <div className='card-body'>
              <p className='card-text text-center fs-3 fw-semibold'>
                {item.name}
              </p>
              <p className='card-text text-center fs-5 fw-light'>
                Shoot Date : {item.createAt}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListGallery;
