import React from 'react';
import Links from '@theme-original/Footer/Links';
import type LinksType from '@theme/Footer/Links';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LinksType>;

export default function LinksWrapper(props: Props): JSX.Element {
  return (
    <>
      <Links {...props} />
    </>
  );
}
