import React, { useEffect } from 'react';
import Public from './Public';
import Private from './Private';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

function Main() {
  const [isAuth, setIsAuth]= useState(false);
  useEffect(()=>{
    const uid = sessionStorage.getItem("user");
    uid !== null && setIsAuth(true);
  });
  const setAuthentication = val =>{
    setIsAuth(val);
  }

  return (
    <main>
        <MuiThemeProvider theme={theme}>
          <Public />

          <Private setAuthentication={setAuthentication} />
        </MuiThemeProvider>
    </main>
  );
}

export default Main;
