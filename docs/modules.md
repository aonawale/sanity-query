[@aonawale/sanity-query](README.md) / Exports

# @aonawale/sanity-query

## Table of contents

### Interfaces

- [Query](interfaces/Query.md)
- [QueryConstraint](interfaces/QueryConstraint.md)
- [QueryFilterConstraint](interfaces/QueryFilterConstraint.md)
- [QueryOrderConstraint](interfaces/QueryOrderConstraint.md)
- [QuerySliceConstraint](interfaces/QuerySliceConstraint.md)

### Type Aliases

- [QueryConstraintType](modules.md#queryconstrainttype)
- [QueryFilterConstraintOperator](modules.md#queryfilterconstraintoperator)
- [QueryOrderConstraintDirection](modules.md#queryorderconstraintdirection)

### Functions

- [buildQuery](modules.md#buildquery)
- [fetch](modules.md#fetch)
- [filter](modules.md#filter)
- [order](modules.md#order)
- [slice](modules.md#slice)

## Type Aliases

### QueryConstraintType

Ƭ **QueryConstraintType**: ``"filter"`` \| ``"order"`` \| ``"slice"``

#### Defined in

types/query-constraint.ts:2

___

### QueryFilterConstraintOperator

Ƭ **QueryFilterConstraintOperator**: ``"=="`` \| ``"!="`` \| ``"in"`` \| ``"<"`` \| ``"<="`` \| ``">"`` \| ``">="`` \| ``"match"``

#### Defined in

types/query-constraint.ts:8

___

### QueryOrderConstraintDirection

Ƭ **QueryOrderConstraintDirection**: ``"asc"`` \| ``"desc"``

#### Defined in

types/query-constraint.ts:20

## Functions

### buildQuery

▸ **buildQuery**(`query`): `string`

A function that builds a query from a query object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`Query`](interfaces/Query.md) | A query object. (Optional). |

#### Returns

`string`

A query string.

**`Example`**

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
=> *[name match 'John'] | order(age asc) [0...10]
```

#### Defined in

query-builder/query-builder.ts:141

___

### fetch

▸ **fetch**<`T`\>(`client`, `query`, `projection?`): `Promise`<`T`\>

A function that fetches documents from Sanity.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | `SanityClient` | A Sanity client. |
| `query` | [`Query`](interfaces/Query.md) | A query object. |
| `projection?` | `string` | A projection string. (Optional). |

#### Returns

`Promise`<`T`\>

A promise that resolves to a document or an array of documents.

**`Example`**

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
=> [{_id: '...', name: 'John', age: 42}, ...]
```

#### Defined in

query/query.ts:31

___

### filter

▸ **filter**(`field`, `operator?`, `value?`): [`QueryFilterConstraint`](interfaces/QueryFilterConstraint.md)

A function that builds a filter query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The field to apply the filter on. |
| `operator?` | [`QueryFilterConstraintOperator`](modules.md#queryfilterconstraintoperator) | The filter operator. |
| `value?` | `unknown` | The filter value. |

#### Returns

[`QueryFilterConstraint`](interfaces/QueryFilterConstraint.md)

A filter query.

**`Example`**

```ts
const filterQuery = filter('name', 'match', 'John')
```

#### Defined in

query-constraint/query-constraint.ts:18

___

### order

▸ **order**(`field`, `direction`): [`QueryOrderConstraint`](interfaces/QueryOrderConstraint.md)

A function that builds an order query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The field to apply the sorting on. |
| `direction` | [`QueryOrderConstraintDirection`](modules.md#queryorderconstraintdirection) | The sort direction. |

#### Returns

[`QueryOrderConstraint`](interfaces/QueryOrderConstraint.md)

An order query.

**`Example`**

```ts
const orderQuery = order('age', 'asc')
```

#### Defined in

query-constraint/query-constraint.ts:37

___

### slice

▸ **slice**(`startIndex`, `endIndex?`, `inclusive?`): [`QuerySliceConstraint`](interfaces/QuerySliceConstraint.md)

A function that builds a slice query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | The index to begin slicing the documents from. |
| `endIndex?` | `number` | The amount of documents to return. |
| `inclusive?` | `boolean` | Whether to include the document at the endIndex or not. |

#### Returns

[`QuerySliceConstraint`](interfaces/QuerySliceConstraint.md)

A slice query.

**`Example`**

```ts
const sliceQuery = slice(0, 10, true)
```

#### Defined in

query-constraint/query-constraint.ts:52
