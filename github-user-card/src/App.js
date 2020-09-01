import React, { Component } from "react";
import axios from "axios";
import {
  getUserURL,
  followerDummyData,
  getFollowersURL,
} from "./constants";
import RootUser from "./components/RootUser";
import FollowerList from "./components/FollowersList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get(getUserURL("ntilbe"))
      .then((res) => {
        this.setState({ user: res.data });
        axios.get(getFollowersURL("ntilbe")).then((res) => {
          res.data.forEach((follower) => {
            axios
              .get(follower.url)
              .then((result) => {
                this.setState({
                  followers: [result.data, ...this.state.followers],
                });
              })
              .catch((err) => console.log(err));
          });
        });
      })
      .catch((err) => console.log(err));

    this.setState({ user: followerDummyData });
  }

  render() {
    return (
      <Container>
        <RootUser user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </Container>
    );
  }
}