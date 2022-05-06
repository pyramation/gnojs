/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../../google/protobuf/any";

/** messages */
export interface BaseAccount {
  Address: string;
  Coins: string;
  PubKey: Any;
  AccountNumber: Long;
  Sequence: Long;
}
export interface MemFile {
  Name: string;
  Body: string;
}
export interface MemPackage {
  Name: string;
  Path: string;
  Files: MemFile[];
}
export interface InternalError {}
export interface TxDecodeError {}
export interface InvalidSequenceError {}
export interface UnauthorizedError {}
export interface InsufficientFundsError {}
export interface UnknownRequestError {}
export interface InvalidAddressError {}
export interface UnknownAddressError {}
export interface InvalidPubKeyError {}
export interface InsufficientCoinsError {}
export interface OutOfGasError {}
export interface MemoTooLargeError {}
export interface InsufficientFeeError {}
export interface TooManySignaturesError {}
export interface NoSignaturesError {}
export interface GasOverflowError {}

function createBaseBaseAccount(): BaseAccount {
  return {
    Address: "",
    Coins: "",
    PubKey: undefined,
    AccountNumber: Long.UZERO,
    Sequence: Long.UZERO
  };
}

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }

    if (message.Coins !== "") {
      writer.uint32(18).string(message.Coins);
    }

    if (message.PubKey !== undefined) {
      Any.encode(message.PubKey, writer.uint32(26).fork()).ldelim();
    }

    if (!message.AccountNumber.isZero()) {
      writer.uint32(32).uint64(message.AccountNumber);
    }

    if (!message.Sequence.isZero()) {
      writer.uint32(40).uint64(message.Sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Address = reader.string();
          break;

        case 2:
          message.Coins = reader.string();
          break;

        case 3:
          message.PubKey = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.AccountNumber = (reader.uint64() as Long);
          break;

        case 5:
          message.Sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BaseAccount {
    return {
      Address: isSet(object.Address) ? String(object.Address) : "",
      Coins: isSet(object.Coins) ? String(object.Coins) : "",
      PubKey: isSet(object.PubKey) ? Any.fromJSON(object.PubKey) : undefined,
      AccountNumber: isSet(object.AccountNumber) ? Long.fromString(object.AccountNumber) : Long.UZERO,
      Sequence: isSet(object.Sequence) ? Long.fromString(object.Sequence) : Long.UZERO
    };
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.Coins !== undefined && (obj.Coins = message.Coins);
    message.PubKey !== undefined && (obj.PubKey = message.PubKey ? Any.toJSON(message.PubKey) : undefined);
    message.AccountNumber !== undefined && (obj.AccountNumber = (message.AccountNumber || Long.UZERO).toString());
    message.Sequence !== undefined && (obj.Sequence = (message.Sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount {
    const message = createBaseBaseAccount();
    message.Address = object.Address ?? "";
    message.Coins = object.Coins ?? "";
    message.PubKey = object.PubKey !== undefined && object.PubKey !== null ? Any.fromPartial(object.PubKey) : undefined;
    message.AccountNumber = object.AccountNumber !== undefined && object.AccountNumber !== null ? Long.fromValue(object.AccountNumber) : Long.UZERO;
    message.Sequence = object.Sequence !== undefined && object.Sequence !== null ? Long.fromValue(object.Sequence) : Long.UZERO;
    return message;
  }

};

function createBaseMemFile(): MemFile {
  return {
    Name: "",
    Body: ""
  };
}

export const MemFile = {
  encode(message: MemFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }

    if (message.Body !== "") {
      writer.uint32(18).string(message.Body);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemFile();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;

        case 2:
          message.Body = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MemFile {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Body: isSet(object.Body) ? String(object.Body) : ""
    };
  },

  toJSON(message: MemFile): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    message.Body !== undefined && (obj.Body = message.Body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemFile>, I>>(object: I): MemFile {
    const message = createBaseMemFile();
    message.Name = object.Name ?? "";
    message.Body = object.Body ?? "";
    return message;
  }

};

function createBaseMemPackage(): MemPackage {
  return {
    Name: "",
    Path: "",
    Files: []
  };
}

export const MemPackage = {
  encode(message: MemPackage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }

    if (message.Path !== "") {
      writer.uint32(18).string(message.Path);
    }

    for (const v of message.Files) {
      MemFile.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemPackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemPackage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;

        case 2:
          message.Path = reader.string();
          break;

        case 3:
          message.Files.push(MemFile.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MemPackage {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Path: isSet(object.Path) ? String(object.Path) : "",
      Files: Array.isArray(object?.Files) ? object.Files.map((e: any) => MemFile.fromJSON(e)) : []
    };
  },

  toJSON(message: MemPackage): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    message.Path !== undefined && (obj.Path = message.Path);

    if (message.Files) {
      obj.Files = message.Files.map(e => e ? MemFile.toJSON(e) : undefined);
    } else {
      obj.Files = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemPackage>, I>>(object: I): MemPackage {
    const message = createBaseMemPackage();
    message.Name = object.Name ?? "";
    message.Path = object.Path ?? "";
    message.Files = object.Files?.map(e => MemFile.fromPartial(e)) || [];
    return message;
  }

};

function createBaseInternalError(): InternalError {
  return {};
}

export const InternalError = {
  encode(_: InternalError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalError();

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

  fromJSON(_: any): InternalError {
    return {};
  },

  toJSON(_: InternalError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InternalError>, I>>(_: I): InternalError {
    const message = createBaseInternalError();
    return message;
  }

};

function createBaseTxDecodeError(): TxDecodeError {
  return {};
}

export const TxDecodeError = {
  encode(_: TxDecodeError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDecodeError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeError();

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

  fromJSON(_: any): TxDecodeError {
    return {};
  },

  toJSON(_: TxDecodeError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxDecodeError>, I>>(_: I): TxDecodeError {
    const message = createBaseTxDecodeError();
    return message;
  }

};

function createBaseInvalidSequenceError(): InvalidSequenceError {
  return {};
}

export const InvalidSequenceError = {
  encode(_: InvalidSequenceError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidSequenceError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidSequenceError();

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

  fromJSON(_: any): InvalidSequenceError {
    return {};
  },

  toJSON(_: InvalidSequenceError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidSequenceError>, I>>(_: I): InvalidSequenceError {
    const message = createBaseInvalidSequenceError();
    return message;
  }

};

function createBaseUnauthorizedError(): UnauthorizedError {
  return {};
}

export const UnauthorizedError = {
  encode(_: UnauthorizedError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnauthorizedError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnauthorizedError();

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

  fromJSON(_: any): UnauthorizedError {
    return {};
  },

  toJSON(_: UnauthorizedError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnauthorizedError>, I>>(_: I): UnauthorizedError {
    const message = createBaseUnauthorizedError();
    return message;
  }

};

function createBaseInsufficientFundsError(): InsufficientFundsError {
  return {};
}

export const InsufficientFundsError = {
  encode(_: InsufficientFundsError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFundsError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsufficientFundsError();

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

  fromJSON(_: any): InsufficientFundsError {
    return {};
  },

  toJSON(_: InsufficientFundsError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InsufficientFundsError>, I>>(_: I): InsufficientFundsError {
    const message = createBaseInsufficientFundsError();
    return message;
  }

};

function createBaseUnknownRequestError(): UnknownRequestError {
  return {};
}

export const UnknownRequestError = {
  encode(_: UnknownRequestError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownRequestError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownRequestError();

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

  fromJSON(_: any): UnknownRequestError {
    return {};
  },

  toJSON(_: UnknownRequestError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnknownRequestError>, I>>(_: I): UnknownRequestError {
    const message = createBaseUnknownRequestError();
    return message;
  }

};

function createBaseInvalidAddressError(): InvalidAddressError {
  return {};
}

export const InvalidAddressError = {
  encode(_: InvalidAddressError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidAddressError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidAddressError();

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

  fromJSON(_: any): InvalidAddressError {
    return {};
  },

  toJSON(_: InvalidAddressError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidAddressError>, I>>(_: I): InvalidAddressError {
    const message = createBaseInvalidAddressError();
    return message;
  }

};

function createBaseUnknownAddressError(): UnknownAddressError {
  return {};
}

export const UnknownAddressError = {
  encode(_: UnknownAddressError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownAddressError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownAddressError();

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

  fromJSON(_: any): UnknownAddressError {
    return {};
  },

  toJSON(_: UnknownAddressError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnknownAddressError>, I>>(_: I): UnknownAddressError {
    const message = createBaseUnknownAddressError();
    return message;
  }

};

function createBaseInvalidPubKeyError(): InvalidPubKeyError {
  return {};
}

export const InvalidPubKeyError = {
  encode(_: InvalidPubKeyError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPubKeyError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidPubKeyError();

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

  fromJSON(_: any): InvalidPubKeyError {
    return {};
  },

  toJSON(_: InvalidPubKeyError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidPubKeyError>, I>>(_: I): InvalidPubKeyError {
    const message = createBaseInvalidPubKeyError();
    return message;
  }

};

function createBaseInsufficientCoinsError(): InsufficientCoinsError {
  return {};
}

export const InsufficientCoinsError = {
  encode(_: InsufficientCoinsError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientCoinsError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsufficientCoinsError();

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

  fromJSON(_: any): InsufficientCoinsError {
    return {};
  },

  toJSON(_: InsufficientCoinsError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InsufficientCoinsError>, I>>(_: I): InsufficientCoinsError {
    const message = createBaseInsufficientCoinsError();
    return message;
  }

};

function createBaseOutOfGasError(): OutOfGasError {
  return {};
}

export const OutOfGasError = {
  encode(_: OutOfGasError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutOfGasError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutOfGasError();

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

  fromJSON(_: any): OutOfGasError {
    return {};
  },

  toJSON(_: OutOfGasError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OutOfGasError>, I>>(_: I): OutOfGasError {
    const message = createBaseOutOfGasError();
    return message;
  }

};

function createBaseMemoTooLargeError(): MemoTooLargeError {
  return {};
}

export const MemoTooLargeError = {
  encode(_: MemoTooLargeError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoTooLargeError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoTooLargeError();

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

  fromJSON(_: any): MemoTooLargeError {
    return {};
  },

  toJSON(_: MemoTooLargeError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MemoTooLargeError>, I>>(_: I): MemoTooLargeError {
    const message = createBaseMemoTooLargeError();
    return message;
  }

};

function createBaseInsufficientFeeError(): InsufficientFeeError {
  return {};
}

export const InsufficientFeeError = {
  encode(_: InsufficientFeeError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFeeError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsufficientFeeError();

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

  fromJSON(_: any): InsufficientFeeError {
    return {};
  },

  toJSON(_: InsufficientFeeError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InsufficientFeeError>, I>>(_: I): InsufficientFeeError {
    const message = createBaseInsufficientFeeError();
    return message;
  }

};

function createBaseTooManySignaturesError(): TooManySignaturesError {
  return {};
}

export const TooManySignaturesError = {
  encode(_: TooManySignaturesError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TooManySignaturesError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTooManySignaturesError();

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

  fromJSON(_: any): TooManySignaturesError {
    return {};
  },

  toJSON(_: TooManySignaturesError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TooManySignaturesError>, I>>(_: I): TooManySignaturesError {
    const message = createBaseTooManySignaturesError();
    return message;
  }

};

function createBaseNoSignaturesError(): NoSignaturesError {
  return {};
}

export const NoSignaturesError = {
  encode(_: NoSignaturesError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoSignaturesError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoSignaturesError();

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

  fromJSON(_: any): NoSignaturesError {
    return {};
  },

  toJSON(_: NoSignaturesError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoSignaturesError>, I>>(_: I): NoSignaturesError {
    const message = createBaseNoSignaturesError();
    return message;
  }

};

function createBaseGasOverflowError(): GasOverflowError {
  return {};
}

export const GasOverflowError = {
  encode(_: GasOverflowError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasOverflowError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasOverflowError();

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

  fromJSON(_: any): GasOverflowError {
    return {};
  },

  toJSON(_: GasOverflowError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GasOverflowError>, I>>(_: I): GasOverflowError {
    const message = createBaseGasOverflowError();
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}