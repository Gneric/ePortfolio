import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Home() {

  const projects = [
    {
      link: 'portfolio',
      name: 'ePortfolio',
      imagealt: 'Portfolio'
    },
    {
      link: 'blankTab',
      name: 'Blank Tab',
      imagealt: 'Blank Tab'
    }
  ]

  const card = ({ link, name, imagealt, imagesrc }) => {
    return (
      <Card key={Math.random()} isPressable className="py-4" onPress={ () => { window.open(`/${link}`, '_self') }}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={imagealt}
            className="object-cover rounded-xl"
            width={270}
          />
        </CardBody>
      </Card>
    )
  }

  return ( 
    <div className="grid place-items-center h-screen w-screen bg-slate-800 text-white">
        <p className="text-4xl font-bold m-10">
          Hola, esta pagina es un trabajo en proceso, si quieres ver algun proyecto en especifico, puedes hacer click en el enlace de abajo.
        </p>
        <div className="flex w-screen flex-wrap justify-evenly">
            {
              projects.map((project) => {
                return card(project)
              })
            }       
        </div>
    </div>
  )
}

