import { Link } from "@nextui-org/react";

export default function Linkli({ itemKey, prefix, placeholder, url, editMode, handleRemoveLink, handleEditLink }) {
  const handlePrefixOnPress = () => {
    if (editMode) {
      handleRemoveLink({ itemKey })
    }
  }

  const handleContentOnPress = () => {
    if (editMode) {
      console.log('Editing ' + url)
      handleEditLink({ itemKey })
    } else {
      console.log('Opening ' + url)
      window.location.href = url;
    }
  }

  return (
      <li className='inline-block font-tempesta mx-3 my-1 p-0 text-left'>
          <Link className='decoration-transparent' onPress={() => { handlePrefixOnPress() }} >
              {
                !editMode ? 
                <span className='inline-block h-12 w-14 p-3 text-black rounded-s-md bg-gray-500'>{prefix}</span> 
                  :
                <span className='h-12 w-14 p-3 text-center text-black rounded-s-md bg-red-400 :hover:bg-red-800'>x</span>
              }  
          </Link>
          <Link onPress={ () => { handleContentOnPress() } }>
            <span className='h-12 p-3 inline-block text-white rounded-e-md bg-black hover:bg-slate-400 hover:bg-opacity-10'>
                {placeholder}
            </span>
          </Link>
      </li>
  )
}
