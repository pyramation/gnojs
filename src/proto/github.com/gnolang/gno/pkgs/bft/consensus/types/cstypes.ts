import { Timestamp } from "../../../../../../../google/protobuf/timestamp";
import { ValidatorSet, Proposal, Block, PartSet, VoteSet, PartSetHeader, Validator, BlockID } from "../../types/types";
import { BitArray } from "../../../bitarray/bitarray";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, Exact, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

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
export interface HeightVoteSet {}
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

function createBaseRoundState(): RoundState {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Step: 0,
    StartTime: undefined,
    CommitTime: undefined,
    Validators: undefined,
    Proposal: undefined,
    ProposalBlock: undefined,
    ProposalBlockParts: undefined,
    LockedRound: Long.ZERO,
    LockedBlock: undefined,
    LockedBlockParts: undefined,
    ValidRound: Long.ZERO,
    ValidBlock: undefined,
    ValidBlockParts: undefined,
    Votes: undefined,
    CommitRound: Long.ZERO,
    LastCommit: undefined,
    LastValidators: undefined,
    TriggeredTimeoutPrecommit: false
  };
}

export const RoundState = {
  encode(message: RoundState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Step !== 0) {
      writer.uint32(24).uint32(message.Step);
    }

    if (message.StartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.StartTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.CommitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.CommitTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.Validators !== undefined) {
      ValidatorSet.encode(message.Validators, writer.uint32(50).fork()).ldelim();
    }

    if (message.Proposal !== undefined) {
      Proposal.encode(message.Proposal, writer.uint32(58).fork()).ldelim();
    }

    if (message.ProposalBlock !== undefined) {
      Block.encode(message.ProposalBlock, writer.uint32(66).fork()).ldelim();
    }

    if (message.ProposalBlockParts !== undefined) {
      PartSet.encode(message.ProposalBlockParts, writer.uint32(74).fork()).ldelim();
    }

    if (!message.LockedRound.isZero()) {
      writer.uint32(80).sint64(message.LockedRound);
    }

    if (message.LockedBlock !== undefined) {
      Block.encode(message.LockedBlock, writer.uint32(90).fork()).ldelim();
    }

    if (message.LockedBlockParts !== undefined) {
      PartSet.encode(message.LockedBlockParts, writer.uint32(98).fork()).ldelim();
    }

    if (!message.ValidRound.isZero()) {
      writer.uint32(104).sint64(message.ValidRound);
    }

    if (message.ValidBlock !== undefined) {
      Block.encode(message.ValidBlock, writer.uint32(114).fork()).ldelim();
    }

    if (message.ValidBlockParts !== undefined) {
      PartSet.encode(message.ValidBlockParts, writer.uint32(122).fork()).ldelim();
    }

    if (message.Votes !== undefined) {
      HeightVoteSet.encode(message.Votes, writer.uint32(130).fork()).ldelim();
    }

    if (!message.CommitRound.isZero()) {
      writer.uint32(136).sint64(message.CommitRound);
    }

    if (message.LastCommit !== undefined) {
      VoteSet.encode(message.LastCommit, writer.uint32(146).fork()).ldelim();
    }

    if (message.LastValidators !== undefined) {
      ValidatorSet.encode(message.LastValidators, writer.uint32(154).fork()).ldelim();
    }

    if (message.TriggeredTimeoutPrecommit === true) {
      writer.uint32(160).bool(message.TriggeredTimeoutPrecommit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoundState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.Round = (reader.sint64() as Long);
          break;

        case 3:
          message.Step = reader.uint32();
          break;

        case 4:
          message.StartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.CommitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.Validators = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 7:
          message.Proposal = Proposal.decode(reader, reader.uint32());
          break;

        case 8:
          message.ProposalBlock = Block.decode(reader, reader.uint32());
          break;

        case 9:
          message.ProposalBlockParts = PartSet.decode(reader, reader.uint32());
          break;

        case 10:
          message.LockedRound = (reader.sint64() as Long);
          break;

        case 11:
          message.LockedBlock = Block.decode(reader, reader.uint32());
          break;

        case 12:
          message.LockedBlockParts = PartSet.decode(reader, reader.uint32());
          break;

        case 13:
          message.ValidRound = (reader.sint64() as Long);
          break;

        case 14:
          message.ValidBlock = Block.decode(reader, reader.uint32());
          break;

        case 15:
          message.ValidBlockParts = PartSet.decode(reader, reader.uint32());
          break;

        case 16:
          message.Votes = HeightVoteSet.decode(reader, reader.uint32());
          break;

        case 17:
          message.CommitRound = (reader.sint64() as Long);
          break;

        case 18:
          message.LastCommit = VoteSet.decode(reader, reader.uint32());
          break;

        case 19:
          message.LastValidators = ValidatorSet.decode(reader, reader.uint32());
          break;

        case 20:
          message.TriggeredTimeoutPrecommit = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoundState {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Step: isSet(object.Step) ? Number(object.Step) : 0,
      StartTime: isSet(object.StartTime) ? fromJsonTimestamp(object.StartTime) : undefined,
      CommitTime: isSet(object.CommitTime) ? fromJsonTimestamp(object.CommitTime) : undefined,
      Validators: isSet(object.Validators) ? ValidatorSet.fromJSON(object.Validators) : undefined,
      Proposal: isSet(object.Proposal) ? Proposal.fromJSON(object.Proposal) : undefined,
      ProposalBlock: isSet(object.ProposalBlock) ? Block.fromJSON(object.ProposalBlock) : undefined,
      ProposalBlockParts: isSet(object.ProposalBlockParts) ? PartSet.fromJSON(object.ProposalBlockParts) : undefined,
      LockedRound: isSet(object.LockedRound) ? Long.fromString(object.LockedRound) : Long.ZERO,
      LockedBlock: isSet(object.LockedBlock) ? Block.fromJSON(object.LockedBlock) : undefined,
      LockedBlockParts: isSet(object.LockedBlockParts) ? PartSet.fromJSON(object.LockedBlockParts) : undefined,
      ValidRound: isSet(object.ValidRound) ? Long.fromString(object.ValidRound) : Long.ZERO,
      ValidBlock: isSet(object.ValidBlock) ? Block.fromJSON(object.ValidBlock) : undefined,
      ValidBlockParts: isSet(object.ValidBlockParts) ? PartSet.fromJSON(object.ValidBlockParts) : undefined,
      Votes: isSet(object.Votes) ? HeightVoteSet.fromJSON(object.Votes) : undefined,
      CommitRound: isSet(object.CommitRound) ? Long.fromString(object.CommitRound) : Long.ZERO,
      LastCommit: isSet(object.LastCommit) ? VoteSet.fromJSON(object.LastCommit) : undefined,
      LastValidators: isSet(object.LastValidators) ? ValidatorSet.fromJSON(object.LastValidators) : undefined,
      TriggeredTimeoutPrecommit: isSet(object.TriggeredTimeoutPrecommit) ? Boolean(object.TriggeredTimeoutPrecommit) : false
    };
  },

  toJSON(message: RoundState): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Step !== undefined && (obj.Step = Math.round(message.Step));
    message.StartTime !== undefined && (obj.StartTime = message.StartTime.toISOString());
    message.CommitTime !== undefined && (obj.CommitTime = message.CommitTime.toISOString());
    message.Validators !== undefined && (obj.Validators = message.Validators ? ValidatorSet.toJSON(message.Validators) : undefined);
    message.Proposal !== undefined && (obj.Proposal = message.Proposal ? Proposal.toJSON(message.Proposal) : undefined);
    message.ProposalBlock !== undefined && (obj.ProposalBlock = message.ProposalBlock ? Block.toJSON(message.ProposalBlock) : undefined);
    message.ProposalBlockParts !== undefined && (obj.ProposalBlockParts = message.ProposalBlockParts ? PartSet.toJSON(message.ProposalBlockParts) : undefined);
    message.LockedRound !== undefined && (obj.LockedRound = (message.LockedRound || Long.ZERO).toString());
    message.LockedBlock !== undefined && (obj.LockedBlock = message.LockedBlock ? Block.toJSON(message.LockedBlock) : undefined);
    message.LockedBlockParts !== undefined && (obj.LockedBlockParts = message.LockedBlockParts ? PartSet.toJSON(message.LockedBlockParts) : undefined);
    message.ValidRound !== undefined && (obj.ValidRound = (message.ValidRound || Long.ZERO).toString());
    message.ValidBlock !== undefined && (obj.ValidBlock = message.ValidBlock ? Block.toJSON(message.ValidBlock) : undefined);
    message.ValidBlockParts !== undefined && (obj.ValidBlockParts = message.ValidBlockParts ? PartSet.toJSON(message.ValidBlockParts) : undefined);
    message.Votes !== undefined && (obj.Votes = message.Votes ? HeightVoteSet.toJSON(message.Votes) : undefined);
    message.CommitRound !== undefined && (obj.CommitRound = (message.CommitRound || Long.ZERO).toString());
    message.LastCommit !== undefined && (obj.LastCommit = message.LastCommit ? VoteSet.toJSON(message.LastCommit) : undefined);
    message.LastValidators !== undefined && (obj.LastValidators = message.LastValidators ? ValidatorSet.toJSON(message.LastValidators) : undefined);
    message.TriggeredTimeoutPrecommit !== undefined && (obj.TriggeredTimeoutPrecommit = message.TriggeredTimeoutPrecommit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoundState>, I>>(object: I): RoundState {
    const message = createBaseRoundState();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Step = object.Step ?? 0;
    message.StartTime = object.StartTime ?? undefined;
    message.CommitTime = object.CommitTime ?? undefined;
    message.Validators = object.Validators !== undefined && object.Validators !== null ? ValidatorSet.fromPartial(object.Validators) : undefined;
    message.Proposal = object.Proposal !== undefined && object.Proposal !== null ? Proposal.fromPartial(object.Proposal) : undefined;
    message.ProposalBlock = object.ProposalBlock !== undefined && object.ProposalBlock !== null ? Block.fromPartial(object.ProposalBlock) : undefined;
    message.ProposalBlockParts = object.ProposalBlockParts !== undefined && object.ProposalBlockParts !== null ? PartSet.fromPartial(object.ProposalBlockParts) : undefined;
    message.LockedRound = object.LockedRound !== undefined && object.LockedRound !== null ? Long.fromValue(object.LockedRound) : Long.ZERO;
    message.LockedBlock = object.LockedBlock !== undefined && object.LockedBlock !== null ? Block.fromPartial(object.LockedBlock) : undefined;
    message.LockedBlockParts = object.LockedBlockParts !== undefined && object.LockedBlockParts !== null ? PartSet.fromPartial(object.LockedBlockParts) : undefined;
    message.ValidRound = object.ValidRound !== undefined && object.ValidRound !== null ? Long.fromValue(object.ValidRound) : Long.ZERO;
    message.ValidBlock = object.ValidBlock !== undefined && object.ValidBlock !== null ? Block.fromPartial(object.ValidBlock) : undefined;
    message.ValidBlockParts = object.ValidBlockParts !== undefined && object.ValidBlockParts !== null ? PartSet.fromPartial(object.ValidBlockParts) : undefined;
    message.Votes = object.Votes !== undefined && object.Votes !== null ? HeightVoteSet.fromPartial(object.Votes) : undefined;
    message.CommitRound = object.CommitRound !== undefined && object.CommitRound !== null ? Long.fromValue(object.CommitRound) : Long.ZERO;
    message.LastCommit = object.LastCommit !== undefined && object.LastCommit !== null ? VoteSet.fromPartial(object.LastCommit) : undefined;
    message.LastValidators = object.LastValidators !== undefined && object.LastValidators !== null ? ValidatorSet.fromPartial(object.LastValidators) : undefined;
    message.TriggeredTimeoutPrecommit = object.TriggeredTimeoutPrecommit ?? false;
    return message;
  }

};

function createBaseHRS(): HRS {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Step: 0
  };
}

export const HRS = {
  encode(message: HRS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Step !== 0) {
      writer.uint32(24).uint32(message.Step);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HRS {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHRS();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.Round = (reader.sint64() as Long);
          break;

        case 3:
          message.Step = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HRS {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Step: isSet(object.Step) ? Number(object.Step) : 0
    };
  },

  toJSON(message: HRS): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Step !== undefined && (obj.Step = Math.round(message.Step));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HRS>, I>>(object: I): HRS {
    const message = createBaseHRS();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Step = object.Step ?? 0;
    return message;
  }

};

function createBaseRoundStateSimple(): RoundStateSimple {
  return {
    HeightRoundStep: "",
    StartTime: undefined,
    ProposalBlockHash: new Uint8Array(),
    LockedBlockHash: new Uint8Array(),
    ValidBlockHash: new Uint8Array(),
    Votes: undefined
  };
}

export const RoundStateSimple = {
  encode(message: RoundStateSimple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HeightRoundStep !== "") {
      writer.uint32(10).string(message.HeightRoundStep);
    }

    if (message.StartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.StartTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.ProposalBlockHash.length !== 0) {
      writer.uint32(26).bytes(message.ProposalBlockHash);
    }

    if (message.LockedBlockHash.length !== 0) {
      writer.uint32(34).bytes(message.LockedBlockHash);
    }

    if (message.ValidBlockHash.length !== 0) {
      writer.uint32(42).bytes(message.ValidBlockHash);
    }

    if (message.Votes !== undefined) {
      HeightVoteSet.encode(message.Votes, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundStateSimple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoundStateSimple();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HeightRoundStep = reader.string();
          break;

        case 2:
          message.StartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ProposalBlockHash = reader.bytes();
          break;

        case 4:
          message.LockedBlockHash = reader.bytes();
          break;

        case 5:
          message.ValidBlockHash = reader.bytes();
          break;

        case 6:
          message.Votes = HeightVoteSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoundStateSimple {
    return {
      HeightRoundStep: isSet(object.HeightRoundStep) ? String(object.HeightRoundStep) : "",
      StartTime: isSet(object.StartTime) ? fromJsonTimestamp(object.StartTime) : undefined,
      ProposalBlockHash: isSet(object.ProposalBlockHash) ? bytesFromBase64(object.ProposalBlockHash) : new Uint8Array(),
      LockedBlockHash: isSet(object.LockedBlockHash) ? bytesFromBase64(object.LockedBlockHash) : new Uint8Array(),
      ValidBlockHash: isSet(object.ValidBlockHash) ? bytesFromBase64(object.ValidBlockHash) : new Uint8Array(),
      Votes: isSet(object.Votes) ? HeightVoteSet.fromJSON(object.Votes) : undefined
    };
  },

  toJSON(message: RoundStateSimple): unknown {
    const obj: any = {};
    message.HeightRoundStep !== undefined && (obj.HeightRoundStep = message.HeightRoundStep);
    message.StartTime !== undefined && (obj.StartTime = message.StartTime.toISOString());
    message.ProposalBlockHash !== undefined && (obj.ProposalBlockHash = base64FromBytes(message.ProposalBlockHash !== undefined ? message.ProposalBlockHash : new Uint8Array()));
    message.LockedBlockHash !== undefined && (obj.LockedBlockHash = base64FromBytes(message.LockedBlockHash !== undefined ? message.LockedBlockHash : new Uint8Array()));
    message.ValidBlockHash !== undefined && (obj.ValidBlockHash = base64FromBytes(message.ValidBlockHash !== undefined ? message.ValidBlockHash : new Uint8Array()));
    message.Votes !== undefined && (obj.Votes = message.Votes ? HeightVoteSet.toJSON(message.Votes) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoundStateSimple>, I>>(object: I): RoundStateSimple {
    const message = createBaseRoundStateSimple();
    message.HeightRoundStep = object.HeightRoundStep ?? "";
    message.StartTime = object.StartTime ?? undefined;
    message.ProposalBlockHash = object.ProposalBlockHash ?? new Uint8Array();
    message.LockedBlockHash = object.LockedBlockHash ?? new Uint8Array();
    message.ValidBlockHash = object.ValidBlockHash ?? new Uint8Array();
    message.Votes = object.Votes !== undefined && object.Votes !== null ? HeightVoteSet.fromPartial(object.Votes) : undefined;
    return message;
  }

};

function createBasePeerRoundState(): PeerRoundState {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Step: 0,
    StartTime: undefined,
    Proposal: false,
    ProposalBlockPartsHeader: undefined,
    ProposalBlockParts: undefined,
    ProposalPOLRound: Long.ZERO,
    ProposalPOL: undefined,
    Prevotes: undefined,
    Precommits: undefined,
    LastCommitRound: Long.ZERO,
    LastCommit: undefined,
    CatchupCommitRound: Long.ZERO,
    CatchupCommit: undefined
  };
}

export const PeerRoundState = {
  encode(message: PeerRoundState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Step !== 0) {
      writer.uint32(24).uint32(message.Step);
    }

    if (message.StartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.StartTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.Proposal === true) {
      writer.uint32(40).bool(message.Proposal);
    }

    if (message.ProposalBlockPartsHeader !== undefined) {
      PartSetHeader.encode(message.ProposalBlockPartsHeader, writer.uint32(50).fork()).ldelim();
    }

    if (message.ProposalBlockParts !== undefined) {
      BitArray.encode(message.ProposalBlockParts, writer.uint32(58).fork()).ldelim();
    }

    if (!message.ProposalPOLRound.isZero()) {
      writer.uint32(64).sint64(message.ProposalPOLRound);
    }

    if (message.ProposalPOL !== undefined) {
      BitArray.encode(message.ProposalPOL, writer.uint32(74).fork()).ldelim();
    }

    if (message.Prevotes !== undefined) {
      BitArray.encode(message.Prevotes, writer.uint32(82).fork()).ldelim();
    }

    if (message.Precommits !== undefined) {
      BitArray.encode(message.Precommits, writer.uint32(90).fork()).ldelim();
    }

    if (!message.LastCommitRound.isZero()) {
      writer.uint32(96).sint64(message.LastCommitRound);
    }

    if (message.LastCommit !== undefined) {
      BitArray.encode(message.LastCommit, writer.uint32(106).fork()).ldelim();
    }

    if (!message.CatchupCommitRound.isZero()) {
      writer.uint32(112).sint64(message.CatchupCommitRound);
    }

    if (message.CatchupCommit !== undefined) {
      BitArray.encode(message.CatchupCommit, writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerRoundState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerRoundState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.Round = (reader.sint64() as Long);
          break;

        case 3:
          message.Step = reader.uint32();
          break;

        case 4:
          message.StartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.Proposal = reader.bool();
          break;

        case 6:
          message.ProposalBlockPartsHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        case 7:
          message.ProposalBlockParts = BitArray.decode(reader, reader.uint32());
          break;

        case 8:
          message.ProposalPOLRound = (reader.sint64() as Long);
          break;

        case 9:
          message.ProposalPOL = BitArray.decode(reader, reader.uint32());
          break;

        case 10:
          message.Prevotes = BitArray.decode(reader, reader.uint32());
          break;

        case 11:
          message.Precommits = BitArray.decode(reader, reader.uint32());
          break;

        case 12:
          message.LastCommitRound = (reader.sint64() as Long);
          break;

        case 13:
          message.LastCommit = BitArray.decode(reader, reader.uint32());
          break;

        case 14:
          message.CatchupCommitRound = (reader.sint64() as Long);
          break;

        case 15:
          message.CatchupCommit = BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PeerRoundState {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Step: isSet(object.Step) ? Number(object.Step) : 0,
      StartTime: isSet(object.StartTime) ? fromJsonTimestamp(object.StartTime) : undefined,
      Proposal: isSet(object.Proposal) ? Boolean(object.Proposal) : false,
      ProposalBlockPartsHeader: isSet(object.ProposalBlockPartsHeader) ? PartSetHeader.fromJSON(object.ProposalBlockPartsHeader) : undefined,
      ProposalBlockParts: isSet(object.ProposalBlockParts) ? BitArray.fromJSON(object.ProposalBlockParts) : undefined,
      ProposalPOLRound: isSet(object.ProposalPOLRound) ? Long.fromString(object.ProposalPOLRound) : Long.ZERO,
      ProposalPOL: isSet(object.ProposalPOL) ? BitArray.fromJSON(object.ProposalPOL) : undefined,
      Prevotes: isSet(object.Prevotes) ? BitArray.fromJSON(object.Prevotes) : undefined,
      Precommits: isSet(object.Precommits) ? BitArray.fromJSON(object.Precommits) : undefined,
      LastCommitRound: isSet(object.LastCommitRound) ? Long.fromString(object.LastCommitRound) : Long.ZERO,
      LastCommit: isSet(object.LastCommit) ? BitArray.fromJSON(object.LastCommit) : undefined,
      CatchupCommitRound: isSet(object.CatchupCommitRound) ? Long.fromString(object.CatchupCommitRound) : Long.ZERO,
      CatchupCommit: isSet(object.CatchupCommit) ? BitArray.fromJSON(object.CatchupCommit) : undefined
    };
  },

  toJSON(message: PeerRoundState): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Step !== undefined && (obj.Step = Math.round(message.Step));
    message.StartTime !== undefined && (obj.StartTime = message.StartTime.toISOString());
    message.Proposal !== undefined && (obj.Proposal = message.Proposal);
    message.ProposalBlockPartsHeader !== undefined && (obj.ProposalBlockPartsHeader = message.ProposalBlockPartsHeader ? PartSetHeader.toJSON(message.ProposalBlockPartsHeader) : undefined);
    message.ProposalBlockParts !== undefined && (obj.ProposalBlockParts = message.ProposalBlockParts ? BitArray.toJSON(message.ProposalBlockParts) : undefined);
    message.ProposalPOLRound !== undefined && (obj.ProposalPOLRound = (message.ProposalPOLRound || Long.ZERO).toString());
    message.ProposalPOL !== undefined && (obj.ProposalPOL = message.ProposalPOL ? BitArray.toJSON(message.ProposalPOL) : undefined);
    message.Prevotes !== undefined && (obj.Prevotes = message.Prevotes ? BitArray.toJSON(message.Prevotes) : undefined);
    message.Precommits !== undefined && (obj.Precommits = message.Precommits ? BitArray.toJSON(message.Precommits) : undefined);
    message.LastCommitRound !== undefined && (obj.LastCommitRound = (message.LastCommitRound || Long.ZERO).toString());
    message.LastCommit !== undefined && (obj.LastCommit = message.LastCommit ? BitArray.toJSON(message.LastCommit) : undefined);
    message.CatchupCommitRound !== undefined && (obj.CatchupCommitRound = (message.CatchupCommitRound || Long.ZERO).toString());
    message.CatchupCommit !== undefined && (obj.CatchupCommit = message.CatchupCommit ? BitArray.toJSON(message.CatchupCommit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerRoundState>, I>>(object: I): PeerRoundState {
    const message = createBasePeerRoundState();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Step = object.Step ?? 0;
    message.StartTime = object.StartTime ?? undefined;
    message.Proposal = object.Proposal ?? false;
    message.ProposalBlockPartsHeader = object.ProposalBlockPartsHeader !== undefined && object.ProposalBlockPartsHeader !== null ? PartSetHeader.fromPartial(object.ProposalBlockPartsHeader) : undefined;
    message.ProposalBlockParts = object.ProposalBlockParts !== undefined && object.ProposalBlockParts !== null ? BitArray.fromPartial(object.ProposalBlockParts) : undefined;
    message.ProposalPOLRound = object.ProposalPOLRound !== undefined && object.ProposalPOLRound !== null ? Long.fromValue(object.ProposalPOLRound) : Long.ZERO;
    message.ProposalPOL = object.ProposalPOL !== undefined && object.ProposalPOL !== null ? BitArray.fromPartial(object.ProposalPOL) : undefined;
    message.Prevotes = object.Prevotes !== undefined && object.Prevotes !== null ? BitArray.fromPartial(object.Prevotes) : undefined;
    message.Precommits = object.Precommits !== undefined && object.Precommits !== null ? BitArray.fromPartial(object.Precommits) : undefined;
    message.LastCommitRound = object.LastCommitRound !== undefined && object.LastCommitRound !== null ? Long.fromValue(object.LastCommitRound) : Long.ZERO;
    message.LastCommit = object.LastCommit !== undefined && object.LastCommit !== null ? BitArray.fromPartial(object.LastCommit) : undefined;
    message.CatchupCommitRound = object.CatchupCommitRound !== undefined && object.CatchupCommitRound !== null ? Long.fromValue(object.CatchupCommitRound) : Long.ZERO;
    message.CatchupCommit = object.CatchupCommit !== undefined && object.CatchupCommit !== null ? BitArray.fromPartial(object.CatchupCommit) : undefined;
    return message;
  }

};

function createBaseHeightVoteSet(): HeightVoteSet {
  return {};
}

export const HeightVoteSet = {
  encode(_: HeightVoteSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeightVoteSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeightVoteSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): HeightVoteSet {
    return {};
  },

  toJSON(_: HeightVoteSet): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeightVoteSet>, I>>(_: I): HeightVoteSet {
    const message = createBaseHeightVoteSet();
    return message;
  }

};

function createBaseEventNewRoundStep(): EventNewRoundStep {
  return {
    HRS: undefined,
    SecondsSinceStartTime: Long.ZERO,
    LastCommitRound: Long.ZERO
  };
}

export const EventNewRoundStep = {
  encode(message: EventNewRoundStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    if (!message.SecondsSinceStartTime.isZero()) {
      writer.uint32(16).sint64(message.SecondsSinceStartTime);
    }

    if (!message.LastCommitRound.isZero()) {
      writer.uint32(24).sint64(message.LastCommitRound);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRoundStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewRoundStep();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        case 2:
          message.SecondsSinceStartTime = (reader.sint64() as Long);
          break;

        case 3:
          message.LastCommitRound = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewRoundStep {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined,
      SecondsSinceStartTime: isSet(object.SecondsSinceStartTime) ? Long.fromString(object.SecondsSinceStartTime) : Long.ZERO,
      LastCommitRound: isSet(object.LastCommitRound) ? Long.fromString(object.LastCommitRound) : Long.ZERO
    };
  },

  toJSON(message: EventNewRoundStep): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    message.SecondsSinceStartTime !== undefined && (obj.SecondsSinceStartTime = (message.SecondsSinceStartTime || Long.ZERO).toString());
    message.LastCommitRound !== undefined && (obj.LastCommitRound = (message.LastCommitRound || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNewRoundStep>, I>>(object: I): EventNewRoundStep {
    const message = createBaseEventNewRoundStep();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    message.SecondsSinceStartTime = object.SecondsSinceStartTime !== undefined && object.SecondsSinceStartTime !== null ? Long.fromValue(object.SecondsSinceStartTime) : Long.ZERO;
    message.LastCommitRound = object.LastCommitRound !== undefined && object.LastCommitRound !== null ? Long.fromValue(object.LastCommitRound) : Long.ZERO;
    return message;
  }

};

function createBaseEventNewValidBlock(): EventNewValidBlock {
  return {
    HRS: undefined,
    BlockPartsHeader: undefined,
    BlockParts: undefined,
    IsCommit: false
  };
}

export const EventNewValidBlock = {
  encode(message: EventNewValidBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    if (message.BlockPartsHeader !== undefined) {
      PartSetHeader.encode(message.BlockPartsHeader, writer.uint32(18).fork()).ldelim();
    }

    if (message.BlockParts !== undefined) {
      BitArray.encode(message.BlockParts, writer.uint32(26).fork()).ldelim();
    }

    if (message.IsCommit === true) {
      writer.uint32(32).bool(message.IsCommit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewValidBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewValidBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        case 2:
          message.BlockPartsHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        case 3:
          message.BlockParts = BitArray.decode(reader, reader.uint32());
          break;

        case 4:
          message.IsCommit = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewValidBlock {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined,
      BlockPartsHeader: isSet(object.BlockPartsHeader) ? PartSetHeader.fromJSON(object.BlockPartsHeader) : undefined,
      BlockParts: isSet(object.BlockParts) ? BitArray.fromJSON(object.BlockParts) : undefined,
      IsCommit: isSet(object.IsCommit) ? Boolean(object.IsCommit) : false
    };
  },

  toJSON(message: EventNewValidBlock): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    message.BlockPartsHeader !== undefined && (obj.BlockPartsHeader = message.BlockPartsHeader ? PartSetHeader.toJSON(message.BlockPartsHeader) : undefined);
    message.BlockParts !== undefined && (obj.BlockParts = message.BlockParts ? BitArray.toJSON(message.BlockParts) : undefined);
    message.IsCommit !== undefined && (obj.IsCommit = message.IsCommit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNewValidBlock>, I>>(object: I): EventNewValidBlock {
    const message = createBaseEventNewValidBlock();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    message.BlockPartsHeader = object.BlockPartsHeader !== undefined && object.BlockPartsHeader !== null ? PartSetHeader.fromPartial(object.BlockPartsHeader) : undefined;
    message.BlockParts = object.BlockParts !== undefined && object.BlockParts !== null ? BitArray.fromPartial(object.BlockParts) : undefined;
    message.IsCommit = object.IsCommit ?? false;
    return message;
  }

};

function createBaseEventNewRound(): EventNewRound {
  return {
    HRS: undefined,
    Proposer: undefined,
    ProposerIndex: Long.ZERO
  };
}

export const EventNewRound = {
  encode(message: EventNewRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    if (message.Proposer !== undefined) {
      Validator.encode(message.Proposer, writer.uint32(18).fork()).ldelim();
    }

    if (!message.ProposerIndex.isZero()) {
      writer.uint32(24).sint64(message.ProposerIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewRound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        case 2:
          message.Proposer = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.ProposerIndex = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewRound {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined,
      Proposer: isSet(object.Proposer) ? Validator.fromJSON(object.Proposer) : undefined,
      ProposerIndex: isSet(object.ProposerIndex) ? Long.fromString(object.ProposerIndex) : Long.ZERO
    };
  },

  toJSON(message: EventNewRound): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    message.Proposer !== undefined && (obj.Proposer = message.Proposer ? Validator.toJSON(message.Proposer) : undefined);
    message.ProposerIndex !== undefined && (obj.ProposerIndex = (message.ProposerIndex || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNewRound>, I>>(object: I): EventNewRound {
    const message = createBaseEventNewRound();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    message.Proposer = object.Proposer !== undefined && object.Proposer !== null ? Validator.fromPartial(object.Proposer) : undefined;
    message.ProposerIndex = object.ProposerIndex !== undefined && object.ProposerIndex !== null ? Long.fromValue(object.ProposerIndex) : Long.ZERO;
    return message;
  }

};

function createBaseEventCompleteProposal(): EventCompleteProposal {
  return {
    HRS: undefined,
    BlockID: undefined
  };
}

export const EventCompleteProposal = {
  encode(message: EventCompleteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        case 2:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCompleteProposal {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined
    };
  },

  toJSON(message: EventCompleteProposal): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCompleteProposal>, I>>(object: I): EventCompleteProposal {
    const message = createBaseEventCompleteProposal();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    return message;
  }

};

function createBaseEventTimeoutPropose(): EventTimeoutPropose {
  return {
    HRS: undefined
  };
}

export const EventTimeoutPropose = {
  encode(message: EventTimeoutPropose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutPropose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTimeoutPropose();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTimeoutPropose {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined
    };
  },

  toJSON(message: EventTimeoutPropose): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTimeoutPropose>, I>>(object: I): EventTimeoutPropose {
    const message = createBaseEventTimeoutPropose();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    return message;
  }

};

function createBaseEventTimeoutWait(): EventTimeoutWait {
  return {
    HRS: undefined
  };
}

export const EventTimeoutWait = {
  encode(message: EventTimeoutWait, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutWait {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTimeoutWait();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.HRS = HRS.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTimeoutWait {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined
    };
  },

  toJSON(message: EventTimeoutWait): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTimeoutWait>, I>>(object: I): EventTimeoutWait {
    const message = createBaseEventTimeoutWait();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    return message;
  }

};