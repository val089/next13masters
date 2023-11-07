import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				useTypeImports: true, //typy będą importowane jako type
				enumsAsTypes: true, //enumy jako typy, poniewaz enumy zostają w bundlu jako wartości
				defaultScalarType: "unknown",
				skipTypename: true,
				documentMode: "string",
			},
		},
	},
};

export default config;
