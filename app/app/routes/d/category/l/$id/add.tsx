import { Form, useForm, Input, validators } from '~/core/forms'
import { useState } from 'react'
import { useCreateMetric } from '~/services'

export default function AddCattegory() {
  const metric = useCreateMetric()

  const f = useForm()

  async function submit(v: any) {
    await metric.create(v)
  }
  return (
    <div>
      <h1 className="font-extrabold text-xl uppercase">Register A Metric</h1>
      <Form onSubmit={submit} form={f} className="grid gap-4 py-10">
        <Input
          label="Label"
          name="label"
          type="text"
          placeholder="Washing Machine Energy Consumption"
          validations={[validators.required]}
          disabled={metric.loading}
        />

        <Input
          label="Metric Code"
          name="code"
          type="text"
          validations={[validators.required]}
          placeholder="ss-eer-32"
          disabled={metric.loading}
        />

        <Input
          label="Data Entry Method"
          name="method"
          type="select"
          options={[
            { key: null, label: 'Select a category' },
            { key: 'MANUAL', label: 'Manual Data Entry' },
            { key: 'REAL_TIME', label: 'Real Time Entry' },
          ]}
          validations={[validators.required]}
          disabled={metric.loading}
        />

        <div className="flex items-end justify-end">
          <button
            type="submit"
            disabled={(!f.isValid && f.isSubmitted) || metric.loading}
            className="button"
          >
            Create
          </button>
        </div>
      </Form>
    </div>
  )
}
