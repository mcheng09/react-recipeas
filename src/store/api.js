const EDAMAM_APP_ID = process.env.REACT_APP_EDAMAM_APP_ID
const EDAMAM_API_KEY = process.env.REACT_APP_EDAMAM_API_KEY

const api = () => {
  return `https://api.edamam.com/search?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}&from=0&to=10&q=`
}

export default api();
