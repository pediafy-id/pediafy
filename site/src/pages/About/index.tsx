import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About us" description="About React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/About</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}