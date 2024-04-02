import CustomLink from "@/components/custom-link"
import { auth } from "auth"

export default async function Index() {
  const session = await auth()

  return (
    <div className="flex justify-center items-center">
    </div>
  )
}
