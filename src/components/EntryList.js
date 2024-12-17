import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEntries, reset } from '../features/entries/entrySlice'
import EntryItem from './EntryItem'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

const EntryList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { entries, isLoading, isError, message } = useSelector(state => state.entries)

    useEffect(() => {
        if (isError) console.log(message)
        dispatch(getEntries())
        return () => dispatch(reset())
    }, [navigate, isError, message, dispatch])

    return (
        isLoading ? <Spinner /> : (
            <>
                <section className='content'>
                    <button className='btn add' onClick={() => navigate('/')}>Add entry</button>
                    {entries.length > 0 && (
                        <div className='entries'>
                            {entries.map(entry => <EntryItem key={entry._id} entry={entry} />)}
                        </div>
                    )}
                </section>
            </>
        )
    )
}

export default EntryList