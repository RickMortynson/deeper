import { FormEvent, useState, ChangeEvent } from 'react'
import { crawlUrl } from '@/network/crawlUrl'

type SearchBarProps = {
  updateUrlList: (urls: string[]) => void
  className?: string
}

const SearchBar = ({ updateUrlList, className: userClasses }: SearchBarProps) => {
  const [inputField, setInputField] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    crawlUrl(inputField).then(resp => {
      console.log(resp)

      updateUrlList(resp)
    })
  }

  return (
    <div className={`m-auto flex w-8/12 flex-col items-center justify-center ${userClasses}`}>
      <form onSubmit={handleSubmit} className='flex w-full self-center rounded-full border'>
        <input
          value={inputField}
          onInput={handleInput}
          className='h-10 flex-auto rounded-l-full bg-skin-input px-3 text-lg text-skin-base outline-none'
          placeholder='Input URL'
        />
        <button className='rounded-r-full bg-skin-accent px-8 font-avenir text-lg font-semibold'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
