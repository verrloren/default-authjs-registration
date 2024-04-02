import { FC } from 'react'

interface ContainerProps {
	children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<div className='w-full h-full mx-10'>{children}</div>
	)
}
export default Container

