import * as _2 from "../github.com/gnolang/gno/pkgs/bft/blockchain/blockchain";
import * as _3 from "../github.com/gnolang/gno/pkgs/bft/consensus/consensus";
import * as _4 from "../github.com/gnolang/gno/pkgs/bft/consensus/types/cstypes";
import * as _5 from "../github.com/gnolang/gno/pkgs/bft/mempool/mempool";
import * as _6 from "../github.com/gnolang/gno/pkgs/bft/types/types";
import * as _7 from "../github.com/gnolang/gno/pkgs/bitarray/bitarray";
import * as _8 from "../github.com/gnolang/gno/pkgs/crypto/ed25519/ed25519";
import * as _9 from "../github.com/gnolang/gno/pkgs/crypto/hd/hd";
import * as _10 from "../github.com/gnolang/gno/pkgs/crypto/merkle/merkle";
import * as _11 from "../github.com/gnolang/gno/pkgs/crypto/multisig/multisig";
export declare const tm: {
    PubKeyMultisig: {
        encode(message: _11.PubKeyMultisig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.PubKeyMultisig;
        fromJSON(object: any): _11.PubKeyMultisig;
        toJSON(message: _11.PubKeyMultisig): unknown;
        fromPartial<I extends Exact<DeepPartial<_11.PubKeyMultisig>, I>>(object: I): _11.PubKeyMultisig;
    };
    ProofOp: {
        encode(message: _10.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ProofOp;
        fromJSON(object: any): _10.ProofOp;
        toJSON(message: _10.ProofOp): unknown;
        fromPartial<I_1 extends Exact<DeepPartial<_10.ProofOp>, I_1>>(object: I_1): _10.ProofOp;
    };
    Proof: {
        encode(message: _10.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Proof;
        fromJSON(object: any): _10.Proof;
        toJSON(message: _10.Proof): unknown;
        fromPartial<I_2 extends Exact<DeepPartial<_10.Proof>, I_2>>(object: I_2): _10.Proof;
    };
    SimpleProof: {
        encode(message: _10.SimpleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SimpleProof;
        fromJSON(object: any): _10.SimpleProof;
        toJSON(message: _10.SimpleProof): unknown;
        fromPartial<I_3 extends Exact<DeepPartial<_10.SimpleProof>, I_3>>(object: I_3): _10.SimpleProof;
    };
    SimpleProofNode: {
        encode(message: _10.SimpleProofNode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SimpleProofNode;
        fromJSON(object: any): _10.SimpleProofNode;
        toJSON(message: _10.SimpleProofNode): unknown;
        fromPartial<I_4 extends Exact<DeepPartial<_10.SimpleProofNode>, I_4>>(object: I_4): _10.SimpleProofNode;
    };
    MERKLE_BytesList: {
        encode(message: _10.MERKLE_BytesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MERKLE_BytesList;
        fromJSON(object: any): _10.MERKLE_BytesList;
        toJSON(message: _10.MERKLE_BytesList): unknown;
        fromPartial<I_5 extends Exact<DeepPartial<_10.MERKLE_BytesList>, I_5>>(object: I_5): _10.MERKLE_BytesList;
    };
    Bip44Params: {
        encode(message: _9.Bip44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bip44Params;
        fromJSON(object: any): _9.Bip44Params;
        toJSON(message: _9.Bip44Params): unknown;
        fromPartial<I_6 extends Exact<DeepPartial<_9.Bip44Params>, I_6>>(object: I_6): _9.Bip44Params;
    };
    PubKeyEd25519: {
        encode(message: _8.PubKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.PubKeyEd25519;
        fromJSON(object: any): _8.PubKeyEd25519;
        toJSON(message: _8.PubKeyEd25519): unknown;
        fromPartial<I_7 extends Exact<DeepPartial<_8.PubKeyEd25519>, I_7>>(object: I_7): _8.PubKeyEd25519;
    };
    PrivKeyEd25519: {
        encode(message: _8.PrivKeyEd25519, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.PrivKeyEd25519;
        fromJSON(object: any): _8.PrivKeyEd25519;
        toJSON(message: _8.PrivKeyEd25519): unknown;
        fromPartial<I_8 extends Exact<DeepPartial<_8.PrivKeyEd25519>, I_8>>(object: I_8): _8.PrivKeyEd25519;
    };
    BitArray: {
        encode(message: _7.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BitArray;
        fromJSON(object: any): _7.BitArray;
        toJSON(message: _7.BitArray): unknown;
        fromPartial<I_9 extends Exact<DeepPartial<_7.BitArray>, I_9>>(object: I_9): _7.BitArray;
    };
    Proposal: {
        encode(message: _6.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Proposal;
        fromJSON(object: any): _6.Proposal;
        toJSON(message: _6.Proposal): unknown;
        fromPartial<I_10 extends Exact<DeepPartial<_6.Proposal>, I_10>>(object: I_10): _6.Proposal;
    };
    Block: {
        encode(message: _6.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Block;
        fromJSON(object: any): _6.Block;
        toJSON(message: _6.Block): unknown;
        fromPartial<I_11 extends Exact<DeepPartial<_6.Block>, I_11>>(object: I_11): _6.Block;
    };
    Header: {
        encode(message: _6.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Header;
        fromJSON(object: any): _6.Header;
        toJSON(message: _6.Header): unknown;
        fromPartial<I_12 extends Exact<DeepPartial<_6.Header>, I_12>>(object: I_12): _6.Header;
    };
    Data: {
        encode(message: _6.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Data;
        fromJSON(object: any): _6.Data;
        toJSON(message: _6.Data): unknown;
        fromPartial<I_13 extends Exact<DeepPartial<_6.Data>, I_13>>(object: I_13): _6.Data;
    };
    Commit: {
        encode(message: _6.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Commit;
        fromJSON(object: any): _6.Commit;
        toJSON(message: _6.Commit): unknown;
        fromPartial<I_14 extends Exact<DeepPartial<_6.Commit>, I_14>>(object: I_14): _6.Commit;
    };
    BlockID: {
        encode(message: _6.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BlockID;
        fromJSON(object: any): _6.BlockID;
        toJSON(message: _6.BlockID): unknown;
        fromPartial<I_15 extends Exact<DeepPartial<_6.BlockID>, I_15>>(object: I_15): _6.BlockID;
    };
    CommitSig: {
        encode(message: _6.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CommitSig;
        fromJSON(object: any): _6.CommitSig;
        toJSON(message: _6.CommitSig): unknown;
        fromPartial<I_16 extends Exact<DeepPartial<_6.CommitSig>, I_16>>(object: I_16): _6.CommitSig;
    };
    Vote: {
        encode(message: _6.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Vote;
        fromJSON(object: any): _6.Vote;
        toJSON(message: _6.Vote): unknown;
        fromPartial<I_17 extends Exact<DeepPartial<_6.Vote>, I_17>>(object: I_17): _6.Vote;
    };
    Part: {
        encode(message: _6.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Part;
        fromJSON(object: any): _6.Part;
        toJSON(message: _6.Part): unknown;
        fromPartial<I_18 extends Exact<DeepPartial<_6.Part>, I_18>>(object: I_18): _6.Part;
    };
    PartSet: {
        encode(_: _6.PartSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PartSet;
        fromJSON(_: any): _6.PartSet;
        toJSON(_: _6.PartSet): unknown;
        fromPartial<I_19 extends Exact<DeepPartial<_6.PartSet>, I_19>>(_: I_19): _6.PartSet;
    };
    PartSetHeader: {
        encode(message: _6.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.PartSetHeader;
        fromJSON(object: any): _6.PartSetHeader;
        toJSON(message: _6.PartSetHeader): unknown;
        fromPartial<I_20 extends Exact<DeepPartial<_6.PartSetHeader>, I_20>>(object: I_20): _6.PartSetHeader;
    };
    Validator: {
        encode(message: _6.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Validator;
        fromJSON(object: any): _6.Validator;
        toJSON(message: _6.Validator): unknown;
        fromPartial<I_21 extends Exact<DeepPartial<_6.Validator>, I_21>>(object: I_21): _6.Validator;
    };
    ValidatorSet: {
        encode(message: _6.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ValidatorSet;
        fromJSON(object: any): _6.ValidatorSet;
        toJSON(message: _6.ValidatorSet): unknown;
        fromPartial<I_22 extends Exact<DeepPartial<_6.ValidatorSet>, I_22>>(object: I_22): _6.ValidatorSet;
    };
    EventNewBlock: {
        encode(message: _6.EventNewBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventNewBlock;
        fromJSON(object: any): _6.EventNewBlock;
        toJSON(message: _6.EventNewBlock): unknown;
        fromPartial<I_23 extends Exact<DeepPartial<_6.EventNewBlock>, I_23>>(object: I_23): _6.EventNewBlock;
    };
    EventNewBlockHeader: {
        encode(message: _6.EventNewBlockHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventNewBlockHeader;
        fromJSON(object: any): _6.EventNewBlockHeader;
        toJSON(message: _6.EventNewBlockHeader): unknown;
        fromPartial<I_24 extends Exact<DeepPartial<_6.EventNewBlockHeader>, I_24>>(object: I_24): _6.EventNewBlockHeader;
    };
    EventTx: {
        encode(message: _6.EventTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventTx;
        fromJSON(object: any): _6.EventTx;
        toJSON(message: _6.EventTx): unknown;
        fromPartial<I_25 extends Exact<DeepPartial<_6.EventTx>, I_25>>(object: I_25): _6.EventTx;
    };
    EventVote: {
        encode(message: _6.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventVote;
        fromJSON(object: any): _6.EventVote;
        toJSON(message: _6.EventVote): unknown;
        fromPartial<I_26 extends Exact<DeepPartial<_6.EventVote>, I_26>>(object: I_26): _6.EventVote;
    };
    EventString: {
        encode(message: _6.EventString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventString;
        fromJSON(object: any): _6.EventString;
        toJSON(message: _6.EventString): unknown;
        fromPartial<I_27 extends Exact<DeepPartial<_6.EventString>, I_27>>(object: I_27): _6.EventString;
    };
    EventValidatorSetUpdates: {
        encode(message: _6.EventValidatorSetUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventValidatorSetUpdates;
        fromJSON(object: any): _6.EventValidatorSetUpdates;
        toJSON(message: _6.EventValidatorSetUpdates): unknown;
        fromPartial<I_28 extends Exact<DeepPartial<_6.EventValidatorSetUpdates>, I_28>>(object: I_28): _6.EventValidatorSetUpdates;
    };
    DuplicateVoteEvidence: {
        encode(message: _6.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.DuplicateVoteEvidence;
        fromJSON(object: any): _6.DuplicateVoteEvidence;
        toJSON(message: _6.DuplicateVoteEvidence): unknown;
        fromPartial<I_29 extends Exact<DeepPartial<_6.DuplicateVoteEvidence>, I_29>>(object: I_29): _6.DuplicateVoteEvidence;
    };
    MockGoodEvidence: {
        encode(message: _6.MockGoodEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MockGoodEvidence;
        fromJSON(object: any): _6.MockGoodEvidence;
        toJSON(message: _6.MockGoodEvidence): unknown;
        fromPartial<I_30 extends Exact<DeepPartial<_6.MockGoodEvidence>, I_30>>(object: I_30): _6.MockGoodEvidence;
    };
    MockRandomGoodEvidence: {
        encode(message: _6.MockRandomGoodEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MockRandomGoodEvidence;
        fromJSON(object: any): _6.MockRandomGoodEvidence;
        toJSON(message: _6.MockRandomGoodEvidence): unknown;
        fromPartial<I_31 extends Exact<DeepPartial<_6.MockRandomGoodEvidence>, I_31>>(object: I_31): _6.MockRandomGoodEvidence;
    };
    MockBadEvidence: {
        encode(message: _6.MockBadEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MockBadEvidence;
        fromJSON(object: any): _6.MockBadEvidence;
        toJSON(message: _6.MockBadEvidence): unknown;
        fromPartial<I_32 extends Exact<DeepPartial<_6.MockBadEvidence>, I_32>>(object: I_32): _6.MockBadEvidence;
    };
    TxResult: {
        encode(message: _6.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TxResult;
        fromJSON(object: any): _6.TxResult;
        toJSON(message: _6.TxResult): unknown;
        fromPartial<I_33 extends Exact<DeepPartial<_6.TxResult>, I_33>>(object: I_33): _6.TxResult;
    };
    MockAppState: {
        encode(message: _6.MockAppState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MockAppState;
        fromJSON(object: any): _6.MockAppState;
        toJSON(message: _6.MockAppState): unknown;
        fromPartial<I_34 extends Exact<DeepPartial<_6.MockAppState>, I_34>>(object: I_34): _6.MockAppState;
    };
    VoteSet: {
        encode(_: _6.VoteSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.VoteSet;
        fromJSON(_: any): _6.VoteSet;
        toJSON(_: _6.VoteSet): unknown;
        fromPartial<I_35 extends Exact<DeepPartial<_6.VoteSet>, I_35>>(_: I_35): _6.VoteSet;
    };
    TYPES_BytesList: {
        encode(message: _6.TYPES_BytesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TYPES_BytesList;
        fromJSON(object: any): _6.TYPES_BytesList;
        toJSON(message: _6.TYPES_BytesList): unknown;
        fromPartial<I_36 extends Exact<DeepPartial<_6.TYPES_BytesList>, I_36>>(object: I_36): _6.TYPES_BytesList;
    };
    TxMessage: {
        encode(message: _5.TxMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.TxMessage;
        fromJSON(object: any): _5.TxMessage;
        toJSON(message: _5.TxMessage): unknown;
        fromPartial<I_37 extends Exact<DeepPartial<_5.TxMessage>, I_37>>(object: I_37): _5.TxMessage;
    };
    RoundState: {
        encode(message: _4.RoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.RoundState;
        fromJSON(object: any): _4.RoundState;
        toJSON(message: _4.RoundState): unknown;
        fromPartial<I_38 extends Exact<DeepPartial<_4.RoundState>, I_38>>(object: I_38): _4.RoundState;
    };
    HRS: {
        encode(message: _4.HRS, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.HRS;
        fromJSON(object: any): _4.HRS;
        toJSON(message: _4.HRS): unknown;
        fromPartial<I_39 extends Exact<DeepPartial<_4.HRS>, I_39>>(object: I_39): _4.HRS;
    };
    RoundStateSimple: {
        encode(message: _4.RoundStateSimple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.RoundStateSimple;
        fromJSON(object: any): _4.RoundStateSimple;
        toJSON(message: _4.RoundStateSimple): unknown;
        fromPartial<I_40 extends Exact<DeepPartial<_4.RoundStateSimple>, I_40>>(object: I_40): _4.RoundStateSimple;
    };
    PeerRoundState: {
        encode(message: _4.PeerRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PeerRoundState;
        fromJSON(object: any): _4.PeerRoundState;
        toJSON(message: _4.PeerRoundState): unknown;
        fromPartial<I_41 extends Exact<DeepPartial<_4.PeerRoundState>, I_41>>(object: I_41): _4.PeerRoundState;
    };
    HeightVoteSet: {
        encode(_: _4.HeightVoteSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.HeightVoteSet;
        fromJSON(_: any): _4.HeightVoteSet;
        toJSON(_: _4.HeightVoteSet): unknown;
        fromPartial<I_42 extends Exact<DeepPartial<_4.HeightVoteSet>, I_42>>(_: I_42): _4.HeightVoteSet;
    };
    EventNewRoundStep: {
        encode(message: _4.EventNewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventNewRoundStep;
        fromJSON(object: any): _4.EventNewRoundStep;
        toJSON(message: _4.EventNewRoundStep): unknown;
        fromPartial<I_43 extends Exact<DeepPartial<_4.EventNewRoundStep>, I_43>>(object: I_43): _4.EventNewRoundStep;
    };
    EventNewValidBlock: {
        encode(message: _4.EventNewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventNewValidBlock;
        fromJSON(object: any): _4.EventNewValidBlock;
        toJSON(message: _4.EventNewValidBlock): unknown;
        fromPartial<I_44 extends Exact<DeepPartial<_4.EventNewValidBlock>, I_44>>(object: I_44): _4.EventNewValidBlock;
    };
    EventNewRound: {
        encode(message: _4.EventNewRound, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventNewRound;
        fromJSON(object: any): _4.EventNewRound;
        toJSON(message: _4.EventNewRound): unknown;
        fromPartial<I_45 extends Exact<DeepPartial<_4.EventNewRound>, I_45>>(object: I_45): _4.EventNewRound;
    };
    EventCompleteProposal: {
        encode(message: _4.EventCompleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventCompleteProposal;
        fromJSON(object: any): _4.EventCompleteProposal;
        toJSON(message: _4.EventCompleteProposal): unknown;
        fromPartial<I_46 extends Exact<DeepPartial<_4.EventCompleteProposal>, I_46>>(object: I_46): _4.EventCompleteProposal;
    };
    EventTimeoutPropose: {
        encode(message: _4.EventTimeoutPropose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventTimeoutPropose;
        fromJSON(object: any): _4.EventTimeoutPropose;
        toJSON(message: _4.EventTimeoutPropose): unknown;
        fromPartial<I_47 extends Exact<DeepPartial<_4.EventTimeoutPropose>, I_47>>(object: I_47): _4.EventTimeoutPropose;
    };
    EventTimeoutWait: {
        encode(message: _4.EventTimeoutWait, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventTimeoutWait;
        fromJSON(object: any): _4.EventTimeoutWait;
        toJSON(message: _4.EventTimeoutWait): unknown;
        fromPartial<I_48 extends Exact<DeepPartial<_4.EventTimeoutWait>, I_48>>(object: I_48): _4.EventTimeoutWait;
    };
    NewRoundStepMessage: {
        encode(message: _3.NewRoundStepMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.NewRoundStepMessage;
        fromJSON(object: any): _3.NewRoundStepMessage;
        toJSON(message: _3.NewRoundStepMessage): unknown;
        fromPartial<I_49 extends Exact<DeepPartial<_3.NewRoundStepMessage>, I_49>>(object: I_49): _3.NewRoundStepMessage;
    };
    NewValidBlockMessage: {
        encode(message: _3.NewValidBlockMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.NewValidBlockMessage;
        fromJSON(object: any): _3.NewValidBlockMessage;
        toJSON(message: _3.NewValidBlockMessage): unknown;
        fromPartial<I_50 extends Exact<DeepPartial<_3.NewValidBlockMessage>, I_50>>(object: I_50): _3.NewValidBlockMessage;
    };
    ProposalMessage: {
        encode(message: _3.ProposalMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ProposalMessage;
        fromJSON(object: any): _3.ProposalMessage;
        toJSON(message: _3.ProposalMessage): unknown;
        fromPartial<I_51 extends Exact<DeepPartial<_3.ProposalMessage>, I_51>>(object: I_51): _3.ProposalMessage;
    };
    ProposalPOLMessage: {
        encode(message: _3.ProposalPOLMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ProposalPOLMessage;
        fromJSON(object: any): _3.ProposalPOLMessage;
        toJSON(message: _3.ProposalPOLMessage): unknown;
        fromPartial<I_52 extends Exact<DeepPartial<_3.ProposalPOLMessage>, I_52>>(object: I_52): _3.ProposalPOLMessage;
    };
    BlockPartMessage: {
        encode(message: _3.BlockPartMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.BlockPartMessage;
        fromJSON(object: any): _3.BlockPartMessage;
        toJSON(message: _3.BlockPartMessage): unknown;
        fromPartial<I_53 extends Exact<DeepPartial<_3.BlockPartMessage>, I_53>>(object: I_53): _3.BlockPartMessage;
    };
    VoteMessage: {
        encode(message: _3.VoteMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.VoteMessage;
        fromJSON(object: any): _3.VoteMessage;
        toJSON(message: _3.VoteMessage): unknown;
        fromPartial<I_54 extends Exact<DeepPartial<_3.VoteMessage>, I_54>>(object: I_54): _3.VoteMessage;
    };
    HasVoteMessage: {
        encode(message: _3.HasVoteMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.HasVoteMessage;
        fromJSON(object: any): _3.HasVoteMessage;
        toJSON(message: _3.HasVoteMessage): unknown;
        fromPartial<I_55 extends Exact<DeepPartial<_3.HasVoteMessage>, I_55>>(object: I_55): _3.HasVoteMessage;
    };
    VoteSetMaj23Message: {
        encode(message: _3.VoteSetMaj23Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.VoteSetMaj23Message;
        fromJSON(object: any): _3.VoteSetMaj23Message;
        toJSON(message: _3.VoteSetMaj23Message): unknown;
        fromPartial<I_56 extends Exact<DeepPartial<_3.VoteSetMaj23Message>, I_56>>(object: I_56): _3.VoteSetMaj23Message;
    };
    VoteSetBitsMessage: {
        encode(message: _3.VoteSetBitsMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.VoteSetBitsMessage;
        fromJSON(object: any): _3.VoteSetBitsMessage;
        toJSON(message: _3.VoteSetBitsMessage): unknown;
        fromPartial<I_57 extends Exact<DeepPartial<_3.VoteSetBitsMessage>, I_57>>(object: I_57): _3.VoteSetBitsMessage;
    };
    newRoundStepInfo: {
        encode(message: _3.newRoundStepInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.newRoundStepInfo;
        fromJSON(object: any): _3.newRoundStepInfo;
        toJSON(message: _3.newRoundStepInfo): unknown;
        fromPartial<I_58 extends Exact<DeepPartial<_3.newRoundStepInfo>, I_58>>(object: I_58): _3.newRoundStepInfo;
    };
    msgInfo: {
        encode(message: _3.msgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.msgInfo;
        fromJSON(object: any): _3.msgInfo;
        toJSON(message: _3.msgInfo): unknown;
        fromPartial<I_59 extends Exact<DeepPartial<_3.msgInfo>, I_59>>(object: I_59): _3.msgInfo;
    };
    timeoutInfo: {
        encode(message: _3.timeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.timeoutInfo;
        fromJSON(object: any): _3.timeoutInfo;
        toJSON(message: _3.timeoutInfo): unknown;
        fromPartial<I_60 extends Exact<DeepPartial<_3.timeoutInfo>, I_60>>(object: I_60): _3.timeoutInfo;
    };
    BlockRequest: {
        encode(message: _2.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BlockRequest;
        fromJSON(object: any): _2.BlockRequest;
        toJSON(message: _2.BlockRequest): unknown;
        fromPartial<I_61 extends Exact<DeepPartial<_2.BlockRequest>, I_61>>(object: I_61): _2.BlockRequest;
    };
    BlockResponse: {
        encode(message: _2.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BlockResponse;
        fromJSON(object: any): _2.BlockResponse;
        toJSON(message: _2.BlockResponse): unknown;
        fromPartial<I_62 extends Exact<DeepPartial<_2.BlockResponse>, I_62>>(object: I_62): _2.BlockResponse;
    };
    NoBlockResponse: {
        encode(message: _2.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.NoBlockResponse;
        fromJSON(object: any): _2.NoBlockResponse;
        toJSON(message: _2.NoBlockResponse): unknown;
        fromPartial<I_63 extends Exact<DeepPartial<_2.NoBlockResponse>, I_63>>(object: I_63): _2.NoBlockResponse;
    };
    StatusRequest: {
        encode(message: _2.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.StatusRequest;
        fromJSON(object: any): _2.StatusRequest;
        toJSON(message: _2.StatusRequest): unknown;
        fromPartial<I_64 extends Exact<DeepPartial<_2.StatusRequest>, I_64>>(object: I_64): _2.StatusRequest;
    };
    StatusResponse: {
        encode(message: _2.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.StatusResponse;
        fromJSON(object: any): _2.StatusResponse;
        toJSON(message: _2.StatusResponse): unknown;
        fromPartial<I_65 extends Exact<DeepPartial<_2.StatusResponse>, I_65>>(object: I_65): _2.StatusResponse;
    };
};
