import { useDispatch } from 'react-redux'
import { deleteEntry } from '../features/entries/entrySlice'

const EntryItem = ({ entry }) => {
    const dispatch = useDispatch()

    return (
        <div className='entry'>
            <h2 className='title'>{entry.title}</h2>
            <div className='date'>{new Date(entry.createdAt).toLocaleString('en-US')}</div>
            <p className='text'>{entry.text}</p>
            <button onClick={() => dispatch(deleteEntry(entry._id))} className='close'>X</button>
        </div>
    )
}

export default EntryItem