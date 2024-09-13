import { useTheme } from '@emotion/react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const SelectComponent = ({ handleChangeCategory, cat }) => {
  const { jobType } = useSelector(state => state.jobTypeAll);
  const { palette } = useTheme();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Category</InputLabel>
        <Select
          inputProps={{
            MenuProps: {
              sx: {
                backgroundColor: palette.secondary.main
              }
            }
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="category"
          onChange={handleChangeCategory}
        >
          <MenuItem>All</MenuItem>
          {
            jobType && jobType.map((jt) => (
              <MenuItem key={jt._id} value={jt._id}>{jt.jobTypeName}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}


