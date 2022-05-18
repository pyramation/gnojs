import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { ValidatorSet, Proposal, Block, PartSet, VoteSet, PartSetHeader, Validator, BlockID } from "../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types";
import { BitArray } from "../../../../../../../github.com/gnolang/gno/pkgs/bitarray/bitarray";
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
    fromPartial<I extends {
        Height?: string | number | Long;
        Round?: string | number | Long;
        Step?: number;
        StartTime?: Date;
        CommitTime?: Date;
        Validators?: {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[];
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            };
        };
        Proposal?: {
            Type?: number;
            Height?: any;
            Round?: any;
            POLRound?: any;
            BlockID?: {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                };
            };
            Timestamp?: Date;
            Signature?: Uint8Array;
        };
        ProposalBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        };
        ProposalBlockParts?: {};
        LockedRound?: string | number | Long;
        LockedBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        };
        LockedBlockParts?: {};
        ValidRound?: string | number | Long;
        ValidBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        };
        ValidBlockParts?: {};
        Votes?: {};
        CommitRound?: string | number | Long;
        LastCommit?: {};
        LastValidators?: {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[];
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            };
        };
        TriggeredTimeoutPrecommit?: boolean;
    } & {
        Height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Height"], keyof Long>, never>);
        Round?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Round"], keyof Long>, never>);
        Step?: number;
        StartTime?: Date;
        CommitTime?: Date;
        Validators?: {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[];
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            };
        } & {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[] & ({
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            } & {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["Validators"]["Validators"][number]["PubKey"], keyof import("../../../../../../../google/protobuf/any").Any>, never>;
                VotingPower?: any;
                ProposerPriority?: any;
            } & Record<Exclude<keyof I["Validators"]["Validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["Validators"]["Validators"], keyof {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[]>, never>;
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            } & {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["Validators"]["Proposer"]["PubKey"], keyof import("../../../../../../../google/protobuf/any").Any>, never>;
                VotingPower?: any;
                ProposerPriority?: any;
            } & Record<Exclude<keyof I["Validators"]["Proposer"], keyof Validator>, never>;
        } & Record<Exclude<keyof I["Validators"], keyof ValidatorSet>, never>;
        Proposal?: {
            Type?: number;
            Height?: any;
            Round?: any;
            POLRound?: any;
            BlockID?: {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                };
            };
            Timestamp?: Date;
            Signature?: Uint8Array;
        } & {
            Type?: number;
            Height?: any;
            Round?: any;
            POLRound?: any;
            BlockID?: {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                };
            } & {
                Hash?: Uint8Array;
                PartsHeader?: {
                    Total?: any;
                    Hash?: Uint8Array;
                } & {
                    Total?: any;
                    Hash?: Uint8Array;
                } & Record<Exclude<keyof I["Proposal"]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
            } & Record<Exclude<keyof I["Proposal"]["BlockID"], keyof BlockID>, never>;
            Timestamp?: Date;
            Signature?: Uint8Array;
        } & Record<Exclude<keyof I["Proposal"], keyof Proposal>, never>;
        ProposalBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        } & {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["ProposalBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["ProposalBlock"]["Header"]["LastBlockID"], keyof BlockID>, never>;
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & Record<Exclude<keyof I["ProposalBlock"]["Header"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Header>, never>;
            Data?: {
                Txs?: Uint8Array[];
            } & {
                Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["ProposalBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I["ProposalBlock"]["Data"], "Txs">, never>;
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            } & {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["BlockID"], keyof BlockID>, never>;
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[] & ({
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof BlockID>, never>;
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["Precommits"][number], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"]["Precommits"], keyof {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["ProposalBlock"]["LastCommit"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Commit>, never>;
        } & Record<Exclude<keyof I["ProposalBlock"], keyof Block>, never>;
        ProposalBlockParts?: {} & {} & Record<Exclude<keyof I["ProposalBlockParts"], never>, never>;
        LockedRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["LockedRound"], keyof Long>, never>);
        LockedBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        } & {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["LockedBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["LockedBlock"]["Header"]["LastBlockID"], keyof BlockID>, never>;
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & Record<Exclude<keyof I["LockedBlock"]["Header"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Header>, never>;
            Data?: {
                Txs?: Uint8Array[];
            } & {
                Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["LockedBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I["LockedBlock"]["Data"], "Txs">, never>;
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            } & {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["BlockID"], keyof BlockID>, never>;
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[] & ({
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof BlockID>, never>;
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["Precommits"][number], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["LockedBlock"]["LastCommit"]["Precommits"], keyof {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["LockedBlock"]["LastCommit"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Commit>, never>;
        } & Record<Exclude<keyof I["LockedBlock"], keyof Block>, never>;
        LockedBlockParts?: {} & {} & Record<Exclude<keyof I["LockedBlockParts"], never>, never>;
        ValidRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["ValidRound"], keyof Long>, never>);
        ValidBlock?: {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            };
            Data?: {
                Txs?: Uint8Array[];
            };
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            };
        } & {
            Header?: {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & {
                Version?: string;
                ChainID?: string;
                Height?: any;
                Time?: Date;
                NumTxs?: any;
                TotalTxs?: any;
                AppVersion?: string;
                LastBlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["ValidBlock"]["Header"]["LastBlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["ValidBlock"]["Header"]["LastBlockID"], keyof BlockID>, never>;
                LastCommitHash?: Uint8Array;
                DataHash?: Uint8Array;
                ValidatorsHash?: Uint8Array;
                NextValidatorsHash?: Uint8Array;
                ConsensusHash?: Uint8Array;
                AppHash?: Uint8Array;
                LastResultsHash?: Uint8Array;
                ProposerAddress?: string;
            } & Record<Exclude<keyof I["ValidBlock"]["Header"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Header>, never>;
            Data?: {
                Txs?: Uint8Array[];
            } & {
                Txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["ValidBlock"]["Data"]["Txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I["ValidBlock"]["Data"], "Txs">, never>;
            LastCommit?: {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                };
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[];
            } & {
                BlockID?: {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    };
                } & {
                    Hash?: Uint8Array;
                    PartsHeader?: {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & {
                        Total?: any;
                        Hash?: Uint8Array;
                    } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["BlockID"], keyof BlockID>, never>;
                Precommits?: {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[] & ({
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    } & {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & {
                            Total?: any;
                            Hash?: Uint8Array;
                        } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["Precommits"][number]["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["Precommits"][number]["BlockID"], keyof BlockID>, never>;
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["Precommits"][number], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["ValidBlock"]["LastCommit"]["Precommits"], keyof {
                    Type?: number;
                    Height?: any;
                    Round?: any;
                    BlockID?: {
                        Hash?: Uint8Array;
                        PartsHeader?: {
                            Total?: any;
                            Hash?: Uint8Array;
                        };
                    };
                    Timestamp?: Date;
                    ValidatorAddress?: string;
                    ValidatorIndex?: any;
                    Signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["ValidBlock"]["LastCommit"], keyof import("../../../../../../../github.com/gnolang/gno/pkgs/bft/types/types").Commit>, never>;
        } & Record<Exclude<keyof I["ValidBlock"], keyof Block>, never>;
        ValidBlockParts?: {} & {} & Record<Exclude<keyof I["ValidBlockParts"], never>, never>;
        Votes?: {} & {} & Record<Exclude<keyof I["Votes"], never>, never>;
        CommitRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["CommitRound"], keyof Long>, never>);
        LastCommit?: {} & {} & Record<Exclude<keyof I["LastCommit"], never>, never>;
        LastValidators?: {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[];
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            };
        } & {
            Validators?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[] & ({
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            } & {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["LastValidators"]["Validators"][number]["PubKey"], keyof import("../../../../../../../google/protobuf/any").Any>, never>;
                VotingPower?: any;
                ProposerPriority?: any;
            } & Record<Exclude<keyof I["LastValidators"]["Validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["LastValidators"]["Validators"], keyof {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            }[]>, never>;
            Proposer?: {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                VotingPower?: any;
                ProposerPriority?: any;
            } & {
                Address?: string;
                PubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["LastValidators"]["Proposer"]["PubKey"], keyof import("../../../../../../../google/protobuf/any").Any>, never>;
                VotingPower?: any;
                ProposerPriority?: any;
            } & Record<Exclude<keyof I["LastValidators"]["Proposer"], keyof Validator>, never>;
        } & Record<Exclude<keyof I["LastValidators"], keyof ValidatorSet>, never>;
        TriggeredTimeoutPrecommit?: boolean;
    } & Record<Exclude<keyof I, keyof RoundState>, never>>(object: I): RoundState;
};
export declare const HRS: {
    encode(message: HRS, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HRS;
    fromJSON(object: any): HRS;
    toJSON(message: HRS): unknown;
    fromPartial<I extends {
        Height?: string | number | Long;
        Round?: string | number | Long;
        Step?: number;
    } & {
        Height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Height"], keyof Long>, never>);
        Round?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Round"], keyof Long>, never>);
        Step?: number;
    } & Record<Exclude<keyof I, keyof HRS>, never>>(object: I): HRS;
};
export declare const RoundStateSimple: {
    encode(message: RoundStateSimple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoundStateSimple;
    fromJSON(object: any): RoundStateSimple;
    toJSON(message: RoundStateSimple): unknown;
    fromPartial<I extends {
        HeightRoundStep?: string;
        StartTime?: Date;
        ProposalBlockHash?: Uint8Array;
        LockedBlockHash?: Uint8Array;
        ValidBlockHash?: Uint8Array;
        Votes?: {};
    } & {
        HeightRoundStep?: string;
        StartTime?: Date;
        ProposalBlockHash?: Uint8Array;
        LockedBlockHash?: Uint8Array;
        ValidBlockHash?: Uint8Array;
        Votes?: {} & {} & Record<Exclude<keyof I["Votes"], never>, never>;
    } & Record<Exclude<keyof I, keyof RoundStateSimple>, never>>(object: I): RoundStateSimple;
};
export declare const PeerRoundState: {
    encode(message: PeerRoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerRoundState;
    fromJSON(object: any): PeerRoundState;
    toJSON(message: PeerRoundState): unknown;
    fromPartial<I extends {
        Height?: string | number | Long;
        Round?: string | number | Long;
        Step?: number;
        StartTime?: Date;
        Proposal?: boolean;
        ProposalBlockPartsHeader?: {
            Total?: any;
            Hash?: Uint8Array;
        };
        ProposalBlockParts?: {
            Bits?: any;
            Elems?: any[];
        };
        ProposalPOLRound?: string | number | Long;
        ProposalPOL?: {
            Bits?: any;
            Elems?: any[];
        };
        Prevotes?: {
            Bits?: any;
            Elems?: any[];
        };
        Precommits?: {
            Bits?: any;
            Elems?: any[];
        };
        LastCommitRound?: string | number | Long;
        LastCommit?: {
            Bits?: any;
            Elems?: any[];
        };
        CatchupCommitRound?: string | number | Long;
        CatchupCommit?: {
            Bits?: any;
            Elems?: any[];
        };
    } & {
        Height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Height"], keyof Long>, never>);
        Round?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["Round"], keyof Long>, never>);
        Step?: number;
        StartTime?: Date;
        Proposal?: boolean;
        ProposalBlockPartsHeader?: {
            Total?: any;
            Hash?: Uint8Array;
        } & {
            Total?: any;
            Hash?: Uint8Array;
        } & Record<Exclude<keyof I["ProposalBlockPartsHeader"], keyof PartSetHeader>, never>;
        ProposalBlockParts?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["ProposalBlockParts"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["ProposalBlockParts"], keyof BitArray>, never>;
        ProposalPOLRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["ProposalPOLRound"], keyof Long>, never>);
        ProposalPOL?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["ProposalPOL"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["ProposalPOL"], keyof BitArray>, never>;
        Prevotes?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["Prevotes"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["Prevotes"], keyof BitArray>, never>;
        Precommits?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["Precommits"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["Precommits"], keyof BitArray>, never>;
        LastCommitRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["LastCommitRound"], keyof Long>, never>);
        LastCommit?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["LastCommit"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["LastCommit"], keyof BitArray>, never>;
        CatchupCommitRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["CatchupCommitRound"], keyof Long>, never>);
        CatchupCommit?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["CatchupCommit"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["CatchupCommit"], keyof BitArray>, never>;
    } & Record<Exclude<keyof I, keyof PeerRoundState>, never>>(object: I): PeerRoundState;
};
export declare const HeightVoteSet: {
    encode(_: HeightVoteSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeightVoteSet;
    fromJSON(_: any): HeightVoteSet;
    toJSON(_: HeightVoteSet): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): HeightVoteSet;
};
export declare const EventNewRoundStep: {
    encode(message: EventNewRoundStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRoundStep;
    fromJSON(object: any): EventNewRoundStep;
    toJSON(message: EventNewRoundStep): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
        SecondsSinceStartTime?: string | number | Long;
        LastCommitRound?: string | number | Long;
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
        SecondsSinceStartTime?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["SecondsSinceStartTime"], keyof Long>, never>);
        LastCommitRound?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["LastCommitRound"], keyof Long>, never>);
    } & Record<Exclude<keyof I, keyof EventNewRoundStep>, never>>(object: I): EventNewRoundStep;
};
export declare const EventNewValidBlock: {
    encode(message: EventNewValidBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewValidBlock;
    fromJSON(object: any): EventNewValidBlock;
    toJSON(message: EventNewValidBlock): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
        BlockPartsHeader?: {
            Total?: any;
            Hash?: Uint8Array;
        };
        BlockParts?: {
            Bits?: any;
            Elems?: any[];
        };
        IsCommit?: boolean;
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
        BlockPartsHeader?: {
            Total?: any;
            Hash?: Uint8Array;
        } & {
            Total?: any;
            Hash?: Uint8Array;
        } & Record<Exclude<keyof I["BlockPartsHeader"], keyof PartSetHeader>, never>;
        BlockParts?: {
            Bits?: any;
            Elems?: any[];
        } & {
            Bits?: any;
            Elems?: any[] & any[] & Record<Exclude<keyof I["BlockParts"]["Elems"], keyof any[]>, never>;
        } & Record<Exclude<keyof I["BlockParts"], keyof BitArray>, never>;
        IsCommit?: boolean;
    } & Record<Exclude<keyof I, keyof EventNewValidBlock>, never>>(object: I): EventNewValidBlock;
};
export declare const EventNewRound: {
    encode(message: EventNewRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNewRound;
    fromJSON(object: any): EventNewRound;
    toJSON(message: EventNewRound): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
        Proposer?: {
            Address?: string;
            PubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            VotingPower?: any;
            ProposerPriority?: any;
        };
        ProposerIndex?: string | number | Long;
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
        Proposer?: {
            Address?: string;
            PubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            VotingPower?: any;
            ProposerPriority?: any;
        } & {
            Address?: string;
            PubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["Proposer"]["PubKey"], keyof import("../../../../../../../google/protobuf/any").Any>, never>;
            VotingPower?: any;
            ProposerPriority?: any;
        } & Record<Exclude<keyof I["Proposer"], keyof Validator>, never>;
        ProposerIndex?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["ProposerIndex"], keyof Long>, never>);
    } & Record<Exclude<keyof I, keyof EventNewRound>, never>>(object: I): EventNewRound;
};
export declare const EventCompleteProposal: {
    encode(message: EventCompleteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteProposal;
    fromJSON(object: any): EventCompleteProposal;
    toJSON(message: EventCompleteProposal): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
        BlockID?: {
            Hash?: Uint8Array;
            PartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            };
        };
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
        BlockID?: {
            Hash?: Uint8Array;
            PartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            };
        } & {
            Hash?: Uint8Array;
            PartsHeader?: {
                Total?: any;
                Hash?: Uint8Array;
            } & {
                Total?: any;
                Hash?: Uint8Array;
            } & Record<Exclude<keyof I["BlockID"]["PartsHeader"], keyof PartSetHeader>, never>;
        } & Record<Exclude<keyof I["BlockID"], keyof BlockID>, never>;
    } & Record<Exclude<keyof I, keyof EventCompleteProposal>, never>>(object: I): EventCompleteProposal;
};
export declare const EventTimeoutPropose: {
    encode(message: EventTimeoutPropose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutPropose;
    fromJSON(object: any): EventTimeoutPropose;
    toJSON(message: EventTimeoutPropose): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
    } & Record<Exclude<keyof I, "HRS">, never>>(object: I): EventTimeoutPropose;
};
export declare const EventTimeoutWait: {
    encode(message: EventTimeoutWait, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTimeoutWait;
    fromJSON(object: any): EventTimeoutWait;
    toJSON(message: EventTimeoutWait): unknown;
    fromPartial<I extends {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        };
    } & {
        HRS?: {
            Height?: string | number | Long;
            Round?: string | number | Long;
            Step?: number;
        } & {
            Height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Height"], keyof Long>, never>);
            Round?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["HRS"]["Round"], keyof Long>, never>);
            Step?: number;
        } & Record<Exclude<keyof I["HRS"], keyof HRS>, never>;
    } & Record<Exclude<keyof I, "HRS">, never>>(object: I): EventTimeoutWait;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
