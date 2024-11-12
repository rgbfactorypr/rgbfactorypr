import Hero from './layout/hero';
import About from './layout/about';
import Portfolio from './layout/portfolio';


export default function Home() {
	return (
		<main className='flex flex-col gap-8'>
			<Hero />
      <About />
      <Portfolio />
		</main>
	);
}
