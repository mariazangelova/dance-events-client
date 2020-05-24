import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
//import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  //const user = useSelector(selectUser);
  return (
    <button className="logout-button" onClick={() => dispatch(logOut())}>
      LOGOUT
    </button>
  );
}
