/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** messages */
export interface ProofOp {
  Type: string;
  Key: Uint8Array;
  Data: Uint8Array;
}
export interface Proof {
  Ops: ProofOp[];
}

function createBaseProofOp(): ProofOp {
  return {
    Type: "",
    Key: new Uint8Array(),
    Data: new Uint8Array()
  };
}

export const ProofOp = {
  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== "") {
      writer.uint32(10).string(message.Type);
    }

    if (message.Key.length !== 0) {
      writer.uint32(18).bytes(message.Key);
    }

    if (message.Data.length !== 0) {
      writer.uint32(26).bytes(message.Data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = reader.string();
          break;

        case 2:
          message.Key = reader.bytes();
          break;

        case 3:
          message.Data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProofOp {
    return {
      Type: isSet(object.Type) ? String(object.Type) : "",
      Key: isSet(object.Key) ? bytesFromBase64(object.Key) : new Uint8Array(),
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array()
    };
  },

  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = message.Type);
    message.Key !== undefined && (obj.Key = base64FromBytes(message.Key !== undefined ? message.Key : new Uint8Array()));
    message.Data !== undefined && (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp {
    const message = createBaseProofOp();
    message.Type = object.Type ?? "";
    message.Key = object.Key ?? new Uint8Array();
    message.Data = object.Data ?? new Uint8Array();
    return message;
  }

};

function createBaseProof(): Proof {
  return {
    Ops: []
  };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Ops.push(ProofOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proof {
    return {
      Ops: Array.isArray(object?.Ops) ? object.Ops.map((e: any) => ProofOp.fromJSON(e)) : []
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};

    if (message.Ops) {
      obj.Ops = message.Ops.map(e => e ? ProofOp.toJSON(e) : undefined);
    } else {
      obj.Ops = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.Ops = object.Ops?.map(e => ProofOp.fromPartial(e)) || [];
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