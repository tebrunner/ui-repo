import { type ReactNode } from "react"

export type Slot = ReactNode

export type SlotProps<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Slot ? Slot : T[K]
}
