import Person from "../components/Person"
import Pen from "../assets/25.png"
import Students from "../assets/students.webp"

export default function Home() {
	return <div class="flex flex-col w-full">
		<div class=" bg-slate-200 w-full p-20 items-center">
			<h2 class="text-center font-extrabold text-4xl">
				Мурат Салихов атындагы Самаркандек орто мектеби
			</h2>
			<p class="text-center">
				Мектеп — бул илимге-билимге, келечекке жана өлкөбүздүн өнүгүүсүнө карай салынган даңгыр жол.
			</p>
		</div>
		<div class="bg-slate-200 w-full p-2">
			<div class="flex flex-row justify-center items-center space-x-6 p-5">
				<img class="" src={Students} alt="students" />
				<div class="mt-2 text-center">
					<h3 class="text-lg font-medium">Мектептин миссиясы</h3>
					<p class="text-sm">Окутуунун заманбап техналогияларын пайдалануу  <br></br>менен кош тилдуу билим беруу аркылуу ата-энелер, <br></br>
						коомчулук менен тыгыз байланышта  <br></br>азыркы коомдо натыйжалуу иштоого жондомдуу,  <br></br>
						жашоодо оз ордун таба билген,  <br></br>ар тараптан онуккон инсанды тарбиялоо </p>
				</div>
			</div>
			<div class="flex flex-row justify-center space-x-6 items-center">
				<div class="mt-2 text-center">
					<h3 class="text-lg font-medium">МЕКТЕПТИН БААЛУУЛУКТАРЫ</h3>
					<ui>
						<li>
							Инновация
						</li>
						<li>
							Ар турдуулук
						</li>
						<li>
							Мумкунчулук
						</li>
						<li>
							Креативдуулук
						</li>
						<li>
							Чынчылдык
						</li>
					</ui>
				</div>
				<img class="" src={Students} alt="students" />
			</div>
		</div>
		<div class="bg-slate-200 w-full p-2">
			<div class="flex flex-col items-center">
				<img class="rounded-full w-12 h-12" src={Pen} alt="pen" />
				<div class="mt-2 text-center">
					<p class="text-lg font-medium">Мектеп – билим уясы
						<br></br>
						илимге-билимге, келечекке жана өлкөбүздүн өнүгүүсүнө карай салынган даңгыр жол мектептен башталат
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-full bg-slate-200">
			<div class="m-5 justify-center">
				<h2 class="text-center font-extrabold text-xl">
					Биздин администрация
				</h2>
			</div>
			<div class="mx-auto container flex flex-row justify-self-center justify-center space-x-4 w-full m-5">
				<Person name="Алиева Чынара" position="Директор"></Person>
				<Person name="Масадыкова Бусулуу" position="Зав.уч"></Person>
				<Person name="Паланчиев Тукунчу" position="Бир нерсе"></Person>
			</div>
		</div>
	</div>
}