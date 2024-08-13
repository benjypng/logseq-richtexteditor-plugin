import { BlockEntity } from '@logseq/libs/dist/LSPlugin'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'

import { MenuBar } from './components'

const RTE = ({ contentBlock }: { contentBlock: BlockEntity }) => {
  const [editorContent, setEditorContent] = useState(contentBlock.content)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: editorContent,
    onUpdate: async ({ editor }) => {
      setEditorContent(editor.getHTML())
    },
  })
  if (!editor) return null

  useEffect(() => {
    ;(async () => {
      const mainContainer = parent.document.getElementById('main-container')
      mainContainer?.click()
    })()
  })

  useEffect(() => {
    ;(async () => {
      await logseq.Editor.updateBlock(contentBlock.uuid, editorContent)
    })()
  }, [editorContent])

  return (
    <div style={{ zIndex: 999 }}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RTE
