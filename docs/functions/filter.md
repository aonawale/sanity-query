[**@aonawale/sanity-query**](../README.md)

***

[@aonawale/sanity-query](../globals.md) / filter

# Function: filter()

> **filter**(`field`, `operator?`, `value?`): [`QueryFilterConstraint`](../interfaces/QueryFilterConstraint.md)

Defined in: [query-constraint/query-constraint.ts:25](https://github.com/aonawale/sanity-query/blob/1ce6c12e061c570199ba4b551babbeeb551f866a/src/query-constraint/query-constraint.ts#L25)

A function that builds a filter query.

## Parameters

### field

`string`

The field to apply the filter on.

### operator?

[`QueryFilterConstraintOperator`](../type-aliases/QueryFilterConstraintOperator.md)

The filter operator.

### value?

`unknown`

The filter value.

## Returns

[`QueryFilterConstraint`](../interfaces/QueryFilterConstraint.md)

A filter query.

## Example

```ts
const filterQuery = filter('name', 'match', 'John')
```
