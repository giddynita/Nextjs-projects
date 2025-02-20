import Link from 'next/link'
import { Button } from '../ui/button'
import { LuShoppingCart } from 'react-icons/lu'

const CartButton = () => {
  const numItemsInCart = 9
  return (
    <Button asChild variant="outline" size="icon" className="">
      <Link href="/cart" className="relative">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 text-xs flex items-center justify-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}
export default CartButton
