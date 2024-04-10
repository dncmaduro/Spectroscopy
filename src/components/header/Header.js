import { AppBar, Typography } from "@material-ui/core";
import { Text } from "../../utils/constant";

const Header = () => {
  return (
    <AppBar>
      <Typography variant="h5" className="pl-8 py-4">
        {Text.TITLE}
      </Typography>
    </AppBar>
  );
};

export default Header;
