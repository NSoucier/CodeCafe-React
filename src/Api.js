import axios from "axios";

// const BASE_API_URL = "http://localhost:5000";
const BASE_API_URL = "https://snack-or-booze-backend-git-main-nathan-souciers-projects.vercel.app/";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  // gets snacks from API
  static async getSnacks() {
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    return snacks.data;
  }

  // gets drinks from API
  static async getDrinks() {
    const drinks = await axios.get(`${BASE_API_URL}/drinks`)
    return drinks.data;
  }

  // adds snack or drink to API
  static async addMenuItem(data, type) {
    const item = await axios.post(`${BASE_API_URL}/${type}s`, data);
    return
  }

}

export default SnackOrBoozeApi;
