import {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString,
  isUndefined
} from 'util';
import {FormGroup} from '@angular/forms';

export class _ {

  static max(numbers: Array<number>) {
    let max = null;
    for (let i = 0; i < numbers.length; i++) {
      max = isNull(max)
        ? numbers[i]
        : Math.max(max, numbers[i]);
    }
    return max;
  }

  static getAsNumber(value: any): number {
    if (isNumber(value)) {
      return value;
    }

    if (isString(value) && (value = value.trim()).length > 0) {
      return parseFloat(value);
    }

    return 0;
  }

  static isTrue(value: any) {
    return (value + '').trim().toLowerCase() === 'true';
  }

  static min(numbers: Array<number>) {
    let min = null;
    for  (let i = 0; i < numbers.length; i++) {
      min = isNull(min)
        ? numbers[i]
        : Math.min(min, numbers[i]);
    }
    return min;
  }

  static determinateDifference(_new, _old, list) {
    let hasChanges = false;
    for (let i = 0; i < list.length && !hasChanges; i++) {
      const newVal = _new[list[i]];
      const oldVal = _old[list[i]];

      if (isBoolean(newVal) || isBoolean(oldVal)) {
        hasChanges = Boolean(oldVal) !== Boolean(newVal);
      } else {
        if (_.isDefined(oldVal)) {
          hasChanges = oldVal !== newVal;
        } else if (_.isDefined(newVal)) {
          hasChanges = (newVal + "").trim().length > 0;
        }
      }
    }
    return hasChanges;
  }



  static sortArrayBy = function(array, sortBy, desc?: boolean)  {
    return array.sort(function(a, b) {
      const v1 = a[sortBy];
      const v2 = b[sortBy];

      if (isNullOrUndefined(v1) && isNullOrUndefined(v2)) {
        return 0;
      }

      if (isNullOrUndefined(v1)) {
        return desc ? 1 : -1;
      }

      if (isNullOrUndefined(v2)) {
        return desc ? -1 : 1;
      }

      if (v1 < v2) {
        return desc ? 1 : -1;
      } else if (v1 > v2) {
        return desc ? -1 : 1;
      } else {
        return 0;
      }
    });
  };

  static sortArrayComparedByKey(_data: Array<any>, comparingKey: string, key: string, desc: boolean): Array<any> {
    let data = _.deepClone(_data);
    let start = 0;
    for (let i = 1; i < data.length; i++) {
      if (data[start][comparingKey] === data[i][comparingKey]) {
        continue;
      }

      if (start === i - 1) {
        start = i;
        continue;
      }

      data = _.sortInRange(data, start, i - start, key, desc);
      start = i;
    }
    if (start < data.length - 1) {
      data = _.sortInRange(data, start, data.length - start, key, desc);
    }
    return data;
  }

  static sortInRange(data, start, count, key, desc) {
    data = _.deepClone(data);

    let spliced = data.splice(start, count);
    spliced = _.sortArrayBy(spliced, key, desc);
    for (let j = 0; j < spliced.length; j++) {
      data.splice(start + j, 0, spliced[j]);
    }

    return data;
  }

  /**
   * @param src - Array<any>, expect as a set unique elements
   * @param tgt - Array<any>, expect as a set unique elements
   * */
  static containsAll = function(src: Array<any>, tgt: Array<any>): boolean {
    if (!isArray(src) || !isArray(tgt)) {
      return false;
    }

    if (tgt.length < src.length) {
      return false;
    }

    for (let i = 0; i < src.length; i++) {
      let flag = false;
      for (let j = 0; j < tgt.length; j++) {
        if (tgt[j] === src[i]) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        return false;
      }
    }

    return true;
  };

  /**
   * @param src - Array<any>, expect as a set unique elements
   * @param tgt - Array<any>, expect as a set unique elements
   * */
  static containsAny = function(src: Array<any>, tgt: Array<any>) {
    if (!isArray(src) || src.length === 0) {
      return true;
    }

    for (let i = 0; i < src.length; i++) {
      for (let j = 0; j < tgt.length; j++) {
        if (tgt[j] === src[i]) {
          return true;
        }
      }
    }

    return false;
  };

  static getElementWithProperty = function(array, prop, value) {
    let result = null;
    array.some(function(element) {
      if (element[prop] === value) {
        result = element;
        return true;
      }
    });
    return result;
  };

  static getIndexOfElementWithProperty = function(array, prop, value) {
    let result = null;
    array.some(function(element, index) {
      if (element[prop] === value) {
        result = index;
        return true;
      }
    });
    return result;
  };


  static deepClone = function(obj) {
    const d = this;
    if (!_.isDefined(obj)) {
      console.warn('trying to deepClone of null or undefined');
      return obj;
    }
    if (isFunction(obj)) {
      return obj;
    }
    if (isBoolean(obj)) {
      return Boolean(obj);
    }
    if (isNumber(obj)) {
      return Number(obj);
    }
    if (isString(obj)) {
      return String(obj);
    }

    const clone = isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if ((typeof obj[key] === 'object') && obj[key] !== null && typeof obj[key].length === 'undefined') {
          const val = obj[key];
          clone[key] = !isUndefined(val) ? d.deepClone(obj[key]) : val;
        } else if (typeof obj[key] === 'object' && obj[key] !== null && typeof obj[key].length !== 'undefined') {
          clone[key] = [];
          obj[key].forEach(function(element) {
            clone[key].push(d.deepClone(element));
          });
        } else {
          clone[key] = obj[key];
        }
      }
    }
    return clone;
  };

  static equalsArraysIgnoreOrdering(arg1: Array<any>, arg2: Array<any>) {
    return _.deepEqual(arg1.sort(), arg2.sort());
  }

  static isDefined(val) {
    return !(isUndefined(val) || isNull(val) || val === "Invalid Date");
  }

  static typesIsEquals(mValue1, mValue2) {
    return (isFunction(mValue1) && isFunction(mValue2))
      || (isNumber(mValue1) && isNumber(mValue2))
      || (isString(mValue1) && isString(mValue2))
      || (isArray(mValue1) && isArray(mValue2))
      || (isUndefined(mValue1) && isUndefined(mValue2))
      || (isNull(mValue1) && isNull(mValue2))
      || (isObject(mValue1) && isObject(mValue2));
  }

  static deepEqual(mValue1, mValue2) {
    if (mValue1 === mValue2) {
      return true;
    }

    if (!_.typesIsEquals(mValue1, mValue2)) {
      return false;
    }

    if (!_.isDefined(mValue1)) {
      console.warn('trying to deepEqual of null or undefined or NaN');
      return true;
    }

    if (isFunction(mValue1)) {
      return mValue1.toString() === mValue2.toString();
    } else if (isArray(mValue1)) {
      if (mValue1.length !== mValue2.length) {
        return false;
      }
    } else if (isString(mValue1) || isNumber(mValue1)) {
      return false;
    }

    for (const sKey in mValue1) {
      const has = mValue2.hasOwnProperty(sKey);
      if (!has || (has && !_.deepEqual(mValue1[sKey], mValue2[sKey]))) {
        return false;
      }
    }
    for (const sKey in mValue2) {
      const has = mValue1.hasOwnProperty(sKey);
      if (!has || (has && !_.deepEqual(mValue1[sKey], mValue2[sKey]))) {
        return false;
      }
    }
    return true;

  }

  /**
   * Transform provided model according provided template
   * @return a new model only with fields present in the template
   * */
  static transformModelBySource(target: any, source: any) {
    const result = {};

    for (const index in source) {
      result[index] = _.isDefined(target[index]) ? target[index] : source[index];
    }

    return result;
  }

  /**
   * Extend provided model according provided template if fields are skipped
   * @return a new model only with fields present in the template
   * */
  static extendModelBySource(target: any, source: any) {
    const result = _.deepClone(target);
    const keys = Object.keys(target);

    for (const index in source) {
      if (!_.isDefined(target[index]) && !_.containsAny(keys, [index])) {
        result[index] = source[index];
      }
    }

    return result;
  }

  static getStringValue(value) {
    return _.hasText(value) ? (value + "") : "";
  }

  static hasText(value) {
    if (!_.isDefined(value)) {
      return false;
    }
    value += "";
    return value.trim().length > 0;
  }
  //
  // static hasPermissions(required: Array<PERMISSIONS>, ofUser: Array<PERMISSIONS>, checkAny?: boolean) {
  //   if (!isArray(required)) {
  //     return true;
  //   }
  //   if (!isArray(ofUser)) {
  //     return required.length === 0;
  //   }
  //   return Boolean(checkAny) ? _.containsAny(required, ofUser) : _.containsAll(required, ofUser);
  // }

  static validateForm(form: FormGroup): boolean {
    let flag = true;

    for (const index in form.controls) {
      const control = form.controls[index];
      control.updateValueAndValidity();
      if (control.disabled) {
        if (!_.isDefined(control.validator)) {
          continue;
        }
        const result = control.validator(control);
        if (_.isDefined(result)) {
          for (const errI in result) {
            if (isBoolean(result[errI]) && result[errI]) {
              flag = false;
            }
          }
        }
      } else if (!control.valid) {
        flag = false;
      }
    }

    return flag;
  }

  static refreshFormActivity(form: FormGroup, isDisabled: boolean, skipFields?: Array<string>) {
    if (!_.isDefined(form)) {
      return;
    }
    for (const controlId in form.controls) {
      if (skipFields && skipFields.indexOf(controlId) >= 0) {
        continue;
      }
      if (isDisabled) {
        form.controls[controlId].disable();
      } else {
        form.controls[controlId].enable();
      }
    }
  }

}

export class ValidateManager {
  static validatePeid(data) {
    return ValidateManager.validateByMask(data, "^\\d+\\s*\\+?$");
  }

  static validateNumber(data) {
    return ValidateManager.validateByMask(data, "^[><]?\\d+$");
  }

  static validateText(data) {
    return isString(data) && data.trim().length > 0;
  }

  static validateByMask(data: any, mask: string) {
    return new RegExp(mask).test(data);
  }
}

