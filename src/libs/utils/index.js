import ready from './ready'
import hackAttachShadow from './hackAttachShadow'
import hackEventListener from './hackEventListener'
import { getType, isType, isObj, isErr, isArr, isRegExp, isFunction, isUndefined, isNull } from './typeof'
import { clone, forIn, getObjKeys, mergeObj, merge, getValByPath } from './object'
import { quickSort } from './number'
import { hideDom, eachParentNode, getContainer, loadCSSText, isEditableTarget } from './dom'
import { fakeUA, userAgentMap } from './fakeUA'
import { isInIframe, isInCrossOriginFrame } from './iframe'

export {
  ready,
  hackAttachShadow,
  hackEventListener,
  getType,
  isType,
  isObj,
  isErr,
  isArr,
  isRegExp,
  isFunction,
  isUndefined,
  isNull,
  clone,
  forIn,
  getObjKeys,
  mergeObj,
  merge,
  getValByPath,
  quickSort,
  hideDom,
  loadCSSText,
  isEditableTarget,
  eachParentNode,
  getContainer,
  fakeUA,
  userAgentMap,
  isInIframe,
  isInCrossOriginFrame
}
