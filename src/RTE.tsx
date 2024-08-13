import { BlockEntity } from '@logseq/libs/dist/LSPlugin'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'

import { MenuBar } from './components'

const RTE = ({ contentBlock }: { contentBlock: BlockEntity }) => {
  const [editorContent, setEditorContent] = useState(contentBlock.content)

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: editorContent,
    onUpdate: async ({ editor }) => {
      setEditorContent(editor.getHTML())
    },
  })
  if (!editor) return null

  useEffect(() => {
    ;(async () => {
      await logseq.Editor.updateBlock(contentBlock.uuid, editorContent)
    })()
  }, [editorContent])

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RTE
