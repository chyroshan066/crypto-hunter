import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Header = () => {
//   In react version6, "useHistory()" hook has been replaced by "useNavigate()" hook. This hook redirects to the path we assign
  const navigate = useNavigate();
  return (
    <>
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
                >
                    Crypto Hunter
                </Typography>
                {/* We use select component to create dropdown */}
                <Select 
                    variant="outlined"
                    sx={{
                        width: 100,
                        height: 40,
                        marginLeft: 15
                }}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"NPR"}>NPR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
