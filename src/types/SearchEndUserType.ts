export type SearchEndUserType = {
  data: {
    search: {
      edges: {
        node: {
          id: string;
          name: string;
          email: string | null;
          phone: string | null;
          notes: string;
        };
      }[];
    };
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    count: number;
  }
  errors?: string[];
};