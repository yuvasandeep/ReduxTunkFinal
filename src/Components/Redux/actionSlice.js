import { replaceReducer } from "./profileSlice";

export const fetchProfileData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-project-44b7c-default-rtdb.firebaseio.com/profile.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const profileData = await fetchData();
      dispatch(replaceReducer(profileData));
      // console.log(replaceReducer(profileData));
    } catch (error) {
      // alert('data fetched failed')
    }
  };
};

export const sendProfileData = (profile) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-project-44b7c-default-rtdb.firebaseio.com/profile.json",
        { method: "POST", body: JSON.stringify(profile) }
      );
      if (!response.ok) {
        throw new Error("Sending Profile Data Failed...");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      alert("sending profile failed");
    }
  };
};
