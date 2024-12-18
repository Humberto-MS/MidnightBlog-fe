import axios from 'axios'

const API_URL = 'https://midnightblog-be-801cce91ca92.herokuapp.com/api/entries/'

const createEntry = async (entryData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.post(API_URL, entryData, config)
    return response.data
}

const getEntries = async token => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const deleteEntry = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  const response = await axios.delete(API_URL + id, config)
  return response.data
}

const entryService = { createEntry, getEntries, deleteEntry }
  
export default entryService
  