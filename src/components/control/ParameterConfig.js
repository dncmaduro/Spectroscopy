import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const ParameterConfig = (props) => {
  const {
    sweep,
    setSweep,
    logarithmic,
    setLogarithmic,
    electrode,
    setElectrode,
  } = props;

  return (
    <>
      <Card>
        <CardHeader title="Parameter Config" />
        <CardContent>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox checked={sweep} onChange={() => setSweep(!sweep)} />
              }
              label="Sweep enable"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={logarithmic}
                  onChange={() => setLogarithmic(!logarithmic)}
                />
              }
              label="Logarithmic"
            />
            <RadioGroup>
              <FormControlLabel
                checked={electrode === 2}
                value={2}
                control={<Radio />}
                label="2 electrode"
                onChange={(e) => setElectrode(Number(e.target.value))}
              />
              <FormControlLabel
                checked={electrode === 3}
                value={3}
                control={<Radio />}
                label="3 electrode"
                onChange={(e) => setElectrode(Number(e.target.value))}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default ParameterConfig;
