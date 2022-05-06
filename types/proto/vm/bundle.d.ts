import * as _31 from "../github.com/gnolang/gno/pkgs/sdk/vm/vm";
export declare const vm: {
    mCall: {
        encode(message: _31.mCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.mCall;
        fromJSON(object: any): _31.mCall;
        toJSON(message: _31.mCall): unknown;
        fromPartial<I extends {
            Caller?: string;
            Send?: string;
            PkgPath?: string;
            Func?: string;
            Args?: string[];
        } & {
            Caller?: string;
            Send?: string;
            PkgPath?: string;
            Func?: string;
            Args?: string[] & string[] & Record<Exclude<keyof I["Args"], keyof string[]>, never>;
        } & Record<Exclude<keyof I, keyof _31.mCall>, never>>(object: I): _31.mCall;
    };
    mAddpkg: {
        encode(message: _31.mAddpkg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.mAddpkg;
        fromJSON(object: any): _31.mAddpkg;
        toJSON(message: _31.mAddpkg): unknown;
        fromPartial<I_1 extends {
            Creator?: string;
            Package?: {
                Name?: string;
                Path?: string;
                Files?: {
                    Name?: string;
                    Body?: string;
                }[];
            };
            Deposit?: string;
        } & {
            Creator?: string;
            Package?: {
                Name?: string;
                Path?: string;
                Files?: {
                    Name?: string;
                    Body?: string;
                }[];
            } & {
                Name?: string;
                Path?: string;
                Files?: {
                    Name?: string;
                    Body?: string;
                }[] & ({
                    Name?: string;
                    Body?: string;
                } & {
                    Name?: string;
                    Body?: string;
                } & Record<Exclude<keyof I_1["Package"]["Files"][number], keyof import("../github.com/gnolang/gno/pkgs/std/std").MemFile>, never>)[] & Record<Exclude<keyof I_1["Package"]["Files"], keyof {
                    Name?: string;
                    Body?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["Package"], keyof import("../github.com/gnolang/gno/pkgs/std/std").MemPackage>, never>;
            Deposit?: string;
        } & Record<Exclude<keyof I_1, keyof _31.mAddpkg>, never>>(object: I_1): _31.mAddpkg;
    };
    InvalidPkgPathError: {
        encode(_: _31.InvalidPkgPathError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.InvalidPkgPathError;
        fromJSON(_: any): _31.InvalidPkgPathError;
        toJSON(_: _31.InvalidPkgPathError): unknown;
        fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _31.InvalidPkgPathError;
    };
    InvalidStmtError: {
        encode(_: _31.InvalidStmtError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.InvalidStmtError;
        fromJSON(_: any): _31.InvalidStmtError;
        toJSON(_: _31.InvalidStmtError): unknown;
        fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _31.InvalidStmtError;
    };
    InvalidExprError: {
        encode(_: _31.InvalidExprError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.InvalidExprError;
        fromJSON(_: any): _31.InvalidExprError;
        toJSON(_: _31.InvalidExprError): unknown;
        fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _31.InvalidExprError;
    };
};
