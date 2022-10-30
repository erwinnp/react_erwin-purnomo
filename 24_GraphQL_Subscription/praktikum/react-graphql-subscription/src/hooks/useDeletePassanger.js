import { useMutation } from '@apollo/client';
import { allPassangers, deletePassanger } from '../configs/TypeDefs';

const useDeletePassanger = () => {
  const [deletePassangerData, { loading: deleteLoad }] = useMutation(
    deletePassanger,
    {
      refetchQueries: [allPassangers],
    }
  );

  return {
    deletePassangerData,
    deleteLoad,
  };
};

export default useDeletePassanger;
