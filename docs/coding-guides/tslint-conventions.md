### install config package.json
```
    "devDependencies": {
        ...
        "stylelint": "~9.6.0",
        "stylelint-config-recommended-scss": "~3.2.0",
        "stylelint-config-standard": "~18.2.0",
        "stylelint-scss": "~3.3.0",

        "prettier": "^1.14.0",
        "tslint-config-prettier": "^1.14.0",
        "stylelint-config-prettier": "^4.0.0",
        
        "htmlhint": "^0.10.0",
        ...
    }

    "prettier": {
        "singleQuote": true,
        "overrides": [
        {
            "files": "*.scss",
            "options": {
            "singleQuote": false
            }
        }
        ]
    }
```
### How uses
```
	stylelint \"src/**/*.scss\" --syntax scss --config .stylelintrc && htmlhint \"src\" --config .htmlhintrc
```