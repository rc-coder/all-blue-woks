'use client';

import TileMenu from './components/TileMenu';
import { Title } from './components/Title';
import WoksMenu from './components/WoksMenu';

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col items-center p-0 md:p-10">
      <TileMenu />
      {/* <Title>
        <h1>All blue Woks</h1>
      </Title>
      <WoksMenu /> */}
    </div>
  );
};

export default Home;
