import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import UsersTable from "@/view/Users/components/UsersTable";

export default function Users() {
  return (
    <Grid >
      <Typography variant="h4" mb={4}>Available Users</Typography>
      <UsersTable />
    </Grid>
  );
}
