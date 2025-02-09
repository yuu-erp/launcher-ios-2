import { DappResponse } from '@core/domain/types'
import { Mapper } from './mapper.base'
import { DappEntity } from '@core/domain/entities'
import { DappPosition } from '@core/domain/value-objects'
import { DappTypeEnum } from '@core/domain/enums'

export class DappMapper implements Mapper<DappEntity, DappResponse> {
  toDomain(record: DappResponse): DappEntity {
    const dappEntity = DappEntity.create({
      ...record,
      position: new DappPosition({ ...record.position })
    })
    return dappEntity
  }

  toResponse(entity: DappEntity): DappResponse {
    const props = entity.getProps()
    return {
      id: props.id,
      name: props.name,
      logo: props.logo,
      url: props.url,
      page: props.page,
      position: props.position.raw(),
      type: props.type as DappTypeEnum
    }
  }
}
