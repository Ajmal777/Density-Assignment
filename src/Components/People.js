import React from 'react'
import FlexGrid from './FlexGrid'
import Person from './Person'
import p1 from '../Resources/People Avatar/p1.svg'
import p2 from '../Resources/People Avatar/p2.svg'
import p3 from '../Resources/People Avatar/p3.svg'
import p4 from '../Resources/People Avatar/p4.svg'
import p5 from '../Resources/People Avatar/p5.svg'
import p6 from '../Resources/People Avatar/p6.svg'
import p7 from '../Resources/People Avatar/p7.svg'
import p8 from '../Resources/People Avatar/p8.svg'

const People = () => {
  return (
    <FlexGrid width={'70%'} gap={'4rem'}>
        <Person img={p1} name={'Utsav Somani'}/>
        <Person img={p2} name={'Aditya Nagarsheth'} designation={'Perpetual Value Partners'} />
        <Person img={p3} name={'Gokul Rajaram'} />
        <Person img={p4} name={'Sajid Rehman'} designation={'My Asia VC'} />
        <Person img={p5} name={'Arjun Sethi'} designation={'Tribe Capital'} />
        <Person img={p6} name={'Kunal Shah'} />
        <Person img={p7} name={'Sandeep Nailawal'} designation={'Polygon Labs'} />
        <Person img={p8} name={'Karn Vivek Nagpal'} />
    </FlexGrid>
  )
}

export default People