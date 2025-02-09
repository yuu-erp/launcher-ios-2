import type { StringEnum } from '@techmely/types'

export interface RepositoryPort<Entity> {
  findById(id: string): Entity | null
  findAll(): Entity[]
  findByKey(key: StringEnum<keyof Entity>): Entity

  insert(entity: Entity): void | Entity
  insertMany(entities: Entity[]): void | Entity[]

  update(entity: Entity): void | Entity
  updateMany(entities: Entity[]): void | Entity[]

  delete(entity: Entity): boolean
  deleteById(id: string): boolean

  transaction<T>(handler: () => T): T
}
