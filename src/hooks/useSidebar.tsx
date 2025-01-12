import { useState } from 'react';

const useSidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isBtnHovered, setIsBtnHovered] = useState<boolean>(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = () => setIsOpen(state => !state);
	return { isOpen, close, open, toggle, isBtnHovered, setIsBtnHovered };
};

export default useSidebar;
