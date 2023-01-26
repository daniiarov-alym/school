export default function Navbar() {
	return <>
		<nav class="navbar">
			<div class="container flex flex-wrap items-center justify-between mx-auto">
				<a href="http://127.0.0.1:3000/" class="flex items-center">
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-800">
						Мектеби
					</span>
				</a>
				<div class="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul class="flex flex-col p-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-slate-200 md:dark:bg-slate-200 dark:border-gray-700">
						<li>
							<a href="/home" class="resource-link" aria-current="page">
								Негизги
							</a>
						</li>
						<li>
							<a href="/about" class="resource-link">
								Жонундо
							</a>
						</li>
						<li>
							<a href="/accrediation" class="resource-link">
								Аккредитация
							</a>
						</li>
						<li>
							<a href="/people" class="resource-link">
								Мугалимдер
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</>
}