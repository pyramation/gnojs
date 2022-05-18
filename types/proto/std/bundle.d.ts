import * as _14 from "../github.com/gnolang/gno/pkgs/std/std";
export declare const std: {
    BaseAccount: {
        encode(message: _14.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.BaseAccount;
        fromJSON(object: any): _14.BaseAccount;
        toJSON(message: _14.BaseAccount): unknown;
        fromPartial<I extends Exact<DeepPartial<_14.BaseAccount>, I>>(object: I): _14.BaseAccount;
    };
    MemFile: {
        encode(message: _14.MemFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemFile;
        fromJSON(object: any): _14.MemFile;
        toJSON(message: _14.MemFile): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_14.MemFile>, I_1>>(object: I_1): _14.MemFile;
    };
    MemPackage: {
        encode(message: _14.MemPackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemPackage;
        fromJSON(object: any): _14.MemPackage;
        toJSON(message: _14.MemPackage): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_14.MemPackage>, I_2>>(object: I_2): _14.MemPackage;
    };
    InternalError: {
        encode(_: _14.InternalError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InternalError;
        fromJSON(_: any): _14.InternalError;
        toJSON(_: _14.InternalError): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_14.InternalError>, I_3>>(_: I_3): _14.InternalError;
    };
    TxDecodeError: {
        encode(_: _14.TxDecodeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDecodeError;
        fromJSON(_: any): _14.TxDecodeError;
        toJSON(_: _14.TxDecodeError): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_14.TxDecodeError>, I_4>>(_: I_4): _14.TxDecodeError;
    };
    InvalidSequenceError: {
        encode(_: _14.InvalidSequenceError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidSequenceError;
        fromJSON(_: any): _14.InvalidSequenceError;
        toJSON(_: _14.InvalidSequenceError): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_14.InvalidSequenceError>, I_5>>(_: I_5): _14.InvalidSequenceError;
    };
    UnauthorizedError: {
        encode(_: _14.UnauthorizedError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnauthorizedError;
        fromJSON(_: any): _14.UnauthorizedError;
        toJSON(_: _14.UnauthorizedError): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_14.UnauthorizedError>, I_6>>(_: I_6): _14.UnauthorizedError;
    };
    InsufficientFundsError: {
        encode(_: _14.InsufficientFundsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientFundsError;
        fromJSON(_: any): _14.InsufficientFundsError;
        toJSON(_: _14.InsufficientFundsError): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_14.InsufficientFundsError>, I_7>>(_: I_7): _14.InsufficientFundsError;
    };
    UnknownRequestError: {
        encode(_: _14.UnknownRequestError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnknownRequestError;
        fromJSON(_: any): _14.UnknownRequestError;
        toJSON(_: _14.UnknownRequestError): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_14.UnknownRequestError>, I_8>>(_: I_8): _14.UnknownRequestError;
    };
    InvalidAddressError: {
        encode(_: _14.InvalidAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidAddressError;
        fromJSON(_: any): _14.InvalidAddressError;
        toJSON(_: _14.InvalidAddressError): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_14.InvalidAddressError>, I_9>>(_: I_9): _14.InvalidAddressError;
    };
    UnknownAddressError: {
        encode(_: _14.UnknownAddressError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.UnknownAddressError;
        fromJSON(_: any): _14.UnknownAddressError;
        toJSON(_: _14.UnknownAddressError): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_14.UnknownAddressError>, I_10>>(_: I_10): _14.UnknownAddressError;
    };
    InvalidPubKeyError: {
        encode(_: _14.InvalidPubKeyError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InvalidPubKeyError;
        fromJSON(_: any): _14.InvalidPubKeyError;
        toJSON(_: _14.InvalidPubKeyError): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_14.InvalidPubKeyError>, I_11>>(_: I_11): _14.InvalidPubKeyError;
    };
    InsufficientCoinsError: {
        encode(_: _14.InsufficientCoinsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientCoinsError;
        fromJSON(_: any): _14.InsufficientCoinsError;
        toJSON(_: _14.InsufficientCoinsError): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_14.InsufficientCoinsError>, I_12>>(_: I_12): _14.InsufficientCoinsError;
    };
    OutOfGasError: {
        encode(_: _14.OutOfGasError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.OutOfGasError;
        fromJSON(_: any): _14.OutOfGasError;
        toJSON(_: _14.OutOfGasError): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_14.OutOfGasError>, I_13>>(_: I_13): _14.OutOfGasError;
    };
    MemoTooLargeError: {
        encode(_: _14.MemoTooLargeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MemoTooLargeError;
        fromJSON(_: any): _14.MemoTooLargeError;
        toJSON(_: _14.MemoTooLargeError): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_14.MemoTooLargeError>, I_14>>(_: I_14): _14.MemoTooLargeError;
    };
    InsufficientFeeError: {
        encode(_: _14.InsufficientFeeError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InsufficientFeeError;
        fromJSON(_: any): _14.InsufficientFeeError;
        toJSON(_: _14.InsufficientFeeError): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_14.InsufficientFeeError>, I_15>>(_: I_15): _14.InsufficientFeeError;
    };
    TooManySignaturesError: {
        encode(_: _14.TooManySignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TooManySignaturesError;
        fromJSON(_: any): _14.TooManySignaturesError;
        toJSON(_: _14.TooManySignaturesError): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_14.TooManySignaturesError>, I_16>>(_: I_16): _14.TooManySignaturesError;
    };
    NoSignaturesError: {
        encode(_: _14.NoSignaturesError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.NoSignaturesError;
        fromJSON(_: any): _14.NoSignaturesError;
        toJSON(_: _14.NoSignaturesError): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_14.NoSignaturesError>, I_17>>(_: I_17): _14.NoSignaturesError;
    };
    GasOverflowError: {
        encode(_: _14.GasOverflowError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GasOverflowError;
        fromJSON(_: any): _14.GasOverflowError;
        toJSON(_: _14.GasOverflowError): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_14.GasOverflowError>, I_18>>(_: I_18): _14.GasOverflowError;
    };
};
