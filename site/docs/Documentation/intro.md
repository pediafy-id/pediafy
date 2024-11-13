---
sidebar_position: 1
---

import Tag from '@site/src/components/Tags/';

<Tag color="#FF5733">Important</Tag> information: This is an <Tag color="#3399FF">Exciting</Tag> example of custom components!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="book" label="Book" default>
    Dive into the world of knowledge with a captivating book 📚
  </TabItem>
  <TabItem value="painting" label="Painting">
    Admire the strokes of artistry on a beautiful painting 🖼️
  </TabItem>
  <TabItem value="music" label="Music">
    Let the soothing melodies of music transport you 🎶
  </TabItem>
</Tabs>

:::note

Here's some **information** with _Markdown_ styling.

:::

:::tip

Here's a **helpful tip** with _formatted text_.

:::

:::info

Here's some **useful info** presented in a clear way.

:::

:::caution

Please take **extra caution** with this important note.

:::

:::danger

This is a **dangerous situation** you need to be aware of.

:::

:::info This is a _custom title_

And you can add images as well.

![alt text](https://picsum.photos/600/400)

:::

```jsx title="Codeblock"
function Greeting(props) {
  return <p>Welcome, {props.userName}!</p>;
}

export default Greeting;
```

```jsx title="Highlight Lines"
function HighlightText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }
  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end
  return 'Nothing highlighted';
}
```

```jsx title="Line Numbers" showLineNumbers
import React from 'react';

function UserProfile(props) {
  const { username, email, isAdmin } = props;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
}

export default UserProfile;
```

```jsx title="Line Numbers with Highlight" {4,9-11} showLineNumbers
import React from 'react';

function UserProfile(props) {
  const { username, email, isAdmin } = props;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
}

export default UserProfile;

# Docs

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
