import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { Button, ButtonGroup, Input } from 'reactstrap';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
 */

const Home = () => {
  const ref = useRef<HTMLTextAreaElement>();

  return (
    <div className="p-1">
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      </Head>
      <Input
        type="textarea"
        innerRef={ref}
        onChange={(e) => {
           const textarea = e.target;
           textarea.style.height = `${textarea.scrollHeight}px`;
        }}
        style={{height: 'auto'}}
        className="mb-1"
      />
      <ButtonGroup style={{display: 'flex'}}>
        <Button 
          color="warning"
          onClick={async () => {
            const textarea = ref.current;
            if (!textarea) {
              return;
            }

            const text = await navigator.clipboard.readText();
            textarea.value = text;
          }}>
          Paste
        </Button>
        <Button
          color="success"
          onClick={async () => {
            const textarea = ref.current;
            if (!textarea) {
              return;
            }

            await navigator.clipboard.writeText(textarea.value);
          }}>
          Copy
        </Button>
      </ButtonGroup>
    </div>
  )
};

export default Home
