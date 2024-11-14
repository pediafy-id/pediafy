import React from 'react';
import LinkItem from '@theme-original/Footer/LinkItem';
import type LinkItemType from '@theme/Footer/LinkItem';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LinkItemType>;

export default function LinkItemWrapper(props: Props): JSX.Element {
  return (
    <>
      <LinkItem {...props} />
    </>
  );
}
