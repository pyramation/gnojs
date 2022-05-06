import * as _32 from "../github.com/gnolang/gno/pkgs/std/std";
export declare const std: {
    BaseAccount: {
        encode(message: _32.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.BaseAccount;
        fromJSON(object: any): _32.BaseAccount;
        toJSON(message: _32.BaseAccount): unknown;
        fromPartial<I extends {
            Address?: string;
            Coins?: string;
            PubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            AccountNumber?: string | number | import("long");
            Sequence?: string | number | import("long");
        } & {
            Address?: string;
            Coins?: string;
            PubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["PubKey"], keyof import("../google/protobuf/any").Any>, never>;
            AccountNumber?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I["AccountNumber"], keyof import("long")>, never>);
            Sequence?: string | number | (import("long") & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | import("long")) => import("long");
                and: (other: string | number | import("long")) => import("long");
                compare: (other: string | number | import("long")) => number;
                comp: (other: string | number | import("long")) => number;
                divide: (divisor: string | number | import("long")) => import("long");
                div: (divisor: string | number | import("long")) => import("long");
                equals: (other: string | number | import("long")) => boolean;
                eq: (other: string | number | import("long")) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | import("long")) => boolean;
                gt: (other: string | number | import("long")) => boolean;
                greaterThanOrEqual: (other: string | number | import("long")) => boolean;
                gte: (other: string | number | import("long")) => boolean;
                ge: (other: string | number | import("long")) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | import("long")) => boolean;
                lt: (other: string | number | import("long")) => boolean;
                lessThanOrEqual: (other: string | number | import("long")) => boolean;
                lte: (other: string | number | import("long")) => boolean;
                le: (other: string | number | import("long")) => boolean;
                modulo: (other: string | number | import("long")) => import("long");
                mod: (other: string | number | import("long")) => import("long");
                rem: (other: string | number | import("long")) => import("long");
                multiply: (multiplier: string | number | import("long")) => import("long");
                mul: (multiplier: string | number | import("long")) => import("long");
                negate: () => import("long");
                neg: () => import("long");
                not: () => import("long");
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | import("long")) => boolean;
                neq: (other: string | number | import("long")) => boolean;
                ne: (other: string | number | import("long")) => boolean;
                or: (other: string | number | import("long")) => import("long");
                shiftLeft: (numBits: number | import("long")) => import("long");
                shl: (numBits: number | import("long")) => import("long");
                shiftRight: (numBits: number | import("long")) => import("long");
                shr: (numBits: number | import("long")) => import("long");
                shiftRightUnsigned: (numBits: number | import("long")) => import("long");
                shru: (numBits: number | import("long")) => import("long");
                shr_u: (numBits: number | import("long")) => import("long");
                rotateLeft: (numBits: number | import("long")) => import("long");
                rotl: (numBits: number | import("long")) => import("long");
                rotateRight: (numBits: number | import("long")) => import("long");
                rotr: (numBits: number | import("long")) => import("long");
                subtract: (subtrahend: string | number | import("long")) => import("long");
                sub: (subtrahend: string | number | import("long")) => import("long");
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => import("long");
                toString: (radix?: number) => string;
                toUnsigned: () => import("long");
                xor: (other: string | number | import("long")) => import("long");
            } & Record<Exclude<keyof I["Sequence"], keyof import("long")>, never>);
        } & Record<Exclude<keyof I, keyof _32.BaseAccount>, never>>(object: I): _32.BaseAccount;
    };
    MemFile: {
        encode(message: _32.MemFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MemFile;
        fromJSON(object: any): _32.MemFile;
        toJSON(message: _32.MemFile): unknown;
        fromPartial<I_1 extends {
            Name?: string;
            Body?: string;
        } & {
            Name?: string;
            Body?: string;
        } & Record<Exclude<keyof I_1, keyof _32.MemFile>, never>>(object: I_1): _32.MemFile;
    };
    MemPackage: {
        encode(message: _32.MemPackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MemPackage;
        fromJSON(object: any): _32.MemPackage;
        toJSON(message: _32.MemPackage): unknown;
        fromPartial<I_2 extends {
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
            } & Record<Exclude<keyof I_2["Files"][number], keyof _32.MemFile>, never>)[] & Record<Exclude<keyof I_2["Files"], keyof {
                Name?: string;
                Body?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I_2, keyof _32.MemPackage>, never>>(object: I_2): _32.MemPackage;
    };
    InternalError: {
        encode(_: _32.InternalError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InternalError;
        fromJSON(_: any): _32.InternalError;
        toJSON(_: _32.InternalError): unknown;
        fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _32.InternalError;
    };
    TxDecodeError: {
        encode(_: _32.TxDecodeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.TxDecodeError;
        fromJSON(_: any): _32.TxDecodeError;
        toJSON(_: _32.TxDecodeError): unknown;
        fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _32.TxDecodeError;
    };
    InvalidSequenceError: {
        encode(_: _32.InvalidSequenceError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InvalidSequenceError;
        fromJSON(_: any): _32.InvalidSequenceError;
        toJSON(_: _32.InvalidSequenceError): unknown;
        fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _32.InvalidSequenceError;
    };
    UnauthorizedError: {
        encode(_: _32.UnauthorizedError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.UnauthorizedError;
        fromJSON(_: any): _32.UnauthorizedError;
        toJSON(_: _32.UnauthorizedError): unknown;
        fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _32.UnauthorizedError;
    };
    InsufficientFundsError: {
        encode(_: _32.InsufficientFundsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InsufficientFundsError;
        fromJSON(_: any): _32.InsufficientFundsError;
        toJSON(_: _32.InsufficientFundsError): unknown;
        fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _32.InsufficientFundsError;
    };
    UnknownRequestError: {
        encode(_: _32.UnknownRequestError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.UnknownRequestError;
        fromJSON(_: any): _32.UnknownRequestError;
        toJSON(_: _32.UnknownRequestError): unknown;
        fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _32.UnknownRequestError;
    };
    InvalidAddressError: {
        encode(_: _32.InvalidAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InvalidAddressError;
        fromJSON(_: any): _32.InvalidAddressError;
        toJSON(_: _32.InvalidAddressError): unknown;
        fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _32.InvalidAddressError;
    };
    UnknownAddressError: {
        encode(_: _32.UnknownAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.UnknownAddressError;
        fromJSON(_: any): _32.UnknownAddressError;
        toJSON(_: _32.UnknownAddressError): unknown;
        fromPartial<I_10 extends {} & {} & Record<Exclude<keyof I_10, never>, never>>(_: I_10): _32.UnknownAddressError;
    };
    InvalidPubKeyError: {
        encode(_: _32.InvalidPubKeyError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InvalidPubKeyError;
        fromJSON(_: any): _32.InvalidPubKeyError;
        toJSON(_: _32.InvalidPubKeyError): unknown;
        fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _32.InvalidPubKeyError;
    };
    InsufficientCoinsError: {
        encode(_: _32.InsufficientCoinsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InsufficientCoinsError;
        fromJSON(_: any): _32.InsufficientCoinsError;
        toJSON(_: _32.InsufficientCoinsError): unknown;
        fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _32.InsufficientCoinsError;
    };
    OutOfGasError: {
        encode(_: _32.OutOfGasError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.OutOfGasError;
        fromJSON(_: any): _32.OutOfGasError;
        toJSON(_: _32.OutOfGasError): unknown;
        fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _32.OutOfGasError;
    };
    MemoTooLargeError: {
        encode(_: _32.MemoTooLargeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MemoTooLargeError;
        fromJSON(_: any): _32.MemoTooLargeError;
        toJSON(_: _32.MemoTooLargeError): unknown;
        fromPartial<I_14 extends {} & {} & Record<Exclude<keyof I_14, never>, never>>(_: I_14): _32.MemoTooLargeError;
    };
    InsufficientFeeError: {
        encode(_: _32.InsufficientFeeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InsufficientFeeError;
        fromJSON(_: any): _32.InsufficientFeeError;
        toJSON(_: _32.InsufficientFeeError): unknown;
        fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _32.InsufficientFeeError;
    };
    TooManySignaturesError: {
        encode(_: _32.TooManySignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.TooManySignaturesError;
        fromJSON(_: any): _32.TooManySignaturesError;
        toJSON(_: _32.TooManySignaturesError): unknown;
        fromPartial<I_16 extends {} & {} & Record<Exclude<keyof I_16, never>, never>>(_: I_16): _32.TooManySignaturesError;
    };
    NoSignaturesError: {
        encode(_: _32.NoSignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.NoSignaturesError;
        fromJSON(_: any): _32.NoSignaturesError;
        toJSON(_: _32.NoSignaturesError): unknown;
        fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _32.NoSignaturesError;
    };
    GasOverflowError: {
        encode(_: _32.GasOverflowError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GasOverflowError;
        fromJSON(_: any): _32.GasOverflowError;
        toJSON(_: _32.GasOverflowError): unknown;
        fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _32.GasOverflowError;
    };
};
