import { invariant } from '@techmely/utils'
import { ValueObject } from './value-object.base'
import { ArgumentNotProvidedException } from '@core/exceptions'

export interface IDappPosition {
  width: number
  height: number
  x: number
  y: number
}
export class DappPosition extends ValueObject<IDappPosition> {
  protected validate(props: IDappPosition): void {
    const { width, height, x, y } = props
    invariant(width > 0, new ArgumentNotProvidedException('Position width must be greater than 0'))
    invariant(height > 0, new ArgumentNotProvidedException('Position height must be greater than 0'))
    invariant(x != null && typeof x === 'number', new ArgumentNotProvidedException('Position x must be greater than 0'))
    invariant(y != null && typeof y === 'number', new ArgumentNotProvidedException('Position y must be greater than 0'))
  }
}
