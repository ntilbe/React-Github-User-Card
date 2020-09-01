import React from "react";
import UserCard from "./UserCard";

export default (props) => {
  const { user } = props;

  return <UserCard user={user} />;
};