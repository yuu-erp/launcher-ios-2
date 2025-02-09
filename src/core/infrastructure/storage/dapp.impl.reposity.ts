import { IDappRepository } from '@core/domain/repository'
import { DappEntity } from '@core/domain/entities'
import { StringEnum } from '@techmely/types'
import { Mapper } from '@core/applications/mappers'
import { DappResponse } from '@core/domain/types'
import { StoragePort } from '@core/infrastructure/storage/storage.port'

export class DappRepositoryImpl implements IDappRepository {
  protected readonly key: string = 'applications'
  constructor(
    protected readonly storage: StoragePort, // Adapter lưu trữ
    protected readonly mapper: Mapper<DappEntity, DappResponse> // Chuyển đổi giữa Entity và Response
  ) {}
  // ✅ Lấy danh sách tất cả ứng dụng
  findAll(): DappEntity[] {
    const records = this.storage.get(this.key) || []
    return records.map(this.mapper.toDomain) // Convert từ response sang entity
  }
  // ✅ Tìm ứng dụng theo ID
  findById(id: string): DappEntity | null {
    const records: DappResponse[] = this.storage.get(this.key) || []
    const record = records.find((item) => item.id.toString() === id)
    return record ? this.mapper.toDomain(record) : null
  }
  // ✅ Thêm mới một ứng dụng
  insert(entity: DappEntity): DappEntity {
    const records = this.storage.get(this.key) || []
    const newRecord = this.mapper.toResponse(entity) // Convert entity sang response
    records.push(newRecord)
    this.storage.set(this.key, records) // Lưu lại vào storage
    return entity
  }
  // ✅ Cập nhật một ứng dụng
  update(entity: DappEntity): DappEntity {
    let records: DappResponse[] = this.storage.get(this.key) || []
    records = records.map((item) => (item.id === entity.getProps().id ? this.mapper.toResponse(entity) : item))
    this.storage.set(this.key, records)
    return entity
  }

  // 🚀 Các method khác có thể triển khai tương tự...
  findByKey(_key: StringEnum<keyof DappEntity>): DappEntity {
    throw new Error('Method not implemented.')
  }
  insertMany(_entities: DappEntity[]): void | DappEntity[] {
    throw new Error('Method not implemented.')
  }
  updateMany(_entities: DappEntity[]): void | DappEntity[] {
    throw new Error('Method not implemented.')
  }
  delete(_entity: DappEntity): boolean {
    throw new Error('Method not implemented.')
  }
  deleteById(_id: string): boolean {
    throw new Error('Method not implemented.')
  }
  transaction<T>(_handler: () => T): T {
    throw new Error('Method not implemented.')
  }
}
