import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { PORT } from "../../utils/constant";

const SerialPortControl = (props) => {
  const { port, setPort } = props;

  return (
    <>
      <Card>
        <CardHeader title="SerialPortControl" />
        <CardContent>
          <FormControl>
            <Select value={port} onChange={(e) => setPort(e.target.value)}>
              {PORT.map((port) => (
                <MenuItem value={port}>{port}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="mt-2">
            <Button variant="outlined">Connect</Button>
            <Button variant="outlined">Disconnect</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SerialPortControl;
