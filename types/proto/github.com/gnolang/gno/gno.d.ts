import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export interface TypeType {
}
export interface DeclaredType {
    PkgPath: string;
    Name: string;
    Base: Any;
    Methods: TypedValue[];
}
export interface PackageType {
}
export interface ChanType {
    Dir: Long;
    Elt: Any;
}
export interface blockType {
}
export interface tupleType {
    Elts: Any[];
}
export interface RefType {
    ID: string;
}
export declare const TypedValue: {
    encode(message: TypedValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypedValue;
    fromJSON(object: any): TypedValue;
    toJSON(message: TypedValue): unknown;
    fromPartial<I extends Exact<DeepPartial<TypedValue>, I>>(object: I): TypedValue;
};
export declare const StringValue: {
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringValue;
    fromJSON(object: any): StringValue;
    toJSON(message: StringValue): unknown;
    fromPartial<I extends Exact<DeepPartial<StringValue>, I>>(object: I): StringValue;
};
export declare const BigintValue: {
    encode(message: BigintValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BigintValue;
    fromJSON(object: any): BigintValue;
    toJSON(message: BigintValue): unknown;
    fromPartial<I extends Exact<DeepPartial<BigintValue>, I>>(object: I): BigintValue;
};
export declare const PointerValue: {
    encode(message: PointerValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PointerValue;
    fromJSON(object: any): PointerValue;
    toJSON(message: PointerValue): unknown;
    fromPartial<I extends Exact<DeepPartial<PointerValue>, I>>(object: I): PointerValue;
};
export declare const ArrayValue: {
    encode(message: ArrayValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArrayValue;
    fromJSON(object: any): ArrayValue;
    toJSON(message: ArrayValue): unknown;
    fromPartial<I extends Exact<DeepPartial<ArrayValue>, I>>(object: I): ArrayValue;
};
export declare const SliceValue: {
    encode(message: SliceValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SliceValue;
    fromJSON(object: any): SliceValue;
    toJSON(message: SliceValue): unknown;
    fromPartial<I extends Exact<DeepPartial<SliceValue>, I>>(object: I): SliceValue;
};
export declare const StructValue: {
    encode(message: StructValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StructValue;
    fromJSON(object: any): StructValue;
    toJSON(message: StructValue): unknown;
    fromPartial<I extends Exact<DeepPartial<StructValue>, I>>(object: I): StructValue;
};
export declare const FuncValue: {
    encode(message: FuncValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuncValue;
    fromJSON(object: any): FuncValue;
    toJSON(message: FuncValue): unknown;
    fromPartial<I extends Exact<DeepPartial<FuncValue>, I>>(object: I): FuncValue;
};
export declare const MapValue: {
    encode(message: MapValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue;
    fromJSON(object: any): MapValue;
    toJSON(message: MapValue): unknown;
    fromPartial<I extends Exact<DeepPartial<MapValue>, I>>(object: I): MapValue;
};
export declare const MapList: {
    encode(message: MapList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapList;
    fromJSON(object: any): MapList;
    toJSON(message: MapList): unknown;
    fromPartial<I extends Exact<DeepPartial<MapList>, I>>(object: I): MapList;
};
export declare const MapListItem: {
    encode(message: MapListItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapListItem;
    fromJSON(object: any): MapListItem;
    toJSON(message: MapListItem): unknown;
    fromPartial<I extends Exact<DeepPartial<MapListItem>, I>>(object: I): MapListItem;
};
export declare const BoundMethodValue: {
    encode(message: BoundMethodValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BoundMethodValue;
    fromJSON(object: any): BoundMethodValue;
    toJSON(message: BoundMethodValue): unknown;
    fromPartial<I extends Exact<DeepPartial<BoundMethodValue>, I>>(object: I): BoundMethodValue;
};
export declare const TypeValue: {
    encode(message: TypeValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypeValue;
    fromJSON(object: any): TypeValue;
    toJSON(message: TypeValue): unknown;
    fromPartial<I extends Exact<DeepPartial<TypeValue>, I>>(object: I): TypeValue;
};
export declare const PackageValue: {
    encode(message: PackageValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PackageValue;
    fromJSON(object: any): PackageValue;
    toJSON(message: PackageValue): unknown;
    fromPartial<I extends Exact<DeepPartial<PackageValue>, I>>(object: I): PackageValue;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block;
};
export declare const RefValue: {
    encode(message: RefValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefValue;
    fromJSON(object: any): RefValue;
    toJSON(message: RefValue): unknown;
    fromPartial<I extends Exact<DeepPartial<RefValue>, I>>(object: I): RefValue;
};
export declare const ObjectID: {
    encode(message: ObjectID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectID;
    fromJSON(object: any): ObjectID;
    toJSON(message: ObjectID): unknown;
    fromPartial<I extends Exact<DeepPartial<ObjectID>, I>>(object: I): ObjectID;
};
export declare const ObjectInfo: {
    encode(message: ObjectInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ObjectInfo;
    fromJSON(object: any): ObjectInfo;
    toJSON(message: ObjectInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<ObjectInfo>, I>>(object: I): ObjectInfo;
};
export declare const ValueHash: {
    encode(message: ValueHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValueHash;
    fromJSON(object: any): ValueHash;
    toJSON(message: ValueHash): unknown;
    fromPartial<I extends Exact<DeepPartial<ValueHash>, I>>(object: I): ValueHash;
};
export declare const Hashlet: {
    encode(message: Hashlet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Hashlet;
    fromJSON(object: any): Hashlet;
    toJSON(message: Hashlet): unknown;
    fromPartial<I extends Exact<DeepPartial<Hashlet>, I>>(object: I): Hashlet;
};
export declare const ValuePath: {
    encode(message: ValuePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValuePath;
    fromJSON(object: any): ValuePath;
    toJSON(message: ValuePath): unknown;
    fromPartial<I extends Exact<DeepPartial<ValuePath>, I>>(object: I): ValuePath;
};
export declare const Location: {
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location;
};
export declare const Attributes: {
    encode(message: Attributes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attributes;
    fromJSON(object: any): Attributes;
    toJSON(message: Attributes): unknown;
    fromPartial<I extends Exact<DeepPartial<Attributes>, I>>(object: I): Attributes;
};
export declare const NameExpr: {
    encode(message: NameExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NameExpr;
    fromJSON(object: any): NameExpr;
    toJSON(message: NameExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<NameExpr>, I>>(object: I): NameExpr;
};
export declare const BasicLitExpr: {
    encode(message: BasicLitExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicLitExpr;
    fromJSON(object: any): BasicLitExpr;
    toJSON(message: BasicLitExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<BasicLitExpr>, I>>(object: I): BasicLitExpr;
};
export declare const BinaryExpr: {
    encode(message: BinaryExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BinaryExpr;
    fromJSON(object: any): BinaryExpr;
    toJSON(message: BinaryExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<BinaryExpr>, I>>(object: I): BinaryExpr;
};
export declare const CallExpr: {
    encode(message: CallExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallExpr;
    fromJSON(object: any): CallExpr;
    toJSON(message: CallExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<CallExpr>, I>>(object: I): CallExpr;
};
export declare const IndexExpr: {
    encode(message: IndexExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IndexExpr;
    fromJSON(object: any): IndexExpr;
    toJSON(message: IndexExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<IndexExpr>, I>>(object: I): IndexExpr;
};
export declare const SelectorExpr: {
    encode(message: SelectorExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectorExpr;
    fromJSON(object: any): SelectorExpr;
    toJSON(message: SelectorExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<SelectorExpr>, I>>(object: I): SelectorExpr;
};
export declare const SliceExpr: {
    encode(message: SliceExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SliceExpr;
    fromJSON(object: any): SliceExpr;
    toJSON(message: SliceExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<SliceExpr>, I>>(object: I): SliceExpr;
};
export declare const StarExpr: {
    encode(message: StarExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StarExpr;
    fromJSON(object: any): StarExpr;
    toJSON(message: StarExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<StarExpr>, I>>(object: I): StarExpr;
};
export declare const RefExpr: {
    encode(message: RefExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefExpr;
    fromJSON(object: any): RefExpr;
    toJSON(message: RefExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<RefExpr>, I>>(object: I): RefExpr;
};
export declare const TypeAssertExpr: {
    encode(message: TypeAssertExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypeAssertExpr;
    fromJSON(object: any): TypeAssertExpr;
    toJSON(message: TypeAssertExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<TypeAssertExpr>, I>>(object: I): TypeAssertExpr;
};
export declare const UnaryExpr: {
    encode(message: UnaryExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnaryExpr;
    fromJSON(object: any): UnaryExpr;
    toJSON(message: UnaryExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<UnaryExpr>, I>>(object: I): UnaryExpr;
};
export declare const CompositeLitExpr: {
    encode(message: CompositeLitExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompositeLitExpr;
    fromJSON(object: any): CompositeLitExpr;
    toJSON(message: CompositeLitExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<CompositeLitExpr>, I>>(object: I): CompositeLitExpr;
};
export declare const KeyValueExpr: {
    encode(message: KeyValueExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueExpr;
    fromJSON(object: any): KeyValueExpr;
    toJSON(message: KeyValueExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<KeyValueExpr>, I>>(object: I): KeyValueExpr;
};
export declare const FuncLitExpr: {
    encode(message: FuncLitExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuncLitExpr;
    fromJSON(object: any): FuncLitExpr;
    toJSON(message: FuncLitExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<FuncLitExpr>, I>>(object: I): FuncLitExpr;
};
export declare const ConstExpr: {
    encode(message: ConstExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConstExpr;
    fromJSON(object: any): ConstExpr;
    toJSON(message: ConstExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<ConstExpr>, I>>(object: I): ConstExpr;
};
export declare const FieldTypeExpr: {
    encode(message: FieldTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldTypeExpr;
    fromJSON(object: any): FieldTypeExpr;
    toJSON(message: FieldTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<FieldTypeExpr>, I>>(object: I): FieldTypeExpr;
};
export declare const ArrayTypeExpr: {
    encode(message: ArrayTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArrayTypeExpr;
    fromJSON(object: any): ArrayTypeExpr;
    toJSON(message: ArrayTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<ArrayTypeExpr>, I>>(object: I): ArrayTypeExpr;
};
export declare const SliceTypeExpr: {
    encode(message: SliceTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SliceTypeExpr;
    fromJSON(object: any): SliceTypeExpr;
    toJSON(message: SliceTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<SliceTypeExpr>, I>>(object: I): SliceTypeExpr;
};
export declare const InterfaceTypeExpr: {
    encode(message: InterfaceTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceTypeExpr;
    fromJSON(object: any): InterfaceTypeExpr;
    toJSON(message: InterfaceTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<InterfaceTypeExpr>, I>>(object: I): InterfaceTypeExpr;
};
export declare const ChanTypeExpr: {
    encode(message: ChanTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChanTypeExpr;
    fromJSON(object: any): ChanTypeExpr;
    toJSON(message: ChanTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<ChanTypeExpr>, I>>(object: I): ChanTypeExpr;
};
export declare const FuncTypeExpr: {
    encode(message: FuncTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuncTypeExpr;
    fromJSON(object: any): FuncTypeExpr;
    toJSON(message: FuncTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<FuncTypeExpr>, I>>(object: I): FuncTypeExpr;
};
export declare const MapTypeExpr: {
    encode(message: MapTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapTypeExpr;
    fromJSON(object: any): MapTypeExpr;
    toJSON(message: MapTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<MapTypeExpr>, I>>(object: I): MapTypeExpr;
};
export declare const StructTypeExpr: {
    encode(message: StructTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StructTypeExpr;
    fromJSON(object: any): StructTypeExpr;
    toJSON(message: StructTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<StructTypeExpr>, I>>(object: I): StructTypeExpr;
};
export declare const constTypeExpr: {
    encode(message: constTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): constTypeExpr;
    fromJSON(object: any): constTypeExpr;
    toJSON(message: constTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<constTypeExpr>, I>>(object: I): constTypeExpr;
};
export declare const MaybeNativeTypeExpr: {
    encode(message: MaybeNativeTypeExpr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaybeNativeTypeExpr;
    fromJSON(object: any): MaybeNativeTypeExpr;
    toJSON(message: MaybeNativeTypeExpr): unknown;
    fromPartial<I extends Exact<DeepPartial<MaybeNativeTypeExpr>, I>>(object: I): MaybeNativeTypeExpr;
};
export declare const AssignStmt: {
    encode(message: AssignStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssignStmt;
    fromJSON(object: any): AssignStmt;
    toJSON(message: AssignStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<AssignStmt>, I>>(object: I): AssignStmt;
};
export declare const BlockStmt: {
    encode(message: BlockStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockStmt;
    fromJSON(object: any): BlockStmt;
    toJSON(message: BlockStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockStmt>, I>>(object: I): BlockStmt;
};
export declare const BranchStmt: {
    encode(message: BranchStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BranchStmt;
    fromJSON(object: any): BranchStmt;
    toJSON(message: BranchStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<BranchStmt>, I>>(object: I): BranchStmt;
};
export declare const DeclStmt: {
    encode(message: DeclStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclStmt;
    fromJSON(object: any): DeclStmt;
    toJSON(message: DeclStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<DeclStmt>, I>>(object: I): DeclStmt;
};
export declare const DeferStmt: {
    encode(message: DeferStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeferStmt;
    fromJSON(object: any): DeferStmt;
    toJSON(message: DeferStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<DeferStmt>, I>>(object: I): DeferStmt;
};
export declare const ExprStmt: {
    encode(message: ExprStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExprStmt;
    fromJSON(object: any): ExprStmt;
    toJSON(message: ExprStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<ExprStmt>, I>>(object: I): ExprStmt;
};
export declare const ForStmt: {
    encode(message: ForStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForStmt;
    fromJSON(object: any): ForStmt;
    toJSON(message: ForStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<ForStmt>, I>>(object: I): ForStmt;
};
export declare const GoStmt: {
    encode(message: GoStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoStmt;
    fromJSON(object: any): GoStmt;
    toJSON(message: GoStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<GoStmt>, I>>(object: I): GoStmt;
};
export declare const IfStmt: {
    encode(message: IfStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IfStmt;
    fromJSON(object: any): IfStmt;
    toJSON(message: IfStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<IfStmt>, I>>(object: I): IfStmt;
};
export declare const IfCaseStmt: {
    encode(message: IfCaseStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IfCaseStmt;
    fromJSON(object: any): IfCaseStmt;
    toJSON(message: IfCaseStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<IfCaseStmt>, I>>(object: I): IfCaseStmt;
};
export declare const IncDecStmt: {
    encode(message: IncDecStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncDecStmt;
    fromJSON(object: any): IncDecStmt;
    toJSON(message: IncDecStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<IncDecStmt>, I>>(object: I): IncDecStmt;
};
export declare const RangeStmt: {
    encode(message: RangeStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RangeStmt;
    fromJSON(object: any): RangeStmt;
    toJSON(message: RangeStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<RangeStmt>, I>>(object: I): RangeStmt;
};
export declare const ReturnStmt: {
    encode(message: ReturnStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReturnStmt;
    fromJSON(object: any): ReturnStmt;
    toJSON(message: ReturnStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<ReturnStmt>, I>>(object: I): ReturnStmt;
};
export declare const PanicStmt: {
    encode(message: PanicStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PanicStmt;
    fromJSON(object: any): PanicStmt;
    toJSON(message: PanicStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<PanicStmt>, I>>(object: I): PanicStmt;
};
export declare const SelectStmt: {
    encode(message: SelectStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectStmt;
    fromJSON(object: any): SelectStmt;
    toJSON(message: SelectStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<SelectStmt>, I>>(object: I): SelectStmt;
};
export declare const SelectCaseStmt: {
    encode(message: SelectCaseStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SelectCaseStmt;
    fromJSON(object: any): SelectCaseStmt;
    toJSON(message: SelectCaseStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<SelectCaseStmt>, I>>(object: I): SelectCaseStmt;
};
export declare const SendStmt: {
    encode(message: SendStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendStmt;
    fromJSON(object: any): SendStmt;
    toJSON(message: SendStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<SendStmt>, I>>(object: I): SendStmt;
};
export declare const SwitchStmt: {
    encode(message: SwitchStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchStmt;
    fromJSON(object: any): SwitchStmt;
    toJSON(message: SwitchStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<SwitchStmt>, I>>(object: I): SwitchStmt;
};
export declare const SwitchClauseStmt: {
    encode(message: SwitchClauseStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwitchClauseStmt;
    fromJSON(object: any): SwitchClauseStmt;
    toJSON(message: SwitchClauseStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<SwitchClauseStmt>, I>>(object: I): SwitchClauseStmt;
};
export declare const EmptyStmt: {
    encode(message: EmptyStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmptyStmt;
    fromJSON(object: any): EmptyStmt;
    toJSON(message: EmptyStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<EmptyStmt>, I>>(object: I): EmptyStmt;
};
export declare const bodyStmt: {
    encode(message: bodyStmt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): bodyStmt;
    fromJSON(object: any): bodyStmt;
    toJSON(message: bodyStmt): unknown;
    fromPartial<I extends Exact<DeepPartial<bodyStmt>, I>>(object: I): bodyStmt;
};
export declare const FuncDecl: {
    encode(message: FuncDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuncDecl;
    fromJSON(object: any): FuncDecl;
    toJSON(message: FuncDecl): unknown;
    fromPartial<I extends Exact<DeepPartial<FuncDecl>, I>>(object: I): FuncDecl;
};
export declare const ImportDecl: {
    encode(message: ImportDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ImportDecl;
    fromJSON(object: any): ImportDecl;
    toJSON(message: ImportDecl): unknown;
    fromPartial<I extends Exact<DeepPartial<ImportDecl>, I>>(object: I): ImportDecl;
};
export declare const ValueDecl: {
    encode(message: ValueDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValueDecl;
    fromJSON(object: any): ValueDecl;
    toJSON(message: ValueDecl): unknown;
    fromPartial<I extends Exact<DeepPartial<ValueDecl>, I>>(object: I): ValueDecl;
};
export declare const TypeDecl: {
    encode(message: TypeDecl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypeDecl;
    fromJSON(object: any): TypeDecl;
    toJSON(message: TypeDecl): unknown;
    fromPartial<I extends Exact<DeepPartial<TypeDecl>, I>>(object: I): TypeDecl;
};
export declare const StaticBlock: {
    encode(message: StaticBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StaticBlock;
    fromJSON(object: any): StaticBlock;
    toJSON(message: StaticBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<StaticBlock>, I>>(object: I): StaticBlock;
};
export declare const FileSet: {
    encode(message: FileSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileSet;
    fromJSON(object: any): FileSet;
    toJSON(message: FileSet): unknown;
    fromPartial<I extends Exact<DeepPartial<FileSet>, I>>(object: I): FileSet;
};
export declare const FileNode: {
    encode(message: FileNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileNode;
    fromJSON(object: any): FileNode;
    toJSON(message: FileNode): unknown;
    fromPartial<I extends Exact<DeepPartial<FileNode>, I>>(object: I): FileNode;
};
export declare const PackageNode: {
    encode(message: PackageNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PackageNode;
    fromJSON(object: any): PackageNode;
    toJSON(message: PackageNode): unknown;
    fromPartial<I extends Exact<DeepPartial<PackageNode>, I>>(object: I): PackageNode;
};
export declare const RefNode: {
    encode(message: RefNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefNode;
    fromJSON(object: any): RefNode;
    toJSON(message: RefNode): unknown;
    fromPartial<I extends Exact<DeepPartial<RefNode>, I>>(object: I): RefNode;
};
export declare const PrimitiveType: {
    encode(message: PrimitiveType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrimitiveType;
    fromJSON(object: any): PrimitiveType;
    toJSON(message: PrimitiveType): unknown;
    fromPartial<I extends Exact<DeepPartial<PrimitiveType>, I>>(object: I): PrimitiveType;
};
export declare const PointerType: {
    encode(message: PointerType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PointerType;
    fromJSON(object: any): PointerType;
    toJSON(message: PointerType): unknown;
    fromPartial<I extends Exact<DeepPartial<PointerType>, I>>(object: I): PointerType;
};
export declare const ArrayType: {
    encode(message: ArrayType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ArrayType;
    fromJSON(object: any): ArrayType;
    toJSON(message: ArrayType): unknown;
    fromPartial<I extends Exact<DeepPartial<ArrayType>, I>>(object: I): ArrayType;
};
export declare const SliceType: {
    encode(message: SliceType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SliceType;
    fromJSON(object: any): SliceType;
    toJSON(message: SliceType): unknown;
    fromPartial<I extends Exact<DeepPartial<SliceType>, I>>(object: I): SliceType;
};
export declare const StructType: {
    encode(message: StructType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StructType;
    fromJSON(object: any): StructType;
    toJSON(message: StructType): unknown;
    fromPartial<I extends Exact<DeepPartial<StructType>, I>>(object: I): StructType;
};
export declare const FieldType: {
    encode(message: FieldType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldType;
    fromJSON(object: any): FieldType;
    toJSON(message: FieldType): unknown;
    fromPartial<I extends Exact<DeepPartial<FieldType>, I>>(object: I): FieldType;
};
export declare const FuncType: {
    encode(message: FuncType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FuncType;
    fromJSON(object: any): FuncType;
    toJSON(message: FuncType): unknown;
    fromPartial<I extends Exact<DeepPartial<FuncType>, I>>(object: I): FuncType;
};
export declare const MapType: {
    encode(message: MapType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapType;
    fromJSON(object: any): MapType;
    toJSON(message: MapType): unknown;
    fromPartial<I extends Exact<DeepPartial<MapType>, I>>(object: I): MapType;
};
export declare const InterfaceType: {
    encode(message: InterfaceType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceType;
    fromJSON(object: any): InterfaceType;
    toJSON(message: InterfaceType): unknown;
    fromPartial<I extends Exact<DeepPartial<InterfaceType>, I>>(object: I): InterfaceType;
};
export declare const TypeType: {
    encode(_: TypeType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TypeType;
    fromJSON(_: any): TypeType;
    toJSON(_: TypeType): unknown;
    fromPartial<I extends Exact<DeepPartial<TypeType>, I>>(_: I): TypeType;
};
export declare const DeclaredType: {
    encode(message: DeclaredType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeclaredType;
    fromJSON(object: any): DeclaredType;
    toJSON(message: DeclaredType): unknown;
    fromPartial<I extends Exact<DeepPartial<DeclaredType>, I>>(object: I): DeclaredType;
};
export declare const PackageType: {
    encode(_: PackageType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PackageType;
    fromJSON(_: any): PackageType;
    toJSON(_: PackageType): unknown;
    fromPartial<I extends Exact<DeepPartial<PackageType>, I>>(_: I): PackageType;
};
export declare const ChanType: {
    encode(message: ChanType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChanType;
    fromJSON(object: any): ChanType;
    toJSON(message: ChanType): unknown;
    fromPartial<I extends Exact<DeepPartial<ChanType>, I>>(object: I): ChanType;
};
export declare const blockType: {
    encode(_: blockType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): blockType;
    fromJSON(_: any): blockType;
    toJSON(_: blockType): unknown;
    fromPartial<I extends Exact<DeepPartial<blockType>, I>>(_: I): blockType;
};
export declare const tupleType: {
    encode(message: tupleType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): tupleType;
    fromJSON(object: any): tupleType;
    toJSON(message: tupleType): unknown;
    fromPartial<I extends Exact<DeepPartial<tupleType>, I>>(object: I): tupleType;
};
export declare const RefType: {
    encode(message: RefType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RefType;
    fromJSON(object: any): RefType;
    toJSON(message: RefType): unknown;
    fromPartial<I extends Exact<DeepPartial<RefType>, I>>(object: I): RefType;
};
