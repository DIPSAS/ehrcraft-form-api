import * as _ from "lodash";

/**
 * This function is not part of EHR Craft Form JS API. It is here just to be able to modify the output to JSON for testing purposes. 
 * @param obj 
 */
export function toJson(obj: any): string {
  return JSON.stringify(camelCaseKeys(obj), replacer, 1);
}
function replacer(key, value) {
  if (key == "val") return undefined;
  else if (_.isArray(value)) {
    if (value === null) {
      return undefined;
    } else {
      let arr: any[] = value;
      if (arr.length <= 0) {
        return undefined;
      }
    }
  } else return value;
}
function camelCaseKeys(obj: any) {
  if (!_.isObject(obj)) {
    return obj;
  } else if (_.isArray(obj)) {
    return obj.map(v => camelCaseKeys(v));
  }
  return _.reduce(
    obj,
    (r, v, k) => {
      return {
        ...r,
        [_.camelCase(k)]: camelCaseKeys(v)
      };
    },
    {}
  );
}
