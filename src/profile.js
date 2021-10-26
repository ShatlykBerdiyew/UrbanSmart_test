import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Profile() {
  const data = useSelector((state) => state.auth);
  if (data.btnAuth) {
    return <Redirect to="./" />;
  }
  return <h1>{data.profilName}</h1>;
}

export default Profile;
