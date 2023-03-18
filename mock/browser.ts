import { setupWorker } from 'msw'
import { auth, dict } from './handlers'

export const worker = setupWorker(...auth, ...dict)
