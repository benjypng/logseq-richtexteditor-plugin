import { Editor } from '@tiptap/react'
import { Bold, Italic, Underline } from 'lucide-react'

export const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <Bold size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <Italic size={20} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <Underline size={20} />
      </button>
    </div>
  )
}
