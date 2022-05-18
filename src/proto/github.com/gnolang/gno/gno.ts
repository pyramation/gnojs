import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/** messages */
export interface TypedValue {
  T: Any;
  V: Any;
  N: Uint8Array;
}
export interface StringValue {
  Value: string;
}
export interface BigintValue {
  Value: string;
}
export interface PointerValue {
  TV: TypedValue;
  Base: Any;
  Index: Long;
  Key: TypedValue;
}
export interface ArrayValue {
  ObjectInfo: ObjectInfo;
  List: TypedValue[];
  Data: Uint8Array;
}
export interface SliceValue {
  Base: Any;
  Offset: Long;
  Length: Long;
  Maxcap: Long;
}
export interface StructValue {
  ObjectInfo: ObjectInfo;
  Fields: TypedValue[];
}
export interface FuncValue {
  Type: Any;
  IsMethod: boolean;
  Source: Any;
  Name: string;
  Closure: Any;
  FileName: string;
  PkgPath: string;
}
export interface MapValue {
  ObjectInfo: ObjectInfo;
  List: MapList;
}
export interface MapList {
  List: MapListItem[];
}
export interface MapListItem {
  Key: TypedValue;
  Value: TypedValue;
}
export interface BoundMethodValue {
  ObjectInfo: ObjectInfo;
  Func: FuncValue;
  Receiver: TypedValue;
}
export interface TypeValue {
  Type: Any;
}
export interface PackageValue {
  ObjectInfo: ObjectInfo;
  Block: Any;
  PkgName: string;
  PkgPath: string;
  FNames: string[];
  FBlocks: Any[];
}
export interface Block {
  ObjectInfo: ObjectInfo;
  Source: Any;
  Values: TypedValue[];
  Parent: Any;
  Blank: TypedValue;
}
export interface RefValue {
  ObjectID: string;
  Escaped: boolean;
  PkgPath: string;
  Hash: string;
}
export interface ObjectID {
  Value: string;
}
export interface ObjectInfo {
  ID: string;
  Hash: string;
  OwnerID: string;
  ModTime: Long;
  RefCount: Long;
  IsEscaped: boolean;
}
export interface ValueHash {
  Value: string;
}
export interface Hashlet {
  Value: Uint8Array;
}
export interface ValuePath {
  Type: number;
  Depth: number;
  Index: number;
  Name: string;
}
export interface Location {
  PkgPath: string;
  File: string;
  Line: Long;
  Nonce: Long;
}
export interface Attributes {
  Line: Long;
  Label: string;
}
export interface NameExpr {
  Attributes: Attributes;
  Path: ValuePath;
  Name: string;
}
export interface BasicLitExpr {
  Attributes: Attributes;
  Kind: Long;
  Value: string;
}
export interface BinaryExpr {
  Attributes: Attributes;
  Left: Any;
  Op: Long;
  Right: Any;
}
export interface CallExpr {
  Attributes: Attributes;
  Func: Any;
  Args: Any[];
  Varg: boolean;
  NumArgs: Long;
}
export interface IndexExpr {
  Attributes: Attributes;
  X: Any;
  Index: Any;
  HasOK: boolean;
}
export interface SelectorExpr {
  Attributes: Attributes;
  X: Any;
  Path: ValuePath;
  Sel: string;
}
export interface SliceExpr {
  Attributes: Attributes;
  X: Any;
  Low: Any;
  High: Any;
  Max: Any;
}
export interface StarExpr {
  Attributes: Attributes;
  X: Any;
}
export interface RefExpr {
  Attributes: Attributes;
  X: Any;
}
export interface TypeAssertExpr {
  Attributes: Attributes;
  X: Any;
  Type: Any;
  HasOK: boolean;
}
export interface UnaryExpr {
  Attributes: Attributes;
  X: Any;
  Op: Long;
}
export interface CompositeLitExpr {
  Attributes: Attributes;
  Type: Any;
  Elts: KeyValueExpr[];
}
export interface KeyValueExpr {
  Attributes: Attributes;
  Key: Any;
  Value: Any;
}
export interface FuncLitExpr {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Type: FuncTypeExpr;
  Body: Any[];
}
export interface ConstExpr {
  Attributes: Attributes;
  Source: Any;
  TypedValue: TypedValue;
}
export interface FieldTypeExpr {
  Attributes: Attributes;
  Name: string;
  Type: Any;
  Tag: Any;
}
export interface ArrayTypeExpr {
  Attributes: Attributes;
  Len: Any;
  Elt: Any;
}
export interface SliceTypeExpr {
  Attributes: Attributes;
  Elt: Any;
  Vrd: boolean;
}
export interface InterfaceTypeExpr {
  Attributes: Attributes;
  Methods: FieldTypeExpr[];
  Generic: string;
}
export interface ChanTypeExpr {
  Attributes: Attributes;
  Dir: Long;
  Value: Any;
}
export interface FuncTypeExpr {
  Attributes: Attributes;
  Params: FieldTypeExpr[];
  Results: FieldTypeExpr[];
}
export interface MapTypeExpr {
  Attributes: Attributes;
  Key: Any;
  Value: Any;
}
export interface StructTypeExpr {
  Attributes: Attributes;
  Fields: FieldTypeExpr[];
}
export interface constTypeExpr {
  Attributes: Attributes;
  Source: Any;
  Type: Any;
}
export interface MaybeNativeTypeExpr {
  Attributes: Attributes;
  Type: Any;
}
export interface AssignStmt {
  Attributes: Attributes;
  Lhs: Any[];
  Op: Long;
  Rhs: Any[];
}
export interface BlockStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Body: Any[];
}
export interface BranchStmt {
  Attributes: Attributes;
  Op: Long;
  Label: string;
  Depth: number;
  BodyIndex: Long;
}
export interface DeclStmt {
  Attributes: Attributes;
  Body: Any[];
}
export interface DeferStmt {
  Attributes: Attributes;
  Call: CallExpr;
}
export interface ExprStmt {
  Attributes: Attributes;
  X: Any;
}
export interface ForStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Init: Any;
  Cond: Any;
  Post: Any;
  Body: Any[];
}
export interface GoStmt {
  Attributes: Attributes;
  Call: CallExpr;
}
export interface IfStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Init: Any;
  Cond: Any;
  Then: IfCaseStmt;
  Else: IfCaseStmt;
}
export interface IfCaseStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Body: Any[];
}
export interface IncDecStmt {
  Attributes: Attributes;
  X: Any;
  Op: Long;
}
export interface RangeStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  X: Any;
  Key: Any;
  Value: Any;
  Op: Long;
  Body: Any[];
  IsMap: boolean;
  IsString: boolean;
  IsArrayPtr: boolean;
}
export interface ReturnStmt {
  Attributes: Attributes;
  Results: Any[];
}
export interface PanicStmt {
  Attributes: Attributes;
  Exception: Any;
}
export interface SelectStmt {
  Attributes: Attributes;
  Cases: SelectCaseStmt[];
}
export interface SelectCaseStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Comm: Any;
  Body: Any[];
}
export interface SendStmt {
  Attributes: Attributes;
  Chan: Any;
  Value: Any;
}
export interface SwitchStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Init: Any;
  X: Any;
  IsTypeSwitch: boolean;
  Clauses: SwitchClauseStmt[];
  VarName: string;
}
export interface SwitchClauseStmt {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Cases: Any[];
  Body: Any[];
}
export interface EmptyStmt {
  Attributes: Attributes;
}
export interface bodyStmt {
  Attributes: Attributes;
  Body: Any[];
  BodyLen: Long;
  NextBodyIndex: Long;
  NumOps: Long;
  NumValues: Long;
  NumExprs: Long;
  NumStmts: Long;
  Cond: Any;
  Post: Any;
  Active: Any;
  Key: Any;
  Value: Any;
  Op: Long;
  ListLen: Long;
  ListIndex: Long;
  NextItem: MapListItem;
  StrLen: Long;
  StrIndex: Long;
  NextRune: number;
}
export interface FuncDecl {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  NameExpr: NameExpr;
  IsMethod: boolean;
  Recv: FieldTypeExpr;
  Type: FuncTypeExpr;
  Body: Any[];
}
export interface ImportDecl {
  Attributes: Attributes;
  NameExpr: NameExpr;
  PkgPath: string;
}
export interface ValueDecl {
  Attributes: Attributes;
  NameExprs: NameExpr[];
  Type: Any;
  Values: Any[];
  Const: boolean;
}
export interface TypeDecl {
  Attributes: Attributes;
  NameExpr: NameExpr;
  Type: Any;
  IsAlias: boolean;
}
export interface StaticBlock {
  Block: Block;
  Types: Any[];
  NumNames: number;
  Names: string[];
  Consts: string[];
  Externs: string[];
  Loc: Location;
}
export interface FileSet {
  Files: FileNode[];
}
export interface FileNode {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  Name: string;
  PkgName: string;
  Decls: Any[];
}
export interface PackageNode {
  Attributes: Attributes;
  StaticBlock: StaticBlock;
  PkgPath: string;
  PkgName: string;
  FileSet: FileSet;
}
export interface RefNode {
  Location: Location;
  BlockNode: Any;
}
export interface PrimitiveType {
  Value: Long;
}
export interface PointerType {
  Elt: Any;
}
export interface ArrayType {
  Len: Long;
  Elt: Any;
  Vrd: boolean;
}
export interface SliceType {
  Elt: Any;
  Vrd: boolean;
}
export interface StructType {
  PkgPath: string;
  Fields: FieldType[];
}
export interface FieldType {
  Name: string;
  Type: Any;
  Embedded: boolean;
  Tag: string;
}
export interface FuncType {
  Params: FieldType[];
  Results: FieldType[];
}
export interface MapType {
  Key: Any;
  Value: Any;
}
export interface InterfaceType {
  PkgPath: string;
  Methods: FieldType[];
  Generic: string;
}
export interface TypeType {}
export interface DeclaredType {
  PkgPath: string;
  Name: string;
  Base: Any;
  Methods: TypedValue[];
}
export interface PackageType {}
export interface ChanType {
  Dir: Long;
  Elt: Any;
}
export interface blockType {}
export interface tupleType {
  Elts: Any[];
}
export interface RefType {
  ID: string;
}

function createBaseTypedValue(): TypedValue {
  return {
    T: undefined,
    V: undefined,
    N: new Uint8Array()
  };
}

export const TypedValue = {
  encode(message: TypedValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.T !== undefined) {
      Any.encode(message.T, writer.uint32(10).fork()).ldelim();
    }

    if (message.V !== undefined) {
      Any.encode(message.V, writer.uint32(18).fork()).ldelim();
    }

    if (message.N.length !== 0) {
      writer.uint32(26).bytes(message.N);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypedValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypedValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.T = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.V = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.N = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TypedValue {
    return {
      T: isSet(object.T) ? Any.fromJSON(object.T) : undefined,
      V: isSet(object.V) ? Any.fromJSON(object.V) : undefined,
      N: isSet(object.N) ? bytesFromBase64(object.N) : new Uint8Array()
    };
  },

  toJSON(message: TypedValue): unknown {
    const obj: any = {};
    message.T !== undefined && (obj.T = message.T ? Any.toJSON(message.T) : undefined);
    message.V !== undefined && (obj.V = message.V ? Any.toJSON(message.V) : undefined);
    message.N !== undefined && (obj.N = base64FromBytes(message.N !== undefined ? message.N : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TypedValue>, I>>(object: I): TypedValue {
    const message = createBaseTypedValue();
    message.T = object.T !== undefined && object.T !== null ? Any.fromPartial(object.T) : undefined;
    message.V = object.V !== undefined && object.V !== null ? Any.fromPartial(object.V) : undefined;
    message.N = object.N ?? new Uint8Array();
    return message;
  }

};

function createBaseStringValue(): StringValue {
  return {
    Value: ""
  };
}

export const StringValue = {
  encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringValue {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringValue>, I>>(object: I): StringValue {
    const message = createBaseStringValue();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseBigintValue(): BigintValue {
  return {
    Value: ""
  };
}

export const BigintValue = {
  encode(message: BigintValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BigintValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigintValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BigintValue {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: BigintValue): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BigintValue>, I>>(object: I): BigintValue {
    const message = createBaseBigintValue();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBasePointerValue(): PointerValue {
  return {
    TV: undefined,
    Base: undefined,
    Index: Long.ZERO,
    Key: undefined
  };
}

export const PointerValue = {
  encode(message: PointerValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TV !== undefined) {
      TypedValue.encode(message.TV, writer.uint32(10).fork()).ldelim();
    }

    if (message.Base !== undefined) {
      Any.encode(message.Base, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Index.isZero()) {
      writer.uint32(24).sint64(message.Index);
    }

    if (message.Key !== undefined) {
      TypedValue.encode(message.Key, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointerValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointerValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.TV = TypedValue.decode(reader, reader.uint32());
          break;

        case 2:
          message.Base = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Index = (reader.sint64() as Long);
          break;

        case 4:
          message.Key = TypedValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PointerValue {
    return {
      TV: isSet(object.TV) ? TypedValue.fromJSON(object.TV) : undefined,
      Base: isSet(object.Base) ? Any.fromJSON(object.Base) : undefined,
      Index: isSet(object.Index) ? Long.fromString(object.Index) : Long.ZERO,
      Key: isSet(object.Key) ? TypedValue.fromJSON(object.Key) : undefined
    };
  },

  toJSON(message: PointerValue): unknown {
    const obj: any = {};
    message.TV !== undefined && (obj.TV = message.TV ? TypedValue.toJSON(message.TV) : undefined);
    message.Base !== undefined && (obj.Base = message.Base ? Any.toJSON(message.Base) : undefined);
    message.Index !== undefined && (obj.Index = (message.Index || Long.ZERO).toString());
    message.Key !== undefined && (obj.Key = message.Key ? TypedValue.toJSON(message.Key) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PointerValue>, I>>(object: I): PointerValue {
    const message = createBasePointerValue();
    message.TV = object.TV !== undefined && object.TV !== null ? TypedValue.fromPartial(object.TV) : undefined;
    message.Base = object.Base !== undefined && object.Base !== null ? Any.fromPartial(object.Base) : undefined;
    message.Index = object.Index !== undefined && object.Index !== null ? Long.fromValue(object.Index) : Long.ZERO;
    message.Key = object.Key !== undefined && object.Key !== null ? TypedValue.fromPartial(object.Key) : undefined;
    return message;
  }

};

function createBaseArrayValue(): ArrayValue {
  return {
    ObjectInfo: undefined,
    List: [],
    Data: new Uint8Array()
  };
}

export const ArrayValue = {
  encode(message: ArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.List) {
      TypedValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.Data.length !== 0) {
      writer.uint32(26).bytes(message.Data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.List.push(TypedValue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ArrayValue {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      List: Array.isArray(object?.List) ? object.List.map((e: any) => TypedValue.fromJSON(e)) : [],
      Data: isSet(object.Data) ? bytesFromBase64(object.Data) : new Uint8Array()
    };
  },

  toJSON(message: ArrayValue): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);

    if (message.List) {
      obj.List = message.List.map(e => e ? TypedValue.toJSON(e) : undefined);
    } else {
      obj.List = [];
    }

    message.Data !== undefined && (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ArrayValue>, I>>(object: I): ArrayValue {
    const message = createBaseArrayValue();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.List = object.List?.map(e => TypedValue.fromPartial(e)) || [];
    message.Data = object.Data ?? new Uint8Array();
    return message;
  }

};

function createBaseSliceValue(): SliceValue {
  return {
    Base: undefined,
    Offset: Long.ZERO,
    Length: Long.ZERO,
    Maxcap: Long.ZERO
  };
}

export const SliceValue = {
  encode(message: SliceValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Base !== undefined) {
      Any.encode(message.Base, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Offset.isZero()) {
      writer.uint32(16).sint64(message.Offset);
    }

    if (!message.Length.isZero()) {
      writer.uint32(24).sint64(message.Length);
    }

    if (!message.Maxcap.isZero()) {
      writer.uint32(32).sint64(message.Maxcap);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SliceValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSliceValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Base = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.Offset = (reader.sint64() as Long);
          break;

        case 3:
          message.Length = (reader.sint64() as Long);
          break;

        case 4:
          message.Maxcap = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SliceValue {
    return {
      Base: isSet(object.Base) ? Any.fromJSON(object.Base) : undefined,
      Offset: isSet(object.Offset) ? Long.fromString(object.Offset) : Long.ZERO,
      Length: isSet(object.Length) ? Long.fromString(object.Length) : Long.ZERO,
      Maxcap: isSet(object.Maxcap) ? Long.fromString(object.Maxcap) : Long.ZERO
    };
  },

  toJSON(message: SliceValue): unknown {
    const obj: any = {};
    message.Base !== undefined && (obj.Base = message.Base ? Any.toJSON(message.Base) : undefined);
    message.Offset !== undefined && (obj.Offset = (message.Offset || Long.ZERO).toString());
    message.Length !== undefined && (obj.Length = (message.Length || Long.ZERO).toString());
    message.Maxcap !== undefined && (obj.Maxcap = (message.Maxcap || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SliceValue>, I>>(object: I): SliceValue {
    const message = createBaseSliceValue();
    message.Base = object.Base !== undefined && object.Base !== null ? Any.fromPartial(object.Base) : undefined;
    message.Offset = object.Offset !== undefined && object.Offset !== null ? Long.fromValue(object.Offset) : Long.ZERO;
    message.Length = object.Length !== undefined && object.Length !== null ? Long.fromValue(object.Length) : Long.ZERO;
    message.Maxcap = object.Maxcap !== undefined && object.Maxcap !== null ? Long.fromValue(object.Maxcap) : Long.ZERO;
    return message;
  }

};

function createBaseStructValue(): StructValue {
  return {
    ObjectInfo: undefined,
    Fields: []
  };
}

export const StructValue = {
  encode(message: StructValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Fields) {
      TypedValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StructValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStructValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.Fields.push(TypedValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StructValue {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      Fields: Array.isArray(object?.Fields) ? object.Fields.map((e: any) => TypedValue.fromJSON(e)) : []
    };
  },

  toJSON(message: StructValue): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);

    if (message.Fields) {
      obj.Fields = message.Fields.map(e => e ? TypedValue.toJSON(e) : undefined);
    } else {
      obj.Fields = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StructValue>, I>>(object: I): StructValue {
    const message = createBaseStructValue();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.Fields = object.Fields?.map(e => TypedValue.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFuncValue(): FuncValue {
  return {
    Type: undefined,
    IsMethod: false,
    Source: undefined,
    Name: "",
    Closure: undefined,
    FileName: "",
    PkgPath: ""
  };
}

export const FuncValue = {
  encode(message: FuncValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(10).fork()).ldelim();
    }

    if (message.IsMethod === true) {
      writer.uint32(16).bool(message.IsMethod);
    }

    if (message.Source !== undefined) {
      Any.encode(message.Source, writer.uint32(26).fork()).ldelim();
    }

    if (message.Name !== "") {
      writer.uint32(34).string(message.Name);
    }

    if (message.Closure !== undefined) {
      Any.encode(message.Closure, writer.uint32(42).fork()).ldelim();
    }

    if (message.FileName !== "") {
      writer.uint32(50).string(message.FileName);
    }

    if (message.PkgPath !== "") {
      writer.uint32(58).string(message.PkgPath);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuncValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuncValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.IsMethod = reader.bool();
          break;

        case 3:
          message.Source = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Name = reader.string();
          break;

        case 5:
          message.Closure = Any.decode(reader, reader.uint32());
          break;

        case 6:
          message.FileName = reader.string();
          break;

        case 7:
          message.PkgPath = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FuncValue {
    return {
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      IsMethod: isSet(object.IsMethod) ? Boolean(object.IsMethod) : false,
      Source: isSet(object.Source) ? Any.fromJSON(object.Source) : undefined,
      Name: isSet(object.Name) ? String(object.Name) : "",
      Closure: isSet(object.Closure) ? Any.fromJSON(object.Closure) : undefined,
      FileName: isSet(object.FileName) ? String(object.FileName) : "",
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : ""
    };
  },

  toJSON(message: FuncValue): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    message.IsMethod !== undefined && (obj.IsMethod = message.IsMethod);
    message.Source !== undefined && (obj.Source = message.Source ? Any.toJSON(message.Source) : undefined);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Closure !== undefined && (obj.Closure = message.Closure ? Any.toJSON(message.Closure) : undefined);
    message.FileName !== undefined && (obj.FileName = message.FileName);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FuncValue>, I>>(object: I): FuncValue {
    const message = createBaseFuncValue();
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.IsMethod = object.IsMethod ?? false;
    message.Source = object.Source !== undefined && object.Source !== null ? Any.fromPartial(object.Source) : undefined;
    message.Name = object.Name ?? "";
    message.Closure = object.Closure !== undefined && object.Closure !== null ? Any.fromPartial(object.Closure) : undefined;
    message.FileName = object.FileName ?? "";
    message.PkgPath = object.PkgPath ?? "";
    return message;
  }

};

function createBaseMapValue(): MapValue {
  return {
    ObjectInfo: undefined,
    List: undefined
  };
}

export const MapValue = {
  encode(message: MapValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.List !== undefined) {
      MapList.encode(message.List, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.List = MapList.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapValue {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      List: isSet(object.List) ? MapList.fromJSON(object.List) : undefined
    };
  },

  toJSON(message: MapValue): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);
    message.List !== undefined && (obj.List = message.List ? MapList.toJSON(message.List) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapValue>, I>>(object: I): MapValue {
    const message = createBaseMapValue();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.List = object.List !== undefined && object.List !== null ? MapList.fromPartial(object.List) : undefined;
    return message;
  }

};

function createBaseMapList(): MapList {
  return {
    List: []
  };
}

export const MapList = {
  encode(message: MapList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.List) {
      MapListItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.List.push(MapListItem.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapList {
    return {
      List: Array.isArray(object?.List) ? object.List.map((e: any) => MapListItem.fromJSON(e)) : []
    };
  },

  toJSON(message: MapList): unknown {
    const obj: any = {};

    if (message.List) {
      obj.List = message.List.map(e => e ? MapListItem.toJSON(e) : undefined);
    } else {
      obj.List = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapList>, I>>(object: I): MapList {
    const message = createBaseMapList();
    message.List = object.List?.map(e => MapListItem.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMapListItem(): MapListItem {
  return {
    Key: undefined,
    Value: undefined
  };
}

export const MapListItem = {
  encode(message: MapListItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key !== undefined) {
      TypedValue.encode(message.Key, writer.uint32(10).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      TypedValue.encode(message.Value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapListItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapListItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = TypedValue.decode(reader, reader.uint32());
          break;

        case 2:
          message.Value = TypedValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapListItem {
    return {
      Key: isSet(object.Key) ? TypedValue.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? TypedValue.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: MapListItem): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = message.Key ? TypedValue.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? TypedValue.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapListItem>, I>>(object: I): MapListItem {
    const message = createBaseMapListItem();
    message.Key = object.Key !== undefined && object.Key !== null ? TypedValue.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? TypedValue.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseBoundMethodValue(): BoundMethodValue {
  return {
    ObjectInfo: undefined,
    Func: undefined,
    Receiver: undefined
  };
}

export const BoundMethodValue = {
  encode(message: BoundMethodValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.Func !== undefined) {
      FuncValue.encode(message.Func, writer.uint32(18).fork()).ldelim();
    }

    if (message.Receiver !== undefined) {
      TypedValue.encode(message.Receiver, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoundMethodValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundMethodValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.Func = FuncValue.decode(reader, reader.uint32());
          break;

        case 3:
          message.Receiver = TypedValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BoundMethodValue {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      Func: isSet(object.Func) ? FuncValue.fromJSON(object.Func) : undefined,
      Receiver: isSet(object.Receiver) ? TypedValue.fromJSON(object.Receiver) : undefined
    };
  },

  toJSON(message: BoundMethodValue): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);
    message.Func !== undefined && (obj.Func = message.Func ? FuncValue.toJSON(message.Func) : undefined);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver ? TypedValue.toJSON(message.Receiver) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BoundMethodValue>, I>>(object: I): BoundMethodValue {
    const message = createBaseBoundMethodValue();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.Func = object.Func !== undefined && object.Func !== null ? FuncValue.fromPartial(object.Func) : undefined;
    message.Receiver = object.Receiver !== undefined && object.Receiver !== null ? TypedValue.fromPartial(object.Receiver) : undefined;
    return message;
  }

};

function createBaseTypeValue(): TypeValue {
  return {
    Type: undefined
  };
}

export const TypeValue = {
  encode(message: TypeValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TypeValue {
    return {
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined
    };
  },

  toJSON(message: TypeValue): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TypeValue>, I>>(object: I): TypeValue {
    const message = createBaseTypeValue();
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    return message;
  }

};

function createBasePackageValue(): PackageValue {
  return {
    ObjectInfo: undefined,
    Block: undefined,
    PkgName: "",
    PkgPath: "",
    FNames: [],
    FBlocks: []
  };
}

export const PackageValue = {
  encode(message: PackageValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.Block !== undefined) {
      Any.encode(message.Block, writer.uint32(18).fork()).ldelim();
    }

    if (message.PkgName !== "") {
      writer.uint32(26).string(message.PkgName);
    }

    if (message.PkgPath !== "") {
      writer.uint32(34).string(message.PkgPath);
    }

    for (const v of message.FNames) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.FBlocks) {
      Any.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.Block = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.PkgName = reader.string();
          break;

        case 4:
          message.PkgPath = reader.string();
          break;

        case 5:
          message.FNames.push(reader.string());
          break;

        case 6:
          message.FBlocks.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PackageValue {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      Block: isSet(object.Block) ? Any.fromJSON(object.Block) : undefined,
      PkgName: isSet(object.PkgName) ? String(object.PkgName) : "",
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      FNames: Array.isArray(object?.FNames) ? object.FNames.map((e: any) => String(e)) : [],
      FBlocks: Array.isArray(object?.FBlocks) ? object.FBlocks.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: PackageValue): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);
    message.Block !== undefined && (obj.Block = message.Block ? Any.toJSON(message.Block) : undefined);
    message.PkgName !== undefined && (obj.PkgName = message.PkgName);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);

    if (message.FNames) {
      obj.FNames = message.FNames.map(e => e);
    } else {
      obj.FNames = [];
    }

    if (message.FBlocks) {
      obj.FBlocks = message.FBlocks.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.FBlocks = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackageValue>, I>>(object: I): PackageValue {
    const message = createBasePackageValue();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.Block = object.Block !== undefined && object.Block !== null ? Any.fromPartial(object.Block) : undefined;
    message.PkgName = object.PkgName ?? "";
    message.PkgPath = object.PkgPath ?? "";
    message.FNames = object.FNames?.map(e => e) || [];
    message.FBlocks = object.FBlocks?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBlock(): Block {
  return {
    ObjectInfo: undefined,
    Source: undefined,
    Values: [],
    Parent: undefined,
    Blank: undefined
  };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectInfo !== undefined) {
      ObjectInfo.encode(message.ObjectInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.Source !== undefined) {
      Any.encode(message.Source, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Values) {
      TypedValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.Parent !== undefined) {
      Any.encode(message.Parent, writer.uint32(34).fork()).ldelim();
    }

    if (message.Blank !== undefined) {
      TypedValue.encode(message.Blank, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectInfo = ObjectInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.Source = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Values.push(TypedValue.decode(reader, reader.uint32()));
          break;

        case 4:
          message.Parent = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.Blank = TypedValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Block {
    return {
      ObjectInfo: isSet(object.ObjectInfo) ? ObjectInfo.fromJSON(object.ObjectInfo) : undefined,
      Source: isSet(object.Source) ? Any.fromJSON(object.Source) : undefined,
      Values: Array.isArray(object?.Values) ? object.Values.map((e: any) => TypedValue.fromJSON(e)) : [],
      Parent: isSet(object.Parent) ? Any.fromJSON(object.Parent) : undefined,
      Blank: isSet(object.Blank) ? TypedValue.fromJSON(object.Blank) : undefined
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.ObjectInfo !== undefined && (obj.ObjectInfo = message.ObjectInfo ? ObjectInfo.toJSON(message.ObjectInfo) : undefined);
    message.Source !== undefined && (obj.Source = message.Source ? Any.toJSON(message.Source) : undefined);

    if (message.Values) {
      obj.Values = message.Values.map(e => e ? TypedValue.toJSON(e) : undefined);
    } else {
      obj.Values = [];
    }

    message.Parent !== undefined && (obj.Parent = message.Parent ? Any.toJSON(message.Parent) : undefined);
    message.Blank !== undefined && (obj.Blank = message.Blank ? TypedValue.toJSON(message.Blank) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.ObjectInfo = object.ObjectInfo !== undefined && object.ObjectInfo !== null ? ObjectInfo.fromPartial(object.ObjectInfo) : undefined;
    message.Source = object.Source !== undefined && object.Source !== null ? Any.fromPartial(object.Source) : undefined;
    message.Values = object.Values?.map(e => TypedValue.fromPartial(e)) || [];
    message.Parent = object.Parent !== undefined && object.Parent !== null ? Any.fromPartial(object.Parent) : undefined;
    message.Blank = object.Blank !== undefined && object.Blank !== null ? TypedValue.fromPartial(object.Blank) : undefined;
    return message;
  }

};

function createBaseRefValue(): RefValue {
  return {
    ObjectID: "",
    Escaped: false,
    PkgPath: "",
    Hash: ""
  };
}

export const RefValue = {
  encode(message: RefValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ObjectID !== "") {
      writer.uint32(10).string(message.ObjectID);
    }

    if (message.Escaped === true) {
      writer.uint32(16).bool(message.Escaped);
    }

    if (message.PkgPath !== "") {
      writer.uint32(26).string(message.PkgPath);
    }

    if (message.Hash !== "") {
      writer.uint32(34).string(message.Hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ObjectID = reader.string();
          break;

        case 2:
          message.Escaped = reader.bool();
          break;

        case 3:
          message.PkgPath = reader.string();
          break;

        case 4:
          message.Hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefValue {
    return {
      ObjectID: isSet(object.ObjectID) ? String(object.ObjectID) : "",
      Escaped: isSet(object.Escaped) ? Boolean(object.Escaped) : false,
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      Hash: isSet(object.Hash) ? String(object.Hash) : ""
    };
  },

  toJSON(message: RefValue): unknown {
    const obj: any = {};
    message.ObjectID !== undefined && (obj.ObjectID = message.ObjectID);
    message.Escaped !== undefined && (obj.Escaped = message.Escaped);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    message.Hash !== undefined && (obj.Hash = message.Hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefValue>, I>>(object: I): RefValue {
    const message = createBaseRefValue();
    message.ObjectID = object.ObjectID ?? "";
    message.Escaped = object.Escaped ?? false;
    message.PkgPath = object.PkgPath ?? "";
    message.Hash = object.Hash ?? "";
    return message;
  }

};

function createBaseObjectID(): ObjectID {
  return {
    Value: ""
  };
}

export const ObjectID = {
  encode(message: ObjectID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ObjectID {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: ObjectID): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectID>, I>>(object: I): ObjectID {
    const message = createBaseObjectID();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseObjectInfo(): ObjectInfo {
  return {
    ID: "",
    Hash: "",
    OwnerID: "",
    ModTime: Long.UZERO,
    RefCount: Long.ZERO,
    IsEscaped: false
  };
}

export const ObjectInfo = {
  encode(message: ObjectInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    if (message.Hash !== "") {
      writer.uint32(18).string(message.Hash);
    }

    if (message.OwnerID !== "") {
      writer.uint32(26).string(message.OwnerID);
    }

    if (!message.ModTime.isZero()) {
      writer.uint32(32).uint64(message.ModTime);
    }

    if (!message.RefCount.isZero()) {
      writer.uint32(40).sint64(message.RefCount);
    }

    if (message.IsEscaped === true) {
      writer.uint32(48).bool(message.IsEscaped);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.Hash = reader.string();
          break;

        case 3:
          message.OwnerID = reader.string();
          break;

        case 4:
          message.ModTime = (reader.uint64() as Long);
          break;

        case 5:
          message.RefCount = (reader.sint64() as Long);
          break;

        case 6:
          message.IsEscaped = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ObjectInfo {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Hash: isSet(object.Hash) ? String(object.Hash) : "",
      OwnerID: isSet(object.OwnerID) ? String(object.OwnerID) : "",
      ModTime: isSet(object.ModTime) ? Long.fromString(object.ModTime) : Long.UZERO,
      RefCount: isSet(object.RefCount) ? Long.fromString(object.RefCount) : Long.ZERO,
      IsEscaped: isSet(object.IsEscaped) ? Boolean(object.IsEscaped) : false
    };
  },

  toJSON(message: ObjectInfo): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Hash !== undefined && (obj.Hash = message.Hash);
    message.OwnerID !== undefined && (obj.OwnerID = message.OwnerID);
    message.ModTime !== undefined && (obj.ModTime = (message.ModTime || Long.UZERO).toString());
    message.RefCount !== undefined && (obj.RefCount = (message.RefCount || Long.ZERO).toString());
    message.IsEscaped !== undefined && (obj.IsEscaped = message.IsEscaped);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObjectInfo>, I>>(object: I): ObjectInfo {
    const message = createBaseObjectInfo();
    message.ID = object.ID ?? "";
    message.Hash = object.Hash ?? "";
    message.OwnerID = object.OwnerID ?? "";
    message.ModTime = object.ModTime !== undefined && object.ModTime !== null ? Long.fromValue(object.ModTime) : Long.UZERO;
    message.RefCount = object.RefCount !== undefined && object.RefCount !== null ? Long.fromValue(object.RefCount) : Long.ZERO;
    message.IsEscaped = object.IsEscaped ?? false;
    return message;
  }

};

function createBaseValueHash(): ValueHash {
  return {
    Value: ""
  };
}

export const ValueHash = {
  encode(message: ValueHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueHash();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValueHash {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: ValueHash): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValueHash>, I>>(object: I): ValueHash {
    const message = createBaseValueHash();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseHashlet(): Hashlet {
  return {
    Value: new Uint8Array()
  };
}

export const Hashlet = {
  encode(message: Hashlet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value.length !== 0) {
      writer.uint32(10).bytes(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hashlet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashlet();

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

  fromJSON(object: any): Hashlet {
    return {
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array()
    };
  },

  toJSON(message: Hashlet): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Hashlet>, I>>(object: I): Hashlet {
    const message = createBaseHashlet();
    message.Value = object.Value ?? new Uint8Array();
    return message;
  }

};

function createBaseValuePath(): ValuePath {
  return {
    Type: 0,
    Depth: 0,
    Index: 0,
    Name: ""
  };
}

export const ValuePath = {
  encode(message: ValuePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).uint32(message.Type);
    }

    if (message.Depth !== 0) {
      writer.uint32(16).uint32(message.Depth);
    }

    if (message.Index !== 0) {
      writer.uint32(24).uint32(message.Index);
    }

    if (message.Name !== "") {
      writer.uint32(34).string(message.Name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValuePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValuePath();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = reader.uint32();
          break;

        case 2:
          message.Depth = reader.uint32();
          break;

        case 3:
          message.Index = reader.uint32();
          break;

        case 4:
          message.Name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValuePath {
    return {
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Depth: isSet(object.Depth) ? Number(object.Depth) : 0,
      Index: isSet(object.Index) ? Number(object.Index) : 0,
      Name: isSet(object.Name) ? String(object.Name) : ""
    };
  },

  toJSON(message: ValuePath): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.Depth !== undefined && (obj.Depth = Math.round(message.Depth));
    message.Index !== undefined && (obj.Index = Math.round(message.Index));
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValuePath>, I>>(object: I): ValuePath {
    const message = createBaseValuePath();
    message.Type = object.Type ?? 0;
    message.Depth = object.Depth ?? 0;
    message.Index = object.Index ?? 0;
    message.Name = object.Name ?? "";
    return message;
  }

};

function createBaseLocation(): Location {
  return {
    PkgPath: "",
    File: "",
    Line: Long.ZERO,
    Nonce: Long.ZERO
  };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PkgPath !== "") {
      writer.uint32(10).string(message.PkgPath);
    }

    if (message.File !== "") {
      writer.uint32(18).string(message.File);
    }

    if (!message.Line.isZero()) {
      writer.uint32(24).sint64(message.Line);
    }

    if (!message.Nonce.isZero()) {
      writer.uint32(32).sint64(message.Nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PkgPath = reader.string();
          break;

        case 2:
          message.File = reader.string();
          break;

        case 3:
          message.Line = (reader.sint64() as Long);
          break;

        case 4:
          message.Nonce = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Location {
    return {
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      File: isSet(object.File) ? String(object.File) : "",
      Line: isSet(object.Line) ? Long.fromString(object.Line) : Long.ZERO,
      Nonce: isSet(object.Nonce) ? Long.fromString(object.Nonce) : Long.ZERO
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    message.File !== undefined && (obj.File = message.File);
    message.Line !== undefined && (obj.Line = (message.Line || Long.ZERO).toString());
    message.Nonce !== undefined && (obj.Nonce = (message.Nonce || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.PkgPath = object.PkgPath ?? "";
    message.File = object.File ?? "";
    message.Line = object.Line !== undefined && object.Line !== null ? Long.fromValue(object.Line) : Long.ZERO;
    message.Nonce = object.Nonce !== undefined && object.Nonce !== null ? Long.fromValue(object.Nonce) : Long.ZERO;
    return message;
  }

};

function createBaseAttributes(): Attributes {
  return {
    Line: Long.ZERO,
    Label: ""
  };
}

export const Attributes = {
  encode(message: Attributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Line.isZero()) {
      writer.uint32(8).sint64(message.Line);
    }

    if (message.Label !== "") {
      writer.uint32(18).string(message.Label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Line = (reader.sint64() as Long);
          break;

        case 2:
          message.Label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Attributes {
    return {
      Line: isSet(object.Line) ? Long.fromString(object.Line) : Long.ZERO,
      Label: isSet(object.Label) ? String(object.Label) : ""
    };
  },

  toJSON(message: Attributes): unknown {
    const obj: any = {};
    message.Line !== undefined && (obj.Line = (message.Line || Long.ZERO).toString());
    message.Label !== undefined && (obj.Label = message.Label);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attributes>, I>>(object: I): Attributes {
    const message = createBaseAttributes();
    message.Line = object.Line !== undefined && object.Line !== null ? Long.fromValue(object.Line) : Long.ZERO;
    message.Label = object.Label ?? "";
    return message;
  }

};

function createBaseNameExpr(): NameExpr {
  return {
    Attributes: undefined,
    Path: undefined,
    Name: ""
  };
}

export const NameExpr = {
  encode(message: NameExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Path !== undefined) {
      ValuePath.encode(message.Path, writer.uint32(18).fork()).ldelim();
    }

    if (message.Name !== "") {
      writer.uint32(26).string(message.Name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NameExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Path = ValuePath.decode(reader, reader.uint32());
          break;

        case 3:
          message.Name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NameExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Path: isSet(object.Path) ? ValuePath.fromJSON(object.Path) : undefined,
      Name: isSet(object.Name) ? String(object.Name) : ""
    };
  },

  toJSON(message: NameExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Path !== undefined && (obj.Path = message.Path ? ValuePath.toJSON(message.Path) : undefined);
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NameExpr>, I>>(object: I): NameExpr {
    const message = createBaseNameExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Path = object.Path !== undefined && object.Path !== null ? ValuePath.fromPartial(object.Path) : undefined;
    message.Name = object.Name ?? "";
    return message;
  }

};

function createBaseBasicLitExpr(): BasicLitExpr {
  return {
    Attributes: undefined,
    Kind: Long.ZERO,
    Value: ""
  };
}

export const BasicLitExpr = {
  encode(message: BasicLitExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Kind.isZero()) {
      writer.uint32(16).sint64(message.Kind);
    }

    if (message.Value !== "") {
      writer.uint32(26).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicLitExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicLitExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Kind = (reader.sint64() as Long);
          break;

        case 3:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasicLitExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Kind: isSet(object.Kind) ? Long.fromString(object.Kind) : Long.ZERO,
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: BasicLitExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Kind !== undefined && (obj.Kind = (message.Kind || Long.ZERO).toString());
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BasicLitExpr>, I>>(object: I): BasicLitExpr {
    const message = createBaseBasicLitExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Kind = object.Kind !== undefined && object.Kind !== null ? Long.fromValue(object.Kind) : Long.ZERO;
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseBinaryExpr(): BinaryExpr {
  return {
    Attributes: undefined,
    Left: undefined,
    Op: Long.ZERO,
    Right: undefined
  };
}

export const BinaryExpr = {
  encode(message: BinaryExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Left !== undefined) {
      Any.encode(message.Left, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(24).sint64(message.Op);
    }

    if (message.Right !== undefined) {
      Any.encode(message.Right, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Left = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Op = (reader.sint64() as Long);
          break;

        case 4:
          message.Right = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BinaryExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Left: isSet(object.Left) ? Any.fromJSON(object.Left) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO,
      Right: isSet(object.Right) ? Any.fromJSON(object.Right) : undefined
    };
  },

  toJSON(message: BinaryExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Left !== undefined && (obj.Left = message.Left ? Any.toJSON(message.Left) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());
    message.Right !== undefined && (obj.Right = message.Right ? Any.toJSON(message.Right) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BinaryExpr>, I>>(object: I): BinaryExpr {
    const message = createBaseBinaryExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Left = object.Left !== undefined && object.Left !== null ? Any.fromPartial(object.Left) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    message.Right = object.Right !== undefined && object.Right !== null ? Any.fromPartial(object.Right) : undefined;
    return message;
  }

};

function createBaseCallExpr(): CallExpr {
  return {
    Attributes: undefined,
    Func: undefined,
    Args: [],
    Varg: false,
    NumArgs: Long.ZERO
  };
}

export const CallExpr = {
  encode(message: CallExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Func !== undefined) {
      Any.encode(message.Func, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Args) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.Varg === true) {
      writer.uint32(32).bool(message.Varg);
    }

    if (!message.NumArgs.isZero()) {
      writer.uint32(40).sint64(message.NumArgs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Func = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Args.push(Any.decode(reader, reader.uint32()));
          break;

        case 4:
          message.Varg = reader.bool();
          break;

        case 5:
          message.NumArgs = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CallExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Func: isSet(object.Func) ? Any.fromJSON(object.Func) : undefined,
      Args: Array.isArray(object?.Args) ? object.Args.map((e: any) => Any.fromJSON(e)) : [],
      Varg: isSet(object.Varg) ? Boolean(object.Varg) : false,
      NumArgs: isSet(object.NumArgs) ? Long.fromString(object.NumArgs) : Long.ZERO
    };
  },

  toJSON(message: CallExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Func !== undefined && (obj.Func = message.Func ? Any.toJSON(message.Func) : undefined);

    if (message.Args) {
      obj.Args = message.Args.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Args = [];
    }

    message.Varg !== undefined && (obj.Varg = message.Varg);
    message.NumArgs !== undefined && (obj.NumArgs = (message.NumArgs || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CallExpr>, I>>(object: I): CallExpr {
    const message = createBaseCallExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Func = object.Func !== undefined && object.Func !== null ? Any.fromPartial(object.Func) : undefined;
    message.Args = object.Args?.map(e => Any.fromPartial(e)) || [];
    message.Varg = object.Varg ?? false;
    message.NumArgs = object.NumArgs !== undefined && object.NumArgs !== null ? Long.fromValue(object.NumArgs) : Long.ZERO;
    return message;
  }

};

function createBaseIndexExpr(): IndexExpr {
  return {
    Attributes: undefined,
    X: undefined,
    Index: undefined,
    HasOK: false
  };
}

export const IndexExpr = {
  encode(message: IndexExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (message.Index !== undefined) {
      Any.encode(message.Index, writer.uint32(26).fork()).ldelim();
    }

    if (message.HasOK === true) {
      writer.uint32(32).bool(message.HasOK);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Index = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.HasOK = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IndexExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Index: isSet(object.Index) ? Any.fromJSON(object.Index) : undefined,
      HasOK: isSet(object.HasOK) ? Boolean(object.HasOK) : false
    };
  },

  toJSON(message: IndexExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Index !== undefined && (obj.Index = message.Index ? Any.toJSON(message.Index) : undefined);
    message.HasOK !== undefined && (obj.HasOK = message.HasOK);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IndexExpr>, I>>(object: I): IndexExpr {
    const message = createBaseIndexExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Index = object.Index !== undefined && object.Index !== null ? Any.fromPartial(object.Index) : undefined;
    message.HasOK = object.HasOK ?? false;
    return message;
  }

};

function createBaseSelectorExpr(): SelectorExpr {
  return {
    Attributes: undefined,
    X: undefined,
    Path: undefined,
    Sel: ""
  };
}

export const SelectorExpr = {
  encode(message: SelectorExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (message.Path !== undefined) {
      ValuePath.encode(message.Path, writer.uint32(26).fork()).ldelim();
    }

    if (message.Sel !== "") {
      writer.uint32(34).string(message.Sel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectorExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectorExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Path = ValuePath.decode(reader, reader.uint32());
          break;

        case 4:
          message.Sel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SelectorExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Path: isSet(object.Path) ? ValuePath.fromJSON(object.Path) : undefined,
      Sel: isSet(object.Sel) ? String(object.Sel) : ""
    };
  },

  toJSON(message: SelectorExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Path !== undefined && (obj.Path = message.Path ? ValuePath.toJSON(message.Path) : undefined);
    message.Sel !== undefined && (obj.Sel = message.Sel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SelectorExpr>, I>>(object: I): SelectorExpr {
    const message = createBaseSelectorExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Path = object.Path !== undefined && object.Path !== null ? ValuePath.fromPartial(object.Path) : undefined;
    message.Sel = object.Sel ?? "";
    return message;
  }

};

function createBaseSliceExpr(): SliceExpr {
  return {
    Attributes: undefined,
    X: undefined,
    Low: undefined,
    High: undefined,
    Max: undefined
  };
}

export const SliceExpr = {
  encode(message: SliceExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (message.Low !== undefined) {
      Any.encode(message.Low, writer.uint32(26).fork()).ldelim();
    }

    if (message.High !== undefined) {
      Any.encode(message.High, writer.uint32(34).fork()).ldelim();
    }

    if (message.Max !== undefined) {
      Any.encode(message.Max, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SliceExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSliceExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Low = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.High = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.Max = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SliceExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Low: isSet(object.Low) ? Any.fromJSON(object.Low) : undefined,
      High: isSet(object.High) ? Any.fromJSON(object.High) : undefined,
      Max: isSet(object.Max) ? Any.fromJSON(object.Max) : undefined
    };
  },

  toJSON(message: SliceExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Low !== undefined && (obj.Low = message.Low ? Any.toJSON(message.Low) : undefined);
    message.High !== undefined && (obj.High = message.High ? Any.toJSON(message.High) : undefined);
    message.Max !== undefined && (obj.Max = message.Max ? Any.toJSON(message.Max) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SliceExpr>, I>>(object: I): SliceExpr {
    const message = createBaseSliceExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Low = object.Low !== undefined && object.Low !== null ? Any.fromPartial(object.Low) : undefined;
    message.High = object.High !== undefined && object.High !== null ? Any.fromPartial(object.High) : undefined;
    message.Max = object.Max !== undefined && object.Max !== null ? Any.fromPartial(object.Max) : undefined;
    return message;
  }

};

function createBaseStarExpr(): StarExpr {
  return {
    Attributes: undefined,
    X: undefined
  };
}

export const StarExpr = {
  encode(message: StarExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StarExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStarExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StarExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined
    };
  },

  toJSON(message: StarExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StarExpr>, I>>(object: I): StarExpr {
    const message = createBaseStarExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    return message;
  }

};

function createBaseRefExpr(): RefExpr {
  return {
    Attributes: undefined,
    X: undefined
  };
}

export const RefExpr = {
  encode(message: RefExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined
    };
  },

  toJSON(message: RefExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefExpr>, I>>(object: I): RefExpr {
    const message = createBaseRefExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    return message;
  }

};

function createBaseTypeAssertExpr(): TypeAssertExpr {
  return {
    Attributes: undefined,
    X: undefined,
    Type: undefined,
    HasOK: false
  };
}

export const TypeAssertExpr = {
  encode(message: TypeAssertExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    if (message.HasOK === true) {
      writer.uint32(32).bool(message.HasOK);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeAssertExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeAssertExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.HasOK = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TypeAssertExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      HasOK: isSet(object.HasOK) ? Boolean(object.HasOK) : false
    };
  },

  toJSON(message: TypeAssertExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    message.HasOK !== undefined && (obj.HasOK = message.HasOK);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TypeAssertExpr>, I>>(object: I): TypeAssertExpr {
    const message = createBaseTypeAssertExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.HasOK = object.HasOK ?? false;
    return message;
  }

};

function createBaseUnaryExpr(): UnaryExpr {
  return {
    Attributes: undefined,
    X: undefined,
    Op: Long.ZERO
  };
}

export const UnaryExpr = {
  encode(message: UnaryExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(24).sint64(message.Op);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnaryExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnaryExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Op = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UnaryExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO
    };
  },

  toJSON(message: UnaryExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnaryExpr>, I>>(object: I): UnaryExpr {
    const message = createBaseUnaryExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    return message;
  }

};

function createBaseCompositeLitExpr(): CompositeLitExpr {
  return {
    Attributes: undefined,
    Type: undefined,
    Elts: []
  };
}

export const CompositeLitExpr = {
  encode(message: CompositeLitExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Elts) {
      KeyValueExpr.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompositeLitExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompositeLitExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Elts.push(KeyValueExpr.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompositeLitExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      Elts: Array.isArray(object?.Elts) ? object.Elts.map((e: any) => KeyValueExpr.fromJSON(e)) : []
    };
  },

  toJSON(message: CompositeLitExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);

    if (message.Elts) {
      obj.Elts = message.Elts.map(e => e ? KeyValueExpr.toJSON(e) : undefined);
    } else {
      obj.Elts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompositeLitExpr>, I>>(object: I): CompositeLitExpr {
    const message = createBaseCompositeLitExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.Elts = object.Elts?.map(e => KeyValueExpr.fromPartial(e)) || [];
    return message;
  }

};

function createBaseKeyValueExpr(): KeyValueExpr {
  return {
    Attributes: undefined,
    Key: undefined,
    Value: undefined
  };
}

export const KeyValueExpr = {
  encode(message: KeyValueExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Key !== undefined) {
      Any.encode(message.Key, writer.uint32(18).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValueExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Key = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyValueExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Key: isSet(object.Key) ? Any.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: KeyValueExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Key !== undefined && (obj.Key = message.Key ? Any.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyValueExpr>, I>>(object: I): KeyValueExpr {
    const message = createBaseKeyValueExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Key = object.Key !== undefined && object.Key !== null ? Any.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseFuncLitExpr(): FuncLitExpr {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Type: undefined,
    Body: []
  };
}

export const FuncLitExpr = {
  encode(message: FuncLitExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      FuncTypeExpr.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuncLitExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuncLitExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Type = FuncTypeExpr.decode(reader, reader.uint32());
          break;

        case 4:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FuncLitExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Type: isSet(object.Type) ? FuncTypeExpr.fromJSON(object.Type) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: FuncLitExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? FuncTypeExpr.toJSON(message.Type) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FuncLitExpr>, I>>(object: I): FuncLitExpr {
    const message = createBaseFuncLitExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? FuncTypeExpr.fromPartial(object.Type) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseConstExpr(): ConstExpr {
  return {
    Attributes: undefined,
    Source: undefined,
    TypedValue: undefined
  };
}

export const ConstExpr = {
  encode(message: ConstExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Source !== undefined) {
      Any.encode(message.Source, writer.uint32(18).fork()).ldelim();
    }

    if (message.TypedValue !== undefined) {
      TypedValue.encode(message.TypedValue, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConstExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Source = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.TypedValue = TypedValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConstExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Source: isSet(object.Source) ? Any.fromJSON(object.Source) : undefined,
      TypedValue: isSet(object.TypedValue) ? TypedValue.fromJSON(object.TypedValue) : undefined
    };
  },

  toJSON(message: ConstExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Source !== undefined && (obj.Source = message.Source ? Any.toJSON(message.Source) : undefined);
    message.TypedValue !== undefined && (obj.TypedValue = message.TypedValue ? TypedValue.toJSON(message.TypedValue) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConstExpr>, I>>(object: I): ConstExpr {
    const message = createBaseConstExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Source = object.Source !== undefined && object.Source !== null ? Any.fromPartial(object.Source) : undefined;
    message.TypedValue = object.TypedValue !== undefined && object.TypedValue !== null ? TypedValue.fromPartial(object.TypedValue) : undefined;
    return message;
  }

};

function createBaseFieldTypeExpr(): FieldTypeExpr {
  return {
    Attributes: undefined,
    Name: "",
    Type: undefined,
    Tag: undefined
  };
}

export const FieldTypeExpr = {
  encode(message: FieldTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    if (message.Tag !== undefined) {
      Any.encode(message.Tag, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Name = reader.string();
          break;

        case 3:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Tag = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FieldTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Name: isSet(object.Name) ? String(object.Name) : "",
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      Tag: isSet(object.Tag) ? Any.fromJSON(object.Tag) : undefined
    };
  },

  toJSON(message: FieldTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    message.Tag !== undefined && (obj.Tag = message.Tag ? Any.toJSON(message.Tag) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldTypeExpr>, I>>(object: I): FieldTypeExpr {
    const message = createBaseFieldTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Name = object.Name ?? "";
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.Tag = object.Tag !== undefined && object.Tag !== null ? Any.fromPartial(object.Tag) : undefined;
    return message;
  }

};

function createBaseArrayTypeExpr(): ArrayTypeExpr {
  return {
    Attributes: undefined,
    Len: undefined,
    Elt: undefined
  };
}

export const ArrayTypeExpr = {
  encode(message: ArrayTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Len !== undefined) {
      Any.encode(message.Len, writer.uint32(18).fork()).ldelim();
    }

    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Len = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ArrayTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Len: isSet(object.Len) ? Any.fromJSON(object.Len) : undefined,
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined
    };
  },

  toJSON(message: ArrayTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Len !== undefined && (obj.Len = message.Len ? Any.toJSON(message.Len) : undefined);
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ArrayTypeExpr>, I>>(object: I): ArrayTypeExpr {
    const message = createBaseArrayTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Len = object.Len !== undefined && object.Len !== null ? Any.fromPartial(object.Len) : undefined;
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    return message;
  }

};

function createBaseSliceTypeExpr(): SliceTypeExpr {
  return {
    Attributes: undefined,
    Elt: undefined,
    Vrd: false
  };
}

export const SliceTypeExpr = {
  encode(message: SliceTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(18).fork()).ldelim();
    }

    if (message.Vrd === true) {
      writer.uint32(24).bool(message.Vrd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SliceTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSliceTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Vrd = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SliceTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined,
      Vrd: isSet(object.Vrd) ? Boolean(object.Vrd) : false
    };
  },

  toJSON(message: SliceTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    message.Vrd !== undefined && (obj.Vrd = message.Vrd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SliceTypeExpr>, I>>(object: I): SliceTypeExpr {
    const message = createBaseSliceTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    message.Vrd = object.Vrd ?? false;
    return message;
  }

};

function createBaseInterfaceTypeExpr(): InterfaceTypeExpr {
  return {
    Attributes: undefined,
    Methods: [],
    Generic: ""
  };
}

export const InterfaceTypeExpr = {
  encode(message: InterfaceTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Methods) {
      FieldTypeExpr.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.Generic !== "") {
      writer.uint32(26).string(message.Generic);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Methods.push(FieldTypeExpr.decode(reader, reader.uint32()));
          break;

        case 3:
          message.Generic = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Methods: Array.isArray(object?.Methods) ? object.Methods.map((e: any) => FieldTypeExpr.fromJSON(e)) : [],
      Generic: isSet(object.Generic) ? String(object.Generic) : ""
    };
  },

  toJSON(message: InterfaceTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Methods) {
      obj.Methods = message.Methods.map(e => e ? FieldTypeExpr.toJSON(e) : undefined);
    } else {
      obj.Methods = [];
    }

    message.Generic !== undefined && (obj.Generic = message.Generic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceTypeExpr>, I>>(object: I): InterfaceTypeExpr {
    const message = createBaseInterfaceTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Methods = object.Methods?.map(e => FieldTypeExpr.fromPartial(e)) || [];
    message.Generic = object.Generic ?? "";
    return message;
  }

};

function createBaseChanTypeExpr(): ChanTypeExpr {
  return {
    Attributes: undefined,
    Dir: Long.ZERO,
    Value: undefined
  };
}

export const ChanTypeExpr = {
  encode(message: ChanTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Dir.isZero()) {
      writer.uint32(16).sint64(message.Dir);
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChanTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Dir = (reader.sint64() as Long);
          break;

        case 3:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChanTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Dir: isSet(object.Dir) ? Long.fromString(object.Dir) : Long.ZERO,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: ChanTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Dir !== undefined && (obj.Dir = (message.Dir || Long.ZERO).toString());
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChanTypeExpr>, I>>(object: I): ChanTypeExpr {
    const message = createBaseChanTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Dir = object.Dir !== undefined && object.Dir !== null ? Long.fromValue(object.Dir) : Long.ZERO;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseFuncTypeExpr(): FuncTypeExpr {
  return {
    Attributes: undefined,
    Params: [],
    Results: []
  };
}

export const FuncTypeExpr = {
  encode(message: FuncTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Params) {
      FieldTypeExpr.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Results) {
      FieldTypeExpr.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuncTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuncTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Params.push(FieldTypeExpr.decode(reader, reader.uint32()));
          break;

        case 3:
          message.Results.push(FieldTypeExpr.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FuncTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Params: Array.isArray(object?.Params) ? object.Params.map((e: any) => FieldTypeExpr.fromJSON(e)) : [],
      Results: Array.isArray(object?.Results) ? object.Results.map((e: any) => FieldTypeExpr.fromJSON(e)) : []
    };
  },

  toJSON(message: FuncTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Params) {
      obj.Params = message.Params.map(e => e ? FieldTypeExpr.toJSON(e) : undefined);
    } else {
      obj.Params = [];
    }

    if (message.Results) {
      obj.Results = message.Results.map(e => e ? FieldTypeExpr.toJSON(e) : undefined);
    } else {
      obj.Results = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FuncTypeExpr>, I>>(object: I): FuncTypeExpr {
    const message = createBaseFuncTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Params = object.Params?.map(e => FieldTypeExpr.fromPartial(e)) || [];
    message.Results = object.Results?.map(e => FieldTypeExpr.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMapTypeExpr(): MapTypeExpr {
  return {
    Attributes: undefined,
    Key: undefined,
    Value: undefined
  };
}

export const MapTypeExpr = {
  encode(message: MapTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Key !== undefined) {
      Any.encode(message.Key, writer.uint32(18).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Key = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Key: isSet(object.Key) ? Any.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: MapTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Key !== undefined && (obj.Key = message.Key ? Any.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapTypeExpr>, I>>(object: I): MapTypeExpr {
    const message = createBaseMapTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Key = object.Key !== undefined && object.Key !== null ? Any.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseStructTypeExpr(): StructTypeExpr {
  return {
    Attributes: undefined,
    Fields: []
  };
}

export const StructTypeExpr = {
  encode(message: StructTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Fields) {
      FieldTypeExpr.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StructTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStructTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Fields.push(FieldTypeExpr.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StructTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Fields: Array.isArray(object?.Fields) ? object.Fields.map((e: any) => FieldTypeExpr.fromJSON(e)) : []
    };
  },

  toJSON(message: StructTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Fields) {
      obj.Fields = message.Fields.map(e => e ? FieldTypeExpr.toJSON(e) : undefined);
    } else {
      obj.Fields = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StructTypeExpr>, I>>(object: I): StructTypeExpr {
    const message = createBaseStructTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Fields = object.Fields?.map(e => FieldTypeExpr.fromPartial(e)) || [];
    return message;
  }

};

function createBaseConstTypeExpr(): constTypeExpr {
  return {
    Attributes: undefined,
    Source: undefined,
    Type: undefined
  };
}

export const constTypeExpr = {
  encode(message: constTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Source !== undefined) {
      Any.encode(message.Source, writer.uint32(18).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): constTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Source = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): constTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Source: isSet(object.Source) ? Any.fromJSON(object.Source) : undefined,
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined
    };
  },

  toJSON(message: constTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Source !== undefined && (obj.Source = message.Source ? Any.toJSON(message.Source) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<constTypeExpr>, I>>(object: I): constTypeExpr {
    const message = createBaseConstTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Source = object.Source !== undefined && object.Source !== null ? Any.fromPartial(object.Source) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    return message;
  }

};

function createBaseMaybeNativeTypeExpr(): MaybeNativeTypeExpr {
  return {
    Attributes: undefined,
    Type: undefined
  };
}

export const MaybeNativeTypeExpr = {
  encode(message: MaybeNativeTypeExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaybeNativeTypeExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaybeNativeTypeExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MaybeNativeTypeExpr {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined
    };
  },

  toJSON(message: MaybeNativeTypeExpr): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MaybeNativeTypeExpr>, I>>(object: I): MaybeNativeTypeExpr {
    const message = createBaseMaybeNativeTypeExpr();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    return message;
  }

};

function createBaseAssignStmt(): AssignStmt {
  return {
    Attributes: undefined,
    Lhs: [],
    Op: Long.ZERO,
    Rhs: []
  };
}

export const AssignStmt = {
  encode(message: AssignStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Lhs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(24).sint64(message.Op);
    }

    for (const v of message.Rhs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssignStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssignStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Lhs.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.Op = (reader.sint64() as Long);
          break;

        case 4:
          message.Rhs.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssignStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Lhs: Array.isArray(object?.Lhs) ? object.Lhs.map((e: any) => Any.fromJSON(e)) : [],
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO,
      Rhs: Array.isArray(object?.Rhs) ? object.Rhs.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: AssignStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Lhs) {
      obj.Lhs = message.Lhs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Lhs = [];
    }

    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());

    if (message.Rhs) {
      obj.Rhs = message.Rhs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Rhs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssignStmt>, I>>(object: I): AssignStmt {
    const message = createBaseAssignStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Lhs = object.Lhs?.map(e => Any.fromPartial(e)) || [];
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    message.Rhs = object.Rhs?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBlockStmt(): BlockStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Body: []
  };
}

export const BlockStmt = {
  encode(message: BlockStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: BlockStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockStmt>, I>>(object: I): BlockStmt {
    const message = createBaseBlockStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBranchStmt(): BranchStmt {
  return {
    Attributes: undefined,
    Op: Long.ZERO,
    Label: "",
    Depth: 0,
    BodyIndex: Long.ZERO
  };
}

export const BranchStmt = {
  encode(message: BranchStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(16).sint64(message.Op);
    }

    if (message.Label !== "") {
      writer.uint32(26).string(message.Label);
    }

    if (message.Depth !== 0) {
      writer.uint32(32).uint32(message.Depth);
    }

    if (!message.BodyIndex.isZero()) {
      writer.uint32(40).sint64(message.BodyIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BranchStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBranchStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Op = (reader.sint64() as Long);
          break;

        case 3:
          message.Label = reader.string();
          break;

        case 4:
          message.Depth = reader.uint32();
          break;

        case 5:
          message.BodyIndex = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BranchStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO,
      Label: isSet(object.Label) ? String(object.Label) : "",
      Depth: isSet(object.Depth) ? Number(object.Depth) : 0,
      BodyIndex: isSet(object.BodyIndex) ? Long.fromString(object.BodyIndex) : Long.ZERO
    };
  },

  toJSON(message: BranchStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());
    message.Label !== undefined && (obj.Label = message.Label);
    message.Depth !== undefined && (obj.Depth = Math.round(message.Depth));
    message.BodyIndex !== undefined && (obj.BodyIndex = (message.BodyIndex || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BranchStmt>, I>>(object: I): BranchStmt {
    const message = createBaseBranchStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    message.Label = object.Label ?? "";
    message.Depth = object.Depth ?? 0;
    message.BodyIndex = object.BodyIndex !== undefined && object.BodyIndex !== null ? Long.fromValue(object.BodyIndex) : Long.ZERO;
    return message;
  }

};

function createBaseDeclStmt(): DeclStmt {
  return {
    Attributes: undefined,
    Body: []
  };
}

export const DeclStmt = {
  encode(message: DeclStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeclStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeclStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeclStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: DeclStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeclStmt>, I>>(object: I): DeclStmt {
    const message = createBaseDeclStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDeferStmt(): DeferStmt {
  return {
    Attributes: undefined,
    Call: undefined
  };
}

export const DeferStmt = {
  encode(message: DeferStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Call !== undefined) {
      CallExpr.encode(message.Call, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeferStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeferStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Call = CallExpr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeferStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Call: isSet(object.Call) ? CallExpr.fromJSON(object.Call) : undefined
    };
  },

  toJSON(message: DeferStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Call !== undefined && (obj.Call = message.Call ? CallExpr.toJSON(message.Call) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeferStmt>, I>>(object: I): DeferStmt {
    const message = createBaseDeferStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Call = object.Call !== undefined && object.Call !== null ? CallExpr.fromPartial(object.Call) : undefined;
    return message;
  }

};

function createBaseExprStmt(): ExprStmt {
  return {
    Attributes: undefined,
    X: undefined
  };
}

export const ExprStmt = {
  encode(message: ExprStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExprStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExprStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExprStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined
    };
  },

  toJSON(message: ExprStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExprStmt>, I>>(object: I): ExprStmt {
    const message = createBaseExprStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    return message;
  }

};

function createBaseForStmt(): ForStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Init: undefined,
    Cond: undefined,
    Post: undefined,
    Body: []
  };
}

export const ForStmt = {
  encode(message: ForStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Init !== undefined) {
      Any.encode(message.Init, writer.uint32(26).fork()).ldelim();
    }

    if (message.Cond !== undefined) {
      Any.encode(message.Cond, writer.uint32(34).fork()).ldelim();
    }

    if (message.Post !== undefined) {
      Any.encode(message.Post, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Init = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Cond = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.Post = Any.decode(reader, reader.uint32());
          break;

        case 6:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ForStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Init: isSet(object.Init) ? Any.fromJSON(object.Init) : undefined,
      Cond: isSet(object.Cond) ? Any.fromJSON(object.Cond) : undefined,
      Post: isSet(object.Post) ? Any.fromJSON(object.Post) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: ForStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Init !== undefined && (obj.Init = message.Init ? Any.toJSON(message.Init) : undefined);
    message.Cond !== undefined && (obj.Cond = message.Cond ? Any.toJSON(message.Cond) : undefined);
    message.Post !== undefined && (obj.Post = message.Post ? Any.toJSON(message.Post) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForStmt>, I>>(object: I): ForStmt {
    const message = createBaseForStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Init = object.Init !== undefined && object.Init !== null ? Any.fromPartial(object.Init) : undefined;
    message.Cond = object.Cond !== undefined && object.Cond !== null ? Any.fromPartial(object.Cond) : undefined;
    message.Post = object.Post !== undefined && object.Post !== null ? Any.fromPartial(object.Post) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGoStmt(): GoStmt {
  return {
    Attributes: undefined,
    Call: undefined
  };
}

export const GoStmt = {
  encode(message: GoStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Call !== undefined) {
      CallExpr.encode(message.Call, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Call = CallExpr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GoStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Call: isSet(object.Call) ? CallExpr.fromJSON(object.Call) : undefined
    };
  },

  toJSON(message: GoStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Call !== undefined && (obj.Call = message.Call ? CallExpr.toJSON(message.Call) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GoStmt>, I>>(object: I): GoStmt {
    const message = createBaseGoStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Call = object.Call !== undefined && object.Call !== null ? CallExpr.fromPartial(object.Call) : undefined;
    return message;
  }

};

function createBaseIfStmt(): IfStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Init: undefined,
    Cond: undefined,
    Then: undefined,
    Else: undefined
  };
}

export const IfStmt = {
  encode(message: IfStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Init !== undefined) {
      Any.encode(message.Init, writer.uint32(26).fork()).ldelim();
    }

    if (message.Cond !== undefined) {
      Any.encode(message.Cond, writer.uint32(34).fork()).ldelim();
    }

    if (message.Then !== undefined) {
      IfCaseStmt.encode(message.Then, writer.uint32(42).fork()).ldelim();
    }

    if (message.Else !== undefined) {
      IfCaseStmt.encode(message.Else, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IfStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIfStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Init = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Cond = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.Then = IfCaseStmt.decode(reader, reader.uint32());
          break;

        case 6:
          message.Else = IfCaseStmt.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IfStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Init: isSet(object.Init) ? Any.fromJSON(object.Init) : undefined,
      Cond: isSet(object.Cond) ? Any.fromJSON(object.Cond) : undefined,
      Then: isSet(object.Then) ? IfCaseStmt.fromJSON(object.Then) : undefined,
      Else: isSet(object.Else) ? IfCaseStmt.fromJSON(object.Else) : undefined
    };
  },

  toJSON(message: IfStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Init !== undefined && (obj.Init = message.Init ? Any.toJSON(message.Init) : undefined);
    message.Cond !== undefined && (obj.Cond = message.Cond ? Any.toJSON(message.Cond) : undefined);
    message.Then !== undefined && (obj.Then = message.Then ? IfCaseStmt.toJSON(message.Then) : undefined);
    message.Else !== undefined && (obj.Else = message.Else ? IfCaseStmt.toJSON(message.Else) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IfStmt>, I>>(object: I): IfStmt {
    const message = createBaseIfStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Init = object.Init !== undefined && object.Init !== null ? Any.fromPartial(object.Init) : undefined;
    message.Cond = object.Cond !== undefined && object.Cond !== null ? Any.fromPartial(object.Cond) : undefined;
    message.Then = object.Then !== undefined && object.Then !== null ? IfCaseStmt.fromPartial(object.Then) : undefined;
    message.Else = object.Else !== undefined && object.Else !== null ? IfCaseStmt.fromPartial(object.Else) : undefined;
    return message;
  }

};

function createBaseIfCaseStmt(): IfCaseStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Body: []
  };
}

export const IfCaseStmt = {
  encode(message: IfCaseStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IfCaseStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIfCaseStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IfCaseStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: IfCaseStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IfCaseStmt>, I>>(object: I): IfCaseStmt {
    const message = createBaseIfCaseStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseIncDecStmt(): IncDecStmt {
  return {
    Attributes: undefined,
    X: undefined,
    Op: Long.ZERO
  };
}

export const IncDecStmt = {
  encode(message: IncDecStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(18).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(24).sint64(message.Op);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncDecStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncDecStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Op = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IncDecStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO
    };
  },

  toJSON(message: IncDecStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IncDecStmt>, I>>(object: I): IncDecStmt {
    const message = createBaseIncDecStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    return message;
  }

};

function createBaseRangeStmt(): RangeStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    X: undefined,
    Key: undefined,
    Value: undefined,
    Op: Long.ZERO,
    Body: [],
    IsMap: false,
    IsString: false,
    IsArrayPtr: false
  };
}

export const RangeStmt = {
  encode(message: RangeStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(26).fork()).ldelim();
    }

    if (message.Key !== undefined) {
      Any.encode(message.Key, writer.uint32(34).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(42).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(48).sint64(message.Op);
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.IsMap === true) {
      writer.uint32(64).bool(message.IsMap);
    }

    if (message.IsString === true) {
      writer.uint32(72).bool(message.IsString);
    }

    if (message.IsArrayPtr === true) {
      writer.uint32(80).bool(message.IsArrayPtr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RangeStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRangeStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Key = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        case 6:
          message.Op = (reader.sint64() as Long);
          break;

        case 7:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        case 8:
          message.IsMap = reader.bool();
          break;

        case 9:
          message.IsString = reader.bool();
          break;

        case 10:
          message.IsArrayPtr = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RangeStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      Key: isSet(object.Key) ? Any.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : [],
      IsMap: isSet(object.IsMap) ? Boolean(object.IsMap) : false,
      IsString: isSet(object.IsString) ? Boolean(object.IsString) : false,
      IsArrayPtr: isSet(object.IsArrayPtr) ? Boolean(object.IsArrayPtr) : false
    };
  },

  toJSON(message: RangeStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.Key !== undefined && (obj.Key = message.Key ? Any.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    message.IsMap !== undefined && (obj.IsMap = message.IsMap);
    message.IsString !== undefined && (obj.IsString = message.IsString);
    message.IsArrayPtr !== undefined && (obj.IsArrayPtr = message.IsArrayPtr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RangeStmt>, I>>(object: I): RangeStmt {
    const message = createBaseRangeStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.Key = object.Key !== undefined && object.Key !== null ? Any.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    message.IsMap = object.IsMap ?? false;
    message.IsString = object.IsString ?? false;
    message.IsArrayPtr = object.IsArrayPtr ?? false;
    return message;
  }

};

function createBaseReturnStmt(): ReturnStmt {
  return {
    Attributes: undefined,
    Results: []
  };
}

export const ReturnStmt = {
  encode(message: ReturnStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Results) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Results.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReturnStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Results: Array.isArray(object?.Results) ? object.Results.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: ReturnStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Results) {
      obj.Results = message.Results.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Results = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReturnStmt>, I>>(object: I): ReturnStmt {
    const message = createBaseReturnStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Results = object.Results?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBasePanicStmt(): PanicStmt {
  return {
    Attributes: undefined,
    Exception: undefined
  };
}

export const PanicStmt = {
  encode(message: PanicStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Exception !== undefined) {
      Any.encode(message.Exception, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PanicStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePanicStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Exception = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PanicStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Exception: isSet(object.Exception) ? Any.fromJSON(object.Exception) : undefined
    };
  },

  toJSON(message: PanicStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Exception !== undefined && (obj.Exception = message.Exception ? Any.toJSON(message.Exception) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PanicStmt>, I>>(object: I): PanicStmt {
    const message = createBasePanicStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Exception = object.Exception !== undefined && object.Exception !== null ? Any.fromPartial(object.Exception) : undefined;
    return message;
  }

};

function createBaseSelectStmt(): SelectStmt {
  return {
    Attributes: undefined,
    Cases: []
  };
}

export const SelectStmt = {
  encode(message: SelectStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Cases) {
      SelectCaseStmt.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Cases.push(SelectCaseStmt.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SelectStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Cases: Array.isArray(object?.Cases) ? object.Cases.map((e: any) => SelectCaseStmt.fromJSON(e)) : []
    };
  },

  toJSON(message: SelectStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Cases) {
      obj.Cases = message.Cases.map(e => e ? SelectCaseStmt.toJSON(e) : undefined);
    } else {
      obj.Cases = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SelectStmt>, I>>(object: I): SelectStmt {
    const message = createBaseSelectStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Cases = object.Cases?.map(e => SelectCaseStmt.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSelectCaseStmt(): SelectCaseStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Comm: undefined,
    Body: []
  };
}

export const SelectCaseStmt = {
  encode(message: SelectCaseStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Comm !== undefined) {
      Any.encode(message.Comm, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectCaseStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectCaseStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Comm = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SelectCaseStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Comm: isSet(object.Comm) ? Any.fromJSON(object.Comm) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: SelectCaseStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Comm !== undefined && (obj.Comm = message.Comm ? Any.toJSON(message.Comm) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SelectCaseStmt>, I>>(object: I): SelectCaseStmt {
    const message = createBaseSelectCaseStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Comm = object.Comm !== undefined && object.Comm !== null ? Any.fromPartial(object.Comm) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSendStmt(): SendStmt {
  return {
    Attributes: undefined,
    Chan: undefined,
    Value: undefined
  };
}

export const SendStmt = {
  encode(message: SendStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.Chan !== undefined) {
      Any.encode(message.Chan, writer.uint32(18).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Chan = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SendStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Chan: isSet(object.Chan) ? Any.fromJSON(object.Chan) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: SendStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.Chan !== undefined && (obj.Chan = message.Chan ? Any.toJSON(message.Chan) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendStmt>, I>>(object: I): SendStmt {
    const message = createBaseSendStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Chan = object.Chan !== undefined && object.Chan !== null ? Any.fromPartial(object.Chan) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseSwitchStmt(): SwitchStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Init: undefined,
    X: undefined,
    IsTypeSwitch: false,
    Clauses: [],
    VarName: ""
  };
}

export const SwitchStmt = {
  encode(message: SwitchStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Init !== undefined) {
      Any.encode(message.Init, writer.uint32(26).fork()).ldelim();
    }

    if (message.X !== undefined) {
      Any.encode(message.X, writer.uint32(34).fork()).ldelim();
    }

    if (message.IsTypeSwitch === true) {
      writer.uint32(40).bool(message.IsTypeSwitch);
    }

    for (const v of message.Clauses) {
      SwitchClauseStmt.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.VarName !== "") {
      writer.uint32(58).string(message.VarName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwitchStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwitchStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Init = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.X = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.IsTypeSwitch = reader.bool();
          break;

        case 6:
          message.Clauses.push(SwitchClauseStmt.decode(reader, reader.uint32()));
          break;

        case 7:
          message.VarName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SwitchStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Init: isSet(object.Init) ? Any.fromJSON(object.Init) : undefined,
      X: isSet(object.X) ? Any.fromJSON(object.X) : undefined,
      IsTypeSwitch: isSet(object.IsTypeSwitch) ? Boolean(object.IsTypeSwitch) : false,
      Clauses: Array.isArray(object?.Clauses) ? object.Clauses.map((e: any) => SwitchClauseStmt.fromJSON(e)) : [],
      VarName: isSet(object.VarName) ? String(object.VarName) : ""
    };
  },

  toJSON(message: SwitchStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Init !== undefined && (obj.Init = message.Init ? Any.toJSON(message.Init) : undefined);
    message.X !== undefined && (obj.X = message.X ? Any.toJSON(message.X) : undefined);
    message.IsTypeSwitch !== undefined && (obj.IsTypeSwitch = message.IsTypeSwitch);

    if (message.Clauses) {
      obj.Clauses = message.Clauses.map(e => e ? SwitchClauseStmt.toJSON(e) : undefined);
    } else {
      obj.Clauses = [];
    }

    message.VarName !== undefined && (obj.VarName = message.VarName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwitchStmt>, I>>(object: I): SwitchStmt {
    const message = createBaseSwitchStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Init = object.Init !== undefined && object.Init !== null ? Any.fromPartial(object.Init) : undefined;
    message.X = object.X !== undefined && object.X !== null ? Any.fromPartial(object.X) : undefined;
    message.IsTypeSwitch = object.IsTypeSwitch ?? false;
    message.Clauses = object.Clauses?.map(e => SwitchClauseStmt.fromPartial(e)) || [];
    message.VarName = object.VarName ?? "";
    return message;
  }

};

function createBaseSwitchClauseStmt(): SwitchClauseStmt {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Cases: [],
    Body: []
  };
}

export const SwitchClauseStmt = {
  encode(message: SwitchClauseStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.Cases) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwitchClauseStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwitchClauseStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Cases.push(Any.decode(reader, reader.uint32()));
          break;

        case 4:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SwitchClauseStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Cases: Array.isArray(object?.Cases) ? object.Cases.map((e: any) => Any.fromJSON(e)) : [],
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: SwitchClauseStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);

    if (message.Cases) {
      obj.Cases = message.Cases.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Cases = [];
    }

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwitchClauseStmt>, I>>(object: I): SwitchClauseStmt {
    const message = createBaseSwitchClauseStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Cases = object.Cases?.map(e => Any.fromPartial(e)) || [];
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEmptyStmt(): EmptyStmt {
  return {
    Attributes: undefined
  };
}

export const EmptyStmt = {
  encode(message: EmptyStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmptyStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EmptyStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined
    };
  },

  toJSON(message: EmptyStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EmptyStmt>, I>>(object: I): EmptyStmt {
    const message = createBaseEmptyStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    return message;
  }

};

function createBaseBodyStmt(): bodyStmt {
  return {
    Attributes: undefined,
    Body: [],
    BodyLen: Long.ZERO,
    NextBodyIndex: Long.ZERO,
    NumOps: Long.ZERO,
    NumValues: Long.ZERO,
    NumExprs: Long.ZERO,
    NumStmts: Long.ZERO,
    Cond: undefined,
    Post: undefined,
    Active: undefined,
    Key: undefined,
    Value: undefined,
    Op: Long.ZERO,
    ListLen: Long.ZERO,
    ListIndex: Long.ZERO,
    NextItem: undefined,
    StrLen: Long.ZERO,
    StrIndex: Long.ZERO,
    NextRune: 0
  };
}

export const bodyStmt = {
  encode(message: bodyStmt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.BodyLen.isZero()) {
      writer.uint32(24).sint64(message.BodyLen);
    }

    if (!message.NextBodyIndex.isZero()) {
      writer.uint32(32).sint64(message.NextBodyIndex);
    }

    if (!message.NumOps.isZero()) {
      writer.uint32(40).sint64(message.NumOps);
    }

    if (!message.NumValues.isZero()) {
      writer.uint32(48).sint64(message.NumValues);
    }

    if (!message.NumExprs.isZero()) {
      writer.uint32(56).sint64(message.NumExprs);
    }

    if (!message.NumStmts.isZero()) {
      writer.uint32(64).sint64(message.NumStmts);
    }

    if (message.Cond !== undefined) {
      Any.encode(message.Cond, writer.uint32(74).fork()).ldelim();
    }

    if (message.Post !== undefined) {
      Any.encode(message.Post, writer.uint32(82).fork()).ldelim();
    }

    if (message.Active !== undefined) {
      Any.encode(message.Active, writer.uint32(90).fork()).ldelim();
    }

    if (message.Key !== undefined) {
      Any.encode(message.Key, writer.uint32(98).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(106).fork()).ldelim();
    }

    if (!message.Op.isZero()) {
      writer.uint32(112).sint64(message.Op);
    }

    if (!message.ListLen.isZero()) {
      writer.uint32(120).sint64(message.ListLen);
    }

    if (!message.ListIndex.isZero()) {
      writer.uint32(128).sint64(message.ListIndex);
    }

    if (message.NextItem !== undefined) {
      MapListItem.encode(message.NextItem, writer.uint32(138).fork()).ldelim();
    }

    if (!message.StrLen.isZero()) {
      writer.uint32(144).sint64(message.StrLen);
    }

    if (!message.StrIndex.isZero()) {
      writer.uint32(152).sint64(message.StrIndex);
    }

    if (message.NextRune !== 0) {
      writer.uint32(160).sint32(message.NextRune);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): bodyStmt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBodyStmt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.BodyLen = (reader.sint64() as Long);
          break;

        case 4:
          message.NextBodyIndex = (reader.sint64() as Long);
          break;

        case 5:
          message.NumOps = (reader.sint64() as Long);
          break;

        case 6:
          message.NumValues = (reader.sint64() as Long);
          break;

        case 7:
          message.NumExprs = (reader.sint64() as Long);
          break;

        case 8:
          message.NumStmts = (reader.sint64() as Long);
          break;

        case 9:
          message.Cond = Any.decode(reader, reader.uint32());
          break;

        case 10:
          message.Post = Any.decode(reader, reader.uint32());
          break;

        case 11:
          message.Active = Any.decode(reader, reader.uint32());
          break;

        case 12:
          message.Key = Any.decode(reader, reader.uint32());
          break;

        case 13:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        case 14:
          message.Op = (reader.sint64() as Long);
          break;

        case 15:
          message.ListLen = (reader.sint64() as Long);
          break;

        case 16:
          message.ListIndex = (reader.sint64() as Long);
          break;

        case 17:
          message.NextItem = MapListItem.decode(reader, reader.uint32());
          break;

        case 18:
          message.StrLen = (reader.sint64() as Long);
          break;

        case 19:
          message.StrIndex = (reader.sint64() as Long);
          break;

        case 20:
          message.NextRune = reader.sint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): bodyStmt {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : [],
      BodyLen: isSet(object.BodyLen) ? Long.fromString(object.BodyLen) : Long.ZERO,
      NextBodyIndex: isSet(object.NextBodyIndex) ? Long.fromString(object.NextBodyIndex) : Long.ZERO,
      NumOps: isSet(object.NumOps) ? Long.fromString(object.NumOps) : Long.ZERO,
      NumValues: isSet(object.NumValues) ? Long.fromString(object.NumValues) : Long.ZERO,
      NumExprs: isSet(object.NumExprs) ? Long.fromString(object.NumExprs) : Long.ZERO,
      NumStmts: isSet(object.NumStmts) ? Long.fromString(object.NumStmts) : Long.ZERO,
      Cond: isSet(object.Cond) ? Any.fromJSON(object.Cond) : undefined,
      Post: isSet(object.Post) ? Any.fromJSON(object.Post) : undefined,
      Active: isSet(object.Active) ? Any.fromJSON(object.Active) : undefined,
      Key: isSet(object.Key) ? Any.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined,
      Op: isSet(object.Op) ? Long.fromString(object.Op) : Long.ZERO,
      ListLen: isSet(object.ListLen) ? Long.fromString(object.ListLen) : Long.ZERO,
      ListIndex: isSet(object.ListIndex) ? Long.fromString(object.ListIndex) : Long.ZERO,
      NextItem: isSet(object.NextItem) ? MapListItem.fromJSON(object.NextItem) : undefined,
      StrLen: isSet(object.StrLen) ? Long.fromString(object.StrLen) : Long.ZERO,
      StrIndex: isSet(object.StrIndex) ? Long.fromString(object.StrIndex) : Long.ZERO,
      NextRune: isSet(object.NextRune) ? Number(object.NextRune) : 0
    };
  },

  toJSON(message: bodyStmt): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    message.BodyLen !== undefined && (obj.BodyLen = (message.BodyLen || Long.ZERO).toString());
    message.NextBodyIndex !== undefined && (obj.NextBodyIndex = (message.NextBodyIndex || Long.ZERO).toString());
    message.NumOps !== undefined && (obj.NumOps = (message.NumOps || Long.ZERO).toString());
    message.NumValues !== undefined && (obj.NumValues = (message.NumValues || Long.ZERO).toString());
    message.NumExprs !== undefined && (obj.NumExprs = (message.NumExprs || Long.ZERO).toString());
    message.NumStmts !== undefined && (obj.NumStmts = (message.NumStmts || Long.ZERO).toString());
    message.Cond !== undefined && (obj.Cond = message.Cond ? Any.toJSON(message.Cond) : undefined);
    message.Post !== undefined && (obj.Post = message.Post ? Any.toJSON(message.Post) : undefined);
    message.Active !== undefined && (obj.Active = message.Active ? Any.toJSON(message.Active) : undefined);
    message.Key !== undefined && (obj.Key = message.Key ? Any.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    message.Op !== undefined && (obj.Op = (message.Op || Long.ZERO).toString());
    message.ListLen !== undefined && (obj.ListLen = (message.ListLen || Long.ZERO).toString());
    message.ListIndex !== undefined && (obj.ListIndex = (message.ListIndex || Long.ZERO).toString());
    message.NextItem !== undefined && (obj.NextItem = message.NextItem ? MapListItem.toJSON(message.NextItem) : undefined);
    message.StrLen !== undefined && (obj.StrLen = (message.StrLen || Long.ZERO).toString());
    message.StrIndex !== undefined && (obj.StrIndex = (message.StrIndex || Long.ZERO).toString());
    message.NextRune !== undefined && (obj.NextRune = Math.round(message.NextRune));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<bodyStmt>, I>>(object: I): bodyStmt {
    const message = createBaseBodyStmt();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    message.BodyLen = object.BodyLen !== undefined && object.BodyLen !== null ? Long.fromValue(object.BodyLen) : Long.ZERO;
    message.NextBodyIndex = object.NextBodyIndex !== undefined && object.NextBodyIndex !== null ? Long.fromValue(object.NextBodyIndex) : Long.ZERO;
    message.NumOps = object.NumOps !== undefined && object.NumOps !== null ? Long.fromValue(object.NumOps) : Long.ZERO;
    message.NumValues = object.NumValues !== undefined && object.NumValues !== null ? Long.fromValue(object.NumValues) : Long.ZERO;
    message.NumExprs = object.NumExprs !== undefined && object.NumExprs !== null ? Long.fromValue(object.NumExprs) : Long.ZERO;
    message.NumStmts = object.NumStmts !== undefined && object.NumStmts !== null ? Long.fromValue(object.NumStmts) : Long.ZERO;
    message.Cond = object.Cond !== undefined && object.Cond !== null ? Any.fromPartial(object.Cond) : undefined;
    message.Post = object.Post !== undefined && object.Post !== null ? Any.fromPartial(object.Post) : undefined;
    message.Active = object.Active !== undefined && object.Active !== null ? Any.fromPartial(object.Active) : undefined;
    message.Key = object.Key !== undefined && object.Key !== null ? Any.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    message.Op = object.Op !== undefined && object.Op !== null ? Long.fromValue(object.Op) : Long.ZERO;
    message.ListLen = object.ListLen !== undefined && object.ListLen !== null ? Long.fromValue(object.ListLen) : Long.ZERO;
    message.ListIndex = object.ListIndex !== undefined && object.ListIndex !== null ? Long.fromValue(object.ListIndex) : Long.ZERO;
    message.NextItem = object.NextItem !== undefined && object.NextItem !== null ? MapListItem.fromPartial(object.NextItem) : undefined;
    message.StrLen = object.StrLen !== undefined && object.StrLen !== null ? Long.fromValue(object.StrLen) : Long.ZERO;
    message.StrIndex = object.StrIndex !== undefined && object.StrIndex !== null ? Long.fromValue(object.StrIndex) : Long.ZERO;
    message.NextRune = object.NextRune ?? 0;
    return message;
  }

};

function createBaseFuncDecl(): FuncDecl {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    NameExpr: undefined,
    IsMethod: false,
    Recv: undefined,
    Type: undefined,
    Body: []
  };
}

export const FuncDecl = {
  encode(message: FuncDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.NameExpr !== undefined) {
      NameExpr.encode(message.NameExpr, writer.uint32(26).fork()).ldelim();
    }

    if (message.IsMethod === true) {
      writer.uint32(32).bool(message.IsMethod);
    }

    if (message.Recv !== undefined) {
      FieldTypeExpr.encode(message.Recv, writer.uint32(42).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      FuncTypeExpr.encode(message.Type, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.Body) {
      Any.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuncDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuncDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.NameExpr = NameExpr.decode(reader, reader.uint32());
          break;

        case 4:
          message.IsMethod = reader.bool();
          break;

        case 5:
          message.Recv = FieldTypeExpr.decode(reader, reader.uint32());
          break;

        case 6:
          message.Type = FuncTypeExpr.decode(reader, reader.uint32());
          break;

        case 7:
          message.Body.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FuncDecl {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      NameExpr: isSet(object.NameExpr) ? NameExpr.fromJSON(object.NameExpr) : undefined,
      IsMethod: isSet(object.IsMethod) ? Boolean(object.IsMethod) : false,
      Recv: isSet(object.Recv) ? FieldTypeExpr.fromJSON(object.Recv) : undefined,
      Type: isSet(object.Type) ? FuncTypeExpr.fromJSON(object.Type) : undefined,
      Body: Array.isArray(object?.Body) ? object.Body.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: FuncDecl): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.NameExpr !== undefined && (obj.NameExpr = message.NameExpr ? NameExpr.toJSON(message.NameExpr) : undefined);
    message.IsMethod !== undefined && (obj.IsMethod = message.IsMethod);
    message.Recv !== undefined && (obj.Recv = message.Recv ? FieldTypeExpr.toJSON(message.Recv) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? FuncTypeExpr.toJSON(message.Type) : undefined);

    if (message.Body) {
      obj.Body = message.Body.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Body = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FuncDecl>, I>>(object: I): FuncDecl {
    const message = createBaseFuncDecl();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.NameExpr = object.NameExpr !== undefined && object.NameExpr !== null ? NameExpr.fromPartial(object.NameExpr) : undefined;
    message.IsMethod = object.IsMethod ?? false;
    message.Recv = object.Recv !== undefined && object.Recv !== null ? FieldTypeExpr.fromPartial(object.Recv) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? FuncTypeExpr.fromPartial(object.Type) : undefined;
    message.Body = object.Body?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseImportDecl(): ImportDecl {
  return {
    Attributes: undefined,
    NameExpr: undefined,
    PkgPath: ""
  };
}

export const ImportDecl = {
  encode(message: ImportDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.NameExpr !== undefined) {
      NameExpr.encode(message.NameExpr, writer.uint32(18).fork()).ldelim();
    }

    if (message.PkgPath !== "") {
      writer.uint32(26).string(message.PkgPath);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImportDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.NameExpr = NameExpr.decode(reader, reader.uint32());
          break;

        case 3:
          message.PkgPath = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ImportDecl {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      NameExpr: isSet(object.NameExpr) ? NameExpr.fromJSON(object.NameExpr) : undefined,
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : ""
    };
  },

  toJSON(message: ImportDecl): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.NameExpr !== undefined && (obj.NameExpr = message.NameExpr ? NameExpr.toJSON(message.NameExpr) : undefined);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportDecl>, I>>(object: I): ImportDecl {
    const message = createBaseImportDecl();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.NameExpr = object.NameExpr !== undefined && object.NameExpr !== null ? NameExpr.fromPartial(object.NameExpr) : undefined;
    message.PkgPath = object.PkgPath ?? "";
    return message;
  }

};

function createBaseValueDecl(): ValueDecl {
  return {
    Attributes: undefined,
    NameExprs: [],
    Type: undefined,
    Values: [],
    Const: false
  };
}

export const ValueDecl = {
  encode(message: ValueDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.NameExprs) {
      NameExpr.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Values) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.Const === true) {
      writer.uint32(40).bool(message.Const);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.NameExprs.push(NameExpr.decode(reader, reader.uint32()));
          break;

        case 3:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Values.push(Any.decode(reader, reader.uint32()));
          break;

        case 5:
          message.Const = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValueDecl {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      NameExprs: Array.isArray(object?.NameExprs) ? object.NameExprs.map((e: any) => NameExpr.fromJSON(e)) : [],
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      Values: Array.isArray(object?.Values) ? object.Values.map((e: any) => Any.fromJSON(e)) : [],
      Const: isSet(object.Const) ? Boolean(object.Const) : false
    };
  },

  toJSON(message: ValueDecl): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);

    if (message.NameExprs) {
      obj.NameExprs = message.NameExprs.map(e => e ? NameExpr.toJSON(e) : undefined);
    } else {
      obj.NameExprs = [];
    }

    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);

    if (message.Values) {
      obj.Values = message.Values.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Values = [];
    }

    message.Const !== undefined && (obj.Const = message.Const);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValueDecl>, I>>(object: I): ValueDecl {
    const message = createBaseValueDecl();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.NameExprs = object.NameExprs?.map(e => NameExpr.fromPartial(e)) || [];
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.Values = object.Values?.map(e => Any.fromPartial(e)) || [];
    message.Const = object.Const ?? false;
    return message;
  }

};

function createBaseTypeDecl(): TypeDecl {
  return {
    Attributes: undefined,
    NameExpr: undefined,
    Type: undefined,
    IsAlias: false
  };
}

export const TypeDecl = {
  encode(message: TypeDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.NameExpr !== undefined) {
      NameExpr.encode(message.NameExpr, writer.uint32(18).fork()).ldelim();
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(26).fork()).ldelim();
    }

    if (message.IsAlias === true) {
      writer.uint32(32).bool(message.IsAlias);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.NameExpr = NameExpr.decode(reader, reader.uint32());
          break;

        case 3:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.IsAlias = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TypeDecl {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      NameExpr: isSet(object.NameExpr) ? NameExpr.fromJSON(object.NameExpr) : undefined,
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      IsAlias: isSet(object.IsAlias) ? Boolean(object.IsAlias) : false
    };
  },

  toJSON(message: TypeDecl): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.NameExpr !== undefined && (obj.NameExpr = message.NameExpr ? NameExpr.toJSON(message.NameExpr) : undefined);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    message.IsAlias !== undefined && (obj.IsAlias = message.IsAlias);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TypeDecl>, I>>(object: I): TypeDecl {
    const message = createBaseTypeDecl();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.NameExpr = object.NameExpr !== undefined && object.NameExpr !== null ? NameExpr.fromPartial(object.NameExpr) : undefined;
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.IsAlias = object.IsAlias ?? false;
    return message;
  }

};

function createBaseStaticBlock(): StaticBlock {
  return {
    Block: undefined,
    Types: [],
    NumNames: 0,
    Names: [],
    Consts: [],
    Externs: [],
    Loc: undefined
  };
}

export const StaticBlock = {
  encode(message: StaticBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Block !== undefined) {
      Block.encode(message.Block, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Types) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.NumNames !== 0) {
      writer.uint32(24).uint32(message.NumNames);
    }

    for (const v of message.Names) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.Consts) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.Externs) {
      writer.uint32(50).string(v!);
    }

    if (message.Loc !== undefined) {
      Location.encode(message.Loc, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StaticBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaticBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Block = Block.decode(reader, reader.uint32());
          break;

        case 2:
          message.Types.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.NumNames = reader.uint32();
          break;

        case 4:
          message.Names.push(reader.string());
          break;

        case 5:
          message.Consts.push(reader.string());
          break;

        case 6:
          message.Externs.push(reader.string());
          break;

        case 7:
          message.Loc = Location.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StaticBlock {
    return {
      Block: isSet(object.Block) ? Block.fromJSON(object.Block) : undefined,
      Types: Array.isArray(object?.Types) ? object.Types.map((e: any) => Any.fromJSON(e)) : [],
      NumNames: isSet(object.NumNames) ? Number(object.NumNames) : 0,
      Names: Array.isArray(object?.Names) ? object.Names.map((e: any) => String(e)) : [],
      Consts: Array.isArray(object?.Consts) ? object.Consts.map((e: any) => String(e)) : [],
      Externs: Array.isArray(object?.Externs) ? object.Externs.map((e: any) => String(e)) : [],
      Loc: isSet(object.Loc) ? Location.fromJSON(object.Loc) : undefined
    };
  },

  toJSON(message: StaticBlock): unknown {
    const obj: any = {};
    message.Block !== undefined && (obj.Block = message.Block ? Block.toJSON(message.Block) : undefined);

    if (message.Types) {
      obj.Types = message.Types.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Types = [];
    }

    message.NumNames !== undefined && (obj.NumNames = Math.round(message.NumNames));

    if (message.Names) {
      obj.Names = message.Names.map(e => e);
    } else {
      obj.Names = [];
    }

    if (message.Consts) {
      obj.Consts = message.Consts.map(e => e);
    } else {
      obj.Consts = [];
    }

    if (message.Externs) {
      obj.Externs = message.Externs.map(e => e);
    } else {
      obj.Externs = [];
    }

    message.Loc !== undefined && (obj.Loc = message.Loc ? Location.toJSON(message.Loc) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StaticBlock>, I>>(object: I): StaticBlock {
    const message = createBaseStaticBlock();
    message.Block = object.Block !== undefined && object.Block !== null ? Block.fromPartial(object.Block) : undefined;
    message.Types = object.Types?.map(e => Any.fromPartial(e)) || [];
    message.NumNames = object.NumNames ?? 0;
    message.Names = object.Names?.map(e => e) || [];
    message.Consts = object.Consts?.map(e => e) || [];
    message.Externs = object.Externs?.map(e => e) || [];
    message.Loc = object.Loc !== undefined && object.Loc !== null ? Location.fromPartial(object.Loc) : undefined;
    return message;
  }

};

function createBaseFileSet(): FileSet {
  return {
    Files: []
  };
}

export const FileSet = {
  encode(message: FileSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Files) {
      FileNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Files.push(FileNode.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FileSet {
    return {
      Files: Array.isArray(object?.Files) ? object.Files.map((e: any) => FileNode.fromJSON(e)) : []
    };
  },

  toJSON(message: FileSet): unknown {
    const obj: any = {};

    if (message.Files) {
      obj.Files = message.Files.map(e => e ? FileNode.toJSON(e) : undefined);
    } else {
      obj.Files = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileSet>, I>>(object: I): FileSet {
    const message = createBaseFileSet();
    message.Files = object.Files?.map(e => FileNode.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFileNode(): FileNode {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    Name: "",
    PkgName: "",
    Decls: []
  };
}

export const FileNode = {
  encode(message: FileNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.Name !== "") {
      writer.uint32(26).string(message.Name);
    }

    if (message.PkgName !== "") {
      writer.uint32(34).string(message.PkgName);
    }

    for (const v of message.Decls) {
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.Name = reader.string();
          break;

        case 4:
          message.PkgName = reader.string();
          break;

        case 5:
          message.Decls.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FileNode {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      Name: isSet(object.Name) ? String(object.Name) : "",
      PkgName: isSet(object.PkgName) ? String(object.PkgName) : "",
      Decls: Array.isArray(object?.Decls) ? object.Decls.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: FileNode): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.Name !== undefined && (obj.Name = message.Name);
    message.PkgName !== undefined && (obj.PkgName = message.PkgName);

    if (message.Decls) {
      obj.Decls = message.Decls.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Decls = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileNode>, I>>(object: I): FileNode {
    const message = createBaseFileNode();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.Name = object.Name ?? "";
    message.PkgName = object.PkgName ?? "";
    message.Decls = object.Decls?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBasePackageNode(): PackageNode {
  return {
    Attributes: undefined,
    StaticBlock: undefined,
    PkgPath: "",
    PkgName: "",
    FileSet: undefined
  };
}

export const PackageNode = {
  encode(message: PackageNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Attributes !== undefined) {
      Attributes.encode(message.Attributes, writer.uint32(10).fork()).ldelim();
    }

    if (message.StaticBlock !== undefined) {
      StaticBlock.encode(message.StaticBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.PkgPath !== "") {
      writer.uint32(26).string(message.PkgPath);
    }

    if (message.PkgName !== "") {
      writer.uint32(34).string(message.PkgName);
    }

    if (message.FileSet !== undefined) {
      FileSet.encode(message.FileSet, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Attributes = Attributes.decode(reader, reader.uint32());
          break;

        case 2:
          message.StaticBlock = StaticBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.PkgPath = reader.string();
          break;

        case 4:
          message.PkgName = reader.string();
          break;

        case 5:
          message.FileSet = FileSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PackageNode {
    return {
      Attributes: isSet(object.Attributes) ? Attributes.fromJSON(object.Attributes) : undefined,
      StaticBlock: isSet(object.StaticBlock) ? StaticBlock.fromJSON(object.StaticBlock) : undefined,
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      PkgName: isSet(object.PkgName) ? String(object.PkgName) : "",
      FileSet: isSet(object.FileSet) ? FileSet.fromJSON(object.FileSet) : undefined
    };
  },

  toJSON(message: PackageNode): unknown {
    const obj: any = {};
    message.Attributes !== undefined && (obj.Attributes = message.Attributes ? Attributes.toJSON(message.Attributes) : undefined);
    message.StaticBlock !== undefined && (obj.StaticBlock = message.StaticBlock ? StaticBlock.toJSON(message.StaticBlock) : undefined);
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    message.PkgName !== undefined && (obj.PkgName = message.PkgName);
    message.FileSet !== undefined && (obj.FileSet = message.FileSet ? FileSet.toJSON(message.FileSet) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackageNode>, I>>(object: I): PackageNode {
    const message = createBasePackageNode();
    message.Attributes = object.Attributes !== undefined && object.Attributes !== null ? Attributes.fromPartial(object.Attributes) : undefined;
    message.StaticBlock = object.StaticBlock !== undefined && object.StaticBlock !== null ? StaticBlock.fromPartial(object.StaticBlock) : undefined;
    message.PkgPath = object.PkgPath ?? "";
    message.PkgName = object.PkgName ?? "";
    message.FileSet = object.FileSet !== undefined && object.FileSet !== null ? FileSet.fromPartial(object.FileSet) : undefined;
    return message;
  }

};

function createBaseRefNode(): RefNode {
  return {
    Location: undefined,
    BlockNode: undefined
  };
}

export const RefNode = {
  encode(message: RefNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Location !== undefined) {
      Location.encode(message.Location, writer.uint32(10).fork()).ldelim();
    }

    if (message.BlockNode !== undefined) {
      Any.encode(message.BlockNode, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefNode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Location = Location.decode(reader, reader.uint32());
          break;

        case 2:
          message.BlockNode = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefNode {
    return {
      Location: isSet(object.Location) ? Location.fromJSON(object.Location) : undefined,
      BlockNode: isSet(object.BlockNode) ? Any.fromJSON(object.BlockNode) : undefined
    };
  },

  toJSON(message: RefNode): unknown {
    const obj: any = {};
    message.Location !== undefined && (obj.Location = message.Location ? Location.toJSON(message.Location) : undefined);
    message.BlockNode !== undefined && (obj.BlockNode = message.BlockNode ? Any.toJSON(message.BlockNode) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefNode>, I>>(object: I): RefNode {
    const message = createBaseRefNode();
    message.Location = object.Location !== undefined && object.Location !== null ? Location.fromPartial(object.Location) : undefined;
    message.BlockNode = object.BlockNode !== undefined && object.BlockNode !== null ? Any.fromPartial(object.BlockNode) : undefined;
    return message;
  }

};

function createBasePrimitiveType(): PrimitiveType {
  return {
    Value: Long.ZERO
  };
}

export const PrimitiveType = {
  encode(message: PrimitiveType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Value.isZero()) {
      writer.uint32(8).sint64(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimitiveType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimitiveType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrimitiveType {
    return {
      Value: isSet(object.Value) ? Long.fromString(object.Value) : Long.ZERO
    };
  },

  toJSON(message: PrimitiveType): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = (message.Value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrimitiveType>, I>>(object: I): PrimitiveType {
    const message = createBasePrimitiveType();
    message.Value = object.Value !== undefined && object.Value !== null ? Long.fromValue(object.Value) : Long.ZERO;
    return message;
  }

};

function createBasePointerType(): PointerType {
  return {
    Elt: undefined
  };
}

export const PointerType = {
  encode(message: PointerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointerType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointerType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PointerType {
    return {
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined
    };
  },

  toJSON(message: PointerType): unknown {
    const obj: any = {};
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PointerType>, I>>(object: I): PointerType {
    const message = createBasePointerType();
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    return message;
  }

};

function createBaseArrayType(): ArrayType {
  return {
    Len: Long.ZERO,
    Elt: undefined,
    Vrd: false
  };
}

export const ArrayType = {
  encode(message: ArrayType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Len.isZero()) {
      writer.uint32(8).sint64(message.Len);
    }

    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(18).fork()).ldelim();
    }

    if (message.Vrd === true) {
      writer.uint32(24).bool(message.Vrd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Len = (reader.sint64() as Long);
          break;

        case 2:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Vrd = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ArrayType {
    return {
      Len: isSet(object.Len) ? Long.fromString(object.Len) : Long.ZERO,
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined,
      Vrd: isSet(object.Vrd) ? Boolean(object.Vrd) : false
    };
  },

  toJSON(message: ArrayType): unknown {
    const obj: any = {};
    message.Len !== undefined && (obj.Len = (message.Len || Long.ZERO).toString());
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    message.Vrd !== undefined && (obj.Vrd = message.Vrd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ArrayType>, I>>(object: I): ArrayType {
    const message = createBaseArrayType();
    message.Len = object.Len !== undefined && object.Len !== null ? Long.fromValue(object.Len) : Long.ZERO;
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    message.Vrd = object.Vrd ?? false;
    return message;
  }

};

function createBaseSliceType(): SliceType {
  return {
    Elt: undefined,
    Vrd: false
  };
}

export const SliceType = {
  encode(message: SliceType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(10).fork()).ldelim();
    }

    if (message.Vrd === true) {
      writer.uint32(16).bool(message.Vrd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SliceType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSliceType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.Vrd = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SliceType {
    return {
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined,
      Vrd: isSet(object.Vrd) ? Boolean(object.Vrd) : false
    };
  },

  toJSON(message: SliceType): unknown {
    const obj: any = {};
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    message.Vrd !== undefined && (obj.Vrd = message.Vrd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SliceType>, I>>(object: I): SliceType {
    const message = createBaseSliceType();
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    message.Vrd = object.Vrd ?? false;
    return message;
  }

};

function createBaseStructType(): StructType {
  return {
    PkgPath: "",
    Fields: []
  };
}

export const StructType = {
  encode(message: StructType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PkgPath !== "") {
      writer.uint32(10).string(message.PkgPath);
    }

    for (const v of message.Fields) {
      FieldType.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StructType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStructType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PkgPath = reader.string();
          break;

        case 2:
          message.Fields.push(FieldType.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StructType {
    return {
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      Fields: Array.isArray(object?.Fields) ? object.Fields.map((e: any) => FieldType.fromJSON(e)) : []
    };
  },

  toJSON(message: StructType): unknown {
    const obj: any = {};
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);

    if (message.Fields) {
      obj.Fields = message.Fields.map(e => e ? FieldType.toJSON(e) : undefined);
    } else {
      obj.Fields = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StructType>, I>>(object: I): StructType {
    const message = createBaseStructType();
    message.PkgPath = object.PkgPath ?? "";
    message.Fields = object.Fields?.map(e => FieldType.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFieldType(): FieldType {
  return {
    Name: "",
    Type: undefined,
    Embedded: false,
    Tag: ""
  };
}

export const FieldType = {
  encode(message: FieldType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }

    if (message.Type !== undefined) {
      Any.encode(message.Type, writer.uint32(18).fork()).ldelim();
    }

    if (message.Embedded === true) {
      writer.uint32(24).bool(message.Embedded);
    }

    if (message.Tag !== "") {
      writer.uint32(34).string(message.Tag);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;

        case 2:
          message.Type = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.Embedded = reader.bool();
          break;

        case 4:
          message.Tag = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FieldType {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
      Type: isSet(object.Type) ? Any.fromJSON(object.Type) : undefined,
      Embedded: isSet(object.Embedded) ? Boolean(object.Embedded) : false,
      Tag: isSet(object.Tag) ? String(object.Tag) : ""
    };
  },

  toJSON(message: FieldType): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    message.Type !== undefined && (obj.Type = message.Type ? Any.toJSON(message.Type) : undefined);
    message.Embedded !== undefined && (obj.Embedded = message.Embedded);
    message.Tag !== undefined && (obj.Tag = message.Tag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldType>, I>>(object: I): FieldType {
    const message = createBaseFieldType();
    message.Name = object.Name ?? "";
    message.Type = object.Type !== undefined && object.Type !== null ? Any.fromPartial(object.Type) : undefined;
    message.Embedded = object.Embedded ?? false;
    message.Tag = object.Tag ?? "";
    return message;
  }

};

function createBaseFuncType(): FuncType {
  return {
    Params: [],
    Results: []
  };
}

export const FuncType = {
  encode(message: FuncType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Params) {
      FieldType.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Results) {
      FieldType.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuncType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuncType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Params.push(FieldType.decode(reader, reader.uint32()));
          break;

        case 2:
          message.Results.push(FieldType.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FuncType {
    return {
      Params: Array.isArray(object?.Params) ? object.Params.map((e: any) => FieldType.fromJSON(e)) : [],
      Results: Array.isArray(object?.Results) ? object.Results.map((e: any) => FieldType.fromJSON(e)) : []
    };
  },

  toJSON(message: FuncType): unknown {
    const obj: any = {};

    if (message.Params) {
      obj.Params = message.Params.map(e => e ? FieldType.toJSON(e) : undefined);
    } else {
      obj.Params = [];
    }

    if (message.Results) {
      obj.Results = message.Results.map(e => e ? FieldType.toJSON(e) : undefined);
    } else {
      obj.Results = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FuncType>, I>>(object: I): FuncType {
    const message = createBaseFuncType();
    message.Params = object.Params?.map(e => FieldType.fromPartial(e)) || [];
    message.Results = object.Results?.map(e => FieldType.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMapType(): MapType {
  return {
    Key: undefined,
    Value: undefined
  };
}

export const MapType = {
  encode(message: MapType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key !== undefined) {
      Any.encode(message.Key, writer.uint32(10).fork()).ldelim();
    }

    if (message.Value !== undefined) {
      Any.encode(message.Value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.Value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapType {
    return {
      Key: isSet(object.Key) ? Any.fromJSON(object.Key) : undefined,
      Value: isSet(object.Value) ? Any.fromJSON(object.Value) : undefined
    };
  },

  toJSON(message: MapType): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = message.Key ? Any.toJSON(message.Key) : undefined);
    message.Value !== undefined && (obj.Value = message.Value ? Any.toJSON(message.Value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapType>, I>>(object: I): MapType {
    const message = createBaseMapType();
    message.Key = object.Key !== undefined && object.Key !== null ? Any.fromPartial(object.Key) : undefined;
    message.Value = object.Value !== undefined && object.Value !== null ? Any.fromPartial(object.Value) : undefined;
    return message;
  }

};

function createBaseInterfaceType(): InterfaceType {
  return {
    PkgPath: "",
    Methods: [],
    Generic: ""
  };
}

export const InterfaceType = {
  encode(message: InterfaceType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PkgPath !== "") {
      writer.uint32(10).string(message.PkgPath);
    }

    for (const v of message.Methods) {
      FieldType.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.Generic !== "") {
      writer.uint32(26).string(message.Generic);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PkgPath = reader.string();
          break;

        case 2:
          message.Methods.push(FieldType.decode(reader, reader.uint32()));
          break;

        case 3:
          message.Generic = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceType {
    return {
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      Methods: Array.isArray(object?.Methods) ? object.Methods.map((e: any) => FieldType.fromJSON(e)) : [],
      Generic: isSet(object.Generic) ? String(object.Generic) : ""
    };
  },

  toJSON(message: InterfaceType): unknown {
    const obj: any = {};
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);

    if (message.Methods) {
      obj.Methods = message.Methods.map(e => e ? FieldType.toJSON(e) : undefined);
    } else {
      obj.Methods = [];
    }

    message.Generic !== undefined && (obj.Generic = message.Generic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceType>, I>>(object: I): InterfaceType {
    const message = createBaseInterfaceType();
    message.PkgPath = object.PkgPath ?? "";
    message.Methods = object.Methods?.map(e => FieldType.fromPartial(e)) || [];
    message.Generic = object.Generic ?? "";
    return message;
  }

};

function createBaseTypeType(): TypeType {
  return {};
}

export const TypeType = {
  encode(_: TypeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeType();

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

  fromJSON(_: any): TypeType {
    return {};
  },

  toJSON(_: TypeType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TypeType>, I>>(_: I): TypeType {
    const message = createBaseTypeType();
    return message;
  }

};

function createBaseDeclaredType(): DeclaredType {
  return {
    PkgPath: "",
    Name: "",
    Base: undefined,
    Methods: []
  };
}

export const DeclaredType = {
  encode(message: DeclaredType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PkgPath !== "") {
      writer.uint32(10).string(message.PkgPath);
    }

    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }

    if (message.Base !== undefined) {
      Any.encode(message.Base, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.Methods) {
      TypedValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeclaredType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeclaredType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PkgPath = reader.string();
          break;

        case 2:
          message.Name = reader.string();
          break;

        case 3:
          message.Base = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.Methods.push(TypedValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeclaredType {
    return {
      PkgPath: isSet(object.PkgPath) ? String(object.PkgPath) : "",
      Name: isSet(object.Name) ? String(object.Name) : "",
      Base: isSet(object.Base) ? Any.fromJSON(object.Base) : undefined,
      Methods: Array.isArray(object?.Methods) ? object.Methods.map((e: any) => TypedValue.fromJSON(e)) : []
    };
  },

  toJSON(message: DeclaredType): unknown {
    const obj: any = {};
    message.PkgPath !== undefined && (obj.PkgPath = message.PkgPath);
    message.Name !== undefined && (obj.Name = message.Name);
    message.Base !== undefined && (obj.Base = message.Base ? Any.toJSON(message.Base) : undefined);

    if (message.Methods) {
      obj.Methods = message.Methods.map(e => e ? TypedValue.toJSON(e) : undefined);
    } else {
      obj.Methods = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeclaredType>, I>>(object: I): DeclaredType {
    const message = createBaseDeclaredType();
    message.PkgPath = object.PkgPath ?? "";
    message.Name = object.Name ?? "";
    message.Base = object.Base !== undefined && object.Base !== null ? Any.fromPartial(object.Base) : undefined;
    message.Methods = object.Methods?.map(e => TypedValue.fromPartial(e)) || [];
    return message;
  }

};

function createBasePackageType(): PackageType {
  return {};
}

export const PackageType = {
  encode(_: PackageType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackageType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageType();

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

  fromJSON(_: any): PackageType {
    return {};
  },

  toJSON(_: PackageType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackageType>, I>>(_: I): PackageType {
    const message = createBasePackageType();
    return message;
  }

};

function createBaseChanType(): ChanType {
  return {
    Dir: Long.ZERO,
    Elt: undefined
  };
}

export const ChanType = {
  encode(message: ChanType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Dir.isZero()) {
      writer.uint32(8).sint64(message.Dir);
    }

    if (message.Elt !== undefined) {
      Any.encode(message.Elt, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChanType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChanType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Dir = (reader.sint64() as Long);
          break;

        case 2:
          message.Elt = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChanType {
    return {
      Dir: isSet(object.Dir) ? Long.fromString(object.Dir) : Long.ZERO,
      Elt: isSet(object.Elt) ? Any.fromJSON(object.Elt) : undefined
    };
  },

  toJSON(message: ChanType): unknown {
    const obj: any = {};
    message.Dir !== undefined && (obj.Dir = (message.Dir || Long.ZERO).toString());
    message.Elt !== undefined && (obj.Elt = message.Elt ? Any.toJSON(message.Elt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChanType>, I>>(object: I): ChanType {
    const message = createBaseChanType();
    message.Dir = object.Dir !== undefined && object.Dir !== null ? Long.fromValue(object.Dir) : Long.ZERO;
    message.Elt = object.Elt !== undefined && object.Elt !== null ? Any.fromPartial(object.Elt) : undefined;
    return message;
  }

};

function createBaseBlockType(): blockType {
  return {};
}

export const blockType = {
  encode(_: blockType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): blockType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockType();

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

  fromJSON(_: any): blockType {
    return {};
  },

  toJSON(_: blockType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<blockType>, I>>(_: I): blockType {
    const message = createBaseBlockType();
    return message;
  }

};

function createBaseTupleType(): tupleType {
  return {
    Elts: []
  };
}

export const tupleType = {
  encode(message: tupleType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Elts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): tupleType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Elts.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): tupleType {
    return {
      Elts: Array.isArray(object?.Elts) ? object.Elts.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: tupleType): unknown {
    const obj: any = {};

    if (message.Elts) {
      obj.Elts = message.Elts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.Elts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<tupleType>, I>>(object: I): tupleType {
    const message = createBaseTupleType();
    message.Elts = object.Elts?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRefType(): RefType {
  return {
    ID: ""
  };
}

export const RefType = {
  encode(message: RefType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefType {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: RefType): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefType>, I>>(object: I): RefType {
    const message = createBaseRefType();
    message.ID = object.ID ?? "";
    return message;
  }

};