/**
 * 有些网站开启了CSP，会导致无法使用innerHTML，所以需要使用trustedTypes
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
 * @param { String } htmlString -必选 HTML字符串
 * @returns 
 */
export function createTrustedHTML(htmlString) {
  if(window.trustedTypes && window.trustedTypes.createPolicy) {
    const policy = window.trustedTypes.createPolicy('default', {
      createHTML: (string) => string,
    });
  
    const trustedHTML = policy.createHTML(htmlString);
    console.log('[createTrustedHTML]', htmlString, trustedHTML)
  
    return trustedHTML;
  } else {
    return htmlString;
  }
}

/**
 * 解析HTML字符串，返回DOM节点数组
 * @param { String } -必选 htmlString HTML字符串
 * @param { HTMLElement } -可选 targetElement 目标元素，如果传入，则会将解析后的节点添加到该元素中
 * @returns { Array } DOM节点数组
 */
export function parseHTML(htmlString, targetElement) {
  if (typeof htmlString !== 'string') {
    throw new Error('[parseHTML] Input must be a string');
  }

  const trustedHTML = createTrustedHTML(htmlString);

  const parser = new DOMParser();
  const doc = parser.parseFromString(trustedHTML, 'text/html');
  const nodes = doc.body.childNodes;
  const result = []

  if (targetElement && targetElement.appendChild) {
    nodes.forEach(node => {
      const targetNode = node.cloneNode(true);
      targetElement.appendChild(targetNode);
      result.push(targetNode);
    });
  }

  return result.length ? result : nodes;
}
