import { useState } from 'react'
import KanbanTemp from '../components/KanbanTemp'

export default function BoardPage() {
    const [showKanban, setShowKanban] = useState(false)
    // const [showMatrix, setShowMatrix] = useState(false)
  return (
    <>
    <h1>BoardPage</h1>
    <button onClick={() => setShowKanban(!showKanban)}>Kanban Template</button>
    <button>Eisenhower Matrix Template</button>

    {showKanban ? <KanbanTemp/> : null}
    </>
  )
}
