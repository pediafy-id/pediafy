import React from 'react';
import Logo from '@theme-original/Footer/Logo';
import type LogoType from '@theme/Footer/Logo';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LogoType>;

export default function LogoWrapper(props: Props): JSX.Element {
  return (
    <>
      <Logo {...props} />
    </>
  );
}
