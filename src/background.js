import { remoteFunction } from './webextensionRPC'
import notify from './notify'


browser.browserAction.onClicked.addListener(handleClick)

async function handleClick(tab) {
  const freezeDry = remoteFunction('freezeDry', { tabId: tab.id })
  const html = await freezeDry()
  const filename = `${ Date.now() }-${ tab.url }.html`
  const file = new Blob([html], { type: 'text/html;charset=UTF-8' })
  await send({ file, filename })
}

// DEMO
const postEndpoint = 'http://localhost:8000/'

async function send({ file, filename }) {
  const formData = new FormData()
  formData.append('file', file, filename)
  const response = await fetch(
    postEndpoint,
    {
      method: 'POST',
      body: formData,
    }
  )
  const fileUrl = await readUrl(response)
  notify({
    "iconUrl": browser.extension.getURL("/icons/icon96.png"),
    "title": "Snapshot uploaded",
    "message": fileUrl,
    onClicked: () => browser.tabs.create({ url: fileUrl }),
  })
}

async function readUrl(response) {
  const location = response.headers.get('Location')
  if (location) {
    return location
  } else {
    // DEMO Assume plain text response containing the URL.
    const url = await response.text()
    return url
  }
}
