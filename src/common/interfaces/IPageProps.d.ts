export interface IPageProps {
  params: {
    [key: string]: string | string[];
  };
  searchParams: {
    [key: string]: string | string[];
  };
}
