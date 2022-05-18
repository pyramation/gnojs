import { Any } from "../../../../../../../google/protobuf/any";
import { Proof } from "../../../crypto/merkle/merkle";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface RequestBase {
}
export interface RequestEcho {
    RequestBase: RequestBase;
    Message: string;
}
export interface RequestFlush {
    RequestBase: RequestBase;
}
export interface RequestInfo {
    RequestBase: RequestBase;
}
export interface RequestSetOption {
    RequestBase: RequestBase;
    Key: string;
    Value: string;
}
export interface RequestInitChain {
    RequestBase: RequestBase;
    Time: Date;
    ChainID: string;
    ConsensusParams: ConsensusParams;
    Validators: ValidatorUpdate[];
    AppState: Any;
}
export interface RequestQuery {
    RequestBase: RequestBase;
    Data: Uint8Array;
    Path: string;
    Height: Long;
    Prove: boolean;
}
export interface RequestBeginBlock {
    RequestBase: RequestBase;
    Hash: Uint8Array;
    Header: Any;
    LastCommitInfo: LastCommitInfo;
}
export interface RequestCheckTx {
    RequestBase: RequestBase;
    Tx: Uint8Array;
    Type: Long;
}
export interface RequestDeliverTx {
    RequestBase: RequestBase;
    Tx: Uint8Array;
}
export interface RequestEndBlock {
    RequestBase: RequestBase;
    Height: Long;
}
export interface RequestCommit {
    RequestBase: RequestBase;
}
export interface ResponseBase {
    Error: Any;
    Data: Uint8Array;
    Events: Any[];
    Log: string;
    Info: string;
}
export interface ResponseException {
    ResponseBase: ResponseBase;
}
export interface ResponseEcho {
    ResponseBase: ResponseBase;
    Message: string;
}
export interface ResponseFlush {
    ResponseBase: ResponseBase;
}
export interface ResponseInfo {
    ResponseBase: ResponseBase;
    ABCIVersion: string;
    AppVersion: string;
    LastBlockHeight: Long;
    LastBlockAppHash: Uint8Array;
}
export interface ResponseSetOption {
    ResponseBase: ResponseBase;
}
export interface ResponseInitChain {
    ResponseBase: ResponseBase;
    ConsensusParams: ConsensusParams;
    Validators: ValidatorUpdate[];
}
export interface ResponseQuery {
    ResponseBase: ResponseBase;
    Key: Uint8Array;
    Value: Uint8Array;
    Proof: Proof;
    Height: Long;
}
export interface ResponseBeginBlock {
    ResponseBase: ResponseBase;
}
export interface ResponseCheckTx {
    ResponseBase: ResponseBase;
    GasWanted: Long;
    GasUsed: Long;
}
export interface ResponseDeliverTx {
    ResponseBase: ResponseBase;
    GasWanted: Long;
    GasUsed: Long;
}
export interface ResponseEndBlock {
    ResponseBase: ResponseBase;
    ValidatorUpdates: ValidatorUpdate[];
    ConsensusParams: ConsensusParams;
    Events: Any[];
}
export interface ResponseCommit {
    ResponseBase: ResponseBase;
}
export interface StringError {
    Value: string;
}
export interface ConsensusParams {
    Block: BlockParams;
    Validator: ValidatorParams;
}
export interface BlockParams {
    MaxTxBytes: Long;
    MaxDataBytes: Long;
    MaxBlockBytes: Long;
    MaxGas: Long;
    TimeIotaMS: Long;
}
export interface ValidatorParams {
    PubKeyTypeURLs: string[];
}
export interface ValidatorUpdate {
    Address: string;
    PubKey: Any;
    Power: Long;
}
export interface LastCommitInfo {
    Round: number;
    Votes: VoteInfo[];
}
export interface VoteInfo {
    Address: string;
    Power: Long;
    SignedLastBlock: boolean;
}
export interface EventString {
    Value: string;
}
export interface MockHeader {
    Version: string;
    ChainID: string;
    Height: Long;
    Time: Date;
    NumTxs: Long;
    TotalTxs: Long;
}
export declare const RequestBase: {
    encode(_: RequestBase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBase;
    fromJSON(_: any): RequestBase;
    toJSON(_: RequestBase): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestBase>, I>>(_: I): RequestBase;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(object: I): RequestEcho;
};
export declare const RequestFlush: {
    encode(message: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(object: any): RequestFlush;
    toJSON(message: RequestFlush): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(object: I): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestSetOption>, I>>(object: I): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(object: I): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(object: I): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(object: I): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(object: I): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestDeliverTx>, I>>(object: I): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestEndBlock>, I>>(object: I): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(message: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(object: any): RequestCommit;
    toJSON(message: RequestCommit): unknown;
    fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(object: I): RequestCommit;
};
export declare const ResponseBase: {
    encode(message: ResponseBase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBase;
    fromJSON(object: any): ResponseBase;
    toJSON(message: ResponseBase): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseBase>, I>>(object: I): ResponseBase;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(object: I): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(object: I): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(message: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(object: any): ResponseFlush;
    toJSON(message: ResponseFlush): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(object: I): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseSetOption>, I>>(object: I): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(object: I): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(object: I): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseBeginBlock>, I>>(object: I): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(object: I): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(object: I): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseEndBlock>, I>>(object: I): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(object: I): ResponseCommit;
};
export declare const StringError: {
    encode(message: StringError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringError;
    fromJSON(object: any): StringError;
    toJSON(message: StringError): unknown;
    fromPartial<I extends Exact<DeepPartial<StringError>, I>>(object: I): StringError;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(object: I): ValidatorUpdate;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<LastCommitInfo>, I>>(object: I): LastCommitInfo;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo;
};
export declare const EventString: {
    encode(message: EventString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventString;
    fromJSON(object: any): EventString;
    toJSON(message: EventString): unknown;
    fromPartial<I extends Exact<DeepPartial<EventString>, I>>(object: I): EventString;
};
export declare const MockHeader: {
    encode(message: MockHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockHeader;
    fromJSON(object: any): MockHeader;
    toJSON(message: MockHeader): unknown;
    fromPartial<I extends Exact<DeepPartial<MockHeader>, I>>(object: I): MockHeader;
};
