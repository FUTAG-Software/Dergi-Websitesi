import Intro from './Intro';
import Sponsors from './Sponsors';
import Posts from './Posts'

function Home() {
  return (
    <div className="Home">
      <div className='background'>
        <Intro />
      </div>
      <Posts />
      <Sponsors />
    </div>
  );
}

export default Home;