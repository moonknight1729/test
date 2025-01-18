import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label="Set Remainder"
          sx={{
            '.MuiInputLabel-root': {
              color: 'white', // Label color
            },
            '&.Mui-focused .MuiInputLabel-root': {
              color: 'white', // Label color when focused
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color on hover
            },
            '.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Border color when focused
            },
            '.MuiSvgIcon-root': {
              color: 'white', // Icon color
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
