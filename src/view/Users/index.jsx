import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UsersTable from "@/view/Users/components/UsersTable";

export default function Users() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" mb={4}>Available Users</Typography>
      <UsersTable />
    </Box>
  );
}
