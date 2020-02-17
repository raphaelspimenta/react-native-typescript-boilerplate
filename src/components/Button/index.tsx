import React from 'react'
import { ButtonProps } from 'react-native'
import { StyledButton } from './styled'

const CustomButton = (props: ButtonProps) => <StyledButton {...props} />

export default CustomButton
