import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import validator from "email-validator";
import Footer from "./components/Footer";

function App() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState<boolean>(true);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setError(validator.validate(e.target.value));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!error) {
			toast.error("Please provide a valid email");
		} else {
			toast.success("Thanks for subscribing!");
		}
		setEmail("");
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<article className="md:bg-no-repeat md:bg-[url('/images/bg-pattern-desktop.svg')] flex md:items-center md:justify-center flex-col w-[375px] md:flex-row-reverse md:w-[1200px]">
				<div className="">
					<img src="/images/logo.svg" alt="" className="px-6 py-10 md:hidden" />
				</div>
				<div className="">
					<img
						src="/images/hero-mobile.jpg"
						alt=""
						className="block md:hidden"
					/>
					<img
						src="/images/hero-desktop.jpg"
						alt=""
						className="hidden md:block"
					/>
				</div>
				<section className="flex md:w-[600px] flex-col items-center justify-center pt-20">
					<div className="">
						<img
							src="/images/logo.svg"
							alt=""
							className="hidden px-6 py-10 md:block md:relative md:-top-32 md:-left-32"
						/>
					</div>
					<h1 className="md:text-left text-5xl font-josefin font-[1000] text-neutral-darkGrayishRed tracking-[0.6rem] items-center text-center uppercase w-[60%] md:w-[420px] flex flex-col">
						<p className="text-primary-desaturatedRed md:w-[420px] font-thin font-josefin tracking-[0.7rem]">
							We're
						</p>
						coming soon
					</h1>
					<p className="text-center w-[90%] pt-6 text-primary-desaturatedRed md:w-[420px] md:text-left font-josefin font-semibold">
						Hello fellow shoppers! We're currently building our new fashion
						store. Add your email below to stay up-to-date with announcements
						and our launch deals.
					</p>
					<form onSubmit={handleSubmit}>
						<div className="relative flex items-center justify-center left-7">
							<input
								value={email}
								onChange={handleChange}
								type="text"
								placeholder="Email Address"
								className={`${
									!error ? "error-border" : ""
								} w-[300px] md:w-[420px] focus:outline-none placeholder:font-josefin placeholder:font-thin placeholder:text-primary-desaturatedRed h-[50px] mt-6 border-[1px] opacity-75 border-primary-desaturatedRed rounded-full px-4`}
							/>
							<button
								type="submit"
								className="relative hover:transition-all hover:shadow-2xl hover:shadow-slate-600 hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200  w-[90px] bg-gradient-to-r from-red-200 to-red-300 flex items-center justify-center h-[49px] rounded-full top-3 right-14 bg-primary-desaturatedRed "
							>
								<img src="/images/icon-arrow.svg" alt="" />
							</button>
						</div>
					</form>
				</section>
			</article>
			<Footer />
		</main>
	);
}

export default App;
