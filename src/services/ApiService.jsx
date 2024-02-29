import axios from 'axios';
import { toast } from 'react-toastify';

// const API_BASE_URL = 'https://my-squad-git-main-dhanrajjangid.vercel.app'; // Your API base URL
const API_BASE_URL = 'http://localhost:8000'; // Your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set timeout as per your requirement
});

// Function to handle API errors and display toast messages
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, data } = error.response;
    if (status === 400) {
      // Handle specific error status codes
      toast.error(data.message || 'Bad Request');
    } else if (status === 401) {
      toast.error(data.message || 'Unauthorized');
      // Redirect to login or handle unauthorized access
    } else if (status === 404) {
      toast.error('Not Found');
    } else {
      toast.error(`Error: ${status}`);
    }
  } else if (error.request) {
    // The request was made but no response was received
    toast.error('No response received from server');
  } else {
    // Something happened in setting up the request that triggered an Error
    toast.error('Error in request setup');
  }
};

// Function to make HTTP requests with error handling
const makeHttpRequest = async (method, endpoint, requestData) => {
  try {
    let response;
    switch (method.toLowerCase()) {
      case 'get':
        response = await apiService.get(endpoint);
        break;
      case 'post':
        response = await apiService.post(endpoint, requestData);
        break;
      case 'put':
        response = await apiService.put(endpoint, requestData);
        break;
      case 'delete':
        response = await apiService.delete(endpoint);
        break;
      // Add other HTTP methods as needed
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// API service function for GET requests
export const getApiData = async (endpoint) => {
  return makeHttpRequest('get', endpoint);
};

// API service function for POST requests
export const postApiData = async (endpoint, requestData) => {
  return makeHttpRequest('post', endpoint, requestData);
};

// API service function for PUT requests
export const putApiData = async (endpoint, requestData) => {
  return makeHttpRequest('put', endpoint, requestData);
};

// API service function for DELETE requests
export const deleteApiData = async (endpoint) => {
  return makeHttpRequest('delete', endpoint);
};

export default apiService;
