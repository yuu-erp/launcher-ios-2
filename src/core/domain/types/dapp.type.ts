import { DappTypeEnum } from '../enums'
import { DappPosition } from '../value-objects/dapp-position.value-object'

export interface DappProps {
  id: number
  name: string
  logo: string
  url: string
  page: number
  position: DappPosition
  type: DappTypeEnum
}

export interface DappResponse {
  id: number
  name: string
  logo: string
  url: string
  page: number
  position: { width: number; height: number; x: number; y: number }
  type: DappTypeEnum // Trả về enum thay vì string
}
