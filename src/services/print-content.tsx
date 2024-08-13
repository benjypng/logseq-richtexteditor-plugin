import { Editor } from '@tiptap/react'

export const printContent = (editor: Editor) => {
  console.log('hello')
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  iframe.contentDocument?.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial, sans-serif; }
 table {
  border-collapse: collapse;
  margin: 0;
  overflow: hidden;
  table-layout: fixed;
  width: 100%;
}
 table td,
 table th {
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  min-width: 1em;
  padding: 6px 8px;
  position: relative;
  vertical-align: top;
}
 table td > *,
 table th > * {
  margin-bottom: 0;
}
table th {
  background-color: #f5f5f5;
  font-weight: bold;
  text-align: left;
}
table .selectedCell:after {
  background: #e5e5e5;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}
table .column-resize-handle {
  background-color: #9333ea;
  bottom: -2px;
  pointer-events: none;
  position: absolute;
  right: -2px;
  top: 0;
  width: 4px;
}
.tableWrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
}
        </style>
      </head>
      <body>${editor.getHTML()}</body>
    </html>
  `)
  iframe.contentDocument?.close()

  const printButton = iframe.contentDocument?.createElement('button')
  printButton?.setAttribute('onclick', 'window.print(); this.remove();')
  printButton?.click()
  setTimeout(() => {
    document.body.removeChild(iframe)
  }, 100)
}
