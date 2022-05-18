import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/** messages */
export interface ProofOp {
  Type: string;
  Key: Uint8Array;
  Data: Uint8Array;
}
export interface Proof {
  Ops: ProofOp[];
}
export interface SimpleProof {
  Total: Long;
  Index: Long;
  LeafHash: Uint8Array;
  Aunts: Uint8Array[];
}
export interface SimpleProofNode {
  Hash: Uint8Array;
  Parent: SimpleProofNode;
  Left: SimpleProofNode;
  Right: SimpleProofNode;
}
export interface MERKLE_BytesList {
  Value: Uint8Array[];
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

function createBaseSimpleProof(): SimpleProof {
  return {
    Total: Long.ZERO,
    Index: Long.ZERO,
    LeafHash: new Uint8Array(),
    Aunts: []
  };
}

export const SimpleProof = {
  encode(message: SimpleProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Total.isZero()) {
      writer.uint32(8).sint64(message.Total);
    }

    if (!message.Index.isZero()) {
      writer.uint32(16).sint64(message.Index);
    }

    if (message.LeafHash.length !== 0) {
      writer.uint32(26).bytes(message.LeafHash);
    }

    for (const v of message.Aunts) {
      writer.uint32(34).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Total = (reader.sint64() as Long);
          break;

        case 2:
          message.Index = (reader.sint64() as Long);
          break;

        case 3:
          message.LeafHash = reader.bytes();
          break;

        case 4:
          message.Aunts.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SimpleProof {
    return {
      Total: isSet(object.Total) ? Long.fromString(object.Total) : Long.ZERO,
      Index: isSet(object.Index) ? Long.fromString(object.Index) : Long.ZERO,
      LeafHash: isSet(object.LeafHash) ? bytesFromBase64(object.LeafHash) : new Uint8Array(),
      Aunts: Array.isArray(object?.Aunts) ? object.Aunts.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: SimpleProof): unknown {
    const obj: any = {};
    message.Total !== undefined && (obj.Total = (message.Total || Long.ZERO).toString());
    message.Index !== undefined && (obj.Index = (message.Index || Long.ZERO).toString());
    message.LeafHash !== undefined && (obj.LeafHash = base64FromBytes(message.LeafHash !== undefined ? message.LeafHash : new Uint8Array()));

    if (message.Aunts) {
      obj.Aunts = message.Aunts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Aunts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleProof>, I>>(object: I): SimpleProof {
    const message = createBaseSimpleProof();
    message.Total = object.Total !== undefined && object.Total !== null ? Long.fromValue(object.Total) : Long.ZERO;
    message.Index = object.Index !== undefined && object.Index !== null ? Long.fromValue(object.Index) : Long.ZERO;
    message.LeafHash = object.LeafHash ?? new Uint8Array();
    message.Aunts = object.Aunts?.map(e => e) || [];
    return message;
  }

};

function createBaseSimpleProofNode(): SimpleProofNode {
  return {
    Hash: new Uint8Array(),
    Parent: undefined,
    Left: undefined,
    Right: undefined
  };
}

export const SimpleProofNode = {
  encode(message: SimpleProofNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Hash.length !== 0) {
      writer.uint32(10).bytes(message.Hash);
    }

    if (message.Parent !== undefined) {
      SimpleProofNode.encode(message.Parent, writer.uint32(18).fork()).ldelim();
    }

    if (message.Left !== undefined) {
      SimpleProofNode.encode(message.Left, writer.uint32(26).fork()).ldelim();
    }

    if (message.Right !== undefined) {
      SimpleProofNode.encode(message.Right, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleProofNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleProofNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Hash = reader.bytes();
          break;

        case 2:
          message.Parent = SimpleProofNode.decode(reader, reader.uint32());
          break;

        case 3:
          message.Left = SimpleProofNode.decode(reader, reader.uint32());
          break;

        case 4:
          message.Right = SimpleProofNode.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SimpleProofNode {
    return {
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array(),
      Parent: isSet(object.Parent) ? SimpleProofNode.fromJSON(object.Parent) : undefined,
      Left: isSet(object.Left) ? SimpleProofNode.fromJSON(object.Left) : undefined,
      Right: isSet(object.Right) ? SimpleProofNode.fromJSON(object.Right) : undefined
    };
  },

  toJSON(message: SimpleProofNode): unknown {
    const obj: any = {};
    message.Hash !== undefined && (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.Parent !== undefined && (obj.Parent = message.Parent ? SimpleProofNode.toJSON(message.Parent) : undefined);
    message.Left !== undefined && (obj.Left = message.Left ? SimpleProofNode.toJSON(message.Left) : undefined);
    message.Right !== undefined && (obj.Right = message.Right ? SimpleProofNode.toJSON(message.Right) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleProofNode>, I>>(object: I): SimpleProofNode {
    const message = createBaseSimpleProofNode();
    message.Hash = object.Hash ?? new Uint8Array();
    message.Parent = object.Parent !== undefined && object.Parent !== null ? SimpleProofNode.fromPartial(object.Parent) : undefined;
    message.Left = object.Left !== undefined && object.Left !== null ? SimpleProofNode.fromPartial(object.Left) : undefined;
    message.Right = object.Right !== undefined && object.Right !== null ? SimpleProofNode.fromPartial(object.Right) : undefined;
    return message;
  }

};

function createBaseMERKLE_BytesList(): MERKLE_BytesList {
  return {
    Value: []
  };
}

export const MERKLE_BytesList = {
  encode(message: MERKLE_BytesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Value) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MERKLE_BytesList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMERKLE_BytesList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MERKLE_BytesList {
    return {
      Value: Array.isArray(object?.Value) ? object.Value.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: MERKLE_BytesList): unknown {
    const obj: any = {};

    if (message.Value) {
      obj.Value = message.Value.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Value = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MERKLE_BytesList>, I>>(object: I): MERKLE_BytesList {
    const message = createBaseMERKLE_BytesList();
    message.Value = object.Value?.map(e => e) || [];
    return message;
  }

};