import { Formiz } from '@formiz/core'
import { type HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLFormElement> {
  onSubmit: <K>(data: K) => void
  children: React.ReactNode
  form: any // UseFormValues
}

export function Form({ onSubmit, form, ...props }: Props) {
  return (
    <Formiz connect={form} onValidSubmit={onSubmit}>
      <form noValidate onSubmit={form.submit} {...props} />
    </Formiz>
  )
}
