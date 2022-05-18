import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface ProofOp {
    Type: string;
    Key: Uint8Array;
    Data: Uint8Array;
}
export interface Proof {
    Ops: ProofOp[];
}
export interface SimpleProof {
    Total: Long;
    Index: Long;
    LeafHash: Uint8Array;
    Aunts: Uint8Array[];
}
export interface SimpleProofNode {
    Hash: Uint8Array;
    Parent: SimpleProofNode;
    Left: SimpleProofNode;
    Right: SimpleProofNode;
}
export interface MERKLE_BytesList {
    Value: Uint8Array[];
}
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof;
};
export declare const SimpleProof: {
    encode(message: SimpleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleProof;
    fromJSON(object: any): SimpleProof;
    toJSON(message: SimpleProof): unknown;
    fromPartial<I extends Exact<DeepPartial<SimpleProof>, I>>(object: I): SimpleProof;
};
export declare const SimpleProofNode: {
    encode(message: SimpleProofNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleProofNode;
    fromJSON(object: any): SimpleProofNode;
    toJSON(message: SimpleProofNode): unknown;
    fromPartial<I extends Exact<DeepPartial<SimpleProofNode>, I>>(object: I): SimpleProofNode;
};
export declare const MERKLE_BytesList: {
    encode(message: MERKLE_BytesList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MERKLE_BytesList;
    fromJSON(object: any): MERKLE_BytesList;
    toJSON(message: MERKLE_BytesList): unknown;
    fromPartial<I extends Exact<DeepPartial<MERKLE_BytesList>, I>>(object: I): MERKLE_BytesList;
};
