import { Any } from "../../../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";

/** messages */
export interface PubKeyMultisig {
  K: Long;
  PubKeys: Any[];
}

function createBasePubKeyMultisig(): PubKeyMultisig {
  return {
    K: Long.UZERO,
    PubKeys: []
  };
}

export const PubKeyMultisig = {
  encode(message: PubKeyMultisig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.K.isZero()) {
      writer.uint32(8).uint64(message.K);
    }

    for (const v of message.PubKeys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyMultisig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyMultisig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.K = (reader.uint64() as Long);
          break;

        case 2:
          message.PubKeys.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PubKeyMultisig {
    return {
      K: isSet(object.K) ? Long.fromString(object.K) : Long.UZERO,
      PubKeys: Array.isArray(object?.PubKeys) ? object.PubKeys.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: PubKeyMultisig): unknown {
    const obj: any = {};
    message.K !== undefined && (obj.K = (message.K || Long.UZERO).toString());

    if (message.PubKeys) {
      obj.PubKeys = message.PubKeys.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.PubKeys = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PubKeyMultisig>, I>>(object: I): PubKeyMultisig {
    const message = createBasePubKeyMultisig();
    message.K = object.K !== undefined && object.K !== null ? Long.fromValue(object.K) : Long.UZERO;
    message.PubKeys = object.PubKeys?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};