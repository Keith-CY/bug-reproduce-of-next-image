/** Add your relevant code here for the issue to reproduce */
import Image from 'next/image'
import ClothImg from './5.png'

export default function Home() {
  return (
    <main>
      <img src="/images/5.png" width="200" />
      <Image src={ClothImg} width="200" alt="cloth" />
    </main>
  )
}
