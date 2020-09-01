import React from "react";
import styled from "styled-components";

const Container = styled.a`
  color: black;
  text-decoration: none;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0rem 0rem 0.125rem 0rem black, 0.125rem 0.125rem 0.25rem grey,
    0.125rem 0.25rem 0.5rem 0rem rgb(150, 150, 150);
  border-radius: 2rem;
  min-height: 30rem;
  position: relative;
  margin-bottom: 2rem;
  background-image: linear-gradient(
    -45deg,
    rgb(200, 200, 200),
    rgb(250, 250, 250)
  );
  transition: 0.125s ease-in-out all;
  &:hover {
    transition: 0.125s ease-in-out all;
    box-shadow: 0rem 0rem 0.125rem 0rem black, 0rem 0rem 1rem 0rem black,
      0rem 0rem 2rem 0rem rgb(150, 150, 150);
    cursor: pointer;
  }
  .bio {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    word-wrap: break-word;
    img {
      border-radius: none;
      border-top-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      width: 15rem;
      height: 15rem;
    }
    width: 15rem;
    height: 100%;
    border-right: thin solid black;
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.25rem;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default (props) => {
  const { user } = props;
  return (
    <Container href={user.html_url} target="_blank">
      <h2>{user.name}</h2>
      <div className="info">
        <section>
          <h3>{user.hireable ? "Hireable!" : "Not for hire."}</h3>
          <p>Followers: {user.followers}</p>
        </section>
      </div>
      <section className="bio">
        <img alt="Profile Picture" src={user.avatar_url} />
        <p>{user.bio}</p>
      </section>
    </Container>
  );
};