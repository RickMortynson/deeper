import { FormEvent, useState, ChangeEvent, useContext } from 'react'
import { crawlUrl } from '@/network/crawlUrl'
import { ContextSearchURL } from '@/App'
import { SearchIcon } from '@heroicons/react/outline'

const SearchBar = () => {
  const [inputField, setInputField] = useState('')
  const { setUrlList } = useContext(ContextSearchURL)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    crawlUrl(inputField).then(resp => {
      console.log(resp)

      setUrlList(resp)
    })
  }

  return (
    <div className='m-auto flex w-8/12 flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex w-full self-center rounded-xl border border-skin-accent'
      >
        <input
          value={inputField}
          onInput={handleInput}
          className='h-12 flex-auto rounded-l-xl bg-skin-input px-3 text-2xl text-skin-base outline-none placeholder:text-xl placeholder:font-semibold'
          placeholder='Input URL'
        />
        <button className='rounded-r-xl bg-skin-accent transition-colors duration-300 hover:bg-skin-accentDimmed px-1'>
          <SearchIcon className='h-10 w-10 p-1' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
