import { invariant } from '@techmely/utils'
import { AggregateRoot } from './aggregate.base'
import { ArgumentInvalidException, ArgumentNotProvidedException } from '@core/exceptions'
import { DappTypeEnum } from '../enums'
import { DappProps } from '../types'
import { UniqueEntityID } from './unique-entity'

export class DappEntity extends AggregateRoot<DappProps> {
  static create(createDappProps: DappProps): DappEntity {
    const id = new UniqueEntityID(createDappProps.id)
    const props: DappProps = { ...createDappProps }
    const user = new DappEntity({ id, props })
    return user
  }
  validate(): void {
    const { name, type, page } = this.getProps()
    invariant(name && name.trim() !== '', new ArgumentNotProvidedException('Application name is required'))
    invariant(
      page != null && typeof page === 'number',
      new ArgumentNotProvidedException('Application page is required and must be a number')
    )
    invariant(Object.values(DappTypeEnum).includes(type), new ArgumentInvalidException('Invalid application type'))
  }
}
