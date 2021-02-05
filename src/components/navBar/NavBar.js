import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  Menu,
  HomeRounded,
  PersonRounded,
  CallRounded,
} from "@material-ui/icons";

import useStyle from "./NavBar.styles";

const Navigation = (props) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [navlist] = useState(["Home", "About", "Contact"]);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const HandleRoute = (value, idx) => {
    const { history } = props;
    const val = value.toLowerCase();

    if (val === "home") {
      history.push(`/`);
    } else {
      history.push(`/${val}`);
    }

    if (!isLargeScreen) {
      setOpen(!open);
      setValue(idx);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);

    let url = navlist[newValue];
    HandleRoute(url);
  };

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        {isLargeScreen ? (
          <>
            <Typography variant="h5" className={classes.logo}>
              kiranweb.in
            </Typography>
            <div style={{ flex: 1 }}></div>
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                // indicatorColor="secondary"
                textColor="inherit"
                centered
              >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Contact" />
              </Tabs>
            </div>
          </>
        ) : (
          <>
            <IconButton
              edge="start"
              arial-label="my menu"
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </IconButton>
            <div style={{ flex: 1 }}></div>
            <Typography variant="h5" className={classes.logo}>
              kiranweb.in
            </Typography>
          </>
        )}
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <h4>This is my drawer</h4>
        <Divider />
        <div className={classes.list}>
          <List>
            {navlist.map((txt, idx) => (
              <ListItem button key={txt} onClick={(e) => HandleRoute(txt, idx)}>
                <ListItemIcon>
                  {idx === 0 ? (
                    <HomeRounded />
                  ) : idx === 1 ? (
                    <PersonRounded />
                  ) : (
                    <CallRounded />
                  )}
                </ListItemIcon>
                <ListItemText primary={txt} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default withRouter(Navigation);
