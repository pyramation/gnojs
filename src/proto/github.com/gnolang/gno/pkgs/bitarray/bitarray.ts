/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** messages */
export interface BitArray {
  Bits: Long;
  Elems: Long[];
}

function createBaseBitArray(): BitArray {
  return {
    Bits: Long.ZERO,
    Elems: []
  };
}

export const BitArray = {
  encode(message: BitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Bits.isZero()) {
      writer.uint32(8).sint64(message.Bits);
    }

    writer.uint32(18).fork();

    for (const v of message.Elems) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Bits = (reader.sint64() as Long);
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.Elems.push((reader.uint64() as Long));
            }
          } else {
            message.Elems.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BitArray {
    return {
      Bits: isSet(object.Bits) ? Long.fromString(object.Bits) : Long.ZERO,
      Elems: Array.isArray(object?.Elems) ? object.Elems.map((e: any) => Long.fromString(e)) : []
    };
  },

  toJSON(message: BitArray): unknown {
    const obj: any = {};
    message.Bits !== undefined && (obj.Bits = (message.Bits || Long.ZERO).toString());

    if (message.Elems) {
      obj.Elems = message.Elems.map(e => (e || Long.UZERO).toString());
    } else {
      obj.Elems = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BitArray>, I>>(object: I): BitArray {
    const message = createBaseBitArray();
    message.Bits = object.Bits !== undefined && object.Bits !== null ? Long.fromValue(object.Bits) : Long.ZERO;
    message.Elems = object.Elems?.map(e => Long.fromValue(e)) || [];
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