import { Mapper } from '@core/applications/mappers'
import { DappEntity } from '@core/domain/entities'
import { IDappRepository } from '@core/domain/repository'
import { DappResponse } from '@core/domain/types'

export class DApplicationService {
  constructor(
    private readonly dappRepository: IDappRepository,
    private readonly mapper: Mapper<DappEntity, DappResponse>
  ) {}

  getApplications(): DappResponse[] {
    const data = this.dappRepository.findAll()
    return data.map(this.mapper.toResponse)
  }
  getDappById(id: number): DappResponse | null {
    const entity = this.dappRepository.findById(id)
    return entity ? this.mapper.toResponse(entity) : null
  }
}
