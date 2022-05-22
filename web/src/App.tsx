import NavBar from '@components/NavBar'
import { useState, createContext } from 'react'

type urlListType = {
  urlList: string[]
  setUrlList: React.Dispatch<React.SetStateAction<string[]>>
}

export const ContextSearchURL = createContext({} as urlListType)

const App = () => {
  const [urlList, setUrlList] = useState([] as string[])

  return (
    <ContextSearchURL.Provider value={{ urlList, setUrlList }}>
      <div className='auto-skin h-auto min-h-screen bg-skin-base'>
        <NavBar />
        {urlList?.length > 0 && (
          <pre className='text-skin-base'>{JSON.stringify(urlList, null, 2)}</pre>
        )}
      </div>
    </ContextSearchURL.Provider>
  )
}

export default App
