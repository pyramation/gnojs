import * as _15 from "./api/annotations";
import * as _16 from "./api/auth";
import * as _17 from "./api/backend";
import * as _18 from "./api/billing";
import * as _19 from "./api/client";
import * as _20 from "./api/config_change";
import * as _21 from "./api/consumer";
import * as _22 from "./api/context";
import * as _23 from "./api/control";
import * as _24 from "./api/distribution";
import * as _25 from "./api/documentation";
import * as _26 from "./api/endpoint";
import * as _27 from "./api/error_reason";
import * as _28 from "./api/field_behavior";
import * as _29 from "./api/http";
import * as _30 from "./api/httpbody";
import * as _31 from "./api/label";
import * as _32 from "./api/launch_stage";
import * as _33 from "./api/log";
import * as _34 from "./api/logging";
import * as _35 from "./api/metric";
import * as _36 from "./api/monitored_resource";
import * as _37 from "./api/monitoring";
import * as _38 from "./api/quota";
import * as _39 from "./api/resource";
import * as _40 from "./api/routing";
import * as _41 from "./api/service";
import * as _42 from "./api/source_info";
import * as _43 from "./api/system_parameter";
import * as _44 from "./api/usage";
import * as _45 from "./api/visibility";
import * as _46 from "./logging/type/http_request";
import * as _47 from "./logging/type/log_severity";
import * as _48 from "./logging/v2/log_entry";
import * as _49 from "./logging/v2/logging_config";
import * as _50 from "./logging/v2/logging_metrics";
import * as _51 from "./logging/v2/logging";
import * as _52 from "./longrunning/operations";
import * as _53 from "./protobuf/any";
import * as _54 from "./protobuf/api";
import * as _55 from "./protobuf/descriptor";
import * as _56 from "./protobuf/duration";
import * as _57 from "./protobuf/empty";
import * as _58 from "./protobuf/field_mask";
import * as _59 from "./protobuf/source_context";
import * as _60 from "./protobuf/struct";
import * as _61 from "./protobuf/timestamp";
import * as _62 from "./protobuf/type";
import * as _63 from "./protobuf/wrappers";
import * as _64 from "./rpc/code";
import * as _65 from "./rpc/error_details";
import * as _66 from "./rpc/status";
export namespace google {
  export const api = { ..._15,
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._20,
    ..._21,
    ..._22,
    ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._43,
    ..._44,
    ..._45
  };
  export namespace logging {
    export const type = { ..._46,
      ..._47
    };
    export const v2 = { ..._48,
      ..._49,
      ..._50,
      ..._51
    };
  }
  export const longrunning = { ..._52
  };
  export const protobuf = { ..._53,
    ..._54,
    ..._55,
    ..._56,
    ..._57,
    ..._58,
    ..._59,
    ..._60,
    ..._61,
    ..._62,
    ..._63
  };
  export const rpc = { ..._64,
    ..._65,
    ..._66
  };
}