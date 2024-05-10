import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button";
import { useDisclosure, Input } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import LinkLi from '@/pages/blankTab/components/LinkLi'

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
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [editMode, setEditMode] = useState(false)
  const [links, setLinks] = useState([])
  const [placeholder, setPlaceholder] = useState('')
  const [url, setUrl] = useState('')


  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('storedLinks'))
    if (storedLinks == null) { if (links.length == 0) { setLinks(initialLinks) }} 
    else { setLinks(storedLinks) }
  }, [])

  useEffect(() => {
    localStorage.setItem('storedLinks', JSON.stringify(links))
  }, [links])

  const handleAddLink = () => {
    if( links.find( item => item.url === url ) ) {return}
    else {
      let key = `:${placeholder.substring(0, 3)}`
      setLinks([...links, { "key": key, "url": url, "placeholder": placeholder }])
      setPlaceholder('')
      setUrl('')
    }
  }

  const handleRemoveLink = ({ url }) => {
    console.log('Deleting ' + url)
    const newTodos = links.filter((i) => i.url !== url)
    setLinks(newTodos)
  }

  const generatedlinks = links.map( item => {
      return <LinkLi
          key={Math.random()}
          prefix={item.key}
          value={item.placeholder}
          url={item.url}
          editMode={editMode}
          handleRemoveLink={handleRemoveLink}
      />
  })

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen" style={{ backgroundColor: '#171928' }} >
      <div className='font-meiryo text-8xl font-bold' style={{ color: '#f4f3f7' }}> いらっしゃいませ </div>
      <ul className='flex flex-wrap pt-12 w-8/12 justify-evenly p-0'>
        {generatedlinks}
      </ul>
      <div className='w-screen absolute bottom-5 text-center' >
        <Button className='font-bold m-2' onPress={ () => setEditMode(!editMode) } color="warning">Edit Mode</Button>
        <Button className='font-bold m-2' onPress={onOpen} color="success">Add Link</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
          <ModalContent className='bg-slate-800' >
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold text-white">Add Link</ModalHeader>
                <ModalBody>
                  <Input autoFocus required label="Name" placeholder="Enter the name" variant="faded" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
                  <Input required label="URL" placeholder="Enter the URL" variant="faded" value={url} onChange={(e) => setUrl(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={() => { onClose(); handleAddLink() }}>
                    Add
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}