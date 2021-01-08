import ready from './ready'
import attrObserver from './attrObserver'
import hackAttachShadow from './hackAttachShadow'
import hackEventListener from './hackEventListener'
import { getType, isType, isObj, isErr, isArr, isRegExp, isFunction, isUndefined, isNull } from './typeof'
import { clone, forIn, getObjKeys, mergeObj, merge, getValByPath } from './object'
import { hideDom, eachParentNode, getContainer, loadCSSText, isEditableTarget } from './dom'
import { fakeUA, userAgentMap } from './fakeUA'
import { fakeVisible, fakeHidden } from './fakeVisibilityState'
import { isInIframe, isInCrossOriginFrame } from './iframe'
import { throttle } from './throttle'

export {
  ready,
  attrObserver,
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
  hideDom,
  loadCSSText,
  isEditableTarget,
  eachParentNode,
  getContainer,
  fakeUA,
  userAgentMap,
  fakeVisible,
  fakeHidden,
  isInIframe,
  isInCrossOriginFrame,
  throttle
}
