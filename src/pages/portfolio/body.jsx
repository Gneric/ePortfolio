import ScrollNavBar from "@/components/Portfolio/ScrollNavBar"

export default function Body() {
  return (
    <main className='flex flex-col bg-slate-100'>
      <ScrollNavBar />

      <section id="Experience" className="w-full h-[100vh] bg-slate-500">
        <p>Huh, there is supposed to be something here. Weird.</p>
      </section>

      <section id="Abilities" className="w-full h-[100vh] bg-slate-500">
        <p>Another one?!</p>
      </section>


    </main>
  )
}