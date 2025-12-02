[**@aonawale/sanity-query**](../README.md)

***

[@aonawale/sanity-query](../globals.md) / order

# Function: order()

> **order**(`field`, `direction`): [`QueryOrderConstraint`](../interfaces/QueryOrderConstraint.md)

Defined in: [query-constraint/query-constraint.ts:44](https://github.com/aonawale/sanity-query/blob/ccea629feaa7d364546e60161f7413fcfd0fd329/src/query-constraint/query-constraint.ts#L44)

A function that builds an order query.

## Parameters

### field

`string`

The field to apply the sorting on.

### direction

[`QueryOrderConstraintDirection`](../type-aliases/QueryOrderConstraintDirection.md)

The sort direction.

## Returns

[`QueryOrderConstraint`](../interfaces/QueryOrderConstraint.md)

An order query.

## Example

```ts
const orderQuery = order('age', 'asc')
```
