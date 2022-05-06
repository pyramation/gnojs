/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** messages */
export interface Bip44Params {
  Purpose: number;
  CoinType: number;
  Account: number;
  Change: boolean;
  AddressIndex: number;
}

function createBaseBip44Params(): Bip44Params {
  return {
    Purpose: 0,
    CoinType: 0,
    Account: 0,
    Change: false,
    AddressIndex: 0
  };
}

export const Bip44Params = {
  encode(message: Bip44Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Purpose !== 0) {
      writer.uint32(8).uint32(message.Purpose);
    }

    if (message.CoinType !== 0) {
      writer.uint32(16).uint32(message.CoinType);
    }

    if (message.Account !== 0) {
      writer.uint32(24).uint32(message.Account);
    }

    if (message.Change === true) {
      writer.uint32(32).bool(message.Change);
    }

    if (message.AddressIndex !== 0) {
      writer.uint32(40).uint32(message.AddressIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bip44Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBip44Params();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Purpose = reader.uint32();
          break;

        case 2:
          message.CoinType = reader.uint32();
          break;

        case 3:
          message.Account = reader.uint32();
          break;

        case 4:
          message.Change = reader.bool();
          break;

        case 5:
          message.AddressIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Bip44Params {
    return {
      Purpose: isSet(object.Purpose) ? Number(object.Purpose) : 0,
      CoinType: isSet(object.CoinType) ? Number(object.CoinType) : 0,
      Account: isSet(object.Account) ? Number(object.Account) : 0,
      Change: isSet(object.Change) ? Boolean(object.Change) : false,
      AddressIndex: isSet(object.AddressIndex) ? Number(object.AddressIndex) : 0
    };
  },

  toJSON(message: Bip44Params): unknown {
    const obj: any = {};
    message.Purpose !== undefined && (obj.Purpose = Math.round(message.Purpose));
    message.CoinType !== undefined && (obj.CoinType = Math.round(message.CoinType));
    message.Account !== undefined && (obj.Account = Math.round(message.Account));
    message.Change !== undefined && (obj.Change = message.Change);
    message.AddressIndex !== undefined && (obj.AddressIndex = Math.round(message.AddressIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bip44Params>, I>>(object: I): Bip44Params {
    const message = createBaseBip44Params();
    message.Purpose = object.Purpose ?? 0;
    message.CoinType = object.CoinType ?? 0;
    message.Account = object.Account ?? 0;
    message.Change = object.Change ?? false;
    message.AddressIndex = object.AddressIndex ?? 0;
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