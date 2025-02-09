import mitt, { type EventHandlerMap, type Emitter } from 'mitt'
import type { EmitDomainEvents } from './domain-event.types'

export function mittAsync(all?: EventHandlerMap<EmitDomainEvents>) {
  const instance: Emitter<EmitDomainEvents> & {
    emitAsync?: (type: keyof EmitDomainEvents, e: EmitDomainEvents[keyof EmitDomainEvents]) => Promise<void>
  } = mitt<EmitDomainEvents>(all)

  instance.emitAsync = async function (type: keyof EmitDomainEvents, e: EmitDomainEvents[keyof EmitDomainEvents]) {
    const handlersType = this.all.get(type)
    // @ts-expect-error Ignore typecheck
    if (handlersType) for (const ht of handlersType) await ht(e)
    const handlersWildcard = this.all.get('*')
    if (handlersWildcard) for (const hw of handlersWildcard) await hw(type, e)
  }

  return instance
}
