import { generateHTMLForPrint } from './generate-html-for-print'

export const printContent = (html: string) => {
  const htmlForPrint = generateHTMLForPrint(html)
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)
  iframe.contentDocument?.write(htmlForPrint)
  iframe.contentDocument?.close()
  const printButton = iframe.contentDocument?.createElement('button')
  printButton?.setAttribute('onclick', 'window.print(); this.remove();')
  printButton?.click()
  setTimeout(() => {
    document.body.removeChild(iframe)
  }, 100)
}
