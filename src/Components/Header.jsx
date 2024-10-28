import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CryptoContext } from "../CryptoContext";

const Header = () => {
//   In react version6, "useHistory()" hook has been replaced by "useNavigate()" hook. This hook redirects to the path we assign
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: "dark",
    }
  });

  const { currency, setCurrency } = useContext(CryptoContext);
  console.log(currency)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          {/* We use 'Container' component to make our app responsive */}
          <Container>
              <Toolbar>
                  <Typography
                      onClick={() => navigate("/")}
                      sx={{
                          flex: 1,
                          color: "gold",
                          fontFamily: "Monsterrat",
                          fontWeight: "bold",
                          cursor: "pointer"
                      }}
                      variant="h6"
                  >
                      Crypto Hunter
                  </Typography>
                  {/* We use select component to create dropdown */}
                  <Select 
                      variant="outlined"
                      sx={{
                          width: 100,
                          height: 40,
                          marginRight: 15
                      }}
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                  >
                      <MenuItem value={"USD"}>USD</MenuItem>
                      <MenuItem value={"EUR"}>EUR</MenuItem>
                  </Select>
              </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

export default Header
