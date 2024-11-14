import React from 'react';
import MultiColumn from '@theme-original/Footer/Links/MultiColumn';
import type MultiColumnType from '@theme/Footer/Links/MultiColumn';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof MultiColumnType>;

export default function MultiColumnWrapper(props: Props): JSX.Element {
  return (
    <>
      <MultiColumn {...props} />
    </>
  );
}
