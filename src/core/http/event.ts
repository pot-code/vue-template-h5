import { Subject } from 'rxjs'
import type { HttpError } from './error'

export const HttpErrorStream = new Subject<HttpError>()
