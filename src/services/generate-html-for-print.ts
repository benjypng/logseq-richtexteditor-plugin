export const generateHTMLForPrint = (htmlStr: string) => {
  const styles = `
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0;
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
}

button {
  padding: 0.5rem;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

div[contenteditable] {
  border: 1px solid #ccc;
  min-height: 400px;
  min-width: 85vh;
  margin: 0 auto;
  padding: 0 0.5rem;
}

p {
  color: #000;
}

table {
  width: 100%;
  border: 1px solid #ccc;
}

th {
  padding: 0.2rem 0.5rem;
  border: 0;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

pre {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  overflow-x: auto;
}

blockquote {
  border-left: 4px solid #ccc;
  margin: 1rem 0;
  padding-left: 1rem;
  font-style: italic;
  color: #666;
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
