'use client';

import React from 'react';
import { useLenis } from 'lenis/react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';


export default function Header({ status }: { status: boolean }) {

    const lenis = useLenis();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (previous) {
            if (latest > previous) setHidden(true)
            else setHidden(false)
        }
    });

    const [hidden, setHidden ] = React.useState<boolean>(false);

    const navLinks = [
        {
            label: 'about',
            id: 'about'
        }, {
            label: 'portfolio',
            id: 'portfolio'
        }, {
            label: 'network',
            id: 'network'
        }, {
            label: "let's talk",
            id: 'lets-talk'
        }
    ];

	return (
		<motion.header
            variants={{
                vissible: {
                    y: '0%',
                    opacity: 1
                },
                hidden: {
                    y: '-100%',
                    opacity: 0
                }
            }}
            animate={hidden ? 'hidden' : 'vissible'}
            transition={{
                duration: 1,
                type: 'spring',
                damping: 15
            }}
            className='top-8 left-0 z-50 fixed w-screen h-16'
        >
			<div className='flex justify-between items-center h-full container'>
                <div></div>
                <div className='flex justify-between items-center gap-8 w-1/2'>
                    <nav className='flex justify-between items-center gap-8 w-1/2'>
                        {navLinks.map(({ label, id }, i) => {

                            const handleClick = () => {
                                const target = document.getElementById(id);
                                if (target) {
                                    lenis?.scrollTo(target, { duration: 6 })
                                }
                            }

                            return(
                                <motion.button
                                    key={i}
                                    initial={{
                                        opacity: 0,
                                        y: -100
                                    }}
                                    animate={status && {
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: i * 0.1,
                                        type: 'spring',
                                        damping: 30
                                    }}
                                    onClick={handleClick}
                                    className='font-bold text-accent text-xl'
                                >
                                    {label}
                                </motion.button>
                            )
                        })}
                    </nav>
                </div>
            </div>
		</motion.header>
	);
}
