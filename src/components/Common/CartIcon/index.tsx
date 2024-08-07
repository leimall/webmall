// components/CartIcon.tsx
import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useCartStore } from '@/stores/useCartStore';
import Link from 'next/link';


export default function CartIcon() {
	const { totalQuantity } = useCartStore();
	return (
		<Link href={'/cart'} passHref>
		<Badge count={totalQuantity} offset={[10, 0]}>
			<ShoppingCartOutlined style={{ fontSize: '24px', cursor: 'pointer', color:'#8d1a25' }} />
		</Badge>
		</Link>
	);
};

