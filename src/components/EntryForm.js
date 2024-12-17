import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../features/entries/entrySlice'
import { useNavigate } from 'react-router-dom'

const EntryForm = () => {
    const [formData, setFormData] = useState({ title: '', text: '' })
    const { title, text } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const entryData = { title, text }
        dispatch(createEntry(entryData))
        navigate('/allentries')
    }

    const onChange = e => {
        setFormData(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
      }
    

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='text' className='form-control' id='text' name='title' value={title}  placeholder='Give your entry a title' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <textarea type='text' className='form-control' id='text' name='text' value={text} placeholder='Express your ideas' onChange={onChange} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>Post</button>
                </div>
            </form>
        </section>
    )
}

export default EntryForm