import browser from 'webextension-polyfill'
import freezeDry from 'freeze-dry'

window.setTimeout(
  async () => {
    const html = await freezeDry()
    console.log(html)
  },
  1000
)
