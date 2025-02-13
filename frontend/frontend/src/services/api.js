import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchAdventures = async () => {
  try {
    const response = await axios.get(`${API_URL}/adventures`);
    return response.data;
  } catch (error) {
    console.error("Error fetching adventures", error);
    throw error;
  }
};

export const createAdventure = async (adventureData) => {
  try {
    const response = await axios.post(`${API_URL}/adventures`, adventureData);
    return response.data;
  } catch (error) {
    console.error("Error creating adventure", error);
    throw error;
  }
};

