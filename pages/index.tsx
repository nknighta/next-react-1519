import React, { useState } from 'react';
import Form from 'next/form';

export default function Home() {
  return (
    <div>
      <p>Welcome to Next.js!</p>
      <p>this App using React 19 and Nextjs 15.</p>
      <button onClick={() => alert('Hello, world!')}>Click me!</button>
      <UpdateName />
      <FormInput />
    </div>
  );
}

function UpdateName() {
  const [val, setVal] = useState("");

  const onInputValueChanged = (e) => setVal(e.target.value);
  return (
    <>
      <p>inputvalue : {val}</p>
      <input type="text" value={val} onChange={onInputValueChanged} />
    </>
  );
}

function FormInput() {
  return (
    <Form action="/search">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <p>Let's Search</p>
      <input name="q" />
    </Form>
  )
}