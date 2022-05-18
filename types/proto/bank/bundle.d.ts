import * as _12 from "../github.com/gnolang/gno/pkgs/sdk/bank/bank";
export declare const bank: {
    NoInputsError: {
        encode(_: _12.NoInputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.NoInputsError;
        fromJSON(_: any): _12.NoInputsError;
        toJSON(_: _12.NoInputsError): unknown;
        fromPartial<I extends Exact<DeepPartial<_12.NoInputsError>, I>>(_: I): _12.NoInputsError;
    };
    NoOutputsError: {
        encode(_: _12.NoOutputsError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.NoOutputsError;
        fromJSON(_: any): _12.NoOutputsError;
        toJSON(_: _12.NoOutputsError): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_12.NoOutputsError>, I_1>>(_: I_1): _12.NoOutputsError;
    };
    InputOutputMismatchError: {
        encode(_: _12.InputOutputMismatchError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.InputOutputMismatchError;
        fromJSON(_: any): _12.InputOutputMismatchError;
        toJSON(_: _12.InputOutputMismatchError): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_12.InputOutputMismatchError>, I_2>>(_: I_2): _12.InputOutputMismatchError;
    };
    MsgSend: {
        encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
        fromJSON(object: any): _12.MsgSend;
        toJSON(message: _12.MsgSend): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_12.MsgSend>, I_3>>(object: I_3): _12.MsgSend;
    };
};
