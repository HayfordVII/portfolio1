import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { ContentCopy } from '@mui/icons-material'

export default function Home() {
  return (
    <div className='container'>
      <div id='box1'>
        <Image src='/avatar.svg' width={220} height={175} />
      </div>
      <div id='box2'>
        <p>I'm a web developer who elabrorates in UI/UX Design.</p>
        <div className='copy-email'>
          <ContentCopy id='concopy'/> 
          <input type={'text'} value='brighthfrd@gmail.com' className='name'></input>
          
        </div>
      </div>
    </div>
  )
}
