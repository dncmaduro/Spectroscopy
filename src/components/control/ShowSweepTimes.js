import {
  Card,
  CardHeader,
  CardContent,
  Radio,
  FormControlLabel,
  RadioGroup,
  Grid,
} from "@material-ui/core";
import { SWEEPTIME } from "../../utils/constant";

const ShowSweepTimes = (props) => {
  const { sweepTimes, setSweepTimes } = props;

  return (
    <>
      <Card>
        <CardHeader title="Show Sweep Times" />
        <CardContent>
          <RadioGroup>
            <Grid container>
              <Grid item xs={4}>
                {SWEEPTIME.map((time) => (
                  <>
                    <FormControlLabel
                      checked={sweepTimes === time.time}
                      value={time.time}
                      control={<Radio />}
                      label={"" + time.text}
                      onChange={(e) => setSweepTimes(Number(e.target.value))}
                    />
                  </>
                ))}
              </Grid>
            </Grid>
          </RadioGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default ShowSweepTimes;
