import { Timestamp } from "../../../../../../../google/protobuf/timestamp";
import { Any } from "../../../../../../../google/protobuf/any";
import { Proof } from "../../../crypto/merkle/merkle";
import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/** messages */
export interface RequestBase {}
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

function createBaseRequestBase(): RequestBase {
  return {};
}

export const RequestBase = {
  encode(_: RequestBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBase();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): RequestBase {
    return {};
  },

  toJSON(_: RequestBase): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestBase>, I>>(_: I): RequestBase {
    const message = createBaseRequestBase();
    return message;
  }

};

function createBaseRequestEcho(): RequestEcho {
  return {
    RequestBase: undefined,
    Message: ""
  };
}

export const RequestEcho = {
  encode(message: RequestEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Message !== "") {
      writer.uint32(18).string(message.Message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestEcho {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Message: isSet(object.Message) ? String(object.Message) : ""
    };
  },

  toJSON(message: RequestEcho): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Message !== undefined && (obj.Message = message.Message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(object: I): RequestEcho {
    const message = createBaseRequestEcho();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Message = object.Message ?? "";
    return message;
  }

};

function createBaseRequestFlush(): RequestFlush {
  return {
    RequestBase: undefined
  };
}

export const RequestFlush = {
  encode(message: RequestFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestFlush {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined
    };
  },

  toJSON(message: RequestFlush): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(object: I): RequestFlush {
    const message = createBaseRequestFlush();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    return message;
  }

};

function createBaseRequestInfo(): RequestInfo {
  return {
    RequestBase: undefined
  };
}

export const RequestInfo = {
  encode(message: RequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestInfo {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined
    };
  },

  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo {
    const message = createBaseRequestInfo();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    return message;
  }

};

function createBaseRequestSetOption(): RequestSetOption {
  return {
    RequestBase: undefined,
    Key: "",
    Value: ""
  };
}

export const RequestSetOption = {
  encode(message: RequestSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Key !== "") {
      writer.uint32(18).string(message.Key);
    }

    if (message.Value !== "") {
      writer.uint32(26).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSetOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Key = reader.string();
          break;

        case 3:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestSetOption {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Key: isSet(object.Key) ? String(object.Key) : "",
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: RequestSetOption): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Key !== undefined && (obj.Key = message.Key);
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestSetOption>, I>>(object: I): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Key = object.Key ?? "";
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseRequestInitChain(): RequestInitChain {
  return {
    RequestBase: undefined,
    Time: undefined,
    ChainID: "",
    ConsensusParams: undefined,
    Validators: [],
    AppState: undefined
  };
}

export const RequestInitChain = {
  encode(message: RequestInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Time !== undefined) {
      Timestamp.encode(toTimestamp(message.Time), writer.uint32(18).fork()).ldelim();
    }

    if (message.ChainID !== "") {
      writer.uint32(26).string(message.ChainID);
    }

    if (message.ConsensusParams !== undefined) {
      ConsensusParams.encode(message.ConsensusParams, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.Validators) {
      ValidatorUpdate.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.AppState !== undefined) {
      Any.encode(message.AppState, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ChainID = reader.string();
          break;

        case 4:
          message.ConsensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 5:
          message.Validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 6:
          message.AppState = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestInitChain {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Time: isSet(object.Time) ? fromJsonTimestamp(object.Time) : undefined,
      ChainID: isSet(object.ChainID) ? String(object.ChainID) : "",
      ConsensusParams: isSet(object.ConsensusParams) ? ConsensusParams.fromJSON(object.ConsensusParams) : undefined,
      Validators: Array.isArray(object?.Validators) ? object.Validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
      AppState: isSet(object.AppState) ? Any.fromJSON(object.AppState) : undefined
    };
  },

  toJSON(message: RequestInitChain): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Time !== undefined && (obj.Time = message.Time.toISOString());
    message.ChainID !== undefined && (obj.ChainID = message.ChainID);
    message.ConsensusParams !== undefined && (obj.ConsensusParams = message.ConsensusParams ? ConsensusParams.toJSON(message.ConsensusParams) : undefined);

    if (message.Validators) {
      obj.Validators = message.Validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
    } else {
      obj.Validators = [];
    }

    message.AppState !== undefined && (obj.AppState = message.AppState ? Any.toJSON(message.AppState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(object: I): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Time = object.Time ?? undefined;
    message.ChainID = object.ChainID ?? "";
    message.ConsensusParams = object.ConsensusParams !== undefined && object.ConsensusParams !== null ? ConsensusParams.fromPartial(object.ConsensusParams) : undefined;
    message.Validators = object.Validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.AppState = object.AppState !== undefined && object.AppState !== null ? Any.fromPartial(object.AppState) : undefined;
    return message;
  }

};

function createBaseRequestQuery(): RequestQuery {
  return {
    RequestBase: undefined,
    Data: new Uint8Array(),
    Path: "",
    Height: Long.ZERO,
    Prove: false
  };
}

export const RequestQuery = {
  encode(message: RequestQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Data.length !== 0) {
      writer.uint32(18).bytes(message.Data);
    }

    if (message.Path !== "") {
      writer.uint32(26).string(message.Path);
    }

    if (!message.Height.isZero()) {
      writer.uint32(32).sint64(message.Height);
    }

    if (message.Prove === true) {
      writer.uint32(40).bool(message.Prove);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Data = reader.bytes();
          break;

        case 3:
          message.Path = reader.string();
          break;

        case 4:
          message.Height = (reader.sint64() as Long);
          break;

        case 5:
          message.Prove = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestQuery {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array(),
      Path: isSet(object.Path) ? String(object.Path) : "",
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Prove: isSet(object.Prove) ? Boolean(object.Prove) : false
    };
  },

  toJSON(message: RequestQuery): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Data !== undefined && (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
    message.Path !== undefined && (obj.Path = message.Path);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Prove !== undefined && (obj.Prove = message.Prove);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(object: I): RequestQuery {
    const message = createBaseRequestQuery();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Data = object.Data ?? new Uint8Array();
    message.Path = object.Path ?? "";
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Prove = object.Prove ?? false;
    return message;
  }

};

function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    RequestBase: undefined,
    Hash: new Uint8Array(),
    Header: undefined,
    LastCommitInfo: undefined
  };
}

export const RequestBeginBlock = {
  encode(message: RequestBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Hash.length !== 0) {
      writer.uint32(18).bytes(message.Hash);
    }

    if (message.Header !== undefined) {
      Any.encode(message.Header, writer.uint32(26).fork()).ldelim();
    }

    if (message.LastCommitInfo !== undefined) {
      LastCommitInfo.encode(message.LastCommitInfo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Hash = reader.bytes();
          break;

        case 3:
          message.Header = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.LastCommitInfo = LastCommitInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestBeginBlock {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array(),
      Header: isSet(object.Header) ? Any.fromJSON(object.Header) : undefined,
      LastCommitInfo: isSet(object.LastCommitInfo) ? LastCommitInfo.fromJSON(object.LastCommitInfo) : undefined
    };
  },

  toJSON(message: RequestBeginBlock): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Hash !== undefined && (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.Header !== undefined && (obj.Header = message.Header ? Any.toJSON(message.Header) : undefined);
    message.LastCommitInfo !== undefined && (obj.LastCommitInfo = message.LastCommitInfo ? LastCommitInfo.toJSON(message.LastCommitInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestBeginBlock>, I>>(object: I): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Hash = object.Hash ?? new Uint8Array();
    message.Header = object.Header !== undefined && object.Header !== null ? Any.fromPartial(object.Header) : undefined;
    message.LastCommitInfo = object.LastCommitInfo !== undefined && object.LastCommitInfo !== null ? LastCommitInfo.fromPartial(object.LastCommitInfo) : undefined;
    return message;
  }

};

function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    RequestBase: undefined,
    Tx: new Uint8Array(),
    Type: Long.ZERO
  };
}

export const RequestCheckTx = {
  encode(message: RequestCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Tx.length !== 0) {
      writer.uint32(18).bytes(message.Tx);
    }

    if (!message.Type.isZero()) {
      writer.uint32(24).sint64(message.Type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Tx = reader.bytes();
          break;

        case 3:
          message.Type = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestCheckTx {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Tx: isSet(object.Tx) ? bytesFromBase64(object.Tx) : new Uint8Array(),
      Type: isSet(object.Type) ? Long.fromString(object.Type) : Long.ZERO
    };
  },

  toJSON(message: RequestCheckTx): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Tx !== undefined && (obj.Tx = base64FromBytes(message.Tx !== undefined ? message.Tx : new Uint8Array()));
    message.Type !== undefined && (obj.Type = (message.Type || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(object: I): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Tx = object.Tx ?? new Uint8Array();
    message.Type = object.Type !== undefined && object.Type !== null ? Long.fromValue(object.Type) : Long.ZERO;
    return message;
  }

};

function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    RequestBase: undefined,
    Tx: new Uint8Array()
  };
}

export const RequestDeliverTx = {
  encode(message: RequestDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Tx.length !== 0) {
      writer.uint32(18).bytes(message.Tx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Tx = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestDeliverTx {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Tx: isSet(object.Tx) ? bytesFromBase64(object.Tx) : new Uint8Array()
    };
  },

  toJSON(message: RequestDeliverTx): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Tx !== undefined && (obj.Tx = base64FromBytes(message.Tx !== undefined ? message.Tx : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestDeliverTx>, I>>(object: I): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Tx = object.Tx ?? new Uint8Array();
    return message;
  }

};

function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    RequestBase: undefined,
    Height: Long.ZERO
  };
}

export const RequestEndBlock = {
  encode(message: RequestEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Height.isZero()) {
      writer.uint32(16).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestEndBlock {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: RequestEndBlock): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestEndBlock>, I>>(object: I): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    return message;
  }

};

function createBaseRequestCommit(): RequestCommit {
  return {
    RequestBase: undefined
  };
}

export const RequestCommit = {
  encode(message: RequestCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RequestBase !== undefined) {
      RequestBase.encode(message.RequestBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RequestBase = RequestBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestCommit {
    return {
      RequestBase: isSet(object.RequestBase) ? RequestBase.fromJSON(object.RequestBase) : undefined
    };
  },

  toJSON(message: RequestCommit): unknown {
    const obj: any = {};
    message.RequestBase !== undefined && (obj.RequestBase = message.RequestBase ? RequestBase.toJSON(message.RequestBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(object: I): RequestCommit {
    const message = createBaseRequestCommit();
    message.RequestBase = object.RequestBase !== undefined && object.RequestBase !== null ? RequestBase.fromPartial(object.RequestBase) : undefined;
    return message;
  }

};

function createBaseResponseBase(): ResponseBase {
  return {
    Error: undefined,
    Data: new Uint8Array(),
    Events: [],
    Log: "",
    Info: ""
  };
}

export const ResponseBase = {
  encode(message: ResponseBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      Any.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }

    if (message.Data.length !== 0) {
      writer.uint32(18).bytes(message.Data);
    }

    for (const v of message.Events) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.Log !== "") {
      writer.uint32(34).string(message.Log);
    }

    if (message.Info !== "") {
      writer.uint32(42).string(message.Info);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBase();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Error = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.Data = reader.bytes();
          break;

        case 3:
          message.Events.push(Any.decode(reader, reader.uint32()));
          break;

        case 4:
          message.Log = reader.string();
          break;

        case 5:
          message.Info = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseBase {
    return {
      Error: isSet(object.Error) ? Any.fromJSON(object.Error) : undefined,
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array(),
      Events: Array.isArray(object?.Events) ? object.Events.map((e: any) => Any.fromJSON(e)) : [],
      Log: isSet(object.Log) ? String(object.Log) : "",
      Info: isSet(object.Info) ? String(object.Info) : ""
    };
  },

  toJSON(message: ResponseBase): unknown {
    const obj: any = {};
    message.Error !== undefined && (obj.Error = message.Error ? Any.toJSON(message.Error) : undefined);
    message.Data !== undefined && (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));

    if (message.Events) {
      obj.Events = message.Events.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Events = [];
    }

    message.Log !== undefined && (obj.Log = message.Log);
    message.Info !== undefined && (obj.Info = message.Info);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseBase>, I>>(object: I): ResponseBase {
    const message = createBaseResponseBase();
    message.Error = object.Error !== undefined && object.Error !== null ? Any.fromPartial(object.Error) : undefined;
    message.Data = object.Data ?? new Uint8Array();
    message.Events = object.Events?.map(e => Any.fromPartial(e)) || [];
    message.Log = object.Log ?? "";
    message.Info = object.Info ?? "";
    return message;
  }

};

function createBaseResponseException(): ResponseException {
  return {
    ResponseBase: undefined
  };
}

export const ResponseException = {
  encode(message: ResponseException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseException {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined
    };
  },

  toJSON(message: ResponseException): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(object: I): ResponseException {
    const message = createBaseResponseException();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    return message;
  }

};

function createBaseResponseEcho(): ResponseEcho {
  return {
    ResponseBase: undefined,
    Message: ""
  };
}

export const ResponseEcho = {
  encode(message: ResponseEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Message !== "") {
      writer.uint32(18).string(message.Message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseEcho {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      Message: isSet(object.Message) ? String(object.Message) : ""
    };
  },

  toJSON(message: ResponseEcho): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.Message !== undefined && (obj.Message = message.Message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(object: I): ResponseEcho {
    const message = createBaseResponseEcho();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.Message = object.Message ?? "";
    return message;
  }

};

function createBaseResponseFlush(): ResponseFlush {
  return {
    ResponseBase: undefined
  };
}

export const ResponseFlush = {
  encode(message: ResponseFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseFlush {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined
    };
  },

  toJSON(message: ResponseFlush): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(object: I): ResponseFlush {
    const message = createBaseResponseFlush();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    return message;
  }

};

function createBaseResponseInfo(): ResponseInfo {
  return {
    ResponseBase: undefined,
    ABCIVersion: "",
    AppVersion: "",
    LastBlockHeight: Long.ZERO,
    LastBlockAppHash: new Uint8Array()
  };
}

export const ResponseInfo = {
  encode(message: ResponseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.ABCIVersion !== "") {
      writer.uint32(18).string(message.ABCIVersion);
    }

    if (message.AppVersion !== "") {
      writer.uint32(26).string(message.AppVersion);
    }

    if (!message.LastBlockHeight.isZero()) {
      writer.uint32(32).sint64(message.LastBlockHeight);
    }

    if (message.LastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.LastBlockAppHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.ABCIVersion = reader.string();
          break;

        case 3:
          message.AppVersion = reader.string();
          break;

        case 4:
          message.LastBlockHeight = (reader.sint64() as Long);
          break;

        case 5:
          message.LastBlockAppHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseInfo {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      ABCIVersion: isSet(object.ABCIVersion) ? String(object.ABCIVersion) : "",
      AppVersion: isSet(object.AppVersion) ? String(object.AppVersion) : "",
      LastBlockHeight: isSet(object.LastBlockHeight) ? Long.fromString(object.LastBlockHeight) : Long.ZERO,
      LastBlockAppHash: isSet(object.LastBlockAppHash) ? bytesFromBase64(object.LastBlockAppHash) : new Uint8Array()
    };
  },

  toJSON(message: ResponseInfo): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.ABCIVersion !== undefined && (obj.ABCIVersion = message.ABCIVersion);
    message.AppVersion !== undefined && (obj.AppVersion = message.AppVersion);
    message.LastBlockHeight !== undefined && (obj.LastBlockHeight = (message.LastBlockHeight || Long.ZERO).toString());
    message.LastBlockAppHash !== undefined && (obj.LastBlockAppHash = base64FromBytes(message.LastBlockAppHash !== undefined ? message.LastBlockAppHash : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo {
    const message = createBaseResponseInfo();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.ABCIVersion = object.ABCIVersion ?? "";
    message.AppVersion = object.AppVersion ?? "";
    message.LastBlockHeight = object.LastBlockHeight !== undefined && object.LastBlockHeight !== null ? Long.fromValue(object.LastBlockHeight) : Long.ZERO;
    message.LastBlockAppHash = object.LastBlockAppHash ?? new Uint8Array();
    return message;
  }

};

function createBaseResponseSetOption(): ResponseSetOption {
  return {
    ResponseBase: undefined
  };
}

export const ResponseSetOption = {
  encode(message: ResponseSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSetOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseSetOption {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined
    };
  },

  toJSON(message: ResponseSetOption): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseSetOption>, I>>(object: I): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    return message;
  }

};

function createBaseResponseInitChain(): ResponseInitChain {
  return {
    ResponseBase: undefined,
    ConsensusParams: undefined,
    Validators: []
  };
}

export const ResponseInitChain = {
  encode(message: ResponseInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.ConsensusParams !== undefined) {
      ConsensusParams.encode(message.ConsensusParams, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Validators) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.ConsensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.Validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseInitChain {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      ConsensusParams: isSet(object.ConsensusParams) ? ConsensusParams.fromJSON(object.ConsensusParams) : undefined,
      Validators: Array.isArray(object?.Validators) ? object.Validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : []
    };
  },

  toJSON(message: ResponseInitChain): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.ConsensusParams !== undefined && (obj.ConsensusParams = message.ConsensusParams ? ConsensusParams.toJSON(message.ConsensusParams) : undefined);

    if (message.Validators) {
      obj.Validators = message.Validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
    } else {
      obj.Validators = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(object: I): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.ConsensusParams = object.ConsensusParams !== undefined && object.ConsensusParams !== null ? ConsensusParams.fromPartial(object.ConsensusParams) : undefined;
    message.Validators = object.Validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseResponseQuery(): ResponseQuery {
  return {
    ResponseBase: undefined,
    Key: new Uint8Array(),
    Value: new Uint8Array(),
    Proof: undefined,
    Height: Long.ZERO
  };
}

export const ResponseQuery = {
  encode(message: ResponseQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (message.Key.length !== 0) {
      writer.uint32(18).bytes(message.Key);
    }

    if (message.Value.length !== 0) {
      writer.uint32(26).bytes(message.Value);
    }

    if (message.Proof !== undefined) {
      Proof.encode(message.Proof, writer.uint32(34).fork()).ldelim();
    }

    if (!message.Height.isZero()) {
      writer.uint32(40).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.Key = reader.bytes();
          break;

        case 3:
          message.Value = reader.bytes();
          break;

        case 4:
          message.Proof = Proof.decode(reader, reader.uint32());
          break;

        case 5:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseQuery {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      Key: isSet(object.Key) ? bytesFromBase64(object.Key) : new Uint8Array(),
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array(),
      Proof: isSet(object.Proof) ? Proof.fromJSON(object.Proof) : undefined,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: ResponseQuery): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.Key !== undefined && (obj.Key = base64FromBytes(message.Key !== undefined ? message.Key : new Uint8Array()));
    message.Value !== undefined && (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
    message.Proof !== undefined && (obj.Proof = message.Proof ? Proof.toJSON(message.Proof) : undefined);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(object: I): ResponseQuery {
    const message = createBaseResponseQuery();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.Key = object.Key ?? new Uint8Array();
    message.Value = object.Value ?? new Uint8Array();
    message.Proof = object.Proof !== undefined && object.Proof !== null ? Proof.fromPartial(object.Proof) : undefined;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    return message;
  }

};

function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    ResponseBase: undefined
  };
}

export const ResponseBeginBlock = {
  encode(message: ResponseBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseBeginBlock {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined
    };
  },

  toJSON(message: ResponseBeginBlock): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseBeginBlock>, I>>(object: I): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    return message;
  }

};

function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    ResponseBase: undefined,
    GasWanted: Long.ZERO,
    GasUsed: Long.ZERO
  };
}

export const ResponseCheckTx = {
  encode(message: ResponseCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (!message.GasWanted.isZero()) {
      writer.uint32(16).sint64(message.GasWanted);
    }

    if (!message.GasUsed.isZero()) {
      writer.uint32(24).sint64(message.GasUsed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.GasWanted = (reader.sint64() as Long);
          break;

        case 3:
          message.GasUsed = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseCheckTx {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      GasWanted: isSet(object.GasWanted) ? Long.fromString(object.GasWanted) : Long.ZERO,
      GasUsed: isSet(object.GasUsed) ? Long.fromString(object.GasUsed) : Long.ZERO
    };
  },

  toJSON(message: ResponseCheckTx): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.GasWanted !== undefined && (obj.GasWanted = (message.GasWanted || Long.ZERO).toString());
    message.GasUsed !== undefined && (obj.GasUsed = (message.GasUsed || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(object: I): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.GasWanted = object.GasWanted !== undefined && object.GasWanted !== null ? Long.fromValue(object.GasWanted) : Long.ZERO;
    message.GasUsed = object.GasUsed !== undefined && object.GasUsed !== null ? Long.fromValue(object.GasUsed) : Long.ZERO;
    return message;
  }

};

function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    ResponseBase: undefined,
    GasWanted: Long.ZERO,
    GasUsed: Long.ZERO
  };
}

export const ResponseDeliverTx = {
  encode(message: ResponseDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    if (!message.GasWanted.isZero()) {
      writer.uint32(16).sint64(message.GasWanted);
    }

    if (!message.GasUsed.isZero()) {
      writer.uint32(24).sint64(message.GasUsed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.GasWanted = (reader.sint64() as Long);
          break;

        case 3:
          message.GasUsed = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseDeliverTx {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      GasWanted: isSet(object.GasWanted) ? Long.fromString(object.GasWanted) : Long.ZERO,
      GasUsed: isSet(object.GasUsed) ? Long.fromString(object.GasUsed) : Long.ZERO
    };
  },

  toJSON(message: ResponseDeliverTx): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    message.GasWanted !== undefined && (obj.GasWanted = (message.GasWanted || Long.ZERO).toString());
    message.GasUsed !== undefined && (obj.GasUsed = (message.GasUsed || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(object: I): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.GasWanted = object.GasWanted !== undefined && object.GasWanted !== null ? Long.fromValue(object.GasWanted) : Long.ZERO;
    message.GasUsed = object.GasUsed !== undefined && object.GasUsed !== null ? Long.fromValue(object.GasUsed) : Long.ZERO;
    return message;
  }

};

function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    ResponseBase: undefined,
    ValidatorUpdates: [],
    ConsensusParams: undefined,
    Events: []
  };
}

export const ResponseEndBlock = {
  encode(message: ResponseEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.ValidatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.ConsensusParams !== undefined) {
      ConsensusParams.encode(message.ConsensusParams, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Events) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        case 2:
          message.ValidatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ConsensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.Events.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseEndBlock {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined,
      ValidatorUpdates: Array.isArray(object?.ValidatorUpdates) ? object.ValidatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
      ConsensusParams: isSet(object.ConsensusParams) ? ConsensusParams.fromJSON(object.ConsensusParams) : undefined,
      Events: Array.isArray(object?.Events) ? object.Events.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: ResponseEndBlock): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);

    if (message.ValidatorUpdates) {
      obj.ValidatorUpdates = message.ValidatorUpdates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
    } else {
      obj.ValidatorUpdates = [];
    }

    message.ConsensusParams !== undefined && (obj.ConsensusParams = message.ConsensusParams ? ConsensusParams.toJSON(message.ConsensusParams) : undefined);

    if (message.Events) {
      obj.Events = message.Events.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Events = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseEndBlock>, I>>(object: I): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    message.ValidatorUpdates = object.ValidatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.ConsensusParams = object.ConsensusParams !== undefined && object.ConsensusParams !== null ? ConsensusParams.fromPartial(object.ConsensusParams) : undefined;
    message.Events = object.Events?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseResponseCommit(): ResponseCommit {
  return {
    ResponseBase: undefined
  };
}

export const ResponseCommit = {
  encode(message: ResponseCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ResponseBase !== undefined) {
      ResponseBase.encode(message.ResponseBase, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ResponseBase = ResponseBase.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseCommit {
    return {
      ResponseBase: isSet(object.ResponseBase) ? ResponseBase.fromJSON(object.ResponseBase) : undefined
    };
  },

  toJSON(message: ResponseCommit): unknown {
    const obj: any = {};
    message.ResponseBase !== undefined && (obj.ResponseBase = message.ResponseBase ? ResponseBase.toJSON(message.ResponseBase) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(object: I): ResponseCommit {
    const message = createBaseResponseCommit();
    message.ResponseBase = object.ResponseBase !== undefined && object.ResponseBase !== null ? ResponseBase.fromPartial(object.ResponseBase) : undefined;
    return message;
  }

};

function createBaseStringError(): StringError {
  return {
    Value: ""
  };
}

export const StringError = {
  encode(message: StringError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringError {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: StringError): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringError>, I>>(object: I): StringError {
    const message = createBaseStringError();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseConsensusParams(): ConsensusParams {
  return {
    Block: undefined,
    Validator: undefined
  };
}

export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Block !== undefined) {
      BlockParams.encode(message.Block, writer.uint32(10).fork()).ldelim();
    }

    if (message.Validator !== undefined) {
      ValidatorParams.encode(message.Validator, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.Validator = ValidatorParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConsensusParams {
    return {
      Block: isSet(object.Block) ? BlockParams.fromJSON(object.Block) : undefined,
      Validator: isSet(object.Validator) ? ValidatorParams.fromJSON(object.Validator) : undefined
    };
  },

  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.Block !== undefined && (obj.Block = message.Block ? BlockParams.toJSON(message.Block) : undefined);
    message.Validator !== undefined && (obj.Validator = message.Validator ? ValidatorParams.toJSON(message.Validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams {
    const message = createBaseConsensusParams();
    message.Block = object.Block !== undefined && object.Block !== null ? BlockParams.fromPartial(object.Block) : undefined;
    message.Validator = object.Validator !== undefined && object.Validator !== null ? ValidatorParams.fromPartial(object.Validator) : undefined;
    return message;
  }

};

function createBaseBlockParams(): BlockParams {
  return {
    MaxTxBytes: Long.ZERO,
    MaxDataBytes: Long.ZERO,
    MaxBlockBytes: Long.ZERO,
    MaxGas: Long.ZERO,
    TimeIotaMS: Long.ZERO
  };
}

export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.MaxTxBytes.isZero()) {
      writer.uint32(8).sint64(message.MaxTxBytes);
    }

    if (!message.MaxDataBytes.isZero()) {
      writer.uint32(16).sint64(message.MaxDataBytes);
    }

    if (!message.MaxBlockBytes.isZero()) {
      writer.uint32(24).sint64(message.MaxBlockBytes);
    }

    if (!message.MaxGas.isZero()) {
      writer.uint32(32).sint64(message.MaxGas);
    }

    if (!message.TimeIotaMS.isZero()) {
      writer.uint32(40).sint64(message.TimeIotaMS);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.MaxTxBytes = (reader.sint64() as Long);
          break;

        case 2:
          message.MaxDataBytes = (reader.sint64() as Long);
          break;

        case 3:
          message.MaxBlockBytes = (reader.sint64() as Long);
          break;

        case 4:
          message.MaxGas = (reader.sint64() as Long);
          break;

        case 5:
          message.TimeIotaMS = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockParams {
    return {
      MaxTxBytes: isSet(object.MaxTxBytes) ? Long.fromString(object.MaxTxBytes) : Long.ZERO,
      MaxDataBytes: isSet(object.MaxDataBytes) ? Long.fromString(object.MaxDataBytes) : Long.ZERO,
      MaxBlockBytes: isSet(object.MaxBlockBytes) ? Long.fromString(object.MaxBlockBytes) : Long.ZERO,
      MaxGas: isSet(object.MaxGas) ? Long.fromString(object.MaxGas) : Long.ZERO,
      TimeIotaMS: isSet(object.TimeIotaMS) ? Long.fromString(object.TimeIotaMS) : Long.ZERO
    };
  },

  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.MaxTxBytes !== undefined && (obj.MaxTxBytes = (message.MaxTxBytes || Long.ZERO).toString());
    message.MaxDataBytes !== undefined && (obj.MaxDataBytes = (message.MaxDataBytes || Long.ZERO).toString());
    message.MaxBlockBytes !== undefined && (obj.MaxBlockBytes = (message.MaxBlockBytes || Long.ZERO).toString());
    message.MaxGas !== undefined && (obj.MaxGas = (message.MaxGas || Long.ZERO).toString());
    message.TimeIotaMS !== undefined && (obj.TimeIotaMS = (message.TimeIotaMS || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams {
    const message = createBaseBlockParams();
    message.MaxTxBytes = object.MaxTxBytes !== undefined && object.MaxTxBytes !== null ? Long.fromValue(object.MaxTxBytes) : Long.ZERO;
    message.MaxDataBytes = object.MaxDataBytes !== undefined && object.MaxDataBytes !== null ? Long.fromValue(object.MaxDataBytes) : Long.ZERO;
    message.MaxBlockBytes = object.MaxBlockBytes !== undefined && object.MaxBlockBytes !== null ? Long.fromValue(object.MaxBlockBytes) : Long.ZERO;
    message.MaxGas = object.MaxGas !== undefined && object.MaxGas !== null ? Long.fromValue(object.MaxGas) : Long.ZERO;
    message.TimeIotaMS = object.TimeIotaMS !== undefined && object.TimeIotaMS !== null ? Long.fromValue(object.TimeIotaMS) : Long.ZERO;
    return message;
  }

};

function createBaseValidatorParams(): ValidatorParams {
  return {
    PubKeyTypeURLs: []
  };
}

export const ValidatorParams = {
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.PubKeyTypeURLs) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PubKeyTypeURLs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorParams {
    return {
      PubKeyTypeURLs: Array.isArray(object?.PubKeyTypeURLs) ? object.PubKeyTypeURLs.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};

    if (message.PubKeyTypeURLs) {
      obj.PubKeyTypeURLs = message.PubKeyTypeURLs.map(e => e);
    } else {
      obj.PubKeyTypeURLs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams {
    const message = createBaseValidatorParams();
    message.PubKeyTypeURLs = object.PubKeyTypeURLs?.map(e => e) || [];
    return message;
  }

};

function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    Address: "",
    PubKey: undefined,
    Power: Long.ZERO
  };
}

export const ValidatorUpdate = {
  encode(message: ValidatorUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }

    if (message.PubKey !== undefined) {
      Any.encode(message.PubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Power.isZero()) {
      writer.uint32(24).sint64(message.Power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Address = reader.string();
          break;

        case 2:
          message.PubKey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Power = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorUpdate {
    return {
      Address: isSet(object.Address) ? String(object.Address) : "",
      PubKey: isSet(object.PubKey) ? Any.fromJSON(object.PubKey) : undefined,
      Power: isSet(object.Power) ? Long.fromString(object.Power) : Long.ZERO
    };
  },

  toJSON(message: ValidatorUpdate): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.PubKey !== undefined && (obj.PubKey = message.PubKey ? Any.toJSON(message.PubKey) : undefined);
    message.Power !== undefined && (obj.Power = (message.Power || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(object: I): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.Address = object.Address ?? "";
    message.PubKey = object.PubKey !== undefined && object.PubKey !== null ? Any.fromPartial(object.PubKey) : undefined;
    message.Power = object.Power !== undefined && object.Power !== null ? Long.fromValue(object.Power) : Long.ZERO;
    return message;
  }

};

function createBaseLastCommitInfo(): LastCommitInfo {
  return {
    Round: 0,
    Votes: []
  };
}

export const LastCommitInfo = {
  encode(message: LastCommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Round !== 0) {
      writer.uint32(8).sint32(message.Round);
    }

    for (const v of message.Votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastCommitInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Round = reader.sint32();
          break;

        case 2:
          message.Votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LastCommitInfo {
    return {
      Round: isSet(object.Round) ? Number(object.Round) : 0,
      Votes: Array.isArray(object?.Votes) ? object.Votes.map((e: any) => VoteInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: LastCommitInfo): unknown {
    const obj: any = {};
    message.Round !== undefined && (obj.Round = Math.round(message.Round));

    if (message.Votes) {
      obj.Votes = message.Votes.map(e => e ? VoteInfo.toJSON(e) : undefined);
    } else {
      obj.Votes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastCommitInfo>, I>>(object: I): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.Round = object.Round ?? 0;
    message.Votes = object.Votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseVoteInfo(): VoteInfo {
  return {
    Address: "",
    Power: Long.ZERO,
    SignedLastBlock: false
  };
}

export const VoteInfo = {
  encode(message: VoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }

    if (!message.Power.isZero()) {
      writer.uint32(16).sint64(message.Power);
    }

    if (message.SignedLastBlock === true) {
      writer.uint32(24).bool(message.SignedLastBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Address = reader.string();
          break;

        case 2:
          message.Power = (reader.sint64() as Long);
          break;

        case 3:
          message.SignedLastBlock = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteInfo {
    return {
      Address: isSet(object.Address) ? String(object.Address) : "",
      Power: isSet(object.Power) ? Long.fromString(object.Power) : Long.ZERO,
      SignedLastBlock: isSet(object.SignedLastBlock) ? Boolean(object.SignedLastBlock) : false
    };
  },

  toJSON(message: VoteInfo): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.Power !== undefined && (obj.Power = (message.Power || Long.ZERO).toString());
    message.SignedLastBlock !== undefined && (obj.SignedLastBlock = message.SignedLastBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo {
    const message = createBaseVoteInfo();
    message.Address = object.Address ?? "";
    message.Power = object.Power !== undefined && object.Power !== null ? Long.fromValue(object.Power) : Long.ZERO;
    message.SignedLastBlock = object.SignedLastBlock ?? false;
    return message;
  }

};

function createBaseEventString(): EventString {
  return {
    Value: ""
  };
}

export const EventString = {
  encode(message: EventString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventString();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventString {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: EventString): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventString>, I>>(object: I): EventString {
    const message = createBaseEventString();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseMockHeader(): MockHeader {
  return {
    Version: "",
    ChainID: "",
    Height: Long.ZERO,
    Time: undefined,
    NumTxs: Long.ZERO,
    TotalTxs: Long.ZERO
  };
}

export const MockHeader = {
  encode(message: MockHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }

    if (message.ChainID !== "") {
      writer.uint32(18).string(message.ChainID);
    }

    if (!message.Height.isZero()) {
      writer.uint32(24).sint64(message.Height);
    }

    if (message.Time !== undefined) {
      Timestamp.encode(toTimestamp(message.Time), writer.uint32(34).fork()).ldelim();
    }

    if (!message.NumTxs.isZero()) {
      writer.uint32(40).sint64(message.NumTxs);
    }

    if (!message.TotalTxs.isZero()) {
      writer.uint32(48).sint64(message.TotalTxs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Version = reader.string();
          break;

        case 2:
          message.ChainID = reader.string();
          break;

        case 3:
          message.Height = (reader.sint64() as Long);
          break;

        case 4:
          message.Time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.NumTxs = (reader.sint64() as Long);
          break;

        case 6:
          message.TotalTxs = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockHeader {
    return {
      Version: isSet(object.Version) ? String(object.Version) : "",
      ChainID: isSet(object.ChainID) ? String(object.ChainID) : "",
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Time: isSet(object.Time) ? fromJsonTimestamp(object.Time) : undefined,
      NumTxs: isSet(object.NumTxs) ? Long.fromString(object.NumTxs) : Long.ZERO,
      TotalTxs: isSet(object.TotalTxs) ? Long.fromString(object.TotalTxs) : Long.ZERO
    };
  },

  toJSON(message: MockHeader): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = message.Version);
    message.ChainID !== undefined && (obj.ChainID = message.ChainID);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Time !== undefined && (obj.Time = message.Time.toISOString());
    message.NumTxs !== undefined && (obj.NumTxs = (message.NumTxs || Long.ZERO).toString());
    message.TotalTxs !== undefined && (obj.TotalTxs = (message.TotalTxs || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockHeader>, I>>(object: I): MockHeader {
    const message = createBaseMockHeader();
    message.Version = object.Version ?? "";
    message.ChainID = object.ChainID ?? "";
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Time = object.Time ?? undefined;
    message.NumTxs = object.NumTxs !== undefined && object.NumTxs !== null ? Long.fromValue(object.NumTxs) : Long.ZERO;
    message.TotalTxs = object.TotalTxs !== undefined && object.TotalTxs !== null ? Long.fromValue(object.TotalTxs) : Long.ZERO;
    return message;
  }

};