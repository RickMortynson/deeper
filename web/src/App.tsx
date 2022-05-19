import SearchBar from '@components/SearchBar'
import { useState } from 'react'

const App = () => {
  const [urlList, setUrlList] = useState([] as string[])

  return (
    <div className='auto-skin h-auto min-h-screen bg-skin-base'>
      <SearchBar updateUrlList={setUrlList} 
      
      
      
      className='' />
      {urlList.length > 0 && (
        <pre className='text-skin-base'>{JSON.stringify(urlList, null, 2)}</pre>
      )}
    </div>
  )
}

export default App
