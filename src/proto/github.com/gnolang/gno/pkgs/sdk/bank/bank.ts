import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";

/** messages */
export interface NoInputsError {}
export interface NoOutputsError {}
export interface InputOutputMismatchError {}
export interface MsgSend {
  FromAddress: string;
  ToAddress: string;
  Amount: string;
}

function createBaseNoInputsError(): NoInputsError {
  return {};
}

export const NoInputsError = {
  encode(_: NoInputsError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoInputsError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoInputsError();

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

  fromJSON(_: any): NoInputsError {
    return {};
  },

  toJSON(_: NoInputsError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoInputsError>, I>>(_: I): NoInputsError {
    const message = createBaseNoInputsError();
    return message;
  }

};

function createBaseNoOutputsError(): NoOutputsError {
  return {};
}

export const NoOutputsError = {
  encode(_: NoOutputsError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoOutputsError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoOutputsError();

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

  fromJSON(_: any): NoOutputsError {
    return {};
  },

  toJSON(_: NoOutputsError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoOutputsError>, I>>(_: I): NoOutputsError {
    const message = createBaseNoOutputsError();
    return message;
  }

};

function createBaseInputOutputMismatchError(): InputOutputMismatchError {
  return {};
}

export const InputOutputMismatchError = {
  encode(_: InputOutputMismatchError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InputOutputMismatchError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputOutputMismatchError();

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

  fromJSON(_: any): InputOutputMismatchError {
    return {};
  },

  toJSON(_: InputOutputMismatchError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InputOutputMismatchError>, I>>(_: I): InputOutputMismatchError {
    const message = createBaseInputOutputMismatchError();
    return message;
  }

};

function createBaseMsgSend(): MsgSend {
  return {
    FromAddress: "",
    ToAddress: "",
    Amount: ""
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FromAddress !== "") {
      writer.uint32(10).string(message.FromAddress);
    }

    if (message.ToAddress !== "") {
      writer.uint32(18).string(message.ToAddress);
    }

    if (message.Amount !== "") {
      writer.uint32(26).string(message.Amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.FromAddress = reader.string();
          break;

        case 2:
          message.ToAddress = reader.string();
          break;

        case 3:
          message.Amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      FromAddress: isSet(object.FromAddress) ? String(object.FromAddress) : "",
      ToAddress: isSet(object.ToAddress) ? String(object.ToAddress) : "",
      Amount: isSet(object.Amount) ? String(object.Amount) : ""
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.FromAddress !== undefined && (obj.FromAddress = message.FromAddress);
    message.ToAddress !== undefined && (obj.ToAddress = message.ToAddress);
    message.Amount !== undefined && (obj.Amount = message.Amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.FromAddress = object.FromAddress ?? "";
    message.ToAddress = object.ToAddress ?? "";
    message.Amount = object.Amount ?? "";
    return message;
  }

};