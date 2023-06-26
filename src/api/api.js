import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';  // FastAPI backend URL

//fetch 2nd inning 
export const fetchSecondInningWin = async (matchId, overId) => {
  try {
    const response = await axios.get(`${BASE_URL}/match/s-inning-win/${matchId}/${overId}`);
    console.log(response)
    return response.data.Win_second;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
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

// Fetch win prediction for second inning over
export const fetchWinPredictionSecondInningOverById = async (matchId, overId) => {
  try {
    const response = await axios.get(`${BASE_URL}/match/s-inning-win/${matchId}/${overId}`);
    return response.data.Win_second;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchNextBestBatsman = async (inningId, wicketId) => {
  try {
    const response = await axios.get(`${BASE_URL}/match/next-best-batsman/${inningId}/${wicketId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNextBestBatsman = async (inningId, wicketId, data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/match/next-best-batsman/${inningId}/${wicketId}`,
      data
    );
    return response.data.Impact;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const getGroundBatsmanScore = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/get-next-batsman-score`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const highImpactBoundaries = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict_high_impact_boundaries`, data);
    return response.data;   
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const highImpactBoundaryPercentage = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict_high_impact_boundary_percentage`, data);
    return response.data;   
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const highImpactWicketFalling = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict_high_impact_wicket_falling`, data);
    return response.data;   
  } catch (error) {
    console.error(error);
    throw error;
  }
}