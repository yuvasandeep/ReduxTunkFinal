// import StartingPageContent from '../components/StartingPage/StartingPageContent';

import { useSelector } from "react-redux";
import classes from "./HomePage.module.css";

const HomePage = () => {
  // const profileSubmit = useSelector((state) => state);
  const { profileReducer: profiles, authReducer: auth } = useSelector(
    (state) => state
  );
  return (
    <div>
      <table className={classes.table}>
        <thead className={classes.head}>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Query</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{profile.name}</td>
              <td>{profile.number}</td>
              <td>{profile.email}</td>
              <td>{profile.address}</td>
              <td>{profile.query}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
