import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";

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