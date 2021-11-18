import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container {...rest} />
  )
}