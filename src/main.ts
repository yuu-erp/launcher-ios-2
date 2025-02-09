import { Logger } from '@core/infrastructure/logger/logger'

async function bootstrap() {
  const logger = new Logger()
  try {
    logger.log('Starting compilation in watch mode...')
  } catch (error) {
    logger.error('Application fail', error)
  }
}

bootstrap()
