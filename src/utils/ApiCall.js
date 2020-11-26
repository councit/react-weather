import axios from "axios";

async function apiCall() {
  const APIKEY = "4aa1128f6fa7655f7f0ea41dc03cc0a1";
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKEY}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default apiCall;
