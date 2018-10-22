import React from 'react'
import styled from 'styled-components'
import { Link, Redirect, Switch, Route, BrowserRouter } from 'react-router-dom'

const App = styled.div`
  text-align: center;
  background-color: #6abea7;
  background: linear-gradient(
    45deg,
    rgba(189, 255, 253, 1) 0%,
    rgba(159, 255, 245, 1) 30%,
    rgba(124, 255, 196, 1) 100%
  );

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: #bdfffd;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12),
    0 3px 1px rgba(0, 0, 0, 0.2);

  h1 {
    color: #39745a;
  }

  a {
    text-decoration: none;
    color: currentcolor;
    border: 1px solid #5e6973;
    padding: 24px;
    margin: 12px;
    max-width: 480px;
    background-color: #39745a;

    transition: box-shadow 0.5s;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`

const Memories = () => {
  window.location = 'https://goo.gl/forms/vN58c57ZxrroDaKk1'
  return null
}

const Photos = () => {
  window.location = 'https://goo.gl/photos/N1iY29VoYsTkTxmT7'
  return null
}

export default () => (
  <BrowserRouter basename="personal">
    <App>
      <h1>Personal links</h1>
      <Link to="/memories">
        <h2>Recuerdos/Memories</h2>
        <p>Enter a fond memory or a fun story to add to my list of memories.</p>
      </Link>
      <Link to="/photos">
        <h2>Upload photos</h2>
        <p>
          Uploaded photos will be visible to other people uploading photos. Or,
          you can also ask me and I can send you a private link which won't be
          visible to others.
        </p>
      </Link>
      <Switch>
        <Route path="/memories" component={Memories} />
        <Route path="/photos" component={Photos} />
        <Route path="/" exact component={null} />
        <Redirect from="/" to="/" />
      </Switch>
    </App>
  </BrowserRouter>
)
