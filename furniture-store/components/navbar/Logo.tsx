import Link from 'next/link'
import { TbHexagonLetterC, TbHexagonLetterX } from 'react-icons/tb'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-primary ">
      <TbHexagonLetterX className="w-10 h-10  -mr-2" />
      <TbHexagonLetterC className="w-10 h-10" />
    </Link>
  )
}
export default Logo
