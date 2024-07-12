import { useFormStatus } from "react-dom"

const AuthBtn = ()=>{
    const {pending} = useFormStatus()
    return(
        <button
        className={`${pending ? "bg-gray-600": "bg-blue-600"} rounded-md w-full px-10 py-3 text-sm font-medium text-white`}
         disabled={pending} type="submit">{pending? "Loading...": "Sign In"}</button>
    )
}
export default AuthBtn