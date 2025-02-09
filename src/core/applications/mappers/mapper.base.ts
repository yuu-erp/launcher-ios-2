import { Entity } from '@core/domain/entities'

export interface Mapper<DomainEntity extends Entity<unknown>, Response = unknown> {
  toDomain(record: Response): DomainEntity
  toResponse(entity: DomainEntity): Response
}
