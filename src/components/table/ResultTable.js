import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useState } from "react";

const ResultTable = () => {
  const [values, setValues] = useState([
    {
      magnitude: 1,
      phase: 1,
      ima: 1,
      real: 1,
    },
    {
      magnitude: 2,
      phase: 2,
      ima: 2,
      real: 2,
    },
  ]);

  return (
    <>
      <div className="ml-4 text-2xl">List Result Values</div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>T.</TableCell>
              <TableCell>Magnitude</TableCell>
              <TableCell>Phase</TableCell>
              <TableCell>RzIma</TableCell>
              <TableCell>RzReal...</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values &&
              values.map((value, index) => (
                <TableRow>
                  <TableCell>{index}</TableCell>
                  <TableCell>{value.magnitude}</TableCell>
                  <TableCell>{value.phase}</TableCell>
                  <TableCell>{value.ima}</TableCell>
                  <TableCell>{value.real}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResultTable;
