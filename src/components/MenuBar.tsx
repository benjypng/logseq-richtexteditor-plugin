import { Editor } from '@tiptap/react'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignLeftIcon,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  Pilcrow,
  Printer,
  Strikethrough,
} from 'lucide-react'
import { useCallback } from 'react'

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const printContent = useCallback(() => {
    // Create a hidden iframe
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    // Write content to iframe
    iframe.contentDocument?.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial, sans-serif; }
        </style>
      </head>
      <body>${editor.getHTML()}</body>
    </html>
  `)
    iframe.contentDocument?.close()

    // Create, click, and remove a fake print button
    const printButton = iframe.contentDocument?.createElement('button')
    printButton?.setAttribute('onclick', 'window.print(); this.remove();')
    printButton?.click()

    // Clean up
    setTimeout(() => document.body.removeChild(iframe), 100)
  }, [editor])

  if (!editor) return null

  return (
    <div className="rte-control-group">
      <div className="rte-button-group">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
        >
          <Heading1 size="1rem" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }
        >
          <Heading2 size="1rem" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }
        >
          <Heading3 size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <Pilcrow size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Bold size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Italic size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <Strikethrough size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'is-active' : ''}
        >
          <Highlighter size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <AlignLeft size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          }
        >
          <AlignCenter size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <AlignRight size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={
            editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          }
        >
          <AlignJustify size="1rem" />
        </button>
        <button onClick={printContent}>
          <Printer size="1rem" />
        </button>
      </div>
    </div>
  )
}
