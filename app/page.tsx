import Notation from './Notation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex">
        <h1 className="text-4xl">Popular Chords</h1>
      </div>

      <div className="z-10 max-w-5xl w-full items-center flex-col justify-center text-sm lg:flex mt-4 max-w-md text-center">
        <p>If you&apos;re looking for some common chord progressions to use in your improvization or just to make yourself a more versatile musician, look no further! Below you&apos;ll find various progressions, able to be transposed into any key, with the accompanying sheet music and songs where this progression is featured.</p>

        <p className="mt-4">If you have suggestion for this list, please email <a href="mailto:help@popularchords.com">help@popularchords.com</a></p>
      </div>

      <div className="flex mt-8 progression justify-between max-w-xl text-center flex-col items-center">
        <h2 className="text-xl">The &quot;Journey&quot; Progression (I - V - vi - IV)</h2>

        <Notation notation={'X:1\nK:C\n"C"[c4e4g4]"G"[g,4b,4d4]"Am"[a,4c4e4]"F"[f,4a,4c4]\n'} />

        <p className="mt-4">I call this the Journey progression because one of the most common places you'll hear it is in Don&apos;t Stop Believin&apos; by Journey. Arguably _the_ most common progression in popular music, you'll hear this one everywhere. There's even a <a href="https://www.youtube.com/watch?v=5pidokakU4I">whole video</a> that's just a compilation of these songs stitched together.</p>

        <h3 className="text-lg mt-4">Examples</h3>

        <a href="https://www.youtube.com/watch?v=1k8craCGpgs">Don&apos;t Stop Believin&apos;, Journey</a>
        <a href="https://www.youtube.com/watch?v=QDYfEBY9NM4">Let It Be, The Beatles</a>
        <a href="https://www.youtube.com/watch?v=EkHTsc9PU2A">I'm Yours, Jason Mraz</a> 
      </div>
    </main>
  )
}
