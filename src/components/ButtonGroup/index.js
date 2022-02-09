import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

export const ButtonGroups = () => {
  return (
    <ButtonGroup color="secondary" disableElevation>
      <Button>Cancel</Button>
      <Button>Add</Button>
    </ButtonGroup>
  );
};
