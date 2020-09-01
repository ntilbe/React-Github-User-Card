import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  border-top: thin solid black;
`;

export default (props) => {
  const { followers } = props;

  return (
    <Container>
      {followers.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </Container>
  );
};