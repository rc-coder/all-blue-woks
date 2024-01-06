import { Title } from './components/Title';
import WoksMenu from './components/WoksMenu';

const Home = () => {
  return (
    <div className="h-full flex flex-col items-center p-10">
      <Title>
        <h1>All blue Woks</h1>
      </Title>
      <WoksMenu />
    </div>
  );
};

export default Home;
