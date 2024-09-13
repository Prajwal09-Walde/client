import { Box } from '@mui/material'
import React from 'react'
import { HeaderTop } from './HeaderTop'
import { Sidebar } from './Sidebar'

export const Layout = (Component) => ({ ...props }) => {
  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box sx={{ width: '100%', bgcolor: '#002952' }}>
          <HeaderTop />
          <Box sx={{ p: 3 }}>
            <Component {...props} />
          </Box>
        </Box>
      </div>
    </>
  )
}


