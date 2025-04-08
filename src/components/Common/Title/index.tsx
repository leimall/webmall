export default function Title({ title }: { title: string }) {
	return (
		<h2 className="text-xl md:text-xl font-bold text-gray-800 mt-10">{title}</h2>
	)
}