import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/component/UpdateProfileForm";


const UpdateProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
// console.log(user);
  if (!user) {
    redirect("/signIn");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <UpdateProfileForm user={user} />
    </div>
  );
};

export default UpdateProfilePage;