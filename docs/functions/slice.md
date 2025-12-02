[**@aonawale/sanity-query**](../README.md)

***

[@aonawale/sanity-query](../globals.md) / slice

# Function: slice()

> **slice**(`startIndex`, `endIndex?`, `inclusive?`): [`QuerySliceConstraint`](../interfaces/QuerySliceConstraint.md)

Defined in: [query-constraint/query-constraint.ts:59](https://github.com/aonawale/sanity-query/blob/ccea629feaa7d364546e60161f7413fcfd0fd329/src/query-constraint/query-constraint.ts#L59)

A function that builds a slice query.

## Parameters

### startIndex

`number`

The index to begin slicing the documents from.

### endIndex?

`number`

The amount of documents to return.

### inclusive?

`boolean`

Whether to include the document at the endIndex or not.

## Returns

[`QuerySliceConstraint`](../interfaces/QuerySliceConstraint.md)

A slice query.

## Example

```ts
const sliceQuery = slice(0, 10, true)
```
