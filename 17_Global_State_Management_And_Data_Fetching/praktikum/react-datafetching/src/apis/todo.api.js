import { axiosInstance } from '../configs/axiosInstance';

const TodoAPI = {
  async getAllTodos() {
    try {
      const response = await axiosInstance.get('/todo');
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async createTodo(data) {
    try {
      const response = await axiosInstance.post('/todo', data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo(id) {
    try {
      const response = await axiosInstance.delete(`/todo/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTodo(id) {
    try {
      const response = await axiosInstance.put(`/update/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default TodoAPI;
