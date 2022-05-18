import * as _13 from "../github.com/gnolang/gno/pkgs/sdk/vm/vm";
export declare const vm: {
    m_call: {
        encode(message: _13.m_call, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.m_call;
        fromJSON(object: any): _13.m_call;
        toJSON(message: _13.m_call): unknown;
        fromPartial<I extends Exact<DeepPartial<_13.m_call>, I>>(object: I): _13.m_call;
    };
    m_addpkg: {
        encode(message: _13.m_addpkg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.m_addpkg;
        fromJSON(object: any): _13.m_addpkg;
        toJSON(message: _13.m_addpkg): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_13.m_addpkg>, I_1>>(object: I_1): _13.m_addpkg;
    };
    InvalidPkgPathError: {
        encode(_: _13.InvalidPkgPathError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidPkgPathError;
        fromJSON(_: any): _13.InvalidPkgPathError;
        toJSON(_: _13.InvalidPkgPathError): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_13.InvalidPkgPathError>, I_2>>(_: I_2): _13.InvalidPkgPathError;
    };
    InvalidStmtError: {
        encode(_: _13.InvalidStmtError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidStmtError;
        fromJSON(_: any): _13.InvalidStmtError;
        toJSON(_: _13.InvalidStmtError): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_13.InvalidStmtError>, I_3>>(_: I_3): _13.InvalidStmtError;
    };
    InvalidExprError: {
        encode(_: _13.InvalidExprError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.InvalidExprError;
        fromJSON(_: any): _13.InvalidExprError;
        toJSON(_: _13.InvalidExprError): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_13.InvalidExprError>, I_4>>(_: I_4): _13.InvalidExprError;
    };
};
