import * as _1 from "../github.com/gnolang/gno/pkgs/bft/abci/types/abci";
export declare const abci: {
    RequestBase: {
        encode(_: _1.RequestBase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestBase;
        fromJSON(_: any): _1.RequestBase;
        toJSON(_: _1.RequestBase): unknown;
        fromPartial<I extends Exact<DeepPartial<_1.RequestBase>, I>>(_: I): _1.RequestBase;
    };
    RequestEcho: {
        encode(message: _1.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestEcho;
        fromJSON(object: any): _1.RequestEcho;
        toJSON(message: _1.RequestEcho): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_1.RequestEcho>, I_1>>(object: I_1): _1.RequestEcho;
    };
    RequestFlush: {
        encode(message: _1.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestFlush;
        fromJSON(object: any): _1.RequestFlush;
        toJSON(message: _1.RequestFlush): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_1.RequestFlush>, I_2>>(object: I_2): _1.RequestFlush;
    };
    RequestInfo: {
        encode(message: _1.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestInfo;
        fromJSON(object: any): _1.RequestInfo;
        toJSON(message: _1.RequestInfo): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_1.RequestInfo>, I_3>>(object: I_3): _1.RequestInfo;
    };
    RequestSetOption: {
        encode(message: _1.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestSetOption;
        fromJSON(object: any): _1.RequestSetOption;
        toJSON(message: _1.RequestSetOption): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_1.RequestSetOption>, I_4>>(object: I_4): _1.RequestSetOption;
    };
    RequestInitChain: {
        encode(message: _1.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestInitChain;
        fromJSON(object: any): _1.RequestInitChain;
        toJSON(message: _1.RequestInitChain): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_1.RequestInitChain>, I_5>>(object: I_5): _1.RequestInitChain;
    };
    RequestQuery: {
        encode(message: _1.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestQuery;
        fromJSON(object: any): _1.RequestQuery;
        toJSON(message: _1.RequestQuery): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_1.RequestQuery>, I_6>>(object: I_6): _1.RequestQuery;
    };
    RequestBeginBlock: {
        encode(message: _1.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestBeginBlock;
        fromJSON(object: any): _1.RequestBeginBlock;
        toJSON(message: _1.RequestBeginBlock): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_1.RequestBeginBlock>, I_7>>(object: I_7): _1.RequestBeginBlock;
    };
    RequestCheckTx: {
        encode(message: _1.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestCheckTx;
        fromJSON(object: any): _1.RequestCheckTx;
        toJSON(message: _1.RequestCheckTx): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_1.RequestCheckTx>, I_8>>(object: I_8): _1.RequestCheckTx;
    };
    RequestDeliverTx: {
        encode(message: _1.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestDeliverTx;
        fromJSON(object: any): _1.RequestDeliverTx;
        toJSON(message: _1.RequestDeliverTx): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_1.RequestDeliverTx>, I_9>>(object: I_9): _1.RequestDeliverTx;
    };
    RequestEndBlock: {
        encode(message: _1.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestEndBlock;
        fromJSON(object: any): _1.RequestEndBlock;
        toJSON(message: _1.RequestEndBlock): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_1.RequestEndBlock>, I_10>>(object: I_10): _1.RequestEndBlock;
    };
    RequestCommit: {
        encode(message: _1.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.RequestCommit;
        fromJSON(object: any): _1.RequestCommit;
        toJSON(message: _1.RequestCommit): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_1.RequestCommit>, I_11>>(object: I_11): _1.RequestCommit;
    };
    ResponseBase: {
        encode(message: _1.ResponseBase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseBase;
        fromJSON(object: any): _1.ResponseBase;
        toJSON(message: _1.ResponseBase): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_1.ResponseBase>, I_12>>(object: I_12): _1.ResponseBase;
    };
    ResponseException: {
        encode(message: _1.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseException;
        fromJSON(object: any): _1.ResponseException;
        toJSON(message: _1.ResponseException): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_1.ResponseException>, I_13>>(object: I_13): _1.ResponseException;
    };
    ResponseEcho: {
        encode(message: _1.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseEcho;
        fromJSON(object: any): _1.ResponseEcho;
        toJSON(message: _1.ResponseEcho): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_1.ResponseEcho>, I_14>>(object: I_14): _1.ResponseEcho;
    };
    ResponseFlush: {
        encode(message: _1.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseFlush;
        fromJSON(object: any): _1.ResponseFlush;
        toJSON(message: _1.ResponseFlush): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_1.ResponseFlush>, I_15>>(object: I_15): _1.ResponseFlush;
    };
    ResponseInfo: {
        encode(message: _1.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseInfo;
        fromJSON(object: any): _1.ResponseInfo;
        toJSON(message: _1.ResponseInfo): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_1.ResponseInfo>, I_16>>(object: I_16): _1.ResponseInfo;
    };
    ResponseSetOption: {
        encode(message: _1.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseSetOption;
        fromJSON(object: any): _1.ResponseSetOption;
        toJSON(message: _1.ResponseSetOption): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_1.ResponseSetOption>, I_17>>(object: I_17): _1.ResponseSetOption;
    };
    ResponseInitChain: {
        encode(message: _1.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseInitChain;
        fromJSON(object: any): _1.ResponseInitChain;
        toJSON(message: _1.ResponseInitChain): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_1.ResponseInitChain>, I_18>>(object: I_18): _1.ResponseInitChain;
    };
    ResponseQuery: {
        encode(message: _1.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseQuery;
        fromJSON(object: any): _1.ResponseQuery;
        toJSON(message: _1.ResponseQuery): unknown;
        fromPartial<I_19 extends Exact<DeepPartial<_1.ResponseQuery>, I_19>>(object: I_19): _1.ResponseQuery;
    };
    ResponseBeginBlock: {
        encode(message: _1.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseBeginBlock;
        fromJSON(object: any): _1.ResponseBeginBlock;
        toJSON(message: _1.ResponseBeginBlock): unknown;
        fromPartial<I_20 extends Exact<DeepPartial<_1.ResponseBeginBlock>, I_20>>(object: I_20): _1.ResponseBeginBlock;
    };
    ResponseCheckTx: {
        encode(message: _1.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseCheckTx;
        fromJSON(object: any): _1.ResponseCheckTx;
        toJSON(message: _1.ResponseCheckTx): unknown;
        fromPartial<I_21 extends Exact<DeepPartial<_1.ResponseCheckTx>, I_21>>(object: I_21): _1.ResponseCheckTx;
    };
    ResponseDeliverTx: {
        encode(message: _1.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseDeliverTx;
        fromJSON(object: any): _1.ResponseDeliverTx;
        toJSON(message: _1.ResponseDeliverTx): unknown;
        fromPartial<I_22 extends Exact<DeepPartial<_1.ResponseDeliverTx>, I_22>>(object: I_22): _1.ResponseDeliverTx;
    };
    ResponseEndBlock: {
        encode(message: _1.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseEndBlock;
        fromJSON(object: any): _1.ResponseEndBlock;
        toJSON(message: _1.ResponseEndBlock): unknown;
        fromPartial<I_23 extends Exact<DeepPartial<_1.ResponseEndBlock>, I_23>>(object: I_23): _1.ResponseEndBlock;
    };
    ResponseCommit: {
        encode(message: _1.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ResponseCommit;
        fromJSON(object: any): _1.ResponseCommit;
        toJSON(message: _1.ResponseCommit): unknown;
        fromPartial<I_24 extends Exact<DeepPartial<_1.ResponseCommit>, I_24>>(object: I_24): _1.ResponseCommit;
    };
    StringError: {
        encode(message: _1.StringError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.StringError;
        fromJSON(object: any): _1.StringError;
        toJSON(message: _1.StringError): unknown;
        fromPartial<I_25 extends Exact<DeepPartial<_1.StringError>, I_25>>(object: I_25): _1.StringError;
    };
    ConsensusParams: {
        encode(message: _1.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ConsensusParams;
        fromJSON(object: any): _1.ConsensusParams;
        toJSON(message: _1.ConsensusParams): unknown;
        fromPartial<I_26 extends Exact<DeepPartial<_1.ConsensusParams>, I_26>>(object: I_26): _1.ConsensusParams;
    };
    BlockParams: {
        encode(message: _1.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BlockParams;
        fromJSON(object: any): _1.BlockParams;
        toJSON(message: _1.BlockParams): unknown;
        fromPartial<I_27 extends Exact<DeepPartial<_1.BlockParams>, I_27>>(object: I_27): _1.BlockParams;
    };
    ValidatorParams: {
        encode(message: _1.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ValidatorParams;
        fromJSON(object: any): _1.ValidatorParams;
        toJSON(message: _1.ValidatorParams): unknown;
        fromPartial<I_28 extends Exact<DeepPartial<_1.ValidatorParams>, I_28>>(object: I_28): _1.ValidatorParams;
    };
    ValidatorUpdate: {
        encode(message: _1.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ValidatorUpdate;
        fromJSON(object: any): _1.ValidatorUpdate;
        toJSON(message: _1.ValidatorUpdate): unknown;
        fromPartial<I_29 extends Exact<DeepPartial<_1.ValidatorUpdate>, I_29>>(object: I_29): _1.ValidatorUpdate;
    };
    LastCommitInfo: {
        encode(message: _1.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.LastCommitInfo;
        fromJSON(object: any): _1.LastCommitInfo;
        toJSON(message: _1.LastCommitInfo): unknown;
        fromPartial<I_30 extends Exact<DeepPartial<_1.LastCommitInfo>, I_30>>(object: I_30): _1.LastCommitInfo;
    };
    VoteInfo: {
        encode(message: _1.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.VoteInfo;
        fromJSON(object: any): _1.VoteInfo;
        toJSON(message: _1.VoteInfo): unknown;
        fromPartial<I_31 extends Exact<DeepPartial<_1.VoteInfo>, I_31>>(object: I_31): _1.VoteInfo;
    };
    EventString: {
        encode(message: _1.EventString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventString;
        fromJSON(object: any): _1.EventString;
        toJSON(message: _1.EventString): unknown;
        fromPartial<I_32 extends Exact<DeepPartial<_1.EventString>, I_32>>(object: I_32): _1.EventString;
    };
    MockHeader: {
        encode(message: _1.MockHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.MockHeader;
        fromJSON(object: any): _1.MockHeader;
        toJSON(message: _1.MockHeader): unknown;
        fromPartial<I_33 extends Exact<DeepPartial<_1.MockHeader>, I_33>>(object: I_33): _1.MockHeader;
    };
};
