export type Vendor = {
  id: number;
  name: string;
  categoryId: number;
  cityId: number;
  rating?: number;
  slug: string;
  img?: string;
};

export type City = {
  id: number;
  name: string;
  country: string;
  slug: string;
};

export type Category = {
  id: number;
  name: string;
  img?: string;
  slug: string;
  ranking: number;
};
