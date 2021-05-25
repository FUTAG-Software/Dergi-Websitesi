import { Suspense, lazy } from 'react';
import Intro from './Intro';
import Posts from './Posts'
//import Sponsors from './Sponsors';
const Sponsors = lazy(() => import('./Sponsors'));
function Home() {
  return (
    <div className="Home">
      <div className='background'>
        <Intro />
      </div>
      <Posts />
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <Sponsors />
      </Suspense>
      
    </div>
  );
}

export default Home;