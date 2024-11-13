import React from 'react';
import Layout from '@theme-original/Footer/Layout';
import type LayoutType from '@theme/Footer/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
    </>
  );
}
