// 'use client'
// import CountUp from 'react-countup'

// export default function CounterUp({ children }: any) {
// 	return (
// 		<>
// 			<CountUp enableScrollSpy={true} end={150}>
// 				{children}
// 			</CountUp>
// 		</>
// 	)
// }

'use client'
import CountUp from 'react-countup';

export default function CounterUp({ end, duration = 2, suffix = '', prefix = '' }: any) {
  return (
    <CountUp
      enableScrollSpy={true}
      end={end}
      duration={duration}
      suffix={suffix}
      prefix={prefix}
    />
  );
}

