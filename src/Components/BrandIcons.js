import React from 'react'
import Img1 from '../Resources/Brand Icons/pic1.svg'
import Img2 from '../Resources/Brand Icons/pic2.svg'
import Img3 from '../Resources/Brand Icons/pic3.svg'
import Img4 from '../Resources/Brand Icons/pic4.svg'
import Img5 from '../Resources/Brand Icons/pic5.svg'
import Img6 from '../Resources/Brand Icons/pic6.svg'
import Img7 from '../Resources/Brand Icons/pic7.svg'
import FlexGrid from './FlexGrid'
import styled from 'styled-components'


const Image = styled.img`
    width: 15%;
    height: auto;
`;

const BrandIcons = () => {
  return (
    <FlexGrid width={'70%'} gap={'4rem'}>
        <Image src={Img1} />
        <Image src={Img2} />
        <Image src={Img3} />
        <Image src={Img4} />
        <Image src={Img5} />
        <Image src={Img6} />
        <Image src={Img7} />
    </FlexGrid>
  )
}

export default BrandIcons