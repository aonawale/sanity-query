import {fetch} from './query'
import {SanityClient} from '@sanity/client'
import {filter, order, slice} from '../query-constraint'

const client = {
  fetch: jest.fn(),
} as unknown as SanityClient

const projection = `
  'id': _id,
  name,
  'image': image.asset -> url
`

const query = {
  constraints: [
    filter('name', '==', "'Sanity'"),
    filter('age', '>', 18),
    order('name', 'asc'),
    order('age', 'desc'),
    slice(5, 10),
  ],
}

describe('useQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('works with only query', async () => {
    await fetch(client, query)
    expect(client.fetch).toHaveBeenCalledTimes(1)
    expect(client.fetch).toHaveBeenCalledWith(
      `*[name == 'Sanity' && age > 18] | order(name asc) | order(age desc) [5...10]`,
    )
  })

  it('works with both query and projection', async () => {
    await fetch(client, query, projection)
    expect(client.fetch).toHaveBeenCalledTimes(1)
    expect(client.fetch).toHaveBeenCalledWith(
      `*[name == 'Sanity' && age > 18] | order(name asc) | order(age desc) [5...10] {${projection}}`,
    )
  })
})
