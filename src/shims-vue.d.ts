declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'pixi-text-input' {
  const input: any;
  export default input
}

declare module 'sss-ui-test'
