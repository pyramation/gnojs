import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";

/** messages */
export interface TxMessage {
  Tx: Uint8Array;
}

function createBaseTxMessage(): TxMessage {
  return {
    Tx: new Uint8Array()
  };
}

export const TxMessage = {
  encode(message: TxMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Tx.length !== 0) {
      writer.uint32(10).bytes(message.Tx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Tx = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxMessage {
    return {
      Tx: isSet(object.Tx) ? bytesFromBase64(object.Tx) : new Uint8Array()
    };
  },

  toJSON(message: TxMessage): unknown {
    const obj: any = {};
    message.Tx !== undefined && (obj.Tx = base64FromBytes(message.Tx !== undefined ? message.Tx : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxMessage>, I>>(object: I): TxMessage {
    const message = createBaseTxMessage();
    message.Tx = object.Tx ?? new Uint8Array();
    return message;
  }

};