/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Cart = "cart",
	Category = "category",
	Pages = "pages",
	PersonalLab = "personal_lab",
	PersonalProjects = "personal_projects",
	Products = "products",
	ProductsView = "products_view",
	Settings = "settings",
	TodoTasks = "todo_tasks",
	TodoUsers = "todo_users",
	Tokens = "tokens",
	Users = "users",
	Variants = "variants",
	VariantsView = "variants_view",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CartRecord = {
	quantity: number
	user: RecordIdString
	variant: RecordIdString
}

export enum CategoryTypeOptions {
	"gender" = "gender",
	"type" = "type",
	"material" = "material",
	"age" = "age",
	"collection" = "collection",
}
export type CategoryRecord = {
	name?: string
	type: CategoryTypeOptions
}

export type PagesRecord<Tdata = unknown> = {
	data: null | Tdata
	path?: string
}

export enum PersonalLabTypeOptions {
	"livecodes" = "livecodes",
}
export type PersonalLabRecord<Ttags = unknown> = {
	body?: HTMLString
	slug: string
	tags?: null | Ttags
	target: string
	title?: string
	type: PersonalLabTypeOptions
}

export enum PersonalProjectsTypeOptions {
	"link" = "link",
}
export type PersonalProjectsRecord<Ttarget = unknown> = {
	body?: HTMLString
	target: null | Ttarget
	title?: string
	type: PersonalProjectsTypeOptions
	year: string
}

export type ProductsRecord = {
	categories?: RecordIdString[]
	images: string[]
	name?: string
	offer_price?: number
	price: number
	public?: boolean
}

export type ProductsViewRecord = {
	categories?: RecordIdString[]
	images: string[]
	name?: string
	offer_price?: number
	price: number
	public?: boolean
}

export type SettingsRecord<Tvalue = unknown> = {
	key?: string
	value?: null | Tvalue
}

export type TodoTasksRecord = {
	details: string
	owner: RecordIdString
	title?: string
}

export type TodoUsersRecord = never

export type TokensRecord = {
	name?: string
	token?: string
}

export enum UsersRoleOptions {
	"editor" = "editor",
	"admin" = "admin",
	"owner" = "owner",
}
export type UsersRecord = {
	avatar?: string
	name?: string
	role?: UsersRoleOptions
}

export enum VariantsSizeOptions {
	"s" = "s",
	"m" = "m",
	"l" = "l",
	"xl" = "xl",
	"xxl" = "xxl",
	"xxxl" = "xxxl",
	"uni" = "uni",
}

export enum VariantsColorOptions {
	"red" = "red",
	"orange" = "orange",
	"yellow" = "yellow",
	"green" = "green",
	"blue" = "blue",
	"indigo" = "indigo",
	"violet" = "violet",
	"white" = "white",
	"black" = "black",
}
export type VariantsRecord = {
	added_price?: number
	base_product?: RecordIdString
	color?: VariantsColorOptions
	public?: boolean
	quantity?: number
	size?: VariantsSizeOptions
}

export enum VariantsViewColorOptions {
	"red" = "red",
	"orange" = "orange",
	"yellow" = "yellow",
	"green" = "green",
	"blue" = "blue",
	"indigo" = "indigo",
	"violet" = "violet",
	"white" = "white",
	"black" = "black",
}

export enum VariantsViewSizeOptions {
	"s" = "s",
	"m" = "m",
	"l" = "l",
	"xl" = "xl",
	"xxl" = "xxl",
	"xxxl" = "xxxl",
	"uni" = "uni",
}
export type VariantsViewRecord<Tavailable_quantity = unknown> = {
	added_price?: number
	available_quantity?: null | Tavailable_quantity
	base_product?: RecordIdString
	color?: VariantsViewColorOptions
	public?: boolean
	size?: VariantsViewSizeOptions
	total_quantity?: number
}

// Response types include system fields and match responses from the PocketBase API
export type CartResponse<Texpand = unknown> = Required<CartRecord> & BaseSystemFields<Texpand>
export type CategoryResponse<Texpand = unknown> = Required<CategoryRecord> & BaseSystemFields<Texpand>
export type PagesResponse<Tdata = unknown, Texpand = unknown> = Required<PagesRecord<Tdata>> & BaseSystemFields<Texpand>
export type PersonalLabResponse<Ttags = unknown, Texpand = unknown> = Required<PersonalLabRecord<Ttags>> & BaseSystemFields<Texpand>
export type PersonalProjectsResponse<Ttarget = unknown, Texpand = unknown> = Required<PersonalProjectsRecord<Ttarget>> & BaseSystemFields<Texpand>
export type ProductsResponse<Texpand = unknown> = Required<ProductsRecord> & BaseSystemFields<Texpand>
export type ProductsViewResponse<Texpand = unknown> = Required<ProductsViewRecord> & BaseSystemFields<Texpand>
export type SettingsResponse<Tvalue = unknown, Texpand = unknown> = Required<SettingsRecord<Tvalue>> & BaseSystemFields<Texpand>
export type TodoTasksResponse<Texpand = unknown> = Required<TodoTasksRecord> & BaseSystemFields<Texpand>
export type TodoUsersResponse<Texpand = unknown> = Required<TodoUsersRecord> & AuthSystemFields<Texpand>
export type TokensResponse<Texpand = unknown> = Required<TokensRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type VariantsResponse<Texpand = unknown> = Required<VariantsRecord> & BaseSystemFields<Texpand>
export type VariantsViewResponse<Tavailable_quantity = unknown, Texpand = unknown> = Required<VariantsViewRecord<Tavailable_quantity>> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	cart: CartRecord
	category: CategoryRecord
	pages: PagesRecord
	personal_lab: PersonalLabRecord
	personal_projects: PersonalProjectsRecord
	products: ProductsRecord
	products_view: ProductsViewRecord
	settings: SettingsRecord
	todo_tasks: TodoTasksRecord
	todo_users: TodoUsersRecord
	tokens: TokensRecord
	users: UsersRecord
	variants: VariantsRecord
	variants_view: VariantsViewRecord
}

export type CollectionResponses = {
	cart: CartResponse
	category: CategoryResponse
	pages: PagesResponse
	personal_lab: PersonalLabResponse
	personal_projects: PersonalProjectsResponse
	products: ProductsResponse
	products_view: ProductsViewResponse
	settings: SettingsResponse
	todo_tasks: TodoTasksResponse
	todo_users: TodoUsersResponse
	tokens: TokensResponse
	users: UsersResponse
	variants: VariantsResponse
	variants_view: VariantsViewResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'cart'): RecordService<CartResponse>
	collection(idOrName: 'category'): RecordService<CategoryResponse>
	collection(idOrName: 'pages'): RecordService<PagesResponse>
	collection(idOrName: 'personal_lab'): RecordService<PersonalLabResponse>
	collection(idOrName: 'personal_projects'): RecordService<PersonalProjectsResponse>
	collection(idOrName: 'products'): RecordService<ProductsResponse>
	collection(idOrName: 'products_view'): RecordService<ProductsViewResponse>
	collection(idOrName: 'settings'): RecordService<SettingsResponse>
	collection(idOrName: 'todo_tasks'): RecordService<TodoTasksResponse>
	collection(idOrName: 'todo_users'): RecordService<TodoUsersResponse>
	collection(idOrName: 'tokens'): RecordService<TokensResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'variants'): RecordService<VariantsResponse>
	collection(idOrName: 'variants_view'): RecordService<VariantsViewResponse>
}
