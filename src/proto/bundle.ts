import * as _0 from "./github.com/gnolang/gno/pkgs/bft/abci/types/abci";
import * as _1 from "./github.com/gnolang/gno/pkgs/crypto/ed25519/ed25519";
import * as _2 from "./github.com/gnolang/gno/pkgs/crypto/merkle/merkle";
import * as _3 from "./github.com/gnolang/gno/pkgs/crypto/multisig/multisig";
import * as _4 from "./github.com/gnolang/gno/pkgs/crypto/secp256k1/secp256k1";
import * as _5 from "./google/protobuf/any";
import * as _6 from "./google/protobuf/timestamp";
export const abci = { ..._0
};
export const tm = { ..._1,
  ..._2,
  ..._3,
  ..._4
};
export namespace google {
  export const protobuf = { ..._5,
    ..._6
  };
}