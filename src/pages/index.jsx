import Info from '@/components/info'
import Portfolio from '@/components/portfolio'

export default function Home() {
  return (
      <div className='bg-background w-screen pt-12 px-5 font-semibold flex flex-col sm:flex-col md:flex-col md:pl-16  lg:flex-row lg:px-32 lg:pt-0 '>
          <Info />
          <Portfolio />
      </div>
  )
}

