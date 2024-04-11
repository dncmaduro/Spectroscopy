import { Card, CardHeader, Button, CardContent } from "@material-ui/core";

const ProgramControl = () => {
  return (
    <>
      <Card>
        <CardHeader title="Program Control" />
        <CardContent>
          <div>
            <Button variant="outlined">Measure</Button>
            <Button variant="outlined">Clear All</Button>
          </div>
          <div className="mt-4">
            <Button variant="outlined">Import File</Button>
            <Button variant="outlined">Export File</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProgramControl;
