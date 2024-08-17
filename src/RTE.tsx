import { BlockEntity } from '@logseq/libs/dist/LSPlugin'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { KeyboardEvent, useCallback, useEffect, useState } from 'react'

import { MenuBar, TableMenuBar } from './components'

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      border: {
        default: '1',
        renderHTML: (attributes) => ({
          border: attributes.border,
        }),
      },
    }
  },
})

const RTE = ({
  contentBlock,
}: {
  contentBlock: BlockEntity
  rteId: string
}) => {
  const [editorContent, setEditorContent] = useState(contentBlock.content)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      CustomTableCell,
    ],
    content: editorContent,
    onUpdate: async ({ editor }) => {
      setEditorContent(editor.getHTML())
    },
  })

  useEffect(() => {
    ;(async () => {
      await logseq.Editor.updateBlock(contentBlock.uuid, editorContent)
    })()
  }, [editorContent])

  const captureKeyboardEvent = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      // Fix for RTE capturing open brackets and tildes
      ev.stopPropagation()
    },
    [editor],
  )

  if (!editor) return null

  return (
    <div
      style={{ zIndex: 999 }}
      className="rte-container"
      onKeyDown={captureKeyboardEvent}
    >
      <div className="rte-control-group">
        <MenuBar editor={editor} />
        <TableMenuBar editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default RTE
