import { MemPackage } from "../../std/std";
import * as _m0 from "protobufjs/minimal";
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
export interface InvalidPkgPathError {
}
export interface InvalidStmtError {
}
export interface InvalidExprError {
}
export declare const m_call: {
    encode(message: m_call, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): m_call;
    fromJSON(object: any): m_call;
    toJSON(message: m_call): unknown;
    fromPartial<I extends Exact<DeepPartial<m_call>, I>>(object: I): m_call;
};
export declare const m_addpkg: {
    encode(message: m_addpkg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): m_addpkg;
    fromJSON(object: any): m_addpkg;
    toJSON(message: m_addpkg): unknown;
    fromPartial<I extends Exact<DeepPartial<m_addpkg>, I>>(object: I): m_addpkg;
};
export declare const InvalidPkgPathError: {
    encode(_: InvalidPkgPathError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidPkgPathError;
    fromJSON(_: any): InvalidPkgPathError;
    toJSON(_: InvalidPkgPathError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidPkgPathError>, I>>(_: I): InvalidPkgPathError;
};
export declare const InvalidStmtError: {
    encode(_: InvalidStmtError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidStmtError;
    fromJSON(_: any): InvalidStmtError;
    toJSON(_: InvalidStmtError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidStmtError>, I>>(_: I): InvalidStmtError;
};
export declare const InvalidExprError: {
    encode(_: InvalidExprError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvalidExprError;
    fromJSON(_: any): InvalidExprError;
    toJSON(_: InvalidExprError): unknown;
    fromPartial<I extends Exact<DeepPartial<InvalidExprError>, I>>(_: I): InvalidExprError;
};
