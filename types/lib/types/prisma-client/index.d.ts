
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  verified: boolean
  internalUser: boolean | null
  resetToken: string | null
  profileId: string
}

/**
 * Model UserSession
 */

export type UserSession = {
  id: string
  createdAt: Date
  updatedAt: Date
  isActive: boolean
  userId: string
}

/**
 * Model ResetCode
 */

export type ResetCode = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  email: string
  resetCode: string
  isUsed: boolean
  expiredAt: Date
}

/**
 * Model UserProfile
 */

export type UserProfile = {
  id: string
  createdAt: Date
  updatedAt: Date
  firstName: string
  lastName: string
  phone: string | null
}

/**
 * Model Vendor
 */

export type Vendor = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  address: string | null
  category: string | null
  country: string
  currency: string
  internalVendor: boolean
  type: VendorType | null
  primaryUserId: string
  subscriptionId: string
}

/**
 * Model VendorSubscription
 */

export type VendorSubscription = {
  id: string
  createdAt: Date
  updatedAt: Date
  discountFee: number | null
  discountCommission: number | null
  startedAt: Date | null
  endedAt: Date | null
  type: SubscriptionType | null
  planId: string
}

/**
 * Model SubscriptionPlan
 */

export type SubscriptionPlan = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  isDefault: boolean | null
  baseFee: number | null
  baseCommission: number | null
  discountFee: number | null
  discountCommission: number | null
}

/**
 * Model Catalog
 */

export type Catalog = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  isActive: boolean
  isDefault: boolean
  vendorId: string
}

/**
 * Model Category
 */

export type Category = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  isActive: boolean
  picture: string | null
  isDefault: boolean
  sequence: number
  vendorId: string
  catalogId: string
}

/**
 * Model Item
 */

export type Item = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  price: number
  discount: number
  picture: string | null
  description: string | null
  isActive: boolean
  vendorId: string
  catalogId: string
  categoryId: string
}

/**
 * Model ItemVariant
 */

export type ItemVariant = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  price: number
  itemId: string
  vendorId: string
}

/**
 * Model CatalogTag
 */

export type CatalogTag = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  color: string | null
  icon: string | null
  type: TagLevel
  vendorId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const VendorType: {
  STANDARD: 'STANDARD',
  BETA: 'BETA',
  ALPHA: 'ALPHA',
  PREMIUM: 'PREMIUM'
};

export type VendorType = (typeof VendorType)[keyof typeof VendorType]


export const SubscriptionType: {
  FREE: 'FREE'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const TagLevel: {
  CATALOG: 'CATALOG',
  CATEGORY: 'CATEGORY',
  ITEM: 'ITEM'
};

export type TagLevel = (typeof TagLevel)[keyof typeof TagLevel]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<GlobalReject>;

  /**
   * `prisma.resetCode`: Exposes CRUD operations for the **ResetCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetCodes
    * const resetCodes = await prisma.resetCode.findMany()
    * ```
    */
  get resetCode(): Prisma.ResetCodeDelegate<GlobalReject>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<GlobalReject>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<GlobalReject>;

  /**
   * `prisma.vendorSubscription`: Exposes CRUD operations for the **VendorSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorSubscriptions
    * const vendorSubscriptions = await prisma.vendorSubscription.findMany()
    * ```
    */
  get vendorSubscription(): Prisma.VendorSubscriptionDelegate<GlobalReject>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<GlobalReject>;

  /**
   * `prisma.catalog`: Exposes CRUD operations for the **Catalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Catalogs
    * const catalogs = await prisma.catalog.findMany()
    * ```
    */
  get catalog(): Prisma.CatalogDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<GlobalReject>;

  /**
   * `prisma.itemVariant`: Exposes CRUD operations for the **ItemVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemVariants
    * const itemVariants = await prisma.itemVariant.findMany()
    * ```
    */
  get itemVariant(): Prisma.ItemVariantDelegate<GlobalReject>;

  /**
   * `prisma.catalogTag`: Exposes CRUD operations for the **CatalogTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatalogTags
    * const catalogTags = await prisma.catalogTag.findMany()
    * ```
    */
  get catalogTag(): Prisma.CatalogTagDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.20.1
   * Query Engine version: 60ba6551f29b17d7d6ce479e5733c70d9c00860e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  export type Union = any

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    UserSession: 'UserSession',
    ResetCode: 'ResetCode',
    UserProfile: 'UserProfile',
    Vendor: 'Vendor',
    VendorSubscription: 'VendorSubscription',
    SubscriptionPlan: 'SubscriptionPlan',
    Catalog: 'Catalog',
    Category: 'Category',
    Item: 'Item',
    ItemVariant: 'ItemVariant',
    CatalogTag: 'CatalogTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    vendorMember: number
    vendorPrimary: number
    UserSession: number
    ResetCode: number
  }

  export type UserCountOutputTypeSelect = {
    vendorMember?: boolean
    vendorPrimary?: boolean
    UserSession?: boolean
    ResetCode?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type VendorCountOutputType
   */


  export type VendorCountOutputType = {
    users: number
    catalogs: number
    categories: number
    items: number
    tags: number
    itemVariants: number
  }

  export type VendorCountOutputTypeSelect = {
    users?: boolean
    catalogs?: boolean
    categories?: boolean
    items?: boolean
    tags?: boolean
    itemVariants?: boolean
  }

  export type VendorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | VendorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? VendorCountOutputType
    : S extends undefined
    ? never
    : S extends VendorCountOutputTypeArgs
    ?'include' extends U
    ? VendorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VendorCountOutputType ?VendorCountOutputType [P]
  : 
     never
  } 
    : VendorCountOutputType
  : VendorCountOutputType




  // Custom InputTypes

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
    **/
    select?: VendorCountOutputTypeSelect | null
  }



  /**
   * Count Type SubscriptionPlanCountOutputType
   */


  export type SubscriptionPlanCountOutputType = {
    subscription: number
  }

  export type SubscriptionPlanCountOutputTypeSelect = {
    subscription?: boolean
  }

  export type SubscriptionPlanCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SubscriptionPlanCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SubscriptionPlanCountOutputType
    : S extends undefined
    ? never
    : S extends SubscriptionPlanCountOutputTypeArgs
    ?'include' extends U
    ? SubscriptionPlanCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SubscriptionPlanCountOutputType ?SubscriptionPlanCountOutputType [P]
  : 
     never
  } 
    : SubscriptionPlanCountOutputType
  : SubscriptionPlanCountOutputType




  // Custom InputTypes

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
    **/
    select?: SubscriptionPlanCountOutputTypeSelect | null
  }



  /**
   * Count Type CatalogCountOutputType
   */


  export type CatalogCountOutputType = {
    categories: number
    items: number
    tags: number
  }

  export type CatalogCountOutputTypeSelect = {
    categories?: boolean
    items?: boolean
    tags?: boolean
  }

  export type CatalogCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CatalogCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CatalogCountOutputType
    : S extends undefined
    ? never
    : S extends CatalogCountOutputTypeArgs
    ?'include' extends U
    ? CatalogCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CatalogCountOutputType ?CatalogCountOutputType [P]
  : 
     never
  } 
    : CatalogCountOutputType
  : CatalogCountOutputType




  // Custom InputTypes

  /**
   * CatalogCountOutputType without action
   */
  export type CatalogCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CatalogCountOutputType
    **/
    select?: CatalogCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    items: number
    tags: number
  }

  export type CategoryCountOutputTypeSelect = {
    items?: boolean
    tags?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoryCountOutputType ?CategoryCountOutputType [P]
  : 
     never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type ItemCountOutputType
   */


  export type ItemCountOutputType = {
    tags: number
    variants: number
  }

  export type ItemCountOutputTypeSelect = {
    tags?: boolean
    variants?: boolean
  }

  export type ItemCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ItemCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ItemCountOutputType
    : S extends undefined
    ? never
    : S extends ItemCountOutputTypeArgs
    ?'include' extends U
    ? ItemCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ItemCountOutputType ?ItemCountOutputType [P]
  : 
     never
  } 
    : ItemCountOutputType
  : ItemCountOutputType




  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
    **/
    select?: ItemCountOutputTypeSelect | null
  }



  /**
   * Count Type CatalogTagCountOutputType
   */


  export type CatalogTagCountOutputType = {
    catalogs: number
    items: number
    categories: number
  }

  export type CatalogTagCountOutputTypeSelect = {
    catalogs?: boolean
    items?: boolean
    categories?: boolean
  }

  export type CatalogTagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CatalogTagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CatalogTagCountOutputType
    : S extends undefined
    ? never
    : S extends CatalogTagCountOutputTypeArgs
    ?'include' extends U
    ? CatalogTagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CatalogTagCountOutputType ?CatalogTagCountOutputType [P]
  : 
     never
  } 
    : CatalogTagCountOutputType
  : CatalogTagCountOutputType




  // Custom InputTypes

  /**
   * CatalogTagCountOutputType without action
   */
  export type CatalogTagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CatalogTagCountOutputType
    **/
    select?: CatalogTagCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    count: UserCountAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    verified: boolean | null
    internalUser: boolean | null
    resetToken: string | null
    profileId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    verified: boolean | null
    internalUser: boolean | null
    resetToken: string | null
    profileId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    email: number | null
    password: number | null
    verified: number | null
    internalUser: number | null
    resetToken: number | null
    profileId: number | null
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    verified?: true
    internalUser?: true
    resetToken?: true
    profileId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    verified?: true
    internalUser?: true
    resetToken?: true
    profileId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    verified?: true
    internalUser?: true
    resetToken?: true
    profileId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserCountAggregateInputType | true
    min?: UserMinAggregateInputType
    max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    verified: boolean
    internalUser: boolean | null
    resetToken: string | null
    profileId: string
    count: UserCountAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<Array<
    PickArray<UserGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserGroupByOutputType))]: GetScalarType<T[P], UserGroupByOutputType[P]>
    }
  >>
    

  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    verified?: boolean
    internalUser?: boolean
    resetToken?: boolean
    profileId?: boolean
    profile?: boolean | UserProfileArgs
    vendorMember?: boolean | VendorFindManyArgs
    vendorPrimary?: boolean | VendorFindManyArgs
    UserSession?: boolean | UserSessionFindManyArgs
    ResetCode?: boolean | ResetCodeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    profile?: boolean | UserProfileArgs
    vendorMember?: boolean | VendorFindManyArgs
    vendorPrimary?: boolean | VendorFindManyArgs
    UserSession?: boolean | UserSessionFindManyArgs
    ResetCode?: boolean | ResetCodeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'profile'
        ? UserProfileGetPayload<S['include'][P]> :
        P extends 'vendorMember'
        ? Array < VendorGetPayload<S['include'][P]>>  :
        P extends 'vendorPrimary'
        ? Array < VendorGetPayload<S['include'][P]>>  :
        P extends 'UserSession'
        ? Array < UserSessionGetPayload<S['include'][P]>>  :
        P extends 'ResetCode'
        ? Array < ResetCodeGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'profile'
        ? UserProfileGetPayload<S['select'][P]> :
        P extends 'vendorMember'
        ? Array < VendorGetPayload<S['select'][P]>>  :
        P extends 'vendorPrimary'
        ? Array < VendorGetPayload<S['select'][P]>>  :
        P extends 'UserSession'
        ? Array < UserSessionGetPayload<S['select'][P]>>  :
        P extends 'ResetCode'
        ? Array < ResetCodeGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends UserProfileArgs = {}>(args?: Subset<T, UserProfileArgs>): CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>;

    vendorMember<T extends VendorFindManyArgs = {}>(args?: Subset<T, VendorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Vendor>>, PrismaPromise<Array<VendorGetPayload<T>>>>;

    vendorPrimary<T extends VendorFindManyArgs = {}>(args?: Subset<T, VendorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Vendor>>, PrismaPromise<Array<VendorGetPayload<T>>>>;

    UserSession<T extends UserSessionFindManyArgs = {}>(args?: Subset<T, UserSessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserSession>>, PrismaPromise<Array<UserSessionGetPayload<T>>>>;

    ResetCode<T extends ResetCodeFindManyArgs = {}>(args?: Subset<T, ResetCodeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ResetCode>>, PrismaPromise<Array<ResetCodeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserSession
   */


  export type AggregateUserSession = {
    count: UserSessionCountAggregateOutputType | null
    min: UserSessionMinAggregateOutputType | null
    max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    userId: string | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    userId: string | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    isActive: number | null
    userId: number | null
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    userId?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    userId?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    userId?: true
    _all?: true
  }

  export type UserSessionAggregateArgs = {
    /**
     * Filter which UserSession to aggregate.
    **/
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
    **/
    orderBy?: Enumerable<UserSessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateUserSession]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }


    
    
  export type UserSessionGroupByArgs = {
    where?: UserSessionWhereInput
    orderBy?: Enumerable<UserSessionOrderByInput>
    by: Array<UserSessionScalarFieldEnum>
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserSessionCountAggregateInputType | true
    min?: UserSessionMinAggregateInputType
    max?: UserSessionMaxAggregateInputType
  }


  export type UserSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    userId: string
    count: UserSessionCountAggregateOutputType | null
    min: UserSessionMinAggregateOutputType | null
    max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Promise<Array<
    PickArray<UserSessionGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: GetScalarType<T[P], UserSessionGroupByOutputType[P]>
    }
  >>
    

  export type UserSessionSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type UserSessionInclude = {
    user?: boolean | UserArgs
  }

  export type UserSessionGetPayload<
    S extends boolean | null | undefined | UserSessionArgs,
    U = keyof S
      > = S extends true
        ? UserSession
    : S extends undefined
    ? never
    : S extends UserSessionArgs | UserSessionFindManyArgs
    ?'include' extends U
    ? UserSession  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserSession ?UserSession [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : UserSession
  : UserSession


  type UserSessionCountArgs = Merge<
    Omit<UserSessionFindManyArgs, 'select' | 'include'> & {
      select?: UserSessionCountAggregateInputType | true
    }
  >

  export interface UserSessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserSession'> extends True ? CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>> : CheckSelect<T, Prisma__UserSessionClient<UserSession | null >, Prisma__UserSessionClient<UserSessionGetPayload<T> | null >>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserSession'> extends True ? CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>> : CheckSelect<T, Prisma__UserSessionClient<UserSession | null >, Prisma__UserSessionClient<UserSessionGetPayload<T> | null >>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserSessionFindManyArgs>(
      args?: SelectSubset<T, UserSessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserSession>>, PrismaPromise<Array<UserSessionGetPayload<T>>>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
    **/
    create<T extends UserSessionCreateArgs>(
      args: SelectSubset<T, UserSessionCreateArgs>
    ): CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>>

    /**
     * Create many UserSessions.
     *     @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     *     @example
     *     // Create many UserSessions
     *     const userSession = await prisma.userSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserSessionCreateManyArgs>(
      args?: SelectSubset<T, UserSessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
    **/
    delete<T extends UserSessionDeleteArgs>(
      args: SelectSubset<T, UserSessionDeleteArgs>
    ): CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserSessionUpdateArgs>(
      args: SelectSubset<T, UserSessionUpdateArgs>
    ): CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserSessionDeleteManyArgs>(
      args?: SelectSubset<T, UserSessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserSessionUpdateManyArgs>(
      args: SelectSubset<T, UserSessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
    **/
    upsert<T extends UserSessionUpsertArgs>(
      args: SelectSubset<T, UserSessionUpsertArgs>
    ): CheckSelect<T, Prisma__UserSessionClient<UserSession>, Prisma__UserSessionClient<UserSessionGetPayload<T>>>

    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserSessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * Throw an Error if a UserSession can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserSession to fetch.
    **/
    where: UserSessionWhereUniqueInput
  }


  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * Throw an Error if a UserSession can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserSession to fetch.
    **/
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
    **/
    orderBy?: Enumerable<UserSessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
    **/
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
    **/
    distinct?: Enumerable<UserSessionScalarFieldEnum>
  }


  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * Filter, which UserSessions to fetch.
    **/
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
    **/
    orderBy?: Enumerable<UserSessionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
    **/
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
    **/
    skip?: number
    distinct?: Enumerable<UserSessionScalarFieldEnum>
  }


  /**
   * UserSession create
   */
  export type UserSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * The data needed to create a UserSession.
    **/
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }


  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs = {
    data: Enumerable<UserSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * The data needed to update a UserSession.
    **/
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
    **/
    where: UserSessionWhereUniqueInput
  }


  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs = {
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    where?: UserSessionWhereInput
  }


  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * The filter to search for the UserSession to update in case it exists.
    **/
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
    **/
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }


  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
    /**
     * Filter which UserSession to delete.
    **/
    where: UserSessionWhereUniqueInput
  }


  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs = {
    where?: UserSessionWhereInput
  }


  /**
   * UserSession without action
   */
  export type UserSessionArgs = {
    /**
     * Select specific fields to fetch from the UserSession
    **/
    select?: UserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserSessionInclude | null
  }



  /**
   * Model ResetCode
   */


  export type AggregateResetCode = {
    count: ResetCodeCountAggregateOutputType | null
    min: ResetCodeMinAggregateOutputType | null
    max: ResetCodeMaxAggregateOutputType | null
  }

  export type ResetCodeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    email: string | null
    resetCode: string | null
    isUsed: boolean | null
    expiredAt: Date | null
  }

  export type ResetCodeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    email: string | null
    resetCode: string | null
    isUsed: boolean | null
    expiredAt: Date | null
  }

  export type ResetCodeCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    userId: number | null
    email: number | null
    resetCode: number | null
    isUsed: number | null
    expiredAt: number | null
    _all: number
  }


  export type ResetCodeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    email?: true
    resetCode?: true
    isUsed?: true
    expiredAt?: true
  }

  export type ResetCodeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    email?: true
    resetCode?: true
    isUsed?: true
    expiredAt?: true
  }

  export type ResetCodeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    email?: true
    resetCode?: true
    isUsed?: true
    expiredAt?: true
    _all?: true
  }

  export type ResetCodeAggregateArgs = {
    /**
     * Filter which ResetCode to aggregate.
    **/
    where?: ResetCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetCodes to fetch.
    **/
    orderBy?: Enumerable<ResetCodeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ResetCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetCodes from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetCodes.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetCodes
    **/
    count?: true | ResetCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ResetCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ResetCodeMaxAggregateInputType
  }

  export type GetResetCodeAggregateType<T extends ResetCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateResetCode]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetCode[P]>
      : GetScalarType<T[P], AggregateResetCode[P]>
  }


    
    
  export type ResetCodeGroupByArgs = {
    where?: ResetCodeWhereInput
    orderBy?: Enumerable<ResetCodeOrderByInput>
    by: Array<ResetCodeScalarFieldEnum>
    having?: ResetCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: ResetCodeCountAggregateInputType | true
    min?: ResetCodeMinAggregateInputType
    max?: ResetCodeMaxAggregateInputType
  }


  export type ResetCodeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    email: string
    resetCode: string
    isUsed: boolean
    expiredAt: Date
    count: ResetCodeCountAggregateOutputType | null
    min: ResetCodeMinAggregateOutputType | null
    max: ResetCodeMaxAggregateOutputType | null
  }

  type GetResetCodeGroupByPayload<T extends ResetCodeGroupByArgs> = Promise<Array<
    PickArray<ResetCodeGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof ResetCodeGroupByOutputType))]: GetScalarType<T[P], ResetCodeGroupByOutputType[P]>
    }
  >>
    

  export type ResetCodeSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    email?: boolean
    resetCode?: boolean
    isUsed?: boolean
    expiredAt?: boolean
    user?: boolean | UserArgs
  }

  export type ResetCodeInclude = {
    user?: boolean | UserArgs
  }

  export type ResetCodeGetPayload<
    S extends boolean | null | undefined | ResetCodeArgs,
    U = keyof S
      > = S extends true
        ? ResetCode
    : S extends undefined
    ? never
    : S extends ResetCodeArgs | ResetCodeFindManyArgs
    ?'include' extends U
    ? ResetCode  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ResetCode ?ResetCode [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : ResetCode
  : ResetCode


  type ResetCodeCountArgs = Merge<
    Omit<ResetCodeFindManyArgs, 'select' | 'include'> & {
      select?: ResetCodeCountAggregateInputType | true
    }
  >

  export interface ResetCodeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ResetCode that matches the filter.
     * @param {ResetCodeFindUniqueArgs} args - Arguments to find a ResetCode
     * @example
     * // Get one ResetCode
     * const resetCode = await prisma.resetCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResetCodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResetCodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ResetCode'> extends True ? CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>> : CheckSelect<T, Prisma__ResetCodeClient<ResetCode | null >, Prisma__ResetCodeClient<ResetCodeGetPayload<T> | null >>

    /**
     * Find the first ResetCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeFindFirstArgs} args - Arguments to find a ResetCode
     * @example
     * // Get one ResetCode
     * const resetCode = await prisma.resetCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResetCodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResetCodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ResetCode'> extends True ? CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>> : CheckSelect<T, Prisma__ResetCodeClient<ResetCode | null >, Prisma__ResetCodeClient<ResetCodeGetPayload<T> | null >>

    /**
     * Find zero or more ResetCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetCodes
     * const resetCodes = await prisma.resetCode.findMany()
     * 
     * // Get first 10 ResetCodes
     * const resetCodes = await prisma.resetCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetCodeWithIdOnly = await prisma.resetCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResetCodeFindManyArgs>(
      args?: SelectSubset<T, ResetCodeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ResetCode>>, PrismaPromise<Array<ResetCodeGetPayload<T>>>>

    /**
     * Create a ResetCode.
     * @param {ResetCodeCreateArgs} args - Arguments to create a ResetCode.
     * @example
     * // Create one ResetCode
     * const ResetCode = await prisma.resetCode.create({
     *   data: {
     *     // ... data to create a ResetCode
     *   }
     * })
     * 
    **/
    create<T extends ResetCodeCreateArgs>(
      args: SelectSubset<T, ResetCodeCreateArgs>
    ): CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>>

    /**
     * Create many ResetCodes.
     *     @param {ResetCodeCreateManyArgs} args - Arguments to create many ResetCodes.
     *     @example
     *     // Create many ResetCodes
     *     const resetCode = await prisma.resetCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResetCodeCreateManyArgs>(
      args?: SelectSubset<T, ResetCodeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ResetCode.
     * @param {ResetCodeDeleteArgs} args - Arguments to delete one ResetCode.
     * @example
     * // Delete one ResetCode
     * const ResetCode = await prisma.resetCode.delete({
     *   where: {
     *     // ... filter to delete one ResetCode
     *   }
     * })
     * 
    **/
    delete<T extends ResetCodeDeleteArgs>(
      args: SelectSubset<T, ResetCodeDeleteArgs>
    ): CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>>

    /**
     * Update one ResetCode.
     * @param {ResetCodeUpdateArgs} args - Arguments to update one ResetCode.
     * @example
     * // Update one ResetCode
     * const resetCode = await prisma.resetCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResetCodeUpdateArgs>(
      args: SelectSubset<T, ResetCodeUpdateArgs>
    ): CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>>

    /**
     * Delete zero or more ResetCodes.
     * @param {ResetCodeDeleteManyArgs} args - Arguments to filter ResetCodes to delete.
     * @example
     * // Delete a few ResetCodes
     * const { count } = await prisma.resetCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResetCodeDeleteManyArgs>(
      args?: SelectSubset<T, ResetCodeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetCodes
     * const resetCode = await prisma.resetCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResetCodeUpdateManyArgs>(
      args: SelectSubset<T, ResetCodeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ResetCode.
     * @param {ResetCodeUpsertArgs} args - Arguments to update or create a ResetCode.
     * @example
     * // Update or create a ResetCode
     * const resetCode = await prisma.resetCode.upsert({
     *   create: {
     *     // ... data to create a ResetCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetCode we want to update
     *   }
     * })
    **/
    upsert<T extends ResetCodeUpsertArgs>(
      args: SelectSubset<T, ResetCodeUpsertArgs>
    ): CheckSelect<T, Prisma__ResetCodeClient<ResetCode>, Prisma__ResetCodeClient<ResetCodeGetPayload<T>>>

    /**
     * Count the number of ResetCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeCountArgs} args - Arguments to filter ResetCodes to count.
     * @example
     * // Count the number of ResetCodes
     * const count = await prisma.resetCode.count({
     *   where: {
     *     // ... the filter for the ResetCodes we want to count
     *   }
     * })
    **/
    count<T extends ResetCodeCountArgs>(
      args?: Subset<T, ResetCodeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResetCodeAggregateArgs>(args: Subset<T, ResetCodeAggregateArgs>): PrismaPromise<GetResetCodeAggregateType<T>>

    /**
     * Group by ResetCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResetCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetCodeGroupByArgs['orderBy'] }
        : { orderBy?: ResetCodeGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResetCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetCodeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResetCodeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ResetCode findUnique
   */
  export type ResetCodeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * Throw an Error if a ResetCode can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ResetCode to fetch.
    **/
    where: ResetCodeWhereUniqueInput
  }


  /**
   * ResetCode findFirst
   */
  export type ResetCodeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * Throw an Error if a ResetCode can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ResetCode to fetch.
    **/
    where?: ResetCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetCodes to fetch.
    **/
    orderBy?: Enumerable<ResetCodeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetCodes.
    **/
    cursor?: ResetCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetCodes from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetCodes.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetCodes.
    **/
    distinct?: Enumerable<ResetCodeScalarFieldEnum>
  }


  /**
   * ResetCode findMany
   */
  export type ResetCodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * Filter, which ResetCodes to fetch.
    **/
    where?: ResetCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetCodes to fetch.
    **/
    orderBy?: Enumerable<ResetCodeOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetCodes.
    **/
    cursor?: ResetCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetCodes from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetCodes.
    **/
    skip?: number
    distinct?: Enumerable<ResetCodeScalarFieldEnum>
  }


  /**
   * ResetCode create
   */
  export type ResetCodeCreateArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * The data needed to create a ResetCode.
    **/
    data: XOR<ResetCodeCreateInput, ResetCodeUncheckedCreateInput>
  }


  /**
   * ResetCode createMany
   */
  export type ResetCodeCreateManyArgs = {
    data: Enumerable<ResetCodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ResetCode update
   */
  export type ResetCodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * The data needed to update a ResetCode.
    **/
    data: XOR<ResetCodeUpdateInput, ResetCodeUncheckedUpdateInput>
    /**
     * Choose, which ResetCode to update.
    **/
    where: ResetCodeWhereUniqueInput
  }


  /**
   * ResetCode updateMany
   */
  export type ResetCodeUpdateManyArgs = {
    data: XOR<ResetCodeUpdateManyMutationInput, ResetCodeUncheckedUpdateManyInput>
    where?: ResetCodeWhereInput
  }


  /**
   * ResetCode upsert
   */
  export type ResetCodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * The filter to search for the ResetCode to update in case it exists.
    **/
    where: ResetCodeWhereUniqueInput
    /**
     * In case the ResetCode found by the `where` argument doesn't exist, create a new ResetCode with this data.
    **/
    create: XOR<ResetCodeCreateInput, ResetCodeUncheckedCreateInput>
    /**
     * In case the ResetCode was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ResetCodeUpdateInput, ResetCodeUncheckedUpdateInput>
  }


  /**
   * ResetCode delete
   */
  export type ResetCodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
    /**
     * Filter which ResetCode to delete.
    **/
    where: ResetCodeWhereUniqueInput
  }


  /**
   * ResetCode deleteMany
   */
  export type ResetCodeDeleteManyArgs = {
    where?: ResetCodeWhereInput
  }


  /**
   * ResetCode without action
   */
  export type ResetCodeArgs = {
    /**
     * Select specific fields to fetch from the ResetCode
    **/
    select?: ResetCodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ResetCodeInclude | null
  }



  /**
   * Model UserProfile
   */


  export type AggregateUserProfile = {
    count: UserProfileCountAggregateOutputType | null
    min: UserProfileMinAggregateOutputType | null
    max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    phone: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    phone: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    firstName: number | null
    lastName: number | null
    phone: number | null
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    phone?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    phone?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    phone?: true
    _all?: true
  }

  export type UserProfileAggregateArgs = {
    /**
     * Filter which UserProfile to aggregate.
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
    **/
    orderBy?: Enumerable<UserProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateUserProfile]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }


    
    
  export type UserProfileGroupByArgs = {
    where?: UserProfileWhereInput
    orderBy?: Enumerable<UserProfileOrderByInput>
    by: Array<UserProfileScalarFieldEnum>
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserProfileCountAggregateInputType | true
    min?: UserProfileMinAggregateInputType
    max?: UserProfileMaxAggregateInputType
  }


  export type UserProfileGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    phone: string | null
    count: UserProfileCountAggregateOutputType | null
    min: UserProfileMinAggregateOutputType | null
    max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Promise<Array<
    PickArray<UserProfileGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: GetScalarType<T[P], UserProfileGroupByOutputType[P]>
    }
  >>
    

  export type UserProfileSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    user?: boolean | UserArgs
  }

  export type UserProfileInclude = {
    user?: boolean | UserArgs
  }

  export type UserProfileGetPayload<
    S extends boolean | null | undefined | UserProfileArgs,
    U = keyof S
      > = S extends true
        ? UserProfile
    : S extends undefined
    ? never
    : S extends UserProfileArgs | UserProfileFindManyArgs
    ?'include' extends U
    ? UserProfile  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserProfile ?UserProfile [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : UserProfile
  : UserProfile


  type UserProfileCountArgs = Merge<
    Omit<UserProfileFindManyArgs, 'select' | 'include'> & {
      select?: UserProfileCountAggregateInputType | true
    }
  >

  export interface UserProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserProfile'> extends True ? CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>> : CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserProfile'> extends True ? CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>> : CheckSelect<T, Prisma__UserProfileClient<UserProfile | null >, Prisma__UserProfileClient<UserProfileGetPayload<T> | null >>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs>(
      args?: SelectSubset<T, UserProfileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserProfile>>, PrismaPromise<Array<UserProfileGetPayload<T>>>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs>(
      args: SelectSubset<T, UserProfileCreateArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs>(
      args?: SelectSubset<T, UserProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs>(
      args: SelectSubset<T, UserProfileDeleteArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs>(
      args: SelectSubset<T, UserProfileUpdateArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs>(
      args: SelectSubset<T, UserProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs>(
      args: SelectSubset<T, UserProfileUpsertArgs>
    ): CheckSelect<T, Prisma__UserProfileClient<UserProfile>, Prisma__UserProfileClient<UserProfileGetPayload<T>>>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserProfileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * Throw an Error if a UserProfile can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserProfile to fetch.
    **/
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * Throw an Error if a UserProfile can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserProfile to fetch.
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
    **/
    orderBy?: Enumerable<UserProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
    **/
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * Filter, which UserProfiles to fetch.
    **/
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
    **/
    orderBy?: Enumerable<UserProfileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
    **/
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
    **/
    skip?: number
    distinct?: Enumerable<UserProfileScalarFieldEnum>
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * The data needed to create a UserProfile.
    **/
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs = {
    data: Enumerable<UserProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * The data needed to update a UserProfile.
    **/
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
    **/
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs = {
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
    **/
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
    **/
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
    /**
     * Filter which UserProfile to delete.
    **/
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs = {
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileArgs = {
    /**
     * Select specific fields to fetch from the UserProfile
    **/
    select?: UserProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: UserProfileInclude | null
  }



  /**
   * Model Vendor
   */


  export type AggregateVendor = {
    count: VendorCountAggregateOutputType | null
    min: VendorMinAggregateOutputType | null
    max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    category: string | null
    country: string | null
    currency: string | null
    internalVendor: boolean | null
    type: VendorType | null
    primaryUserId: string | null
    subscriptionId: string | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    address: string | null
    category: string | null
    country: string | null
    currency: string | null
    internalVendor: boolean | null
    type: VendorType | null
    primaryUserId: string | null
    subscriptionId: string | null
  }

  export type VendorCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    name: number | null
    address: number | null
    category: number | null
    country: number | null
    currency: number | null
    internalVendor: number | null
    type: number | null
    primaryUserId: number | null
    subscriptionId: number | null
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    category?: true
    country?: true
    currency?: true
    internalVendor?: true
    type?: true
    primaryUserId?: true
    subscriptionId?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    category?: true
    country?: true
    currency?: true
    internalVendor?: true
    type?: true
    primaryUserId?: true
    subscriptionId?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    address?: true
    category?: true
    country?: true
    currency?: true
    internalVendor?: true
    type?: true
    primaryUserId?: true
    subscriptionId?: true
    _all?: true
  }

  export type VendorAggregateArgs = {
    /**
     * Filter which Vendor to aggregate.
    **/
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
    **/
    orderBy?: Enumerable<VendorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }


    
    
  export type VendorGroupByArgs = {
    where?: VendorWhereInput
    orderBy?: Enumerable<VendorOrderByInput>
    by: Array<VendorScalarFieldEnum>
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: VendorCountAggregateInputType | true
    min?: VendorMinAggregateInputType
    max?: VendorMaxAggregateInputType
  }


  export type VendorGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    address: string | null
    category: string | null
    country: string
    currency: string
    internalVendor: boolean
    type: VendorType | null
    primaryUserId: string
    subscriptionId: string
    count: VendorCountAggregateOutputType | null
    min: VendorMinAggregateOutputType | null
    max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Promise<Array<
    PickArray<VendorGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof VendorGroupByOutputType))]: GetScalarType<T[P], VendorGroupByOutputType[P]>
    }
  >>
    

  export type VendorSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    country?: boolean
    currency?: boolean
    internalVendor?: boolean
    type?: boolean
    primaryUserId?: boolean
    subscriptionId?: boolean
    primaryUser?: boolean | UserArgs
    users?: boolean | UserFindManyArgs
    subscription?: boolean | VendorSubscriptionArgs
    catalogs?: boolean | CatalogFindManyArgs
    categories?: boolean | CategoryFindManyArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    itemVariants?: boolean | ItemVariantFindManyArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }

  export type VendorInclude = {
    primaryUser?: boolean | UserArgs
    users?: boolean | UserFindManyArgs
    subscription?: boolean | VendorSubscriptionArgs
    catalogs?: boolean | CatalogFindManyArgs
    categories?: boolean | CategoryFindManyArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    itemVariants?: boolean | ItemVariantFindManyArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }

  export type VendorGetPayload<
    S extends boolean | null | undefined | VendorArgs,
    U = keyof S
      > = S extends true
        ? Vendor
    : S extends undefined
    ? never
    : S extends VendorArgs | VendorFindManyArgs
    ?'include' extends U
    ? Vendor  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'primaryUser'
        ? UserGetPayload<S['include'][P]> :
        P extends 'users'
        ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'subscription'
        ? VendorSubscriptionGetPayload<S['include'][P]> :
        P extends 'catalogs'
        ? Array < CatalogGetPayload<S['include'][P]>>  :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['include'][P]>>  :
        P extends 'itemVariants'
        ? Array < ItemVariantGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? VendorCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Vendor ?Vendor [P]
  : 
          P extends 'primaryUser'
        ? UserGetPayload<S['select'][P]> :
        P extends 'users'
        ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'subscription'
        ? VendorSubscriptionGetPayload<S['select'][P]> :
        P extends 'catalogs'
        ? Array < CatalogGetPayload<S['select'][P]>>  :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['select'][P]>>  :
        P extends 'itemVariants'
        ? Array < ItemVariantGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? VendorCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Vendor
  : Vendor


  type VendorCountArgs = Merge<
    Omit<VendorFindManyArgs, 'select' | 'include'> & {
      select?: VendorCountAggregateInputType | true
    }
  >

  export interface VendorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VendorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Vendor'> extends True ? CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>> : CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VendorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Vendor'> extends True ? CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>> : CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendorFindManyArgs>(
      args?: SelectSubset<T, VendorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Vendor>>, PrismaPromise<Array<VendorGetPayload<T>>>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
    **/
    create<T extends VendorCreateArgs>(
      args: SelectSubset<T, VendorCreateArgs>
    ): CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>>

    /**
     * Create many Vendors.
     *     @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     *     @example
     *     // Create many Vendors
     *     const vendor = await prisma.vendor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VendorCreateManyArgs>(
      args?: SelectSubset<T, VendorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
    **/
    delete<T extends VendorDeleteArgs>(
      args: SelectSubset<T, VendorDeleteArgs>
    ): CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendorUpdateArgs>(
      args: SelectSubset<T, VendorUpdateArgs>
    ): CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendorDeleteManyArgs>(
      args?: SelectSubset<T, VendorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendorUpdateManyArgs>(
      args: SelectSubset<T, VendorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
    **/
    upsert<T extends VendorUpsertArgs>(
      args: SelectSubset<T, VendorUpsertArgs>
    ): CheckSelect<T, Prisma__VendorClient<Vendor>, Prisma__VendorClient<VendorGetPayload<T>>>

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VendorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    primaryUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    subscription<T extends VendorSubscriptionArgs = {}>(args?: Subset<T, VendorSubscriptionArgs>): CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription | null >, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T> | null >>;

    catalogs<T extends CatalogFindManyArgs = {}>(args?: Subset<T, CatalogFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Catalog>>, PrismaPromise<Array<CatalogGetPayload<T>>>>;

    categories<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    tags<T extends CatalogTagFindManyArgs = {}>(args?: Subset<T, CatalogTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CatalogTag>>, PrismaPromise<Array<CatalogTagGetPayload<T>>>>;

    itemVariants<T extends ItemVariantFindManyArgs = {}>(args?: Subset<T, ItemVariantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ItemVariant>>, PrismaPromise<Array<ItemVariantGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * Throw an Error if a Vendor can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Vendor to fetch.
    **/
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * Throw an Error if a Vendor can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Vendor to fetch.
    **/
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
    **/
    orderBy?: Enumerable<VendorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
    **/
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
    **/
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * Filter, which Vendors to fetch.
    **/
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
    **/
    orderBy?: Enumerable<VendorOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
    **/
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
    **/
    skip?: number
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * Vendor create
   */
  export type VendorCreateArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * The data needed to create a Vendor.
    **/
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }


  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs = {
    data: Enumerable<VendorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Vendor update
   */
  export type VendorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * The data needed to update a Vendor.
    **/
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
    **/
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs = {
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    where?: VendorWhereInput
  }


  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * The filter to search for the Vendor to update in case it exists.
    **/
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
    **/
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }


  /**
   * Vendor delete
   */
  export type VendorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
    /**
     * Filter which Vendor to delete.
    **/
    where: VendorWhereUniqueInput
  }


  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs = {
    where?: VendorWhereInput
  }


  /**
   * Vendor without action
   */
  export type VendorArgs = {
    /**
     * Select specific fields to fetch from the Vendor
    **/
    select?: VendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorInclude | null
  }



  /**
   * Model VendorSubscription
   */


  export type AggregateVendorSubscription = {
    count: VendorSubscriptionCountAggregateOutputType | null
    avg: VendorSubscriptionAvgAggregateOutputType | null
    sum: VendorSubscriptionSumAggregateOutputType | null
    min: VendorSubscriptionMinAggregateOutputType | null
    max: VendorSubscriptionMaxAggregateOutputType | null
  }

  export type VendorSubscriptionAvgAggregateOutputType = {
    discountFee: number | null
    discountCommission: number | null
  }

  export type VendorSubscriptionSumAggregateOutputType = {
    discountFee: number | null
    discountCommission: number | null
  }

  export type VendorSubscriptionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discountFee: number | null
    discountCommission: number | null
    startedAt: Date | null
    endedAt: Date | null
    type: SubscriptionType | null
    planId: string | null
  }

  export type VendorSubscriptionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discountFee: number | null
    discountCommission: number | null
    startedAt: Date | null
    endedAt: Date | null
    type: SubscriptionType | null
    planId: string | null
  }

  export type VendorSubscriptionCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    discountFee: number | null
    discountCommission: number | null
    startedAt: number | null
    endedAt: number | null
    type: number | null
    planId: number | null
    _all: number
  }


  export type VendorSubscriptionAvgAggregateInputType = {
    discountFee?: true
    discountCommission?: true
  }

  export type VendorSubscriptionSumAggregateInputType = {
    discountFee?: true
    discountCommission?: true
  }

  export type VendorSubscriptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discountFee?: true
    discountCommission?: true
    startedAt?: true
    endedAt?: true
    type?: true
    planId?: true
  }

  export type VendorSubscriptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discountFee?: true
    discountCommission?: true
    startedAt?: true
    endedAt?: true
    type?: true
    planId?: true
  }

  export type VendorSubscriptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    discountFee?: true
    discountCommission?: true
    startedAt?: true
    endedAt?: true
    type?: true
    planId?: true
    _all?: true
  }

  export type VendorSubscriptionAggregateArgs = {
    /**
     * Filter which VendorSubscription to aggregate.
    **/
    where?: VendorSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorSubscriptions to fetch.
    **/
    orderBy?: Enumerable<VendorSubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: VendorSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorSubscriptions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorSubscriptions.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorSubscriptions
    **/
    count?: true | VendorSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: VendorSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: VendorSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: VendorSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: VendorSubscriptionMaxAggregateInputType
  }

  export type GetVendorSubscriptionAggregateType<T extends VendorSubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateVendorSubscription]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorSubscription[P]>
      : GetScalarType<T[P], AggregateVendorSubscription[P]>
  }


    
    
  export type VendorSubscriptionGroupByArgs = {
    where?: VendorSubscriptionWhereInput
    orderBy?: Enumerable<VendorSubscriptionOrderByInput>
    by: Array<VendorSubscriptionScalarFieldEnum>
    having?: VendorSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: VendorSubscriptionCountAggregateInputType | true
    avg?: VendorSubscriptionAvgAggregateInputType
    sum?: VendorSubscriptionSumAggregateInputType
    min?: VendorSubscriptionMinAggregateInputType
    max?: VendorSubscriptionMaxAggregateInputType
  }


  export type VendorSubscriptionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    discountFee: number | null
    discountCommission: number | null
    startedAt: Date | null
    endedAt: Date | null
    type: SubscriptionType | null
    planId: string
    count: VendorSubscriptionCountAggregateOutputType | null
    avg: VendorSubscriptionAvgAggregateOutputType | null
    sum: VendorSubscriptionSumAggregateOutputType | null
    min: VendorSubscriptionMinAggregateOutputType | null
    max: VendorSubscriptionMaxAggregateOutputType | null
  }

  type GetVendorSubscriptionGroupByPayload<T extends VendorSubscriptionGroupByArgs> = Promise<Array<
    PickArray<VendorSubscriptionGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof VendorSubscriptionGroupByOutputType))]: GetScalarType<T[P], VendorSubscriptionGroupByOutputType[P]>
    }
  >>
    

  export type VendorSubscriptionSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discountFee?: boolean
    discountCommission?: boolean
    startedAt?: boolean
    endedAt?: boolean
    type?: boolean
    planId?: boolean
    vendor?: boolean | VendorArgs
    plan?: boolean | SubscriptionPlanArgs
  }

  export type VendorSubscriptionInclude = {
    vendor?: boolean | VendorArgs
    plan?: boolean | SubscriptionPlanArgs
  }

  export type VendorSubscriptionGetPayload<
    S extends boolean | null | undefined | VendorSubscriptionArgs,
    U = keyof S
      > = S extends true
        ? VendorSubscription
    : S extends undefined
    ? never
    : S extends VendorSubscriptionArgs | VendorSubscriptionFindManyArgs
    ?'include' extends U
    ? VendorSubscription  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> | null :
        P extends 'plan'
        ? SubscriptionPlanGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VendorSubscription ?VendorSubscription [P]
  : 
          P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> | null :
        P extends 'plan'
        ? SubscriptionPlanGetPayload<S['select'][P]> : never
  } 
    : VendorSubscription
  : VendorSubscription


  type VendorSubscriptionCountArgs = Merge<
    Omit<VendorSubscriptionFindManyArgs, 'select' | 'include'> & {
      select?: VendorSubscriptionCountAggregateInputType | true
    }
  >

  export interface VendorSubscriptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VendorSubscription that matches the filter.
     * @param {VendorSubscriptionFindUniqueArgs} args - Arguments to find a VendorSubscription
     * @example
     * // Get one VendorSubscription
     * const vendorSubscription = await prisma.vendorSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendorSubscriptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VendorSubscriptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VendorSubscription'> extends True ? CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>> : CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription | null >, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T> | null >>

    /**
     * Find the first VendorSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionFindFirstArgs} args - Arguments to find a VendorSubscription
     * @example
     * // Get one VendorSubscription
     * const vendorSubscription = await prisma.vendorSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendorSubscriptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VendorSubscriptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VendorSubscription'> extends True ? CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>> : CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription | null >, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T> | null >>

    /**
     * Find zero or more VendorSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorSubscriptions
     * const vendorSubscriptions = await prisma.vendorSubscription.findMany()
     * 
     * // Get first 10 VendorSubscriptions
     * const vendorSubscriptions = await prisma.vendorSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorSubscriptionWithIdOnly = await prisma.vendorSubscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendorSubscriptionFindManyArgs>(
      args?: SelectSubset<T, VendorSubscriptionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VendorSubscription>>, PrismaPromise<Array<VendorSubscriptionGetPayload<T>>>>

    /**
     * Create a VendorSubscription.
     * @param {VendorSubscriptionCreateArgs} args - Arguments to create a VendorSubscription.
     * @example
     * // Create one VendorSubscription
     * const VendorSubscription = await prisma.vendorSubscription.create({
     *   data: {
     *     // ... data to create a VendorSubscription
     *   }
     * })
     * 
    **/
    create<T extends VendorSubscriptionCreateArgs>(
      args: SelectSubset<T, VendorSubscriptionCreateArgs>
    ): CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>>

    /**
     * Create many VendorSubscriptions.
     *     @param {VendorSubscriptionCreateManyArgs} args - Arguments to create many VendorSubscriptions.
     *     @example
     *     // Create many VendorSubscriptions
     *     const vendorSubscription = await prisma.vendorSubscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VendorSubscriptionCreateManyArgs>(
      args?: SelectSubset<T, VendorSubscriptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VendorSubscription.
     * @param {VendorSubscriptionDeleteArgs} args - Arguments to delete one VendorSubscription.
     * @example
     * // Delete one VendorSubscription
     * const VendorSubscription = await prisma.vendorSubscription.delete({
     *   where: {
     *     // ... filter to delete one VendorSubscription
     *   }
     * })
     * 
    **/
    delete<T extends VendorSubscriptionDeleteArgs>(
      args: SelectSubset<T, VendorSubscriptionDeleteArgs>
    ): CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>>

    /**
     * Update one VendorSubscription.
     * @param {VendorSubscriptionUpdateArgs} args - Arguments to update one VendorSubscription.
     * @example
     * // Update one VendorSubscription
     * const vendorSubscription = await prisma.vendorSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendorSubscriptionUpdateArgs>(
      args: SelectSubset<T, VendorSubscriptionUpdateArgs>
    ): CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>>

    /**
     * Delete zero or more VendorSubscriptions.
     * @param {VendorSubscriptionDeleteManyArgs} args - Arguments to filter VendorSubscriptions to delete.
     * @example
     * // Delete a few VendorSubscriptions
     * const { count } = await prisma.vendorSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendorSubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, VendorSubscriptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorSubscriptions
     * const vendorSubscription = await prisma.vendorSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendorSubscriptionUpdateManyArgs>(
      args: SelectSubset<T, VendorSubscriptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VendorSubscription.
     * @param {VendorSubscriptionUpsertArgs} args - Arguments to update or create a VendorSubscription.
     * @example
     * // Update or create a VendorSubscription
     * const vendorSubscription = await prisma.vendorSubscription.upsert({
     *   create: {
     *     // ... data to create a VendorSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorSubscription we want to update
     *   }
     * })
    **/
    upsert<T extends VendorSubscriptionUpsertArgs>(
      args: SelectSubset<T, VendorSubscriptionUpsertArgs>
    ): CheckSelect<T, Prisma__VendorSubscriptionClient<VendorSubscription>, Prisma__VendorSubscriptionClient<VendorSubscriptionGetPayload<T>>>

    /**
     * Count the number of VendorSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionCountArgs} args - Arguments to filter VendorSubscriptions to count.
     * @example
     * // Count the number of VendorSubscriptions
     * const count = await prisma.vendorSubscription.count({
     *   where: {
     *     // ... the filter for the VendorSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends VendorSubscriptionCountArgs>(
      args?: Subset<T, VendorSubscriptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorSubscriptionAggregateArgs>(args: Subset<T, VendorSubscriptionAggregateArgs>): PrismaPromise<GetVendorSubscriptionAggregateType<T>>

    /**
     * Group by VendorSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: VendorSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorSubscriptionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VendorSubscriptionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    plan<T extends SubscriptionPlanArgs = {}>(args?: Subset<T, SubscriptionPlanArgs>): CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan | null >, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VendorSubscription findUnique
   */
  export type VendorSubscriptionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * Throw an Error if a VendorSubscription can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VendorSubscription to fetch.
    **/
    where: VendorSubscriptionWhereUniqueInput
  }


  /**
   * VendorSubscription findFirst
   */
  export type VendorSubscriptionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * Throw an Error if a VendorSubscription can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VendorSubscription to fetch.
    **/
    where?: VendorSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorSubscriptions to fetch.
    **/
    orderBy?: Enumerable<VendorSubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorSubscriptions.
    **/
    cursor?: VendorSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorSubscriptions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorSubscriptions.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorSubscriptions.
    **/
    distinct?: Enumerable<VendorSubscriptionScalarFieldEnum>
  }


  /**
   * VendorSubscription findMany
   */
  export type VendorSubscriptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * Filter, which VendorSubscriptions to fetch.
    **/
    where?: VendorSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorSubscriptions to fetch.
    **/
    orderBy?: Enumerable<VendorSubscriptionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorSubscriptions.
    **/
    cursor?: VendorSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorSubscriptions from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorSubscriptions.
    **/
    skip?: number
    distinct?: Enumerable<VendorSubscriptionScalarFieldEnum>
  }


  /**
   * VendorSubscription create
   */
  export type VendorSubscriptionCreateArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * The data needed to create a VendorSubscription.
    **/
    data: XOR<VendorSubscriptionCreateInput, VendorSubscriptionUncheckedCreateInput>
  }


  /**
   * VendorSubscription createMany
   */
  export type VendorSubscriptionCreateManyArgs = {
    data: Enumerable<VendorSubscriptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VendorSubscription update
   */
  export type VendorSubscriptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * The data needed to update a VendorSubscription.
    **/
    data: XOR<VendorSubscriptionUpdateInput, VendorSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which VendorSubscription to update.
    **/
    where: VendorSubscriptionWhereUniqueInput
  }


  /**
   * VendorSubscription updateMany
   */
  export type VendorSubscriptionUpdateManyArgs = {
    data: XOR<VendorSubscriptionUpdateManyMutationInput, VendorSubscriptionUncheckedUpdateManyInput>
    where?: VendorSubscriptionWhereInput
  }


  /**
   * VendorSubscription upsert
   */
  export type VendorSubscriptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * The filter to search for the VendorSubscription to update in case it exists.
    **/
    where: VendorSubscriptionWhereUniqueInput
    /**
     * In case the VendorSubscription found by the `where` argument doesn't exist, create a new VendorSubscription with this data.
    **/
    create: XOR<VendorSubscriptionCreateInput, VendorSubscriptionUncheckedCreateInput>
    /**
     * In case the VendorSubscription was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<VendorSubscriptionUpdateInput, VendorSubscriptionUncheckedUpdateInput>
  }


  /**
   * VendorSubscription delete
   */
  export type VendorSubscriptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
    /**
     * Filter which VendorSubscription to delete.
    **/
    where: VendorSubscriptionWhereUniqueInput
  }


  /**
   * VendorSubscription deleteMany
   */
  export type VendorSubscriptionDeleteManyArgs = {
    where?: VendorSubscriptionWhereInput
  }


  /**
   * VendorSubscription without action
   */
  export type VendorSubscriptionArgs = {
    /**
     * Select specific fields to fetch from the VendorSubscription
    **/
    select?: VendorSubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: VendorSubscriptionInclude | null
  }



  /**
   * Model SubscriptionPlan
   */


  export type AggregateSubscriptionPlan = {
    count: SubscriptionPlanCountAggregateOutputType | null
    avg: SubscriptionPlanAvgAggregateOutputType | null
    sum: SubscriptionPlanSumAggregateOutputType | null
    min: SubscriptionPlanMinAggregateOutputType | null
    max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isDefault: boolean | null
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isDefault: boolean | null
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    name: number | null
    isDefault: number | null
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    baseFee?: true
    baseCommission?: true
    discountFee?: true
    discountCommission?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    baseFee?: true
    baseCommission?: true
    discountFee?: true
    discountCommission?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isDefault?: true
    baseFee?: true
    baseCommission?: true
    discountFee?: true
    discountCommission?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isDefault?: true
    baseFee?: true
    baseCommission?: true
    discountFee?: true
    discountCommission?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isDefault?: true
    baseFee?: true
    baseCommission?: true
    discountFee?: true
    discountCommission?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs = {
    /**
     * Filter which SubscriptionPlan to aggregate.
    **/
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
    **/
    orderBy?: Enumerable<SubscriptionPlanOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptionPlan]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }


    
    
  export type SubscriptionPlanGroupByArgs = {
    where?: SubscriptionPlanWhereInput
    orderBy?: Enumerable<SubscriptionPlanOrderByInput>
    by: Array<SubscriptionPlanScalarFieldEnum>
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: SubscriptionPlanCountAggregateInputType | true
    avg?: SubscriptionPlanAvgAggregateInputType
    sum?: SubscriptionPlanSumAggregateInputType
    min?: SubscriptionPlanMinAggregateInputType
    max?: SubscriptionPlanMaxAggregateInputType
  }


  export type SubscriptionPlanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    isDefault: boolean | null
    baseFee: number | null
    baseCommission: number | null
    discountFee: number | null
    discountCommission: number | null
    count: SubscriptionPlanCountAggregateOutputType | null
    avg: SubscriptionPlanAvgAggregateOutputType | null
    sum: SubscriptionPlanSumAggregateOutputType | null
    min: SubscriptionPlanMinAggregateOutputType | null
    max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Promise<Array<
    PickArray<SubscriptionPlanGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
    }
  >>
    

  export type SubscriptionPlanSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isDefault?: boolean
    baseFee?: boolean
    baseCommission?: boolean
    discountFee?: boolean
    discountCommission?: boolean
    subscription?: boolean | VendorSubscriptionFindManyArgs
    _count?: boolean | SubscriptionPlanCountOutputTypeArgs
  }

  export type SubscriptionPlanInclude = {
    subscription?: boolean | VendorSubscriptionFindManyArgs
    _count?: boolean | SubscriptionPlanCountOutputTypeArgs
  }

  export type SubscriptionPlanGetPayload<
    S extends boolean | null | undefined | SubscriptionPlanArgs,
    U = keyof S
      > = S extends true
        ? SubscriptionPlan
    : S extends undefined
    ? never
    : S extends SubscriptionPlanArgs | SubscriptionPlanFindManyArgs
    ?'include' extends U
    ? SubscriptionPlan  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'subscription'
        ? Array < VendorSubscriptionGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SubscriptionPlanCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SubscriptionPlan ?SubscriptionPlan [P]
  : 
          P extends 'subscription'
        ? Array < VendorSubscriptionGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SubscriptionPlanCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : SubscriptionPlan
  : SubscriptionPlan


  type SubscriptionPlanCountArgs = Merge<
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }
  >

  export interface SubscriptionPlanDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionPlanFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubscriptionPlanFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SubscriptionPlan'> extends True ? CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>> : CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan | null >, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T> | null >>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionPlanFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubscriptionPlanFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SubscriptionPlan'> extends True ? CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>> : CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan | null >, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T> | null >>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubscriptionPlanFindManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SubscriptionPlan>>, PrismaPromise<Array<SubscriptionPlanGetPayload<T>>>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionPlanCreateArgs>(
      args: SelectSubset<T, SubscriptionPlanCreateArgs>
    ): CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>>

    /**
     * Create many SubscriptionPlans.
     *     @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     *     @example
     *     // Create many SubscriptionPlans
     *     const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubscriptionPlanCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionPlanDeleteArgs>(
      args: SelectSubset<T, SubscriptionPlanDeleteArgs>
    ): CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionPlanUpdateArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateArgs>
    ): CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionPlanUpsertArgs>(
      args: SelectSubset<T, SubscriptionPlanUpsertArgs>
    ): CheckSelect<T, Prisma__SubscriptionPlanClient<SubscriptionPlan>, Prisma__SubscriptionPlanClient<SubscriptionPlanGetPayload<T>>>

    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubscriptionPlanClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    subscription<T extends VendorSubscriptionFindManyArgs = {}>(args?: Subset<T, VendorSubscriptionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<VendorSubscription>>, PrismaPromise<Array<VendorSubscriptionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * Throw an Error if a SubscriptionPlan can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SubscriptionPlan to fetch.
    **/
    where: SubscriptionPlanWhereUniqueInput
  }


  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * Throw an Error if a SubscriptionPlan can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SubscriptionPlan to fetch.
    **/
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
    **/
    orderBy?: Enumerable<SubscriptionPlanOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
    **/
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
    **/
    distinct?: Enumerable<SubscriptionPlanScalarFieldEnum>
  }


  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * Filter, which SubscriptionPlans to fetch.
    **/
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
    **/
    orderBy?: Enumerable<SubscriptionPlanOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
    **/
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
    **/
    skip?: number
    distinct?: Enumerable<SubscriptionPlanScalarFieldEnum>
  }


  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * The data needed to create a SubscriptionPlan.
    **/
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }


  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs = {
    data: Enumerable<SubscriptionPlanCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * The data needed to update a SubscriptionPlan.
    **/
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
    **/
    where: SubscriptionPlanWhereUniqueInput
  }


  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs = {
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    where?: SubscriptionPlanWhereInput
  }


  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
    **/
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
    **/
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }


  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
    /**
     * Filter which SubscriptionPlan to delete.
    **/
    where: SubscriptionPlanWhereUniqueInput
  }


  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs = {
    where?: SubscriptionPlanWhereInput
  }


  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanArgs = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
    **/
    select?: SubscriptionPlanSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: SubscriptionPlanInclude | null
  }



  /**
   * Model Catalog
   */


  export type AggregateCatalog = {
    count: CatalogCountAggregateOutputType | null
    min: CatalogMinAggregateOutputType | null
    max: CatalogMaxAggregateOutputType | null
  }

  export type CatalogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    isActive: boolean | null
    isDefault: boolean | null
    vendorId: string | null
  }

  export type CatalogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    isActive: boolean | null
    isDefault: boolean | null
    vendorId: string | null
  }

  export type CatalogCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    title: number | null
    isActive: number | null
    isDefault: number | null
    vendorId: number | null
    _all: number
  }


  export type CatalogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    isActive?: true
    isDefault?: true
    vendorId?: true
  }

  export type CatalogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    isActive?: true
    isDefault?: true
    vendorId?: true
  }

  export type CatalogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    isActive?: true
    isDefault?: true
    vendorId?: true
    _all?: true
  }

  export type CatalogAggregateArgs = {
    /**
     * Filter which Catalog to aggregate.
    **/
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
    **/
    orderBy?: Enumerable<CatalogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Catalogs
    **/
    count?: true | CatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CatalogMaxAggregateInputType
  }

  export type GetCatalogAggregateType<T extends CatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalog]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalog[P]>
      : GetScalarType<T[P], AggregateCatalog[P]>
  }


    
    
  export type CatalogGroupByArgs = {
    where?: CatalogWhereInput
    orderBy?: Enumerable<CatalogOrderByInput>
    by: Array<CatalogScalarFieldEnum>
    having?: CatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CatalogCountAggregateInputType | true
    min?: CatalogMinAggregateInputType
    max?: CatalogMaxAggregateInputType
  }


  export type CatalogGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    isActive: boolean
    isDefault: boolean
    vendorId: string
    count: CatalogCountAggregateOutputType | null
    min: CatalogMinAggregateOutputType | null
    max: CatalogMaxAggregateOutputType | null
  }

  type GetCatalogGroupByPayload<T extends CatalogGroupByArgs> = Promise<Array<
    PickArray<CatalogGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CatalogGroupByOutputType))]: GetScalarType<T[P], CatalogGroupByOutputType[P]>
    }
  >>
    

  export type CatalogSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    isActive?: boolean
    isDefault?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorArgs
    categories?: boolean | CategoryFindManyArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    _count?: boolean | CatalogCountOutputTypeArgs
  }

  export type CatalogInclude = {
    vendor?: boolean | VendorArgs
    categories?: boolean | CategoryFindManyArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    _count?: boolean | CatalogCountOutputTypeArgs
  }

  export type CatalogGetPayload<
    S extends boolean | null | undefined | CatalogArgs,
    U = keyof S
      > = S extends true
        ? Catalog
    : S extends undefined
    ? never
    : S extends CatalogArgs | CatalogFindManyArgs
    ?'include' extends U
    ? Catalog  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CatalogCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Catalog ?Catalog [P]
  : 
          P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CatalogCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Catalog
  : Catalog


  type CatalogCountArgs = Merge<
    Omit<CatalogFindManyArgs, 'select' | 'include'> & {
      select?: CatalogCountAggregateInputType | true
    }
  >

  export interface CatalogDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Catalog that matches the filter.
     * @param {CatalogFindUniqueArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CatalogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CatalogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Catalog'> extends True ? CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>> : CheckSelect<T, Prisma__CatalogClient<Catalog | null >, Prisma__CatalogClient<CatalogGetPayload<T> | null >>

    /**
     * Find the first Catalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindFirstArgs} args - Arguments to find a Catalog
     * @example
     * // Get one Catalog
     * const catalog = await prisma.catalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CatalogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CatalogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Catalog'> extends True ? CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>> : CheckSelect<T, Prisma__CatalogClient<Catalog | null >, Prisma__CatalogClient<CatalogGetPayload<T> | null >>

    /**
     * Find zero or more Catalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Catalogs
     * const catalogs = await prisma.catalog.findMany()
     * 
     * // Get first 10 Catalogs
     * const catalogs = await prisma.catalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogWithIdOnly = await prisma.catalog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CatalogFindManyArgs>(
      args?: SelectSubset<T, CatalogFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Catalog>>, PrismaPromise<Array<CatalogGetPayload<T>>>>

    /**
     * Create a Catalog.
     * @param {CatalogCreateArgs} args - Arguments to create a Catalog.
     * @example
     * // Create one Catalog
     * const Catalog = await prisma.catalog.create({
     *   data: {
     *     // ... data to create a Catalog
     *   }
     * })
     * 
    **/
    create<T extends CatalogCreateArgs>(
      args: SelectSubset<T, CatalogCreateArgs>
    ): CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>>

    /**
     * Create many Catalogs.
     *     @param {CatalogCreateManyArgs} args - Arguments to create many Catalogs.
     *     @example
     *     // Create many Catalogs
     *     const catalog = await prisma.catalog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CatalogCreateManyArgs>(
      args?: SelectSubset<T, CatalogCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Catalog.
     * @param {CatalogDeleteArgs} args - Arguments to delete one Catalog.
     * @example
     * // Delete one Catalog
     * const Catalog = await prisma.catalog.delete({
     *   where: {
     *     // ... filter to delete one Catalog
     *   }
     * })
     * 
    **/
    delete<T extends CatalogDeleteArgs>(
      args: SelectSubset<T, CatalogDeleteArgs>
    ): CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>>

    /**
     * Update one Catalog.
     * @param {CatalogUpdateArgs} args - Arguments to update one Catalog.
     * @example
     * // Update one Catalog
     * const catalog = await prisma.catalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CatalogUpdateArgs>(
      args: SelectSubset<T, CatalogUpdateArgs>
    ): CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>>

    /**
     * Delete zero or more Catalogs.
     * @param {CatalogDeleteManyArgs} args - Arguments to filter Catalogs to delete.
     * @example
     * // Delete a few Catalogs
     * const { count } = await prisma.catalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CatalogDeleteManyArgs>(
      args?: SelectSubset<T, CatalogDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Catalogs
     * const catalog = await prisma.catalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CatalogUpdateManyArgs>(
      args: SelectSubset<T, CatalogUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Catalog.
     * @param {CatalogUpsertArgs} args - Arguments to update or create a Catalog.
     * @example
     * // Update or create a Catalog
     * const catalog = await prisma.catalog.upsert({
     *   create: {
     *     // ... data to create a Catalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Catalog we want to update
     *   }
     * })
    **/
    upsert<T extends CatalogUpsertArgs>(
      args: SelectSubset<T, CatalogUpsertArgs>
    ): CheckSelect<T, Prisma__CatalogClient<Catalog>, Prisma__CatalogClient<CatalogGetPayload<T>>>

    /**
     * Count the number of Catalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogCountArgs} args - Arguments to filter Catalogs to count.
     * @example
     * // Count the number of Catalogs
     * const count = await prisma.catalog.count({
     *   where: {
     *     // ... the filter for the Catalogs we want to count
     *   }
     * })
    **/
    count<T extends CatalogCountArgs>(
      args?: Subset<T, CatalogCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogAggregateArgs>(args: Subset<T, CatalogAggregateArgs>): PrismaPromise<GetCatalogAggregateType<T>>

    /**
     * Group by Catalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogGroupByArgs['orderBy'] }
        : { orderBy?: CatalogGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Catalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CatalogClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    categories<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    tags<T extends CatalogTagFindManyArgs = {}>(args?: Subset<T, CatalogTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CatalogTag>>, PrismaPromise<Array<CatalogTagGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Catalog findUnique
   */
  export type CatalogFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * Throw an Error if a Catalog can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Catalog to fetch.
    **/
    where: CatalogWhereUniqueInput
  }


  /**
   * Catalog findFirst
   */
  export type CatalogFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * Throw an Error if a Catalog can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Catalog to fetch.
    **/
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
    **/
    orderBy?: Enumerable<CatalogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Catalogs.
    **/
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Catalogs.
    **/
    distinct?: Enumerable<CatalogScalarFieldEnum>
  }


  /**
   * Catalog findMany
   */
  export type CatalogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * Filter, which Catalogs to fetch.
    **/
    where?: CatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Catalogs to fetch.
    **/
    orderBy?: Enumerable<CatalogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Catalogs.
    **/
    cursor?: CatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Catalogs from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Catalogs.
    **/
    skip?: number
    distinct?: Enumerable<CatalogScalarFieldEnum>
  }


  /**
   * Catalog create
   */
  export type CatalogCreateArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * The data needed to create a Catalog.
    **/
    data: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
  }


  /**
   * Catalog createMany
   */
  export type CatalogCreateManyArgs = {
    data: Enumerable<CatalogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Catalog update
   */
  export type CatalogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * The data needed to update a Catalog.
    **/
    data: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
    /**
     * Choose, which Catalog to update.
    **/
    where: CatalogWhereUniqueInput
  }


  /**
   * Catalog updateMany
   */
  export type CatalogUpdateManyArgs = {
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyInput>
    where?: CatalogWhereInput
  }


  /**
   * Catalog upsert
   */
  export type CatalogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * The filter to search for the Catalog to update in case it exists.
    **/
    where: CatalogWhereUniqueInput
    /**
     * In case the Catalog found by the `where` argument doesn't exist, create a new Catalog with this data.
    **/
    create: XOR<CatalogCreateInput, CatalogUncheckedCreateInput>
    /**
     * In case the Catalog was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CatalogUpdateInput, CatalogUncheckedUpdateInput>
  }


  /**
   * Catalog delete
   */
  export type CatalogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
    /**
     * Filter which Catalog to delete.
    **/
    where: CatalogWhereUniqueInput
  }


  /**
   * Catalog deleteMany
   */
  export type CatalogDeleteManyArgs = {
    where?: CatalogWhereInput
  }


  /**
   * Catalog without action
   */
  export type CatalogArgs = {
    /**
     * Select specific fields to fetch from the Catalog
    **/
    select?: CatalogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    count: CategoryCountAggregateOutputType | null
    avg: CategoryAvgAggregateOutputType | null
    sum: CategorySumAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sequence: number
  }

  export type CategorySumAggregateOutputType = {
    sequence: number
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isActive: boolean | null
    picture: string | null
    isDefault: boolean | null
    sequence: number
    vendorId: string | null
    catalogId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isActive: boolean | null
    picture: string | null
    isDefault: boolean | null
    sequence: number
    vendorId: string | null
    catalogId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    name: number | null
    isActive: number | null
    picture: number | null
    isDefault: number | null
    sequence: number
    vendorId: number | null
    catalogId: number | null
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sequence?: true
  }

  export type CategorySumAggregateInputType = {
    sequence?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isActive?: true
    picture?: true
    isDefault?: true
    sequence?: true
    vendorId?: true
    catalogId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isActive?: true
    picture?: true
    isDefault?: true
    sequence?: true
    vendorId?: true
    catalogId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isActive?: true
    picture?: true
    isDefault?: true
    sequence?: true
    vendorId?: true
    catalogId?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }


    
    
  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CategoryCountAggregateInputType | true
    avg?: CategoryAvgAggregateInputType
    sum?: CategorySumAggregateInputType
    min?: CategoryMinAggregateInputType
    max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    isActive: boolean
    picture: string | null
    isDefault: boolean
    sequence: number
    vendorId: string
    catalogId: string
    count: CategoryCountAggregateOutputType | null
    avg: CategoryAvgAggregateOutputType | null
    sum: CategorySumAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<Array<
    PickArray<CategoryGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: GetScalarType<T[P], CategoryGroupByOutputType[P]>
    }
  >>
    

  export type CategorySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    isActive?: boolean
    picture?: boolean
    isDefault?: boolean
    sequence?: boolean
    vendorId?: boolean
    catalogId?: boolean
    vendor?: boolean | VendorArgs
    catalog?: boolean | CatalogArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    vendor?: boolean | VendorArgs
    catalog?: boolean | CatalogArgs
    items?: boolean | ItemFindManyArgs
    tags?: boolean | CatalogTagFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> :
        P extends 'catalog'
        ? CatalogGetPayload<S['include'][P]> :
        P extends 'items'
        ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
          P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> :
        P extends 'catalog'
        ? CatalogGetPayload<S['select'][P]> :
        P extends 'items'
        ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CategoryCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    catalog<T extends CatalogArgs = {}>(args?: Subset<T, CatalogArgs>): CheckSelect<T, Prisma__CatalogClient<Catalog | null >, Prisma__CatalogClient<CatalogGetPayload<T> | null >>;

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    tags<T extends CatalogTagFindManyArgs = {}>(args?: Subset<T, CatalogTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CatalogTag>>, PrismaPromise<Array<CatalogTagGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * Throw an Error if a Category can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
    **/
    orderBy?: Enumerable<CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Item
   */


  export type AggregateItem = {
    count: ItemCountAggregateOutputType | null
    avg: ItemAvgAggregateOutputType | null
    sum: ItemSumAggregateOutputType | null
    min: ItemMinAggregateOutputType | null
    max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    price: number
    discount: number
  }

  export type ItemSumAggregateOutputType = {
    price: number
    discount: number
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    price: number
    discount: number
    picture: string | null
    description: string | null
    isActive: boolean | null
    vendorId: string | null
    catalogId: string | null
    categoryId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    price: number
    discount: number
    picture: string | null
    description: string | null
    isActive: boolean | null
    vendorId: string | null
    catalogId: string | null
    categoryId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    name: number | null
    price: number
    discount: number
    picture: number | null
    description: number | null
    isActive: number | null
    vendorId: number | null
    catalogId: number | null
    categoryId: number | null
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type ItemSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    discount?: true
    picture?: true
    description?: true
    isActive?: true
    vendorId?: true
    catalogId?: true
    categoryId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    discount?: true
    picture?: true
    description?: true
    isActive?: true
    vendorId?: true
    catalogId?: true
    categoryId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    discount?: true
    picture?: true
    description?: true
    isActive?: true
    vendorId?: true
    catalogId?: true
    categoryId?: true
    _all?: true
  }

  export type ItemAggregateArgs = {
    /**
     * Filter which Item to aggregate.
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
    **/
    orderBy?: Enumerable<ItemOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }


    
    
  export type ItemGroupByArgs = {
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByInput>
    by: Array<ItemScalarFieldEnum>
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: ItemCountAggregateInputType | true
    avg?: ItemAvgAggregateInputType
    sum?: ItemSumAggregateInputType
    min?: ItemMinAggregateInputType
    max?: ItemMaxAggregateInputType
  }


  export type ItemGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    price: number
    discount: number
    picture: string | null
    description: string | null
    isActive: boolean
    vendorId: string
    catalogId: string
    categoryId: string
    count: ItemCountAggregateOutputType | null
    avg: ItemAvgAggregateOutputType | null
    sum: ItemSumAggregateOutputType | null
    min: ItemMinAggregateOutputType | null
    max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Promise<Array<
    PickArray<ItemGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof ItemGroupByOutputType))]: GetScalarType<T[P], ItemGroupByOutputType[P]>
    }
  >>
    

  export type ItemSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    price?: boolean
    discount?: boolean
    picture?: boolean
    description?: boolean
    isActive?: boolean
    vendorId?: boolean
    catalogId?: boolean
    categoryId?: boolean
    vendor?: boolean | VendorArgs
    catalog?: boolean | CatalogArgs
    category?: boolean | CategoryArgs
    tags?: boolean | CatalogTagFindManyArgs
    variants?: boolean | ItemVariantFindManyArgs
    _count?: boolean | ItemCountOutputTypeArgs
  }

  export type ItemInclude = {
    vendor?: boolean | VendorArgs
    catalog?: boolean | CatalogArgs
    category?: boolean | CategoryArgs
    tags?: boolean | CatalogTagFindManyArgs
    variants?: boolean | ItemVariantFindManyArgs
    _count?: boolean | ItemCountOutputTypeArgs
  }

  export type ItemGetPayload<
    S extends boolean | null | undefined | ItemArgs,
    U = keyof S
      > = S extends true
        ? Item
    : S extends undefined
    ? never
    : S extends ItemArgs | ItemFindManyArgs
    ?'include' extends U
    ? Item  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> :
        P extends 'catalog'
        ? CatalogGetPayload<S['include'][P]> :
        P extends 'category'
        ? CategoryGetPayload<S['include'][P]> :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['include'][P]>>  :
        P extends 'variants'
        ? Array < ItemVariantGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ItemCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Item ?Item [P]
  : 
          P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> :
        P extends 'catalog'
        ? CatalogGetPayload<S['select'][P]> :
        P extends 'category'
        ? CategoryGetPayload<S['select'][P]> :
        P extends 'tags'
        ? Array < CatalogTagGetPayload<S['select'][P]>>  :
        P extends 'variants'
        ? Array < ItemVariantGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ItemCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Item
  : Item


  type ItemCountArgs = Merge<
    Omit<ItemFindManyArgs, 'select' | 'include'> & {
      select?: ItemCountAggregateInputType | true
    }
  >

  export interface ItemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Item'> extends True ? CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>> : CheckSelect<T, Prisma__ItemClient<Item | null >, Prisma__ItemClient<ItemGetPayload<T> | null >>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Item'> extends True ? CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>> : CheckSelect<T, Prisma__ItemClient<Item | null >, Prisma__ItemClient<ItemGetPayload<T> | null >>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs>
    ): CheckSelect<T, Prisma__ItemClient<Item>, Prisma__ItemClient<ItemGetPayload<T>>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    catalog<T extends CatalogArgs = {}>(args?: Subset<T, CatalogArgs>): CheckSelect<T, Prisma__CatalogClient<Catalog | null >, Prisma__CatalogClient<CatalogGetPayload<T> | null >>;

    category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    tags<T extends CatalogTagFindManyArgs = {}>(args?: Subset<T, CatalogTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CatalogTag>>, PrismaPromise<Array<CatalogTagGetPayload<T>>>>;

    variants<T extends ItemVariantFindManyArgs = {}>(args?: Subset<T, ItemVariantFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ItemVariant>>, PrismaPromise<Array<ItemVariantGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * Throw an Error if a Item can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Item to fetch.
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * Throw an Error if a Item can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Item to fetch.
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
    **/
    orderBy?: Enumerable<ItemOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
    **/
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * Filter, which Items to fetch.
    **/
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
    **/
    orderBy?: Enumerable<ItemOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
    **/
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
    **/
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item create
   */
  export type ItemCreateArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * The data needed to create a Item.
    **/
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs = {
    data: Enumerable<ItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * The data needed to update a Item.
    **/
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs = {
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * The filter to search for the Item to update in case it exists.
    **/
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
    **/
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
    /**
     * Filter which Item to delete.
    **/
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs = {
    where?: ItemWhereInput
  }


  /**
   * Item without action
   */
  export type ItemArgs = {
    /**
     * Select specific fields to fetch from the Item
    **/
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemInclude | null
  }



  /**
   * Model ItemVariant
   */


  export type AggregateItemVariant = {
    count: ItemVariantCountAggregateOutputType | null
    avg: ItemVariantAvgAggregateOutputType | null
    sum: ItemVariantSumAggregateOutputType | null
    min: ItemVariantMinAggregateOutputType | null
    max: ItemVariantMaxAggregateOutputType | null
  }

  export type ItemVariantAvgAggregateOutputType = {
    price: number
  }

  export type ItemVariantSumAggregateOutputType = {
    price: number
  }

  export type ItemVariantMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    price: number
    itemId: string | null
    vendorId: string | null
  }

  export type ItemVariantMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    price: number
    itemId: string | null
    vendorId: string | null
  }

  export type ItemVariantCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    name: number | null
    price: number
    itemId: number | null
    vendorId: number | null
    _all: number
  }


  export type ItemVariantAvgAggregateInputType = {
    price?: true
  }

  export type ItemVariantSumAggregateInputType = {
    price?: true
  }

  export type ItemVariantMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    itemId?: true
    vendorId?: true
  }

  export type ItemVariantMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    itemId?: true
    vendorId?: true
  }

  export type ItemVariantCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    price?: true
    itemId?: true
    vendorId?: true
    _all?: true
  }

  export type ItemVariantAggregateArgs = {
    /**
     * Filter which ItemVariant to aggregate.
    **/
    where?: ItemVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemVariants to fetch.
    **/
    orderBy?: Enumerable<ItemVariantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ItemVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemVariants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemVariants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemVariants
    **/
    count?: true | ItemVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ItemVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ItemVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ItemVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ItemVariantMaxAggregateInputType
  }

  export type GetItemVariantAggregateType<T extends ItemVariantAggregateArgs> = {
    [P in keyof T & keyof AggregateItemVariant]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemVariant[P]>
      : GetScalarType<T[P], AggregateItemVariant[P]>
  }


    
    
  export type ItemVariantGroupByArgs = {
    where?: ItemVariantWhereInput
    orderBy?: Enumerable<ItemVariantOrderByInput>
    by: Array<ItemVariantScalarFieldEnum>
    having?: ItemVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: ItemVariantCountAggregateInputType | true
    avg?: ItemVariantAvgAggregateInputType
    sum?: ItemVariantSumAggregateInputType
    min?: ItemVariantMinAggregateInputType
    max?: ItemVariantMaxAggregateInputType
  }


  export type ItemVariantGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    price: number
    itemId: string
    vendorId: string
    count: ItemVariantCountAggregateOutputType | null
    avg: ItemVariantAvgAggregateOutputType | null
    sum: ItemVariantSumAggregateOutputType | null
    min: ItemVariantMinAggregateOutputType | null
    max: ItemVariantMaxAggregateOutputType | null
  }

  type GetItemVariantGroupByPayload<T extends ItemVariantGroupByArgs> = Promise<Array<
    PickArray<ItemVariantGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof ItemVariantGroupByOutputType))]: GetScalarType<T[P], ItemVariantGroupByOutputType[P]>
    }
  >>
    

  export type ItemVariantSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    price?: boolean
    itemId?: boolean
    vendorId?: boolean
    item?: boolean | ItemArgs
    vendor?: boolean | VendorArgs
  }

  export type ItemVariantInclude = {
    item?: boolean | ItemArgs
    vendor?: boolean | VendorArgs
  }

  export type ItemVariantGetPayload<
    S extends boolean | null | undefined | ItemVariantArgs,
    U = keyof S
      > = S extends true
        ? ItemVariant
    : S extends undefined
    ? never
    : S extends ItemVariantArgs | ItemVariantFindManyArgs
    ?'include' extends U
    ? ItemVariant  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'item'
        ? ItemGetPayload<S['include'][P]> :
        P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ItemVariant ?ItemVariant [P]
  : 
          P extends 'item'
        ? ItemGetPayload<S['select'][P]> :
        P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> : never
  } 
    : ItemVariant
  : ItemVariant


  type ItemVariantCountArgs = Merge<
    Omit<ItemVariantFindManyArgs, 'select' | 'include'> & {
      select?: ItemVariantCountAggregateInputType | true
    }
  >

  export interface ItemVariantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ItemVariant that matches the filter.
     * @param {ItemVariantFindUniqueArgs} args - Arguments to find a ItemVariant
     * @example
     * // Get one ItemVariant
     * const itemVariant = await prisma.itemVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemVariantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemVariantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ItemVariant'> extends True ? CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>> : CheckSelect<T, Prisma__ItemVariantClient<ItemVariant | null >, Prisma__ItemVariantClient<ItemVariantGetPayload<T> | null >>

    /**
     * Find the first ItemVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantFindFirstArgs} args - Arguments to find a ItemVariant
     * @example
     * // Get one ItemVariant
     * const itemVariant = await prisma.itemVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemVariantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemVariantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ItemVariant'> extends True ? CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>> : CheckSelect<T, Prisma__ItemVariantClient<ItemVariant | null >, Prisma__ItemVariantClient<ItemVariantGetPayload<T> | null >>

    /**
     * Find zero or more ItemVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemVariants
     * const itemVariants = await prisma.itemVariant.findMany()
     * 
     * // Get first 10 ItemVariants
     * const itemVariants = await prisma.itemVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemVariantWithIdOnly = await prisma.itemVariant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemVariantFindManyArgs>(
      args?: SelectSubset<T, ItemVariantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ItemVariant>>, PrismaPromise<Array<ItemVariantGetPayload<T>>>>

    /**
     * Create a ItemVariant.
     * @param {ItemVariantCreateArgs} args - Arguments to create a ItemVariant.
     * @example
     * // Create one ItemVariant
     * const ItemVariant = await prisma.itemVariant.create({
     *   data: {
     *     // ... data to create a ItemVariant
     *   }
     * })
     * 
    **/
    create<T extends ItemVariantCreateArgs>(
      args: SelectSubset<T, ItemVariantCreateArgs>
    ): CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>>

    /**
     * Create many ItemVariants.
     *     @param {ItemVariantCreateManyArgs} args - Arguments to create many ItemVariants.
     *     @example
     *     // Create many ItemVariants
     *     const itemVariant = await prisma.itemVariant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemVariantCreateManyArgs>(
      args?: SelectSubset<T, ItemVariantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ItemVariant.
     * @param {ItemVariantDeleteArgs} args - Arguments to delete one ItemVariant.
     * @example
     * // Delete one ItemVariant
     * const ItemVariant = await prisma.itemVariant.delete({
     *   where: {
     *     // ... filter to delete one ItemVariant
     *   }
     * })
     * 
    **/
    delete<T extends ItemVariantDeleteArgs>(
      args: SelectSubset<T, ItemVariantDeleteArgs>
    ): CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>>

    /**
     * Update one ItemVariant.
     * @param {ItemVariantUpdateArgs} args - Arguments to update one ItemVariant.
     * @example
     * // Update one ItemVariant
     * const itemVariant = await prisma.itemVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemVariantUpdateArgs>(
      args: SelectSubset<T, ItemVariantUpdateArgs>
    ): CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>>

    /**
     * Delete zero or more ItemVariants.
     * @param {ItemVariantDeleteManyArgs} args - Arguments to filter ItemVariants to delete.
     * @example
     * // Delete a few ItemVariants
     * const { count } = await prisma.itemVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemVariantDeleteManyArgs>(
      args?: SelectSubset<T, ItemVariantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemVariants
     * const itemVariant = await prisma.itemVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemVariantUpdateManyArgs>(
      args: SelectSubset<T, ItemVariantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemVariant.
     * @param {ItemVariantUpsertArgs} args - Arguments to update or create a ItemVariant.
     * @example
     * // Update or create a ItemVariant
     * const itemVariant = await prisma.itemVariant.upsert({
     *   create: {
     *     // ... data to create a ItemVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemVariant we want to update
     *   }
     * })
    **/
    upsert<T extends ItemVariantUpsertArgs>(
      args: SelectSubset<T, ItemVariantUpsertArgs>
    ): CheckSelect<T, Prisma__ItemVariantClient<ItemVariant>, Prisma__ItemVariantClient<ItemVariantGetPayload<T>>>

    /**
     * Count the number of ItemVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantCountArgs} args - Arguments to filter ItemVariants to count.
     * @example
     * // Count the number of ItemVariants
     * const count = await prisma.itemVariant.count({
     *   where: {
     *     // ... the filter for the ItemVariants we want to count
     *   }
     * })
    **/
    count<T extends ItemVariantCountArgs>(
      args?: Subset<T, ItemVariantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemVariantAggregateArgs>(args: Subset<T, ItemVariantAggregateArgs>): PrismaPromise<GetItemVariantAggregateType<T>>

    /**
     * Group by ItemVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemVariantGroupByArgs['orderBy'] }
        : { orderBy?: ItemVariantGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemVariantGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemVariantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    item<T extends ItemArgs = {}>(args?: Subset<T, ItemArgs>): CheckSelect<T, Prisma__ItemClient<Item | null >, Prisma__ItemClient<ItemGetPayload<T> | null >>;

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ItemVariant findUnique
   */
  export type ItemVariantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * Throw an Error if a ItemVariant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ItemVariant to fetch.
    **/
    where: ItemVariantWhereUniqueInput
  }


  /**
   * ItemVariant findFirst
   */
  export type ItemVariantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * Throw an Error if a ItemVariant can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ItemVariant to fetch.
    **/
    where?: ItemVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemVariants to fetch.
    **/
    orderBy?: Enumerable<ItemVariantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemVariants.
    **/
    cursor?: ItemVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemVariants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemVariants.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemVariants.
    **/
    distinct?: Enumerable<ItemVariantScalarFieldEnum>
  }


  /**
   * ItemVariant findMany
   */
  export type ItemVariantFindManyArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * Filter, which ItemVariants to fetch.
    **/
    where?: ItemVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemVariants to fetch.
    **/
    orderBy?: Enumerable<ItemVariantOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemVariants.
    **/
    cursor?: ItemVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemVariants from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemVariants.
    **/
    skip?: number
    distinct?: Enumerable<ItemVariantScalarFieldEnum>
  }


  /**
   * ItemVariant create
   */
  export type ItemVariantCreateArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * The data needed to create a ItemVariant.
    **/
    data: XOR<ItemVariantCreateInput, ItemVariantUncheckedCreateInput>
  }


  /**
   * ItemVariant createMany
   */
  export type ItemVariantCreateManyArgs = {
    data: Enumerable<ItemVariantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ItemVariant update
   */
  export type ItemVariantUpdateArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * The data needed to update a ItemVariant.
    **/
    data: XOR<ItemVariantUpdateInput, ItemVariantUncheckedUpdateInput>
    /**
     * Choose, which ItemVariant to update.
    **/
    where: ItemVariantWhereUniqueInput
  }


  /**
   * ItemVariant updateMany
   */
  export type ItemVariantUpdateManyArgs = {
    data: XOR<ItemVariantUpdateManyMutationInput, ItemVariantUncheckedUpdateManyInput>
    where?: ItemVariantWhereInput
  }


  /**
   * ItemVariant upsert
   */
  export type ItemVariantUpsertArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * The filter to search for the ItemVariant to update in case it exists.
    **/
    where: ItemVariantWhereUniqueInput
    /**
     * In case the ItemVariant found by the `where` argument doesn't exist, create a new ItemVariant with this data.
    **/
    create: XOR<ItemVariantCreateInput, ItemVariantUncheckedCreateInput>
    /**
     * In case the ItemVariant was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ItemVariantUpdateInput, ItemVariantUncheckedUpdateInput>
  }


  /**
   * ItemVariant delete
   */
  export type ItemVariantDeleteArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
    /**
     * Filter which ItemVariant to delete.
    **/
    where: ItemVariantWhereUniqueInput
  }


  /**
   * ItemVariant deleteMany
   */
  export type ItemVariantDeleteManyArgs = {
    where?: ItemVariantWhereInput
  }


  /**
   * ItemVariant without action
   */
  export type ItemVariantArgs = {
    /**
     * Select specific fields to fetch from the ItemVariant
    **/
    select?: ItemVariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ItemVariantInclude | null
  }



  /**
   * Model CatalogTag
   */


  export type AggregateCatalogTag = {
    count: CatalogTagCountAggregateOutputType | null
    min: CatalogTagMinAggregateOutputType | null
    max: CatalogTagMaxAggregateOutputType | null
  }

  export type CatalogTagMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    color: string | null
    icon: string | null
    type: TagLevel | null
    vendorId: string | null
  }

  export type CatalogTagMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    color: string | null
    icon: string | null
    type: TagLevel | null
    vendorId: string | null
  }

  export type CatalogTagCountAggregateOutputType = {
    id: number | null
    createdAt: number | null
    updatedAt: number | null
    title: number | null
    color: number | null
    icon: number | null
    type: number | null
    vendorId: number | null
    _all: number
  }


  export type CatalogTagMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    color?: true
    icon?: true
    type?: true
    vendorId?: true
  }

  export type CatalogTagMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    color?: true
    icon?: true
    type?: true
    vendorId?: true
  }

  export type CatalogTagCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    color?: true
    icon?: true
    type?: true
    vendorId?: true
    _all?: true
  }

  export type CatalogTagAggregateArgs = {
    /**
     * Filter which CatalogTag to aggregate.
    **/
    where?: CatalogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogTags to fetch.
    **/
    orderBy?: Enumerable<CatalogTagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: CatalogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogTags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogTags.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatalogTags
    **/
    count?: true | CatalogTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CatalogTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CatalogTagMaxAggregateInputType
  }

  export type GetCatalogTagAggregateType<T extends CatalogTagAggregateArgs> = {
    [P in keyof T & keyof AggregateCatalogTag]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogTag[P]>
      : GetScalarType<T[P], AggregateCatalogTag[P]>
  }


    
    
  export type CatalogTagGroupByArgs = {
    where?: CatalogTagWhereInput
    orderBy?: Enumerable<CatalogTagOrderByInput>
    by: Array<CatalogTagScalarFieldEnum>
    having?: CatalogTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: CatalogTagCountAggregateInputType | true
    min?: CatalogTagMinAggregateInputType
    max?: CatalogTagMaxAggregateInputType
  }


  export type CatalogTagGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    color: string | null
    icon: string | null
    type: TagLevel
    vendorId: string
    count: CatalogTagCountAggregateOutputType | null
    min: CatalogTagMinAggregateOutputType | null
    max: CatalogTagMaxAggregateOutputType | null
  }

  type GetCatalogTagGroupByPayload<T extends CatalogTagGroupByArgs> = Promise<Array<
    PickArray<CatalogTagGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof CatalogTagGroupByOutputType))]: GetScalarType<T[P], CatalogTagGroupByOutputType[P]>
    }
  >>
    

  export type CatalogTagSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    color?: boolean
    icon?: boolean
    type?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorArgs
    catalogs?: boolean | CatalogFindManyArgs
    items?: boolean | ItemFindManyArgs
    categories?: boolean | CategoryFindManyArgs
    _count?: boolean | CatalogTagCountOutputTypeArgs
  }

  export type CatalogTagInclude = {
    vendor?: boolean | VendorArgs
    catalogs?: boolean | CatalogFindManyArgs
    items?: boolean | ItemFindManyArgs
    categories?: boolean | CategoryFindManyArgs
    _count?: boolean | CatalogTagCountOutputTypeArgs
  }

  export type CatalogTagGetPayload<
    S extends boolean | null | undefined | CatalogTagArgs,
    U = keyof S
      > = S extends true
        ? CatalogTag
    : S extends undefined
    ? never
    : S extends CatalogTagArgs | CatalogTagFindManyArgs
    ?'include' extends U
    ? CatalogTag  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'vendor'
        ? VendorGetPayload<S['include'][P]> :
        P extends 'catalogs'
        ? Array < CatalogGetPayload<S['include'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CatalogTagCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CatalogTag ?CatalogTag [P]
  : 
          P extends 'vendor'
        ? VendorGetPayload<S['select'][P]> :
        P extends 'catalogs'
        ? Array < CatalogGetPayload<S['select'][P]>>  :
        P extends 'items'
        ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'categories'
        ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CatalogTagCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : CatalogTag
  : CatalogTag


  type CatalogTagCountArgs = Merge<
    Omit<CatalogTagFindManyArgs, 'select' | 'include'> & {
      select?: CatalogTagCountAggregateInputType | true
    }
  >

  export interface CatalogTagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CatalogTag that matches the filter.
     * @param {CatalogTagFindUniqueArgs} args - Arguments to find a CatalogTag
     * @example
     * // Get one CatalogTag
     * const catalogTag = await prisma.catalogTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CatalogTagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CatalogTagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CatalogTag'> extends True ? CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>> : CheckSelect<T, Prisma__CatalogTagClient<CatalogTag | null >, Prisma__CatalogTagClient<CatalogTagGetPayload<T> | null >>

    /**
     * Find the first CatalogTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagFindFirstArgs} args - Arguments to find a CatalogTag
     * @example
     * // Get one CatalogTag
     * const catalogTag = await prisma.catalogTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CatalogTagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CatalogTagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CatalogTag'> extends True ? CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>> : CheckSelect<T, Prisma__CatalogTagClient<CatalogTag | null >, Prisma__CatalogTagClient<CatalogTagGetPayload<T> | null >>

    /**
     * Find zero or more CatalogTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatalogTags
     * const catalogTags = await prisma.catalogTag.findMany()
     * 
     * // Get first 10 CatalogTags
     * const catalogTags = await prisma.catalogTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogTagWithIdOnly = await prisma.catalogTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CatalogTagFindManyArgs>(
      args?: SelectSubset<T, CatalogTagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CatalogTag>>, PrismaPromise<Array<CatalogTagGetPayload<T>>>>

    /**
     * Create a CatalogTag.
     * @param {CatalogTagCreateArgs} args - Arguments to create a CatalogTag.
     * @example
     * // Create one CatalogTag
     * const CatalogTag = await prisma.catalogTag.create({
     *   data: {
     *     // ... data to create a CatalogTag
     *   }
     * })
     * 
    **/
    create<T extends CatalogTagCreateArgs>(
      args: SelectSubset<T, CatalogTagCreateArgs>
    ): CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>>

    /**
     * Create many CatalogTags.
     *     @param {CatalogTagCreateManyArgs} args - Arguments to create many CatalogTags.
     *     @example
     *     // Create many CatalogTags
     *     const catalogTag = await prisma.catalogTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CatalogTagCreateManyArgs>(
      args?: SelectSubset<T, CatalogTagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CatalogTag.
     * @param {CatalogTagDeleteArgs} args - Arguments to delete one CatalogTag.
     * @example
     * // Delete one CatalogTag
     * const CatalogTag = await prisma.catalogTag.delete({
     *   where: {
     *     // ... filter to delete one CatalogTag
     *   }
     * })
     * 
    **/
    delete<T extends CatalogTagDeleteArgs>(
      args: SelectSubset<T, CatalogTagDeleteArgs>
    ): CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>>

    /**
     * Update one CatalogTag.
     * @param {CatalogTagUpdateArgs} args - Arguments to update one CatalogTag.
     * @example
     * // Update one CatalogTag
     * const catalogTag = await prisma.catalogTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CatalogTagUpdateArgs>(
      args: SelectSubset<T, CatalogTagUpdateArgs>
    ): CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>>

    /**
     * Delete zero or more CatalogTags.
     * @param {CatalogTagDeleteManyArgs} args - Arguments to filter CatalogTags to delete.
     * @example
     * // Delete a few CatalogTags
     * const { count } = await prisma.catalogTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CatalogTagDeleteManyArgs>(
      args?: SelectSubset<T, CatalogTagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatalogTags
     * const catalogTag = await prisma.catalogTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CatalogTagUpdateManyArgs>(
      args: SelectSubset<T, CatalogTagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CatalogTag.
     * @param {CatalogTagUpsertArgs} args - Arguments to update or create a CatalogTag.
     * @example
     * // Update or create a CatalogTag
     * const catalogTag = await prisma.catalogTag.upsert({
     *   create: {
     *     // ... data to create a CatalogTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatalogTag we want to update
     *   }
     * })
    **/
    upsert<T extends CatalogTagUpsertArgs>(
      args: SelectSubset<T, CatalogTagUpsertArgs>
    ): CheckSelect<T, Prisma__CatalogTagClient<CatalogTag>, Prisma__CatalogTagClient<CatalogTagGetPayload<T>>>

    /**
     * Count the number of CatalogTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagCountArgs} args - Arguments to filter CatalogTags to count.
     * @example
     * // Count the number of CatalogTags
     * const count = await prisma.catalogTag.count({
     *   where: {
     *     // ... the filter for the CatalogTags we want to count
     *   }
     * })
    **/
    count<T extends CatalogTagCountArgs>(
      args?: Subset<T, CatalogTagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatalogTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogTagAggregateArgs>(args: Subset<T, CatalogTagAggregateArgs>): PrismaPromise<GetCatalogTagAggregateType<T>>

    /**
     * Group by CatalogTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogTagGroupByArgs['orderBy'] }
        : { orderBy?: CatalogTagGroupByArgs['orderBy'] },
      OrderFields extends Keys<MaybeTupleToUnion<T['orderBy']>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogTagGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatalogTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CatalogTagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    vendor<T extends VendorArgs = {}>(args?: Subset<T, VendorArgs>): CheckSelect<T, Prisma__VendorClient<Vendor | null >, Prisma__VendorClient<VendorGetPayload<T> | null >>;

    catalogs<T extends CatalogFindManyArgs = {}>(args?: Subset<T, CatalogFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Catalog>>, PrismaPromise<Array<CatalogGetPayload<T>>>>;

    items<T extends ItemFindManyArgs = {}>(args?: Subset<T, ItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Item>>, PrismaPromise<Array<ItemGetPayload<T>>>>;

    categories<T extends CategoryFindManyArgs = {}>(args?: Subset<T, CategoryFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CatalogTag findUnique
   */
  export type CatalogTagFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * Throw an Error if a CatalogTag can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CatalogTag to fetch.
    **/
    where: CatalogTagWhereUniqueInput
  }


  /**
   * CatalogTag findFirst
   */
  export type CatalogTagFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * Throw an Error if a CatalogTag can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CatalogTag to fetch.
    **/
    where?: CatalogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogTags to fetch.
    **/
    orderBy?: Enumerable<CatalogTagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogTags.
    **/
    cursor?: CatalogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogTags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogTags.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogTags.
    **/
    distinct?: Enumerable<CatalogTagScalarFieldEnum>
  }


  /**
   * CatalogTag findMany
   */
  export type CatalogTagFindManyArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * Filter, which CatalogTags to fetch.
    **/
    where?: CatalogTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogTags to fetch.
    **/
    orderBy?: Enumerable<CatalogTagOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatalogTags.
    **/
    cursor?: CatalogTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogTags from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogTags.
    **/
    skip?: number
    distinct?: Enumerable<CatalogTagScalarFieldEnum>
  }


  /**
   * CatalogTag create
   */
  export type CatalogTagCreateArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * The data needed to create a CatalogTag.
    **/
    data: XOR<CatalogTagCreateInput, CatalogTagUncheckedCreateInput>
  }


  /**
   * CatalogTag createMany
   */
  export type CatalogTagCreateManyArgs = {
    data: Enumerable<CatalogTagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CatalogTag update
   */
  export type CatalogTagUpdateArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * The data needed to update a CatalogTag.
    **/
    data: XOR<CatalogTagUpdateInput, CatalogTagUncheckedUpdateInput>
    /**
     * Choose, which CatalogTag to update.
    **/
    where: CatalogTagWhereUniqueInput
  }


  /**
   * CatalogTag updateMany
   */
  export type CatalogTagUpdateManyArgs = {
    data: XOR<CatalogTagUpdateManyMutationInput, CatalogTagUncheckedUpdateManyInput>
    where?: CatalogTagWhereInput
  }


  /**
   * CatalogTag upsert
   */
  export type CatalogTagUpsertArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * The filter to search for the CatalogTag to update in case it exists.
    **/
    where: CatalogTagWhereUniqueInput
    /**
     * In case the CatalogTag found by the `where` argument doesn't exist, create a new CatalogTag with this data.
    **/
    create: XOR<CatalogTagCreateInput, CatalogTagUncheckedCreateInput>
    /**
     * In case the CatalogTag was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<CatalogTagUpdateInput, CatalogTagUncheckedUpdateInput>
  }


  /**
   * CatalogTag delete
   */
  export type CatalogTagDeleteArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
    /**
     * Filter which CatalogTag to delete.
    **/
    where: CatalogTagWhereUniqueInput
  }


  /**
   * CatalogTag deleteMany
   */
  export type CatalogTagDeleteManyArgs = {
    where?: CatalogTagWhereInput
  }


  /**
   * CatalogTag without action
   */
  export type CatalogTagArgs = {
    /**
     * Select specific fields to fetch from the CatalogTag
    **/
    select?: CatalogTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: CatalogTagInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    verified: 'verified',
    internalUser: 'internalUser',
    resetToken: 'resetToken',
    profileId: 'profileId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    userId: 'userId'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const ResetCodeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    email: 'email',
    resetCode: 'resetCode',
    isUsed: 'isUsed',
    expiredAt: 'expiredAt'
  };

  export type ResetCodeScalarFieldEnum = (typeof ResetCodeScalarFieldEnum)[keyof typeof ResetCodeScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    address: 'address',
    category: 'category',
    country: 'country',
    currency: 'currency',
    internalVendor: 'internalVendor',
    type: 'type',
    primaryUserId: 'primaryUserId',
    subscriptionId: 'subscriptionId'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const VendorSubscriptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    discountFee: 'discountFee',
    discountCommission: 'discountCommission',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    type: 'type',
    planId: 'planId'
  };

  export type VendorSubscriptionScalarFieldEnum = (typeof VendorSubscriptionScalarFieldEnum)[keyof typeof VendorSubscriptionScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    isDefault: 'isDefault',
    baseFee: 'baseFee',
    baseCommission: 'baseCommission',
    discountFee: 'discountFee',
    discountCommission: 'discountCommission'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const CatalogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    isActive: 'isActive',
    isDefault: 'isDefault',
    vendorId: 'vendorId'
  };

  export type CatalogScalarFieldEnum = (typeof CatalogScalarFieldEnum)[keyof typeof CatalogScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    isActive: 'isActive',
    picture: 'picture',
    isDefault: 'isDefault',
    sequence: 'sequence',
    vendorId: 'vendorId',
    catalogId: 'catalogId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    price: 'price',
    discount: 'discount',
    picture: 'picture',
    description: 'description',
    isActive: 'isActive',
    vendorId: 'vendorId',
    catalogId: 'catalogId',
    categoryId: 'categoryId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemVariantScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    price: 'price',
    itemId: 'itemId',
    vendorId: 'vendorId'
  };

  export type ItemVariantScalarFieldEnum = (typeof ItemVariantScalarFieldEnum)[keyof typeof ItemVariantScalarFieldEnum]


  export const CatalogTagScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    color: 'color',
    icon: 'icon',
    type: 'type',
    vendorId: 'vendorId'
  };

  export type CatalogTagScalarFieldEnum = (typeof CatalogTagScalarFieldEnum)[keyof typeof CatalogTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    verified?: BoolFilter | boolean
    internalUser?: BoolNullableFilter | boolean | null
    resetToken?: StringNullableFilter | string | null
    profileId?: StringFilter | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
    vendorMember?: VendorListRelationFilter
    vendorPrimary?: VendorListRelationFilter
    UserSession?: UserSessionListRelationFilter
    ResetCode?: ResetCodeListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    internalUser?: SortOrder
    resetToken?: SortOrder
    profileId?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    verified?: BoolWithAggregatesFilter | boolean
    internalUser?: BoolNullableWithAggregatesFilter | boolean | null
    resetToken?: StringNullableWithAggregatesFilter | string | null
    profileId?: StringWithAggregatesFilter | string
  }

  export type UserSessionWhereInput = {
    AND?: Enumerable<UserSessionWhereInput>
    OR?: Enumerable<UserSessionWhereInput>
    NOT?: Enumerable<UserSessionWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isActive?: BoolFilter | boolean
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    userId?: SortOrder
  }

  export type UserSessionWhereUniqueInput = {
    id?: string
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isActive?: BoolWithAggregatesFilter | boolean
    userId?: StringWithAggregatesFilter | string
  }

  export type ResetCodeWhereInput = {
    AND?: Enumerable<ResetCodeWhereInput>
    OR?: Enumerable<ResetCodeWhereInput>
    NOT?: Enumerable<ResetCodeWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    email?: StringFilter | string
    resetCode?: StringFilter | string
    isUsed?: BoolFilter | boolean
    expiredAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ResetCodeOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    resetCode?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
  }

  export type ResetCodeWhereUniqueInput = {
    id?: string
  }

  export type ResetCodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResetCodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResetCodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResetCodeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    resetCode?: StringWithAggregatesFilter | string
    isUsed?: BoolWithAggregatesFilter | boolean
    expiredAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: Enumerable<UserProfileWhereInput>
    OR?: Enumerable<UserProfileWhereInput>
    NOT?: Enumerable<UserProfileWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    phone?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type UserProfileOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
  }

  export type UserProfileWhereUniqueInput = {
    id?: string
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserProfileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
  }

  export type VendorWhereInput = {
    AND?: Enumerable<VendorWhereInput>
    OR?: Enumerable<VendorWhereInput>
    NOT?: Enumerable<VendorWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    address?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    country?: StringFilter | string
    currency?: StringFilter | string
    internalVendor?: BoolFilter | boolean
    type?: EnumVendorTypeNullableFilter | VendorType | null
    primaryUserId?: StringFilter | string
    subscriptionId?: StringFilter | string
    primaryUser?: XOR<UserRelationFilter, UserWhereInput>
    users?: UserListRelationFilter
    subscription?: XOR<VendorSubscriptionRelationFilter, VendorSubscriptionWhereInput>
    catalogs?: CatalogListRelationFilter
    categories?: CategoryListRelationFilter
    items?: ItemListRelationFilter
    tags?: CatalogTagListRelationFilter
    itemVariants?: ItemVariantListRelationFilter
  }

  export type VendorOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    internalVendor?: SortOrder
    type?: SortOrder
    primaryUserId?: SortOrder
    subscriptionId?: SortOrder
  }

  export type VendorWhereUniqueInput = {
    id?: string
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VendorScalarWhereWithAggregatesInput>
    OR?: Enumerable<VendorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VendorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    category?: StringNullableWithAggregatesFilter | string | null
    country?: StringWithAggregatesFilter | string
    currency?: StringWithAggregatesFilter | string
    internalVendor?: BoolWithAggregatesFilter | boolean
    type?: EnumVendorTypeNullableWithAggregatesFilter | VendorType | null
    primaryUserId?: StringWithAggregatesFilter | string
    subscriptionId?: StringWithAggregatesFilter | string
  }

  export type VendorSubscriptionWhereInput = {
    AND?: Enumerable<VendorSubscriptionWhereInput>
    OR?: Enumerable<VendorSubscriptionWhereInput>
    NOT?: Enumerable<VendorSubscriptionWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    discountFee?: FloatNullableFilter | number | null
    discountCommission?: FloatNullableFilter | number | null
    startedAt?: DateTimeNullableFilter | Date | string | null
    endedAt?: DateTimeNullableFilter | Date | string | null
    type?: EnumSubscriptionTypeNullableFilter | SubscriptionType | null
    planId?: StringFilter | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput> | null
    plan?: XOR<SubscriptionPlanRelationFilter, SubscriptionPlanWhereInput>
  }

  export type VendorSubscriptionOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discountFee?: SortOrder
    discountCommission?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    type?: SortOrder
    planId?: SortOrder
  }

  export type VendorSubscriptionWhereUniqueInput = {
    id?: string
  }

  export type VendorSubscriptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VendorSubscriptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<VendorSubscriptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VendorSubscriptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    discountFee?: FloatNullableWithAggregatesFilter | number | null
    discountCommission?: FloatNullableWithAggregatesFilter | number | null
    startedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    type?: EnumSubscriptionTypeNullableWithAggregatesFilter | SubscriptionType | null
    planId?: StringWithAggregatesFilter | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: Enumerable<SubscriptionPlanWhereInput>
    OR?: Enumerable<SubscriptionPlanWhereInput>
    NOT?: Enumerable<SubscriptionPlanWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    isDefault?: BoolNullableFilter | boolean | null
    baseFee?: FloatNullableFilter | number | null
    baseCommission?: FloatNullableFilter | number | null
    discountFee?: FloatNullableFilter | number | null
    discountCommission?: FloatNullableFilter | number | null
    subscription?: VendorSubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    baseFee?: SortOrder
    baseCommission?: SortOrder
    discountFee?: SortOrder
    discountCommission?: SortOrder
  }

  export type SubscriptionPlanWhereUniqueInput = {
    id?: string
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubscriptionPlanScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubscriptionPlanScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubscriptionPlanScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    isDefault?: BoolNullableWithAggregatesFilter | boolean | null
    baseFee?: FloatNullableWithAggregatesFilter | number | null
    baseCommission?: FloatNullableWithAggregatesFilter | number | null
    discountFee?: FloatNullableWithAggregatesFilter | number | null
    discountCommission?: FloatNullableWithAggregatesFilter | number | null
  }

  export type CatalogWhereInput = {
    AND?: Enumerable<CatalogWhereInput>
    OR?: Enumerable<CatalogWhereInput>
    NOT?: Enumerable<CatalogWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    isActive?: BoolFilter | boolean
    isDefault?: BoolFilter | boolean
    vendorId?: StringFilter | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    categories?: CategoryListRelationFilter
    items?: ItemListRelationFilter
    tags?: CatalogTagListRelationFilter
  }

  export type CatalogOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    vendorId?: SortOrder
  }

  export type CatalogWhereUniqueInput = {
    id?: string
  }

  export type CatalogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CatalogScalarWhereWithAggregatesInput>
    OR?: Enumerable<CatalogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CatalogScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    isActive?: BoolWithAggregatesFilter | boolean
    isDefault?: BoolWithAggregatesFilter | boolean
    vendorId?: StringWithAggregatesFilter | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    isActive?: BoolFilter | boolean
    picture?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    sequence?: IntFilter | number
    vendorId?: StringFilter | string
    catalogId?: StringFilter | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    catalog?: XOR<CatalogRelationFilter, CatalogWhereInput>
    items?: ItemListRelationFilter
    tags?: CatalogTagListRelationFilter
  }

  export type CategoryOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    picture?: SortOrder
    isDefault?: SortOrder
    sequence?: SortOrder
    vendorId?: SortOrder
    catalogId?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: string
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    isActive?: BoolWithAggregatesFilter | boolean
    picture?: StringNullableWithAggregatesFilter | string | null
    isDefault?: BoolWithAggregatesFilter | boolean
    sequence?: IntWithAggregatesFilter | number
    vendorId?: StringWithAggregatesFilter | string
    catalogId?: StringWithAggregatesFilter | string
  }

  export type ItemWhereInput = {
    AND?: Enumerable<ItemWhereInput>
    OR?: Enumerable<ItemWhereInput>
    NOT?: Enumerable<ItemWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    price?: FloatFilter | number
    discount?: FloatFilter | number
    picture?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    vendorId?: StringFilter | string
    catalogId?: StringFilter | string
    categoryId?: StringFilter | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    catalog?: XOR<CatalogRelationFilter, CatalogWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    tags?: CatalogTagListRelationFilter
    variants?: ItemVariantListRelationFilter
  }

  export type ItemOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    picture?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    vendorId?: SortOrder
    catalogId?: SortOrder
    categoryId?: SortOrder
  }

  export type ItemWhereUniqueInput = {
    id?: string
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    discount?: FloatWithAggregatesFilter | number
    picture?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    isActive?: BoolWithAggregatesFilter | boolean
    vendorId?: StringWithAggregatesFilter | string
    catalogId?: StringWithAggregatesFilter | string
    categoryId?: StringWithAggregatesFilter | string
  }

  export type ItemVariantWhereInput = {
    AND?: Enumerable<ItemVariantWhereInput>
    OR?: Enumerable<ItemVariantWhereInput>
    NOT?: Enumerable<ItemVariantWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    price?: FloatFilter | number
    itemId?: StringFilter | string
    vendorId?: StringFilter | string
    item?: XOR<ItemRelationFilter, ItemWhereInput>
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type ItemVariantOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    itemId?: SortOrder
    vendorId?: SortOrder
  }

  export type ItemVariantWhereUniqueInput = {
    id?: string
  }

  export type ItemVariantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemVariantScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemVariantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemVariantScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    itemId?: StringWithAggregatesFilter | string
    vendorId?: StringWithAggregatesFilter | string
  }

  export type CatalogTagWhereInput = {
    AND?: Enumerable<CatalogTagWhereInput>
    OR?: Enumerable<CatalogTagWhereInput>
    NOT?: Enumerable<CatalogTagWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    color?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    type?: EnumTagLevelFilter | TagLevel
    vendorId?: StringFilter | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    catalogs?: CatalogListRelationFilter
    items?: ItemListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type CatalogTagOrderByInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    vendorId?: SortOrder
  }

  export type CatalogTagWhereUniqueInput = {
    id?: string
  }

  export type CatalogTagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CatalogTagScalarWhereWithAggregatesInput>
    OR?: Enumerable<CatalogTagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CatalogTagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    color?: StringNullableWithAggregatesFilter | string | null
    icon?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTagLevelWithAggregatesFilter | TagLevel
    vendorId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profile: UserProfileCreateNestedOneWithoutUserInput
    vendorMember?: VendorCreateNestedManyWithoutUsersInput
    vendorPrimary?: VendorCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
    vendorPrimary?: VendorUncheckedCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutUserInput
    vendorMember?: VendorUpdateManyWithoutUsersInput
    vendorPrimary?: VendorUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
    vendorPrimary?: VendorUncheckedUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    userId: string
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserSessionInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    userId: string
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ResetCodeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
    user: UserCreateNestedOneWithoutResetCodeInput
  }

  export type ResetCodeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
  }

  export type ResetCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResetCodeInput
  }

  export type ResetCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetCodeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
  }

  export type ResetCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    phone?: string | null
    user?: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    phone?: string | null
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutProfileInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutProfileInput
  }

  export type UserProfileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    phone?: string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type VendorCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorSubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    vendor?: VendorCreateNestedOneWithoutSubscriptionInput
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    planId: string
    vendor?: VendorUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    vendor?: VendorUpdateOneWithoutSubscriptionInput
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    planId?: StringFieldUpdateOperationsInput | string
    vendor?: VendorUncheckedUpdateOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    planId: string
  }

  export type VendorSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
  }

  export type VendorSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    planId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isDefault?: boolean | null
    baseFee?: number | null
    baseCommission?: number | null
    discountFee?: number | null
    discountCommission?: number | null
    subscription?: VendorSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isDefault?: boolean | null
    baseFee?: number | null
    baseCommission?: number | null
    discountFee?: number | null
    discountCommission?: number | null
    subscription?: VendorSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription?: VendorSubscriptionUpdateManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription?: VendorSubscriptionUncheckedUpdateManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isDefault?: boolean | null
    baseFee?: number | null
    baseCommission?: number | null
    discountFee?: number | null
    discountCommission?: number | null
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CatalogCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendor: VendorCreateNestedOneWithoutCatalogsInput
    categories?: CategoryCreateNestedManyWithoutCatalogInput
    items?: ItemCreateNestedManyWithoutCatalogInput
    tags?: CatalogTagCreateNestedManyWithoutCatalogsInput
  }

  export type CatalogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendorId: string
    categories?: CategoryUncheckedCreateNestedManyWithoutCatalogInput
    items?: ItemUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCatalogsInput
    categories?: CategoryUpdateManyWithoutCatalogInput
    items?: ItemUpdateManyWithoutCatalogInput
    tags?: CatalogTagUpdateManyWithoutCatalogsInput
  }

  export type CatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutCatalogInput
    items?: ItemUncheckedUpdateManyWithoutCatalogInput
  }

  export type CatalogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendorId: string
  }

  export type CatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendor: VendorCreateNestedOneWithoutCategoriesInput
    catalog: CatalogCreateNestedOneWithoutCategoriesInput
    items?: ItemCreateNestedManyWithoutCategoryInput
    tags?: CatalogTagCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
    catalogId: string
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutCategoriesInput
    catalog?: CatalogUpdateOneRequiredWithoutCategoriesInput
    items?: ItemUpdateManyWithoutCategoryInput
    tags?: CatalogTagUpdateManyWithoutCategoriesInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
    catalogId: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutItemsInput
    catalog: CatalogCreateNestedOneWithoutItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    tags?: CatalogTagCreateNestedManyWithoutItemsInput
    variants?: ItemVariantCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
    categoryId: string
    variants?: ItemVariantUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutItemsInput
    catalog?: CatalogUpdateOneRequiredWithoutItemsInput
    category?: CategoryUpdateOneRequiredWithoutItemsInput
    tags?: CatalogTagUpdateManyWithoutItemsInput
    variants?: ItemVariantUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    variants?: ItemVariantUncheckedUpdateManyWithoutItemInput
  }

  export type ItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
    categoryId: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    item: ItemCreateNestedOneWithoutVariantsInput
    vendor: VendorCreateNestedOneWithoutItemVariantsInput
  }

  export type ItemVariantUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    itemId: string
    vendorId: string
  }

  export type ItemVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutVariantsInput
    vendor?: VendorUpdateOneRequiredWithoutItemVariantsInput
  }

  export type ItemVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    itemId: string
    vendorId: string
  }

  export type ItemVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogTagCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendor: VendorCreateNestedOneWithoutTagsInput
    catalogs?: CatalogCreateNestedManyWithoutTagsInput
    items?: ItemCreateNestedManyWithoutTagsInput
    categories?: CategoryCreateNestedManyWithoutTagsInput
  }

  export type CatalogTagUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendorId: string
  }

  export type CatalogTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendor?: VendorUpdateOneRequiredWithoutTagsInput
    catalogs?: CatalogUpdateManyWithoutTagsInput
    items?: ItemUpdateManyWithoutTagsInput
    categories?: CategoryUpdateManyWithoutTagsInput
  }

  export type CatalogTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogTagCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendorId: string
  }

  export type CatalogTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
  }

  export type CatalogTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type VendorListRelationFilter = {
    every?: VendorWhereInput
    some?: VendorWhereInput
    none?: VendorWhereInput
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type ResetCodeListRelationFilter = {
    every?: ResetCodeWhereInput
    some?: ResetCodeWhereInput
    none?: ResetCodeWhereInput
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    count?: NestedIntFilter
    min?: NestedBoolFilter
    max?: NestedBoolFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    count?: NestedIntNullableFilter
    min?: NestedBoolNullableFilter
    max?: NestedBoolNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EnumVendorTypeNullableFilter = {
    equals?: VendorType | null
    in?: Enumerable<VendorType> | null
    notIn?: Enumerable<VendorType> | null
    not?: NestedEnumVendorTypeNullableFilter | VendorType | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type VendorSubscriptionRelationFilter = {
    is?: VendorSubscriptionWhereInput
    isNot?: VendorSubscriptionWhereInput
  }

  export type CatalogListRelationFilter = {
    every?: CatalogWhereInput
    some?: CatalogWhereInput
    none?: CatalogWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type CatalogTagListRelationFilter = {
    every?: CatalogTagWhereInput
    some?: CatalogTagWhereInput
    none?: CatalogTagWhereInput
  }

  export type ItemVariantListRelationFilter = {
    every?: ItemVariantWhereInput
    some?: ItemVariantWhereInput
    none?: ItemVariantWhereInput
  }

  export type EnumVendorTypeNullableWithAggregatesFilter = {
    equals?: VendorType | null
    in?: Enumerable<VendorType> | null
    notIn?: Enumerable<VendorType> | null
    not?: NestedEnumVendorTypeNullableWithAggregatesFilter | VendorType | null
    count?: NestedIntNullableFilter
    min?: NestedEnumVendorTypeNullableFilter
    max?: NestedEnumVendorTypeNullableFilter
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EnumSubscriptionTypeNullableFilter = {
    equals?: SubscriptionType | null
    in?: Enumerable<SubscriptionType> | null
    notIn?: Enumerable<SubscriptionType> | null
    not?: NestedEnumSubscriptionTypeNullableFilter | SubscriptionType | null
  }

  export type VendorRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type SubscriptionPlanRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedFloatNullableFilter
    min?: NestedFloatNullableFilter
    max?: NestedFloatNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    count?: NestedIntNullableFilter
    min?: NestedDateTimeNullableFilter
    max?: NestedDateTimeNullableFilter
  }

  export type EnumSubscriptionTypeNullableWithAggregatesFilter = {
    equals?: SubscriptionType | null
    in?: Enumerable<SubscriptionType> | null
    notIn?: Enumerable<SubscriptionType> | null
    not?: NestedEnumSubscriptionTypeNullableWithAggregatesFilter | SubscriptionType | null
    count?: NestedIntNullableFilter
    min?: NestedEnumSubscriptionTypeNullableFilter
    max?: NestedEnumSubscriptionTypeNullableFilter
  }

  export type VendorSubscriptionListRelationFilter = {
    every?: VendorSubscriptionWhereInput
    some?: VendorSubscriptionWhereInput
    none?: VendorSubscriptionWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type CatalogRelationFilter = {
    is?: CatalogWhereInput
    isNot?: CatalogWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedFloatFilter
    min?: NestedFloatFilter
    max?: NestedFloatFilter
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type EnumTagLevelFilter = {
    equals?: TagLevel
    in?: Enumerable<TagLevel>
    notIn?: Enumerable<TagLevel>
    not?: NestedEnumTagLevelFilter | TagLevel
  }

  export type EnumTagLevelWithAggregatesFilter = {
    equals?: TagLevel
    in?: Enumerable<TagLevel>
    notIn?: Enumerable<TagLevel>
    not?: NestedEnumTagLevelWithAggregatesFilter | TagLevel
    count?: NestedIntFilter
    min?: NestedEnumTagLevelFilter
    max?: NestedEnumTagLevelFilter
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type VendorCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<VendorCreateWithoutUsersInput>, Enumerable<VendorUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<VendorWhereUniqueInput>
  }

  export type VendorCreateNestedManyWithoutPrimaryUserInput = {
    create?: XOR<Enumerable<VendorCreateWithoutPrimaryUserInput>, Enumerable<VendorUncheckedCreateWithoutPrimaryUserInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutPrimaryUserInput>
    createMany?: VendorCreateManyPrimaryUserInputEnvelope
    connect?: Enumerable<VendorWhereUniqueInput>
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserSessionCreateWithoutUserInput>, Enumerable<UserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserSessionCreateOrConnectWithoutUserInput>
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<UserSessionWhereUniqueInput>
  }

  export type ResetCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ResetCodeCreateWithoutUserInput>, Enumerable<ResetCodeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResetCodeCreateOrConnectWithoutUserInput>
    createMany?: ResetCodeCreateManyUserInputEnvelope
    connect?: Enumerable<ResetCodeWhereUniqueInput>
  }

  export type VendorUncheckedCreateNestedManyWithoutPrimaryUserInput = {
    create?: XOR<Enumerable<VendorCreateWithoutPrimaryUserInput>, Enumerable<VendorUncheckedCreateWithoutPrimaryUserInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutPrimaryUserInput>
    createMany?: VendorCreateManyPrimaryUserInputEnvelope
    connect?: Enumerable<VendorWhereUniqueInput>
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserSessionCreateWithoutUserInput>, Enumerable<UserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserSessionCreateOrConnectWithoutUserInput>
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<UserSessionWhereUniqueInput>
  }

  export type ResetCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ResetCodeCreateWithoutUserInput>, Enumerable<ResetCodeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResetCodeCreateOrConnectWithoutUserInput>
    createMany?: ResetCodeCreateManyUserInputEnvelope
    connect?: Enumerable<ResetCodeWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserProfileUpdateOneRequiredWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type VendorUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<VendorCreateWithoutUsersInput>, Enumerable<VendorUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<VendorUpsertWithWhereUniqueWithoutUsersInput>
    connect?: Enumerable<VendorWhereUniqueInput>
    set?: Enumerable<VendorWhereUniqueInput>
    disconnect?: Enumerable<VendorWhereUniqueInput>
    delete?: Enumerable<VendorWhereUniqueInput>
    update?: Enumerable<VendorUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<VendorUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<VendorScalarWhereInput>
  }

  export type VendorUpdateManyWithoutPrimaryUserInput = {
    create?: XOR<Enumerable<VendorCreateWithoutPrimaryUserInput>, Enumerable<VendorUncheckedCreateWithoutPrimaryUserInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutPrimaryUserInput>
    upsert?: Enumerable<VendorUpsertWithWhereUniqueWithoutPrimaryUserInput>
    createMany?: VendorCreateManyPrimaryUserInputEnvelope
    connect?: Enumerable<VendorWhereUniqueInput>
    set?: Enumerable<VendorWhereUniqueInput>
    disconnect?: Enumerable<VendorWhereUniqueInput>
    delete?: Enumerable<VendorWhereUniqueInput>
    update?: Enumerable<VendorUpdateWithWhereUniqueWithoutPrimaryUserInput>
    updateMany?: Enumerable<VendorUpdateManyWithWhereWithoutPrimaryUserInput>
    deleteMany?: Enumerable<VendorScalarWhereInput>
  }

  export type UserSessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserSessionCreateWithoutUserInput>, Enumerable<UserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<UserSessionWhereUniqueInput>
    set?: Enumerable<UserSessionWhereUniqueInput>
    disconnect?: Enumerable<UserSessionWhereUniqueInput>
    delete?: Enumerable<UserSessionWhereUniqueInput>
    update?: Enumerable<UserSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserSessionScalarWhereInput>
  }

  export type ResetCodeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ResetCodeCreateWithoutUserInput>, Enumerable<ResetCodeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResetCodeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ResetCodeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ResetCodeCreateManyUserInputEnvelope
    connect?: Enumerable<ResetCodeWhereUniqueInput>
    set?: Enumerable<ResetCodeWhereUniqueInput>
    disconnect?: Enumerable<ResetCodeWhereUniqueInput>
    delete?: Enumerable<ResetCodeWhereUniqueInput>
    update?: Enumerable<ResetCodeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ResetCodeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ResetCodeScalarWhereInput>
  }

  export type VendorUncheckedUpdateManyWithoutPrimaryUserInput = {
    create?: XOR<Enumerable<VendorCreateWithoutPrimaryUserInput>, Enumerable<VendorUncheckedCreateWithoutPrimaryUserInput>>
    connectOrCreate?: Enumerable<VendorCreateOrConnectWithoutPrimaryUserInput>
    upsert?: Enumerable<VendorUpsertWithWhereUniqueWithoutPrimaryUserInput>
    createMany?: VendorCreateManyPrimaryUserInputEnvelope
    connect?: Enumerable<VendorWhereUniqueInput>
    set?: Enumerable<VendorWhereUniqueInput>
    disconnect?: Enumerable<VendorWhereUniqueInput>
    delete?: Enumerable<VendorWhereUniqueInput>
    update?: Enumerable<VendorUpdateWithWhereUniqueWithoutPrimaryUserInput>
    updateMany?: Enumerable<VendorUpdateManyWithWhereWithoutPrimaryUserInput>
    deleteMany?: Enumerable<VendorScalarWhereInput>
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<UserSessionCreateWithoutUserInput>, Enumerable<UserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<UserSessionWhereUniqueInput>
    set?: Enumerable<UserSessionWhereUniqueInput>
    disconnect?: Enumerable<UserSessionWhereUniqueInput>
    delete?: Enumerable<UserSessionWhereUniqueInput>
    update?: Enumerable<UserSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserSessionScalarWhereInput>
  }

  export type ResetCodeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<ResetCodeCreateWithoutUserInput>, Enumerable<ResetCodeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ResetCodeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ResetCodeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ResetCodeCreateManyUserInputEnvelope
    connect?: Enumerable<ResetCodeWhereUniqueInput>
    set?: Enumerable<ResetCodeWhereUniqueInput>
    disconnect?: Enumerable<ResetCodeWhereUniqueInput>
    delete?: Enumerable<ResetCodeWhereUniqueInput>
    update?: Enumerable<ResetCodeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ResetCodeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ResetCodeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    upsert?: UserUpsertWithoutUserSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type UserCreateNestedOneWithoutResetCodeInput = {
    create?: XOR<UserCreateWithoutResetCodeInput, UserUncheckedCreateWithoutResetCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetCodeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResetCodeInput = {
    create?: XOR<UserCreateWithoutResetCodeInput, UserUncheckedCreateWithoutResetCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetCodeInput
    upsert?: UserUpsertWithoutResetCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutResetCodeInput, UserUncheckedUpdateWithoutResetCodeInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUncheckedUpdateOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutVendorPrimaryInput = {
    create?: XOR<UserCreateWithoutVendorPrimaryInput, UserUncheckedCreateWithoutVendorPrimaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorPrimaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutVendorMemberInput = {
    create?: XOR<Enumerable<UserCreateWithoutVendorMemberInput>, Enumerable<UserUncheckedCreateWithoutVendorMemberInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutVendorMemberInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type VendorSubscriptionCreateNestedOneWithoutVendorInput = {
    create?: XOR<VendorSubscriptionCreateWithoutVendorInput, VendorSubscriptionUncheckedCreateWithoutVendorInput>
    connectOrCreate?: VendorSubscriptionCreateOrConnectWithoutVendorInput
    connect?: VendorSubscriptionWhereUniqueInput
  }

  export type CatalogCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutVendorInput>, Enumerable<CatalogUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutVendorInput>
    createMany?: CatalogCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutVendorInput>, Enumerable<CategoryUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutVendorInput>
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemCreateWithoutVendorInput>, Enumerable<ItemUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutVendorInput>
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CatalogTagCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutVendorInput>, Enumerable<CatalogTagUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutVendorInput>
    createMany?: CatalogTagCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogTagWhereUniqueInput>
  }

  export type ItemVariantCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutVendorInput>, Enumerable<ItemVariantUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutVendorInput>
    createMany?: ItemVariantCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
  }

  export type CatalogUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutVendorInput>, Enumerable<CatalogUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutVendorInput>
    createMany?: CatalogCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutVendorInput>, Enumerable<CategoryUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutVendorInput>
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemCreateWithoutVendorInput>, Enumerable<ItemUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutVendorInput>
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CatalogTagUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutVendorInput>, Enumerable<CatalogTagUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutVendorInput>
    createMany?: CatalogTagCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogTagWhereUniqueInput>
  }

  export type ItemVariantUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutVendorInput>, Enumerable<ItemVariantUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutVendorInput>
    createMany?: ItemVariantCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
  }

  export type NullableEnumVendorTypeFieldUpdateOperationsInput = {
    set?: VendorType | null
  }

  export type UserUpdateOneRequiredWithoutVendorPrimaryInput = {
    create?: XOR<UserCreateWithoutVendorPrimaryInput, UserUncheckedCreateWithoutVendorPrimaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorPrimaryInput
    upsert?: UserUpsertWithoutVendorPrimaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutVendorPrimaryInput, UserUncheckedUpdateWithoutVendorPrimaryInput>
  }

  export type UserUpdateManyWithoutVendorMemberInput = {
    create?: XOR<Enumerable<UserCreateWithoutVendorMemberInput>, Enumerable<UserUncheckedCreateWithoutVendorMemberInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutVendorMemberInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutVendorMemberInput>
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutVendorMemberInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutVendorMemberInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type VendorSubscriptionUpdateOneRequiredWithoutVendorInput = {
    create?: XOR<VendorSubscriptionCreateWithoutVendorInput, VendorSubscriptionUncheckedCreateWithoutVendorInput>
    connectOrCreate?: VendorSubscriptionCreateOrConnectWithoutVendorInput
    upsert?: VendorSubscriptionUpsertWithoutVendorInput
    connect?: VendorSubscriptionWhereUniqueInput
    update?: XOR<VendorSubscriptionUpdateWithoutVendorInput, VendorSubscriptionUncheckedUpdateWithoutVendorInput>
  }

  export type CatalogUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutVendorInput>, Enumerable<CatalogUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CatalogUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CatalogCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogWhereUniqueInput>
    set?: Enumerable<CatalogWhereUniqueInput>
    disconnect?: Enumerable<CatalogWhereUniqueInput>
    delete?: Enumerable<CatalogWhereUniqueInput>
    update?: Enumerable<CatalogUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CatalogUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CatalogScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutVendorInput>, Enumerable<CategoryUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ItemUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemCreateWithoutVendorInput>, Enumerable<ItemUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type CatalogTagUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutVendorInput>, Enumerable<CatalogTagUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CatalogTagUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CatalogTagCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogTagWhereUniqueInput>
    set?: Enumerable<CatalogTagWhereUniqueInput>
    disconnect?: Enumerable<CatalogTagWhereUniqueInput>
    delete?: Enumerable<CatalogTagWhereUniqueInput>
    update?: Enumerable<CatalogTagUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CatalogTagUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CatalogTagScalarWhereInput>
  }

  export type ItemVariantUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutVendorInput>, Enumerable<ItemVariantUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ItemVariantUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ItemVariantCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
    set?: Enumerable<ItemVariantWhereUniqueInput>
    disconnect?: Enumerable<ItemVariantWhereUniqueInput>
    delete?: Enumerable<ItemVariantWhereUniqueInput>
    update?: Enumerable<ItemVariantUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ItemVariantUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ItemVariantScalarWhereInput>
  }

  export type CatalogUncheckedUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutVendorInput>, Enumerable<CatalogUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CatalogUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CatalogCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogWhereUniqueInput>
    set?: Enumerable<CatalogWhereUniqueInput>
    disconnect?: Enumerable<CatalogWhereUniqueInput>
    delete?: Enumerable<CatalogWhereUniqueInput>
    update?: Enumerable<CatalogUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CatalogUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CatalogScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutVendorInput>, Enumerable<CategoryUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemCreateWithoutVendorInput>, Enumerable<ItemUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ItemCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type CatalogTagUncheckedUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutVendorInput>, Enumerable<CatalogTagUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<CatalogTagUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: CatalogTagCreateManyVendorInputEnvelope
    connect?: Enumerable<CatalogTagWhereUniqueInput>
    set?: Enumerable<CatalogTagWhereUniqueInput>
    disconnect?: Enumerable<CatalogTagWhereUniqueInput>
    delete?: Enumerable<CatalogTagWhereUniqueInput>
    update?: Enumerable<CatalogTagUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<CatalogTagUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<CatalogTagScalarWhereInput>
  }

  export type ItemVariantUncheckedUpdateManyWithoutVendorInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutVendorInput>, Enumerable<ItemVariantUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<ItemVariantUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: ItemVariantCreateManyVendorInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
    set?: Enumerable<ItemVariantWhereUniqueInput>
    disconnect?: Enumerable<ItemVariantWhereUniqueInput>
    delete?: Enumerable<ItemVariantWhereUniqueInput>
    update?: Enumerable<ItemVariantUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<ItemVariantUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<ItemVariantScalarWhereInput>
  }

  export type VendorCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    connect?: VendorWhereUniqueInput
  }

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type VendorUncheckedCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    connect?: VendorWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: SubscriptionType | null
  }

  export type VendorUpdateOneWithoutSubscriptionInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    upsert?: VendorUpsertWithoutSubscriptionInput
    connect?: VendorWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<VendorUpdateWithoutSubscriptionInput, VendorUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionInput
    upsert?: SubscriptionPlanUpsertWithoutSubscriptionInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<SubscriptionPlanUpdateWithoutSubscriptionInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionInput>
  }

  export type VendorUncheckedUpdateOneWithoutSubscriptionInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    upsert?: VendorUpsertWithoutSubscriptionInput
    connect?: VendorWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<VendorUpdateWithoutSubscriptionInput, VendorUncheckedUpdateWithoutSubscriptionInput>
  }

  export type VendorSubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<Enumerable<VendorSubscriptionCreateWithoutPlanInput>, Enumerable<VendorSubscriptionUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<VendorSubscriptionCreateOrConnectWithoutPlanInput>
    createMany?: VendorSubscriptionCreateManyPlanInputEnvelope
    connect?: Enumerable<VendorSubscriptionWhereUniqueInput>
  }

  export type VendorSubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<Enumerable<VendorSubscriptionCreateWithoutPlanInput>, Enumerable<VendorSubscriptionUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<VendorSubscriptionCreateOrConnectWithoutPlanInput>
    createMany?: VendorSubscriptionCreateManyPlanInputEnvelope
    connect?: Enumerable<VendorSubscriptionWhereUniqueInput>
  }

  export type VendorSubscriptionUpdateManyWithoutPlanInput = {
    create?: XOR<Enumerable<VendorSubscriptionCreateWithoutPlanInput>, Enumerable<VendorSubscriptionUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<VendorSubscriptionCreateOrConnectWithoutPlanInput>
    upsert?: Enumerable<VendorSubscriptionUpsertWithWhereUniqueWithoutPlanInput>
    createMany?: VendorSubscriptionCreateManyPlanInputEnvelope
    connect?: Enumerable<VendorSubscriptionWhereUniqueInput>
    set?: Enumerable<VendorSubscriptionWhereUniqueInput>
    disconnect?: Enumerable<VendorSubscriptionWhereUniqueInput>
    delete?: Enumerable<VendorSubscriptionWhereUniqueInput>
    update?: Enumerable<VendorSubscriptionUpdateWithWhereUniqueWithoutPlanInput>
    updateMany?: Enumerable<VendorSubscriptionUpdateManyWithWhereWithoutPlanInput>
    deleteMany?: Enumerable<VendorSubscriptionScalarWhereInput>
  }

  export type VendorSubscriptionUncheckedUpdateManyWithoutPlanInput = {
    create?: XOR<Enumerable<VendorSubscriptionCreateWithoutPlanInput>, Enumerable<VendorSubscriptionUncheckedCreateWithoutPlanInput>>
    connectOrCreate?: Enumerable<VendorSubscriptionCreateOrConnectWithoutPlanInput>
    upsert?: Enumerable<VendorSubscriptionUpsertWithWhereUniqueWithoutPlanInput>
    createMany?: VendorSubscriptionCreateManyPlanInputEnvelope
    connect?: Enumerable<VendorSubscriptionWhereUniqueInput>
    set?: Enumerable<VendorSubscriptionWhereUniqueInput>
    disconnect?: Enumerable<VendorSubscriptionWhereUniqueInput>
    delete?: Enumerable<VendorSubscriptionWhereUniqueInput>
    update?: Enumerable<VendorSubscriptionUpdateWithWhereUniqueWithoutPlanInput>
    updateMany?: Enumerable<VendorSubscriptionUpdateManyWithWhereWithoutPlanInput>
    deleteMany?: Enumerable<VendorSubscriptionScalarWhereInput>
  }

  export type VendorCreateNestedOneWithoutCatalogsInput = {
    create?: XOR<VendorCreateWithoutCatalogsInput, VendorUncheckedCreateWithoutCatalogsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCatalogsInput
    connect?: VendorWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutCatalogInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCatalogInput>, Enumerable<CategoryUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCatalogInput>
    createMany?: CategoryCreateManyCatalogInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutCatalogInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCatalogInput>, Enumerable<ItemUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCatalogInput>
    createMany?: ItemCreateManyCatalogInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CatalogTagCreateNestedManyWithoutCatalogsInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutCatalogsInput>, Enumerable<CatalogTagUncheckedCreateWithoutCatalogsInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutCatalogsInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutCatalogInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCatalogInput>, Enumerable<CategoryUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCatalogInput>
    createMany?: CategoryCreateManyCatalogInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutCatalogInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCatalogInput>, Enumerable<ItemUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCatalogInput>
    createMany?: ItemCreateManyCatalogInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type VendorUpdateOneRequiredWithoutCatalogsInput = {
    create?: XOR<VendorCreateWithoutCatalogsInput, VendorUncheckedCreateWithoutCatalogsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCatalogsInput
    upsert?: VendorUpsertWithoutCatalogsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutCatalogsInput, VendorUncheckedUpdateWithoutCatalogsInput>
  }

  export type CategoryUpdateManyWithoutCatalogInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCatalogInput>, Enumerable<CategoryUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCatalogInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutCatalogInput>
    createMany?: CategoryCreateManyCatalogInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutCatalogInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutCatalogInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ItemUpdateManyWithoutCatalogInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCatalogInput>, Enumerable<ItemUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCatalogInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutCatalogInput>
    createMany?: ItemCreateManyCatalogInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutCatalogInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutCatalogInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type CatalogTagUpdateManyWithoutCatalogsInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutCatalogsInput>, Enumerable<CatalogTagUncheckedCreateWithoutCatalogsInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutCatalogsInput>
    upsert?: Enumerable<CatalogTagUpsertWithWhereUniqueWithoutCatalogsInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
    set?: Enumerable<CatalogTagWhereUniqueInput>
    disconnect?: Enumerable<CatalogTagWhereUniqueInput>
    delete?: Enumerable<CatalogTagWhereUniqueInput>
    update?: Enumerable<CatalogTagUpdateWithWhereUniqueWithoutCatalogsInput>
    updateMany?: Enumerable<CatalogTagUpdateManyWithWhereWithoutCatalogsInput>
    deleteMany?: Enumerable<CatalogTagScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutCatalogInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCatalogInput>, Enumerable<CategoryUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCatalogInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutCatalogInput>
    createMany?: CategoryCreateManyCatalogInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutCatalogInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutCatalogInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutCatalogInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCatalogInput>, Enumerable<ItemUncheckedCreateWithoutCatalogInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCatalogInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutCatalogInput>
    createMany?: ItemCreateManyCatalogInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutCatalogInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutCatalogInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type VendorCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCategoriesInput
    connect?: VendorWhereUniqueInput
  }

  export type CatalogCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<CatalogCreateWithoutCategoriesInput, CatalogUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutCategoriesInput
    connect?: CatalogWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCategoryInput>, Enumerable<ItemUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCategoryInput>
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CatalogTagCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutCategoriesInput>, Enumerable<CatalogTagUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutCategoriesInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCategoryInput>, Enumerable<ItemUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCategoryInput>
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutCategoriesInput = {
    create?: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCategoriesInput
    upsert?: VendorUpsertWithoutCategoriesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutCategoriesInput, VendorUncheckedUpdateWithoutCategoriesInput>
  }

  export type CatalogUpdateOneRequiredWithoutCategoriesInput = {
    create?: XOR<CatalogCreateWithoutCategoriesInput, CatalogUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutCategoriesInput
    upsert?: CatalogUpsertWithoutCategoriesInput
    connect?: CatalogWhereUniqueInput
    update?: XOR<CatalogUpdateWithoutCategoriesInput, CatalogUncheckedUpdateWithoutCategoriesInput>
  }

  export type ItemUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCategoryInput>, Enumerable<ItemUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type CatalogTagUpdateManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutCategoriesInput>, Enumerable<CatalogTagUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<CatalogTagUpsertWithWhereUniqueWithoutCategoriesInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
    set?: Enumerable<CatalogTagWhereUniqueInput>
    disconnect?: Enumerable<CatalogTagWhereUniqueInput>
    delete?: Enumerable<CatalogTagWhereUniqueInput>
    update?: Enumerable<CatalogTagUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<CatalogTagUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<CatalogTagScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ItemCreateWithoutCategoryInput>, Enumerable<ItemUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type VendorCreateNestedOneWithoutItemsInput = {
    create?: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemsInput
    connect?: VendorWhereUniqueInput
  }

  export type CatalogCreateNestedOneWithoutItemsInput = {
    create?: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutItemsInput
    connect?: CatalogWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type CatalogTagCreateNestedManyWithoutItemsInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutItemsInput>, Enumerable<CatalogTagUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutItemsInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
  }

  export type ItemVariantCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutItemInput>, Enumerable<ItemVariantUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutItemInput>
    createMany?: ItemVariantCreateManyItemInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
  }

  export type ItemVariantUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutItemInput>, Enumerable<ItemVariantUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutItemInput>
    createMany?: ItemVariantCreateManyItemInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutItemsInput = {
    create?: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemsInput
    upsert?: VendorUpsertWithoutItemsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutItemsInput, VendorUncheckedUpdateWithoutItemsInput>
  }

  export type CatalogUpdateOneRequiredWithoutItemsInput = {
    create?: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CatalogCreateOrConnectWithoutItemsInput
    upsert?: CatalogUpsertWithoutItemsInput
    connect?: CatalogWhereUniqueInput
    update?: XOR<CatalogUpdateWithoutItemsInput, CatalogUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutItemsInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    upsert?: CategoryUpsertWithoutItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type CatalogTagUpdateManyWithoutItemsInput = {
    create?: XOR<Enumerable<CatalogTagCreateWithoutItemsInput>, Enumerable<CatalogTagUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<CatalogTagCreateOrConnectWithoutItemsInput>
    upsert?: Enumerable<CatalogTagUpsertWithWhereUniqueWithoutItemsInput>
    connect?: Enumerable<CatalogTagWhereUniqueInput>
    set?: Enumerable<CatalogTagWhereUniqueInput>
    disconnect?: Enumerable<CatalogTagWhereUniqueInput>
    delete?: Enumerable<CatalogTagWhereUniqueInput>
    update?: Enumerable<CatalogTagUpdateWithWhereUniqueWithoutItemsInput>
    updateMany?: Enumerable<CatalogTagUpdateManyWithWhereWithoutItemsInput>
    deleteMany?: Enumerable<CatalogTagScalarWhereInput>
  }

  export type ItemVariantUpdateManyWithoutItemInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutItemInput>, Enumerable<ItemVariantUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ItemVariantUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ItemVariantCreateManyItemInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
    set?: Enumerable<ItemVariantWhereUniqueInput>
    disconnect?: Enumerable<ItemVariantWhereUniqueInput>
    delete?: Enumerable<ItemVariantWhereUniqueInput>
    update?: Enumerable<ItemVariantUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ItemVariantUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ItemVariantScalarWhereInput>
  }

  export type ItemVariantUncheckedUpdateManyWithoutItemInput = {
    create?: XOR<Enumerable<ItemVariantCreateWithoutItemInput>, Enumerable<ItemVariantUncheckedCreateWithoutItemInput>>
    connectOrCreate?: Enumerable<ItemVariantCreateOrConnectWithoutItemInput>
    upsert?: Enumerable<ItemVariantUpsertWithWhereUniqueWithoutItemInput>
    createMany?: ItemVariantCreateManyItemInputEnvelope
    connect?: Enumerable<ItemVariantWhereUniqueInput>
    set?: Enumerable<ItemVariantWhereUniqueInput>
    disconnect?: Enumerable<ItemVariantWhereUniqueInput>
    delete?: Enumerable<ItemVariantWhereUniqueInput>
    update?: Enumerable<ItemVariantUpdateWithWhereUniqueWithoutItemInput>
    updateMany?: Enumerable<ItemVariantUpdateManyWithWhereWithoutItemInput>
    deleteMany?: Enumerable<ItemVariantScalarWhereInput>
  }

  export type ItemCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ItemCreateWithoutVariantsInput, ItemUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutVariantsInput
    connect?: ItemWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutItemVariantsInput = {
    create?: XOR<VendorCreateWithoutItemVariantsInput, VendorUncheckedCreateWithoutItemVariantsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemVariantsInput
    connect?: VendorWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutVariantsInput = {
    create?: XOR<ItemCreateWithoutVariantsInput, ItemUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutVariantsInput
    upsert?: ItemUpsertWithoutVariantsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<ItemUpdateWithoutVariantsInput, ItemUncheckedUpdateWithoutVariantsInput>
  }

  export type VendorUpdateOneRequiredWithoutItemVariantsInput = {
    create?: XOR<VendorCreateWithoutItemVariantsInput, VendorUncheckedCreateWithoutItemVariantsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutItemVariantsInput
    upsert?: VendorUpsertWithoutItemVariantsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutItemVariantsInput, VendorUncheckedUpdateWithoutItemVariantsInput>
  }

  export type VendorCreateNestedOneWithoutTagsInput = {
    create?: XOR<VendorCreateWithoutTagsInput, VendorUncheckedCreateWithoutTagsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutTagsInput
    connect?: VendorWhereUniqueInput
  }

  export type CatalogCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutTagsInput>, Enumerable<CatalogUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<CatalogWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<ItemCreateWithoutTagsInput>, Enumerable<ItemUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutTagsInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutTagsInput>, Enumerable<CategoryUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutTagsInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type EnumTagLevelFieldUpdateOperationsInput = {
    set?: TagLevel
  }

  export type VendorUpdateOneRequiredWithoutTagsInput = {
    create?: XOR<VendorCreateWithoutTagsInput, VendorUncheckedCreateWithoutTagsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutTagsInput
    upsert?: VendorUpsertWithoutTagsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<VendorUpdateWithoutTagsInput, VendorUncheckedUpdateWithoutTagsInput>
  }

  export type CatalogUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<CatalogCreateWithoutTagsInput>, Enumerable<CatalogUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<CatalogCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<CatalogUpsertWithWhereUniqueWithoutTagsInput>
    connect?: Enumerable<CatalogWhereUniqueInput>
    set?: Enumerable<CatalogWhereUniqueInput>
    disconnect?: Enumerable<CatalogWhereUniqueInput>
    delete?: Enumerable<CatalogWhereUniqueInput>
    update?: Enumerable<CatalogUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<CatalogUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<CatalogScalarWhereInput>
  }

  export type ItemUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<ItemCreateWithoutTagsInput>, Enumerable<ItemUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutTagsInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutTagsInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutTagsInput>, Enumerable<CategoryUncheckedCreateWithoutTagsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutTagsInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutTagsInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutTagsInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutTagsInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    count?: NestedIntFilter
    min?: NestedBoolFilter
    max?: NestedBoolFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    count?: NestedIntNullableFilter
    min?: NestedBoolNullableFilter
    max?: NestedBoolNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type NestedEnumVendorTypeNullableFilter = {
    equals?: VendorType | null
    in?: Enumerable<VendorType> | null
    notIn?: Enumerable<VendorType> | null
    not?: NestedEnumVendorTypeNullableFilter | VendorType | null
  }

  export type NestedEnumVendorTypeNullableWithAggregatesFilter = {
    equals?: VendorType | null
    in?: Enumerable<VendorType> | null
    notIn?: Enumerable<VendorType> | null
    not?: NestedEnumVendorTypeNullableWithAggregatesFilter | VendorType | null
    count?: NestedIntNullableFilter
    min?: NestedEnumVendorTypeNullableFilter
    max?: NestedEnumVendorTypeNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumSubscriptionTypeNullableFilter = {
    equals?: SubscriptionType | null
    in?: Enumerable<SubscriptionType> | null
    notIn?: Enumerable<SubscriptionType> | null
    not?: NestedEnumSubscriptionTypeNullableFilter | SubscriptionType | null
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedFloatNullableFilter
    min?: NestedFloatNullableFilter
    max?: NestedFloatNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    count?: NestedIntNullableFilter
    min?: NestedDateTimeNullableFilter
    max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumSubscriptionTypeNullableWithAggregatesFilter = {
    equals?: SubscriptionType | null
    in?: Enumerable<SubscriptionType> | null
    notIn?: Enumerable<SubscriptionType> | null
    not?: NestedEnumSubscriptionTypeNullableWithAggregatesFilter | SubscriptionType | null
    count?: NestedIntNullableFilter
    min?: NestedEnumSubscriptionTypeNullableFilter
    max?: NestedEnumSubscriptionTypeNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedFloatFilter
    min?: NestedFloatFilter
    max?: NestedFloatFilter
  }

  export type NestedEnumTagLevelFilter = {
    equals?: TagLevel
    in?: Enumerable<TagLevel>
    notIn?: Enumerable<TagLevel>
    not?: NestedEnumTagLevelFilter | TagLevel
  }

  export type NestedEnumTagLevelWithAggregatesFilter = {
    equals?: TagLevel
    in?: Enumerable<TagLevel>
    notIn?: Enumerable<TagLevel>
    not?: NestedEnumTagLevelWithAggregatesFilter | TagLevel
    count?: NestedIntFilter
    min?: NestedEnumTagLevelFilter
    max?: NestedEnumTagLevelFilter
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    phone?: string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    phone?: string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type VendorCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutUsersInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutUsersInput, VendorUncheckedCreateWithoutUsersInput>
  }

  export type VendorCreateWithoutPrimaryUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPrimaryUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPrimaryUserInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPrimaryUserInput, VendorUncheckedCreateWithoutPrimaryUserInput>
  }

  export type VendorCreateManyPrimaryUserInputEnvelope = {
    data: Enumerable<VendorCreateManyPrimaryUserInput>
    skipDuplicates?: boolean
  }

  export type UserSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: Enumerable<UserSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ResetCodeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
  }

  export type ResetCodeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
  }

  export type ResetCodeCreateOrConnectWithoutUserInput = {
    where: ResetCodeWhereUniqueInput
    create: XOR<ResetCodeCreateWithoutUserInput, ResetCodeUncheckedCreateWithoutUserInput>
  }

  export type ResetCodeCreateManyUserInputEnvelope = {
    data: Enumerable<ResetCodeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VendorUpsertWithWhereUniqueWithoutUsersInput = {
    where: VendorWhereUniqueInput
    update: XOR<VendorUpdateWithoutUsersInput, VendorUncheckedUpdateWithoutUsersInput>
    create: XOR<VendorCreateWithoutUsersInput, VendorUncheckedCreateWithoutUsersInput>
  }

  export type VendorUpdateWithWhereUniqueWithoutUsersInput = {
    where: VendorWhereUniqueInput
    data: XOR<VendorUpdateWithoutUsersInput, VendorUncheckedUpdateWithoutUsersInput>
  }

  export type VendorUpdateManyWithWhereWithoutUsersInput = {
    where: VendorScalarWhereInput
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyWithoutVendorMemberInput>
  }

  export type VendorScalarWhereInput = {
    AND?: Enumerable<VendorScalarWhereInput>
    OR?: Enumerable<VendorScalarWhereInput>
    NOT?: Enumerable<VendorScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    address?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    country?: StringFilter | string
    currency?: StringFilter | string
    internalVendor?: BoolFilter | boolean
    type?: EnumVendorTypeNullableFilter | VendorType | null
    primaryUserId?: StringFilter | string
    subscriptionId?: StringFilter | string
  }

  export type VendorUpsertWithWhereUniqueWithoutPrimaryUserInput = {
    where: VendorWhereUniqueInput
    update: XOR<VendorUpdateWithoutPrimaryUserInput, VendorUncheckedUpdateWithoutPrimaryUserInput>
    create: XOR<VendorCreateWithoutPrimaryUserInput, VendorUncheckedCreateWithoutPrimaryUserInput>
  }

  export type VendorUpdateWithWhereUniqueWithoutPrimaryUserInput = {
    where: VendorWhereUniqueInput
    data: XOR<VendorUpdateWithoutPrimaryUserInput, VendorUncheckedUpdateWithoutPrimaryUserInput>
  }

  export type VendorUpdateManyWithWhereWithoutPrimaryUserInput = {
    where: VendorScalarWhereInput
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyWithoutVendorPrimaryInput>
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserSessionInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: Enumerable<UserSessionScalarWhereInput>
    OR?: Enumerable<UserSessionScalarWhereInput>
    NOT?: Enumerable<UserSessionScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isActive?: BoolFilter | boolean
    userId?: StringFilter | string
  }

  export type ResetCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetCodeWhereUniqueInput
    update: XOR<ResetCodeUpdateWithoutUserInput, ResetCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ResetCodeCreateWithoutUserInput, ResetCodeUncheckedCreateWithoutUserInput>
  }

  export type ResetCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetCodeWhereUniqueInput
    data: XOR<ResetCodeUpdateWithoutUserInput, ResetCodeUncheckedUpdateWithoutUserInput>
  }

  export type ResetCodeUpdateManyWithWhereWithoutUserInput = {
    where: ResetCodeScalarWhereInput
    data: XOR<ResetCodeUpdateManyMutationInput, ResetCodeUncheckedUpdateManyWithoutResetCodeInput>
  }

  export type ResetCodeScalarWhereInput = {
    AND?: Enumerable<ResetCodeScalarWhereInput>
    OR?: Enumerable<ResetCodeScalarWhereInput>
    NOT?: Enumerable<ResetCodeScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    email?: StringFilter | string
    resetCode?: StringFilter | string
    isUsed?: BoolFilter | boolean
    expiredAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profile: UserProfileCreateNestedOneWithoutUserInput
    vendorMember?: VendorCreateNestedManyWithoutUsersInput
    vendorPrimary?: VendorCreateNestedManyWithoutPrimaryUserInput
    ResetCode?: ResetCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
    vendorPrimary?: VendorUncheckedCreateNestedManyWithoutPrimaryUserInput
    ResetCode?: ResetCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type UserUpsertWithoutUserSessionInput = {
    update: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type UserUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutUserInput
    vendorMember?: VendorUpdateManyWithoutUsersInput
    vendorPrimary?: VendorUpdateManyWithoutPrimaryUserInput
    ResetCode?: ResetCodeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
    vendorPrimary?: VendorUncheckedUpdateManyWithoutPrimaryUserInput
    ResetCode?: ResetCodeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutResetCodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profile: UserProfileCreateNestedOneWithoutUserInput
    vendorMember?: VendorCreateNestedManyWithoutUsersInput
    vendorPrimary?: VendorCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResetCodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
    vendorPrimary?: VendorUncheckedCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResetCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResetCodeInput, UserUncheckedCreateWithoutResetCodeInput>
  }

  export type UserUpsertWithoutResetCodeInput = {
    update: XOR<UserUpdateWithoutResetCodeInput, UserUncheckedUpdateWithoutResetCodeInput>
    create: XOR<UserCreateWithoutResetCodeInput, UserUncheckedCreateWithoutResetCodeInput>
  }

  export type UserUpdateWithoutResetCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutUserInput
    vendorMember?: VendorUpdateManyWithoutUsersInput
    vendorPrimary?: VendorUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutResetCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
    vendorPrimary?: VendorUncheckedUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    vendorMember?: VendorCreateNestedManyWithoutUsersInput
    vendorPrimary?: VendorCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    vendorPrimary?: VendorUncheckedCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    vendorMember?: VendorUpdateManyWithoutUsersInput
    vendorPrimary?: VendorUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    vendorPrimary?: VendorUncheckedUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateWithoutVendorPrimaryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profile: UserProfileCreateNestedOneWithoutUserInput
    vendorMember?: VendorCreateNestedManyWithoutUsersInput
    UserSession?: UserSessionCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorPrimaryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
    UserSession?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorPrimaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorPrimaryInput, UserUncheckedCreateWithoutVendorPrimaryInput>
  }

  export type UserCreateWithoutVendorMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profile: UserProfileCreateNestedOneWithoutUserInput
    vendorPrimary?: VendorCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorMemberInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    verified?: boolean
    internalUser?: boolean | null
    resetToken?: string | null
    profileId: string
    vendorPrimary?: VendorUncheckedCreateNestedManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorMemberInput, UserUncheckedCreateWithoutVendorMemberInput>
  }

  export type VendorSubscriptionCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    planId: string
  }

  export type VendorSubscriptionCreateOrConnectWithoutVendorInput = {
    where: VendorSubscriptionWhereUniqueInput
    create: XOR<VendorSubscriptionCreateWithoutVendorInput, VendorSubscriptionUncheckedCreateWithoutVendorInput>
  }

  export type CatalogCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    categories?: CategoryCreateNestedManyWithoutCatalogInput
    items?: ItemCreateNestedManyWithoutCatalogInput
    tags?: CatalogTagCreateNestedManyWithoutCatalogsInput
  }

  export type CatalogUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    categories?: CategoryUncheckedCreateNestedManyWithoutCatalogInput
    items?: ItemUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutVendorInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutVendorInput, CatalogUncheckedCreateWithoutVendorInput>
  }

  export type CatalogCreateManyVendorInputEnvelope = {
    data: Enumerable<CatalogCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    catalog: CatalogCreateNestedOneWithoutCategoriesInput
    items?: ItemCreateNestedManyWithoutCategoryInput
    tags?: CatalogTagCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    catalogId: string
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput>
  }

  export type CategoryCreateManyVendorInputEnvelope = {
    data: Enumerable<CategoryCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    catalog: CatalogCreateNestedOneWithoutItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    tags?: CatalogTagCreateNestedManyWithoutItemsInput
    variants?: ItemVariantCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    catalogId: string
    categoryId: string
    variants?: ItemVariantUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutVendorInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput>
  }

  export type ItemCreateManyVendorInputEnvelope = {
    data: Enumerable<ItemCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type CatalogTagCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    catalogs?: CatalogCreateNestedManyWithoutTagsInput
    items?: ItemCreateNestedManyWithoutTagsInput
    categories?: CategoryCreateNestedManyWithoutTagsInput
  }

  export type CatalogTagUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
  }

  export type CatalogTagCreateOrConnectWithoutVendorInput = {
    where: CatalogTagWhereUniqueInput
    create: XOR<CatalogTagCreateWithoutVendorInput, CatalogTagUncheckedCreateWithoutVendorInput>
  }

  export type CatalogTagCreateManyVendorInputEnvelope = {
    data: Enumerable<CatalogTagCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type ItemVariantCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    item: ItemCreateNestedOneWithoutVariantsInput
  }

  export type ItemVariantUncheckedCreateWithoutVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    itemId: string
  }

  export type ItemVariantCreateOrConnectWithoutVendorInput = {
    where: ItemVariantWhereUniqueInput
    create: XOR<ItemVariantCreateWithoutVendorInput, ItemVariantUncheckedCreateWithoutVendorInput>
  }

  export type ItemVariantCreateManyVendorInputEnvelope = {
    data: Enumerable<ItemVariantCreateManyVendorInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorPrimaryInput = {
    update: XOR<UserUpdateWithoutVendorPrimaryInput, UserUncheckedUpdateWithoutVendorPrimaryInput>
    create: XOR<UserCreateWithoutVendorPrimaryInput, UserUncheckedCreateWithoutVendorPrimaryInput>
  }

  export type UserUpdateWithoutVendorPrimaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutUserInput
    vendorMember?: VendorUpdateManyWithoutUsersInput
    UserSession?: UserSessionUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutVendorPrimaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
    UserSession?: UserSessionUncheckedUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedUpdateManyWithoutUserInput
  }

  export type UserUpsertWithWhereUniqueWithoutVendorMemberInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutVendorMemberInput, UserUncheckedUpdateWithoutVendorMemberInput>
    create: XOR<UserCreateWithoutVendorMemberInput, UserUncheckedCreateWithoutVendorMemberInput>
  }

  export type UserUpdateWithWhereUniqueWithoutVendorMemberInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutVendorMemberInput, UserUncheckedUpdateWithoutVendorMemberInput>
  }

  export type UserUpdateManyWithWhereWithoutVendorMemberInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    verified?: BoolFilter | boolean
    internalUser?: BoolNullableFilter | boolean | null
    resetToken?: StringNullableFilter | string | null
    profileId?: StringFilter | string
  }

  export type VendorSubscriptionUpsertWithoutVendorInput = {
    update: XOR<VendorSubscriptionUpdateWithoutVendorInput, VendorSubscriptionUncheckedUpdateWithoutVendorInput>
    create: XOR<VendorSubscriptionCreateWithoutVendorInput, VendorSubscriptionUncheckedCreateWithoutVendorInput>
  }

  export type VendorSubscriptionUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    planId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUpsertWithWhereUniqueWithoutVendorInput = {
    where: CatalogWhereUniqueInput
    update: XOR<CatalogUpdateWithoutVendorInput, CatalogUncheckedUpdateWithoutVendorInput>
    create: XOR<CatalogCreateWithoutVendorInput, CatalogUncheckedCreateWithoutVendorInput>
  }

  export type CatalogUpdateWithWhereUniqueWithoutVendorInput = {
    where: CatalogWhereUniqueInput
    data: XOR<CatalogUpdateWithoutVendorInput, CatalogUncheckedUpdateWithoutVendorInput>
  }

  export type CatalogUpdateManyWithWhereWithoutVendorInput = {
    where: CatalogScalarWhereInput
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyWithoutCatalogsInput>
  }

  export type CatalogScalarWhereInput = {
    AND?: Enumerable<CatalogScalarWhereInput>
    OR?: Enumerable<CatalogScalarWhereInput>
    NOT?: Enumerable<CatalogScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    isActive?: BoolFilter | boolean
    isDefault?: BoolFilter | boolean
    vendorId?: StringFilter | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutVendorInput, CategoryUncheckedUpdateWithoutVendorInput>
    create: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutVendorInput, CategoryUncheckedUpdateWithoutVendorInput>
  }

  export type CategoryUpdateManyWithWhereWithoutVendorInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    isActive?: BoolFilter | boolean
    picture?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    sequence?: IntFilter | number
    vendorId?: StringFilter | string
    catalogId?: StringFilter | string
  }

  export type ItemUpsertWithWhereUniqueWithoutVendorInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutVendorInput, ItemUncheckedUpdateWithoutVendorInput>
    create: XOR<ItemCreateWithoutVendorInput, ItemUncheckedCreateWithoutVendorInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutVendorInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutVendorInput, ItemUncheckedUpdateWithoutVendorInput>
  }

  export type ItemUpdateManyWithWhereWithoutVendorInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type ItemScalarWhereInput = {
    AND?: Enumerable<ItemScalarWhereInput>
    OR?: Enumerable<ItemScalarWhereInput>
    NOT?: Enumerable<ItemScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    price?: FloatFilter | number
    discount?: FloatFilter | number
    picture?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    vendorId?: StringFilter | string
    catalogId?: StringFilter | string
    categoryId?: StringFilter | string
  }

  export type CatalogTagUpsertWithWhereUniqueWithoutVendorInput = {
    where: CatalogTagWhereUniqueInput
    update: XOR<CatalogTagUpdateWithoutVendorInput, CatalogTagUncheckedUpdateWithoutVendorInput>
    create: XOR<CatalogTagCreateWithoutVendorInput, CatalogTagUncheckedCreateWithoutVendorInput>
  }

  export type CatalogTagUpdateWithWhereUniqueWithoutVendorInput = {
    where: CatalogTagWhereUniqueInput
    data: XOR<CatalogTagUpdateWithoutVendorInput, CatalogTagUncheckedUpdateWithoutVendorInput>
  }

  export type CatalogTagUpdateManyWithWhereWithoutVendorInput = {
    where: CatalogTagScalarWhereInput
    data: XOR<CatalogTagUpdateManyMutationInput, CatalogTagUncheckedUpdateManyWithoutTagsInput>
  }

  export type CatalogTagScalarWhereInput = {
    AND?: Enumerable<CatalogTagScalarWhereInput>
    OR?: Enumerable<CatalogTagScalarWhereInput>
    NOT?: Enumerable<CatalogTagScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    color?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    type?: EnumTagLevelFilter | TagLevel
    vendorId?: StringFilter | string
  }

  export type ItemVariantUpsertWithWhereUniqueWithoutVendorInput = {
    where: ItemVariantWhereUniqueInput
    update: XOR<ItemVariantUpdateWithoutVendorInput, ItemVariantUncheckedUpdateWithoutVendorInput>
    create: XOR<ItemVariantCreateWithoutVendorInput, ItemVariantUncheckedCreateWithoutVendorInput>
  }

  export type ItemVariantUpdateWithWhereUniqueWithoutVendorInput = {
    where: ItemVariantWhereUniqueInput
    data: XOR<ItemVariantUpdateWithoutVendorInput, ItemVariantUncheckedUpdateWithoutVendorInput>
  }

  export type ItemVariantUpdateManyWithWhereWithoutVendorInput = {
    where: ItemVariantScalarWhereInput
    data: XOR<ItemVariantUpdateManyMutationInput, ItemVariantUncheckedUpdateManyWithoutItemVariantsInput>
  }

  export type ItemVariantScalarWhereInput = {
    AND?: Enumerable<ItemVariantScalarWhereInput>
    OR?: Enumerable<ItemVariantScalarWhereInput>
    NOT?: Enumerable<ItemVariantScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    price?: FloatFilter | number
    itemId?: StringFilter | string
    vendorId?: StringFilter | string
  }

  export type VendorCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutSubscriptionInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isDefault?: boolean | null
    baseFee?: number | null
    baseCommission?: number | null
    discountFee?: number | null
    discountCommission?: number | null
  }

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isDefault?: boolean | null
    baseFee?: number | null
    baseCommission?: number | null
    discountFee?: number | null
    discountCommission?: number | null
  }

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionInput>
  }

  export type VendorUpsertWithoutSubscriptionInput = {
    update: XOR<VendorUpdateWithoutSubscriptionInput, VendorUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
  }

  export type VendorUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type SubscriptionPlanUpsertWithoutSubscriptionInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSubscriptionInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    baseFee?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type VendorSubscriptionCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    vendor?: VendorCreateNestedOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
    vendor?: VendorUncheckedCreateNestedOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionCreateOrConnectWithoutPlanInput = {
    where: VendorSubscriptionWhereUniqueInput
    create: XOR<VendorSubscriptionCreateWithoutPlanInput, VendorSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type VendorSubscriptionCreateManyPlanInputEnvelope = {
    data: Enumerable<VendorSubscriptionCreateManyPlanInput>
    skipDuplicates?: boolean
  }

  export type VendorSubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: VendorSubscriptionWhereUniqueInput
    update: XOR<VendorSubscriptionUpdateWithoutPlanInput, VendorSubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<VendorSubscriptionCreateWithoutPlanInput, VendorSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type VendorSubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: VendorSubscriptionWhereUniqueInput
    data: XOR<VendorSubscriptionUpdateWithoutPlanInput, VendorSubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type VendorSubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: VendorSubscriptionScalarWhereInput
    data: XOR<VendorSubscriptionUpdateManyMutationInput, VendorSubscriptionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type VendorSubscriptionScalarWhereInput = {
    AND?: Enumerable<VendorSubscriptionScalarWhereInput>
    OR?: Enumerable<VendorSubscriptionScalarWhereInput>
    NOT?: Enumerable<VendorSubscriptionScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    discountFee?: FloatNullableFilter | number | null
    discountCommission?: FloatNullableFilter | number | null
    startedAt?: DateTimeNullableFilter | Date | string | null
    endedAt?: DateTimeNullableFilter | Date | string | null
    type?: EnumSubscriptionTypeNullableFilter | SubscriptionType | null
    planId?: StringFilter | string
  }

  export type VendorCreateWithoutCatalogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutCatalogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutCatalogsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutCatalogsInput, VendorUncheckedCreateWithoutCatalogsInput>
  }

  export type CategoryCreateWithoutCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendor: VendorCreateNestedOneWithoutCategoriesInput
    items?: ItemCreateNestedManyWithoutCategoryInput
    tags?: CatalogTagCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCatalogInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCatalogInput, CategoryUncheckedCreateWithoutCatalogInput>
  }

  export type CategoryCreateManyCatalogInputEnvelope = {
    data: Enumerable<CategoryCreateManyCatalogInput>
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    tags?: CatalogTagCreateNestedManyWithoutItemsInput
    variants?: ItemVariantCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    categoryId: string
    variants?: ItemVariantUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCatalogInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCatalogInput, ItemUncheckedCreateWithoutCatalogInput>
  }

  export type ItemCreateManyCatalogInputEnvelope = {
    data: Enumerable<ItemCreateManyCatalogInput>
    skipDuplicates?: boolean
  }

  export type CatalogTagCreateWithoutCatalogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendor: VendorCreateNestedOneWithoutTagsInput
    items?: ItemCreateNestedManyWithoutTagsInput
    categories?: CategoryCreateNestedManyWithoutTagsInput
  }

  export type CatalogTagUncheckedCreateWithoutCatalogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendorId: string
  }

  export type CatalogTagCreateOrConnectWithoutCatalogsInput = {
    where: CatalogTagWhereUniqueInput
    create: XOR<CatalogTagCreateWithoutCatalogsInput, CatalogTagUncheckedCreateWithoutCatalogsInput>
  }

  export type VendorUpsertWithoutCatalogsInput = {
    update: XOR<VendorUpdateWithoutCatalogsInput, VendorUncheckedUpdateWithoutCatalogsInput>
    create: XOR<VendorCreateWithoutCatalogsInput, VendorUncheckedCreateWithoutCatalogsInput>
  }

  export type VendorUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutCatalogInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutCatalogInput, CategoryUncheckedUpdateWithoutCatalogInput>
    create: XOR<CategoryCreateWithoutCatalogInput, CategoryUncheckedCreateWithoutCatalogInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutCatalogInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutCatalogInput, CategoryUncheckedUpdateWithoutCatalogInput>
  }

  export type CategoryUpdateManyWithWhereWithoutCatalogInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutCatalogInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCatalogInput, ItemUncheckedUpdateWithoutCatalogInput>
    create: XOR<ItemCreateWithoutCatalogInput, ItemUncheckedCreateWithoutCatalogInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCatalogInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCatalogInput, ItemUncheckedUpdateWithoutCatalogInput>
  }

  export type ItemUpdateManyWithWhereWithoutCatalogInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type CatalogTagUpsertWithWhereUniqueWithoutCatalogsInput = {
    where: CatalogTagWhereUniqueInput
    update: XOR<CatalogTagUpdateWithoutCatalogsInput, CatalogTagUncheckedUpdateWithoutCatalogsInput>
    create: XOR<CatalogTagCreateWithoutCatalogsInput, CatalogTagUncheckedCreateWithoutCatalogsInput>
  }

  export type CatalogTagUpdateWithWhereUniqueWithoutCatalogsInput = {
    where: CatalogTagWhereUniqueInput
    data: XOR<CatalogTagUpdateWithoutCatalogsInput, CatalogTagUncheckedUpdateWithoutCatalogsInput>
  }

  export type CatalogTagUpdateManyWithWhereWithoutCatalogsInput = {
    where: CatalogTagScalarWhereInput
    data: XOR<CatalogTagUpdateManyMutationInput, CatalogTagUncheckedUpdateManyWithoutTagsInput>
  }

  export type VendorCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutCategoriesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
  }

  export type CatalogCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendor: VendorCreateNestedOneWithoutCatalogsInput
    items?: ItemCreateNestedManyWithoutCatalogInput
    tags?: CatalogTagCreateNestedManyWithoutCatalogsInput
  }

  export type CatalogUncheckedCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendorId: string
    items?: ItemUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutCategoriesInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutCategoriesInput, CatalogUncheckedCreateWithoutCategoriesInput>
  }

  export type ItemCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutItemsInput
    catalog: CatalogCreateNestedOneWithoutItemsInput
    tags?: CatalogTagCreateNestedManyWithoutItemsInput
    variants?: ItemVariantCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
    variants?: ItemVariantUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemCreateManyCategoryInputEnvelope = {
    data: Enumerable<ItemCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type CatalogTagCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendor: VendorCreateNestedOneWithoutTagsInput
    catalogs?: CatalogCreateNestedManyWithoutTagsInput
    items?: ItemCreateNestedManyWithoutTagsInput
  }

  export type CatalogTagUncheckedCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendorId: string
  }

  export type CatalogTagCreateOrConnectWithoutCategoriesInput = {
    where: CatalogTagWhereUniqueInput
    create: XOR<CatalogTagCreateWithoutCategoriesInput, CatalogTagUncheckedCreateWithoutCategoriesInput>
  }

  export type VendorUpsertWithoutCategoriesInput = {
    update: XOR<VendorUpdateWithoutCategoriesInput, VendorUncheckedUpdateWithoutCategoriesInput>
    create: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
  }

  export type VendorUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type CatalogUpsertWithoutCategoriesInput = {
    update: XOR<CatalogUpdateWithoutCategoriesInput, CatalogUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CatalogCreateWithoutCategoriesInput, CatalogUncheckedCreateWithoutCategoriesInput>
  }

  export type CatalogUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCatalogsInput
    items?: ItemUpdateManyWithoutCatalogInput
    tags?: CatalogTagUpdateManyWithoutCatalogsInput
  }

  export type CatalogUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCatalogInput
  }

  export type ItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type CatalogTagUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: CatalogTagWhereUniqueInput
    update: XOR<CatalogTagUpdateWithoutCategoriesInput, CatalogTagUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CatalogTagCreateWithoutCategoriesInput, CatalogTagUncheckedCreateWithoutCategoriesInput>
  }

  export type CatalogTagUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: CatalogTagWhereUniqueInput
    data: XOR<CatalogTagUpdateWithoutCategoriesInput, CatalogTagUncheckedUpdateWithoutCategoriesInput>
  }

  export type CatalogTagUpdateManyWithWhereWithoutCategoriesInput = {
    where: CatalogTagScalarWhereInput
    data: XOR<CatalogTagUpdateManyMutationInput, CatalogTagUncheckedUpdateManyWithoutTagsInput>
  }

  export type VendorCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutItemsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
  }

  export type CatalogCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendor: VendorCreateNestedOneWithoutCatalogsInput
    categories?: CategoryCreateNestedManyWithoutCatalogInput
    tags?: CatalogTagCreateNestedManyWithoutCatalogsInput
  }

  export type CatalogUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendorId: string
    categories?: CategoryUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutItemsInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
  }

  export type CategoryCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendor: VendorCreateNestedOneWithoutCategoriesInput
    catalog: CatalogCreateNestedOneWithoutCategoriesInput
    tags?: CatalogTagCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
    catalogId: string
  }

  export type CategoryCreateOrConnectWithoutItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
  }

  export type CatalogTagCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendor: VendorCreateNestedOneWithoutTagsInput
    catalogs?: CatalogCreateNestedManyWithoutTagsInput
    categories?: CategoryCreateNestedManyWithoutTagsInput
  }

  export type CatalogTagUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
    vendorId: string
  }

  export type CatalogTagCreateOrConnectWithoutItemsInput = {
    where: CatalogTagWhereUniqueInput
    create: XOR<CatalogTagCreateWithoutItemsInput, CatalogTagUncheckedCreateWithoutItemsInput>
  }

  export type ItemVariantCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    vendor: VendorCreateNestedOneWithoutItemVariantsInput
  }

  export type ItemVariantUncheckedCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    vendorId: string
  }

  export type ItemVariantCreateOrConnectWithoutItemInput = {
    where: ItemVariantWhereUniqueInput
    create: XOR<ItemVariantCreateWithoutItemInput, ItemVariantUncheckedCreateWithoutItemInput>
  }

  export type ItemVariantCreateManyItemInputEnvelope = {
    data: Enumerable<ItemVariantCreateManyItemInput>
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutItemsInput = {
    update: XOR<VendorUpdateWithoutItemsInput, VendorUncheckedUpdateWithoutItemsInput>
    create: XOR<VendorCreateWithoutItemsInput, VendorUncheckedCreateWithoutItemsInput>
  }

  export type VendorUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type CatalogUpsertWithoutItemsInput = {
    update: XOR<CatalogUpdateWithoutItemsInput, CatalogUncheckedUpdateWithoutItemsInput>
    create: XOR<CatalogCreateWithoutItemsInput, CatalogUncheckedCreateWithoutItemsInput>
  }

  export type CatalogUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCatalogsInput
    categories?: CategoryUpdateManyWithoutCatalogInput
    tags?: CatalogTagUpdateManyWithoutCatalogsInput
  }

  export type CatalogUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutCatalogInput
  }

  export type CategoryUpsertWithoutItemsInput = {
    update: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
  }

  export type CategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutCategoriesInput
    catalog?: CatalogUpdateOneRequiredWithoutCategoriesInput
    tags?: CatalogTagUpdateManyWithoutCategoriesInput
  }

  export type CategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogTagUpsertWithWhereUniqueWithoutItemsInput = {
    where: CatalogTagWhereUniqueInput
    update: XOR<CatalogTagUpdateWithoutItemsInput, CatalogTagUncheckedUpdateWithoutItemsInput>
    create: XOR<CatalogTagCreateWithoutItemsInput, CatalogTagUncheckedCreateWithoutItemsInput>
  }

  export type CatalogTagUpdateWithWhereUniqueWithoutItemsInput = {
    where: CatalogTagWhereUniqueInput
    data: XOR<CatalogTagUpdateWithoutItemsInput, CatalogTagUncheckedUpdateWithoutItemsInput>
  }

  export type CatalogTagUpdateManyWithWhereWithoutItemsInput = {
    where: CatalogTagScalarWhereInput
    data: XOR<CatalogTagUpdateManyMutationInput, CatalogTagUncheckedUpdateManyWithoutTagsInput>
  }

  export type ItemVariantUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemVariantWhereUniqueInput
    update: XOR<ItemVariantUpdateWithoutItemInput, ItemVariantUncheckedUpdateWithoutItemInput>
    create: XOR<ItemVariantCreateWithoutItemInput, ItemVariantUncheckedCreateWithoutItemInput>
  }

  export type ItemVariantUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemVariantWhereUniqueInput
    data: XOR<ItemVariantUpdateWithoutItemInput, ItemVariantUncheckedUpdateWithoutItemInput>
  }

  export type ItemVariantUpdateManyWithWhereWithoutItemInput = {
    where: ItemVariantScalarWhereInput
    data: XOR<ItemVariantUpdateManyMutationInput, ItemVariantUncheckedUpdateManyWithoutVariantsInput>
  }

  export type ItemCreateWithoutVariantsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutItemsInput
    catalog: CatalogCreateNestedOneWithoutItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    tags?: CatalogTagCreateNestedManyWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutVariantsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
    categoryId: string
  }

  export type ItemCreateOrConnectWithoutVariantsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutVariantsInput, ItemUncheckedCreateWithoutVariantsInput>
  }

  export type VendorCreateWithoutItemVariantsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    tags?: CatalogTagCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutItemVariantsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    tags?: CatalogTagUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutItemVariantsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutItemVariantsInput, VendorUncheckedCreateWithoutItemVariantsInput>
  }

  export type ItemUpsertWithoutVariantsInput = {
    update: XOR<ItemUpdateWithoutVariantsInput, ItemUncheckedUpdateWithoutVariantsInput>
    create: XOR<ItemCreateWithoutVariantsInput, ItemUncheckedCreateWithoutVariantsInput>
  }

  export type ItemUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutItemsInput
    catalog?: CatalogUpdateOneRequiredWithoutItemsInput
    category?: CategoryUpdateOneRequiredWithoutItemsInput
    tags?: CatalogTagUpdateManyWithoutItemsInput
  }

  export type ItemUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUpsertWithoutItemVariantsInput = {
    update: XOR<VendorUpdateWithoutItemVariantsInput, VendorUncheckedUpdateWithoutItemVariantsInput>
    create: XOR<VendorCreateWithoutItemVariantsInput, VendorUncheckedCreateWithoutItemVariantsInput>
  }

  export type VendorUpdateWithoutItemVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutItemVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
  }

  export type VendorCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUser: UserCreateNestedOneWithoutVendorPrimaryInput
    users?: UserCreateNestedManyWithoutVendorMemberInput
    subscription: VendorSubscriptionCreateNestedOneWithoutVendorInput
    catalogs?: CatalogCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    items?: ItemCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    primaryUserId: string
    subscriptionId: string
    catalogs?: CatalogUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    items?: ItemUncheckedCreateNestedManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutTagsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutTagsInput, VendorUncheckedCreateWithoutTagsInput>
  }

  export type CatalogCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendor: VendorCreateNestedOneWithoutCatalogsInput
    categories?: CategoryCreateNestedManyWithoutCatalogInput
    items?: ItemCreateNestedManyWithoutCatalogInput
  }

  export type CatalogUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
    vendorId: string
    categories?: CategoryUncheckedCreateNestedManyWithoutCatalogInput
    items?: ItemUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type CatalogCreateOrConnectWithoutTagsInput = {
    where: CatalogWhereUniqueInput
    create: XOR<CatalogCreateWithoutTagsInput, CatalogUncheckedCreateWithoutTagsInput>
  }

  export type ItemCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutItemsInput
    catalog: CatalogCreateNestedOneWithoutItemsInput
    category: CategoryCreateNestedOneWithoutItemsInput
    variants?: ItemVariantCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
    categoryId: string
    variants?: ItemVariantUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTagsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTagsInput, ItemUncheckedCreateWithoutTagsInput>
  }

  export type CategoryCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendor: VendorCreateNestedOneWithoutCategoriesInput
    catalog: CatalogCreateNestedOneWithoutCategoriesInput
    items?: ItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
    catalogId: string
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTagsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTagsInput, CategoryUncheckedCreateWithoutTagsInput>
  }

  export type VendorUpsertWithoutTagsInput = {
    update: XOR<VendorUpdateWithoutTagsInput, VendorUncheckedUpdateWithoutTagsInput>
    create: XOR<VendorCreateWithoutTagsInput, VendorUncheckedCreateWithoutTagsInput>
  }

  export type VendorUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type CatalogUpsertWithWhereUniqueWithoutTagsInput = {
    where: CatalogWhereUniqueInput
    update: XOR<CatalogUpdateWithoutTagsInput, CatalogUncheckedUpdateWithoutTagsInput>
    create: XOR<CatalogCreateWithoutTagsInput, CatalogUncheckedCreateWithoutTagsInput>
  }

  export type CatalogUpdateWithWhereUniqueWithoutTagsInput = {
    where: CatalogWhereUniqueInput
    data: XOR<CatalogUpdateWithoutTagsInput, CatalogUncheckedUpdateWithoutTagsInput>
  }

  export type CatalogUpdateManyWithWhereWithoutTagsInput = {
    where: CatalogScalarWhereInput
    data: XOR<CatalogUpdateManyMutationInput, CatalogUncheckedUpdateManyWithoutCatalogsInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutTagsInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutTagsInput, ItemUncheckedUpdateWithoutTagsInput>
    create: XOR<ItemCreateWithoutTagsInput, ItemUncheckedCreateWithoutTagsInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutTagsInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutTagsInput, ItemUncheckedUpdateWithoutTagsInput>
  }

  export type ItemUpdateManyWithWhereWithoutTagsInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutTagsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutTagsInput, CategoryUncheckedUpdateWithoutTagsInput>
    create: XOR<CategoryCreateWithoutTagsInput, CategoryUncheckedCreateWithoutTagsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutTagsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutTagsInput, CategoryUncheckedUpdateWithoutTagsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutTagsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type VendorCreateManyPrimaryUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    address?: string | null
    category?: string | null
    country: string
    currency?: string
    internalVendor?: boolean
    type?: VendorType | null
    subscriptionId: string
  }

  export type UserSessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
  }

  export type ResetCodeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    resetCode: string
    isUsed?: boolean
    expiredAt: Date | string
  }

  export type VendorUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUser?: UserUpdateOneRequiredWithoutVendorPrimaryInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateManyWithoutVendorMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    primaryUserId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUpdateWithoutPrimaryUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    users?: UserUpdateManyWithoutVendorMemberInput
    subscription?: VendorSubscriptionUpdateOneRequiredWithoutVendorInput
    catalogs?: CatalogUpdateManyWithoutVendorInput
    categories?: CategoryUpdateManyWithoutVendorInput
    items?: ItemUpdateManyWithoutVendorInput
    tags?: CatalogTagUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateWithoutPrimaryUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
    catalogs?: CatalogUncheckedUpdateManyWithoutVendorInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorInput
    items?: ItemUncheckedUpdateManyWithoutVendorInput
    tags?: CatalogTagUncheckedUpdateManyWithoutVendorInput
    itemVariants?: ItemVariantUncheckedUpdateManyWithoutVendorInput
  }

  export type VendorUncheckedUpdateManyWithoutVendorPrimaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    internalVendor?: BoolFieldUpdateOperationsInput | boolean
    type?: NullableEnumVendorTypeFieldUpdateOperationsInput | VendorType | null
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateManyWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetCodeUncheckedUpdateManyWithoutResetCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    resetCode?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogCreateManyVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    isActive?: boolean
    isDefault?: boolean
  }

  export type CategoryCreateManyVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    catalogId: string
  }

  export type ItemCreateManyVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    catalogId: string
    categoryId: string
  }

  export type CatalogTagCreateManyVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    color?: string | null
    icon?: string | null
    type: TagLevel
  }

  export type ItemVariantCreateManyVendorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    itemId: string
  }

  export type UserUpdateWithoutVendorMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: UserProfileUpdateOneRequiredWithoutUserInput
    vendorPrimary?: VendorUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutVendorMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
    vendorPrimary?: VendorUncheckedUpdateManyWithoutPrimaryUserInput
    UserSession?: UserSessionUncheckedUpdateManyWithoutUserInput
    ResetCode?: ResetCodeUncheckedUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    internalUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    categories?: CategoryUpdateManyWithoutCatalogInput
    items?: ItemUpdateManyWithoutCatalogInput
    tags?: CatalogTagUpdateManyWithoutCatalogsInput
  }

  export type CatalogUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    categories?: CategoryUncheckedUpdateManyWithoutCatalogInput
    items?: ItemUncheckedUpdateManyWithoutCatalogInput
  }

  export type CatalogUncheckedUpdateManyWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    catalog?: CatalogUpdateOneRequiredWithoutCategoriesInput
    items?: ItemUpdateManyWithoutCategoryInput
    tags?: CatalogTagUpdateManyWithoutCategoriesInput
  }

  export type CategoryUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    catalogId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCategoryInput
  }

  export type CategoryUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    catalogId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    catalog?: CatalogUpdateOneRequiredWithoutItemsInput
    category?: CategoryUpdateOneRequiredWithoutItemsInput
    tags?: CatalogTagUpdateManyWithoutItemsInput
    variants?: ItemVariantUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    variants?: ItemVariantUncheckedUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateManyWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogTagUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    catalogs?: CatalogUpdateManyWithoutTagsInput
    items?: ItemUpdateManyWithoutTagsInput
    categories?: CategoryUpdateManyWithoutTagsInput
  }

  export type CatalogTagUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
  }

  export type CatalogTagUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
  }

  export type ItemVariantUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutVariantsInput
  }

  export type ItemVariantUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantUncheckedUpdateManyWithoutItemVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorSubscriptionCreateManyPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discountFee?: number | null
    discountCommission?: number | null
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    type?: SubscriptionType | null
  }

  export type VendorSubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    vendor?: VendorUpdateOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
    vendor?: VendorUncheckedUpdateOneWithoutSubscriptionInput
  }

  export type VendorSubscriptionUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discountFee?: NullableFloatFieldUpdateOperationsInput | number | null
    discountCommission?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: NullableEnumSubscriptionTypeFieldUpdateOperationsInput | SubscriptionType | null
  }

  export type CategoryCreateManyCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    isActive?: boolean
    picture?: string | null
    isDefault?: boolean
    sequence?: number
    vendorId: string
  }

  export type ItemCreateManyCatalogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    categoryId: string
  }

  export type CategoryUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutCategoriesInput
    items?: ItemUpdateManyWithoutCategoryInput
    tags?: CatalogTagUpdateManyWithoutCategoriesInput
  }

  export type CategoryUncheckedUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCategoryInput
  }

  export type ItemUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutItemsInput
    category?: CategoryUpdateOneRequiredWithoutItemsInput
    tags?: CatalogTagUpdateManyWithoutItemsInput
    variants?: ItemVariantUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    variants?: ItemVariantUncheckedUpdateManyWithoutItemInput
  }

  export type CatalogTagUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendor?: VendorUpdateOneRequiredWithoutTagsInput
    items?: ItemUpdateManyWithoutTagsInput
    categories?: CategoryUpdateManyWithoutTagsInput
  }

  export type CatalogTagUncheckedUpdateWithoutCatalogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price?: number
    discount?: number
    picture?: string | null
    description?: string | null
    isActive?: boolean
    vendorId: string
    catalogId: string
  }

  export type ItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutItemsInput
    catalog?: CatalogUpdateOneRequiredWithoutItemsInput
    tags?: CatalogTagUpdateManyWithoutItemsInput
    variants?: ItemVariantUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    variants?: ItemVariantUncheckedUpdateManyWithoutItemInput
  }

  export type CatalogTagUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendor?: VendorUpdateOneRequiredWithoutTagsInput
    catalogs?: CatalogUpdateManyWithoutTagsInput
    items?: ItemUpdateManyWithoutTagsInput
  }

  export type CatalogTagUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantCreateManyItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    price: number
    vendorId: string
  }

  export type CatalogTagUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendor?: VendorUpdateOneRequiredWithoutTagsInput
    catalogs?: CatalogUpdateManyWithoutTagsInput
    categories?: CategoryUpdateManyWithoutTagsInput
  }

  export type CatalogTagUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTagLevelFieldUpdateOperationsInput | TagLevel
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutItemVariantsInput
  }

  export type ItemVariantUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemVariantUncheckedUpdateManyWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type CatalogUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCatalogsInput
    categories?: CategoryUpdateManyWithoutCatalogInput
    items?: ItemUpdateManyWithoutCatalogInput
  }

  export type CatalogUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutCatalogInput
    items?: ItemUncheckedUpdateManyWithoutCatalogInput
  }

  export type ItemUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutItemsInput
    catalog?: CatalogUpdateOneRequiredWithoutItemsInput
    category?: CategoryUpdateOneRequiredWithoutItemsInput
    variants?: ItemVariantUpdateManyWithoutItemInput
  }

  export type ItemUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    variants?: ItemVariantUncheckedUpdateManyWithoutItemInput
  }

  export type CategoryUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendor?: VendorUpdateOneRequiredWithoutCategoriesInput
    catalog?: CatalogUpdateOneRequiredWithoutCategoriesInput
    items?: ItemUpdateManyWithoutCategoryInput
  }

  export type CategoryUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    sequence?: IntFieldUpdateOperationsInput | number
    vendorId?: StringFieldUpdateOperationsInput | string
    catalogId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCategoryInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}