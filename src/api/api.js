import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';  // FastAPI backend URL

// Fetch match by ID before start
export const fetchMatchByIdBeforeStart = async (matchId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-match-before-start/${matchId}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch win prediction before match starts
export const fetchWinPredictionBeforeMatchStarts = async (matchId) => {
  try {
    const response = await axios.get(`${BASE_URL}/win-pred-before-match-start/${matchId}`);
    return response.data.Win;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch first inning over by ID
export const fetchFirstInningOverById = async (matchId, overId) => {
  try {
    const response = await axios.get(`${BASE_URL}/match/f-inning-over/${matchId}/${overId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch win prediction for first inning over
export const fetchWinPredictionFirstInningOverById = async (matchId, overId) => {
  try {
    const response = await axios.get(`${BASE_URL}/match/f-inning-win/${matchId}/${overId}`);
    return response.data.Win;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
