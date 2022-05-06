/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Block } from "../../../../../../github.com/gnolang/gno/pkgs/bft/types/types";

/** messages */
export interface BlockRequest {
  Height: Long;
}
export interface BlockResponse {
  Block: Block;
}
export interface NoBlockResponse {
  Height: Long;
}
export interface StatusRequest {
  Height: Long;
}
export interface StatusResponse {
  Height: Long;
}

function createBaseBlockRequest(): BlockRequest {
  return {
    Height: Long.ZERO
  };
}

export const BlockRequest = {
  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockRequest {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockRequest>, I>>(object: I): BlockRequest {
    const message = createBaseBlockRequest();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    return message;
  }

};

function createBaseBlockResponse(): BlockResponse {
  return {
    Block: undefined
  };
}

export const BlockResponse = {
  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Block !== undefined) {
      Block.encode(message.Block, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Block = Block.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockResponse {
    return {
      Block: isSet(object.Block) ? Block.fromJSON(object.Block) : undefined
    };
  },

  toJSON(message: BlockResponse): unknown {
    const obj: any = {};
    message.Block !== undefined && (obj.Block = message.Block ? Block.toJSON(message.Block) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockResponse>, I>>(object: I): BlockResponse {
    const message = createBaseBlockResponse();
    message.Block = object.Block !== undefined && object.Block !== null ? Block.fromPartial(object.Block) : undefined;
    return message;
  }

};

function createBaseNoBlockResponse(): NoBlockResponse {
  return {
    Height: Long.ZERO
  };
}

export const NoBlockResponse = {
  encode(message: NoBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NoBlockResponse {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: NoBlockResponse): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoBlockResponse>, I>>(object: I): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    return message;
  }

};

function createBaseStatusRequest(): StatusRequest {
  return {
    Height: Long.ZERO
  };
}

export const StatusRequest = {
  encode(message: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StatusRequest {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: StatusRequest): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatusRequest>, I>>(object: I): StatusRequest {
    const message = createBaseStatusRequest();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    return message;
  }

};

function createBaseStatusResponse(): StatusResponse {
  return {
    Height: Long.ZERO
  };
}

export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StatusResponse {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatusResponse>, I>>(object: I): StatusResponse {
    const message = createBaseStatusResponse();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
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