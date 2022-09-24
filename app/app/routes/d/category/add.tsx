import { Form, useForm, Input, validators } from '~/core/forms'
import { useCreateCategory } from '~/services'
export default function AddCattegory() {
  const category = useCreateCategory()
  const f = useForm()

  async function submit(v: any) {
    await category.create(v)
  }
  return (
    <div>
      <h1 className="font-extrabold text-xl uppercase">Add a Category</h1>
      <Form onSubmit={submit} form={f} className="grid gap-4 py-10">
        <Input
          label="Label"
          name="label"
          type="text"
          placeholder="Energy Consumption"
          validations={[validators.required]}
          disabled={category.loading}
        />

        <Input
          label="Description"
          name="description"
          placeholder="We track energy consumption for all our machines"
          type="textarea"
          validations={[validators.required]}
          disabled={category.loading}
        />

        <Input
          label="Coefficient"
          name="coef"
          type="text"
          validations={[validators.required, validators.number]}
          placeholder="55.0"
          disabled={category.loading}
        />

        <div className="flex items-end justify-end">
          <button
            type="submit"
            disabled={(!f.isValid && f.isSubmitted) || category.loading}
            className="button"
          >
            Create
          </button>
        </div>
      </Form>
    </div>
  )
}
