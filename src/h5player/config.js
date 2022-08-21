import localStorageProxy from 'local-storage-proxy'

const defaultConfig = {
  autoPlay: true
}

const config = localStorageProxy('_h5playerConfig_', {
  defaults: defaultConfig,
  lspReset: false,
  storageEventListener: false
})

export default config
