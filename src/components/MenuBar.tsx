import { Editor } from '@tiptap/react'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Minus,
  Printer,
  Quote,
  Strikethrough,
  Underline,
} from 'lucide-react'
import { useCallback } from 'react'

import { generateHTMLForPrint } from '../services/generate-html-for-print'

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const printContent = useCallback(() => {
    const html = editor.getHTML()
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
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <Underline size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockQuote') ? 'is-active' : ''}
        >
          <Quote size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <Code size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size="1rem" />
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
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <List size="1rem" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <ListOrdered size="1rem" />
        </button>
        <button onClick={printContent}>
          <Printer size="1rem" />
        </button>
      </div>
    </div>
  )
}
