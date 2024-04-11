import { useState } from "react";
import SerialPortControl from "../components/control/SerialPortControl";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import ProgramControl from "../components/control/ProgramControl";

const Page = () => {
  const [port, setPort] = useState();

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "100px" }}>
        <Grid item xs={2}>
          <SerialPortControl port={port} setPort={setPort} />
          <div className="mt-2"></div>
          <ProgramControl />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
