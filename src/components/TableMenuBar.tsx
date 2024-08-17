import { Editor } from '@tiptap/react'
import {
  BetweenHorizonalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Grid2x2X,
  Table,
} from 'lucide-react'

export const TableMenuBar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="rte-button-group">
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        <Table size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <BetweenHorizonalEnd size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <BetweenHorizontalStart size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <BetweenVerticalEnd size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <BetweenVerticalStart size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        <BetweenVerticalStart size="1rem" />
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        disabled={!editor.can().deleteRow()}
      >
        Delete row
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        disabled={!editor.can().deleteColumn()}
      >
        Delete column
      </button>

      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        disabled={!editor.can().deleteTable()}
      >
        <Grid2x2X size="1rem" />
      </button>
    </div>
  )
}
