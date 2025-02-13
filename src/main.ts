import { DappMapper } from '@core/applications/mappers/dapp.mapper'
import { CreateDappCase } from '@core/domain/use-case/create-dapp.use-case'
import { DappPosition } from '@core/domain/value-objects'
import { Logger } from '@core/infrastructure/logger/logger'
import { DappRepositoryImpl } from 'src/modules/dapplication/dapp.impl.reposity'
import { InMemoryStorageAdapter } from '@core/infrastructure/storage/in-memory-storage.adapter'
import { DApplicationService } from './modules/dapplication/dapplication.service'

async function bootstrap() {
  const logger = new Logger()
  try {
    logger.log('Starting compilation in watch mode...')
    const inMemoryStorageAdapter = new InMemoryStorageAdapter()
    inMemoryStorageAdapter.set('layout', {})
    const dappMapper = new DappMapper()
    const dappRepository = new DappRepositoryImpl(inMemoryStorageAdapter, dappMapper)
    const createDappCase = new CreateDappCase(dappRepository)
    createDappCase.execute({
      id: 1,
      name: 'Dapp 1',
      logo: 'https://',
      url: 'https://',
      type: 1,
      page: 0,
      position: new DappPosition({ width: 1, height: 1, x: 0, y: 0 })
    })
    createDappCase.execute({
      id: 2,
      name: 'Dapp 2',
      logo: 'https://',
      url: 'https://',
      type: 1,
      page: 0,
      position: new DappPosition({ width: 1, height: 1, x: 0, y: 0 })
    })
    console.log('inMemoryStorageAdapter', inMemoryStorageAdapter.getAll())
    console.log('dappRepository: ', dappRepository.findAll())
    const dapplicationService = new DApplicationService(dappRepository, dappMapper)
    console.log('dapplicationService: ', dapplicationService.getApplications())
    console.log('dapplicationService: ', dapplicationService.getDappById(1))
  } catch (error) {
    logger.error('Application fail', error)
  }
}

bootstrap()
