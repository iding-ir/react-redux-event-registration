import { FETCH_DATA } from "../constants";
import data from "../apis/data";

export const fetchData = () => async (dispatch) => {
  const response = await data.get("registration-form-setup-information.json");

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};
