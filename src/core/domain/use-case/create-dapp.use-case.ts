import { DappEntity } from '../entities'
import { IDappRepository } from '../repository'
import { DappProps } from '../types'
import { UseCase } from './use-cases.port.base'

export class CreateDappCase implements UseCase<DappProps, DappEntity> {
  constructor(private readonly dappRepository: IDappRepository) {}
  execute(request: DappProps): DappEntity | Promise<DappEntity> {
    const dappEntity = DappEntity.create(request)
    return this.dappRepository.insert(dappEntity)
  }
}
