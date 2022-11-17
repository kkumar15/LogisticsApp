import * as React from 'react';
import Box from '@mui/material/Box';
import MediaCard from '../../components/customerViews/formCards'
export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 1200,
        height: 600,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'primary.light',
      }}
    >
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
      <MediaCard></MediaCard>
    </Box>
  );
}