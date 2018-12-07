### architecture-starter-seed

This project was generated with Angular CLI version 7.1.2 and Ngx-Rocket CLI

### Introduction
Provides fast, reliable and extensible starter for the development of Angular projects.

`starter-seed` provides the following features:

- Developed using boostrap-v4.1.1
- angular-v7.1.2
- typescript-v3.1.3
- ngx-rocket/scripts-v3.0.0
- angular/cli-v7.1.2
- Html/smacss/oscss/bembem architechture
- Conversion rule useds: 
    - codelyzer-v4.5.0
    - stylelint-v9.9.0
    - tslint-v5.11.0
    - prettier-v1.15.3
- @ng-bootstrap-v4.0.0
- @ngrx/effects-v6.1.2
- @ngrx/entity-v^6.1.2
- @ngrx/store-v6.1.2
- ngx-translate-v11.0.1
- ngx-translate/http-loader-v4.0.0
- Following the best practices.
- Ahead-of-Time compilation support.
- Official Angular i18n support.
- Production and development builds.
- Tree-Shaking production builds.
- Theme admin: [SB Admin rewritten in Angular7 and Bootstrap 4](https://github.com/start-angular/SB-Admin-BS4-Angular-6)
- Free theme on [Start Angular](https://startangular.com)

#### How to start
Note that this seed project requires node >=v8.9.0 and npm >=4.

In order to start the project use:
```
$ git clone https://github.com/ngLearns/angular-seed.git
$ cd ngLearns/angular-seed
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

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
- translation includes all file translate text offine \*.json
- theme includes: variables, themes, use smascss
- app-module is module root, includes:
  - CoreModule,
  - SharedModule,
  - AppRoutingModule,
  - RootStoreModule
- CoreModule: will import the librarys 3nd, no import in app-module.
- directive img[default] default set url = /assets/images/no-image-available.png if no set value
- Folder app will includes:
  - 1. @sample.basic includes all example basic to learn
  - 2. @sample.user-site include project user site
  - 3. @sample.admin-site include project administrator site
        - [SB-Admin-BS4-Angular-6](https://github.com/start-angular/SB-Admin-BS4-Angular-6)
  - 4. url prefix start with @sample-{folder}/project/routing
- root-state:
  -

#### Plugins

- Install some awesome dependency to my-lib

```
    npm i some-awesome-dependency --project=my-awesome-library --peer=true --dev=false
```

#### Upgrade angular to 7

```
    https://appdividend.com/2018/10/20/how-to-update-angular-cli-to-version-7/
    npm uninstall -g angular-cli
    npm cache verify
    ng update @angular/cli
    ng update @angular/core
    ng update rxjs
```
