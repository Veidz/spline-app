import Spline from '@splinetool/react-spline'
import Content from './styles/Content'
import Wrapper from './styles/Wrapper'

import IconLaptop from './assets/icon-laptop.svg'
import IconTwitter from './assets/icon-twitter.svg'
import IconYoutube from './assets/icon-youtube.svg'
import Logo from './assets/logo.svg'
import Menu from './styles/Menu'

export default function App() {
  return (
    <Wrapper>
      <Spline className='spline' scene="https://prod.spline.design/p9U9HTopRH85UbuS/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={ Logo } alt='Logo' /></li>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Download</a></li>
          <li><a href='/'>App</a></li>
          <li><a href='/'>Login</a></li>
          <li><button>Get Started</button></li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        <button>
          <img src={ IconLaptop } alt='Download' />Download for Mac
        </button>
      </Content>
    </Wrapper>
  )
}
