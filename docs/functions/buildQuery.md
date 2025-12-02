[**@aonawale/sanity-query**](../README.md)

***

[@aonawale/sanity-query](../globals.md) / buildQuery

# Function: buildQuery()

> **buildQuery**(`query`): `string`

Defined in: [query-builder/query-builder.ts:141](https://github.com/aonawale/sanity-query/blob/1ce6c12e061c570199ba4b551babbeeb551f866a/src/query-builder/query-builder.ts#L141)

A function that builds a query from a query object.

## Parameters

### query

[`Query`](../interfaces/Query.md)

A query object. (Optional).

## Returns

`string`

A query string.

## Example

```ts
const query = {
 constraints: [
  {
    type: 'filter',
    field: 'name',
    operator: 'match',
    value: 'John',
  },
  {
    type: 'order',
    field: 'age',
    direction: 'asc',
   },
   {
    type: 'slice',
    startIndex: 0,
    endIndex: 10,
    inclusive: false,
   },
 ],
 ordering: 'selection',
}
const queryString = buildQuery(query)
console.log(queryString)
=\> *[name match 'John'] | order(age asc) [0...10]
```
