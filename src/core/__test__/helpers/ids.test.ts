import { describe, expect, it } from 'vitest'
import { DEFAULT_PREFIX_ID_LENGTH, generatePrefixId, generateMessageId } from '@core/helpers'

describe('Test generate Prefix ID', () => {
  it('Should generate generic entity id', () => {
    const KEY = 'entity'
    const entityLength = `${KEY}_`.length + DEFAULT_PREFIX_ID_LENGTH
    expect(generatePrefixId(KEY)).toHaveLength(entityLength)
  })

  it('Should generate message id with default length', () => {
    const expectedLength = 'message_'.length + DEFAULT_PREFIX_ID_LENGTH
    expect(generateMessageId()).toHaveLength(expectedLength)
  })
})
