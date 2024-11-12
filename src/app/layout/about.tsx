'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';


export default function About() {
    const containerRef = React.useRef(null);

    
    const { scrollY, scrollYProgress } = useScroll();
    const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const springValue = useSpring(scrollYProgress, { damping: 30 });
    const y = useTransform(springValue, [0, 1], ['-25%', '50%']);

	return (
		<section id='about'>
			<div 
                ref={containerRef}
                className='relative flex lg:flex-row flex-col justify-between items-start gap-8 py-32 min-h-[50vh] container'
            >
				
                <motion.div
                    style={{ y }}
                    className='relative flex justify-center items-center w-full xl:w-1/2'
                >
                    <Image
                        src='/portrait.jpg'
                        width={488}
                        height={576}
                        alt='portrait'
                    />
                </motion.div>

				<div className='relative flex flex-col gap-8 w-full xl:w-1/2'>
					<h2 className='font-extrabold [font-size:_clamp(2.1em,5.5vw,7em)] text-accent tracking-tight'>
                        meet me
                    </h2>

                    <p className='pb-16 [font-size:_clamp(0.8em,1vw,1.6em)] leading-loose'>
                        i am misael martínez, a full stack developer & graphic
                        designer based on puerto rico. I specialize in merging
                        cutting-edge web technologies with bold design concepts,
                        creating unique, visually captivating applications.
                    </p>

                    <div className='relative'>
                        <div className='top-0 left-0 absolute h-full'>
                            <motion.div
                                style={{ height }}
                                className='bg-foreground w-px h-3'
                            />
                        </div>

                        <motion.p className='pl-16 [font-size:_clamp(0.8em,1vw,1.6em)] leading-loose'>
                            i have worked with a wide range of clients and sectors, from renowned companies to social causes, and i&apos;ve had the privilege of developing projects that reflect both the need for functional solutions and the importance of innovative design. Each new challenge is an opportunity to create something unique, and my approach is always to provide solutions that not only meet technical requirements but also capture people&apos;s attention and creativity
                        </motion.p>
                    </div>

				</div>

			</div>

            <div className='relative z-10 flex flex-col justify-center items-center bg-accent py-8 text-background overflow-hidden'>

                <h3 className='z-20 absolute font-bold [font-size:_clamp(1.2em,3vw,6em)] tracking-tight'>few things where im good at</h3>
                
                <ScrollingText 
                    words={['html', 'css', 'javascript', 'react', 'nextjs', 'typescript']}
                    direction='left'
                    />
                <ScrollingText 
                    words={['php', 'sql', 'graphql', 'ui', 'ux', '3d', 'animations']}
                    direction='right'
                    />
                <ScrollingText 
                    words={['html', 'css', 'javascript', 'react', 'nextjs', 'typescript']}
                    direction='left'
                    />
                <ScrollingText 
                    words={['php', 'sql', 'graphql', 'ui', 'ux', '3d', 'animations']}
                    direction='right'
                />

            </div>
		</section>
	);
}


const ScrollingText = ({ words, direction }: { words: string[]; direction?: 'left' | 'right' }) => {
    const { scrollYProgress } = useScroll();
    const springValue = useSpring(scrollYProgress, { damping: 60 });
    
    const x = useTransform(springValue, [0, 1], ['-10%', '10%']);
    const x2 = useTransform(springValue, [0, 1], ['10%', '-10%']);
    
    const scale = useTransform(springValue, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const gap = useTransform(springValue, [0, 0.5, 1], [20, 40, 20]);

    return (
        <div className="flex opacity-25 font-bold text-[4vw] text-foreground pointer-events-auto mix-blend-multiply">
            <motion.div
                style={{ 
                    x: direction === 'left' ? x : x2,
                    gap: `${gap}px`
                }}
                className="flex gap-16 tracking-tight"
            >
                {words.map((word, i) => (
                    <motion.span key={i} style={{ scale }}>
                        {word}
                    </motion.span>
                ))}
                {words.map((word, i) => (
                    <motion.span key={`repeat-${i}`} style={{ scale }}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};