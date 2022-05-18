import { ValidatorSet, Proposal, Block, PartSet, VoteSet, PartSetHeader, Validator, BlockID } from "../../types/types";
import { BitArray } from "../../../bitarray/bitarray";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface RoundState {
    Height: Long;
    Round: Long;
    Step: number;
    StartTime: Date;
    CommitTime: Date;
    Validators: ValidatorSet;
    Proposal: Proposal;
    ProposalBlock: Block;
    ProposalBlockParts: PartSet;
    LockedRound: Long;
    LockedBlock: Block;
    LockedBlockParts: PartSet;
    ValidRound: Long;
    ValidBlock: Block;
    ValidBlockParts: PartSet;
    Votes: HeightVoteSet;
    CommitRound: Long;
    LastCommit: VoteSet;
    LastValidators: ValidatorSet;
    TriggeredTimeoutPrecommit: boolean;
}
export interface HRS {
    Height: Long;
    Round: Long;
    Step: number;
}
export interface RoundStateSimple {
    HeightRoundStep: string;
    StartTime: Date;
    ProposalBlockHash: Uint8Array;
    LockedBlockHash: Uint8Array;
    ValidBlockHash: Uint8Array;
    Votes: HeightVoteSet;
}
export interface PeerRoundState {
    Height: Long;
    Round: Long;
    Step: number;
    StartTime: Date;
    Proposal: boolean;
    ProposalBlockPartsHeader: PartSetHeader;
    ProposalBlockParts: BitArray;
    ProposalPOLRound: Long;
    ProposalPOL: BitArray;
    Prevotes: BitArray;
    Precommits: BitArray;
    LastCommitRound: Long;
    LastCommit: BitArray;
    CatchupCommitRound: Long;
    CatchupCommit: BitArray;
}
export interface HeightVoteSet {
}
export interface EventNewRoundStep {
    HRS: HRS;
    SecondsSinceStartTime: Long;
    LastCommitRound: Long;
}
export interface EventNewValidBlock {
    HRS: HRS;
    BlockPartsHeader: PartSetHeader;
    BlockParts: BitArray;
    IsCommit: boolean;
}
export interface EventNewRound {
    HRS: HRS;
    Proposer: Validator;
    ProposerIndex: Long;
}
export interface EventCompleteProposal {
    HRS: HRS;
    BlockID: BlockID;
}
export interface EventTimeoutPropose {
    HRS: HRS;
}
export interface EventTimeoutWait {
    HRS: HRS;
}
export declare const RoundState: {
    encode(message: RoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoundState;
    fromJSON(object: any): RoundState;
    toJSON(message: RoundState): unknown;
    fromPartial<I extends Exact<DeepPartial<RoundState>, I>>(object: I): RoundState;
};
export declare const HRS: {
    encode(message: HRS, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HRS;
    fromJSON(object: any): HRS;
    toJSON(message: HRS): unknown;
    fromPartial<I extends Exact<DeepPartial<HRS>, I>>(object: I): HRS;
};
export declare const RoundStateSimple: {
    encode(message: RoundStateSimple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoundStateSimple;
    fromJSON(object: any): RoundStateSimple;
    toJSON(message: RoundStateSimple): unknown;
    fromPartial<I extends Exact<DeepPartial<RoundStateSimple>, I>>(object: I): RoundStateSimple;
};
export declare const PeerRoundState: {
    encode(message: PeerRoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerRoundState;
    fromJSON(object: any): PeerRoundState;
    toJSON(message: PeerRoundState): unknown;
    fromPartial<I extends Exact<DeepPartial<PeerRoundState>, I>>(object: I): PeerRoundState;
};
export declare const HeightVoteSet: {
    encode(_: HeightVoteSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeightVoteSet;
    fromJSON(_: any): HeightVoteSet;
    toJSON(_: HeightVoteSet): unknown;
    fromPartial<I extends Exact<DeepPartial<HeightVoteSet>, I>>(_: I): HeightVoteSet;
};
export declare const EventNewRoundStep: {
    encode(message: EventNewRoundStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRoundStep;
    fromJSON(object: any): EventNewRoundStep;
    toJSON(message: EventNewRoundStep): unknown;
    fromPartial<I extends Exact<DeepPartial<EventNewRoundStep>, I>>(object: I): EventNewRoundStep;
};
export declare const EventNewValidBlock: {
    encode(message: EventNewValidBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewValidBlock;
    fromJSON(object: any): EventNewValidBlock;
    toJSON(message: EventNewValidBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<EventNewValidBlock>, I>>(object: I): EventNewValidBlock;
};
export declare const EventNewRound: {
    encode(message: EventNewRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRound;
    fromJSON(object: any): EventNewRound;
    toJSON(message: EventNewRound): unknown;
    fromPartial<I extends Exact<DeepPartial<EventNewRound>, I>>(object: I): EventNewRound;
};
export declare const EventCompleteProposal: {
    encode(message: EventCompleteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteProposal;
    fromJSON(object: any): EventCompleteProposal;
    toJSON(message: EventCompleteProposal): unknown;
    fromPartial<I extends Exact<DeepPartial<EventCompleteProposal>, I>>(object: I): EventCompleteProposal;
};
export declare const EventTimeoutPropose: {
    encode(message: EventTimeoutPropose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutPropose;
    fromJSON(object: any): EventTimeoutPropose;
    toJSON(message: EventTimeoutPropose): unknown;
    fromPartial<I extends Exact<DeepPartial<EventTimeoutPropose>, I>>(object: I): EventTimeoutPropose;
};
export declare const EventTimeoutWait: {
    encode(message: EventTimeoutWait, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutWait;
    fromJSON(object: any): EventTimeoutWait;
    toJSON(message: EventTimeoutWait): unknown;
    fromPartial<I extends Exact<DeepPartial<EventTimeoutWait>, I>>(object: I): EventTimeoutWait;
};
