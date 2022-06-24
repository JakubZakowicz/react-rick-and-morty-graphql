export type DetailsButtonProps = {
  name: string;
  to: string;
  width?: string;
};

export type PaginationProps = {
  pageCount: number;
  page: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
};

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}

export type Statuses = {
  [key: string]: string;
};