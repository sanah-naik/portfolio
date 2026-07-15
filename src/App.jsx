import ProgressRule from './components/ProgressRule'
import Cover from './components/Cover'
import Contents from './components/Contents'
import Byline from './components/Byline'
import Features from './components/Features'
import Dispatches from './components/Dispatches'
import FieldNotes from './components/FieldNotes'
import Credentials from './components/Credentials'
import BackCover from './components/BackCover'

export default function App() {
  return (
    <>
      <ProgressRule />
      <Cover />
      <Contents />
      <Byline />
      <Features />
      <Dispatches />
      <FieldNotes />
      <Credentials />
      <BackCover />
    </>
  )
}
