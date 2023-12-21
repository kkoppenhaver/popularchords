import Notation from './Notation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex">
        <h1 className="text-4xl">Popular Chords</h1>
      </div>

      <div className="z-10 max-w-5xl w-full items-center flex-col justify-center text-sm lg:flex mt-4 max-w-md text-center">
        <p>If you&apos;re looking for some common chord progressions to use in your improvization or just to make yourself a more versatile musician, look no further! Below you&apos;ll find various progressions, able to be transposed into any key, with the accompanying sheet music and songs where this progression is featured.</p>

        <p className="mt-4">If you have suggestion for this list, please email <a href="mailto:help@popularchords.com">help@popularchords.com</a>. And if you want to do even more exploring with progressions, you can see which songs have a certain progression at <a href="https://www.hooktheory.com/trends">Hooktheory.com</a></p>
      </div>

      <div className="flex mt-8 progression justify-between max-w-xl text-center flex-col items-center">
        <h2 className="text-xl">The &quot;Journey&quot; Progression (I - V - vi - IV)</h2>

        <Notation notation={'X:1\nK:C\n"C"[c4e4g4]"G"[g,4b,4d4]"Am"[a,4c4e4]"F"[f,4a,4c4]\n'} />

        <p className="mt-4">I call this the Journey progression because one of the most common places you&apos;ll hear it is in Don&apos;t Stop Believin&apos; by Journey. Arguably _the_ most common progression in popular music, you&apos;ll hear this one everywhere. There&apos;s even a <a href="https://www.youtube.com/watch?v=5pidokakU4I">whole video</a> that&apos;s just a compilation of these songs stitched together.</p>

        <h3 className="text-lg mt-4">Examples</h3>

        <a href="https://www.youtube.com/watch?v=1k8craCGpgs">Don&apos;t Stop Believin&apos;, Journey</a>
        <a href="https://www.youtube.com/watch?v=QDYfEBY9NM4">Let It Be, The Beatles</a>
        <a href="https://www.youtube.com/watch?v=EkHTsc9PU2A">I&apos;m Yours, Jason Mraz</a> 
      </div>

      <div className="flex mt-8 progression justify-between max-w-xl text-center flex-col items-center">
        <h2 className="text-xl">The &quot;Walk Down&quot; Progression (I - vi - IV - V)</h2>

        <Notation notation={'X:1\nK:C\n"C"[c4e4g4]"Am"[a,4c4e4]"F"[f,4a,4c4]"G"[g,4b,4d4]\n'} />

        <p className="mt-4">This progression is recognizable right away because of the natural walking down movement of the bass line. It&apos;s often, but not always, associated with slower, sadder songs.</p>

        <h3 className="text-lg mt-4">Examples</h3>

        <a href="https://www.youtube.com/watch?v=htOTukXy84E">She&apos;s Everything, Brad Paisley</a> 
        <a href="https://youtu.be/en2D_5TzXCA?si=tOQMPA35WBWbyTRf&amp;t=58">Million Reasons, Laday Gaga</a>
        <a href="https://www.youtube.com/watch?v=fV4DiAyExN0">The Reason, Hoobastank</a>
        <small>(not the progression exactly because it has an<br />extra return to the I, but it&apos;s the same idea)</small>
      </div>

      <div className="flex mt-8 progression justify-between max-w-xl text-center flex-col items-center">
        <h2 className="text-xl">Deceptive Cadence (I - iv - IV - V - vi - V - I)</h2>

        <Notation notation={'X:1\nK:C\n"C"[c4e4g4]"Am"[a,4c4e4]"F"[f,4a,4c4]"G"[g,4b,4d4]"Am"[a,4c4e4]"G"[g,4b,4d4]"C"[c4e4g4]\n'} />

        <p className="mt-4">Similar to the walk down progression, but useful in most any progression really, when you have a V chord (G in the key of C for example) and you&apos;re not quite ready to end the progression, you can move it up to the vi (Am in the key of C). Because everyone expects the V chord to resolve to the I, this is considered &quot;deceptive&quot;.</p>
      </div>

      <div className="flex mt-8 progression justify-between max-w-xl text-center flex-col items-center">
        <h2 className="text-xl">The &quot;Starts on 4&quot; (IV - V - I - vi)</h2>

        <Notation notation={'X:1\nK:C\n"F"[f,4a,4c4]"G"[g,4b,4d4]"C"[c4e4g4]"Am"[a,4c4e4]\n'} />

        <p className="mt-4">If you want a chord progression that already has a bit of tension in it rather than starting on the root of the key, this one is a great choice.</p>

        <h3 className="text-lg mt-4">Examples</h3>

        <a href="https://www.youtube.com/watch?v=PgRafRp-P-o">Walking in Memphis, Marc Cohn</a> 
        <a href="https://youtu.be/WziA88-n02k?si=Yem7NEnkp7s7RYwv&amp;t=21">Unwell, Matchbox Twenty (in the verse)</a>
        <a href="https://youtu.be/AOPMlIIg_38?si=u0w6tjXTeuWL6LuI&amp;t=34">Boom Clap, Charli XCX</a>
      </div>
    </main>
  )
}
