import { useLazyQuery } from '@apollo/client';
import { pasangersById } from '../configs/TypeDefs';

const useGetPassanger = () => {
  const [
    getPassangerById,
    { data: passangers, loading: dataLoad, error: dataError },
  ] = useLazyQuery(pasangersById);

  return {
    getPassangerById,
    passangers,
    dataLoad,
    dataError,
  };
};

export default useGetPassanger;
