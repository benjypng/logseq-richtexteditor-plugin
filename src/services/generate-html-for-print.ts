export const generateHTMLForPrint = (htmlStr: string) => {
  const styles = `
    body {
      font-family: Arial, sans-serif;
      line-height: 1.5;
      color: #333;
    }
    .ProseMirror {
      position: relative;
      word-wrap: break-word;
      white-space: pre-wrap;
      white-space: break-spaces;
      -webkit-font-variant-ligatures: none;
      font-variant-ligatures: none;
      font-feature-settings: "liga" 0;
    }
    .ProseMirror pre {
      white-space: pre-wrap;
    }
    .ProseMirror li {
      position: relative;
    }
    blockquote {
      border-left: 3px solid #0096bfab;
      padding-left: 10px;
      margin-left: 0;
      font-style: italic;
    }
    table {
      border-collapse: collapse;
      margin: 0;
      overflow: hidden;
      table-layout: fixed;
      width: 100%;
    }
    table td, table th {
      border: 2px solid #ced4da;
      box-sizing: border-box;
      min-width: 1em;
      padding: 3px 5px;
      position: relative;
      vertical-align: top;
    }
    table th {
      background-color: #f1f3f5;
      font-weight: bold;
      text-align: left;
    }
    pre {
      background-color: #f1f3f5;
      border-radius: 3px;
      padding: 10px;
    }
    code {
      background-color: #f1f3f5;
      border-radius: 3px;
      padding: 2px 4px;
    }
    mark {
      background-color: yellow
      color: #000;
      border-radius: 3px;
      padding: 2px 4px;
    }
    hr {
      border: none;
      border-top: 2px solid #ced4da;
      margin: 2em 0;
    }
  `

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tiptap Document</title>
      <style>${styles}</style>
    </head>
    <body>
      <div class="ProseMirror">
        ${htmlStr}
      </div>
    </body>
    </html>
  `

  return html
}
