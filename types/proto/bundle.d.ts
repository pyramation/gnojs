import * as _0 from "./github.com/gnolang/gno/pkgs/bft/abci/types/abci";
import * as _1 from "./github.com/gnolang/gno/pkgs/bft/blockchain/blockchain";
import * as _2 from "./github.com/gnolang/gno/pkgs/bft/consensus/consensus";
import * as _3 from "./github.com/gnolang/gno/pkgs/bft/consensus/types/types";
import * as _4 from "./github.com/gnolang/gno/pkgs/bft/mempool/mempool";
import * as _5 from "./github.com/gnolang/gno/pkgs/bft/types/types";
import * as _6 from "./github.com/gnolang/gno/pkgs/bitarray/bitarray";
import * as _7 from "./github.com/gnolang/gno/pkgs/crypto/ed25519/ed25519";
import * as _8 from "./github.com/gnolang/gno/pkgs/crypto/hd/hd";
import * as _9 from "./github.com/gnolang/gno/pkgs/crypto/merkle/merkle";
import * as _10 from "./github.com/gnolang/gno/pkgs/crypto/multisig/multisig";
import * as _11 from "./github.com/gnolang/gno/pkgs/crypto/secp256k1/secp256k1";
import * as _12 from "./github.com/gnolang/gno/pkgs/sdk/bank/bank";
import * as _13 from "./github.com/gnolang/gno/pkgs/sdk/vm/vm";
import * as _14 from "./github.com/gnolang/gno/pkgs/std/std";
import * as _15 from "./google/protobuf/any";
import * as _16 from "./google/protobuf/duration";
import * as _17 from "./google/protobuf/timestamp";
export declare const abci: {
    RequestBase: {
        encode(_: _0.RequestBase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestBase;
        fromJSON(_: any): _0.RequestBase;
        toJSON(_: _0.RequestBase): unknown;
        fromPartial<I extends Exact<DeepPartial<_0.RequestBase>, I>>(_: I): _0.RequestBase;
    };
    RequestEcho: {
        encode(message: _0.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestEcho;
        fromJSON(object: any): _0.RequestEcho;
        toJSON(message: _0.RequestEcho): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_0.RequestEcho>, I_1>>(object: I_1): _0.RequestEcho;
    };
    RequestFlush: {
        encode(message: _0.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestFlush;
        fromJSON(object: any): _0.RequestFlush;
        toJSON(message: _0.RequestFlush): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_0.RequestFlush>, I_2>>(object: I_2): _0.RequestFlush;
    };
    RequestInfo: {
        encode(message: _0.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestInfo;
        fromJSON(object: any): _0.RequestInfo;
        toJSON(message: _0.RequestInfo): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_0.RequestInfo>, I_3>>(object: I_3): _0.RequestInfo;
    };
    RequestSetOption: {
        encode(message: _0.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestSetOption;
        fromJSON(object: any): _0.RequestSetOption;
        toJSON(message: _0.RequestSetOption): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_0.RequestSetOption>, I_4>>(object: I_4): _0.RequestSetOption;
    };
    RequestInitChain: {
        encode(message: _0.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestInitChain;
        fromJSON(object: any): _0.RequestInitChain;
        toJSON(message: _0.RequestInitChain): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_0.RequestInitChain>, I_5>>(object: I_5): _0.RequestInitChain;
    };
    RequestQuery: {
        encode(message: _0.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestQuery;
        fromJSON(object: any): _0.RequestQuery;
        toJSON(message: _0.RequestQuery): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_0.RequestQuery>, I_6>>(object: I_6): _0.RequestQuery;
    };
    RequestBeginBlock: {
        encode(message: _0.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestBeginBlock;
        fromJSON(object: any): _0.RequestBeginBlock;
        toJSON(message: _0.RequestBeginBlock): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_0.RequestBeginBlock>, I_7>>(object: I_7): _0.RequestBeginBlock;
    };
    RequestCheckTx: {
        encode(message: _0.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestCheckTx;
        fromJSON(object: any): _0.RequestCheckTx;
        toJSON(message: _0.RequestCheckTx): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_0.RequestCheckTx>, I_8>>(object: I_8): _0.RequestCheckTx;
    };
    RequestDeliverTx: {
        encode(message: _0.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestDeliverTx;
        fromJSON(object: any): _0.RequestDeliverTx;
        toJSON(message: _0.RequestDeliverTx): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_0.RequestDeliverTx>, I_9>>(object: I_9): _0.RequestDeliverTx;
    };
    RequestEndBlock: {
        encode(message: _0.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestEndBlock;
        fromJSON(object: any): _0.RequestEndBlock;
        toJSON(message: _0.RequestEndBlock): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_0.RequestEndBlock>, I_10>>(object: I_10): _0.RequestEndBlock;
    };
    RequestCommit: {
        encode(message: _0.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RequestCommit;
        fromJSON(object: any): _0.RequestCommit;
        toJSON(message: _0.RequestCommit): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_0.RequestCommit>, I_11>>(object: I_11): _0.RequestCommit;
    };
    ResponseBase: {
        encode(message: _0.ResponseBase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseBase;
        fromJSON(object: any): _0.ResponseBase;
        toJSON(message: _0.ResponseBase): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_0.ResponseBase>, I_12>>(object: I_12): _0.ResponseBase;
    };
    ResponseException: {
        encode(message: _0.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseException;
        fromJSON(object: any): _0.ResponseException;
        toJSON(message: _0.ResponseException): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_0.ResponseException>, I_13>>(object: I_13): _0.ResponseException;
    };
    ResponseEcho: {
        encode(message: _0.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseEcho;
        fromJSON(object: any): _0.ResponseEcho;
        toJSON(message: _0.ResponseEcho): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_0.ResponseEcho>, I_14>>(object: I_14): _0.ResponseEcho;
    };
    ResponseFlush: {
        encode(message: _0.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseFlush;
        fromJSON(object: any): _0.ResponseFlush;
        toJSON(message: _0.ResponseFlush): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_0.ResponseFlush>, I_15>>(object: I_15): _0.ResponseFlush;
    };
    ResponseInfo: {
        encode(message: _0.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseInfo;
        fromJSON(object: any): _0.ResponseInfo;
        toJSON(message: _0.ResponseInfo): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_0.ResponseInfo>, I_16>>(object: I_16): _0.ResponseInfo;
    };
    ResponseSetOption: {
        encode(message: _0.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseSetOption;
        fromJSON(object: any): _0.ResponseSetOption;
        toJSON(message: _0.ResponseSetOption): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_0.ResponseSetOption>, I_17>>(object: I_17): _0.ResponseSetOption;
    };
    ResponseInitChain: {
        encode(message: _0.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseInitChain;
        fromJSON(object: any): _0.ResponseInitChain;
        toJSON(message: _0.ResponseInitChain): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_0.ResponseInitChain>, I_18>>(object: I_18): _0.ResponseInitChain;
    };
    ResponseQuery: {
        encode(message: _0.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseQuery;
        fromJSON(object: any): _0.ResponseQuery;
        toJSON(message: _0.ResponseQuery): unknown;
        fromPartial<I_19 extends Exact<DeepPartial<_0.ResponseQuery>, I_19>>(object: I_19): _0.ResponseQuery;
    };
    ResponseBeginBlock: {
        encode(message: _0.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseBeginBlock;
        fromJSON(object: any): _0.ResponseBeginBlock;
        toJSON(message: _0.ResponseBeginBlock): unknown;
        fromPartial<I_20 extends Exact<DeepPartial<_0.ResponseBeginBlock>, I_20>>(object: I_20): _0.ResponseBeginBlock;
    };
    ResponseCheckTx: {
        encode(message: _0.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseCheckTx;
        fromJSON(object: any): _0.ResponseCheckTx;
        toJSON(message: _0.ResponseCheckTx): unknown;
        fromPartial<I_21 extends Exact<DeepPartial<_0.ResponseCheckTx>, I_21>>(object: I_21): _0.ResponseCheckTx;
    };
    ResponseDeliverTx: {
        encode(message: _0.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseDeliverTx;
        fromJSON(object: any): _0.ResponseDeliverTx;
        toJSON(message: _0.ResponseDeliverTx): unknown;
        fromPartial<I_22 extends Exact<DeepPartial<_0.ResponseDeliverTx>, I_22>>(object: I_22): _0.ResponseDeliverTx;
    };
    ResponseEndBlock: {
        encode(message: _0.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseEndBlock;
        fromJSON(object: any): _0.ResponseEndBlock;
        toJSON(message: _0.ResponseEndBlock): unknown;
        fromPartial<I_23 extends Exact<DeepPartial<_0.ResponseEndBlock>, I_23>>(object: I_23): _0.ResponseEndBlock;
    };
    ResponseCommit: {
        encode(message: _0.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ResponseCommit;
        fromJSON(object: any): _0.ResponseCommit;
        toJSON(message: _0.ResponseCommit): unknown;
        fromPartial<I_24 extends Exact<DeepPartial<_0.ResponseCommit>, I_24>>(object: I_24): _0.ResponseCommit;
    };
    StringError: {
        encode(message: _0.StringError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StringError;
        fromJSON(object: any): _0.StringError;
        toJSON(message: _0.StringError): unknown;
        fromPartial<I_25 extends Exact<DeepPartial<_0.StringError>, I_25>>(object: I_25): _0.StringError;
    };
    ConsensusParams: {
        encode(message: _0.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ConsensusParams;
        fromJSON(object: any): _0.ConsensusParams;
        toJSON(message: _0.ConsensusParams): unknown;
        fromPartial<I_26 extends Exact<DeepPartial<_0.ConsensusParams>, I_26>>(object: I_26): _0.ConsensusParams;
    };
    BlockParams: {
        encode(message: _0.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BlockParams;
        fromJSON(object: any): _0.BlockParams;
        toJSON(message: _0.BlockParams): unknown;
        fromPartial<I_27 extends Exact<DeepPartial<_0.BlockParams>, I_27>>(object: I_27): _0.BlockParams;
    };
    ValidatorParams: {
        encode(message: _0.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ValidatorParams;
        fromJSON(object: any): _0.ValidatorParams;
        toJSON(message: _0.ValidatorParams): unknown;
        fromPartial<I_28 extends Exact<DeepPartial<_0.ValidatorParams>, I_28>>(object: I_28): _0.ValidatorParams;
    };
    ValidatorUpdate: {
        encode(message: _0.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ValidatorUpdate;
        fromJSON(object: any): _0.ValidatorUpdate;
        toJSON(message: _0.ValidatorUpdate): unknown;
        fromPartial<I_29 extends Exact<DeepPartial<_0.ValidatorUpdate>, I_29>>(object: I_29): _0.ValidatorUpdate;
    };
    LastCommitInfo: {
        encode(message: _0.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.LastCommitInfo;
        fromJSON(object: any): _0.LastCommitInfo;
        toJSON(message: _0.LastCommitInfo): unknown;
        fromPartial<I_30 extends Exact<DeepPartial<_0.LastCommitInfo>, I_30>>(object: I_30): _0.LastCommitInfo;
    };
    VoteInfo: {
        encode(message: _0.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.VoteInfo;
        fromJSON(object: any): _0.VoteInfo;
        toJSON(message: _0.VoteInfo): unknown;
        fromPartial<I_31 extends Exact<DeepPartial<_0.VoteInfo>, I_31>>(object: I_31): _0.VoteInfo;
    };
    EventString: {
        encode(message: _0.EventString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventString;
        fromJSON(object: any): _0.EventString;
        toJSON(message: _0.EventString): unknown;
        fromPartial<I_32 extends Exact<DeepPartial<_0.EventString>, I_32>>(object: I_32): _0.EventString;
    };
    MockHeader: {
        encode(message: _0.MockHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MockHeader;
        fromJSON(object: any): _0.MockHeader;
        toJSON(message: _0.MockHeader): unknown;
        fromPartial<I_33 extends Exact<DeepPartial<_0.MockHeader>, I_33>>(object: I_33): _0.MockHeader;
    };
};
export declare const tm: {
    PubKeySecp256k1: {
        encode(message: _11.PubKeySecp256k1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PubKeySecp256k1;
        fromJSON(object: any): _11.PubKeySecp256k1;
        toJSON(message: _11.PubKeySecp256k1): unknown;
        fromPartial<I extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I, "Value">, never>>(object: I): _11.PubKeySecp256k1;
    };
    PrivKeySecp256k1: {
        encode(message: _11.PrivKeySecp256k1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PrivKeySecp256k1;
        fromJSON(object: any): _11.PrivKeySecp256k1;
        toJSON(message: _11.PrivKeySecp256k1): unknown;
        fromPartial<I_1 extends {
            Value?: Uint8Array;
        } & {
            Value?: Uint8Array;
        } & Record<Exclude<keyof I_1, "Value">, never>>(object: I_1): _11.PrivKeySecp256k1;
    };
    PubKeyMultisig: {
        encode(message: _10.PubKeyMultisig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PubKeyMultisig;
        fromJSON(object: any): _10.PubKeyMultisig;
        toJSON(message: _10.PubKeyMultisig): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_10.PubKeyMultisig>, I_2>>(object: I_2): _10.PubKeyMultisig;
    };
    ProofOp: {
        encode(message: _9.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ProofOp;
        fromJSON(object: any): _9.ProofOp;
        toJSON(message: _9.ProofOp): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_9.ProofOp>, I_3>>(object: I_3): _9.ProofOp;
    };
    Proof: {
        encode(message: _9.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Proof;
        fromJSON(object: any): _9.Proof;
        toJSON(message: _9.Proof): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_9.Proof>, I_4>>(object: I_4): _9.Proof;
    };
    SimpleProof: {
        encode(message: _9.SimpleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SimpleProof;
        fromJSON(object: any): _9.SimpleProof;
        toJSON(message: _9.SimpleProof): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_9.SimpleProof>, I_5>>(object: I_5): _9.SimpleProof;
    };
    SimpleProofNode: {
        encode(message: _9.SimpleProofNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SimpleProofNode;
        fromJSON(object: any): _9.SimpleProofNode;
        toJSON(message: _9.SimpleProofNode): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_9.SimpleProofNode>, I_6>>(object: I_6): _9.SimpleProofNode;
    };
    MERKLE_BytesList: {
        encode(message: _9.MERKLE_BytesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MERKLE_BytesList;
        fromJSON(object: any): _9.MERKLE_BytesList;
        toJSON(message: _9.MERKLE_BytesList): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_9.MERKLE_BytesList>, I_7>>(object: I_7): _9.MERKLE_BytesList;
    };
    Bip44Params: {
        encode(message: _8.Bip44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Bip44Params;
        fromJSON(object: any): _8.Bip44Params;
        toJSON(message: _8.Bip44Params): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_8.Bip44Params>, I_8>>(object: I_8): _8.Bip44Params;
    };
    PubKeyEd25519: {
        encode(message: _7.PubKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PubKeyEd25519;
        fromJSON(object: any): _7.PubKeyEd25519;
        toJSON(message: _7.PubKeyEd25519): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_7.PubKeyEd25519>, I_9>>(object: I_9): _7.PubKeyEd25519;
    };
    PrivKeyEd25519: {
        encode(message: _7.PrivKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PrivKeyEd25519;
        fromJSON(object: any): _7.PrivKeyEd25519;
        toJSON(message: _7.PrivKeyEd25519): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_7.PrivKeyEd25519>, I_10>>(object: I_10): _7.PrivKeyEd25519;
    };
    BitArray: {
        encode(message: _6.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BitArray;
        fromJSON(object: any): _6.BitArray;
        toJSON(message: _6.BitArray): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_6.BitArray>, I_11>>(object: I_11): _6.BitArray;
    };
    Proposal: {
        encode(message: _5.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Proposal;
        fromJSON(object: any): _5.Proposal;
        toJSON(message: _5.Proposal): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_5.Proposal>, I_12>>(object: I_12): _5.Proposal;
    };
    Block: {
        encode(message: _5.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Block;
        fromJSON(object: any): _5.Block;
        toJSON(message: _5.Block): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_5.Block>, I_13>>(object: I_13): _5.Block;
    };
    Header: {
        encode(message: _5.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Header;
        fromJSON(object: any): _5.Header;
        toJSON(message: _5.Header): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_5.Header>, I_14>>(object: I_14): _5.Header;
    };
    Data: {
        encode(message: _5.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Data;
        fromJSON(object: any): _5.Data;
        toJSON(message: _5.Data): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_5.Data>, I_15>>(object: I_15): _5.Data;
    };
    Commit: {
        encode(message: _5.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Commit;
        fromJSON(object: any): _5.Commit;
        toJSON(message: _5.Commit): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_5.Commit>, I_16>>(object: I_16): _5.Commit;
    };
    BlockID: {
        encode(message: _5.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BlockID;
        fromJSON(object: any): _5.BlockID;
        toJSON(message: _5.BlockID): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_5.BlockID>, I_17>>(object: I_17): _5.BlockID;
    };
    CommitSig: {
        encode(message: _5.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.CommitSig;
        fromJSON(object: any): _5.CommitSig;
        toJSON(message: _5.CommitSig): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_5.CommitSig>, I_18>>(object: I_18): _5.CommitSig;
    };
    Vote: {
        encode(message: _5.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Vote;
        fromJSON(object: any): _5.Vote;
        toJSON(message: _5.Vote): unknown;
        fromPartial<I_19 extends Exact<DeepPartial<_5.Vote>, I_19>>(object: I_19): _5.Vote;
    };
    Part: {
        encode(message: _5.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Part;
        fromJSON(object: any): _5.Part;
        toJSON(message: _5.Part): unknown;
        fromPartial<I_20 extends Exact<DeepPartial<_5.Part>, I_20>>(object: I_20): _5.Part;
    };
    PartSet: {
        encode(_: _5.PartSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.PartSet;
        fromJSON(_: any): _5.PartSet;
        toJSON(_: _5.PartSet): unknown;
        fromPartial<I_21 extends Exact<DeepPartial<_5.PartSet>, I_21>>(_: I_21): _5.PartSet;
    };
    PartSetHeader: {
        encode(message: _5.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.PartSetHeader;
        fromJSON(object: any): _5.PartSetHeader;
        toJSON(message: _5.PartSetHeader): unknown;
        fromPartial<I_22 extends Exact<DeepPartial<_5.PartSetHeader>, I_22>>(object: I_22): _5.PartSetHeader;
    };
    Validator: {
        encode(message: _5.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Validator;
        fromJSON(object: any): _5.Validator;
        toJSON(message: _5.Validator): unknown;
        fromPartial<I_23 extends Exact<DeepPartial<_5.Validator>, I_23>>(object: I_23): _5.Validator;
    };
    ValidatorSet: {
        encode(message: _5.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ValidatorSet;
        fromJSON(object: any): _5.ValidatorSet;
        toJSON(message: _5.ValidatorSet): unknown;
        fromPartial<I_24 extends Exact<DeepPartial<_5.ValidatorSet>, I_24>>(object: I_24): _5.ValidatorSet;
    };
    EventNewBlock: {
        encode(message: _5.EventNewBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventNewBlock;
        fromJSON(object: any): _5.EventNewBlock;
        toJSON(message: _5.EventNewBlock): unknown;
        fromPartial<I_25 extends Exact<DeepPartial<_5.EventNewBlock>, I_25>>(object: I_25): _5.EventNewBlock;
    };
    EventNewBlockHeader: {
        encode(message: _5.EventNewBlockHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventNewBlockHeader;
        fromJSON(object: any): _5.EventNewBlockHeader;
        toJSON(message: _5.EventNewBlockHeader): unknown;
        fromPartial<I_26 extends Exact<DeepPartial<_5.EventNewBlockHeader>, I_26>>(object: I_26): _5.EventNewBlockHeader;
    };
    EventTx: {
        encode(message: _5.EventTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventTx;
        fromJSON(object: any): _5.EventTx;
        toJSON(message: _5.EventTx): unknown;
        fromPartial<I_27 extends Exact<DeepPartial<_5.EventTx>, I_27>>(object: I_27): _5.EventTx;
    };
    EventVote: {
        encode(message: _5.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventVote;
        fromJSON(object: any): _5.EventVote;
        toJSON(message: _5.EventVote): unknown;
        fromPartial<I_28 extends Exact<DeepPartial<_5.EventVote>, I_28>>(object: I_28): _5.EventVote;
    };
    EventString: {
        encode(message: _5.EventString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventString;
        fromJSON(object: any): _5.EventString;
        toJSON(message: _5.EventString): unknown;
        fromPartial<I_29 extends Exact<DeepPartial<_5.EventString>, I_29>>(object: I_29): _5.EventString;
    };
    EventValidatorSetUpdates: {
        encode(message: _5.EventValidatorSetUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventValidatorSetUpdates;
        fromJSON(object: any): _5.EventValidatorSetUpdates;
        toJSON(message: _5.EventValidatorSetUpdates): unknown;
        fromPartial<I_30 extends Exact<DeepPartial<_5.EventValidatorSetUpdates>, I_30>>(object: I_30): _5.EventValidatorSetUpdates;
    };
    DuplicateVoteEvidence: {
        encode(message: _5.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.DuplicateVoteEvidence;
        fromJSON(object: any): _5.DuplicateVoteEvidence;
        toJSON(message: _5.DuplicateVoteEvidence): unknown;
        fromPartial<I_31 extends Exact<DeepPartial<_5.DuplicateVoteEvidence>, I_31>>(object: I_31): _5.DuplicateVoteEvidence;
    };
    MockGoodEvidence: {
        encode(message: _5.MockGoodEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MockGoodEvidence;
        fromJSON(object: any): _5.MockGoodEvidence;
        toJSON(message: _5.MockGoodEvidence): unknown;
        fromPartial<I_32 extends Exact<DeepPartial<_5.MockGoodEvidence>, I_32>>(object: I_32): _5.MockGoodEvidence;
    };
    MockRandomGoodEvidence: {
        encode(message: _5.MockRandomGoodEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MockRandomGoodEvidence;
        fromJSON(object: any): _5.MockRandomGoodEvidence;
        toJSON(message: _5.MockRandomGoodEvidence): unknown;
        fromPartial<I_33 extends Exact<DeepPartial<_5.MockRandomGoodEvidence>, I_33>>(object: I_33): _5.MockRandomGoodEvidence;
    };
    MockBadEvidence: {
        encode(message: _5.MockBadEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MockBadEvidence;
        fromJSON(object: any): _5.MockBadEvidence;
        toJSON(message: _5.MockBadEvidence): unknown;
        fromPartial<I_34 extends Exact<DeepPartial<_5.MockBadEvidence>, I_34>>(object: I_34): _5.MockBadEvidence;
    };
    TxResult: {
        encode(message: _5.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.TxResult;
        fromJSON(object: any): _5.TxResult;
        toJSON(message: _5.TxResult): unknown;
        fromPartial<I_35 extends Exact<DeepPartial<_5.TxResult>, I_35>>(object: I_35): _5.TxResult;
    };
    MockAppState: {
        encode(message: _5.MockAppState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MockAppState;
        fromJSON(object: any): _5.MockAppState;
        toJSON(message: _5.MockAppState): unknown;
        fromPartial<I_36 extends Exact<DeepPartial<_5.MockAppState>, I_36>>(object: I_36): _5.MockAppState;
    };
    VoteSet: {
        encode(_: _5.VoteSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.VoteSet;
        fromJSON(_: any): _5.VoteSet;
        toJSON(_: _5.VoteSet): unknown;
        fromPartial<I_37 extends Exact<DeepPartial<_5.VoteSet>, I_37>>(_: I_37): _5.VoteSet;
    };
    TYPES_BytesList: {
        encode(message: _5.TYPES_BytesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.TYPES_BytesList;
        fromJSON(object: any): _5.TYPES_BytesList;
        toJSON(message: _5.TYPES_BytesList): unknown;
        fromPartial<I_38 extends Exact<DeepPartial<_5.TYPES_BytesList>, I_38>>(object: I_38): _5.TYPES_BytesList;
    };
    TxMessage: {
        encode(message: _4.TxMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.TxMessage;
        fromJSON(object: any): _4.TxMessage;
        toJSON(message: _4.TxMessage): unknown;
        fromPartial<I_39 extends Exact<DeepPartial<_4.TxMessage>, I_39>>(object: I_39): _4.TxMessage;
    };
    RoundState: {
        encode(message: _3.RoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RoundState;
        fromJSON(object: any): _3.RoundState;
        toJSON(message: _3.RoundState): unknown;
        fromPartial<I_40 extends {
            Height?: string | number | import("long");
            Round?: string | number | import("long");
            Step?: number;
            StartTime?: Date;
            CommitTime?: Date;
            Validators?: {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[];
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                };
            };
            Proposal?: {
                Type?: number;
                Height?: any;
                Round?: any;
                POLRound?: any;
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Timestamp?: Date;
                Signature?: Uint8Array;
            };
            ProposalBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            };
            ProposalBlockParts?: {};
            LockedRound?: string | number | import("long");
            LockedBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            };
            LockedBlockParts?: {};
            ValidRound?: string | number | import("long");
            ValidBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            };
            ValidBlockParts?: {};
            Votes?: {};
            CommitRound?: string | number | import("long");
            LastCommit?: {};
            LastValidators?: {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[];
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                };
            };
            TriggeredTimeoutPrecommit?: boolean;
        } & {
            Height?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_40["Height"], keyof import("long")>, never>);
            Round?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_40["Round"], keyof import("long")>, never>);
            Step?: number;
            StartTime?: Date;
            CommitTime?: Date;
            Validators?: {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[];
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                };
            } & {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[] & ({
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_40["Validators"]["Validators"][number]["PubKey"], keyof _15.Any>, never>;
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & Record<Exclude<keyof I_40["Validators"]["Validators"][number], keyof _5.Validator>, never>)[] & Record<Exclude<keyof I_40["Validators"]["Validators"], keyof {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[]>, never>;
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_40["Validators"]["Proposer"]["PubKey"], keyof _15.Any>, never>;
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & Record<Exclude<keyof I_40["Validators"]["Proposer"], keyof _5.Validator>, never>;
            } & Record<Exclude<keyof I_40["Validators"], keyof _5.ValidatorSet>, never>;
            Proposal?: {
                Type?: number;
                Height?: any;
                Round?: any;
                POLRound?: any;
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Timestamp?: Date;
                Signature?: Uint8Array;
            } & {
                Type?: number;
                Height?: any;
                Round?: any;
                POLRound?: any;
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I_40["Proposal"]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_40["Proposal"]["BlockID"], keyof _5.BlockID>, never>;
                Timestamp?: Date;
                Signature?: Uint8Array;
            } & Record<Exclude<keyof I_40["Proposal"], keyof _5.Proposal>, never>;
            ProposalBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            } & {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["ProposalBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["ProposalBlock"]["Header"]["LastBlockID"], keyof _5.BlockID>, never>;
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & Record<Exclude<keyof I_40["ProposalBlock"]["Header"], keyof _5.Header>, never>;
                Data?: {
                    Txs?: Uint8Array[];
                } & {
                    Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_40["ProposalBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_40["ProposalBlock"]["Data"], "Txs">, never>;
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                } & {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["BlockID"], keyof _5.BlockID>, never>;
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[] & ({
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        } & {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof _5.BlockID>, never>;
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["Precommits"][number], keyof _5.CommitSig>, never>)[] & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"]["Precommits"], keyof {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_40["ProposalBlock"]["LastCommit"], keyof _5.Commit>, never>;
            } & Record<Exclude<keyof I_40["ProposalBlock"], keyof _5.Block>, never>;
            ProposalBlockParts?: {} & {} & Record<Exclude<keyof I_40["ProposalBlockParts"], never>, never>;
            LockedRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_40["LockedRound"], keyof import("long")>, never>);
            LockedBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            } & {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["LockedBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["LockedBlock"]["Header"]["LastBlockID"], keyof _5.BlockID>, never>;
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & Record<Exclude<keyof I_40["LockedBlock"]["Header"], keyof _5.Header>, never>;
                Data?: {
                    Txs?: Uint8Array[];
                } & {
                    Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_40["LockedBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_40["LockedBlock"]["Data"], "Txs">, never>;
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                } & {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["BlockID"], keyof _5.BlockID>, never>;
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[] & ({
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        } & {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof _5.BlockID>, never>;
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["Precommits"][number], keyof _5.CommitSig>, never>)[] & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"]["Precommits"], keyof {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_40["LockedBlock"]["LastCommit"], keyof _5.Commit>, never>;
            } & Record<Exclude<keyof I_40["LockedBlock"], keyof _5.Block>, never>;
            LockedBlockParts?: {} & {} & Record<Exclude<keyof I_40["LockedBlockParts"], never>, never>;
            ValidRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_40["ValidRound"], keyof import("long")>, never>);
            ValidBlock?: {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                };
                Data?: {
                    Txs?: Uint8Array[];
                };
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                };
            } & {
                Header?: {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & {
                    Version?: string;
                    ChainID?: string;
                    Height?: any;
                    Time?: Date;
                    NumTxs?: any;
                    TotalTxs?: any;
                    AppVersion?: string;
                    LastBlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["ValidBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["ValidBlock"]["Header"]["LastBlockID"], keyof _5.BlockID>, never>;
                    LastCommitHash?: Uint8Array;
                    DataHash?: Uint8Array;
                    ValidatorsHash?: Uint8Array;
                    NextValidatorsHash?: Uint8Array;
                    ConsensusHash?: Uint8Array;
                    AppHash?: Uint8Array;
                    LastResultsHash?: Uint8Array;
                    ProposerAddress?: string;
                } & Record<Exclude<keyof I_40["ValidBlock"]["Header"], keyof _5.Header>, never>;
                Data?: {
                    Txs?: Uint8Array[];
                } & {
                    Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_40["ValidBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_40["ValidBlock"]["Data"], "Txs">, never>;
                LastCommit?: {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[];
                } & {
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["BlockID"], keyof _5.BlockID>, never>;
                    Precommits?: {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[] & ({
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        } & {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & {
                                Total?: any;
                                Hash?: Uint8Array;
                            } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof _5.BlockID>, never>;
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["Precommits"][number], keyof _5.CommitSig>, never>)[] & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"]["Precommits"], keyof {
                        Type?: number;
                        Height?: any;
                        Round?: any;
                        BlockID?: {
                            Hash?: Uint8Array;
                            PartsHeader?: {
                                Total?: any;
                                Hash?: Uint8Array;
                            };
                        };
                        Timestamp?: Date;
                        ValidatorAddress?: string;
                        ValidatorIndex?: any;
                        Signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_40["ValidBlock"]["LastCommit"], keyof _5.Commit>, never>;
            } & Record<Exclude<keyof I_40["ValidBlock"], keyof _5.Block>, never>;
            ValidBlockParts?: {} & {} & Record<Exclude<keyof I_40["ValidBlockParts"], never>, never>;
            Votes?: {} & {} & Record<Exclude<keyof I_40["Votes"], never>, never>;
            CommitRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_40["CommitRound"], keyof import("long")>, never>);
            LastCommit?: {} & {} & Record<Exclude<keyof I_40["LastCommit"], never>, never>;
            LastValidators?: {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[];
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                };
            } & {
                Validators?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[] & ({
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_40["LastValidators"]["Validators"][number]["PubKey"], keyof _15.Any>, never>;
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & Record<Exclude<keyof I_40["LastValidators"]["Validators"][number], keyof _5.Validator>, never>)[] & Record<Exclude<keyof I_40["LastValidators"]["Validators"], keyof {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                }[]>, never>;
                Proposer?: {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & {
                    Address?: string;
                    PubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_40["LastValidators"]["Proposer"]["PubKey"], keyof _15.Any>, never>;
                    VotingPower?: any;
                    ProposerPriority?: any;
                } & Record<Exclude<keyof I_40["LastValidators"]["Proposer"], keyof _5.Validator>, never>;
            } & Record<Exclude<keyof I_40["LastValidators"], keyof _5.ValidatorSet>, never>;
            TriggeredTimeoutPrecommit?: boolean;
        } & Record<Exclude<keyof I_40, keyof _3.RoundState>, never>>(object: I_40): _3.RoundState;
    };
    HRS: {
        encode(message: _3.HRS, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.HRS;
        fromJSON(object: any): _3.HRS;
        toJSON(message: _3.HRS): unknown;
        fromPartial<I_41 extends {
            Height?: string | number | import("long");
            Round?: string | number | import("long");
            Step?: number;
        } & {
            Height?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_41["Height"], keyof import("long")>, never>);
            Round?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_41["Round"], keyof import("long")>, never>);
            Step?: number;
        } & Record<Exclude<keyof I_41, keyof _3.HRS>, never>>(object: I_41): _3.HRS;
    };
    RoundStateSimple: {
        encode(message: _3.RoundStateSimple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RoundStateSimple;
        fromJSON(object: any): _3.RoundStateSimple;
        toJSON(message: _3.RoundStateSimple): unknown;
        fromPartial<I_42 extends {
            HeightRoundStep?: string;
            StartTime?: Date;
            ProposalBlockHash?: Uint8Array;
            LockedBlockHash?: Uint8Array;
            ValidBlockHash?: Uint8Array;
            Votes?: {};
        } & {
            HeightRoundStep?: string;
            StartTime?: Date;
            ProposalBlockHash?: Uint8Array;
            LockedBlockHash?: Uint8Array;
            ValidBlockHash?: Uint8Array;
            Votes?: {} & {} & Record<Exclude<keyof I_42["Votes"], never>, never>;
        } & Record<Exclude<keyof I_42, keyof _3.RoundStateSimple>, never>>(object: I_42): _3.RoundStateSimple;
    };
    PeerRoundState: {
        encode(message: _3.PeerRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PeerRoundState;
        fromJSON(object: any): _3.PeerRoundState;
        toJSON(message: _3.PeerRoundState): unknown;
        fromPartial<I_43 extends {
            Height?: string | number | import("long");
            Round?: string | number | import("long");
            Step?: number;
            StartTime?: Date;
            Proposal?: boolean;
            ProposalBlockPartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            };
            ProposalBlockParts?: {
                Bits?: any;
                Elems?: any[];
            };
            ProposalPOLRound?: string | number | import("long");
            ProposalPOL?: {
                Bits?: any;
                Elems?: any[];
            };
            Prevotes?: {
                Bits?: any;
                Elems?: any[];
            };
            Precommits?: {
                Bits?: any;
                Elems?: any[];
            };
            LastCommitRound?: string | number | import("long");
            LastCommit?: {
                Bits?: any;
                Elems?: any[];
            };
            CatchupCommitRound?: string | number | import("long");
            CatchupCommit?: {
                Bits?: any;
                Elems?: any[];
            };
        } & {
            Height?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_43["Height"], keyof import("long")>, never>);
            Round?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_43["Round"], keyof import("long")>, never>);
            Step?: number;
            StartTime?: Date;
            Proposal?: boolean;
            ProposalBlockPartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            } & {
                Total?: any;
                Hash?: Uint8Array;
            } & Record<Exclude<keyof I_43["ProposalBlockPartsHeader"], keyof _5.PartSetHeader>, never>;
            ProposalBlockParts?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["ProposalBlockParts"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["ProposalBlockParts"], keyof _6.BitArray>, never>;
            ProposalPOLRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_43["ProposalPOLRound"], keyof import("long")>, never>);
            ProposalPOL?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["ProposalPOL"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["ProposalPOL"], keyof _6.BitArray>, never>;
            Prevotes?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["Prevotes"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["Prevotes"], keyof _6.BitArray>, never>;
            Precommits?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["Precommits"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["Precommits"], keyof _6.BitArray>, never>;
            LastCommitRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_43["LastCommitRound"], keyof import("long")>, never>);
            LastCommit?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["LastCommit"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["LastCommit"], keyof _6.BitArray>, never>;
            CatchupCommitRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_43["CatchupCommitRound"], keyof import("long")>, never>);
            CatchupCommit?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_43["CatchupCommit"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_43["CatchupCommit"], keyof _6.BitArray>, never>;
        } & Record<Exclude<keyof I_43, keyof _3.PeerRoundState>, never>>(object: I_43): _3.PeerRoundState;
    };
    HeightVoteSet: {
        encode(_: _3.HeightVoteSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.HeightVoteSet;
        fromJSON(_: any): _3.HeightVoteSet;
        toJSON(_: _3.HeightVoteSet): unknown;
        fromPartial<I_44 extends {} & {} & Record<Exclude<keyof I_44, never>, never>>(_: I_44): _3.HeightVoteSet;
    };
    EventNewRoundStep: {
        encode(message: _3.EventNewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventNewRoundStep;
        fromJSON(object: any): _3.EventNewRoundStep;
        toJSON(message: _3.EventNewRoundStep): unknown;
        fromPartial<I_45 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
            SecondsSinceStartTime?: string | number | import("long");
            LastCommitRound?: string | number | import("long");
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_45["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_45["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_45["HRS"], keyof _3.HRS>, never>;
            SecondsSinceStartTime?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_45["SecondsSinceStartTime"], keyof import("long")>, never>);
            LastCommitRound?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_45["LastCommitRound"], keyof import("long")>, never>);
        } & Record<Exclude<keyof I_45, keyof _3.EventNewRoundStep>, never>>(object: I_45): _3.EventNewRoundStep;
    };
    EventNewValidBlock: {
        encode(message: _3.EventNewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventNewValidBlock;
        fromJSON(object: any): _3.EventNewValidBlock;
        toJSON(message: _3.EventNewValidBlock): unknown;
        fromPartial<I_46 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
            BlockPartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            };
            BlockParts?: {
                Bits?: any;
                Elems?: any[];
            };
            IsCommit?: boolean;
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_46["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_46["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_46["HRS"], keyof _3.HRS>, never>;
            BlockPartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            } & {
                Total?: any;
                Hash?: Uint8Array;
            } & Record<Exclude<keyof I_46["BlockPartsHeader"], keyof _5.PartSetHeader>, never>;
            BlockParts?: {
                Bits?: any;
                Elems?: any[];
            } & {
                Bits?: any;
                Elems?: any[] & any[] & Record<Exclude<keyof I_46["BlockParts"]["Elems"], keyof any[]>, never>;
            } & Record<Exclude<keyof I_46["BlockParts"], keyof _6.BitArray>, never>;
            IsCommit?: boolean;
        } & Record<Exclude<keyof I_46, keyof _3.EventNewValidBlock>, never>>(object: I_46): _3.EventNewValidBlock;
    };
    EventNewRound: {
        encode(message: _3.EventNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventNewRound;
        fromJSON(object: any): _3.EventNewRound;
        toJSON(message: _3.EventNewRound): unknown;
        fromPartial<I_47 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            };
            ProposerIndex?: string | number | import("long");
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_47["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_47["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_47["HRS"], keyof _3.HRS>, never>;
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            } & {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I_47["Proposer"]["PubKey"], keyof _15.Any>, never>;
                VotingPower?: any;
                ProposerPriority?: any;
            } & Record<Exclude<keyof I_47["Proposer"], keyof _5.Validator>, never>;
            ProposerIndex?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I_47["ProposerIndex"], keyof import("long")>, never>);
        } & Record<Exclude<keyof I_47, keyof _3.EventNewRound>, never>>(object: I_47): _3.EventNewRound;
    };
    EventCompleteProposal: {
        encode(message: _3.EventCompleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventCompleteProposal;
        fromJSON(object: any): _3.EventCompleteProposal;
        toJSON(message: _3.EventCompleteProposal): unknown;
        fromPartial<I_48 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
            BlockID?: {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                };
            };
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_48["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_48["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_48["HRS"], keyof _3.HRS>, never>;
            BlockID?: {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                };
            } & {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                } & {
                    Total?: any;
                    Hash?: Uint8Array;
                } & Record<Exclude<keyof I_48["BlockID"]["PartsHeader"], keyof _5.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_48["BlockID"], keyof _5.BlockID>, never>;
        } & Record<Exclude<keyof I_48, keyof _3.EventCompleteProposal>, never>>(object: I_48): _3.EventCompleteProposal;
    };
    EventTimeoutPropose: {
        encode(message: _3.EventTimeoutPropose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventTimeoutPropose;
        fromJSON(object: any): _3.EventTimeoutPropose;
        toJSON(message: _3.EventTimeoutPropose): unknown;
        fromPartial<I_49 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_49["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_49["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_49["HRS"], keyof _3.HRS>, never>;
        } & Record<Exclude<keyof I_49, "HRS">, never>>(object: I_49): _3.EventTimeoutPropose;
    };
    EventTimeoutWait: {
        encode(message: _3.EventTimeoutWait, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventTimeoutWait;
        fromJSON(object: any): _3.EventTimeoutWait;
        toJSON(message: _3.EventTimeoutWait): unknown;
        fromPartial<I_50 extends {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            };
        } & {
            HRS?: {
                Height?: string | number | import("long");
                Round?: string | number | import("long");
                Step?: number;
            } & {
                Height?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_50["HRS"]["Height"], keyof import("long")>, never>);
                Round?: string | number | (import("long") & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long")) => import("long");
                    and: (other: string | number | import("long")) => import("long");
                    compare: (other: string | number | import("long")) => number;
                    comp: (other: string | number | import("long")) => number;
                    divide: (divisor: string | number | import("long")) => import("long");
                    div: (divisor: string | number | import("long")) => import("long");
                    equals: (other: string | number | import("long")) => boolean;
                    eq: (other: string | number | import("long")) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long")) => boolean;
                    gt: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                    gte: (other: string | number | import("long")) => boolean;
                    ge: (other: string | number | import("long")) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | import("long")) => boolean;
                    lt: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual: (other: string | number | import("long")) => boolean;
                    lte: (other: string | number | import("long")) => boolean;
                    le: (other: string | number | import("long")) => boolean;
                    modulo: (other: string | number | import("long")) => import("long");
                    mod: (other: string | number | import("long")) => import("long");
                    rem: (other: string | number | import("long")) => import("long");
                    multiply: (multiplier: string | number | import("long")) => import("long");
                    mul: (multiplier: string | number | import("long")) => import("long");
                    negate: () => import("long");
                    neg: () => import("long");
                    not: () => import("long");
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | import("long")) => boolean;
                    neq: (other: string | number | import("long")) => boolean;
                    ne: (other: string | number | import("long")) => boolean;
                    or: (other: string | number | import("long")) => import("long");
                    shiftLeft: (numBits: number | import("long")) => import("long");
                    shl: (numBits: number | import("long")) => import("long");
                    shiftRight: (numBits: number | import("long")) => import("long");
                    shr: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                    shru: (numBits: number | import("long")) => import("long");
                    shr_u: (numBits: number | import("long")) => import("long");
                    rotateLeft: (numBits: number | import("long")) => import("long");
                    rotl: (numBits: number | import("long")) => import("long");
                    rotateRight: (numBits: number | import("long")) => import("long");
                    rotr: (numBits: number | import("long")) => import("long");
                    subtract: (subtrahend: string | number | import("long")) => import("long");
                    sub: (subtrahend: string | number | import("long")) => import("long");
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long");
                    toString: (radix?: number) => string;
                    toUnsigned: () => import("long");
                    xor: (other: string | number | import("long")) => import("long");
                } & Record<Exclude<keyof I_50["HRS"]["Round"], keyof import("long")>, never>);
                Step?: number;
            } & Record<Exclude<keyof I_50["HRS"], keyof _3.HRS>, never>;
        } & Record<Exclude<keyof I_50, "HRS">, never>>(object: I_50): _3.EventTimeoutWait;
    };
    NewRoundStepMessage: {
        encode(message: _2.NewRoundStepMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.NewRoundStepMessage;
        fromJSON(object: any): _2.NewRoundStepMessage;
        toJSON(message: _2.NewRoundStepMessage): unknown;
        fromPartial<I_51 extends Exact<DeepPartial<_2.NewRoundStepMessage>, I_51>>(object: I_51): _2.NewRoundStepMessage;
    };
    NewValidBlockMessage: {
        encode(message: _2.NewValidBlockMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.NewValidBlockMessage;
        fromJSON(object: any): _2.NewValidBlockMessage;
        toJSON(message: _2.NewValidBlockMessage): unknown;
        fromPartial<I_52 extends Exact<DeepPartial<_2.NewValidBlockMessage>, I_52>>(object: I_52): _2.NewValidBlockMessage;
    };
    ProposalMessage: {
        encode(message: _2.ProposalMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ProposalMessage;
        fromJSON(object: any): _2.ProposalMessage;
        toJSON(message: _2.ProposalMessage): unknown;
        fromPartial<I_53 extends Exact<DeepPartial<_2.ProposalMessage>, I_53>>(object: I_53): _2.ProposalMessage;
    };
    ProposalPOLMessage: {
        encode(message: _2.ProposalPOLMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ProposalPOLMessage;
        fromJSON(object: any): _2.ProposalPOLMessage;
        toJSON(message: _2.ProposalPOLMessage): unknown;
        fromPartial<I_54 extends Exact<DeepPartial<_2.ProposalPOLMessage>, I_54>>(object: I_54): _2.ProposalPOLMessage;
    };
    BlockPartMessage: {
        encode(message: _2.BlockPartMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BlockPartMessage;
        fromJSON(object: any): _2.BlockPartMessage;
        toJSON(message: _2.BlockPartMessage): unknown;
        fromPartial<I_55 extends Exact<DeepPartial<_2.BlockPartMessage>, I_55>>(object: I_55): _2.BlockPartMessage;
    };
    VoteMessage: {
        encode(message: _2.VoteMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.VoteMessage;
        fromJSON(object: any): _2.VoteMessage;
        toJSON(message: _2.VoteMessage): unknown;
        fromPartial<I_56 extends Exact<DeepPartial<_2.VoteMessage>, I_56>>(object: I_56): _2.VoteMessage;
    };
    HasVoteMessage: {
        encode(message: _2.HasVoteMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.HasVoteMessage;
        fromJSON(object: any): _2.HasVoteMessage;
        toJSON(message: _2.HasVoteMessage): unknown;
        fromPartial<I_57 extends Exact<DeepPartial<_2.HasVoteMessage>, I_57>>(object: I_57): _2.HasVoteMessage;
    };
    VoteSetMaj23Message: {
        encode(message: _2.VoteSetMaj23Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.VoteSetMaj23Message;
        fromJSON(object: any): _2.VoteSetMaj23Message;
        toJSON(message: _2.VoteSetMaj23Message): unknown;
        fromPartial<I_58 extends Exact<DeepPartial<_2.VoteSetMaj23Message>, I_58>>(object: I_58): _2.VoteSetMaj23Message;
    };
    VoteSetBitsMessage: {
        encode(message: _2.VoteSetBitsMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.VoteSetBitsMessage;
        fromJSON(object: any): _2.VoteSetBitsMessage;
        toJSON(message: _2.VoteSetBitsMessage): unknown;
        fromPartial<I_59 extends Exact<DeepPartial<_2.VoteSetBitsMessage>, I_59>>(object: I_59): _2.VoteSetBitsMessage;
    };
    newRoundStepInfo: {
        encode(message: _2.newRoundStepInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.newRoundStepInfo;
        fromJSON(object: any): _2.newRoundStepInfo;
        toJSON(message: _2.newRoundStepInfo): unknown;
        fromPartial<I_60 extends Exact<DeepPartial<_2.newRoundStepInfo>, I_60>>(object: I_60): _2.newRoundStepInfo;
    };
    msgInfo: {
        encode(message: _2.msgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.msgInfo;
        fromJSON(object: any): _2.msgInfo;
        toJSON(message: _2.msgInfo): unknown;
        fromPartial<I_61 extends Exact<DeepPartial<_2.msgInfo>, I_61>>(object: I_61): _2.msgInfo;
    };
    timeoutInfo: {
        encode(message: _2.timeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.timeoutInfo;
        fromJSON(object: any): _2.timeoutInfo;
        toJSON(message: _2.timeoutInfo): unknown;
        fromPartial<I_62 extends Exact<DeepPartial<_2.timeoutInfo>, I_62>>(object: I_62): _2.timeoutInfo;
    };
    BlockRequest: {
        encode(message: _1.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BlockRequest;
        fromJSON(object: any): _1.BlockRequest;
        toJSON(message: _1.BlockRequest): unknown;
        fromPartial<I_63 extends Exact<DeepPartial<_1.BlockRequest>, I_63>>(object: I_63): _1.BlockRequest;
    };
    BlockResponse: {
        encode(message: _1.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BlockResponse;
        fromJSON(object: any): _1.BlockResponse;
        toJSON(message: _1.BlockResponse): unknown;
        fromPartial<I_64 extends Exact<DeepPartial<_1.BlockResponse>, I_64>>(object: I_64): _1.BlockResponse;
    };
    NoBlockResponse: {
        encode(message: _1.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.NoBlockResponse;
        fromJSON(object: any): _1.NoBlockResponse;
        toJSON(message: _1.NoBlockResponse): unknown;
        fromPartial<I_65 extends Exact<DeepPartial<_1.NoBlockResponse>, I_65>>(object: I_65): _1.NoBlockResponse;
    };
    StatusRequest: {
        encode(message: _1.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.StatusRequest;
        fromJSON(object: any): _1.StatusRequest;
        toJSON(message: _1.StatusRequest): unknown;
        fromPartial<I_66 extends Exact<DeepPartial<_1.StatusRequest>, I_66>>(object: I_66): _1.StatusRequest;
    };
    StatusResponse: {
        encode(message: _1.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.StatusResponse;
        fromJSON(object: any): _1.StatusResponse;
        toJSON(message: _1.StatusResponse): unknown;
        fromPartial<I_67 extends Exact<DeepPartial<_1.StatusResponse>, I_67>>(object: I_67): _1.StatusResponse;
    };
};
export declare const bank: {
    NoInputsError: {
        encode(_: _12.NoInputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.NoInputsError;
        fromJSON(_: any): _12.NoInputsError;
        toJSON(_: _12.NoInputsError): unknown;
        fromPartial<I extends Exact<DeepPartial<_12.NoInputsError>, I>>(_: I): _12.NoInputsError;
    };
    NoOutputsError: {
        encode(_: _12.NoOutputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.NoOutputsError;
        fromJSON(_: any): _12.NoOutputsError;
        toJSON(_: _12.NoOutputsError): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_12.NoOutputsError>, I_1>>(_: I_1): _12.NoOutputsError;
    };
    InputOutputMismatchError: {
        encode(_: _12.InputOutputMismatchError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.InputOutputMismatchError;
        fromJSON(_: any): _12.InputOutputMismatchError;
        toJSON(_: _12.InputOutputMismatchError): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_12.InputOutputMismatchError>, I_2>>(_: I_2): _12.InputOutputMismatchError;
    };
    MsgSend: {
        encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
        fromJSON(object: any): _12.MsgSend;
        toJSON(message: _12.MsgSend): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_12.MsgSend>, I_3>>(object: I_3): _12.MsgSend;
    };
};
export declare const vm: {
    m_call: {
        encode(message: _13.m_call, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.m_call;
        fromJSON(object: any): _13.m_call;
        toJSON(message: _13.m_call): unknown;
        fromPartial<I extends Exact<DeepPartial<_13.m_call>, I>>(object: I): _13.m_call;
    };
    m_addpkg: {
        encode(message: _13.m_addpkg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.m_addpkg;
        fromJSON(object: any): _13.m_addpkg;
        toJSON(message: _13.m_addpkg): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_13.m_addpkg>, I_1>>(object: I_1): _13.m_addpkg;
    };
    InvalidPkgPathError: {
        encode(_: _13.InvalidPkgPathError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidPkgPathError;
        fromJSON(_: any): _13.InvalidPkgPathError;
        toJSON(_: _13.InvalidPkgPathError): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_13.InvalidPkgPathError>, I_2>>(_: I_2): _13.InvalidPkgPathError;
    };
    InvalidStmtError: {
        encode(_: _13.InvalidStmtError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidStmtError;
        fromJSON(_: any): _13.InvalidStmtError;
        toJSON(_: _13.InvalidStmtError): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_13.InvalidStmtError>, I_3>>(_: I_3): _13.InvalidStmtError;
    };
    InvalidExprError: {
        encode(_: _13.InvalidExprError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidExprError;
        fromJSON(_: any): _13.InvalidExprError;
        toJSON(_: _13.InvalidExprError): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_13.InvalidExprError>, I_4>>(_: I_4): _13.InvalidExprError;
    };
};
export declare const std: {
    BaseAccount: {
        encode(message: _14.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.BaseAccount;
        fromJSON(object: any): _14.BaseAccount;
        toJSON(message: _14.BaseAccount): unknown;
        fromPartial<I extends Exact<DeepPartial<_14.BaseAccount>, I>>(object: I): _14.BaseAccount;
    };
    MemFile: {
        encode(message: _14.MemFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemFile;
        fromJSON(object: any): _14.MemFile;
        toJSON(message: _14.MemFile): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_14.MemFile>, I_1>>(object: I_1): _14.MemFile;
    };
    MemPackage: {
        encode(message: _14.MemPackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemPackage;
        fromJSON(object: any): _14.MemPackage;
        toJSON(message: _14.MemPackage): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_14.MemPackage>, I_2>>(object: I_2): _14.MemPackage;
    };
    InternalError: {
        encode(_: _14.InternalError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InternalError;
        fromJSON(_: any): _14.InternalError;
        toJSON(_: _14.InternalError): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_14.InternalError>, I_3>>(_: I_3): _14.InternalError;
    };
    TxDecodeError: {
        encode(_: _14.TxDecodeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDecodeError;
        fromJSON(_: any): _14.TxDecodeError;
        toJSON(_: _14.TxDecodeError): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_14.TxDecodeError>, I_4>>(_: I_4): _14.TxDecodeError;
    };
    InvalidSequenceError: {
        encode(_: _14.InvalidSequenceError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidSequenceError;
        fromJSON(_: any): _14.InvalidSequenceError;
        toJSON(_: _14.InvalidSequenceError): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_14.InvalidSequenceError>, I_5>>(_: I_5): _14.InvalidSequenceError;
    };
    UnauthorizedError: {
        encode(_: _14.UnauthorizedError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnauthorizedError;
        fromJSON(_: any): _14.UnauthorizedError;
        toJSON(_: _14.UnauthorizedError): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_14.UnauthorizedError>, I_6>>(_: I_6): _14.UnauthorizedError;
    };
    InsufficientFundsError: {
        encode(_: _14.InsufficientFundsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientFundsError;
        fromJSON(_: any): _14.InsufficientFundsError;
        toJSON(_: _14.InsufficientFundsError): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_14.InsufficientFundsError>, I_7>>(_: I_7): _14.InsufficientFundsError;
    };
    UnknownRequestError: {
        encode(_: _14.UnknownRequestError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnknownRequestError;
        fromJSON(_: any): _14.UnknownRequestError;
        toJSON(_: _14.UnknownRequestError): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_14.UnknownRequestError>, I_8>>(_: I_8): _14.UnknownRequestError;
    };
    InvalidAddressError: {
        encode(_: _14.InvalidAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidAddressError;
        fromJSON(_: any): _14.InvalidAddressError;
        toJSON(_: _14.InvalidAddressError): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_14.InvalidAddressError>, I_9>>(_: I_9): _14.InvalidAddressError;
    };
    UnknownAddressError: {
        encode(_: _14.UnknownAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnknownAddressError;
        fromJSON(_: any): _14.UnknownAddressError;
        toJSON(_: _14.UnknownAddressError): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_14.UnknownAddressError>, I_10>>(_: I_10): _14.UnknownAddressError;
    };
    InvalidPubKeyError: {
        encode(_: _14.InvalidPubKeyError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidPubKeyError;
        fromJSON(_: any): _14.InvalidPubKeyError;
        toJSON(_: _14.InvalidPubKeyError): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_14.InvalidPubKeyError>, I_11>>(_: I_11): _14.InvalidPubKeyError;
    };
    InsufficientCoinsError: {
        encode(_: _14.InsufficientCoinsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientCoinsError;
        fromJSON(_: any): _14.InsufficientCoinsError;
        toJSON(_: _14.InsufficientCoinsError): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_14.InsufficientCoinsError>, I_12>>(_: I_12): _14.InsufficientCoinsError;
    };
    OutOfGasError: {
        encode(_: _14.OutOfGasError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.OutOfGasError;
        fromJSON(_: any): _14.OutOfGasError;
        toJSON(_: _14.OutOfGasError): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_14.OutOfGasError>, I_13>>(_: I_13): _14.OutOfGasError;
    };
    MemoTooLargeError: {
        encode(_: _14.MemoTooLargeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemoTooLargeError;
        fromJSON(_: any): _14.MemoTooLargeError;
        toJSON(_: _14.MemoTooLargeError): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_14.MemoTooLargeError>, I_14>>(_: I_14): _14.MemoTooLargeError;
    };
    InsufficientFeeError: {
        encode(_: _14.InsufficientFeeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientFeeError;
        fromJSON(_: any): _14.InsufficientFeeError;
        toJSON(_: _14.InsufficientFeeError): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_14.InsufficientFeeError>, I_15>>(_: I_15): _14.InsufficientFeeError;
    };
    TooManySignaturesError: {
        encode(_: _14.TooManySignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TooManySignaturesError;
        fromJSON(_: any): _14.TooManySignaturesError;
        toJSON(_: _14.TooManySignaturesError): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_14.TooManySignaturesError>, I_16>>(_: I_16): _14.TooManySignaturesError;
    };
    NoSignaturesError: {
        encode(_: _14.NoSignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.NoSignaturesError;
        fromJSON(_: any): _14.NoSignaturesError;
        toJSON(_: _14.NoSignaturesError): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_14.NoSignaturesError>, I_17>>(_: I_17): _14.NoSignaturesError;
    };
    GasOverflowError: {
        encode(_: _14.GasOverflowError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GasOverflowError;
        fromJSON(_: any): _14.GasOverflowError;
        toJSON(_: _14.GasOverflowError): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_14.GasOverflowError>, I_18>>(_: I_18): _14.GasOverflowError;
    };
};
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _17.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Timestamp;
            fromJSON(object: any): _17.Timestamp;
            toJSON(message: _17.Timestamp): unknown;
            fromPartial<I extends Exact<DeepPartial<_17.Timestamp>, I>>(object: I): _17.Timestamp;
        };
        Duration: {
            encode(message: _16.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Duration;
            fromJSON(object: any): _16.Duration;
            toJSON(message: _16.Duration): unknown;
            fromPartial<I_1 extends Exact<DeepPartial<_16.Duration>, I_1>>(object: I_1): _16.Duration;
        };
        Any: {
            encode(message: _15.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Any;
            fromJSON(object: any): _15.Any;
            toJSON(message: _15.Any): unknown;
            fromPartial<I_2 extends Exact<DeepPartial<_15.Any>, I_2>>(object: I_2): _15.Any;
        };
    };
}
