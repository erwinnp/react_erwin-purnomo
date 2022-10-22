import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useMutation } from '@apollo/client';
import { addPassanger, allPassangers } from '../configs/TypeDefs';

const Home = () => {
  const [addPassangerData] = useMutation(addPassanger, {
    refetchQueries: [allPassangers],
  });

  const addNewPassanger = (newData) => {
    addPassangerData({
      variables: newData,
    });
  };

  return (
    <div>
      <Header />
      <ListPassenger />
      <PassengerInput addNewPassanger={addNewPassanger} />
    </div>
  );
};

export default Home;
