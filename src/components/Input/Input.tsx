import { HTMLAttributes } from 'react'
import useClassName from '../../hooks/useClassName.hook'
import './Input.css'

/* TEXT INPUT */
interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
}

export function TextInput({ type = 'text', className, value, ...rest }: TextInputProps) {
  const classNames = useClassName('input', className)

  return <input {...rest} className={classNames} type={type} value={value} />
}

/* CHECKBOX */
interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
}

export function Checkbox({ checked, ...rest }: CheckboxProps) {
  return <input {...rest} checked={checked} type="checkbox" />
}
