import { Drawer, List, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Icon from "@mui/material/Icon";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDrawerContext } from "../../context/DrawerContext";

import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";

const ListItemLink = ({ to, icon, label, onClick }) => {


  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false})

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default function MenuLateral({ children }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawer, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawer}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">

              {drawerOptions.map((item)=>{
                return(
                  <ListItemLink
                  icon={item.icon}
                  label={item.label}
                  to={item.to}
                  onClick={smDown ? toggleDrawer : undefined}
                />
                )
              })}
             
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}
