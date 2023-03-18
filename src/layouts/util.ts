import type { RouteRecordRaw } from 'vue-router'

interface NavTabItem {
  label: string
  icon: string
  route: string
}

export function routeToTabItem(route: RouteRecordRaw): NavTabItem {
  return {
    label: route.meta!.tab!,
    route: route.name!.toString(),
    icon: route.meta!.icon!,
  }
}
