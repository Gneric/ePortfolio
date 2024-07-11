import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/button";
import { useDisclosure, Input } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import LinkLi from '@/components/blankTab/LinkLi'

var initialLinks = [
  {
    "key": Math.random() * 10 ** 17,
    "prefix": ":you",
    "url": "https://www.youtube.com/",
    "placeholder": "Youtube"
  },
  {
    "key": Math.random()  * 10 ** 17,
    "prefix": ":wha",
    "url": "https://web.whatsapp.com/",
    "placeholder": "Whatsapp"
  },
  {
    "key": Math.random()  * 10 ** 17,
    "prefix": ":gth",
    "url": "https://github.com",
    "placeholder": "Github"
  },
  {
    "key": Math.random()  * 10 ** 17,
    "prefix": ":nya",
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
  const [itemKey, setItemKey] = useState('')
  const [initialLoad, setInitialLoad] = useState(true)


  useEffect(() => {
    if (initialLoad) {
      const storedLinks = JSON.parse(localStorage.getItem('storedLinks'))
      if (storedLinks == null) { setLinks(initialLinks) }
      else { setLinks(storedLinks) }
      setInitialLoad(false)
    }
  }, [initialLoad])

  const handleSubmitModal = () => {
    if ( editMode ) {
      const itemFound = links.find((i) => i.key == itemKey )
      itemFound.url = url
      itemFound.placeholder = placeholder
      setPlaceholder('')
      setUrl('')
      setItemKey('')
    } else {
      if( links.find((i) => i.url == url ) == null ) {
        console.log('Adding link')
        let prefix = `:${placeholder.substring(0, 3)}`
        setLinks([...links, { "key": Math.random() * 10 ** 17, "prefix": prefix, "url": url, "placeholder": placeholder }])
        setPlaceholder('')
        setUrl('')
      }
    }
  }

  function handleOnOpenChange() {
    if( editMode ) {
      setPlaceholder('')
      setUrl('')
    }
    onOpenChange()
  }

  const handleRemoveLink = ({ itemKey }) => {
    const newTodos = links.filter((i) => i.key !== itemKey)
    console.log(newTodos)
    setLinks(newTodos)
  }

  const handleEditLink = ({ itemKey }) => {
    const foundLink = links.find((i) => i.key === itemKey)
    setPlaceholder(foundLink.placeholder)
    setUrl(foundLink.url)
    setItemKey(itemKey)
    onOpen()
  }

  const generatedlinks = links.map( item => {
      return <LinkLi
          key={item.key}
          itemKey={item.key}
          prefix={item.prefix}
          placeholder={item.placeholder}
          url={item.url}
          editMode={editMode}
          handleRemoveLink={handleRemoveLink}
          handleEditLink={handleEditLink}
      />
  })

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen" style={{ backgroundColor: '#171928' }} >
      <div className='font-meiryo text-4xl xs:text-4xl md:text-6xl lg:text-8xl font-bold' style={{ color: '#f4f3f7' }}>
        おいらっしゃいませ 
      </div>
      <ul className='flex flex-wrap pt-12 w-8/12 justify-evenly p-0'>
        {generatedlinks}
      </ul>
      <div className='w-screen absolute bottom-5 text-center' >

        <Button className='font-bold m-2' onPress={ () => setEditMode(!editMode) } color="warning">Edit Mode</Button>
        <Button className='font-bold m-2' onPress={onOpen} color="success" isDisabled={ editMode ? true : false } >Add Link</Button>


        <Modal placement="bottom" isOpen={isOpen} onOpenChange={handleOnOpenChange}>
          <ModalContent className='bg-slate-800' >
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold text-white">Add Link</ModalHeader>
                <ModalBody>
                  <Input
                    classNames={{
                      inputWrapper: 'cursor-text',
                      input: 'cursor-text'
                    }}
                    autoFocus
                    required 
                    label="Name"
                    placeholder="Enter the name" 
                    variant="flat" 
                    value={placeholder} 
                    onChange={(e) => setPlaceholder(e.target.value)} 
                  />
                  <Input
                    classNames={{
                      inputWrapper: 'cursor-text',
                      input: 'cursor-text'
                    }}
                    required 
                    label="URL" 
                    placeholder="Enter the URL" 
                    variant="flat" 
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">https://</span>
                      </div>
                    }
                    value={url} onChange={(e) => setUrl(e.target.value)} 
                  />
                </ModalBody>
                <ModalFooter>
                  <Button 
                    color="primary" 
                    onPress={() => { 
                      handleSubmitModal()
                      onClose() 
                    }}>
                      { editMode ? 'Edit' : 'Add' } 
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