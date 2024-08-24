export type Product = {
	ID: number;
	title: string,
	desction: string;
  price: number;
  priceOff: number;
	mainImg: string;
  productId: string;
  seoDescription: string;
  seoKeywords: string;
}

export type ProductDetail = Product & {
	ImageList: ImageList[];
	Tags: Tags[];
	Category: Category[];
	Detail: Detail[];
	Sku: Sku & {
		List: Sku[];
	};
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