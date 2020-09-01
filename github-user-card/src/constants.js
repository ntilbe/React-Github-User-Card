const BASE_URL = "https://api.github.com";

export function getUserURL(username) {
  return `${BASE_URL}/users/${username}`;
}

export function getFollowersURL(username) {
  return `${BASE_URL}/users/${username}/followers`;
}

export const followerDummyData = [
  {
    login: "afinlay5",
    id: 33848228,
    node_id: "MDQ6VXNlcjMzODQ4MjI4",
    avatar_url: "https://avatars3.githubusercontent.com/u/33848228?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/afinlay5",
    html_url: "https://github.com/afinlay5",
    followers_url: "https://api.github.com/users/afinlay5/followers",
    following_url:
      "https://api.github.com/users/afinlay5/following{/other_user}",
    gists_url: "https://api.github.com/users/afinlay5/gists{/gist_id}",
    starred_url: "https://api.github.com/users/afinlay5/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/afinlay5/subscriptions",
    organizations_url: "https://api.github.com/users/afinlay5/orgs",
    repos_url: "https://api.github.com/users/afinlay5/repos",
    events_url: "https://api.github.com/users/afinlay5/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/afinlay5/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "photodude",
    id: 10253980,
    node_id: "MDQ6VXNlcjEwMjUzOTgw",
    avatar_url: "https://avatars0.githubusercontent.com/u/10253980?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/photodude",
    html_url: "https://github.com/photodude",
    followers_url: "https://api.github.com/users/photodude/followers",
    following_url:
      "https://api.github.com/users/photodude/following{/other_user}",
    gists_url: "https://api.github.com/users/photodude/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/photodude/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/photodude/subscriptions",
    organizations_url: "https://api.github.com/users/photodude/orgs",
    repos_url: "https://api.github.com/users/photodude/repos",
    events_url: "https://api.github.com/users/photodude/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/photodude/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "Asuna7",
    id: 22581113,
    node_id: "MDQ6VXNlcjIyNTgxMTEz",
    avatar_url: "https://avatars1.githubusercontent.com/u/22581113?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Asuna7",
    html_url: "https://github.com/Asuna7",
    followers_url: "https://api.github.com/users/Asuna7/followers",
    following_url: "https://api.github.com/users/Asuna7/following{/other_user}",
    gists_url: "https://api.github.com/users/Asuna7/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Asuna7/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Asuna7/subscriptions",
    organizations_url: "https://api.github.com/users/Asuna7/orgs",
    repos_url: "https://api.github.com/users/Asuna7/repos",
    events_url: "https://api.github.com/users/Asuna7/events{/privacy}",
    received_events_url: "https://api.github.com/users/Asuna7/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "AustinKelsay",
    id: 53542748,
    node_id: "MDQ6VXNlcjUzNTQyNzQ4",
    avatar_url: "https://avatars1.githubusercontent.com/u/53542748?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/AustinKelsay",
    html_url: "https://github.com/AustinKelsay",
    followers_url: "https://api.github.com/users/AustinKelsay/followers",
    following_url:
      "https://api.github.com/users/AustinKelsay/following{/other_user}",
    gists_url: "https://api.github.com/users/AustinKelsay/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/AustinKelsay/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/AustinKelsay/subscriptions",
    organizations_url: "https://api.github.com/users/AustinKelsay/orgs",
    repos_url: "https://api.github.com/users/AustinKelsay/repos",
    events_url: "https://api.github.com/users/AustinKelsay/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/AustinKelsay/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ntilbe",
    id: 61669896,
    node_id: "MDQ6VXNlcjYxNjY5ODk2",
    avatar_url: "https://avatars1.githubusercontent.com/u/61669896?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ntilbe",
    html_url: "https://github.com/ntilbe",
    followers_url: "https://api.github.com/users/ntilbe/followers",
    following_url: "https://api.github.com/users/ntilbe/following{/other_user}",
    gists_url: "https://api.github.com/users/ntilbe/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ntilbe/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ntilbe/subscriptions",
    organizations_url: "https://api.github.com/users/ntilbe/orgs",
    repos_url: "https://api.github.com/users/ntilbe/repos",
    events_url: "https://api.github.com/users/ntilbe/events{/privacy}",
    received_events_url: "https://api.github.com/users/ntilbe/received_events",
    type: "User",
    site_admin: false,
  },
];