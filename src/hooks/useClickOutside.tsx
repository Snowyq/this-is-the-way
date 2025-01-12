import { useEffect, useRef } from 'react';

export function useClickOutside(
	handler: Function,
	options = {
		listenCapturing: true,
	}
) {
	const { listenCapturing } = options;
	const ref = useRef<HTMLDivElement | null>(null);
	const exceptRef = useRef<HTMLButtonElement | null>(null);

	useEffect(
		function () {
			function handleClick(e: MouseEvent) {
				const targetElement = e.target as HTMLElement;

				if (
					ref.current &&
					!ref.current.contains(targetElement) &&
					(!exceptRef.current || !exceptRef.current.contains(targetElement))
				) {
					handler();
				}
			}

			document.addEventListener('click', handleClick, listenCapturing);

			return () =>
				document.removeEventListener('click', handleClick, listenCapturing);
		},
		[handler, listenCapturing]
	);
	return { ref, exceptRef };
}
