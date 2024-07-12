import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ServerProtectedPage = async () => {
    // const session = await auth()
    // if(!session?.user){
    //     redirect("/login");
    // }
  return <div className="flex h-full items-center justify-center flex-col gap-2">
    <h3 className="text-3xl">ServerProtectedPage</h3>
    <p className="text-lg">kagulirejoeleliezer@gmail.com</p>
    {/* <p>{session?.user.email}</p> */}
  </div>;
};

export default ServerProtectedPage;