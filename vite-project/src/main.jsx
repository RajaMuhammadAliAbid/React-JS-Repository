import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit google</a> 
)

const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  <StrictMode>
  <App />
  </StrictMode>
)
