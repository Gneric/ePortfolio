const projects = [
    {
      name: 'ePortfolio V1',
      description: 'Pagina web que que funcione como showcase para mis estudios, mis trabajos, mis habilidades y parte de mi vida con el toque que me identifica.',
      tecnologies: 'NextJS - React',
      urlDemo: '',
      urlGithub: '',
    },
    {
      name: 'Custom Blank Tab',
      description: 'Una pagina web simple pero customizable que me sirva como default al abrir una nueva pestaña, simplemente como una manera mas personalizada de usar internet.',
      tecnologies: 'NextJS - React',
      urlDemo: '/blankTab',
      urlGithub: '',
    }
]

export default function handler(req, res) {
    res.status(200).json({ projects: projects })
}