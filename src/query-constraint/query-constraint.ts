import {
  QueryFilterConstraint,
  QueryFilterConstraintOperator,
  QueryOrderConstraint,
  QueryOrderConstraintDirection,
  QuerySliceConstraint,
} from '../types/query-constraint'

const serializeValue = (value?: unknown) => {
  if (value === null) return 'null'
  if (typeof value === 'string') return `'${value}'`
  if (Array.isArray(value)) return JSON.stringify(value)
  return value
}

/**
 * A function that builds a filter query.
 * @param field - The field to apply the filter on.
 * @param operator - The filter operator.
 * @param value - The filter value.
 * @returns A filter query.
 * @example
 * const filterQuery = filter('name', 'match', 'John')
 */
const filter = (
  field: string,
  operator?: QueryFilterConstraintOperator,
  value?: unknown,
): QueryFilterConstraint => ({
  type: 'filter',
  field,
  operator,
  value: serializeValue(value),
})

/**
 * A function that builds an order query.
 * @param field - The field to apply the sorting on.
 * @param direction - The sort direction.
 * @returns An order query.
 * @example
 * const orderQuery = order('age', 'asc')
 */
const order = (field: string, direction: QueryOrderConstraintDirection): QueryOrderConstraint => ({
  type: 'order',
  field,
  direction,
})

/**
 * A function that builds a slice query.
 * @param startIndex - The index to begin slicing the documents from.
 * @param endIndex - The amount of documents to return.
 * @param inclusive - Whether to include the document at the endIndex or not.
 * @returns A slice query.
 * @example
 * const sliceQuery = slice(0, 10, true)
 */
const slice = (
  startIndex: number,
  endIndex?: number,
  inclusive?: boolean,
): QuerySliceConstraint => ({
  type: 'slice',
  startIndex,
  endIndex,
  inclusive,
})

export {filter, order, slice}
