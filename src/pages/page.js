import { useState } from "react";
import SerialPortControl from "../components/control/SerialPortControl";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import ProgramControl from "../components/control/ProgramControl";
import ParameterConfig from "../components/control/ParameterConfig";

const Page = () => {
  const [port, setPort] = useState();
  const [sweep, setSweep] = useState(false);
  const [logarithmic, setLogarithmic] = useState(false);
  const [electrode, setElectrode] = useState();

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "100px" }}>
        <Grid item xs={2}>
          <SerialPortControl port={port} setPort={setPort} />
          <div className="mt-2"></div>
          <ProgramControl />
          <div className="mt-2"></div>
          <ParameterConfig
            sweep={sweep}
            setSweep={setSweep}
            logarithmic={logarithmic}
            setLogarithmic={setLogarithmic}
            electrode={electrode}
            setElectrode={setElectrode}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
