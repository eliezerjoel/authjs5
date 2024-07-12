'use client'
import { CredentialLogin } from "@/actions/auth"
import AuthBtn from "./AuthBtn"

const LoginForm = () => {
  return (
    <div>
      <form action={CredentialLogin}>
        <div>
          <label className="block text-sm font-thin text-gray-200 " htmlFor="email">Email</label>
          <input name="email" className="mt-1 w-full px-4 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700" type="email" />
        </div>
        <div className="pt-4">
          <label className="block text-sm font-thin text-gray-200 " htmlFor="password">Password</label>
          <input name="password" className="mt-1 w-full px-4 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700" type="password" />
        </div>
        <div className="mt-4"><AuthBtn /></div>
      </form>
    </div>
  )}

  export default LoginForm