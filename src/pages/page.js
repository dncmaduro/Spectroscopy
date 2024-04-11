import { useState } from "react";
import SerialPortControl from "../components/control/SerialPortControl";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";

const Page = () => {
  const [port, setPort] = useState();

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "100px" }}>
        <Grid item xs={3}>
          <SerialPortControl port={port} setPort={setPort} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
