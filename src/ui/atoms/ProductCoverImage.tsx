interface ProductCoverImageProps {
	alt: string;
	src: string;
}

export const ProductCoverImage = ({
	alt,
	src,
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
