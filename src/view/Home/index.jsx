import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";

const Home = () => {

  return (

      <Grid container>
        <Grid item md={12}>
          <Typography variant="h4" sx={{ marginBottom: 3 }}>
            <span className="title">Welcome,</span> Home User!
          </Typography>
          <Grid container className="flex" sx={{gap: 1}}>
          {[1, 2, 3, 4, 5,6].map(() => {
            return (
              <Grid item md={4} xs={12} className="box" sx={{width: "100%"}}>
                <Typography variant="h6">Today</Typography>
                <p className="title">Orders</p>
                <p className="title" style={{ textAlign: "end" }}>
                  4
                </p>
              </Grid>
            );
          })}
          </Grid>
        </Grid>
      </Grid>

  );
};

export default Home;
