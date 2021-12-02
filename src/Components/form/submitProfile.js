import { Fragment, useState } from "react";
// import {useEffect} from 'react';
import sample2 from "./sample2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./submitForm.module.css";
const SubmitProfile = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [query, setQuery] = useState();

  // const[profile, setProfile]=useState();

  // const profileSubmit = useSelector((state) => state);
  const { profileReducer: profileSubmit, authReducer: auth } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const history = useHistory();
  // const profile =useSelector((state) => state);
  console.log(profileSubmit);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: profileSubmit[profileSubmit.length - 1].id + 1,
      name,
      number,
      email,
      address,
      query
    };
    dispatch({ type: "ADD_PROFILE", payload: data });
    alert("Profile Submitted");
    history.push("/");
  };
  return (
    <Fragment>
      <div>
        <div className={classes.img}>
          <img src={sample2} alt="sampleImage" width="40%" height="40%" />
          <section className={classes.form}>
            <form onSubmit={handleSubmit}>
              <div className={classes.h1}>
                <h1>Profile Page</h1>
              </div>
              <div className={classes.control}>
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder=" Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="ContactNumber">Contact Number</label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="Detail Description of Query">
                  Detail Description of Query
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div className={classes.actions}>
                <button>Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Fragment>
  );
};
export default SubmitProfile;
