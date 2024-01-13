'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = () => {
	const [isClick, setisClick] = useState(false);

	const ToggleNavbar = () => {
		setisClick(!isClick);
	};
	return (
		// Navbar
		<>
			<nav>
				<div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Link href="/" className="text-2xl font-medium text-black">
									Ren<span className="text-2xl text-fuchsia-400">T</span>ed
								</Link>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center space-x-4 font-medium ">
								<Link
									href="/account_auth/user_signup"
									className="text-black p-1 bg-white  border-2 border-fuchsia-300 rounded-md basline hover:bg-fuchsia-500 hover:text-white">
									Sign Up
								</Link>
								<Link
									href="/account_auth/user_signin"
									className="text-black p-1 bg-white  border-2 border-fuchsia-300 rounded-md basline hover:bg-fuchsia-500 hover:text-white">
									Sign in
								</Link>
								<Link
									href="/account_auth/agent_signup"
									className="text-black p-1 bg-white  border-2 border-fuchsia-300 rounded-md basline hover:bg-fuchsia-500 hover:text-white">
									Register an Agent
								</Link>
							</div>
						</div>

						<div className="md:hidden flex items-center">
							<button
								className="inline-flex items-center justify-center p-2 rounded text-fuchsia-500 hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
								onClick={ToggleNavbar}>
								{isClick ? (
									<svg
										className="h-6 w-6 "
										xmlns="https://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="h-6 w-6 "
										xmlns="https://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				{isClick && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-fuchsia-600 font-medium text-xl">
							<Link
								href="/account_auth/user_signup"
								className="text-black hover:bg-fuchsia-300 hover:text-white rounded-lg p-2 block">
								Login
							</Link>
							<Link
								href="/account_auth/user_signin"
								className="text-black hover:bg-fuchsia-300 hover:text-white rounded-lg p-2 block">
								Register
							</Link>
							<Link
								href="/account_auth/agent_signup"
								className="text-black hover:bg-fuchsia-300 hover:text-white rounded-lg p-2 block">
								Register an Agent
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Nav;
