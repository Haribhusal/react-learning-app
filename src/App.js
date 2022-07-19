import React from 'react'
import Header from './components/Header'
import MyCard from './components/MyCard'

const App = () => {
  return (
    <div>
      <div>Hello React</div>
      <Header />
      <MyCard cardTitle="This is card title of Body" url="https://picsum.photos/id/33/400/300" bodyText="card body text"></MyCard>
    </div>
  )
}

export default App