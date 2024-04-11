import { useState } from "react";
import SerialPortControl from "../components/control/SerialPortControl";
import Header from "../components/header/Header";
import { Grid } from "@material-ui/core";
import ProgramControl from "../components/control/ProgramControl";
import ParameterConfig from "../components/control/ParameterConfig";
import ShowSweepTimes from "../components/control/ShowSweepTimes";
import LineChart from "../components/chart/LineChart";
import ResultTable from "../components/table/ResultTable";

const Page = () => {
  const [port, setPort] = useState();
  const [sweep, setSweep] = useState(false);
  const [logarithmic, setLogarithmic] = useState(false);
  const [electrode, setElectrode] = useState();
  const [sweepTimes, setSweepTimes] = useState(1);

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "60px" }}>
        <Grid item xs={2}>
          <SerialPortControl port={port} setPort={setPort} />
          <div className="mt-1"></div>
          <ProgramControl />
          <div className="mt-1"></div>
          <ParameterConfig
            sweep={sweep}
            setSweep={setSweep}
            logarithmic={logarithmic}
            setLogarithmic={setLogarithmic}
            electrode={electrode}
            setElectrode={setElectrode}
          />
          <div className="mt-2"></div>
          <ShowSweepTimes
            sweepTimes={sweepTimes}
            setSweepTimes={setSweepTimes}
          />
        </Grid>
        <Grid item xs={7}>
          <LineChart />
        </Grid>
        <Grid item xs={3}>
          <ResultTable />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
