import { JavaLikeOptions } from '@openapi-generator-plus/java-like-generator-helper'

/**
 * Options specific to Java that the user can provide to the code generation process.
 */
export interface CodegenOptionsJava extends JavaLikeOptions {
	apiPackage: string
	apiImplPackage: string
	modelPackage: string
	useBeanValidation: boolean
	includeTests: boolean
	junitVersion: number

	dateImplementation: string
	timeImplementation: string
	dateTimeImplementation: string

	imports: string[] | null

	hideGenerationTimestamp: boolean

	maven: MavenOptions | null
	relativeSourceOutputPath: string
	relativeResourcesOutputPath?: string
	relativeTestOutputPath: string
	relativeTestResourcesOutputPath?: string
	customTemplatesPath?: string
}

export interface MavenOptions {
	groupId: string
	artifactId: string
	version: string
	versions: {
		[name: string]: string
	}
}
