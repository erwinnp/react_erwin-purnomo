import axiosInstance from '../configs/axiosInstance';

const clientAPI = {
  async getAllClients() {
    try {
      const response = await axiosInstance.get('/clients');
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default clientAPI;
