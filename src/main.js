// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import VueTypedJs from 'vue-typed-js'
import VueDisqus from 'vue-disqus'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  Vue.use(VueTypedJs)

  Vue.use(VueDisqus, { shortname: 'Fougnigué Soro' })

  head.meta.push({
    name: 'keywords',
    content: 'Quasar,Vue,JavaScript,HTML,CSS,Vue.js,VueJS,Capacitor,Electron,Java,Vertx'
  })

  head.meta.push({
    name: 'description',
    content: 'Fougnigué Soro\' website. Software Engineer, Software Developer, Web Developer, Full-stack engineer. Clean Code advocate. DevOps. He likes cats.'
  })

  head.meta.push({
    name: 'author',
    content: 'Fougnigué Soro'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700'
  })
}
