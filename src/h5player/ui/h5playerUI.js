import { parseHTML } from '../../libs/utils/html.js'

// https://shoelace.style/getting-started/installation#bundling
import shoelaceCss from './shoelace/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';


const h5playerUI = {
  init() {
    console.log('h5playerUI init', shoelaceCss)

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, shoelaceCss];
    const drawer = parseHTML(`
      <sl-drawer label="标题" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-drawer>
    `, document.body)[0];

    document.body.addEventListener('click', (e) => {
      /* 判断当前是否按需了ctrl键 */
      if (!e.ctrlKey) {
        return;
      }

      console.log('[h5playerUI][click]', e.target, drawer)
      // drawer.show();
      // drawer.hide();

      /* 切换drawer的打开关闭状态 */
      drawer.updateComplete.then(() => {
        drawer.open = !drawer.open
      })
    })
  }
}

export default h5playerUI