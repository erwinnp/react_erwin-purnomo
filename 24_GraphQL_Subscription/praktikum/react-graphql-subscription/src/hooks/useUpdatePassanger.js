import { useMutation } from '@apollo/client';
import { allPassangers, updateDataPassanger } from '../configs/TypeDefs';

const useUpdatePassanger = () => {
  const [updatePassanger, { loading: updateLoad }] = useMutation(
    updateDataPassanger,
    {
      refetchQueries: [allPassangers],
    }
  );
  return {
    updatePassanger,
    updateLoad,
  };
};

export default useUpdatePassanger;
