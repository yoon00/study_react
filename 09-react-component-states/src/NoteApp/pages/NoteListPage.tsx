import type { Note } from "../api/getNote"
import NoteList from "../components/NoteList"
import './NoteListPage.css'

interface Props {
    list: Note[]
}

function NoteListPage({list}:Props) {
  return (
    <div className="NoteListPage">
        <NoteList list={list}/>
        <a href="#create-note" className="createNoteLink">노트 작성</a>
    </div>
  )
}

export default NoteListPage