import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='container'>
      <div id='box1'>
        <Image src='/avatar.svg' width={742.5} height={590.625} alt={"Avatar"}/>
      </div>
      <div id='box2'>
        <p>I&#39;m a web developer who elabrorates in <span id={'ux'}>UI/UX Design</span></p>
        <div className='copy-email'>
          <button id='copy_email'>brighthfrd@gmail.com</button>
        </div>
      </div>
    </div>
  )
}
