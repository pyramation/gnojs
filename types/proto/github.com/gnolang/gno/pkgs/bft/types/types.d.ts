import { SimpleProof } from "../../crypto/merkle/merkle";
import { Any } from "../../../../../../google/protobuf/any";
import { ResponseBeginBlock, ResponseEndBlock, ValidatorUpdate, ResponseDeliverTx } from "../abci/types/abci";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** messages */
export interface Proposal {
    Type: number;
    Height: Long;
    Round: Long;
    POLRound: Long;
    BlockID: BlockID;
    Timestamp: Date;
    Signature: Uint8Array;
}
export interface Block {
    Header: Header;
    Data: Data;
    LastCommit: Commit;
}
export interface Header {
    Version: string;
    ChainID: string;
    Height: Long;
    Time: Date;
    NumTxs: Long;
    TotalTxs: Long;
    AppVersion: string;
    LastBlockID: BlockID;
    LastCommitHash: Uint8Array;
    DataHash: Uint8Array;
    ValidatorsHash: Uint8Array;
    NextValidatorsHash: Uint8Array;
    ConsensusHash: Uint8Array;
    AppHash: Uint8Array;
    LastResultsHash: Uint8Array;
    ProposerAddress: string;
}
export interface Data {
    Txs: Uint8Array[];
}
export interface Commit {
    BlockID: BlockID;
    Precommits: CommitSig[];
}
export interface BlockID {
    Hash: Uint8Array;
    PartsHeader: PartSetHeader;
}
export interface CommitSig {
    Type: number;
    Height: Long;
    Round: Long;
    BlockID: BlockID;
    Timestamp: Date;
    ValidatorAddress: string;
    ValidatorIndex: Long;
    Signature: Uint8Array;
}
export interface Vote {
    Type: number;
    Height: Long;
    Round: Long;
    BlockID: BlockID;
    Timestamp: Date;
    ValidatorAddress: string;
    ValidatorIndex: Long;
    Signature: Uint8Array;
}
export interface Part {
    Index: Long;
    Bytes: Uint8Array;
    Proof: SimpleProof;
}
export interface PartSet {
}
export interface PartSetHeader {
    Total: Long;
    Hash: Uint8Array;
}
export interface Validator {
    Address: string;
    PubKey: Any;
    VotingPower: Long;
    ProposerPriority: Long;
}
export interface ValidatorSet {
    Validators: Validator[];
    Proposer: Validator;
}
export interface EventNewBlock {
    Block: Block;
    ResultBeginBlock: ResponseBeginBlock;
    ResultEndBlock: ResponseEndBlock;
}
export interface EventNewBlockHeader {
    Header: Header;
    ResultBeginBlock: ResponseBeginBlock;
    ResultEndBlock: ResponseEndBlock;
}
export interface EventTx {
    Result: TxResult;
}
export interface EventVote {
    Vote: Vote;
}
export interface EventString {
    Value: string;
}
export interface EventValidatorSetUpdates {
    ValidatorUpdates: ValidatorUpdate[];
}
export interface DuplicateVoteEvidence {
    PubKey: Any;
    VoteA: Vote;
    VoteB: Vote;
}
export interface MockGoodEvidence {
    Height: Long;
    Address: string;
}
export interface MockRandomGoodEvidence {
    MockGoodEvidence: MockGoodEvidence;
}
export interface MockBadEvidence {
    MockGoodEvidence: MockGoodEvidence;
}
export interface TxResult {
    Height: Long;
    Index: number;
    Tx: Uint8Array;
    Response: ResponseDeliverTx;
}
export interface MockAppState {
    AccountOwner: string;
}
export interface VoteSet {
}
export interface TYPES_BytesList {
    Value: Uint8Array[];
}
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data;
};
export declare const Commit: {
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit;
};
export declare const BlockID: {
    encode(message: BlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockID;
    fromJSON(object: any): BlockID;
    toJSON(message: BlockID): unknown;
    fromPartial<I extends Exact<DeepPartial<BlockID>, I>>(object: I): BlockID;
};
export declare const CommitSig: {
    encode(message: CommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig;
    fromJSON(object: any): CommitSig;
    toJSON(message: CommitSig): unknown;
    fromPartial<I extends Exact<DeepPartial<CommitSig>, I>>(object: I): CommitSig;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote;
};
export declare const Part: {
    encode(message: Part, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Part;
    fromJSON(object: any): Part;
    toJSON(message: Part): unknown;
    fromPartial<I extends Exact<DeepPartial<Part>, I>>(object: I): Part;
};
export declare const PartSet: {
    encode(_: PartSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartSet;
    fromJSON(_: any): PartSet;
    toJSON(_: PartSet): unknown;
    fromPartial<I extends Exact<DeepPartial<PartSet>, I>>(_: I): PartSet;
};
export declare const PartSetHeader: {
    encode(message: PartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader;
    fromJSON(object: any): PartSetHeader;
    toJSON(message: PartSetHeader): unknown;
    fromPartial<I extends Exact<DeepPartial<PartSetHeader>, I>>(object: I): PartSetHeader;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator;
};
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial<I extends Exact<DeepPartial<ValidatorSet>, I>>(object: I): ValidatorSet;
};
export declare const EventNewBlock: {
    encode(message: EventNewBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewBlock;
    fromJSON(object: any): EventNewBlock;
    toJSON(message: EventNewBlock): unknown;
    fromPartial<I extends Exact<DeepPartial<EventNewBlock>, I>>(object: I): EventNewBlock;
};
export declare const EventNewBlockHeader: {
    encode(message: EventNewBlockHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewBlockHeader;
    fromJSON(object: any): EventNewBlockHeader;
    toJSON(message: EventNewBlockHeader): unknown;
    fromPartial<I extends Exact<DeepPartial<EventNewBlockHeader>, I>>(object: I): EventNewBlockHeader;
};
export declare const EventTx: {
    encode(message: EventTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTx;
    fromJSON(object: any): EventTx;
    toJSON(message: EventTx): unknown;
    fromPartial<I extends Exact<DeepPartial<EventTx>, I>>(object: I): EventTx;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(object: I): EventVote;
};
export declare const EventString: {
    encode(message: EventString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventString;
    fromJSON(object: any): EventString;
    toJSON(message: EventString): unknown;
    fromPartial<I extends Exact<DeepPartial<EventString>, I>>(object: I): EventString;
};
export declare const EventValidatorSetUpdates: {
    encode(message: EventValidatorSetUpdates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventValidatorSetUpdates;
    fromJSON(object: any): EventValidatorSetUpdates;
    toJSON(message: EventValidatorSetUpdates): unknown;
    fromPartial<I extends Exact<DeepPartial<EventValidatorSetUpdates>, I>>(object: I): EventValidatorSetUpdates;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(object: I): DuplicateVoteEvidence;
};
export declare const MockGoodEvidence: {
    encode(message: MockGoodEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockGoodEvidence;
    fromJSON(object: any): MockGoodEvidence;
    toJSON(message: MockGoodEvidence): unknown;
    fromPartial<I extends Exact<DeepPartial<MockGoodEvidence>, I>>(object: I): MockGoodEvidence;
};
export declare const MockRandomGoodEvidence: {
    encode(message: MockRandomGoodEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockRandomGoodEvidence;
    fromJSON(object: any): MockRandomGoodEvidence;
    toJSON(message: MockRandomGoodEvidence): unknown;
    fromPartial<I extends Exact<DeepPartial<MockRandomGoodEvidence>, I>>(object: I): MockRandomGoodEvidence;
};
export declare const MockBadEvidence: {
    encode(message: MockBadEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockBadEvidence;
    fromJSON(object: any): MockBadEvidence;
    toJSON(message: MockBadEvidence): unknown;
    fromPartial<I extends Exact<DeepPartial<MockBadEvidence>, I>>(object: I): MockBadEvidence;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult;
};
export declare const MockAppState: {
    encode(message: MockAppState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MockAppState;
    fromJSON(object: any): MockAppState;
    toJSON(message: MockAppState): unknown;
    fromPartial<I extends Exact<DeepPartial<MockAppState>, I>>(object: I): MockAppState;
};
export declare const VoteSet: {
    encode(_: VoteSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSet;
    fromJSON(_: any): VoteSet;
    toJSON(_: VoteSet): unknown;
    fromPartial<I extends Exact<DeepPartial<VoteSet>, I>>(_: I): VoteSet;
};
export declare const TYPES_BytesList: {
    encode(message: TYPES_BytesList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TYPES_BytesList;
    fromJSON(object: any): TYPES_BytesList;
    toJSON(message: TYPES_BytesList): unknown;
    fromPartial<I extends Exact<DeepPartial<TYPES_BytesList>, I>>(object: I): TYPES_BytesList;
};
