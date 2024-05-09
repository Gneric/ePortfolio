import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button";

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
  const [editMode, setEditMode] = useState(false)
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('storedLinks'))
    if (storedLinks == null) { if (links.length == 0) { setLinks(initialLinks) }} 
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
          prefix={item.key}
          value={item.placeholder}
          url={item.url}
          editMode={editMode}
          // handleRemoveLink={handleRemoveLink}
      />
  })

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen" style={{ backgroundColor: '#171928' }} >
      <div className='font-meiryo text-8xl font-bold' style={{ color: '#f4f3f7' }}> いらっしゃいませ </div>
      <ul className='flex flex-wrap pt-12 w-8/12 justify-evenly p-0'>
        {generatedlinks}
      </ul>
      <Button className='font-bold absolute top-5 left-5' onPress={ () => setEditMode(!editMode) } color="warning">Edit Mode</Button>
      <AddButton addLink={handleAddLink} ulkey={':ggl'} url={'https://www.google.com/'} placeholder={'google'} />
    </div>
  )
}