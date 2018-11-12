import { JSONSchema } from '@ngx-pwa/local-storage';
import { ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const typeCache: { [label: string]: boolean } = {};

type Predicate = (oldValues: Array<any>, newValues: Array<any>) => boolean;

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels are unique.
 *
 * @param label label
 */
export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

/**
 * Runs through every condition, compares new and old values and returns true/false depends on condition state.
 * This is used to distinct if two observable values have changed.
 *
 * @param oldValues oldValues
 * @param newValues newValues
 * @param conditions conditions
 */
export function distinctChanges(oldValues: Array<any>, newValues: Array<any>, conditions: Predicate[]): boolean {
    if (conditions.every(cond => cond(oldValues, newValues))) {
        return false;
    }
    return true;
}

/**
 * Returns true if the given value is type of Object
 *
 * @param val value
 */
export function isObject(val: any) {
    if (val === null) {
        return false;
    }

    return typeof val === 'function' || typeof val === 'object';
}

/**
 * Capitalizes the first character in given string
 *
 * @param s string
 */
export function capitalize(s: string) {
    if (!s || typeof s !== 'string') {
        return s;
    }
    return s && s[0].toUpperCase() + s.slice(1);
}

/**
 * Uncapitalizes the first character in given string
 *
 * @param s string
 */
export function uncapitalize(s: string) {
    if (!s || typeof s !== 'string') {
        return s;
    }
    return s && s[0].toLowerCase() + s.slice(1);
}

/**
 * Flattens multi dimensional object into one level deep
 *
 * @param obj object
 * @param preservePath preservePath
 */
export function flattenObject(ob: any, preservePath: boolean = false): any {
    const toReturn = {};

    for (const i in ob) {
        if (!ob.hasOwnProperty(i)) {
            continue;
        }

        if (typeof ob[i] === 'object') {
            const flatObject = flattenObject(ob[i], preservePath);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }

                const path = preservePath ? i + '.' + x : x;

                toReturn[path] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }

    return toReturn;
}

/**
 * Returns formated date based on given culture
 *
 * @param dateString dateString
 * @param culture culture
 */
export function localeDateString(dateString: string, culture: string = 'en-EN'): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(culture);
}

/**
 *
 * @param array is array
 * @param item is object
 * @param prop prop
 */
export function mergeArrayObject(array: any[], item: any, prop: string) {
    const reduced = array.find(a => a[prop] === item[prop]);
    if (reduced) {
        return array;
    } else {
        return array.concat([item]);
    }
}

/**
 *
 * Splice Object
 * @param array array
 * @param item item
 * @param prop o
 */
export function spliceObjectArray(array: any[], item: any, prop: string) {
    // get index of object with id

    // const removeIndex = array.map(function (e) { return item[prop]; }).indexOf(item[prop]);
    // if (removeIndex !== -1) { array.splice(removeIndex, 1); }
    // return array;

    // fix delete item in array
    const index = array.indexOf(item);
    console.log(index);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

/**
 *
 * @param a is object the 1
 * @param b is object the 2
 */
export function sortArrayObject(a: any, b: any) {
    return function compare(T1: any, T2: any) {
        if (T1.id < T2.id) {
            return -1;
        }
        if (T1.id > T2.id) {
            return 1;
        }
        return 0;
    };
}

export namespace browserFunction {
    /**
     *
     * @param event event
     */
    export function getToggleSelector(event: any): any {
        let elToggleNav: ElementRef;
        const path = event.path;
        if (path !== undefined) {
            // for chorme
            const elheader = path.find((item: any) => item.className === 'header-container');
            elToggleNav = elheader.children.item(2);
        } else {
            // fix for firefox
            elToggleNav = event.target.offsetParent.children.item(0).children.item(2);
        }
        return elToggleNav;
    }
}

/**
 *
 * @param jsonString string JSON parse
 */
export function tryParseJSON(jsonString: any) {
    // tslint:disable-next-line:curly
    if (!jsonString) return false;
    try {
        const ob = JSON.parse(jsonString);
        if (ob && typeof ob === 'object') {
            return ob;
        }
    } catch (e) { }
    return false;
}

export function tryParseJwt(token?: any) {
    if (!token) {
        return null;
    }
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    } catch (e) { }
    return null;
}

export function tryMapPathApi(prefixAPI?: any, urlPath?: string): string {
    if (!prefixAPI) {
        return '';
    }
    try {
        const url = urlPath || '';
        let result = `${url}?`;
        for (const property in prefixAPI) {
            if (prefixAPI.hasOwnProperty(property)) {
                result += `${property}=${prefixAPI[property]}&`;
            }
        }
        result = result.replace(/[?&]$/, '');
        return result;
    } catch (e) { }
    return '';
}

/**
 *
 * move Item To TopArr
 *
 * @export
 * @param arr arr
 * @param item item
 * @returns void
 */
export function moveItemToTopArr(arr: any, item: any): void {
    // find the current index of item:
    const index = arr
        .map(function (x: any) {
            return x.id;
        })
        .indexOf(item.id);
    if (index > -1) {
        // the identified index, and affecting 1 element(s):
        arr.splice(index, 1);
        // pushing the item string back in the array:
        // arr.unshift(item);
        arr.push(item);
    }
    return arr;
}

/**
 *
 * validate Email
 *
 * @export
 * @param FormControl formControl
 * @returns [error: string]: any
 */
export function validateEmail(formControl: FormControl): { [error: string]: any } {
    const REGEXP1 = '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)';
    const REGEXP2 = '(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])';
    const REGEXP3 = '(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
    const EMAIL_REGEXP = new RegExp(`${REGEXP1}|${REGEXP2}|${REGEXP3}`);
    return EMAIL_REGEXP.test(formControl.value) ? null : { validateEmail: { valid: false } };
}

/**
 *
 * validate numeric Required
 *
 * @export
 * @param FormControl}formControl
 * @returns [error: string: any }}
 */
export function numericRequired(formControl: FormControl): { [error: string]: any } {
    return (formControl.value && formControl.value > 0) ? null : { numericRequired: { valid: false } };
}


/**
 *
 * valdiate matching Passwords
 *
 * @export
 * @param string controlKey
 * @param string matchingControlKey
 * @returns [error: string]: any
 */
export function matchingPasswords(controlKey: string, matchingControlKey: string): { [error: string]: any } {
    return (group: FormGroup): { [key: string]: any } => {
        if (group.controls[controlKey].value !== group.controls[matchingControlKey].value) {
            return { mismatch: { valid: false } };
        }
    };
}


const stringConstructor = 'test'.constructor;
const arrayConstructor = [].constructor;
const objectConstructor = {}.constructor;

/**
 * helper getTypeObject
 *
 * @export
 * @param Object [object={}]
 * @returns string
 */
export function getTypeObject(obj: Object = {}) {
    if (obj === null || obj === {}) {
        return 'null';
    } else if (obj === undefined) {
        return 'undefined';
    } else if (obj.constructor === stringConstructor) {
        return 'String';
    } else if (obj.constructor === arrayConstructor) {
        return 'Array';
    } else if (obj.constructor === objectConstructor) {
        return 'Object';
    } else {
        return 'don\'t know';
    }
}

/**
 * helper check is Json
 *
 * @export
 * @param obj obj
 * @returns true/false
 */
export function isJson(obj: any) {
    const t = typeof obj;
    return ['boolean', 'number', 'string', 'symbol', 'function'].indexOf(t) === -1;
}

