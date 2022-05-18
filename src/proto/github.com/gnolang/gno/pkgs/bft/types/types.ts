import { Timestamp } from "../../../../../../google/protobuf/timestamp";
import { SimpleProof } from "../../crypto/merkle/merkle";
import { Any } from "../../../../../../google/protobuf/any";
import { ResponseBeginBlock, ResponseEndBlock, ValidatorUpdate, ResponseDeliverTx } from "../abci/types/abci";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";

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
export interface PartSet {}
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
export interface VoteSet {}
export interface TYPES_BytesList {
  Value: Uint8Array[];
}

function createBaseProposal(): Proposal {
  return {
    Type: 0,
    Height: Long.ZERO,
    Round: Long.ZERO,
    POLRound: Long.ZERO,
    BlockID: undefined,
    Timestamp: undefined,
    Signature: new Uint8Array()
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).uint32(message.Type);
    }

    if (!message.Height.isZero()) {
      writer.uint32(16).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(24).sint64(message.Round);
    }

    if (!message.POLRound.isZero()) {
      writer.uint32(32).sint64(message.POLRound);
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(42).fork()).ldelim();
    }

    if (message.Timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.Timestamp), writer.uint32(50).fork()).ldelim();
    }

    if (message.Signature.length !== 0) {
      writer.uint32(58).bytes(message.Signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = reader.uint32();
          break;

        case 2:
          message.Height = (reader.sint64() as Long);
          break;

        case 3:
          message.Round = (reader.sint64() as Long);
          break;

        case 4:
          message.POLRound = (reader.sint64() as Long);
          break;

        case 5:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.Timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.Signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      POLRound: isSet(object.POLRound) ? Long.fromString(object.POLRound) : Long.ZERO,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined,
      Timestamp: isSet(object.Timestamp) ? fromJsonTimestamp(object.Timestamp) : undefined,
      Signature: isSet(object.Signature) ? bytesFromBase64(object.Signature) : new Uint8Array()
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.POLRound !== undefined && (obj.POLRound = (message.POLRound || Long.ZERO).toString());
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    message.Timestamp !== undefined && (obj.Timestamp = message.Timestamp.toISOString());
    message.Signature !== undefined && (obj.Signature = base64FromBytes(message.Signature !== undefined ? message.Signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.Type = object.Type ?? 0;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.POLRound = object.POLRound !== undefined && object.POLRound !== null ? Long.fromValue(object.POLRound) : Long.ZERO;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    message.Timestamp = object.Timestamp ?? undefined;
    message.Signature = object.Signature ?? new Uint8Array();
    return message;
  }

};

function createBaseBlock(): Block {
  return {
    Header: undefined,
    Data: undefined,
    LastCommit: undefined
  };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Header !== undefined) {
      Header.encode(message.Header, writer.uint32(10).fork()).ldelim();
    }

    if (message.Data !== undefined) {
      Data.encode(message.Data, writer.uint32(18).fork()).ldelim();
    }

    if (message.LastCommit !== undefined) {
      Commit.encode(message.LastCommit, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.Data = Data.decode(reader, reader.uint32());
          break;

        case 3:
          message.LastCommit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Block {
    return {
      Header: isSet(object.Header) ? Header.fromJSON(object.Header) : undefined,
      Data: isSet(object.Data) ? Data.fromJSON(object.Data) : undefined,
      LastCommit: isSet(object.LastCommit) ? Commit.fromJSON(object.LastCommit) : undefined
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.Header !== undefined && (obj.Header = message.Header ? Header.toJSON(message.Header) : undefined);
    message.Data !== undefined && (obj.Data = message.Data ? Data.toJSON(message.Data) : undefined);
    message.LastCommit !== undefined && (obj.LastCommit = message.LastCommit ? Commit.toJSON(message.LastCommit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.Header = object.Header !== undefined && object.Header !== null ? Header.fromPartial(object.Header) : undefined;
    message.Data = object.Data !== undefined && object.Data !== null ? Data.fromPartial(object.Data) : undefined;
    message.LastCommit = object.LastCommit !== undefined && object.LastCommit !== null ? Commit.fromPartial(object.LastCommit) : undefined;
    return message;
  }

};

function createBaseHeader(): Header {
  return {
    Version: "",
    ChainID: "",
    Height: Long.ZERO,
    Time: undefined,
    NumTxs: Long.ZERO,
    TotalTxs: Long.ZERO,
    AppVersion: "",
    LastBlockID: undefined,
    LastCommitHash: new Uint8Array(),
    DataHash: new Uint8Array(),
    ValidatorsHash: new Uint8Array(),
    NextValidatorsHash: new Uint8Array(),
    ConsensusHash: new Uint8Array(),
    AppHash: new Uint8Array(),
    LastResultsHash: new Uint8Array(),
    ProposerAddress: ""
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Version !== "") {
      writer.uint32(10).string(message.Version);
    }

    if (message.ChainID !== "") {
      writer.uint32(18).string(message.ChainID);
    }

    if (!message.Height.isZero()) {
      writer.uint32(24).sint64(message.Height);
    }

    if (message.Time !== undefined) {
      Timestamp.encode(toTimestamp(message.Time), writer.uint32(34).fork()).ldelim();
    }

    if (!message.NumTxs.isZero()) {
      writer.uint32(40).sint64(message.NumTxs);
    }

    if (!message.TotalTxs.isZero()) {
      writer.uint32(48).sint64(message.TotalTxs);
    }

    if (message.AppVersion !== "") {
      writer.uint32(58).string(message.AppVersion);
    }

    if (message.LastBlockID !== undefined) {
      BlockID.encode(message.LastBlockID, writer.uint32(66).fork()).ldelim();
    }

    if (message.LastCommitHash.length !== 0) {
      writer.uint32(74).bytes(message.LastCommitHash);
    }

    if (message.DataHash.length !== 0) {
      writer.uint32(82).bytes(message.DataHash);
    }

    if (message.ValidatorsHash.length !== 0) {
      writer.uint32(90).bytes(message.ValidatorsHash);
    }

    if (message.NextValidatorsHash.length !== 0) {
      writer.uint32(98).bytes(message.NextValidatorsHash);
    }

    if (message.ConsensusHash.length !== 0) {
      writer.uint32(106).bytes(message.ConsensusHash);
    }

    if (message.AppHash.length !== 0) {
      writer.uint32(114).bytes(message.AppHash);
    }

    if (message.LastResultsHash.length !== 0) {
      writer.uint32(122).bytes(message.LastResultsHash);
    }

    if (message.ProposerAddress !== "") {
      writer.uint32(130).string(message.ProposerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Version = reader.string();
          break;

        case 2:
          message.ChainID = reader.string();
          break;

        case 3:
          message.Height = (reader.sint64() as Long);
          break;

        case 4:
          message.Time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.NumTxs = (reader.sint64() as Long);
          break;

        case 6:
          message.TotalTxs = (reader.sint64() as Long);
          break;

        case 7:
          message.AppVersion = reader.string();
          break;

        case 8:
          message.LastBlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 9:
          message.LastCommitHash = reader.bytes();
          break;

        case 10:
          message.DataHash = reader.bytes();
          break;

        case 11:
          message.ValidatorsHash = reader.bytes();
          break;

        case 12:
          message.NextValidatorsHash = reader.bytes();
          break;

        case 13:
          message.ConsensusHash = reader.bytes();
          break;

        case 14:
          message.AppHash = reader.bytes();
          break;

        case 15:
          message.LastResultsHash = reader.bytes();
          break;

        case 16:
          message.ProposerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Header {
    return {
      Version: isSet(object.Version) ? String(object.Version) : "",
      ChainID: isSet(object.ChainID) ? String(object.ChainID) : "",
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Time: isSet(object.Time) ? fromJsonTimestamp(object.Time) : undefined,
      NumTxs: isSet(object.NumTxs) ? Long.fromString(object.NumTxs) : Long.ZERO,
      TotalTxs: isSet(object.TotalTxs) ? Long.fromString(object.TotalTxs) : Long.ZERO,
      AppVersion: isSet(object.AppVersion) ? String(object.AppVersion) : "",
      LastBlockID: isSet(object.LastBlockID) ? BlockID.fromJSON(object.LastBlockID) : undefined,
      LastCommitHash: isSet(object.LastCommitHash) ? bytesFromBase64(object.LastCommitHash) : new Uint8Array(),
      DataHash: isSet(object.DataHash) ? bytesFromBase64(object.DataHash) : new Uint8Array(),
      ValidatorsHash: isSet(object.ValidatorsHash) ? bytesFromBase64(object.ValidatorsHash) : new Uint8Array(),
      NextValidatorsHash: isSet(object.NextValidatorsHash) ? bytesFromBase64(object.NextValidatorsHash) : new Uint8Array(),
      ConsensusHash: isSet(object.ConsensusHash) ? bytesFromBase64(object.ConsensusHash) : new Uint8Array(),
      AppHash: isSet(object.AppHash) ? bytesFromBase64(object.AppHash) : new Uint8Array(),
      LastResultsHash: isSet(object.LastResultsHash) ? bytesFromBase64(object.LastResultsHash) : new Uint8Array(),
      ProposerAddress: isSet(object.ProposerAddress) ? String(object.ProposerAddress) : ""
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = message.Version);
    message.ChainID !== undefined && (obj.ChainID = message.ChainID);
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Time !== undefined && (obj.Time = message.Time.toISOString());
    message.NumTxs !== undefined && (obj.NumTxs = (message.NumTxs || Long.ZERO).toString());
    message.TotalTxs !== undefined && (obj.TotalTxs = (message.TotalTxs || Long.ZERO).toString());
    message.AppVersion !== undefined && (obj.AppVersion = message.AppVersion);
    message.LastBlockID !== undefined && (obj.LastBlockID = message.LastBlockID ? BlockID.toJSON(message.LastBlockID) : undefined);
    message.LastCommitHash !== undefined && (obj.LastCommitHash = base64FromBytes(message.LastCommitHash !== undefined ? message.LastCommitHash : new Uint8Array()));
    message.DataHash !== undefined && (obj.DataHash = base64FromBytes(message.DataHash !== undefined ? message.DataHash : new Uint8Array()));
    message.ValidatorsHash !== undefined && (obj.ValidatorsHash = base64FromBytes(message.ValidatorsHash !== undefined ? message.ValidatorsHash : new Uint8Array()));
    message.NextValidatorsHash !== undefined && (obj.NextValidatorsHash = base64FromBytes(message.NextValidatorsHash !== undefined ? message.NextValidatorsHash : new Uint8Array()));
    message.ConsensusHash !== undefined && (obj.ConsensusHash = base64FromBytes(message.ConsensusHash !== undefined ? message.ConsensusHash : new Uint8Array()));
    message.AppHash !== undefined && (obj.AppHash = base64FromBytes(message.AppHash !== undefined ? message.AppHash : new Uint8Array()));
    message.LastResultsHash !== undefined && (obj.LastResultsHash = base64FromBytes(message.LastResultsHash !== undefined ? message.LastResultsHash : new Uint8Array()));
    message.ProposerAddress !== undefined && (obj.ProposerAddress = message.ProposerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    message.Version = object.Version ?? "";
    message.ChainID = object.ChainID ?? "";
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Time = object.Time ?? undefined;
    message.NumTxs = object.NumTxs !== undefined && object.NumTxs !== null ? Long.fromValue(object.NumTxs) : Long.ZERO;
    message.TotalTxs = object.TotalTxs !== undefined && object.TotalTxs !== null ? Long.fromValue(object.TotalTxs) : Long.ZERO;
    message.AppVersion = object.AppVersion ?? "";
    message.LastBlockID = object.LastBlockID !== undefined && object.LastBlockID !== null ? BlockID.fromPartial(object.LastBlockID) : undefined;
    message.LastCommitHash = object.LastCommitHash ?? new Uint8Array();
    message.DataHash = object.DataHash ?? new Uint8Array();
    message.ValidatorsHash = object.ValidatorsHash ?? new Uint8Array();
    message.NextValidatorsHash = object.NextValidatorsHash ?? new Uint8Array();
    message.ConsensusHash = object.ConsensusHash ?? new Uint8Array();
    message.AppHash = object.AppHash ?? new Uint8Array();
    message.LastResultsHash = object.LastResultsHash ?? new Uint8Array();
    message.ProposerAddress = object.ProposerAddress ?? "";
    return message;
  }

};

function createBaseData(): Data {
  return {
    Txs: []
  };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Txs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Txs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Data {
    return {
      Txs: Array.isArray(object?.Txs) ? object.Txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};

    if (message.Txs) {
      obj.Txs = message.Txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Txs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    message.Txs = object.Txs?.map(e => e) || [];
    return message;
  }

};

function createBaseCommit(): Commit {
  return {
    BlockID: undefined,
    Precommits: []
  };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.Precommits) {
      CommitSig.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.Precommits.push(CommitSig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Commit {
    return {
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined,
      Precommits: Array.isArray(object?.Precommits) ? object.Precommits.map((e: any) => CommitSig.fromJSON(e)) : []
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);

    if (message.Precommits) {
      obj.Precommits = message.Precommits.map(e => e ? CommitSig.toJSON(e) : undefined);
    } else {
      obj.Precommits = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit {
    const message = createBaseCommit();
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    message.Precommits = object.Precommits?.map(e => CommitSig.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBlockID(): BlockID {
  return {
    Hash: new Uint8Array(),
    PartsHeader: undefined
  };
}

export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Hash.length !== 0) {
      writer.uint32(10).bytes(message.Hash);
    }

    if (message.PartsHeader !== undefined) {
      PartSetHeader.encode(message.PartsHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Hash = reader.bytes();
          break;

        case 2:
          message.PartsHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockID {
    return {
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array(),
      PartsHeader: isSet(object.PartsHeader) ? PartSetHeader.fromJSON(object.PartsHeader) : undefined
    };
  },

  toJSON(message: BlockID): unknown {
    const obj: any = {};
    message.Hash !== undefined && (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    message.PartsHeader !== undefined && (obj.PartsHeader = message.PartsHeader ? PartSetHeader.toJSON(message.PartsHeader) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockID>, I>>(object: I): BlockID {
    const message = createBaseBlockID();
    message.Hash = object.Hash ?? new Uint8Array();
    message.PartsHeader = object.PartsHeader !== undefined && object.PartsHeader !== null ? PartSetHeader.fromPartial(object.PartsHeader) : undefined;
    return message;
  }

};

function createBaseCommitSig(): CommitSig {
  return {
    Type: 0,
    Height: Long.ZERO,
    Round: Long.ZERO,
    BlockID: undefined,
    Timestamp: undefined,
    ValidatorAddress: "",
    ValidatorIndex: Long.ZERO,
    Signature: new Uint8Array()
  };
}

export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).uint32(message.Type);
    }

    if (!message.Height.isZero()) {
      writer.uint32(16).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(24).sint64(message.Round);
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(34).fork()).ldelim();
    }

    if (message.Timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.Timestamp), writer.uint32(42).fork()).ldelim();
    }

    if (message.ValidatorAddress !== "") {
      writer.uint32(50).string(message.ValidatorAddress);
    }

    if (!message.ValidatorIndex.isZero()) {
      writer.uint32(56).sint64(message.ValidatorIndex);
    }

    if (message.Signature.length !== 0) {
      writer.uint32(66).bytes(message.Signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = reader.uint32();
          break;

        case 2:
          message.Height = (reader.sint64() as Long);
          break;

        case 3:
          message.Round = (reader.sint64() as Long);
          break;

        case 4:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.Timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.ValidatorAddress = reader.string();
          break;

        case 7:
          message.ValidatorIndex = (reader.sint64() as Long);
          break;

        case 8:
          message.Signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitSig {
    return {
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined,
      Timestamp: isSet(object.Timestamp) ? fromJsonTimestamp(object.Timestamp) : undefined,
      ValidatorAddress: isSet(object.ValidatorAddress) ? String(object.ValidatorAddress) : "",
      ValidatorIndex: isSet(object.ValidatorIndex) ? Long.fromString(object.ValidatorIndex) : Long.ZERO,
      Signature: isSet(object.Signature) ? bytesFromBase64(object.Signature) : new Uint8Array()
    };
  },

  toJSON(message: CommitSig): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    message.Timestamp !== undefined && (obj.Timestamp = message.Timestamp.toISOString());
    message.ValidatorAddress !== undefined && (obj.ValidatorAddress = message.ValidatorAddress);
    message.ValidatorIndex !== undefined && (obj.ValidatorIndex = (message.ValidatorIndex || Long.ZERO).toString());
    message.Signature !== undefined && (obj.Signature = base64FromBytes(message.Signature !== undefined ? message.Signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitSig>, I>>(object: I): CommitSig {
    const message = createBaseCommitSig();
    message.Type = object.Type ?? 0;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    message.Timestamp = object.Timestamp ?? undefined;
    message.ValidatorAddress = object.ValidatorAddress ?? "";
    message.ValidatorIndex = object.ValidatorIndex !== undefined && object.ValidatorIndex !== null ? Long.fromValue(object.ValidatorIndex) : Long.ZERO;
    message.Signature = object.Signature ?? new Uint8Array();
    return message;
  }

};

function createBaseVote(): Vote {
  return {
    Type: 0,
    Height: Long.ZERO,
    Round: Long.ZERO,
    BlockID: undefined,
    Timestamp: undefined,
    ValidatorAddress: "",
    ValidatorIndex: Long.ZERO,
    Signature: new Uint8Array()
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).uint32(message.Type);
    }

    if (!message.Height.isZero()) {
      writer.uint32(16).sint64(message.Height);
    }

    if (!message.Round.isZero()) {
      writer.uint32(24).sint64(message.Round);
    }

    if (message.BlockID !== undefined) {
      BlockID.encode(message.BlockID, writer.uint32(34).fork()).ldelim();
    }

    if (message.Timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.Timestamp), writer.uint32(42).fork()).ldelim();
    }

    if (message.ValidatorAddress !== "") {
      writer.uint32(50).string(message.ValidatorAddress);
    }

    if (!message.ValidatorIndex.isZero()) {
      writer.uint32(56).sint64(message.ValidatorIndex);
    }

    if (message.Signature.length !== 0) {
      writer.uint32(66).bytes(message.Signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Type = reader.uint32();
          break;

        case 2:
          message.Height = (reader.sint64() as Long);
          break;

        case 3:
          message.Round = (reader.sint64() as Long);
          break;

        case 4:
          message.BlockID = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.Timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.ValidatorAddress = reader.string();
          break;

        case 7:
          message.ValidatorIndex = (reader.sint64() as Long);
          break;

        case 8:
          message.Signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vote {
    return {
      Type: isSet(object.Type) ? Number(object.Type) : 0,
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Round: isSet(object.Round) ? Long.fromString(object.Round) : Long.ZERO,
      BlockID: isSet(object.BlockID) ? BlockID.fromJSON(object.BlockID) : undefined,
      Timestamp: isSet(object.Timestamp) ? fromJsonTimestamp(object.Timestamp) : undefined,
      ValidatorAddress: isSet(object.ValidatorAddress) ? String(object.ValidatorAddress) : "",
      ValidatorIndex: isSet(object.ValidatorIndex) ? Long.fromString(object.ValidatorIndex) : Long.ZERO,
      Signature: isSet(object.Signature) ? bytesFromBase64(object.Signature) : new Uint8Array()
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = Math.round(message.Type));
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Round !== undefined && (obj.Round = (message.Round || Long.ZERO).toString());
    message.BlockID !== undefined && (obj.BlockID = message.BlockID ? BlockID.toJSON(message.BlockID) : undefined);
    message.Timestamp !== undefined && (obj.Timestamp = message.Timestamp.toISOString());
    message.ValidatorAddress !== undefined && (obj.ValidatorAddress = message.ValidatorAddress);
    message.ValidatorIndex !== undefined && (obj.ValidatorIndex = (message.ValidatorIndex || Long.ZERO).toString());
    message.Signature !== undefined && (obj.Signature = base64FromBytes(message.Signature !== undefined ? message.Signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.Type = object.Type ?? 0;
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Round = object.Round !== undefined && object.Round !== null ? Long.fromValue(object.Round) : Long.ZERO;
    message.BlockID = object.BlockID !== undefined && object.BlockID !== null ? BlockID.fromPartial(object.BlockID) : undefined;
    message.Timestamp = object.Timestamp ?? undefined;
    message.ValidatorAddress = object.ValidatorAddress ?? "";
    message.ValidatorIndex = object.ValidatorIndex !== undefined && object.ValidatorIndex !== null ? Long.fromValue(object.ValidatorIndex) : Long.ZERO;
    message.Signature = object.Signature ?? new Uint8Array();
    return message;
  }

};

function createBasePart(): Part {
  return {
    Index: Long.ZERO,
    Bytes: new Uint8Array(),
    Proof: undefined
  };
}

export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Index.isZero()) {
      writer.uint32(8).sint64(message.Index);
    }

    if (message.Bytes.length !== 0) {
      writer.uint32(18).bytes(message.Bytes);
    }

    if (message.Proof !== undefined) {
      SimpleProof.encode(message.Proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Index = (reader.sint64() as Long);
          break;

        case 2:
          message.Bytes = reader.bytes();
          break;

        case 3:
          message.Proof = SimpleProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Part {
    return {
      Index: isSet(object.Index) ? Long.fromString(object.Index) : Long.ZERO,
      Bytes: isSet(object.Bytes) ? bytesFromBase64(object.Bytes) : new Uint8Array(),
      Proof: isSet(object.Proof) ? SimpleProof.fromJSON(object.Proof) : undefined
    };
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = (message.Index || Long.ZERO).toString());
    message.Bytes !== undefined && (obj.Bytes = base64FromBytes(message.Bytes !== undefined ? message.Bytes : new Uint8Array()));
    message.Proof !== undefined && (obj.Proof = message.Proof ? SimpleProof.toJSON(message.Proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Part>, I>>(object: I): Part {
    const message = createBasePart();
    message.Index = object.Index !== undefined && object.Index !== null ? Long.fromValue(object.Index) : Long.ZERO;
    message.Bytes = object.Bytes ?? new Uint8Array();
    message.Proof = object.Proof !== undefined && object.Proof !== null ? SimpleProof.fromPartial(object.Proof) : undefined;
    return message;
  }

};

function createBasePartSet(): PartSet {
  return {};
}

export const PartSet = {
  encode(_: PartSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSet();

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

  fromJSON(_: any): PartSet {
    return {};
  },

  toJSON(_: PartSet): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartSet>, I>>(_: I): PartSet {
    const message = createBasePartSet();
    return message;
  }

};

function createBasePartSetHeader(): PartSetHeader {
  return {
    Total: Long.ZERO,
    Hash: new Uint8Array()
  };
}

export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Total.isZero()) {
      writer.uint32(8).sint64(message.Total);
    }

    if (message.Hash.length !== 0) {
      writer.uint32(18).bytes(message.Hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Total = (reader.sint64() as Long);
          break;

        case 2:
          message.Hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PartSetHeader {
    return {
      Total: isSet(object.Total) ? Long.fromString(object.Total) : Long.ZERO,
      Hash: isSet(object.Hash) ? bytesFromBase64(object.Hash) : new Uint8Array()
    };
  },

  toJSON(message: PartSetHeader): unknown {
    const obj: any = {};
    message.Total !== undefined && (obj.Total = (message.Total || Long.ZERO).toString());
    message.Hash !== undefined && (obj.Hash = base64FromBytes(message.Hash !== undefined ? message.Hash : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartSetHeader>, I>>(object: I): PartSetHeader {
    const message = createBasePartSetHeader();
    message.Total = object.Total !== undefined && object.Total !== null ? Long.fromValue(object.Total) : Long.ZERO;
    message.Hash = object.Hash ?? new Uint8Array();
    return message;
  }

};

function createBaseValidator(): Validator {
  return {
    Address: "",
    PubKey: undefined,
    VotingPower: Long.ZERO,
    ProposerPriority: Long.ZERO
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== "") {
      writer.uint32(10).string(message.Address);
    }

    if (message.PubKey !== undefined) {
      Any.encode(message.PubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.VotingPower.isZero()) {
      writer.uint32(24).sint64(message.VotingPower);
    }

    if (!message.ProposerPriority.isZero()) {
      writer.uint32(32).sint64(message.ProposerPriority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Address = reader.string();
          break;

        case 2:
          message.PubKey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.VotingPower = (reader.sint64() as Long);
          break;

        case 4:
          message.ProposerPriority = (reader.sint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Validator {
    return {
      Address: isSet(object.Address) ? String(object.Address) : "",
      PubKey: isSet(object.PubKey) ? Any.fromJSON(object.PubKey) : undefined,
      VotingPower: isSet(object.VotingPower) ? Long.fromString(object.VotingPower) : Long.ZERO,
      ProposerPriority: isSet(object.ProposerPriority) ? Long.fromString(object.ProposerPriority) : Long.ZERO
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.Address !== undefined && (obj.Address = message.Address);
    message.PubKey !== undefined && (obj.PubKey = message.PubKey ? Any.toJSON(message.PubKey) : undefined);
    message.VotingPower !== undefined && (obj.VotingPower = (message.VotingPower || Long.ZERO).toString());
    message.ProposerPriority !== undefined && (obj.ProposerPriority = (message.ProposerPriority || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.Address = object.Address ?? "";
    message.PubKey = object.PubKey !== undefined && object.PubKey !== null ? Any.fromPartial(object.PubKey) : undefined;
    message.VotingPower = object.VotingPower !== undefined && object.VotingPower !== null ? Long.fromValue(object.VotingPower) : Long.ZERO;
    message.ProposerPriority = object.ProposerPriority !== undefined && object.ProposerPriority !== null ? Long.fromValue(object.ProposerPriority) : Long.ZERO;
    return message;
  }

};

function createBaseValidatorSet(): ValidatorSet {
  return {
    Validators: [],
    Proposer: undefined
  };
}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.Proposer !== undefined) {
      Validator.encode(message.Proposer, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.Proposer = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      Validators: Array.isArray(object?.Validators) ? object.Validators.map((e: any) => Validator.fromJSON(e)) : [],
      Proposer: isSet(object.Proposer) ? Validator.fromJSON(object.Proposer) : undefined
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};

    if (message.Validators) {
      obj.Validators = message.Validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.Validators = [];
    }

    message.Proposer !== undefined && (obj.Proposer = message.Proposer ? Validator.toJSON(message.Proposer) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSet>, I>>(object: I): ValidatorSet {
    const message = createBaseValidatorSet();
    message.Validators = object.Validators?.map(e => Validator.fromPartial(e)) || [];
    message.Proposer = object.Proposer !== undefined && object.Proposer !== null ? Validator.fromPartial(object.Proposer) : undefined;
    return message;
  }

};

function createBaseEventNewBlock(): EventNewBlock {
  return {
    Block: undefined,
    ResultBeginBlock: undefined,
    ResultEndBlock: undefined
  };
}

export const EventNewBlock = {
  encode(message: EventNewBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Block !== undefined) {
      Block.encode(message.Block, writer.uint32(10).fork()).ldelim();
    }

    if (message.ResultBeginBlock !== undefined) {
      ResponseBeginBlock.encode(message.ResultBeginBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.ResultEndBlock !== undefined) {
      ResponseEndBlock.encode(message.ResultEndBlock, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Block = Block.decode(reader, reader.uint32());
          break;

        case 2:
          message.ResultBeginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.ResultEndBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewBlock {
    return {
      Block: isSet(object.Block) ? Block.fromJSON(object.Block) : undefined,
      ResultBeginBlock: isSet(object.ResultBeginBlock) ? ResponseBeginBlock.fromJSON(object.ResultBeginBlock) : undefined,
      ResultEndBlock: isSet(object.ResultEndBlock) ? ResponseEndBlock.fromJSON(object.ResultEndBlock) : undefined
    };
  },

  toJSON(message: EventNewBlock): unknown {
    const obj: any = {};
    message.Block !== undefined && (obj.Block = message.Block ? Block.toJSON(message.Block) : undefined);
    message.ResultBeginBlock !== undefined && (obj.ResultBeginBlock = message.ResultBeginBlock ? ResponseBeginBlock.toJSON(message.ResultBeginBlock) : undefined);
    message.ResultEndBlock !== undefined && (obj.ResultEndBlock = message.ResultEndBlock ? ResponseEndBlock.toJSON(message.ResultEndBlock) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNewBlock>, I>>(object: I): EventNewBlock {
    const message = createBaseEventNewBlock();
    message.Block = object.Block !== undefined && object.Block !== null ? Block.fromPartial(object.Block) : undefined;
    message.ResultBeginBlock = object.ResultBeginBlock !== undefined && object.ResultBeginBlock !== null ? ResponseBeginBlock.fromPartial(object.ResultBeginBlock) : undefined;
    message.ResultEndBlock = object.ResultEndBlock !== undefined && object.ResultEndBlock !== null ? ResponseEndBlock.fromPartial(object.ResultEndBlock) : undefined;
    return message;
  }

};

function createBaseEventNewBlockHeader(): EventNewBlockHeader {
  return {
    Header: undefined,
    ResultBeginBlock: undefined,
    ResultEndBlock: undefined
  };
}

export const EventNewBlockHeader = {
  encode(message: EventNewBlockHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Header !== undefined) {
      Header.encode(message.Header, writer.uint32(10).fork()).ldelim();
    }

    if (message.ResultBeginBlock !== undefined) {
      ResponseBeginBlock.encode(message.ResultBeginBlock, writer.uint32(18).fork()).ldelim();
    }

    if (message.ResultEndBlock !== undefined) {
      ResponseEndBlock.encode(message.ResultEndBlock, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewBlockHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewBlockHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.ResultBeginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        case 3:
          message.ResultEndBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventNewBlockHeader {
    return {
      Header: isSet(object.Header) ? Header.fromJSON(object.Header) : undefined,
      ResultBeginBlock: isSet(object.ResultBeginBlock) ? ResponseBeginBlock.fromJSON(object.ResultBeginBlock) : undefined,
      ResultEndBlock: isSet(object.ResultEndBlock) ? ResponseEndBlock.fromJSON(object.ResultEndBlock) : undefined
    };
  },

  toJSON(message: EventNewBlockHeader): unknown {
    const obj: any = {};
    message.Header !== undefined && (obj.Header = message.Header ? Header.toJSON(message.Header) : undefined);
    message.ResultBeginBlock !== undefined && (obj.ResultBeginBlock = message.ResultBeginBlock ? ResponseBeginBlock.toJSON(message.ResultBeginBlock) : undefined);
    message.ResultEndBlock !== undefined && (obj.ResultEndBlock = message.ResultEndBlock ? ResponseEndBlock.toJSON(message.ResultEndBlock) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNewBlockHeader>, I>>(object: I): EventNewBlockHeader {
    const message = createBaseEventNewBlockHeader();
    message.Header = object.Header !== undefined && object.Header !== null ? Header.fromPartial(object.Header) : undefined;
    message.ResultBeginBlock = object.ResultBeginBlock !== undefined && object.ResultBeginBlock !== null ? ResponseBeginBlock.fromPartial(object.ResultBeginBlock) : undefined;
    message.ResultEndBlock = object.ResultEndBlock !== undefined && object.ResultEndBlock !== null ? ResponseEndBlock.fromPartial(object.ResultEndBlock) : undefined;
    return message;
  }

};

function createBaseEventTx(): EventTx {
  return {
    Result: undefined
  };
}

export const EventTx = {
  encode(message: EventTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Result !== undefined) {
      TxResult.encode(message.Result, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Result = TxResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTx {
    return {
      Result: isSet(object.Result) ? TxResult.fromJSON(object.Result) : undefined
    };
  },

  toJSON(message: EventTx): unknown {
    const obj: any = {};
    message.Result !== undefined && (obj.Result = message.Result ? TxResult.toJSON(message.Result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTx>, I>>(object: I): EventTx {
    const message = createBaseEventTx();
    message.Result = object.Result !== undefined && object.Result !== null ? TxResult.fromPartial(object.Result) : undefined;
    return message;
  }

};

function createBaseEventVote(): EventVote {
  return {
    Vote: undefined
  };
}

export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Vote !== undefined) {
      Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();

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

  fromJSON(object: any): EventVote {
    return {
      Vote: isSet(object.Vote) ? Vote.fromJSON(object.Vote) : undefined
    };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.Vote !== undefined && (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(object: I): EventVote {
    const message = createBaseEventVote();
    message.Vote = object.Vote !== undefined && object.Vote !== null ? Vote.fromPartial(object.Vote) : undefined;
    return message;
  }

};

function createBaseEventString(): EventString {
  return {
    Value: ""
  };
}

export const EventString = {
  encode(message: EventString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventString();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventString {
    return {
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: EventString): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventString>, I>>(object: I): EventString {
    const message = createBaseEventString();
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseEventValidatorSetUpdates(): EventValidatorSetUpdates {
  return {
    ValidatorUpdates: []
  };
}

export const EventValidatorSetUpdates = {
  encode(message: EventValidatorSetUpdates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ValidatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventValidatorSetUpdates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValidatorSetUpdates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ValidatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventValidatorSetUpdates {
    return {
      ValidatorUpdates: Array.isArray(object?.ValidatorUpdates) ? object.ValidatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e)) : []
    };
  },

  toJSON(message: EventValidatorSetUpdates): unknown {
    const obj: any = {};

    if (message.ValidatorUpdates) {
      obj.ValidatorUpdates = message.ValidatorUpdates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
    } else {
      obj.ValidatorUpdates = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventValidatorSetUpdates>, I>>(object: I): EventValidatorSetUpdates {
    const message = createBaseEventValidatorSetUpdates();
    message.ValidatorUpdates = object.ValidatorUpdates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    PubKey: undefined,
    VoteA: undefined,
    VoteB: undefined
  };
}

export const DuplicateVoteEvidence = {
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PubKey !== undefined) {
      Any.encode(message.PubKey, writer.uint32(10).fork()).ldelim();
    }

    if (message.VoteA !== undefined) {
      Vote.encode(message.VoteA, writer.uint32(18).fork()).ldelim();
    }

    if (message.VoteB !== undefined) {
      Vote.encode(message.VoteB, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PubKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.VoteA = Vote.decode(reader, reader.uint32());
          break;

        case 3:
          message.VoteB = Vote.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      PubKey: isSet(object.PubKey) ? Any.fromJSON(object.PubKey) : undefined,
      VoteA: isSet(object.VoteA) ? Vote.fromJSON(object.VoteA) : undefined,
      VoteB: isSet(object.VoteB) ? Vote.fromJSON(object.VoteB) : undefined
    };
  },

  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.PubKey !== undefined && (obj.PubKey = message.PubKey ? Any.toJSON(message.PubKey) : undefined);
    message.VoteA !== undefined && (obj.VoteA = message.VoteA ? Vote.toJSON(message.VoteA) : undefined);
    message.VoteB !== undefined && (obj.VoteB = message.VoteB ? Vote.toJSON(message.VoteB) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(object: I): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.PubKey = object.PubKey !== undefined && object.PubKey !== null ? Any.fromPartial(object.PubKey) : undefined;
    message.VoteA = object.VoteA !== undefined && object.VoteA !== null ? Vote.fromPartial(object.VoteA) : undefined;
    message.VoteB = object.VoteB !== undefined && object.VoteB !== null ? Vote.fromPartial(object.VoteB) : undefined;
    return message;
  }

};

function createBaseMockGoodEvidence(): MockGoodEvidence {
  return {
    Height: Long.ZERO,
    Address: ""
  };
}

export const MockGoodEvidence = {
  encode(message: MockGoodEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (message.Address !== "") {
      writer.uint32(18).string(message.Address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockGoodEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockGoodEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.Address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockGoodEvidence {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Address: isSet(object.Address) ? String(object.Address) : ""
    };
  },

  toJSON(message: MockGoodEvidence): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Address !== undefined && (obj.Address = message.Address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockGoodEvidence>, I>>(object: I): MockGoodEvidence {
    const message = createBaseMockGoodEvidence();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Address = object.Address ?? "";
    return message;
  }

};

function createBaseMockRandomGoodEvidence(): MockRandomGoodEvidence {
  return {
    MockGoodEvidence: undefined
  };
}

export const MockRandomGoodEvidence = {
  encode(message: MockRandomGoodEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MockGoodEvidence !== undefined) {
      MockGoodEvidence.encode(message.MockGoodEvidence, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockRandomGoodEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockRandomGoodEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.MockGoodEvidence = MockGoodEvidence.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockRandomGoodEvidence {
    return {
      MockGoodEvidence: isSet(object.MockGoodEvidence) ? MockGoodEvidence.fromJSON(object.MockGoodEvidence) : undefined
    };
  },

  toJSON(message: MockRandomGoodEvidence): unknown {
    const obj: any = {};
    message.MockGoodEvidence !== undefined && (obj.MockGoodEvidence = message.MockGoodEvidence ? MockGoodEvidence.toJSON(message.MockGoodEvidence) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockRandomGoodEvidence>, I>>(object: I): MockRandomGoodEvidence {
    const message = createBaseMockRandomGoodEvidence();
    message.MockGoodEvidence = object.MockGoodEvidence !== undefined && object.MockGoodEvidence !== null ? MockGoodEvidence.fromPartial(object.MockGoodEvidence) : undefined;
    return message;
  }

};

function createBaseMockBadEvidence(): MockBadEvidence {
  return {
    MockGoodEvidence: undefined
  };
}

export const MockBadEvidence = {
  encode(message: MockBadEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MockGoodEvidence !== undefined) {
      MockGoodEvidence.encode(message.MockGoodEvidence, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockBadEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockBadEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.MockGoodEvidence = MockGoodEvidence.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockBadEvidence {
    return {
      MockGoodEvidence: isSet(object.MockGoodEvidence) ? MockGoodEvidence.fromJSON(object.MockGoodEvidence) : undefined
    };
  },

  toJSON(message: MockBadEvidence): unknown {
    const obj: any = {};
    message.MockGoodEvidence !== undefined && (obj.MockGoodEvidence = message.MockGoodEvidence ? MockGoodEvidence.toJSON(message.MockGoodEvidence) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockBadEvidence>, I>>(object: I): MockBadEvidence {
    const message = createBaseMockBadEvidence();
    message.MockGoodEvidence = object.MockGoodEvidence !== undefined && object.MockGoodEvidence !== null ? MockGoodEvidence.fromPartial(object.MockGoodEvidence) : undefined;
    return message;
  }

};

function createBaseTxResult(): TxResult {
  return {
    Height: Long.ZERO,
    Index: 0,
    Tx: new Uint8Array(),
    Response: undefined
  };
}

export const TxResult = {
  encode(message: TxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.Height.isZero()) {
      writer.uint32(8).sint64(message.Height);
    }

    if (message.Index !== 0) {
      writer.uint32(16).uint32(message.Index);
    }

    if (message.Tx.length !== 0) {
      writer.uint32(26).bytes(message.Tx);
    }

    if (message.Response !== undefined) {
      ResponseDeliverTx.encode(message.Response, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Height = (reader.sint64() as Long);
          break;

        case 2:
          message.Index = reader.uint32();
          break;

        case 3:
          message.Tx = reader.bytes();
          break;

        case 4:
          message.Response = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxResult {
    return {
      Height: isSet(object.Height) ? Long.fromString(object.Height) : Long.ZERO,
      Index: isSet(object.Index) ? Number(object.Index) : 0,
      Tx: isSet(object.Tx) ? bytesFromBase64(object.Tx) : new Uint8Array(),
      Response: isSet(object.Response) ? ResponseDeliverTx.fromJSON(object.Response) : undefined
    };
  },

  toJSON(message: TxResult): unknown {
    const obj: any = {};
    message.Height !== undefined && (obj.Height = (message.Height || Long.ZERO).toString());
    message.Index !== undefined && (obj.Index = Math.round(message.Index));
    message.Tx !== undefined && (obj.Tx = base64FromBytes(message.Tx !== undefined ? message.Tx : new Uint8Array()));
    message.Response !== undefined && (obj.Response = message.Response ? ResponseDeliverTx.toJSON(message.Response) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult {
    const message = createBaseTxResult();
    message.Height = object.Height !== undefined && object.Height !== null ? Long.fromValue(object.Height) : Long.ZERO;
    message.Index = object.Index ?? 0;
    message.Tx = object.Tx ?? new Uint8Array();
    message.Response = object.Response !== undefined && object.Response !== null ? ResponseDeliverTx.fromPartial(object.Response) : undefined;
    return message;
  }

};

function createBaseMockAppState(): MockAppState {
  return {
    AccountOwner: ""
  };
}

export const MockAppState = {
  encode(message: MockAppState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AccountOwner !== "") {
      writer.uint32(10).string(message.AccountOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockAppState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockAppState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.AccountOwner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MockAppState {
    return {
      AccountOwner: isSet(object.AccountOwner) ? String(object.AccountOwner) : ""
    };
  },

  toJSON(message: MockAppState): unknown {
    const obj: any = {};
    message.AccountOwner !== undefined && (obj.AccountOwner = message.AccountOwner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MockAppState>, I>>(object: I): MockAppState {
    const message = createBaseMockAppState();
    message.AccountOwner = object.AccountOwner ?? "";
    return message;
  }

};

function createBaseVoteSet(): VoteSet {
  return {};
}

export const VoteSet = {
  encode(_: VoteSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSet();

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

  fromJSON(_: any): VoteSet {
    return {};
  },

  toJSON(_: VoteSet): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSet>, I>>(_: I): VoteSet {
    const message = createBaseVoteSet();
    return message;
  }

};

function createBaseTYPES_BytesList(): TYPES_BytesList {
  return {
    Value: []
  };
}

export const TYPES_BytesList = {
  encode(message: TYPES_BytesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Value) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TYPES_BytesList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTYPES_BytesList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Value.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TYPES_BytesList {
    return {
      Value: Array.isArray(object?.Value) ? object.Value.map((e: any) => bytesFromBase64(e)) : []
    };
  },

  toJSON(message: TYPES_BytesList): unknown {
    const obj: any = {};

    if (message.Value) {
      obj.Value = message.Value.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Value = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TYPES_BytesList>, I>>(object: I): TYPES_BytesList {
    const message = createBaseTYPES_BytesList();
    message.Value = object.Value?.map(e => e) || [];
    return message;
  }

};