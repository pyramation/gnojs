# gnojs

```sh
npm install gnojs
```

Now you can import packages from the `gno` repo's protobuffers directly into TS/JS:

```js
import { abci, bank, std, tm, vm } from './proto';
```

## for developers building `gnojs`

Copy the files from the repo into `./proto`

```sh
git clone git@github.com:gnolang/gno.git
cd ./gno
export PATH="$PATH:$(go env GOPATH)/bin"
make genproto
cp -LR ./proto /path/to/gnojs/proto
code /path/to/gnojs/proto
```

Then run build and generate:

```sh
yarn proto:build
yarn proto:gen
```

