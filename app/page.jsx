import Hero from '@components/Hero/Hero';
import Cart from '@components/Cart/Cart';
import Agents from '@components/Agents/Agents';
import Agent_call from '@components/Agent_call/Agent_call';

const Home = () => {
	return (
		<main>
			<Hero />
			<Cart />
			<Agent_call />
			<Agents />
		</main>
	);
};

export default Home;
