import { HttpErrorStream } from '@/core/http/event'
import useTokenStore from '@/store/useTokenStore'
import type { Subscription } from 'rxjs'
import { showNotify } from 'vant'

export default function useErrorHandling() {
  const subs: Subscription[] = []
  const { clearToken } = useTokenStore()
  const router = useRouter()

  onMounted(() => {
    subs.push(
      HttpErrorStream.subscribe((err) => {
        if (err.code === 401) {
          clearToken()
          router.push({ name: 'login' })
        }
        showNotify({
          message: err.message,
          type: 'danger',
        })
      }),
    )
  })

  onUnmounted(() => {
    subs.forEach((sub) => sub.unsubscribe())
  })
}
