export default function Title({ title }: { title: string }) {
	return (
		<h2 className="text-xl md:text-xl font-bold text-gray-800 my-2">{title}</h2>
	)
}