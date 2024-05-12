/* import React from "react"; */
import { useParams } from "react-router-dom";
function User() {
  let { id } = useParams();
  return <div className="px-20 py-3">User {id}</div>;
}

export default User;
