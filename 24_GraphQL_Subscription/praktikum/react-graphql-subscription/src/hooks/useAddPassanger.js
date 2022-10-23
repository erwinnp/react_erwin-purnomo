import { useMutation } from '@apollo/client';
import { addPassanger, allPassangers } from '../configs/TypeDefs';

const useAddPassanger = () => {
  const [addPassangerData, { loading: addLoad }] = useMutation(addPassanger, {
    refetchQueries: [allPassangers],
  });
  return {
    addPassangerData,
    addLoad,
  };
};

export default useAddPassanger;
