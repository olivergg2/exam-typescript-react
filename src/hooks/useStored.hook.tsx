import { useState } from 'react'
import { getFromLocalStorage } from '../helpers/localeStorage.helper'

export default function useStored<T>(key: string, fallback: T) {
  return useState(() => getFromLocalStorage<T>(key) ?? fallback)
}
