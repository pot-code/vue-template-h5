import { Subject } from 'rxjs'
import type { HttpError } from '.'

export const HttpErrorStream = new Subject<HttpError>()
