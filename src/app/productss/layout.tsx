export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="bg-teal-100 p-10">{children}</div>;
}
