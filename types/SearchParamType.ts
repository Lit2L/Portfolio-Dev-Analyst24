export type SearchParamTypes = {
  params: Params;
  searchParams: SearchParams;
};

type Params = {
  id: string;
};

type SearchParams = {
  id: string;
  name: string;
  area: string;
  image: string;
  imageAlt: string;
  link: string;
  color: string;
};
