import { PartSetHeader, Proposal, Part, Vote, BlockID } from "../types/types";
import { BitArray } from "../../bitarray/bitarray";
import { HRS } from "./types/cstypes";
import { Any } from "../../../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface NewRoundStepMessage {
    Height: Long;
    Round: Long;
    Step: number;
    SecondsSinceStartTime: Long;
    LastCommitRound: Long;
}
export interface NewValidBlockMessage {
    Height: Long;
    Round: Long;
    BlockPartsHeader: PartSetHeader;
    BlockParts: BitArray;
    IsCommit: boolean;
}
export interface ProposalMessage {
    Proposal: Proposal;
}
export interface ProposalPOLMessage {
    Height: Long;
    ProposalPOLRound: Long;
    ProposalPOL: BitArray;
}
export interface BlockPartMessage {
    Height: Long;
    Round: Long;
    Part: Part;
}
export interface VoteMessage {
    Vote: Vote;
}
export interface HasVoteMessage {
    Height: Long;
    Round: Long;
    Type: number;
    Index: Long;
}
export interface VoteSetMaj23Message {
    Height: Long;
    Round: Long;
    Type: number;
    BlockID: BlockID;
}
export interface VoteSetBitsMessage {
    Height: Long;
    Round: Long;
    Type: number;
    BlockID: BlockID;
    Votes: BitArray;
}
export interface newRoundStepInfo {
    HRS: HRS;
}
export interface msgInfo {
    Msg: Any;
    PeerID: string;
}
export interface timeoutInfo {
    Duration: string;
    Height: Long;
    Round: Long;
    Step: number;
}
export declare const NewRoundStepMessage: {
    encode(message: NewRoundStepMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewRoundStepMessage;
    fromJSON(object: any): NewRoundStepMessage;
    toJSON(message: NewRoundStepMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<NewRoundStepMessage>, I>>(object: I): NewRoundStepMessage;
};
export declare const NewValidBlockMessage: {
    encode(message: NewValidBlockMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewValidBlockMessage;
    fromJSON(object: any): NewValidBlockMessage;
    toJSON(message: NewValidBlockMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<NewValidBlockMessage>, I>>(object: I): NewValidBlockMessage;
};
export declare const ProposalMessage: {
    encode(message: ProposalMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalMessage;
    fromJSON(object: any): ProposalMessage;
    toJSON(message: ProposalMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<ProposalMessage>, I>>(object: I): ProposalMessage;
};
export declare const ProposalPOLMessage: {
    encode(message: ProposalPOLMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalPOLMessage;
    fromJSON(object: any): ProposalPOLMessage;
    toJSON(message: ProposalPOLMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<ProposalPOLMessage>, I>>(object: I): ProposalPOLMessage;
};
export declare const BlockPartMessage: {
    encode(message: BlockPartMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockPartMessage;
    fromJSON(object: any): BlockPartMessage;
    toJSON(message: BlockPartMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockPartMessage>, I>>(object: I): BlockPartMessage;
};
export declare const VoteMessage: {
    encode(message: VoteMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteMessage;
    fromJSON(object: any): VoteMessage;
    toJSON(message: VoteMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<VoteMessage>, I>>(object: I): VoteMessage;
};
export declare const HasVoteMessage: {
    encode(message: HasVoteMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HasVoteMessage;
    fromJSON(object: any): HasVoteMessage;
    toJSON(message: HasVoteMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<HasVoteMessage>, I>>(object: I): HasVoteMessage;
};
export declare const VoteSetMaj23Message: {
    encode(message: VoteSetMaj23Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetMaj23Message;
    fromJSON(object: any): VoteSetMaj23Message;
    toJSON(message: VoteSetMaj23Message): unknown;
    fromPartial<I extends Exact<DeepPartial<VoteSetMaj23Message>, I>>(object: I): VoteSetMaj23Message;
};
export declare const VoteSetBitsMessage: {
    encode(message: VoteSetBitsMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetBitsMessage;
    fromJSON(object: any): VoteSetBitsMessage;
    toJSON(message: VoteSetBitsMessage): unknown;
    fromPartial<I extends Exact<DeepPartial<VoteSetBitsMessage>, I>>(object: I): VoteSetBitsMessage;
};
export declare const newRoundStepInfo: {
    encode(message: newRoundStepInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): newRoundStepInfo;
    fromJSON(object: any): newRoundStepInfo;
    toJSON(message: newRoundStepInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<newRoundStepInfo>, I>>(object: I): newRoundStepInfo;
};
export declare const msgInfo: {
    encode(message: msgInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): msgInfo;
    fromJSON(object: any): msgInfo;
    toJSON(message: msgInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<msgInfo>, I>>(object: I): msgInfo;
};
export declare const timeoutInfo: {
    encode(message: timeoutInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): timeoutInfo;
    fromJSON(object: any): timeoutInfo;
    toJSON(message: timeoutInfo): unknown;
    fromPartial<I extends Exact<DeepPartial<timeoutInfo>, I>>(object: I): timeoutInfo;
};
