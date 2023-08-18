import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api'; // Replace with your API URL

const id = 0
const data = {}
export const listDocuments = () => axios.get(`${baseURL}/`, {
    headers: {
      'Accept': 'application/json'
    }
  });
export const detailDocument = () => axios.get(`${baseURL}/show/${id}`, data);
export const createDocument = (data) => axios.post(`${baseURL}/store`, data);
export const updateDocument = (id, data) => axios.put(`${baseURL}/update/${id}`, data);
export const deleteDocument = (id) => axios.delete(`${baseURL}/delete/${id}`);
