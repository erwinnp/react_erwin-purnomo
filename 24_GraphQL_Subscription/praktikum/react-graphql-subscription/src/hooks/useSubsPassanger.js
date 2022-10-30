import { useSubscription } from '@apollo/client';
import { subsPassanger } from '../configs/TypeDefs';

const useSubsPassanger = () => {
  const {
    data: allDatas,
    loading: allDataLoad,
    error: allDataError,
  } = useSubscription(subsPassanger);

  return {
    allDatas,
    allDataLoad,
    allDataError,
  };
};

export default useSubsPassanger;
