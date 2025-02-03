import { Button, ButtonProps } from '@mui/material'
import React from 'react'

const ReusableButton:React.FC<ButtonProps> = ({children ,...rest}) => {
  return (

    <Button {...rest}>{children}</Button>
  )
}

export default ReusableButton
