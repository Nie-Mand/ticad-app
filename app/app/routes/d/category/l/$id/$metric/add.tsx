import { Form, useForm, Input, validators } from '~/core/forms'
import { useAddData } from '~/services'

export default function AddCattegory() {
  const data = useAddData()

  const f = useForm()

  async function submit(v: any) {
    await data.add(v.value)
  }

  if (data.loading) {
    return <div>Loading...</div>
  }

  if (data.error) {
    return <div>Error: {data.error}</div>
  }

  return (
    <div>
      <h1 className="font-extrabold text-xl uppercase">Add a Value</h1>
      <Form onSubmit={submit} form={f} className="grid gap-4 py-10">
        <Input
          label="Value"
          name="value"
          type="text"
          placeholder="478"
          validations={[validators.required, validators.number]}
          disabled={data.loading}
          suffix="kWh"
        />

        <div className="flex items-end justify-end">
          <button
            type="submit"
            disabled={(!f.isValid && f.isSubmitted) || data.loading}
            className="button"
          >
            Add
          </button>
        </div>
      </Form>
    </div>
  )
}
