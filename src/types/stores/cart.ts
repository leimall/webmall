
export type CartItem  = {
  id: number
  unique_id: string
  sku: string
  size_title: string
  size: string
  shape: string | null | undefined
  color: string
  user_id: string 
  product_id: string
  quantity: number
  stock: number
  price: number
  old_price: number
  price_off: number
  main_img: string
  title: string
  status: number
}
