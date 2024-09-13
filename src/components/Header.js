import { Box, styled } from '@mui/material'
import React from 'react'
import { SearchInput } from './SearchInput'

export const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => (
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 400,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: theme.palette.secondary.main,
    }
  ))
  return (
    <>
      <StyleHeader>
        <SearchInput />
      </StyleHeader>
    </>
  )
}


