'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Portfolio() {

    const { scrollYProgress } = useScroll();
    const springValue = useSpring(scrollYProgress, { damping: 60 });
    const scale = useTransform(springValue, [0, 0.5, 1], [0.8, 1.2, 0.8]);

	return (
		<section
			id='portfolio'
			className='flex flex-col gap-16 bg-black py-16 md:py-32'>
			<div className='flex flex-col gap-16 container'>
				<h3>and here are few thing i've done</h3>

				<ul className='flex flex-col gap-32'>
					<motion.li>
						<Link
							href='/portfolio/graphic-dddesign'
							className='flex flex-col justify-start items-start w-full'>
							<motion.span 
                                style={{ scale }}
                                className='[font-size:_clamp(1.5em,4vw,12rem)] leading-none'>
								web dddesign
							</motion.span>
							<div className='flex flex-col w-full'>
								<div className='flex justify-end items-center w-full text-accent overflow-hidden'>
									<span>0</span>
									<span>4</span>
								</div>
								<hr className='bg-accent border-none w-full h-px' />
							</div>
						</Link>
					</motion.li>
					<motion.li>
						<Link
							href='/portfolio/graphic-dddesign'
							className='flex flex-col w-full'>
							<motion.span 
                                style={{ scale }}
                                className='[font-size:_clamp(1.5em,4vw,12rem)] leading-none'>
								web dddevelopment
							</motion.span>
							<div className='flex flex-col'>
								<div className='flex justify-end items-center w-full text-accent overflow-hidden'>
									<span>0</span>
									<span>4</span>
								</div>
								<hr className='bg-accent border-none w-full h-px' />
							</div>
						</Link>
					</motion.li>

					<motion.li>
						<Link
							href='/portfolio/graphic-dddesign'
							className='flex flex-col w-full'>
							<motion.span 
                                style={{ scale }}
                                className='[font-size:_clamp(1.5em,4vw,12rem)] leading-none'>
								graphic dddesign
							</motion.span>
							<div className='flex flex-col'>
								<div className='flex justify-end items-center w-full text-accent overflow-hidden'>
									<span>0</span>
									<span>4</span>
								</div>
								<hr className='bg-accent border-none w-full h-px' />
							</div>
						</Link>
					</motion.li>
					<motion.li>
						<Link
							href='/portfolio/graphic-dddesign'
							className='flex flex-col w-full'>
							<motion.span 
                                style={{ scale }}
                                className='[font-size:_clamp(1.5em,4vw,12rem)] leading-none'>
								motion graphics
							</motion.span>
							<div className='flex flex-col'>
								<div className='flex justify-end items-center w-full text-accent overflow-hidden'>
									<span>0</span>
									<span>4</span>
								</div>
								<hr className='bg-accent border-none w-full h-px' />
							</div>
						</Link>
					</motion.li>
					<motion.li>
						<Link
							href='/portfolio/graphic-dddesign'
							className='flex flex-col w-full'>
							<motion.span 
                                style={{ scale }}
                                className='[font-size:_clamp(1.5em,4vw,12rem)] leading-none'>
								3d modddeling
							</motion.span>
							<div className='flex flex-col'>
								<div className='flex justify-end items-center w-full text-accent overflow-hidden'>
									<span>0</span>
									<span>4</span>
								</div>
								<hr className='bg-accent border-none w-full h-px' />
							</div>
						</Link>
					</motion.li>
				</ul>
			</div>
		</section>
	);
}
