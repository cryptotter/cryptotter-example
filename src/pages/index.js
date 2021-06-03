import Image from 'next/image'

function Home() {
  return (
    <div className={'w-screen h-screen flex justify-center items-center'}>
      <Image src={'https://upload.wikimedia.org/wikipedia/ru/e/e5/Magritte_TheSonOfMan.jpg'}/>
      <div>
        hehe
      </div>
    </div>
  )
}

export default Home
