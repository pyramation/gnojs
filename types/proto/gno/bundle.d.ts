import * as _0 from "../github.com/gnolang/gno/gno";
export declare const gno: {
    TypedValue: {
        encode(message: _0.TypedValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TypedValue;
        fromJSON(object: any): _0.TypedValue;
        toJSON(message: _0.TypedValue): unknown;
        fromPartial<I extends Exact<DeepPartial<_0.TypedValue>, I>>(object: I): _0.TypedValue;
    };
    StringValue: {
        encode(message: _0.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StringValue;
        fromJSON(object: any): _0.StringValue;
        toJSON(message: _0.StringValue): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_0.StringValue>, I_1>>(object: I_1): _0.StringValue;
    };
    BigintValue: {
        encode(message: _0.BigintValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BigintValue;
        fromJSON(object: any): _0.BigintValue;
        toJSON(message: _0.BigintValue): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_0.BigintValue>, I_2>>(object: I_2): _0.BigintValue;
    };
    PointerValue: {
        encode(message: _0.PointerValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PointerValue;
        fromJSON(object: any): _0.PointerValue;
        toJSON(message: _0.PointerValue): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_0.PointerValue>, I_3>>(object: I_3): _0.PointerValue;
    };
    ArrayValue: {
        encode(message: _0.ArrayValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ArrayValue;
        fromJSON(object: any): _0.ArrayValue;
        toJSON(message: _0.ArrayValue): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_0.ArrayValue>, I_4>>(object: I_4): _0.ArrayValue;
    };
    SliceValue: {
        encode(message: _0.SliceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SliceValue;
        fromJSON(object: any): _0.SliceValue;
        toJSON(message: _0.SliceValue): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_0.SliceValue>, I_5>>(object: I_5): _0.SliceValue;
    };
    StructValue: {
        encode(message: _0.StructValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StructValue;
        fromJSON(object: any): _0.StructValue;
        toJSON(message: _0.StructValue): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_0.StructValue>, I_6>>(object: I_6): _0.StructValue;
    };
    FuncValue: {
        encode(message: _0.FuncValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FuncValue;
        fromJSON(object: any): _0.FuncValue;
        toJSON(message: _0.FuncValue): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_0.FuncValue>, I_7>>(object: I_7): _0.FuncValue;
    };
    MapValue: {
        encode(message: _0.MapValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MapValue;
        fromJSON(object: any): _0.MapValue;
        toJSON(message: _0.MapValue): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_0.MapValue>, I_8>>(object: I_8): _0.MapValue;
    };
    MapList: {
        encode(message: _0.MapList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MapList;
        fromJSON(object: any): _0.MapList;
        toJSON(message: _0.MapList): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_0.MapList>, I_9>>(object: I_9): _0.MapList;
    };
    MapListItem: {
        encode(message: _0.MapListItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MapListItem;
        fromJSON(object: any): _0.MapListItem;
        toJSON(message: _0.MapListItem): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_0.MapListItem>, I_10>>(object: I_10): _0.MapListItem;
    };
    BoundMethodValue: {
        encode(message: _0.BoundMethodValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BoundMethodValue;
        fromJSON(object: any): _0.BoundMethodValue;
        toJSON(message: _0.BoundMethodValue): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_0.BoundMethodValue>, I_11>>(object: I_11): _0.BoundMethodValue;
    };
    TypeValue: {
        encode(message: _0.TypeValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TypeValue;
        fromJSON(object: any): _0.TypeValue;
        toJSON(message: _0.TypeValue): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_0.TypeValue>, I_12>>(object: I_12): _0.TypeValue;
    };
    PackageValue: {
        encode(message: _0.PackageValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PackageValue;
        fromJSON(object: any): _0.PackageValue;
        toJSON(message: _0.PackageValue): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_0.PackageValue>, I_13>>(object: I_13): _0.PackageValue;
    };
    Block: {
        encode(message: _0.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Block;
        fromJSON(object: any): _0.Block;
        toJSON(message: _0.Block): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_0.Block>, I_14>>(object: I_14): _0.Block;
    };
    RefValue: {
        encode(message: _0.RefValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RefValue;
        fromJSON(object: any): _0.RefValue;
        toJSON(message: _0.RefValue): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_0.RefValue>, I_15>>(object: I_15): _0.RefValue;
    };
    ObjectID: {
        encode(message: _0.ObjectID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ObjectID;
        fromJSON(object: any): _0.ObjectID;
        toJSON(message: _0.ObjectID): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_0.ObjectID>, I_16>>(object: I_16): _0.ObjectID;
    };
    ObjectInfo: {
        encode(message: _0.ObjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ObjectInfo;
        fromJSON(object: any): _0.ObjectInfo;
        toJSON(message: _0.ObjectInfo): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_0.ObjectInfo>, I_17>>(object: I_17): _0.ObjectInfo;
    };
    ValueHash: {
        encode(message: _0.ValueHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ValueHash;
        fromJSON(object: any): _0.ValueHash;
        toJSON(message: _0.ValueHash): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_0.ValueHash>, I_18>>(object: I_18): _0.ValueHash;
    };
    Hashlet: {
        encode(message: _0.Hashlet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Hashlet;
        fromJSON(object: any): _0.Hashlet;
        toJSON(message: _0.Hashlet): unknown;
        fromPartial<I_19 extends Exact<DeepPartial<_0.Hashlet>, I_19>>(object: I_19): _0.Hashlet;
    };
    ValuePath: {
        encode(message: _0.ValuePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ValuePath;
        fromJSON(object: any): _0.ValuePath;
        toJSON(message: _0.ValuePath): unknown;
        fromPartial<I_20 extends Exact<DeepPartial<_0.ValuePath>, I_20>>(object: I_20): _0.ValuePath;
    };
    Location: {
        encode(message: _0.Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Location;
        fromJSON(object: any): _0.Location;
        toJSON(message: _0.Location): unknown;
        fromPartial<I_21 extends Exact<DeepPartial<_0.Location>, I_21>>(object: I_21): _0.Location;
    };
    Attributes: {
        encode(message: _0.Attributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Attributes;
        fromJSON(object: any): _0.Attributes;
        toJSON(message: _0.Attributes): unknown;
        fromPartial<I_22 extends Exact<DeepPartial<_0.Attributes>, I_22>>(object: I_22): _0.Attributes;
    };
    NameExpr: {
        encode(message: _0.NameExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.NameExpr;
        fromJSON(object: any): _0.NameExpr;
        toJSON(message: _0.NameExpr): unknown;
        fromPartial<I_23 extends Exact<DeepPartial<_0.NameExpr>, I_23>>(object: I_23): _0.NameExpr;
    };
    BasicLitExpr: {
        encode(message: _0.BasicLitExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BasicLitExpr;
        fromJSON(object: any): _0.BasicLitExpr;
        toJSON(message: _0.BasicLitExpr): unknown;
        fromPartial<I_24 extends Exact<DeepPartial<_0.BasicLitExpr>, I_24>>(object: I_24): _0.BasicLitExpr;
    };
    BinaryExpr: {
        encode(message: _0.BinaryExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BinaryExpr;
        fromJSON(object: any): _0.BinaryExpr;
        toJSON(message: _0.BinaryExpr): unknown;
        fromPartial<I_25 extends Exact<DeepPartial<_0.BinaryExpr>, I_25>>(object: I_25): _0.BinaryExpr;
    };
    CallExpr: {
        encode(message: _0.CallExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CallExpr;
        fromJSON(object: any): _0.CallExpr;
        toJSON(message: _0.CallExpr): unknown;
        fromPartial<I_26 extends Exact<DeepPartial<_0.CallExpr>, I_26>>(object: I_26): _0.CallExpr;
    };
    IndexExpr: {
        encode(message: _0.IndexExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.IndexExpr;
        fromJSON(object: any): _0.IndexExpr;
        toJSON(message: _0.IndexExpr): unknown;
        fromPartial<I_27 extends Exact<DeepPartial<_0.IndexExpr>, I_27>>(object: I_27): _0.IndexExpr;
    };
    SelectorExpr: {
        encode(message: _0.SelectorExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SelectorExpr;
        fromJSON(object: any): _0.SelectorExpr;
        toJSON(message: _0.SelectorExpr): unknown;
        fromPartial<I_28 extends Exact<DeepPartial<_0.SelectorExpr>, I_28>>(object: I_28): _0.SelectorExpr;
    };
    SliceExpr: {
        encode(message: _0.SliceExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SliceExpr;
        fromJSON(object: any): _0.SliceExpr;
        toJSON(message: _0.SliceExpr): unknown;
        fromPartial<I_29 extends Exact<DeepPartial<_0.SliceExpr>, I_29>>(object: I_29): _0.SliceExpr;
    };
    StarExpr: {
        encode(message: _0.StarExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StarExpr;
        fromJSON(object: any): _0.StarExpr;
        toJSON(message: _0.StarExpr): unknown;
        fromPartial<I_30 extends Exact<DeepPartial<_0.StarExpr>, I_30>>(object: I_30): _0.StarExpr;
    };
    RefExpr: {
        encode(message: _0.RefExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RefExpr;
        fromJSON(object: any): _0.RefExpr;
        toJSON(message: _0.RefExpr): unknown;
        fromPartial<I_31 extends Exact<DeepPartial<_0.RefExpr>, I_31>>(object: I_31): _0.RefExpr;
    };
    TypeAssertExpr: {
        encode(message: _0.TypeAssertExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TypeAssertExpr;
        fromJSON(object: any): _0.TypeAssertExpr;
        toJSON(message: _0.TypeAssertExpr): unknown;
        fromPartial<I_32 extends Exact<DeepPartial<_0.TypeAssertExpr>, I_32>>(object: I_32): _0.TypeAssertExpr;
    };
    UnaryExpr: {
        encode(message: _0.UnaryExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.UnaryExpr;
        fromJSON(object: any): _0.UnaryExpr;
        toJSON(message: _0.UnaryExpr): unknown;
        fromPartial<I_33 extends Exact<DeepPartial<_0.UnaryExpr>, I_33>>(object: I_33): _0.UnaryExpr;
    };
    CompositeLitExpr: {
        encode(message: _0.CompositeLitExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.CompositeLitExpr;
        fromJSON(object: any): _0.CompositeLitExpr;
        toJSON(message: _0.CompositeLitExpr): unknown;
        fromPartial<I_34 extends Exact<DeepPartial<_0.CompositeLitExpr>, I_34>>(object: I_34): _0.CompositeLitExpr;
    };
    KeyValueExpr: {
        encode(message: _0.KeyValueExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.KeyValueExpr;
        fromJSON(object: any): _0.KeyValueExpr;
        toJSON(message: _0.KeyValueExpr): unknown;
        fromPartial<I_35 extends Exact<DeepPartial<_0.KeyValueExpr>, I_35>>(object: I_35): _0.KeyValueExpr;
    };
    FuncLitExpr: {
        encode(message: _0.FuncLitExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FuncLitExpr;
        fromJSON(object: any): _0.FuncLitExpr;
        toJSON(message: _0.FuncLitExpr): unknown;
        fromPartial<I_36 extends Exact<DeepPartial<_0.FuncLitExpr>, I_36>>(object: I_36): _0.FuncLitExpr;
    };
    ConstExpr: {
        encode(message: _0.ConstExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ConstExpr;
        fromJSON(object: any): _0.ConstExpr;
        toJSON(message: _0.ConstExpr): unknown;
        fromPartial<I_37 extends Exact<DeepPartial<_0.ConstExpr>, I_37>>(object: I_37): _0.ConstExpr;
    };
    FieldTypeExpr: {
        encode(message: _0.FieldTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FieldTypeExpr;
        fromJSON(object: any): _0.FieldTypeExpr;
        toJSON(message: _0.FieldTypeExpr): unknown;
        fromPartial<I_38 extends Exact<DeepPartial<_0.FieldTypeExpr>, I_38>>(object: I_38): _0.FieldTypeExpr;
    };
    ArrayTypeExpr: {
        encode(message: _0.ArrayTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ArrayTypeExpr;
        fromJSON(object: any): _0.ArrayTypeExpr;
        toJSON(message: _0.ArrayTypeExpr): unknown;
        fromPartial<I_39 extends Exact<DeepPartial<_0.ArrayTypeExpr>, I_39>>(object: I_39): _0.ArrayTypeExpr;
    };
    SliceTypeExpr: {
        encode(message: _0.SliceTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SliceTypeExpr;
        fromJSON(object: any): _0.SliceTypeExpr;
        toJSON(message: _0.SliceTypeExpr): unknown;
        fromPartial<I_40 extends Exact<DeepPartial<_0.SliceTypeExpr>, I_40>>(object: I_40): _0.SliceTypeExpr;
    };
    InterfaceTypeExpr: {
        encode(message: _0.InterfaceTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InterfaceTypeExpr;
        fromJSON(object: any): _0.InterfaceTypeExpr;
        toJSON(message: _0.InterfaceTypeExpr): unknown;
        fromPartial<I_41 extends Exact<DeepPartial<_0.InterfaceTypeExpr>, I_41>>(object: I_41): _0.InterfaceTypeExpr;
    };
    ChanTypeExpr: {
        encode(message: _0.ChanTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ChanTypeExpr;
        fromJSON(object: any): _0.ChanTypeExpr;
        toJSON(message: _0.ChanTypeExpr): unknown;
        fromPartial<I_42 extends Exact<DeepPartial<_0.ChanTypeExpr>, I_42>>(object: I_42): _0.ChanTypeExpr;
    };
    FuncTypeExpr: {
        encode(message: _0.FuncTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FuncTypeExpr;
        fromJSON(object: any): _0.FuncTypeExpr;
        toJSON(message: _0.FuncTypeExpr): unknown;
        fromPartial<I_43 extends Exact<DeepPartial<_0.FuncTypeExpr>, I_43>>(object: I_43): _0.FuncTypeExpr;
    };
    MapTypeExpr: {
        encode(message: _0.MapTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MapTypeExpr;
        fromJSON(object: any): _0.MapTypeExpr;
        toJSON(message: _0.MapTypeExpr): unknown;
        fromPartial<I_44 extends Exact<DeepPartial<_0.MapTypeExpr>, I_44>>(object: I_44): _0.MapTypeExpr;
    };
    StructTypeExpr: {
        encode(message: _0.StructTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StructTypeExpr;
        fromJSON(object: any): _0.StructTypeExpr;
        toJSON(message: _0.StructTypeExpr): unknown;
        fromPartial<I_45 extends Exact<DeepPartial<_0.StructTypeExpr>, I_45>>(object: I_45): _0.StructTypeExpr;
    };
    constTypeExpr: {
        encode(message: _0.constTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.constTypeExpr;
        fromJSON(object: any): _0.constTypeExpr;
        toJSON(message: _0.constTypeExpr): unknown;
        fromPartial<I_46 extends Exact<DeepPartial<_0.constTypeExpr>, I_46>>(object: I_46): _0.constTypeExpr;
    };
    MaybeNativeTypeExpr: {
        encode(message: _0.MaybeNativeTypeExpr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MaybeNativeTypeExpr;
        fromJSON(object: any): _0.MaybeNativeTypeExpr;
        toJSON(message: _0.MaybeNativeTypeExpr): unknown;
        fromPartial<I_47 extends Exact<DeepPartial<_0.MaybeNativeTypeExpr>, I_47>>(object: I_47): _0.MaybeNativeTypeExpr;
    };
    AssignStmt: {
        encode(message: _0.AssignStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.AssignStmt;
        fromJSON(object: any): _0.AssignStmt;
        toJSON(message: _0.AssignStmt): unknown;
        fromPartial<I_48 extends Exact<DeepPartial<_0.AssignStmt>, I_48>>(object: I_48): _0.AssignStmt;
    };
    BlockStmt: {
        encode(message: _0.BlockStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BlockStmt;
        fromJSON(object: any): _0.BlockStmt;
        toJSON(message: _0.BlockStmt): unknown;
        fromPartial<I_49 extends Exact<DeepPartial<_0.BlockStmt>, I_49>>(object: I_49): _0.BlockStmt;
    };
    BranchStmt: {
        encode(message: _0.BranchStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BranchStmt;
        fromJSON(object: any): _0.BranchStmt;
        toJSON(message: _0.BranchStmt): unknown;
        fromPartial<I_50 extends Exact<DeepPartial<_0.BranchStmt>, I_50>>(object: I_50): _0.BranchStmt;
    };
    DeclStmt: {
        encode(message: _0.DeclStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.DeclStmt;
        fromJSON(object: any): _0.DeclStmt;
        toJSON(message: _0.DeclStmt): unknown;
        fromPartial<I_51 extends Exact<DeepPartial<_0.DeclStmt>, I_51>>(object: I_51): _0.DeclStmt;
    };
    DeferStmt: {
        encode(message: _0.DeferStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.DeferStmt;
        fromJSON(object: any): _0.DeferStmt;
        toJSON(message: _0.DeferStmt): unknown;
        fromPartial<I_52 extends Exact<DeepPartial<_0.DeferStmt>, I_52>>(object: I_52): _0.DeferStmt;
    };
    ExprStmt: {
        encode(message: _0.ExprStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ExprStmt;
        fromJSON(object: any): _0.ExprStmt;
        toJSON(message: _0.ExprStmt): unknown;
        fromPartial<I_53 extends Exact<DeepPartial<_0.ExprStmt>, I_53>>(object: I_53): _0.ExprStmt;
    };
    ForStmt: {
        encode(message: _0.ForStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ForStmt;
        fromJSON(object: any): _0.ForStmt;
        toJSON(message: _0.ForStmt): unknown;
        fromPartial<I_54 extends Exact<DeepPartial<_0.ForStmt>, I_54>>(object: I_54): _0.ForStmt;
    };
    GoStmt: {
        encode(message: _0.GoStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.GoStmt;
        fromJSON(object: any): _0.GoStmt;
        toJSON(message: _0.GoStmt): unknown;
        fromPartial<I_55 extends Exact<DeepPartial<_0.GoStmt>, I_55>>(object: I_55): _0.GoStmt;
    };
    IfStmt: {
        encode(message: _0.IfStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.IfStmt;
        fromJSON(object: any): _0.IfStmt;
        toJSON(message: _0.IfStmt): unknown;
        fromPartial<I_56 extends Exact<DeepPartial<_0.IfStmt>, I_56>>(object: I_56): _0.IfStmt;
    };
    IfCaseStmt: {
        encode(message: _0.IfCaseStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.IfCaseStmt;
        fromJSON(object: any): _0.IfCaseStmt;
        toJSON(message: _0.IfCaseStmt): unknown;
        fromPartial<I_57 extends Exact<DeepPartial<_0.IfCaseStmt>, I_57>>(object: I_57): _0.IfCaseStmt;
    };
    IncDecStmt: {
        encode(message: _0.IncDecStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.IncDecStmt;
        fromJSON(object: any): _0.IncDecStmt;
        toJSON(message: _0.IncDecStmt): unknown;
        fromPartial<I_58 extends Exact<DeepPartial<_0.IncDecStmt>, I_58>>(object: I_58): _0.IncDecStmt;
    };
    RangeStmt: {
        encode(message: _0.RangeStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RangeStmt;
        fromJSON(object: any): _0.RangeStmt;
        toJSON(message: _0.RangeStmt): unknown;
        fromPartial<I_59 extends Exact<DeepPartial<_0.RangeStmt>, I_59>>(object: I_59): _0.RangeStmt;
    };
    ReturnStmt: {
        encode(message: _0.ReturnStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ReturnStmt;
        fromJSON(object: any): _0.ReturnStmt;
        toJSON(message: _0.ReturnStmt): unknown;
        fromPartial<I_60 extends Exact<DeepPartial<_0.ReturnStmt>, I_60>>(object: I_60): _0.ReturnStmt;
    };
    PanicStmt: {
        encode(message: _0.PanicStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PanicStmt;
        fromJSON(object: any): _0.PanicStmt;
        toJSON(message: _0.PanicStmt): unknown;
        fromPartial<I_61 extends Exact<DeepPartial<_0.PanicStmt>, I_61>>(object: I_61): _0.PanicStmt;
    };
    SelectStmt: {
        encode(message: _0.SelectStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SelectStmt;
        fromJSON(object: any): _0.SelectStmt;
        toJSON(message: _0.SelectStmt): unknown;
        fromPartial<I_62 extends Exact<DeepPartial<_0.SelectStmt>, I_62>>(object: I_62): _0.SelectStmt;
    };
    SelectCaseStmt: {
        encode(message: _0.SelectCaseStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SelectCaseStmt;
        fromJSON(object: any): _0.SelectCaseStmt;
        toJSON(message: _0.SelectCaseStmt): unknown;
        fromPartial<I_63 extends Exact<DeepPartial<_0.SelectCaseStmt>, I_63>>(object: I_63): _0.SelectCaseStmt;
    };
    SendStmt: {
        encode(message: _0.SendStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SendStmt;
        fromJSON(object: any): _0.SendStmt;
        toJSON(message: _0.SendStmt): unknown;
        fromPartial<I_64 extends Exact<DeepPartial<_0.SendStmt>, I_64>>(object: I_64): _0.SendStmt;
    };
    SwitchStmt: {
        encode(message: _0.SwitchStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SwitchStmt;
        fromJSON(object: any): _0.SwitchStmt;
        toJSON(message: _0.SwitchStmt): unknown;
        fromPartial<I_65 extends Exact<DeepPartial<_0.SwitchStmt>, I_65>>(object: I_65): _0.SwitchStmt;
    };
    SwitchClauseStmt: {
        encode(message: _0.SwitchClauseStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SwitchClauseStmt;
        fromJSON(object: any): _0.SwitchClauseStmt;
        toJSON(message: _0.SwitchClauseStmt): unknown;
        fromPartial<I_66 extends Exact<DeepPartial<_0.SwitchClauseStmt>, I_66>>(object: I_66): _0.SwitchClauseStmt;
    };
    EmptyStmt: {
        encode(message: _0.EmptyStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EmptyStmt;
        fromJSON(object: any): _0.EmptyStmt;
        toJSON(message: _0.EmptyStmt): unknown;
        fromPartial<I_67 extends Exact<DeepPartial<_0.EmptyStmt>, I_67>>(object: I_67): _0.EmptyStmt;
    };
    bodyStmt: {
        encode(message: _0.bodyStmt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.bodyStmt;
        fromJSON(object: any): _0.bodyStmt;
        toJSON(message: _0.bodyStmt): unknown;
        fromPartial<I_68 extends Exact<DeepPartial<_0.bodyStmt>, I_68>>(object: I_68): _0.bodyStmt;
    };
    FuncDecl: {
        encode(message: _0.FuncDecl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FuncDecl;
        fromJSON(object: any): _0.FuncDecl;
        toJSON(message: _0.FuncDecl): unknown;
        fromPartial<I_69 extends Exact<DeepPartial<_0.FuncDecl>, I_69>>(object: I_69): _0.FuncDecl;
    };
    ImportDecl: {
        encode(message: _0.ImportDecl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ImportDecl;
        fromJSON(object: any): _0.ImportDecl;
        toJSON(message: _0.ImportDecl): unknown;
        fromPartial<I_70 extends Exact<DeepPartial<_0.ImportDecl>, I_70>>(object: I_70): _0.ImportDecl;
    };
    ValueDecl: {
        encode(message: _0.ValueDecl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ValueDecl;
        fromJSON(object: any): _0.ValueDecl;
        toJSON(message: _0.ValueDecl): unknown;
        fromPartial<I_71 extends Exact<DeepPartial<_0.ValueDecl>, I_71>>(object: I_71): _0.ValueDecl;
    };
    TypeDecl: {
        encode(message: _0.TypeDecl, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TypeDecl;
        fromJSON(object: any): _0.TypeDecl;
        toJSON(message: _0.TypeDecl): unknown;
        fromPartial<I_72 extends Exact<DeepPartial<_0.TypeDecl>, I_72>>(object: I_72): _0.TypeDecl;
    };
    StaticBlock: {
        encode(message: _0.StaticBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StaticBlock;
        fromJSON(object: any): _0.StaticBlock;
        toJSON(message: _0.StaticBlock): unknown;
        fromPartial<I_73 extends Exact<DeepPartial<_0.StaticBlock>, I_73>>(object: I_73): _0.StaticBlock;
    };
    FileSet: {
        encode(message: _0.FileSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FileSet;
        fromJSON(object: any): _0.FileSet;
        toJSON(message: _0.FileSet): unknown;
        fromPartial<I_74 extends Exact<DeepPartial<_0.FileSet>, I_74>>(object: I_74): _0.FileSet;
    };
    FileNode: {
        encode(message: _0.FileNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FileNode;
        fromJSON(object: any): _0.FileNode;
        toJSON(message: _0.FileNode): unknown;
        fromPartial<I_75 extends Exact<DeepPartial<_0.FileNode>, I_75>>(object: I_75): _0.FileNode;
    };
    PackageNode: {
        encode(message: _0.PackageNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PackageNode;
        fromJSON(object: any): _0.PackageNode;
        toJSON(message: _0.PackageNode): unknown;
        fromPartial<I_76 extends Exact<DeepPartial<_0.PackageNode>, I_76>>(object: I_76): _0.PackageNode;
    };
    RefNode: {
        encode(message: _0.RefNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RefNode;
        fromJSON(object: any): _0.RefNode;
        toJSON(message: _0.RefNode): unknown;
        fromPartial<I_77 extends Exact<DeepPartial<_0.RefNode>, I_77>>(object: I_77): _0.RefNode;
    };
    PrimitiveType: {
        encode(message: _0.PrimitiveType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PrimitiveType;
        fromJSON(object: any): _0.PrimitiveType;
        toJSON(message: _0.PrimitiveType): unknown;
        fromPartial<I_78 extends Exact<DeepPartial<_0.PrimitiveType>, I_78>>(object: I_78): _0.PrimitiveType;
    };
    PointerType: {
        encode(message: _0.PointerType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PointerType;
        fromJSON(object: any): _0.PointerType;
        toJSON(message: _0.PointerType): unknown;
        fromPartial<I_79 extends Exact<DeepPartial<_0.PointerType>, I_79>>(object: I_79): _0.PointerType;
    };
    ArrayType: {
        encode(message: _0.ArrayType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ArrayType;
        fromJSON(object: any): _0.ArrayType;
        toJSON(message: _0.ArrayType): unknown;
        fromPartial<I_80 extends Exact<DeepPartial<_0.ArrayType>, I_80>>(object: I_80): _0.ArrayType;
    };
    SliceType: {
        encode(message: _0.SliceType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SliceType;
        fromJSON(object: any): _0.SliceType;
        toJSON(message: _0.SliceType): unknown;
        fromPartial<I_81 extends Exact<DeepPartial<_0.SliceType>, I_81>>(object: I_81): _0.SliceType;
    };
    StructType: {
        encode(message: _0.StructType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StructType;
        fromJSON(object: any): _0.StructType;
        toJSON(message: _0.StructType): unknown;
        fromPartial<I_82 extends Exact<DeepPartial<_0.StructType>, I_82>>(object: I_82): _0.StructType;
    };
    FieldType: {
        encode(message: _0.FieldType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FieldType;
        fromJSON(object: any): _0.FieldType;
        toJSON(message: _0.FieldType): unknown;
        fromPartial<I_83 extends Exact<DeepPartial<_0.FieldType>, I_83>>(object: I_83): _0.FieldType;
    };
    FuncType: {
        encode(message: _0.FuncType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.FuncType;
        fromJSON(object: any): _0.FuncType;
        toJSON(message: _0.FuncType): unknown;
        fromPartial<I_84 extends Exact<DeepPartial<_0.FuncType>, I_84>>(object: I_84): _0.FuncType;
    };
    MapType: {
        encode(message: _0.MapType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MapType;
        fromJSON(object: any): _0.MapType;
        toJSON(message: _0.MapType): unknown;
        fromPartial<I_85 extends Exact<DeepPartial<_0.MapType>, I_85>>(object: I_85): _0.MapType;
    };
    InterfaceType: {
        encode(message: _0.InterfaceType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InterfaceType;
        fromJSON(object: any): _0.InterfaceType;
        toJSON(message: _0.InterfaceType): unknown;
        fromPartial<I_86 extends Exact<DeepPartial<_0.InterfaceType>, I_86>>(object: I_86): _0.InterfaceType;
    };
    TypeType: {
        encode(_: _0.TypeType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TypeType;
        fromJSON(_: any): _0.TypeType;
        toJSON(_: _0.TypeType): unknown;
        fromPartial<I_87 extends Exact<DeepPartial<_0.TypeType>, I_87>>(_: I_87): _0.TypeType;
    };
    DeclaredType: {
        encode(message: _0.DeclaredType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.DeclaredType;
        fromJSON(object: any): _0.DeclaredType;
        toJSON(message: _0.DeclaredType): unknown;
        fromPartial<I_88 extends Exact<DeepPartial<_0.DeclaredType>, I_88>>(object: I_88): _0.DeclaredType;
    };
    PackageType: {
        encode(_: _0.PackageType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PackageType;
        fromJSON(_: any): _0.PackageType;
        toJSON(_: _0.PackageType): unknown;
        fromPartial<I_89 extends Exact<DeepPartial<_0.PackageType>, I_89>>(_: I_89): _0.PackageType;
    };
    ChanType: {
        encode(message: _0.ChanType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ChanType;
        fromJSON(object: any): _0.ChanType;
        toJSON(message: _0.ChanType): unknown;
        fromPartial<I_90 extends Exact<DeepPartial<_0.ChanType>, I_90>>(object: I_90): _0.ChanType;
    };
    blockType: {
        encode(_: _0.blockType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.blockType;
        fromJSON(_: any): _0.blockType;
        toJSON(_: _0.blockType): unknown;
        fromPartial<I_91 extends Exact<DeepPartial<_0.blockType>, I_91>>(_: I_91): _0.blockType;
    };
    tupleType: {
        encode(message: _0.tupleType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.tupleType;
        fromJSON(object: any): _0.tupleType;
        toJSON(message: _0.tupleType): unknown;
        fromPartial<I_92 extends Exact<DeepPartial<_0.tupleType>, I_92>>(object: I_92): _0.tupleType;
    };
    RefType: {
        encode(message: _0.RefType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RefType;
        fromJSON(object: any): _0.RefType;
        toJSON(message: _0.RefType): unknown;
        fromPartial<I_93 extends Exact<DeepPartial<_0.RefType>, I_93>>(object: I_93): _0.RefType;
    };
};
