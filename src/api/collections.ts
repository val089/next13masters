import { executeGraphql } from "./graphqlApi";
import {
	type CollectionListItemFragment,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollectionsGraphql = async (): Promise<
	CollectionListItemFragment[]
> => {
	const graphqlResponse = await executeGraphql(
		CollectionsGetListDocument,
		{},
	);

	return graphqlResponse.collections;
};
