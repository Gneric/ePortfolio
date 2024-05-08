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
    <div className="flex items-center h-screen m-auto w-screen" style={{ backgroundColor: '#171928' }} >
      <div className='block text-center w-screen'>
          <div className='font-meiryo text-8xl font-bold' style={{ color: '#f4f3f7' }}> いらっしゃいませ </div>
          <div id="linkblock">
              <div id="links">
                  <ul>{generatedlinks}</ul>
              </div>
          </div>
          <AddButton key={'addButtonBlankTab'} addLink={handleAddLink} ulkey={':ggl'} url={'https://www.google.com/'} placeholder={'google'} />
      </div>
    </div>
  )
}