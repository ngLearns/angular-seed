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