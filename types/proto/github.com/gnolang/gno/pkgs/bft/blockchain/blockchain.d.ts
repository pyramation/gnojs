import { Block } from "../types/types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface BlockRequest {
    Height: Long;
}
export interface BlockResponse {
    Block: Block;
}
export interface NoBlockResponse {
    Height: Long;
}
export interface StatusRequest {
    Height: Long;
}
export interface StatusResponse {
    Height: Long;
}
export declare const BlockRequest: {
    encode(message: BlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest;
    fromJSON(object: any): BlockRequest;
    toJSON(message: BlockRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockRequest>, I>>(object: I): BlockRequest;
};
export declare const BlockResponse: {
    encode(message: BlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse;
    fromJSON(object: any): BlockResponse;
    toJSON(message: BlockResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockResponse>, I>>(object: I): BlockResponse;
};
export declare const NoBlockResponse: {
    encode(message: NoBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse;
    fromJSON(object: any): NoBlockResponse;
    toJSON(message: NoBlockResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<NoBlockResponse>, I>>(object: I): NoBlockResponse;
};
export declare const StatusRequest: {
    encode(message: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest;
    fromJSON(object: any): StatusRequest;
    toJSON(message: StatusRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<StatusRequest>, I>>(object: I): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse;
    fromJSON(object: any): StatusResponse;
    toJSON(message: StatusResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<StatusResponse>, I>>(object: I): StatusResponse;
};
