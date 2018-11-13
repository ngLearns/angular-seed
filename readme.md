### starter-seed 
```
App
 ├── my-feature
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
 │ ├── root-store
 │ │    ├── index.ts
 │ │    ├── root-store.module.ts
 │ │    ├── selectors.ts
 │ │    ├── state.ts
 │ │    ├── my-feature-store
 │ │    │    ├── actions.ts
 │ │    │    ├── effects.ts
 │ │    │    ├── index.ts
 │ │    │    ├── reducer.ts
 │ │    │    ├── selectors.ts
 │ │    │    ├── state.ts
 │ │    │    └── my-feature-store.module.ts
 │ │    └── my-other-feature-store
 │ │         ├── actions.ts
 │ │         ├── effects.ts
 │ │         ├── index.ts
 │ │         ├── reducer.ts
 │ │         ├── selectors.ts
 │ │         ├── state.ts
 │ │         └── my-other-feature-store.module.ts
 │ └── services
 │       └── data.service.ts
 ├──── shares
 │     ├── directives
 │   	 ├── commons
 │   	 ├── pipes
 │   	 ├── animations
 │   	 ├── mocks
 │   	 ├── models
 │   	 └── utilites
 │
 ├──── cores
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
 │ 	├── environment.prod.ts
 │ 	└── environment.ts
 ├──── index.html
 ├──── main.ts
 ├──── polyfills.ts
 ├──── styles.css
 ├──── test.ts
 ├──── tsconfig.app.json
 ├──── tsconfig.spec.json
 ├──── packages.json
 ├──── hooks (scripts nodejs)
 └──── tslint.json
```

### How use projects/my-lib 

#### # Install some awesome dependency to my-lib
```
    npm i some-awesome-dependency --project=my-awesome-library --peer=true --dev=false
```

#### Architecture store/*

store_routing
store_reduxs
store_hotkeys
store_themes
