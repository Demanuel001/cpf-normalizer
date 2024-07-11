export const searchEndUserQuery = `
query searchEndUsers($query: String!, $limit: Int, $pageNumber: Int) {
  search(type: USER, limit: $limit, query: $query, pageNumber: $pageNumber) {
    edges {
      node {
        ...EndUserFragment
        __typename
      }
      __typename
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      __typename
    }
    count
    __typename
  }
}

fragment EndUserFragment on User {
  id
  name
  email
  phone
  notes
}`