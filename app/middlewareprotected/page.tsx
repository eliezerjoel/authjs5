import { auth } from "@/auth";

const MiddlewareProtectedPage = async () => {
    // const session = await auth()
  return <div className="flex h-full items-center justify-center flex-col gap-2">
    <h3 className="text-3xl">MiddlewareProtectedPage</h3>
    <p className="text-lg">kagulirejoeleliezer@gmail.com</p>
    {/* <p>{session?.user.email}</p> */}
  </div>;
};

export default MiddlewareProtectedPage;