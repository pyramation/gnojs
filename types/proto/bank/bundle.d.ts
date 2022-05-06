import * as _30 from "../github.com/gnolang/gno/pkgs/sdk/bank/bank";
export declare const bank: {
    NoInputsError: {
        encode(_: _30.NoInputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.NoInputsError;
        fromJSON(_: any): _30.NoInputsError;
        toJSON(_: _30.NoInputsError): unknown;
        fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _30.NoInputsError;
    };
    NoOutputsError: {
        encode(_: _30.NoOutputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.NoOutputsError;
        fromJSON(_: any): _30.NoOutputsError;
        toJSON(_: _30.NoOutputsError): unknown;
        fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _30.NoOutputsError;
    };
    InputOutputMismatchError: {
        encode(_: _30.InputOutputMismatchError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.InputOutputMismatchError;
        fromJSON(_: any): _30.InputOutputMismatchError;
        toJSON(_: _30.InputOutputMismatchError): unknown;
        fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _30.InputOutputMismatchError;
    };
    MsgSend: {
        encode(message: _30.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.MsgSend;
        fromJSON(object: any): _30.MsgSend;
        toJSON(message: _30.MsgSend): unknown;
        fromPartial<I_3 extends {
            FromAddress?: string;
            ToAddress?: string;
            Amount?: string;
        } & {
            FromAddress?: string;
            ToAddress?: string;
            Amount?: string;
        } & Record<Exclude<keyof I_3, keyof _30.MsgSend>, never>>(object: I_3): _30.MsgSend;
    };
};
