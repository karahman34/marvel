export const format = ({prefix, name, routes}) => {
  return routes.map(route => ({
    path: `${prefix}${route.path}`,
    name: `${name}.${route.name}`,
    component: route.component,
    meta: route.meta
  }))
}

export const setTitle= to => {
  const appTitle = process.env.VUE_APP_TITLE
  const destinationTitle = to.meta?.title

  destinationTitle
    ? document.title = `${destinationTitle} - ${appTitle}`
    : document.title = appTitle
}