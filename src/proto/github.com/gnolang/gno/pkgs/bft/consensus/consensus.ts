/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PartSetHeader, Proposal, Part, Vote, BlockID } from "../../../../../../github.com/gnolang/gno/pkgs/bft/types/types";
import { BitArray } from "../../../../../../github.com/gnolang/gno/pkgs/bitarray/bitarray";
import { HRS } from "../../../../../../github.com/gnolang/gno/pkgs/bft/consensus/types/types";
import { Any } from "../../../../../../google/protobuf/any";
import { Duration } from "../../../../../../google/protobuf/duration";

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
  Duration: Duration;
  Height: Long;
  Round: Long;
  Step: number;
}

function createBaseNewRoundStepMessage(): NewRoundStepMessage {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Step: 0,
    SecondsSinceStartTime: Long.ZERO,
    LastCommitRound: Long.ZERO
  };
}

export const NewRoundStepMessage = {
  encode(message: NewRoundStepMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Step !== 0) {
      writer.uint32(24).uint32(message.Step);
    }

    if (!message.SecondsSinceStartTime.isZero()) {
      writer.uint32(32).sint64(message.SecondsSinceStartTime);
    }

    if (!message.LastCommitRound.isZero()) {
      writer.uint32(40).sint64(message.LastCommitRound);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewRoundStepMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewRoundStepMessage();

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
          message.SecondsSinceStartTime = (reader.sint64() as Long);
          break;

        case 5:
          message.LastCommitRound = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NewRoundStepMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Step: isSet(object.Step) ? Number(object.Step) : 0,
      SecondsSinceStartTime: isSet(object.SecondsSinceStartTime) ? Long.fromString(object.SecondsSinceStartTime) : Long.ZERO,
      LastCommitRound: isSet(object.LastCommitRound) ? Long.fromString(object.LastCommitRound) : Long.ZERO
    };
  },

  toJSON(message: NewRoundStepMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Step !== undefined && (obj.Step = Math.round(message.Step));
    message.SecondsSinceStartTime !== undefined && (obj.SecondsSinceStartTime = (message.SecondsSinceStartTime || Long.ZERO).toString());
    message.LastCommitRound !== undefined && (obj.LastCommitRound = (message.LastCommitRound || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewRoundStepMessage>, I>>(object: I): NewRoundStepMessage {
    const message = createBaseNewRoundStepMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Step = object.Step ?? 0;
    message.SecondsSinceStartTime = object.SecondsSinceStartTime !== undefined && object.SecondsSinceStartTime !== null ? Long.fromValue(object.SecondsSinceStartTime) : Long.ZERO;
    message.LastCommitRound = object.LastCommitRound !== undefined && object.LastCommitRound !== null ? Long.fromValue(object.LastCommitRound) : Long.ZERO;
    return message;
  }

};

function createBaseNewValidBlockMessage(): NewValidBlockMessage {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    BlockPartsHeader: undefined,
    BlockParts: undefined,
    IsCommit: false
  };
}

export const NewValidBlockMessage = {
  encode(message: NewValidBlockMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.BlockPartsHeader !== undefined) {
      PartSetHeader.encode(message.BlockPartsHeader, writer.uint32(26).fork()).ldelim();
    }

    if (message.BlockParts !== undefined) {
      BitArray.encode(message.BlockParts, writer.uint32(34).fork()).ldelim();
    }

    if (message.IsCommit === true) {
      writer.uint32(40).bool(message.IsCommit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewValidBlockMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewValidBlockMessage();

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
          message.BlockPartsHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        case 4:
          message.BlockParts = BitArray.decode(reader, reader.uint32());
          break;

        case 5:
          message.IsCommit = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): NewValidBlockMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      BlockPartsHeader: isSet(object.BlockPartsHeader) ? PartSetHeader.fromJSON(object.BlockPartsHeader) : undefined,
      BlockParts: isSet(object.BlockParts) ? BitArray.fromJSON(object.BlockParts) : undefined,
      IsCommit: isSet(object.IsCommit) ? Boolean(object.IsCommit) : false
    };
  },

  toJSON(message: NewValidBlockMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.BlockPartsHeader !== undefined && (obj.BlockPartsHeader = message.BlockPartsHeader ? PartSetHeader.toJSON(message.BlockPartsHeader) : undefined);
    message.BlockParts !== undefined && (obj.BlockParts = message.BlockParts ? BitArray.toJSON(message.BlockParts) : undefined);
    message.IsCommit !== undefined && (obj.IsCommit = message.IsCommit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewValidBlockMessage>, I>>(object: I): NewValidBlockMessage {
    const message = createBaseNewValidBlockMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.BlockPartsHeader = object.BlockPartsHeader !== undefined && object.BlockPartsHeader !== null ? PartSetHeader.fromPartial(object.BlockPartsHeader) : undefined;
    message.BlockParts = object.BlockParts !== undefined && object.BlockParts !== null ? BitArray.fromPartial(object.BlockParts) : undefined;
    message.IsCommit = object.IsCommit ?? false;
    return message;
  }

};

function createBaseProposalMessage(): ProposalMessage {
  return {
    Proposal: undefined
  };
}

export const ProposalMessage = {
  encode(message: ProposalMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Proposal !== undefined) {
      Proposal.encode(message.Proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Proposal = Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProposalMessage {
    return {
      Proposal: isSet(object.Proposal) ? Proposal.fromJSON(object.Proposal) : undefined
    };
  },

  toJSON(message: ProposalMessage): unknown {
    const obj: any = {};
    message.Proposal !== undefined && (obj.Proposal = message.Proposal ? Proposal.toJSON(message.Proposal) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalMessage>, I>>(object: I): ProposalMessage {
    const message = createBaseProposalMessage();
    message.Proposal = object.Proposal !== undefined && object.Proposal !== null ? Proposal.fromPartial(object.Proposal) : undefined;
    return message;
  }

};

function createBaseProposalPOLMessage(): ProposalPOLMessage {
  return {
    Height: Long.ZERO,
    ProposalPOLRound: Long.ZERO,
    ProposalPOL: undefined
  };
}

export const ProposalPOLMessage = {
  encode(message: ProposalPOLMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.ProposalPOLRound.isZero()) {
      writer.uint32(16).sint64(message.ProposalPOLRound);
    }

    if (message.ProposalPOL !== undefined) {
      BitArray.encode(message.ProposalPOL, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalPOLMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalPOLMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.ProposalPOLRound = (reader.sint64() as Long);
          break;

        case 3:
          message.ProposalPOL = BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProposalPOLMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      ProposalPOLRound: isSet(object.ProposalPOLRound) ? Long.fromString(object.ProposalPOLRound) : Long.ZERO,
      ProposalPOL: isSet(object.ProposalPOL) ? BitArray.fromJSON(object.ProposalPOL) : undefined
    };
  },

  toJSON(message: ProposalPOLMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.ProposalPOLRound !== undefined && (obj.ProposalPOLRound = (message.ProposalPOLRound || Long.ZERO).toString());
    message.ProposalPOL !== undefined && (obj.ProposalPOL = message.ProposalPOL ? BitArray.toJSON(message.ProposalPOL) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalPOLMessage>, I>>(object: I): ProposalPOLMessage {
    const message = createBaseProposalPOLMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.ProposalPOLRound = object.ProposalPOLRound !== undefined && object.ProposalPOLRound !== null ? Long.fromValue(object.ProposalPOLRound) : Long.ZERO;
    message.ProposalPOL = object.ProposalPOL !== undefined && object.ProposalPOL !== null ? BitArray.fromPartial(object.ProposalPOL) : undefined;
    return message;
  }

};

function createBaseBlockPartMessage(): BlockPartMessage {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Part: undefined
  };
}

export const BlockPartMessage = {
  encode(message: BlockPartMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Part !== undefined) {
      Part.encode(message.Part, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockPartMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockPartMessage();

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
          message.Part = Part.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockPartMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Part: isSet(object.Part) ? Part.fromJSON(object.Part) : undefined
    };
  },

  toJSON(message: BlockPartMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Part !== undefined && (obj.Part = message.Part ? Part.toJSON(message.Part) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockPartMessage>, I>>(object: I): BlockPartMessage {
    const message = createBaseBlockPartMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Part = object.Part !== undefined && object.Part !== null ? Part.fromPartial(object.Part) : undefined;
    return message;
  }

};

function createBaseVoteMessage(): VoteMessage {
  return {
    Vote: undefined
  };
}

export const VoteMessage = {
  encode(message: VoteMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Vote !== undefined) {
      Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Vote = Vote.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteMessage {
    return {
      Vote: isSet(object.Vote) ? Vote.fromJSON(object.Vote) : undefined
    };
  },

  toJSON(message: VoteMessage): unknown {
    const obj: any = {};
    message.Vote !== undefined && (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteMessage>, I>>(object: I): VoteMessage {
    const message = createBaseVoteMessage();
    message.Vote = object.Vote !== undefined && object.Vote !== null ? Vote.fromPartial(object.Vote) : undefined;
    return message;
  }

};

function createBaseHasVoteMessage(): HasVoteMessage {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Type: 0,
    Index: Long.ZERO
  };
}

export const HasVoteMessage = {
  encode(message: HasVoteMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Type !== 0) {
      writer.uint32(24).uint32(message.Type);
    }

    if (!message.Index.isZero()) {
      writer.uint32(32).sint64(message.Index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HasVoteMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasVoteMessage();

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
          message.Type = reader.uint32();
          break;

        case 4:
          message.Index = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HasVoteMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Index: isSet(object.Index) ? Long.fromString(object.Index) : Long.ZERO
    };
  },

  toJSON(message: HasVoteMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.Index !== undefined && (obj.Index = (message.Index || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HasVoteMessage>, I>>(object: I): HasVoteMessage {
    const message = createBaseHasVoteMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Type = object.Type ?? 0;
    message.Index = object.Index !== undefined && object.Index !== null ? Long.fromValue(object.Index) : Long.ZERO;
    return message;
  }

};

function createBaseVoteSetMaj23Message(): VoteSetMaj23Message {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Type: 0,
    BlockID: undefined
  };
}

export const VoteSetMaj23Message = {
  encode(message: VoteSetMaj23Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Type !== 0) {
      writer.uint32(24).uint32(message.Type);
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetMaj23Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetMaj23Message();

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
          message.Type = reader.uint32();
          break;

        case 4:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteSetMaj23Message {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined
    };
  },

  toJSON(message: VoteSetMaj23Message): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSetMaj23Message>, I>>(object: I): VoteSetMaj23Message {
    const message = createBaseVoteSetMaj23Message();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Type = object.Type ?? 0;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    return message;
  }

};

function createBaseVoteSetBitsMessage(): VoteSetBitsMessage {
  return {
    Height: Long.ZERO,
    Round: Long.ZERO,
    Type: 0,
    BlockID: undefined,
    Votes: undefined
  };
}

export const VoteSetBitsMessage = {
  encode(message: VoteSetBitsMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(16).sint64(message.Round);
    }

    if (message.Type !== 0) {
      writer.uint32(24).uint32(message.Type);
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(34).fork()).ldelim();
    }

    if (message.Votes !== undefined) {
      BitArray.encode(message.Votes, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetBitsMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSetBitsMessage();

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
          message.Type = reader.uint32();
          break;

        case 4:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.Votes = BitArray.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteSetBitsMessage {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined,
      Votes: isSet(object.Votes) ? BitArray.fromJSON(object.Votes) : undefined
    };
  },

  toJSON(message: VoteSetBitsMessage): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    message.Votes !== undefined && (obj.Votes = message.Votes ? BitArray.toJSON(message.Votes) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSetBitsMessage>, I>>(object: I): VoteSetBitsMessage {
    const message = createBaseVoteSetBitsMessage();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Type = object.Type ?? 0;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    message.Votes = object.Votes !== undefined && object.Votes !== null ? BitArray.fromPartial(object.Votes) : undefined;
    return message;
  }

};

function createBasenewRoundStepInfo(): newRoundStepInfo {
  return {
    HRS: undefined
  };
}

export const newRoundStepInfo = {
  encode(message: newRoundStepInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.HRS !== undefined) {
      HRS.encode(message.HRS, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): newRoundStepInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasenewRoundStepInfo();

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

  fromJSON(object: any): newRoundStepInfo {
    return {
      HRS: isSet(object.HRS) ? HRS.fromJSON(object.HRS) : undefined
    };
  },

  toJSON(message: newRoundStepInfo): unknown {
    const obj: any = {};
    message.HRS !== undefined && (obj.HRS = message.HRS ? HRS.toJSON(message.HRS) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<newRoundStepInfo>, I>>(object: I): newRoundStepInfo {
    const message = createBasenewRoundStepInfo();
    message.HRS = object.HRS !== undefined && object.HRS !== null ? HRS.fromPartial(object.HRS) : undefined;
    return message;
  }

};

function createBasemsgInfo(): msgInfo {
  return {
    Msg: undefined,
    PeerID: ""
  };
}

export const msgInfo = {
  encode(message: msgInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Msg !== undefined) {
      Any.encode(message.Msg, writer.uint32(10).fork()).ldelim();
    }

    if (message.PeerID !== "") {
      writer.uint32(18).string(message.PeerID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): msgInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemsgInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Msg = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.PeerID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): msgInfo {
    return {
      Msg: isSet(object.Msg) ? Any.fromJSON(object.Msg) : undefined,
      PeerID: isSet(object.PeerID) ? String(object.PeerID) : ""
    };
  },

  toJSON(message: msgInfo): unknown {
    const obj: any = {};
    message.Msg !== undefined && (obj.Msg = message.Msg ? Any.toJSON(message.Msg) : undefined);
    message.PeerID !== undefined && (obj.PeerID = message.PeerID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<msgInfo>, I>>(object: I): msgInfo {
    const message = createBasemsgInfo();
    message.Msg = object.Msg !== undefined && object.Msg !== null ? Any.fromPartial(object.Msg) : undefined;
    message.PeerID = object.PeerID ?? "";
    return message;
  }

};

function createBasetimeoutInfo(): timeoutInfo {
  return {
    Duration: undefined,
    Height: Long.ZERO,
    Round: Long.ZERO,
    Step: 0
  };
}

export const timeoutInfo = {
  encode(message: timeoutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Duration !== undefined) {
      Duration.encode(message.Duration, writer.uint32(10).fork()).ldelim();
    }

    if (!message.Height.isZero()) {
      writer.uint32(16).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(24).sint64(message.Round);
    }

    if (message.Step !== 0) {
      writer.uint32(32).uint32(message.Step);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): timeoutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasetimeoutInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Duration = Duration.decode(reader, reader.uint32());
          break;

        case 2:
          message.Height = (reader.sint64() as Long);
          break;

        case 3:
          message.Round = (reader.sint64() as Long);
          break;

        case 4:
          message.Step = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): timeoutInfo {
    return {
      Duration: isSet(object.Duration) ? Duration.fromJSON(object.Duration) : undefined,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      Step: isSet(object.Step) ? Number(object.Step) : 0
    };
  },

  toJSON(message: timeoutInfo): unknown {
    const obj: any = {};
    message.Duration !== undefined && (obj.Duration = message.Duration ? Duration.toJSON(message.Duration) : undefined);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.Step !== undefined && (obj.Step = Math.round(message.Step));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<timeoutInfo>, I>>(object: I): timeoutInfo {
    const message = createBasetimeoutInfo();
    message.Duration = object.Duration !== undefined && object.Duration !== null ? Duration.fromPartial(object.Duration) : undefined;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.Step = object.Step ?? 0;
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}