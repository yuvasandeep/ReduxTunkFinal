const initialState = [
  {
    id: 0,
    name: "Yuva Sandeep",
    number: 9494705144,
    email: "yuva.sandeep436@gmail.com",
    address: "D.no:1-181, Hyderabad",
    query: "enter some text"
  },
  {
    id: 1,
    name: "Pavan Kumar",
    number: 7793990999,
    email: "pavankumar@gmail.com",
    address: "D.no:2-181, Hyderabad",
    query: "no data added"
  }
];

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
export const replaceReducer = (state = initialState, action) => {
  //   state.id = action.payload.id;
  //   state.name = action.payload.name;
  //   state.number = action.payload.number;
  //   state.email = action.payload.email;
  //   state.address = action.payload.address;
  //   state.query = action.payload.query;
  switch (action.type) {
    case "REPLACE_PROFILE":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
export default profileReducer;
