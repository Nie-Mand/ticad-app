import { useField, type FieldProps } from '@formiz/core'
import {
  type HTMLInputTypeAttribute,
  useMemo,
  useEffect,
  useState,
} from 'react'
import { AiOutlineCloudUpload as UploadIcon } from 'react-icons/ai'

const If = ({ test, children }: { test: boolean; children: JSX.Element }) =>
  test ? children : null

function UploadPlaceholder({ placeholder }: { placeholder: string }) {
  return (
    <div className="rounded-lg border-4 border-dotted p-10 flex flex-col items-center">
      <UploadIcon className="w-14 h-14 text-gray-500" />
      <span className="text-gray-500 font-medium">{placeholder}</span>
    </div>
  )
}

function useFilePreview(v: any) {
  const [preview, setPreview] = useState<any>(null)
  useEffect(() => {
    if (v instanceof File) {
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result)
      reader.readAsDataURL(v)
    } else {
      setPreview(null)
    }
  }, [v])
  return preview
}

export function Input(props: Props) {
  const { errorMessage, isValid, setValue, value, id, isSubmitted } =
    useField(props)
  const preview = useFilePreview(value)

  const error = useMemo(() => !isValid && isSubmitted, [isValid, isSubmitted])
  const required = useMemo(
    () =>
      props.validations?.some(v => v.message === 'Ce champ est obligatoire'),
    [props.validations]
  )

  if (props.type === 'file')
    return (
      <div>
        <label htmlFor={id} className="grid gap-2">
          <span className="font-semibold">
            {props.label} {!!required && ' *'}
          </span>
          <div
            className={`cursor-pointer p-10 input ${
              props.className ? props.className : ''
            }`}
          >
            {preview ? (
              <img src={preview} className="max-h-60 mx-auto" alt="preview" />
            ) : (
              <UploadPlaceholder placeholder={props.placeholder || 'Upload'} />
            )}
          </div>
          <input
            className={`hidden`}
            value={value?.filename ?? ''}
            onChange={e => {
              setValue(e.target.files?.[0])
            }}
            id={id}
            type={props.type}
            aria-invalid={error}
            aria-required={!!required}
            disabled={props.disabled}
          />
          <If test={error}>
            <span className="text-red-500 text-xs">{errorMessage}</span>
          </If>
        </label>
      </div>
    )

  if (props.type === 'select')
    return (
      <div className="grid py-1 gap-1">
        <label htmlFor={id} className="font-semibold">
          {props.label} {!!required && ' *'}
        </label>
        <select
          value={value ?? ''}
          onChange={e => setValue(e.target.value)}
          id={id}
          // onBlur={() => setIsTouched(true)}
          aria-invalid={error}
          aria-required={!!required}
          className="input cursor-pointer appearance-none"
        >
          {props.options?.map((option, idx) => (
            <option
              value={option.key ? option.key : undefined}
              key={option.key}
              defaultChecked={idx === 0}
            >
              {option.label}
            </option>
          ))}
        </select>
        <If test={error}>
          <span className="text-red-500 text-xs">{errorMessage}</span>
        </If>
      </div>
    )

  if (props.type === 'textarea')
    return (
      <div>
        <label htmlFor={id} className="grid gap-2">
          <span className="font-semibold">
            {props.label} {!!required && ' *'}
          </span>
          <textarea
            placeholder={props.placeholder}
            className={`input w-full resize-none ${props.className}`}
            rows={props.rows}
            value={value ?? ''}
            onChange={e => setValue(e.target.value)}
            aria-invalid={error}
            aria-required={!!required}
          />
          <If test={error}>
            <span className="text-red-500 text-xs">{errorMessage}</span>
          </If>
        </label>
      </div>
    )

  //   if (props.type === 'radio')
  //     return (
  //       <div className="grid">
  //         {props.label && <label className="font-semibold">{props.label}</label>}
  //         <Radio.Group
  //           name="role"
  //           value={value ?? ''}
  //           onChange={e => setValue(e.target.value)}
  //         >
  //           {props.options?.map(option => (
  //             <Radio value={option.key} key={option.key}>
  //               {option.label}
  //             </Radio>
  //           ))}
  //         </Radio.Group>

  //         <If test={error}>
  //           <span className="text-red-500 text-xs">{errorMessage}</span>
  //         </If>
  //       </div>
  //     )

  return (
    <div>
      <label htmlFor={id} className="grid gap-2">
        <span className="font-semibold">
          {props.label} {!!required && ' *'}
        </span>
        <div className="input-container">
          <input
            className={`input-inside ${props.className ? props.className : ''}`}
            value={value ?? ''}
            onChange={e => setValue(e.target.value)}
            id={id}
            type={props.type}
            placeholder={props.placeholder}
            aria-invalid={error}
            aria-required={!!required}
          />
          {props.suffix ? (
            <span className="select-none text-xs font-semibold text-gray-300">
              {props.suffix}
            </span>
          ) : null}
        </div>

        <If test={error}>
          <span className="text-red-500 text-xs">{errorMessage}</span>
        </If>
      </label>
    </div>
  )
}

interface Props extends FieldProps {
  type:
    | HTMLInputTypeAttribute
    | 'select'
    | 'textarea'
    | 'governerates'
    | 'position'
  label?: string
  options?: { key: null | string; label: string }[]
  rows?: number
  className?: string
  placeholder?: string
  disabled?: boolean
  suffix?: string
}
