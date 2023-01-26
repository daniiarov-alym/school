import Icon from "../assets/person-icon.png"

export default function Person({ name, position }) {
	return <div class="p-6 rounded-md border border-gray-300 flex flex-col items-center">
		<img class="rounded-full w-12 h-12" src={Icon}alt="person-icon" />
		<div class="mt-2 text-center">
			<h3 class="text-lg font-medium">{name}</h3>
			<p class="text-sm">{position}</p>
		</div>
	</div>
}