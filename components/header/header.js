import React from 'react';
import Link from 'next/link';

import { HeaderS, SocialBox } from '../../styles/components/header.styles';

import {
  NeueUBoldSmallText,
  NeueUBoldMediumSmallText,
  NeueLightMiniText,
} from '../../styles/typography';

const Header = () => {
  return (
    <HeaderS>
      <NeueUBoldMediumSmallText>denosaurabh.</NeueUBoldMediumSmallText>
      <SocialBox>
        <NeueLightMiniText>
          <Link href="mailto:denosaurabh@gmail.com?subject=Hello Deno!">
            <a>Gmail</a>
          </Link>
        </NeueLightMiniText>
        <NeueLightMiniText>
          <Link href="https://twitter.com/denosaurabh">
            <a>Twitter</a>
          </Link>
        </NeueLightMiniText>
        <NeueLightMiniText>
          <Link href="https://github.com/denosaurabh">
            <a>Github</a>
          </Link>
        </NeueLightMiniText>
        <NeueLightMiniText>
          <Link href="https://dribbble.com/denosaurabh">
            <a>Dribble</a>
          </Link>
        </NeueLightMiniText>
        <NeueLightMiniText>
          <Link href="https://linkedin.com/in/denosaurabh">
            <a>LinkedIn</a>
          </Link>
        </NeueLightMiniText>
      </SocialBox>
      <NeueUBoldSmallText>2020</NeueUBoldSmallText>
    </HeaderS>
  );
};

export default Header;
