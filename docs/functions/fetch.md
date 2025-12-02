[**@aonawale/sanity-query**](../README.md)

***

[@aonawale/sanity-query](../globals.md) / fetch

# Function: fetch()

> **fetch**\<`T`\>(`client`, `query`, `projection?`): `Promise`\<`T`\>

Defined in: [query/query.ts:31](https://github.com/aonawale/sanity-query/blob/1ce6c12e061c570199ba4b551babbeeb551f866a/src/query/query.ts#L31)

A function that fetches documents from Sanity.

## Type Parameters

### T

`T`

## Parameters

### client

`SanityClient`

A Sanity client.

### query

[`Query`](../interfaces/Query.md)

A query object.

### projection?

`string`

A projection string. (Optional).

## Returns

`Promise`\<`T`\>

A promise that resolves to a document or an array of documents.

## Example

```ts
const client = sanityClient({...})
const query = {
 constraints: [
  filter('name', 'match', 'John'),
  order('age', 'asc'),
  slice(0, 10),
 ],
}
const projection = '_id, name, age'
const documents = await fetch(client, query, projection)
console.log(documents)
=\> [{_id: '...', name: 'John', age: 42}, ...]
```
