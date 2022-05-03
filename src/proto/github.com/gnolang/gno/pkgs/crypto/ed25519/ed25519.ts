/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** messages */
export interface PubKeyEd25519 {
  Value: Uint8Array;
}
export interface PrivKeyEd25519 {
  Value: Uint8Array;
}

function createBasePubKeyEd25519(): PubKeyEd25519 {
  return {
    Value: new Uint8Array()
  };
}

export const PubKeyEd25519 = {
  encode(message: PubKeyEd25519, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value.length !== 0) {
      writer.uint32(10).bytes(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyEd25519 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyEd25519();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PubKeyEd25519 {
    return {
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array()
    };
  },

  toJSON(message: PubKeyEd25519): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PubKeyEd25519>, I>>(object: I): PubKeyEd25519 {
    const message = createBasePubKeyEd25519();
    message.Value = object.Value ?? new Uint8Array();
    return message;
  }

};

function createBasePrivKeyEd25519(): PrivKeyEd25519 {
  return {
    Value: new Uint8Array()
  };
}

export const PrivKeyEd25519 = {
  encode(message: PrivKeyEd25519, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value.length !== 0) {
      writer.uint32(10).bytes(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivKeyEd25519 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKeyEd25519();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrivKeyEd25519 {
    return {
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array()
    };
  },

  toJSON(message: PrivKeyEd25519): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivKeyEd25519>, I>>(object: I): PrivKeyEd25519 {
    const message = createBasePrivKeyEd25519();
    message.Value = object.Value ?? new Uint8Array();
    return message;
  }

};
declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;

var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);

  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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