'use client'
import CountUp from 'react-countup'

export default function CounterUp({ children }: any) {
	return (
		<>
			<CountUp enableScrollSpy={true} end={150}>
				{children}
			</CountUp>
		</>
	)
}
