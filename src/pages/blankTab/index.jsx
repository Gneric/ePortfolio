import { useState, useEffect } from 'react'

import LinkLi from '@/pages/blankTab/components/LinkLi'
import AddButton from '@/pages/blankTab/components/AddButton'

var initialLinks = [
  {
    "key": ":ytb",
    "url": "https://www.youtube.com/",
    "placeholder": "Youtube"
  },
  {
    "key": ":wsp",
    "url": "https://web.whatsapp.com/",
    "placeholder": "Whatsapp"
  },
  {
    "key": ":gth",
    "url": "http://github.com",
    "placeholder": "Github"
  },
  {
    "key": ":igm",
    "url": "http://instagram.com",
    "placeholder": "Instagram"
  },
  {
    "key": ":nya",
    "url": "https://nyafilmer.gg/",
    "placeholder": "Nyafilmer"
  }
]

export default function BlankPage () {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('storedLinks'))
    if (storedLinks.length == 0 || storedLinks == null) { setLinks(initialLinks) } 
    else { setLinks(storedLinks) }
  }, [])

  useEffect(() => {
    localStorage.setItem('storedLinks', JSON.stringify(links))
  }, [links])

  const handleAddLink = ({ key, url, placeholder }) => {
    setLinks([...links, { "key": key, "url": url, "placeholder": placeholder }])
  }

  const handleRemoveLink = ({ key }) => {
    const newTodos = links.filter((i) => i.key !== key)
    setLinks(newTodos)
  }

  const generatedlinks = links.map( item => {
      return <LinkLi
          key={Math.random()}
          value={item.placeholder}
          prefix={item.key}
          url={item.url}
          textColor={'#f4f3f7'}
      />
  })

  return (
    <div className="flex flex-col justify-center h-screen w-screen" style={{ backgroundColor: '#171928' }} >
      <div className='self-center font-meiryo text-8xl font-bold' style={{ color: '#f4f3f7' }}> いらっしゃいませ </div>
      <div id="links" className='self-center pt-12 w-8/12'>
          <ul className='p-0'>
            {generatedlinks}
          </ul>
      </div>

      {/* <div className='block text-center w-screen'>
          
          
          <li>
              <a onClick={() => handleAddLink({ key: ':ggl', url:'https://www.google.com/', placeholder:'google' })} className='black-a' target='_blank'>
                  <span>:++</span>
                  <span style={{ color: '#f4f3f7' }} >Add</span>
              </a>
          </li>
      </div> */}
    </div>
  )
}