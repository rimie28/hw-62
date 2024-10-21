import * as React from 'react';


const Home:React.FC = () => {
  return (
    <div className="Home d-flex justify-content-center align-items-center text-white"
    style={{backgroundImage: `url('/public/img/film-studio.webp')`, width: '100%', height: '100%'}}>
      <h1>Bring Your Memories to Life with Film Photography</h1>
    </div>
  )
}

export default Home;