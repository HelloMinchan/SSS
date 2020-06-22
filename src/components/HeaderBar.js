import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuDrawer from "./MenuDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SANGMYUNG SOFTWARE SEMINAR
          </Typography>

          <MenuDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
