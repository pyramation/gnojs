import { MemPackage } from "../../std/std";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";

/** messages */
export interface m_call {
  Caller: string;
  Send: string;
  PkgPath: string;
  Func: string;
  Args: string[];
}
export interface m_addpkg {
  Creator: string;
  Package: MemPackage;
  Deposit: string;
}
export interface InvalidPkgPathError {}
export interface InvalidStmtError {}
export interface InvalidExprError {}

function createBaseM_call(): m_call {
  return {
    Caller: "",
    Send: "",
    PkgPath: "",
    Func: "",
    Args: []
  };
}

export const m_call = {
  encode(message: m_call, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Caller !== "") {
      writer.uint32(10).string(message.Caller);
    }

    if (message.Send !== "") {
      writer.uint32(18).string(message.Send);
    }

    if (message.PkgPath !== "") {
      writer.uint32(26).string(message.PkgPath);
    }

    if (message.Func !== "") {
      writer.uint32(34).string(message.Func);
    }

    for (const v of message.Args) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): m_call {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseM_call();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Caller = reader.string();
          break;

        case 2:
          message.Send = reader.string();
          break;

        case 3:
          message.PkgPath = reader.string();
          break;

        case 4:
          message.Func = reader.string();
          break;

        case 5:
          message.Args.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): m_call {
    return {
      Caller: isSet(object.Caller) ? String(object.Caller) : "",
      Send: isSet(object.Send) ? String(object.Send) : "",
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      Func: isSet(object.Func) ? String(object.Func) : "",
      Args: Array.isArray(object?.Args) ? object.Args.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: m_call): unknown {
    const obj: any = {};
    message.Caller !== undefined && (obj.Caller = message.Caller);
    message.Send !== undefined && (obj.Send = message.Send);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    message.Func !== undefined && (obj.Func = message.Func);

    if (message.Args) {
      obj.Args = message.Args.map(e => e);
    } else {
      obj.Args = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<m_call>, I>>(object: I): m_call {
    const message = createBaseM_call();
    message.Caller = object.Caller ?? "";
    message.Send = object.Send ?? "";
    message.PkgPath = object.PkgPath ?? "";
    message.Func = object.Func ?? "";
    message.Args = object.Args?.map(e => e) || [];
    return message;
  }

};

function createBaseM_addpkg(): m_addpkg {
  return {
    Creator: "",
    Package: undefined,
    Deposit: ""
  };
}

export const m_addpkg = {
  encode(message: m_addpkg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Creator !== "") {
      writer.uint32(10).string(message.Creator);
    }

    if (message.Package !== undefined) {
      MemPackage.encode(message.Package, writer.uint32(18).fork()).ldelim();
    }

    if (message.Deposit !== "") {
      writer.uint32(26).string(message.Deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): m_addpkg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseM_addpkg();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Creator = reader.string();
          break;

        case 2:
          message.Package = MemPackage.decode(reader, reader.uint32());
          break;

        case 3:
          message.Deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): m_addpkg {
    return {
      Creator: isSet(object.Creator) ? String(object.Creator) : "",
      Package: isSet(object.Package) ? MemPackage.fromJSON(object.Package) : undefined,
      Deposit: isSet(object.Deposit) ? String(object.Deposit) : ""
    };
  },

  toJSON(message: m_addpkg): unknown {
    const obj: any = {};
    message.Creator !== undefined && (obj.Creator = message.Creator);
    message.Package !== undefined && (obj.Package = message.Package ? MemPackage.toJSON(message.Package) : undefined);
    message.Deposit !== undefined && (obj.Deposit = message.Deposit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<m_addpkg>, I>>(object: I): m_addpkg {
    const message = createBaseM_addpkg();
    message.Creator = object.Creator ?? "";
    message.Package = object.Package !== undefined && object.Package !== null ? MemPackage.fromPartial(object.Package) : undefined;
    message.Deposit = object.Deposit ?? "";
    return message;
  }

};

function createBaseInvalidPkgPathError(): InvalidPkgPathError {
  return {};
}

export const InvalidPkgPathError = {
  encode(_: InvalidPkgPathError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPkgPathError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidPkgPathError();

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

  fromJSON(_: any): InvalidPkgPathError {
    return {};
  },

  toJSON(_: InvalidPkgPathError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidPkgPathError>, I>>(_: I): InvalidPkgPathError {
    const message = createBaseInvalidPkgPathError();
    return message;
  }

};

function createBaseInvalidStmtError(): InvalidStmtError {
  return {};
}

export const InvalidStmtError = {
  encode(_: InvalidStmtError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidStmtError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidStmtError();

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

  fromJSON(_: any): InvalidStmtError {
    return {};
  },

  toJSON(_: InvalidStmtError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidStmtError>, I>>(_: I): InvalidStmtError {
    const message = createBaseInvalidStmtError();
    return message;
  }

};

function createBaseInvalidExprError(): InvalidExprError {
  return {};
}

export const InvalidExprError = {
  encode(_: InvalidExprError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidExprError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidExprError();

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

  fromJSON(_: any): InvalidExprError {
    return {};
  },

  toJSON(_: InvalidExprError): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidExprError>, I>>(_: I): InvalidExprError {
    const message = createBaseInvalidExprError();
    return message;
  }

};