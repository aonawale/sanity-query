import {SanityClient} from '@sanity/client'
import {Query} from '../types/query'
import {buildQuery} from '../query-builder'

const sanityQuery = (query?: Query, projection?: string) => {
  const parts = query ? [buildQuery(query)] : []
  if (query && projection) parts.push(`{${projection}}`)
  return parts.join(' ')
}

/**
 * A function that fetches documents from Sanity.
 * @param client - A Sanity client.
 * @param query - A query object.
 * @param projection - A projection string. (Optional).
 * @returns A promise that resolves to a document or an array of documents.
 * @example
 * const client = sanityClient({...})
 * const query = {
 *  constraints: [
 *   filter('name', 'match', 'John'),
 *   order('age', 'asc'),
 *   slice(0, 10),
 *  ],
 * }
 * const projection = '_id, name, age'
 * const documents = await fetch(client, query, projection)
 * console.log(documents)
 * => [{_id: '...', name: 'John', age: 42}, ...]
 */
const fetch = <T>(client: SanityClient, query: Query, projection?: string) =>
  client.fetch<T>(sanityQuery(query, projection))

export {fetch}
