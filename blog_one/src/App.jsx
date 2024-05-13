
//import "../src/icon/fontawesome-icons/css/all"

import Homepage from './pages/homepage'
import ContentRead from './pages/ContentRead';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary'


function App() {

  return (
    <HelmetProvider>
      <Helmet>

      </Helmet>

      <div>
        
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/homepage' element={<Homepage />} />
              <Route path='/posts/contentread/:postID' element={<ContentRead />} />
            </Routes>
          </div>
        </Router>
      </div>
      
      
    </HelmetProvider>
    
  )
}

export default App
