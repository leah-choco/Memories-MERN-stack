import React from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Posts from "../src/components/Posts/Posts";
import Form from "../src/components/Form/Form";
import "./index.css";
//import memories from "./images/memories.png";
const App = () => {
  //const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography className="heading" variant="h2" align="center">
          Memories
        </Typography>
        {/* <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
