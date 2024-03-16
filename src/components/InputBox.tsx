import { TextField } from '@mui/material';

interface InputBoxProps {
  onChange: (value: string) => void;
  defaultValue?: string;
  multiline?: boolean;
  fullWidth?: boolean;
}

const InputBox = (props: InputBoxProps) => {
  const { onChange, defaultValue, multiline, fullWidth } = props;

  return (
    <TextField
      id="outlined-multiline-static"
      label="Input"
      multiline={multiline}
      fullWidth={fullWidth}
      defaultValue={defaultValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default InputBox;
