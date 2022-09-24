import { useNavigate } from '@remix-run/react'
import { useState } from 'react'
import { HomeNavbar } from '../core'
import { Form, Input, useForm, validators } from '../core/forms'
import { useLogin } from '~/services'

const If = ({ test, children }: { test: boolean; children: JSX.Element }) =>
  test ? children : null

export default function Login() {
  const f = useForm()
  const login = useLogin()

  async function submit(data: any) {
    await login.login(data.email, data.password)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url(/art/star.svg)] bg-no-repeat">
      <HomeNavbar />
      <div className="px-10 lg:px-40 flex-1 grid">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-full items-center hidden md:grid">
            <div className="max-w-4xl">
              <h1 className="font-ikaros text-5xl">
                WELCOME, <br /> BACK
              </h1>
              <div className="h-3"></div>
              <h2 className="text-xs uppercase text-gray-800 font-medium">
                Login to Access your Console
              </h2>
            </div>
          </div>
          <div className="items-center justify-[unset] md:justify-end grid">
            <Form
              form={f}
              onSubmit={submit}
              className="max-w-[350px] md:w-[350px] grid gap-3"
            >
              <Input
                label="Email"
                placeholder="Email"
                type="text"
                name="email"
                validations={[validators.required, validators.email]}
                className=""
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                validations={[validators.required]}
                className=""
              />
              <If test={!!login.error}>
                <span className="text-red-500 text-xs">{login.error}</span>
              </If>
              <div className="flex justify-end w-full">
                <button
                  className="button"
                  type="submit"
                  disabled={(!f.isValid && f.isSubmitted) || login.loading}
                >
                  Login
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
