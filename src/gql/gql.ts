/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CollectionList on Query {\n  collections(first: 10) {\n    ...CollectionListItem\n  }\n}": types.CollectionListFragmentDoc,
    "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  products(first: 10) {\n    ...ProductListItem\n  }\n  image {\n    url\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  ...CollectionList\n}": types.CollectionsGetListDocument,
    "fragment ProductDetails on Product {\n  ...ProductListItem\n  variants {\n    ... on ProductColorVariant {\n      ...SingleProductColorVariant\n    }\n    ... on ProductSizeColorVariant {\n      ...SingleProductSizeColorVariant\n    }\n    ... on ProductSizeVariant {\n      ...SingleProductSizeVariant\n    }\n  }\n}": types.ProductDetailsFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductList on Query {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}": types.ProductListFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images(first: 1) {\n    url\n  }\n  price\n  description\n  categories(first: 1) {\n    name\n    slug\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n  color\n  size\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n  color\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n  size\n}": types.SingleProductSizeColorVariantFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionListItem\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetTotalCountDocument,
    "query SuggestedProductsGetByProductIdAndCategorySlug($slug: String!, $productId: ID!) {\n  categories(where: {slug: $slug}) {\n    products(where: {NOT: {id: $productId}}, first: 4) {\n      ...ProductListItem\n    }\n  }\n}": types.SuggestedProductsGetByProductIdAndCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionList on Query {\n  collections(first: 10) {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  products(first: 10) {\n    ...ProductListItem\n  }\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  ...CollectionList\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  ...ProductListItem\n  variants {\n    ... on ProductColorVariant {\n      ...SingleProductColorVariant\n    }\n    ... on ProductSizeColorVariant {\n      ...SingleProductSizeColorVariant\n    }\n    ... on ProductSizeVariant {\n      ...SingleProductSizeVariant\n    }\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductList on Query {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  images(first: 1) {\n    url\n  }\n  price\n  description\n  categories(first: 1) {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProductSizeColorVariant on ProductSizeColorVariant {\n  id\n  name\n  color\n  size\n}\n\nfragment SingleProductColorVariant on ProductColorVariant {\n  id\n  name\n  color\n}\n\nfragment SingleProductSizeVariant on ProductSizeVariant {\n  id\n  name\n  size\n}"): typeof import('./graphql').SingleProductSizeColorVariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int!, $skip: Int!) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetTotalCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetByProductIdAndCategorySlug($slug: String!, $productId: ID!) {\n  categories(where: {slug: $slug}) {\n    products(where: {NOT: {id: $productId}}, first: 4) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetByProductIdAndCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
