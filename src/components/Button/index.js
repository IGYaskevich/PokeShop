import { Stack } from "@mui/material";
import Button from "@mui/material/Button";

export const ButtonManager = ({title, method}) => {
  return (
    <Stack onClick={()=> alert('click')} direction="row" spacing={2}>
      <Button color="secondary">{title}</Button>
    </Stack>
  );
};

