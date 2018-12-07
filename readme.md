### starter-seed

### Document structure
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
 │     ├── commons
 │     ├── pipes
 │     ├── animations
 │     ├── mocks
 │     ├── models
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
 ├──── styles.scss
 ├──── test.ts
 ├──── tsconfig.app.json
 ├──── tsconfig.spec.json
 ├──── packages.json
 ├──── hooks (scripts nodejs)
 └──── tslint.json
```

#### Documents
- my-feature.module.ts will import my-feature-state.module.ts
- my-other-feature.module.ts will import my-other-feature-state.module.ts
- ShellRoutingModule will lazy load feature-module other
- SharedModule includes all: directives, components common
- translation includes all file translate text offine *.json
- theme includes: variables, themes, use smascss 
- app-module is module root, includes:  
    + CoreModule,
    + SharedModule,
    + AppRoutingModule,
    + RootStoreModule
- CoreModule: will import the librarys 3nd, no import in app-module.
- directive img[default] default set url = /assets/images/no-image-available.png if no set value
- Folder app will includes: 
    + 1. @sample.basic includes all example basic to learn
    + 2. @sample.user-site include project user site
    + 3. @sample.admin-site include project administrator site
    + 4. url prefix start with @sample-{folder}/project/routing
- root-state:
    + 

#### Plugins
- Install some awesome dependency to my-lib
```
    npm i some-awesome-dependency --project=my-awesome-library --peer=true --dev=false
```