import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, useDisclosure } from "@nextui-org/react";

import ThemeSwitcher from '@/pages/portfolio/components/ThemeSwitcher'

export default function SettingsMenu() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <>
        <div className="flex flex-col gap-2">
            <Button onClick={onOpen} className="bg-slate-600 text-white font-bold" > Settings </Button>
            <Modal  
                id="ModalSettings"
                size="full"
                placement="bottom" 
                scrollBehavior="outside"
                isOpen={isOpen} 
                onOpenChange={onOpenChange}>
                <ModalContent className="bg-slate-600 text-white visible" >
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 font-bold">Settings</ModalHeader>
                    <ModalBody>
                        <ThemeSwitcher id="ThemeSwitcher" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onPress={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    </>
  )
}
