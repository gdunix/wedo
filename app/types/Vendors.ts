export type Vendor = {
  id: number;
  name: string;
  categoryId: number;
  cityId: number;
  rating?: number;
  slug: string;
};

export type City = {
  id: number;
  name: string;
  slug: string;
};

export type Category = {
  id: number;
  name: string;
  img?: string;
  slug: string;
};
