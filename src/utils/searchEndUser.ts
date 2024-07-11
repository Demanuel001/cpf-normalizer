import axios from 'axios';
import { SearchEndUserType } from '../types/SearchEndUserType';
import { searchEndUserQuery } from '../query/SearchEndUserQuery';

export async function searchEndUser(inputPhone: string): Promise<string[] | undefined> {
  const url = `https://${process.env.ZENDESK_BASE_URL}.com/api/lotus/graphql`;

  const data = {
    limit: 25,
    pageNumber: 1,
    query: `phone:${inputPhone}`
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: process.env.ZENDESK_BASIC_AUTH,
  };

  const body = {
    query: searchEndUserQuery,
    variables: data,
  };

  try {
    const result = await axios.post<SearchEndUserType>(url, body, { headers });

    if (result.data.errors) {
      throw new Error(result.data.errors.join(', '));
    }

    return result.data.data.search.edges.map((edge) => edge.node.notes);
  } catch (error) {
    console.error('Error searching phone:', error);
  }
}