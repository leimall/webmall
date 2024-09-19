export type ProductItem = {
	ID: number;
	title: string;
	desction: string;
  price: number;
  priceOff: number;
  stock: number;
	mainImg: string;
  productId: string;
  seoDescription: string;
  seoKeywords: string;
}

export type Product = ProductItem & {
  Review: ReviewItem;
}

export type ReviewItem = {
  id: number;
  average: number;
  productId: string
  reviews: number;
  star1: number;
  star2: number;
  star3: number;
  star4: number;
  star5: number;
  total: number;
}

export type ProductDetail = Product & {
  Review: ReviewItem;
	ImageList: ImageList[];
	Tags: Tags[];
	Category: Category[];
	Detail: Detail[];
	Sku: Sku & {
		List: Sku[];
	};
}

export type CartItem = Product & {
  quantity: number;
  sku: string;
  skuTitle: string;
  skuValue: string;
}


export type Tags = {
	id: number;
	title: string;
}

export type Sku = {
  title: string;
  price: number;
  priceOff: number;
  productId: string;
  stock: number;
}

export type Category = {
  id: number;
  title: string;
  title_en: string;
}

export type ImageList = {
  id: number;
  img_url: string;
}

export type Detail = {
  id: number;
  lang: string;
  content: string;
}