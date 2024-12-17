import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EntryForm from './EntryForm'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  return (
      <>
        <section className='heading'>
          <h1>What's on your mind, {user && user.name}?</h1>
          <p>Write your thoughts here</p>
        </section>
        <EntryForm />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn' onClick={() => navigate('/allentries')}>Check your entries</button>
        </div>
      </>
  )
}

export default Dashboard