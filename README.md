# 🪰☕️ Mouchetasse `{`

[![npm version](https://badge.fury.io/js/mouchetasse.svg)](https://badge.fury.io/js/mouchetasse)

_Minimalist templating tool for TypeScript_

## Get started 

Install the package:

```
npm install mouchetasse
```

## Quick start example

- `index.ts`:

```ts
import { readFileSync } from 'fs'
import compile from 'mouchetasse'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const html = readFileSync("index.html", { encoding: "utf8" })
    const data = { name: "Dragon", hobby: "fly"}
    res.send(compile(html, data))
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
```

- `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Hello {{name}}, do you {{hobby}}?</h1>
</body>
</html>
```


## Unit tests

Run the test:

```
npm jest
```