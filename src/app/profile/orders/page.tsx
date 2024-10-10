'use client'

import { useAuthenticated } from '@/hooks/useAuthentication'
import { Card } from 'antd'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function UserPage() {
   const { authenticated } = useAuthenticated()
   const [orders, setOrders] = useState(null)
   const pathname = usePathname()

   useEffect(() => {
      async function getOrders() {
         try {
            const response = await fetch(`/api/orders`, {
               method: 'GET',
               cache: 'no-store',
            })

            const json = await response.json()
            setOrders(json)
         } catch (error) {
            console.error({ error })
         }
      }

      if (authenticated) getOrders()
   }, [authenticated])

   return (
      <div className="flex-col">
         <div className="flex-1 ">
            <div className="flex items-center justify-between">
            </div>
         </div>
      </div>
   )
}
