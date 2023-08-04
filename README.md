# view-ui-plus-resolver
Resolver for View UI Plus; Work with unplugin-vue-components.

## Guide
- `npm i @zhangqingcq/view-ui-plus-resolver -D` or `pnpm add @zhangqingcq/view-ui-plus-resolver -D`
- Change vite.config.ts
  ```
    // vite.config.ts or vite.config.js
    
    
    import Components from 'unplugin-vue-components/vite'
    import ViewUIPlusResolver from '@zhangqingcq/view-ui-plus-resolver'
    
    export default defineConfig({
      plugins:[
        Components({
          resolvers:[ViewUIPlusResolver(),...]
          ...
        })
        ...
      ]
      ...
    })
  ```
- install resolver `side effects` dependencies
    ```
      pnpm add popper.js@^1.14.6 element-resize-detector@^1.2.0 js-calendar@^1.2.3 dayjs@^1.11.0 lodash.throttle@^4.1.1 countup.js@^1.9.3 numeral@^2.0.6 -D
    ```
    or
    ```
      npm i popper.js@^1.14.6 element-resize-detector@^1.2.0 js-calendar@^1.2.3 dayjs@^1.11.0 lodash.throttle@^4.1.1 countup.js@^1.9.3 numeral@^2.0.6 -D
    ```
