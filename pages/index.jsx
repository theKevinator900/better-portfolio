import Landing from './components/sections/Landing'
import Skills from './components/sections/Skills'
import HeadTag from './components/layout/HeadTag'
import Gallery from './components/sections/Gallery'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

const Home = () => {
  return <>
    <HeadTag />
    <Landing/>
    <div className="divider"></div>
    <Skills />
    <div className="divider"></div> 
    <Gallery />
    <div className="divider"></div>
    <Resume />
    <div className="divider"></div>
    <Contact />
  </>
}

export default Home