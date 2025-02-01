import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import { ReactNode } from 'react';

interface FieldsInputProps {
  errorField: boolean;
  selectedTitle: string;
  titles: string[];
  handleTitleChange:  (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

const FieldsInput: React.FC<FieldsInputProps> = ({
  errorField,
  titles,
  selectedTitle,
  handleTitleChange,
}) => {
  return (
    <FormControl error={errorField}  sx={{ minWidth: 120 }} size='small'>
      <InputLabel>Fields</InputLabel>
      <Select value={selectedTitle} onChange={handleTitleChange} label='Fields'>
        {titles.map((title) => (
          <MenuItem key={title} value={title}>
            {title}
          </MenuItem>
        ))}
      </Select>
      {errorField && (
        <FormHelperText >
          you sould select a field
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FieldsInput;
