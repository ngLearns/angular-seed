#### Flowchart

```
App
 ├── my-feature (in a @sample.{folder})
 │ ├── my-feature-routing.module.ts
 │ ├── my-feature.component.css
 │ ├── my-feature.component.html
 │ ├── my-feature.component.ts
 │ ├── my-feature.module.ts
 │ ├── components
 │ ├── containers
 │ │    ├── my-feature
 │ │    └── my-feature
 │ │         ├── my-feature.component.css
 │ │         ├── my-feature.component.html
 │ │         └── my-feature.component.ts
 │ ├── models
 │ │    ├── index.ts
 │ │    ├── my-model.ts
 │ │    └── user.ts
 │ ├── root-state
 │ │    ├── index.ts
 │ │    ├── root-state.module.ts
 │ │    ├── selectors.ts
 │ │    ├── effects.ts
 │ │    ├── reducer.ts
 │ │    ├── state.ts (or interfaces.ts)
 │ │    ├── my-feature-state
 │ │    │    ├── actions.ts
 │ │    │    ├── effects.ts
 │ │    │    ├── index.ts
 │ │    │    ├── reducer.ts
 │ │    │    ├── selectors.ts
 │ │    │    ├── state.ts (or interfaces.ts)
 │ │    │    └── my-feature-state.module.ts
 │ │    ├── my-other-feature-state
 │ │    │    ├── actions.ts
 │ │    │    ├── effects.ts
 │ │    │    ├── index.ts
 │ │    │    ├── reducer.ts
 │ │    │    ├── selectors.ts
 │ │    │    ├── state.ts (or interfaces.ts)
 │ │    │    └── my-other-feature-state.module.ts
 │ │    └── shared
 │ │         ├── actions (include all *.action.ts)
 │ │         ├── effects (include all *.effect.ts)
 │ │         ├── reducers (include all *.reducer.ts & index.ts - all selectors)
 │ │         └── ultils.ts
 │ └── services
 │       └── data.service.ts
 ├──── shared (+)
 │     ├── directives
 │     ├── commons/components
 │     │     ├──  loader
 │     │     ├──  alert
 │     │     └──  modal (dialog/confirm/popup)
 │     ├── pipes
 │     ├── animations
 │     ├── mocks
 │     ├── models
 │     ├── enums 
 │     │     ├── shortcut-key-code
 │     │     └── http-status-code
 │     ├── app-const 
 │     │     ├── alert-type
 │     │     └── app-const
 │ 	   └── utilites
 │
 ├──── core (+)
 │   ├── (+) authentication
 │   │    ├── authentication.guard.ts
 │   │    ├── authentication.service.mock.ts
 │   │    └── authentication.service.ts
 │   ├── (+) authorize
 │   │    ├── authorize.guard.ts
 │   │    ├── authorize.service.mock.ts
 │   │    └── authorize.service.ts
 │   ├── (+) http
 │   │    ├── cache.interceptor.ts
 │   │    ├── api-prefix.interceptor.ts
 │   │    ├── api-authentication.interceptor.ts
 │   │    ├── error-handler.interceptor.ts
 │   │    ├── http-adapter.service.ts
 │   │    ├── http-decorator.service.ts
 │   │    ├── http-cache.service.ts
 │   │    ├── utils.service.ts
 │   │    └── http.service.ts
 │   │
 │   ├── i18n
 │   ├── logger
 │   └── RouteReuseStrategy
 │
 ├──── themes
 │     ├──── partils
 │     │  	├── styles.css|scss
 │     │  	├── _variables.css|scss
 │     │  	├── _layouts.css|scss
 │     │  	├── _controls.css|scss
 │     │  	├── _mixins.css|scss
 │     │  	├── _my-feature-a.css|scss
 │     │  	└── _my-feature-z.css|scss
 │     └───── libs
 │    	        ├── _imports.css|scss
 │        	    └── _my-lib-import.css|scss
 │
 ├──── assets
 │    	├── images
 │    	├── i18n
 │    	├── fonts
 │    	└── dists (js/css bundles)
 │
 ├──── browserslist
 ├──── environments
 │ 	    ├── environment.prod.ts
 │ 	    └── environment.ts
 ├──── index.html
 ├──── main.ts
 ├──── polyfills.ts
 ├──── styles.scss
 ├──── test.ts
 ├──── tsconfig.app.json
 ├──── tsconfig.spec.json
 ├──── packages.json
 ├──── hooks (scripts nodejs)
 └──── tslint.json
```
