import React from 'react';
import SignUp from '../Public/SignUp';

function Private(props) {
  const SigOut = () =>{
    props.setAuthentication(false);
  }

  return (
    <div>
      <h1>Private</h1>
      <button onClick={SignOut}>Logout</button>
    </div>
  );
}

export default Private;
