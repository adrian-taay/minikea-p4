type ProductCategoryType = {
  id: number;
  name: string;
  image: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoryType;
  images: string[];
};

export type DummyProductRatingsType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type DummyProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: DummyProductRatingsType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export type CartItem = DummyProductType & {
  quantity: number;
};

export type ProductFetchResponseType = {
  products: DummyProductType[];
  total: number;
  skip: number;
  limit: number;
};
