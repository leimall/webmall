// components/CartIcon.tsx
import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useCartStore } from '@/stores/useCartStore';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useUserinfoStroe';


export default function CartIcon() {
  const [num, setNum] = useState(0);
  const { totalQuantity } = useCartStore();
  const { user, token } = useAuthStore();
  useEffect(() => {
    if (user && token) {
      setNum(totalQuantity)
    }
  }, [totalQuantity, user, token])
  return (
    <Link href={'/cart'} passHref>
      {
        num > 0 && <Badge count={totalQuantity} offset={[10, 0]}>
          <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer', color: '#8d1a25' }} />
        </Badge>
        ||
        <Badge >
          <ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer', color: '#8d1a25' }} />
        </Badge>
      }

    </Link>
  );
};

