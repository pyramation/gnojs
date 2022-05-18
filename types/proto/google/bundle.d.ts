import * as _16 from "./api/auth";
import * as _17 from "./api/backend";
import * as _18 from "./api/billing";
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
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _45.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Visibility;
            fromJSON(object: any): _45.Visibility;
            toJSON(message: _45.Visibility): unknown;
            fromPartial<I extends Exact<DeepPartial<_45.Visibility>, I>>(object: I): _45.Visibility;
        };
        VisibilityRule: {
            encode(message: _45.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.VisibilityRule;
            fromJSON(object: any): _45.VisibilityRule;
            toJSON(message: _45.VisibilityRule): unknown;
            fromPartial<I_1 extends Exact<DeepPartial<_45.VisibilityRule>, I_1>>(object: I_1): _45.VisibilityRule;
        };
        Usage: {
            encode(message: _44.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Usage;
            fromJSON(object: any): _44.Usage;
            toJSON(message: _44.Usage): unknown;
            fromPartial<I_2 extends Exact<DeepPartial<_44.Usage>, I_2>>(object: I_2): _44.Usage;
        };
        UsageRule: {
            encode(message: _44.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.UsageRule;
            fromJSON(object: any): _44.UsageRule;
            toJSON(message: _44.UsageRule): unknown;
            fromPartial<I_3 extends Exact<DeepPartial<_44.UsageRule>, I_3>>(object: I_3): _44.UsageRule;
        };
        SystemParameters: {
            encode(message: _43.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SystemParameters;
            fromJSON(object: any): _43.SystemParameters;
            toJSON(message: _43.SystemParameters): unknown;
            fromPartial<I_4 extends Exact<DeepPartial<_43.SystemParameters>, I_4>>(object: I_4): _43.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _43.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SystemParameterRule;
            fromJSON(object: any): _43.SystemParameterRule;
            toJSON(message: _43.SystemParameterRule): unknown;
            fromPartial<I_5 extends Exact<DeepPartial<_43.SystemParameterRule>, I_5>>(object: I_5): _43.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _43.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SystemParameter;
            fromJSON(object: any): _43.SystemParameter;
            toJSON(message: _43.SystemParameter): unknown;
            fromPartial<I_6 extends Exact<DeepPartial<_43.SystemParameter>, I_6>>(object: I_6): _43.SystemParameter;
        };
        SourceInfo: {
            encode(message: _42.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SourceInfo;
            fromJSON(object: any): _42.SourceInfo;
            toJSON(message: _42.SourceInfo): unknown;
            fromPartial<I_7 extends Exact<DeepPartial<_42.SourceInfo>, I_7>>(object: I_7): _42.SourceInfo;
        };
        Service: {
            encode(message: _41.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Service;
            fromJSON(object: any): _41.Service;
            toJSON(message: _41.Service): unknown;
            fromPartial<I_8 extends Exact<DeepPartial<_41.Service>, I_8>>(object: I_8): _41.Service;
        };
        RoutingRule: {
            encode(message: _40.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.RoutingRule;
            fromJSON(object: any): _40.RoutingRule;
            toJSON(message: _40.RoutingRule): unknown;
            fromPartial<I_9 extends Exact<DeepPartial<_40.RoutingRule>, I_9>>(object: I_9): _40.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _40.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.RoutingParameter;
            fromJSON(object: any): _40.RoutingParameter;
            toJSON(message: _40.RoutingParameter): unknown;
            fromPartial<I_10 extends Exact<DeepPartial<_40.RoutingParameter>, I_10>>(object: I_10): _40.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _39.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _39.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _39.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _39.ResourceDescriptor_Style): string;
        ResourceDescriptor_History: typeof _39.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _39.ResourceDescriptor_Style;
        ResourceDescriptor: {
            encode(message: _39.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ResourceDescriptor;
            fromJSON(object: any): _39.ResourceDescriptor;
            toJSON(message: _39.ResourceDescriptor): unknown;
            fromPartial<I_11 extends Exact<DeepPartial<_39.ResourceDescriptor>, I_11>>(object: I_11): _39.ResourceDescriptor;
        };
        ResourceReference: {
            encode(message: _39.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ResourceReference;
            fromJSON(object: any): _39.ResourceReference;
            toJSON(message: _39.ResourceReference): unknown;
            fromPartial<I_12 extends Exact<DeepPartial<_39.ResourceReference>, I_12>>(object: I_12): _39.ResourceReference;
        };
        Quota: {
            encode(message: _38.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Quota;
            fromJSON(object: any): _38.Quota;
            toJSON(message: _38.Quota): unknown;
            fromPartial<I_13 extends Exact<DeepPartial<_38.Quota>, I_13>>(object: I_13): _38.Quota;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _38.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _38.MetricRule_MetricCostsEntry;
            toJSON(message: _38.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_14 extends Exact<DeepPartial<_38.MetricRule_MetricCostsEntry>, I_14>>(object: I_14): _38.MetricRule_MetricCostsEntry;
        };
        MetricRule: {
            encode(message: _38.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MetricRule;
            fromJSON(object: any): _38.MetricRule;
            toJSON(message: _38.MetricRule): unknown;
            fromPartial<I_15 extends Exact<DeepPartial<_38.MetricRule>, I_15>>(object: I_15): _38.MetricRule;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _38.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _38.QuotaLimit_ValuesEntry;
            toJSON(message: _38.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_16 extends Exact<DeepPartial<_38.QuotaLimit_ValuesEntry>, I_16>>(object: I_16): _38.QuotaLimit_ValuesEntry;
        };
        QuotaLimit: {
            encode(message: _38.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuotaLimit;
            fromJSON(object: any): _38.QuotaLimit;
            toJSON(message: _38.QuotaLimit): unknown;
            fromPartial<I_17 extends Exact<DeepPartial<_38.QuotaLimit>, I_17>>(object: I_17): _38.QuotaLimit;
        };
        Monitoring: {
            encode(message: _37.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Monitoring;
            fromJSON(object: any): _37.Monitoring;
            toJSON(message: _37.Monitoring): unknown;
            fromPartial<I_18 extends Exact<DeepPartial<_37.Monitoring>, I_18>>(object: I_18): _37.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _37.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Monitoring_MonitoringDestination;
            fromJSON(object: any): _37.Monitoring_MonitoringDestination;
            toJSON(message: _37.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends Exact<DeepPartial<_37.Monitoring_MonitoringDestination>, I_19>>(object: I_19): _37.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _36.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MonitoredResourceDescriptor;
            fromJSON(object: any): _36.MonitoredResourceDescriptor;
            toJSON(message: _36.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends Exact<DeepPartial<_36.MonitoredResourceDescriptor>, I_20>>(object: I_20): _36.MonitoredResourceDescriptor;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _36.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _36.MonitoredResource_LabelsEntry;
            toJSON(message: _36.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_21 extends Exact<DeepPartial<_36.MonitoredResource_LabelsEntry>, I_21>>(object: I_21): _36.MonitoredResource_LabelsEntry;
        };
        MonitoredResource: {
            encode(message: _36.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MonitoredResource;
            fromJSON(object: any): _36.MonitoredResource;
            toJSON(message: _36.MonitoredResource): unknown;
            fromPartial<I_22 extends Exact<DeepPartial<_36.MonitoredResource>, I_22>>(object: I_22): _36.MonitoredResource;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _36.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _36.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _36.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_23 extends Exact<DeepPartial<_36.MonitoredResourceMetadata_UserLabelsEntry>, I_23>>(object: I_23): _36.MonitoredResourceMetadata_UserLabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _36.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MonitoredResourceMetadata;
            fromJSON(object: any): _36.MonitoredResourceMetadata;
            toJSON(message: _36.MonitoredResourceMetadata): unknown;
            fromPartial<I_24 extends Exact<DeepPartial<_36.MonitoredResourceMetadata>, I_24>>(object: I_24): _36.MonitoredResourceMetadata;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _35.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _35.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _35.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _35.MetricDescriptor_ValueType): string;
        MetricDescriptor_MetricKind: typeof _35.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _35.MetricDescriptor_ValueType;
        MetricDescriptor: {
            encode(message: _35.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MetricDescriptor;
            fromJSON(object: any): _35.MetricDescriptor;
            toJSON(message: _35.MetricDescriptor): unknown;
            fromPartial<I_25 extends Exact<DeepPartial<_35.MetricDescriptor>, I_25>>(object: I_25): _35.MetricDescriptor;
        };
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _35.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _35.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _35.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends Exact<DeepPartial<_35.MetricDescriptor_MetricDescriptorMetadata>, I_26>>(object: I_26): _35.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric_LabelsEntry: {
            encode(message: _35.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Metric_LabelsEntry;
            fromJSON(object: any): _35.Metric_LabelsEntry;
            toJSON(message: _35.Metric_LabelsEntry): unknown;
            fromPartial<I_27 extends Exact<DeepPartial<_35.Metric_LabelsEntry>, I_27>>(object: I_27): _35.Metric_LabelsEntry;
        };
        Metric: {
            encode(message: _35.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Metric;
            fromJSON(object: any): _35.Metric;
            toJSON(message: _35.Metric): unknown;
            fromPartial<I_28 extends Exact<DeepPartial<_35.Metric>, I_28>>(object: I_28): _35.Metric;
        };
        Logging: {
            encode(message: _34.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Logging;
            fromJSON(object: any): _34.Logging;
            toJSON(message: _34.Logging): unknown;
            fromPartial<I_29 extends Exact<DeepPartial<_34.Logging>, I_29>>(object: I_29): _34.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _34.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Logging_LoggingDestination;
            fromJSON(object: any): _34.Logging_LoggingDestination;
            toJSON(message: _34.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends Exact<DeepPartial<_34.Logging_LoggingDestination>, I_30>>(object: I_30): _34.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _33.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.LogDescriptor;
            fromJSON(object: any): _33.LogDescriptor;
            toJSON(message: _33.LogDescriptor): unknown;
            fromPartial<I_31 extends Exact<DeepPartial<_33.LogDescriptor>, I_31>>(object: I_31): _33.LogDescriptor;
        };
        launchStageFromJSON(object: any): _32.LaunchStage;
        launchStageToJSON(object: _32.LaunchStage): string;
        LaunchStage: typeof _32.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _31.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _31.LabelDescriptor_ValueType): string;
        LabelDescriptor_ValueType: typeof _31.LabelDescriptor_ValueType;
        LabelDescriptor: {
            encode(message: _31.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.LabelDescriptor;
            fromJSON(object: any): _31.LabelDescriptor;
            toJSON(message: _31.LabelDescriptor): unknown;
            fromPartial<I_32 extends Exact<DeepPartial<_31.LabelDescriptor>, I_32>>(object: I_32): _31.LabelDescriptor;
        };
        HttpBody: {
            encode(message: _30.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.HttpBody;
            fromJSON(object: any): _30.HttpBody;
            toJSON(message: _30.HttpBody): unknown;
            fromPartial<I_33 extends Exact<DeepPartial<_30.HttpBody>, I_33>>(object: I_33): _30.HttpBody;
        };
        Http: {
            encode(message: _29.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Http;
            fromJSON(object: any): _29.Http;
            toJSON(message: _29.Http): unknown;
            fromPartial<I_34 extends Exact<DeepPartial<_29.Http>, I_34>>(object: I_34): _29.Http;
        };
        HttpRule: {
            encode(message: _29.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.HttpRule;
            fromJSON(object: any): _29.HttpRule;
            toJSON(message: _29.HttpRule): unknown;
            fromPartial<I_35 extends Exact<DeepPartial<_29.HttpRule>, I_35>>(object: I_35): _29.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _29.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CustomHttpPattern;
            fromJSON(object: any): _29.CustomHttpPattern;
            toJSON(message: _29.CustomHttpPattern): unknown;
            fromPartial<I_36 extends Exact<DeepPartial<_29.CustomHttpPattern>, I_36>>(object: I_36): _29.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _28.FieldBehavior;
        fieldBehaviorToJSON(object: _28.FieldBehavior): string;
        FieldBehavior: typeof _28.FieldBehavior;
        errorReasonFromJSON(object: any): _27.ErrorReason;
        errorReasonToJSON(object: _27.ErrorReason): string;
        ErrorReason: typeof _27.ErrorReason;
        Endpoint: {
            encode(message: _26.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Endpoint;
            fromJSON(object: any): _26.Endpoint;
            toJSON(message: _26.Endpoint): unknown;
            fromPartial<I_37 extends Exact<DeepPartial<_26.Endpoint>, I_37>>(object: I_37): _26.Endpoint;
        };
        Documentation: {
            encode(message: _25.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Documentation;
            fromJSON(object: any): _25.Documentation;
            toJSON(message: _25.Documentation): unknown;
            fromPartial<I_38 extends Exact<DeepPartial<_25.Documentation>, I_38>>(object: I_38): _25.Documentation;
        };
        DocumentationRule: {
            encode(message: _25.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DocumentationRule;
            fromJSON(object: any): _25.DocumentationRule;
            toJSON(message: _25.DocumentationRule): unknown;
            fromPartial<I_39 extends Exact<DeepPartial<_25.DocumentationRule>, I_39>>(object: I_39): _25.DocumentationRule;
        };
        Page: {
            encode(message: _25.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Page;
            fromJSON(object: any): _25.Page;
            toJSON(message: _25.Page): unknown;
            fromPartial<I_40 extends Exact<DeepPartial<_25.Page>, I_40>>(object: I_40): _25.Page;
        };
        Distribution: {
            encode(message: _24.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution;
            fromJSON(object: any): _24.Distribution;
            toJSON(message: _24.Distribution): unknown;
            fromPartial<I_41 extends Exact<DeepPartial<_24.Distribution>, I_41>>(object: I_41): _24.Distribution;
        };
        Distribution_Range: {
            encode(message: _24.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_Range;
            fromJSON(object: any): _24.Distribution_Range;
            toJSON(message: _24.Distribution_Range): unknown;
            fromPartial<I_42 extends Exact<DeepPartial<_24.Distribution_Range>, I_42>>(object: I_42): _24.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _24.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_BucketOptions;
            fromJSON(object: any): _24.Distribution_BucketOptions;
            toJSON(message: _24.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends Exact<DeepPartial<_24.Distribution_BucketOptions>, I_43>>(object: I_43): _24.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _24.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _24.Distribution_BucketOptions_Linear;
            toJSON(message: _24.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends Exact<DeepPartial<_24.Distribution_BucketOptions_Linear>, I_44>>(object: I_44): _24.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _24.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _24.Distribution_BucketOptions_Exponential;
            toJSON(message: _24.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends Exact<DeepPartial<_24.Distribution_BucketOptions_Exponential>, I_45>>(object: I_45): _24.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _24.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _24.Distribution_BucketOptions_Explicit;
            toJSON(message: _24.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends Exact<DeepPartial<_24.Distribution_BucketOptions_Explicit>, I_46>>(object: I_46): _24.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _24.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Distribution_Exemplar;
            fromJSON(object: any): _24.Distribution_Exemplar;
            toJSON(message: _24.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends Exact<DeepPartial<_24.Distribution_Exemplar>, I_47>>(object: I_47): _24.Distribution_Exemplar;
        };
        Control: {
            encode(message: _23.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Control;
            fromJSON(object: any): _23.Control;
            toJSON(message: _23.Control): unknown;
            fromPartial<I_48 extends Exact<DeepPartial<_23.Control>, I_48>>(object: I_48): _23.Control;
        };
        Context: {
            encode(message: _22.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Context;
            fromJSON(object: any): _22.Context;
            toJSON(message: _22.Context): unknown;
            fromPartial<I_49 extends Exact<DeepPartial<_22.Context>, I_49>>(object: I_49): _22.Context;
        };
        ContextRule: {
            encode(message: _22.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ContextRule;
            fromJSON(object: any): _22.ContextRule;
            toJSON(message: _22.ContextRule): unknown;
            fromPartial<I_50 extends Exact<DeepPartial<_22.ContextRule>, I_50>>(object: I_50): _22.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _21.Property_PropertyType;
        property_PropertyTypeToJSON(object: _21.Property_PropertyType): string;
        Property_PropertyType: typeof _21.Property_PropertyType;
        ProjectProperties: {
            encode(message: _21.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ProjectProperties;
            fromJSON(object: any): _21.ProjectProperties;
            toJSON(message: _21.ProjectProperties): unknown;
            fromPartial<I_51 extends Exact<DeepPartial<_21.ProjectProperties>, I_51>>(object: I_51): _21.ProjectProperties;
        };
        Property: {
            encode(message: _21.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Property;
            fromJSON(object: any): _21.Property;
            toJSON(message: _21.Property): unknown;
            fromPartial<I_52 extends Exact<DeepPartial<_21.Property>, I_52>>(object: I_52): _21.Property;
        };
        changeTypeFromJSON(object: any): _20.ChangeType;
        changeTypeToJSON(object: _20.ChangeType): string;
        ChangeType: typeof _20.ChangeType;
        ConfigChange: {
            encode(message: _20.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ConfigChange;
            fromJSON(object: any): _20.ConfigChange;
            toJSON(message: _20.ConfigChange): unknown;
            fromPartial<I_53 extends Exact<DeepPartial<_20.ConfigChange>, I_53>>(object: I_53): _20.ConfigChange;
        };
        Advice: {
            encode(message: _20.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Advice;
            fromJSON(object: any): _20.Advice;
            toJSON(message: _20.Advice): unknown;
            fromPartial<I_54 extends Exact<DeepPartial<_20.Advice>, I_54>>(object: I_54): _20.Advice;
        };
        Billing: {
            encode(message: _18.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Billing;
            fromJSON(object: any): _18.Billing;
            toJSON(message: _18.Billing): unknown;
            fromPartial<I_55 extends Exact<DeepPartial<_18.Billing>, I_55>>(object: I_55): _18.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _18.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Billing_BillingDestination;
            fromJSON(object: any): _18.Billing_BillingDestination;
            toJSON(message: _18.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends Exact<DeepPartial<_18.Billing_BillingDestination>, I_56>>(object: I_56): _18.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _17.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _17.BackendRule_PathTranslation): string;
        BackendRule_PathTranslation: typeof _17.BackendRule_PathTranslation;
        Backend: {
            encode(message: _17.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Backend;
            fromJSON(object: any): _17.Backend;
            toJSON(message: _17.Backend): unknown;
            fromPartial<I_57 extends Exact<DeepPartial<_17.Backend>, I_57>>(object: I_57): _17.Backend;
        };
        BackendRule: {
            encode(message: _17.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.BackendRule;
            fromJSON(object: any): _17.BackendRule;
            toJSON(message: _17.BackendRule): unknown;
            fromPartial<I_58 extends Exact<DeepPartial<_17.BackendRule>, I_58>>(object: I_58): _17.BackendRule;
        };
        Authentication: {
            encode(message: _16.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Authentication;
            fromJSON(object: any): _16.Authentication;
            toJSON(message: _16.Authentication): unknown;
            fromPartial<I_59 extends Exact<DeepPartial<_16.Authentication>, I_59>>(object: I_59): _16.Authentication;
        };
        AuthenticationRule: {
            encode(message: _16.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AuthenticationRule;
            fromJSON(object: any): _16.AuthenticationRule;
            toJSON(message: _16.AuthenticationRule): unknown;
            fromPartial<I_60 extends Exact<DeepPartial<_16.AuthenticationRule>, I_60>>(object: I_60): _16.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _16.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.JwtLocation;
            fromJSON(object: any): _16.JwtLocation;
            toJSON(message: _16.JwtLocation): unknown;
            fromPartial<I_61 extends Exact<DeepPartial<_16.JwtLocation>, I_61>>(object: I_61): _16.JwtLocation;
        };
        AuthProvider: {
            encode(message: _16.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AuthProvider;
            fromJSON(object: any): _16.AuthProvider;
            toJSON(message: _16.AuthProvider): unknown;
            fromPartial<I_62 extends Exact<DeepPartial<_16.AuthProvider>, I_62>>(object: I_62): _16.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _16.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.OAuthRequirements;
            fromJSON(object: any): _16.OAuthRequirements;
            toJSON(message: _16.OAuthRequirements): unknown;
            fromPartial<I_63 extends Exact<DeepPartial<_16.OAuthRequirements>, I_63>>(object: I_63): _16.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _16.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AuthRequirement;
            fromJSON(object: any): _16.AuthRequirement;
            toJSON(message: _16.AuthRequirement): unknown;
            fromPartial<I_64 extends Exact<DeepPartial<_16.AuthRequirement>, I_64>>(object: I_64): _16.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _47.LogSeverity;
            logSeverityToJSON(object: _47.LogSeverity): string;
            LogSeverity: typeof _47.LogSeverity;
            HttpRequest: {
                encode(message: _46.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.HttpRequest;
                fromJSON(object: any): _46.HttpRequest;
                toJSON(message: _46.HttpRequest): unknown;
                fromPartial<I extends Exact<DeepPartial<_46.HttpRequest>, I>>(object: I): _46.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _51.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _51.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _51.TailLogEntriesResponse_SuppressionInfo_Reason;
            DeleteLogRequest: {
                encode(message: _51.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DeleteLogRequest;
                fromJSON(object: any): _51.DeleteLogRequest;
                toJSON(message: _51.DeleteLogRequest): unknown;
                fromPartial<I extends Exact<DeepPartial<_51.DeleteLogRequest>, I>>(object: I): _51.DeleteLogRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _51.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _51.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _51.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_1 extends Exact<DeepPartial<_51.WriteLogEntriesRequest_LabelsEntry>, I_1>>(object: I_1): _51.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesRequest: {
                encode(message: _51.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WriteLogEntriesRequest;
                fromJSON(object: any): _51.WriteLogEntriesRequest;
                toJSON(message: _51.WriteLogEntriesRequest): unknown;
                fromPartial<I_2 extends Exact<DeepPartial<_51.WriteLogEntriesRequest>, I_2>>(object: I_2): _51.WriteLogEntriesRequest;
            };
            WriteLogEntriesResponse: {
                encode(_: _51.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WriteLogEntriesResponse;
                fromJSON(_: any): _51.WriteLogEntriesResponse;
                toJSON(_: _51.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends Exact<DeepPartial<_51.WriteLogEntriesResponse>, I_3>>(_: I_3): _51.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_4 extends Exact<DeepPartial<_51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry>, I_4>>(object: I_4): _51.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _51.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _51.WriteLogEntriesPartialErrors;
                toJSON(message: _51.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_5 extends Exact<DeepPartial<_51.WriteLogEntriesPartialErrors>, I_5>>(object: I_5): _51.WriteLogEntriesPartialErrors;
            };
            ListLogEntriesRequest: {
                encode(message: _51.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListLogEntriesRequest;
                fromJSON(object: any): _51.ListLogEntriesRequest;
                toJSON(message: _51.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends Exact<DeepPartial<_51.ListLogEntriesRequest>, I_6>>(object: I_6): _51.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _51.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListLogEntriesResponse;
                fromJSON(object: any): _51.ListLogEntriesResponse;
                toJSON(message: _51.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends Exact<DeepPartial<_51.ListLogEntriesResponse>, I_7>>(object: I_7): _51.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _51.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _51.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _51.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends Exact<DeepPartial<_51.ListMonitoredResourceDescriptorsRequest>, I_8>>(object: I_8): _51.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _51.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _51.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _51.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends Exact<DeepPartial<_51.ListMonitoredResourceDescriptorsResponse>, I_9>>(object: I_9): _51.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _51.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListLogsRequest;
                fromJSON(object: any): _51.ListLogsRequest;
                toJSON(message: _51.ListLogsRequest): unknown;
                fromPartial<I_10 extends Exact<DeepPartial<_51.ListLogsRequest>, I_10>>(object: I_10): _51.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _51.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ListLogsResponse;
                fromJSON(object: any): _51.ListLogsResponse;
                toJSON(message: _51.ListLogsResponse): unknown;
                fromPartial<I_11 extends Exact<DeepPartial<_51.ListLogsResponse>, I_11>>(object: I_11): _51.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _51.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TailLogEntriesRequest;
                fromJSON(object: any): _51.TailLogEntriesRequest;
                toJSON(message: _51.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends Exact<DeepPartial<_51.TailLogEntriesRequest>, I_12>>(object: I_12): _51.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _51.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TailLogEntriesResponse;
                fromJSON(object: any): _51.TailLogEntriesResponse;
                toJSON(message: _51.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends Exact<DeepPartial<_51.TailLogEntriesResponse>, I_13>>(object: I_13): _51.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _51.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _51.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _51.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends Exact<DeepPartial<_51.TailLogEntriesResponse_SuppressionInfo>, I_14>>(object: I_14): _51.TailLogEntriesResponse_SuppressionInfo;
            };
            logMetric_ApiVersionFromJSON(object: any): _50.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _50.LogMetric_ApiVersion): string;
            LogMetric_ApiVersion: typeof _50.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _50.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _50.LogMetric_LabelExtractorsEntry;
                toJSON(message: _50.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_15 extends Exact<DeepPartial<_50.LogMetric_LabelExtractorsEntry>, I_15>>(object: I_15): _50.LogMetric_LabelExtractorsEntry;
            };
            LogMetric: {
                encode(message: _50.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.LogMetric;
                fromJSON(object: any): _50.LogMetric;
                toJSON(message: _50.LogMetric): unknown;
                fromPartial<I_16 extends Exact<DeepPartial<_50.LogMetric>, I_16>>(object: I_16): _50.LogMetric;
            };
            ListLogMetricsRequest: {
                encode(message: _50.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ListLogMetricsRequest;
                fromJSON(object: any): _50.ListLogMetricsRequest;
                toJSON(message: _50.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends Exact<DeepPartial<_50.ListLogMetricsRequest>, I_17>>(object: I_17): _50.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _50.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ListLogMetricsResponse;
                fromJSON(object: any): _50.ListLogMetricsResponse;
                toJSON(message: _50.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends Exact<DeepPartial<_50.ListLogMetricsResponse>, I_18>>(object: I_18): _50.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _50.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GetLogMetricRequest;
                fromJSON(object: any): _50.GetLogMetricRequest;
                toJSON(message: _50.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends Exact<DeepPartial<_50.GetLogMetricRequest>, I_19>>(object: I_19): _50.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _50.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CreateLogMetricRequest;
                fromJSON(object: any): _50.CreateLogMetricRequest;
                toJSON(message: _50.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends Exact<DeepPartial<_50.CreateLogMetricRequest>, I_20>>(object: I_20): _50.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _50.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.UpdateLogMetricRequest;
                fromJSON(object: any): _50.UpdateLogMetricRequest;
                toJSON(message: _50.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends Exact<DeepPartial<_50.UpdateLogMetricRequest>, I_21>>(object: I_21): _50.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _50.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DeleteLogMetricRequest;
                fromJSON(object: any): _50.DeleteLogMetricRequest;
                toJSON(message: _50.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends Exact<DeepPartial<_50.DeleteLogMetricRequest>, I_22>>(object: I_22): _50.DeleteLogMetricRequest;
            };
            logSink_VersionFormatFromJSON(object: any): _49.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _49.LogSink_VersionFormat): string;
            lifecycleStateFromJSON(object: any): _49.LifecycleState;
            lifecycleStateToJSON(object: _49.LifecycleState): string;
            operationStateFromJSON(object: any): _49.OperationState;
            operationStateToJSON(object: _49.OperationState): string;
            LogSink_VersionFormat: typeof _49.LogSink_VersionFormat;
            LifecycleState: typeof _49.LifecycleState;
            OperationState: typeof _49.OperationState;
            LogBucket: {
                encode(message: _49.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.LogBucket;
                fromJSON(object: any): _49.LogBucket;
                toJSON(message: _49.LogBucket): unknown;
                fromPartial<I_23 extends Exact<DeepPartial<_49.LogBucket>, I_23>>(object: I_23): _49.LogBucket;
            };
            LogView: {
                encode(message: _49.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.LogView;
                fromJSON(object: any): _49.LogView;
                toJSON(message: _49.LogView): unknown;
                fromPartial<I_24 extends Exact<DeepPartial<_49.LogView>, I_24>>(object: I_24): _49.LogView;
            };
            LogSink: {
                encode(message: _49.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.LogSink;
                fromJSON(object: any): _49.LogSink;
                toJSON(message: _49.LogSink): unknown;
                fromPartial<I_25 extends Exact<DeepPartial<_49.LogSink>, I_25>>(object: I_25): _49.LogSink;
            };
            BigQueryOptions: {
                encode(message: _49.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.BigQueryOptions;
                fromJSON(object: any): _49.BigQueryOptions;
                toJSON(message: _49.BigQueryOptions): unknown;
                fromPartial<I_26 extends Exact<DeepPartial<_49.BigQueryOptions>, I_26>>(object: I_26): _49.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _49.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListBucketsRequest;
                fromJSON(object: any): _49.ListBucketsRequest;
                toJSON(message: _49.ListBucketsRequest): unknown;
                fromPartial<I_27 extends Exact<DeepPartial<_49.ListBucketsRequest>, I_27>>(object: I_27): _49.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _49.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListBucketsResponse;
                fromJSON(object: any): _49.ListBucketsResponse;
                toJSON(message: _49.ListBucketsResponse): unknown;
                fromPartial<I_28 extends Exact<DeepPartial<_49.ListBucketsResponse>, I_28>>(object: I_28): _49.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _49.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CreateBucketRequest;
                fromJSON(object: any): _49.CreateBucketRequest;
                toJSON(message: _49.CreateBucketRequest): unknown;
                fromPartial<I_29 extends Exact<DeepPartial<_49.CreateBucketRequest>, I_29>>(object: I_29): _49.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _49.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateBucketRequest;
                fromJSON(object: any): _49.UpdateBucketRequest;
                toJSON(message: _49.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends Exact<DeepPartial<_49.UpdateBucketRequest>, I_30>>(object: I_30): _49.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _49.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetBucketRequest;
                fromJSON(object: any): _49.GetBucketRequest;
                toJSON(message: _49.GetBucketRequest): unknown;
                fromPartial<I_31 extends Exact<DeepPartial<_49.GetBucketRequest>, I_31>>(object: I_31): _49.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _49.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DeleteBucketRequest;
                fromJSON(object: any): _49.DeleteBucketRequest;
                toJSON(message: _49.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends Exact<DeepPartial<_49.DeleteBucketRequest>, I_32>>(object: I_32): _49.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _49.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UndeleteBucketRequest;
                fromJSON(object: any): _49.UndeleteBucketRequest;
                toJSON(message: _49.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends Exact<DeepPartial<_49.UndeleteBucketRequest>, I_33>>(object: I_33): _49.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _49.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListViewsRequest;
                fromJSON(object: any): _49.ListViewsRequest;
                toJSON(message: _49.ListViewsRequest): unknown;
                fromPartial<I_34 extends Exact<DeepPartial<_49.ListViewsRequest>, I_34>>(object: I_34): _49.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _49.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListViewsResponse;
                fromJSON(object: any): _49.ListViewsResponse;
                toJSON(message: _49.ListViewsResponse): unknown;
                fromPartial<I_35 extends Exact<DeepPartial<_49.ListViewsResponse>, I_35>>(object: I_35): _49.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _49.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CreateViewRequest;
                fromJSON(object: any): _49.CreateViewRequest;
                toJSON(message: _49.CreateViewRequest): unknown;
                fromPartial<I_36 extends Exact<DeepPartial<_49.CreateViewRequest>, I_36>>(object: I_36): _49.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _49.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateViewRequest;
                fromJSON(object: any): _49.UpdateViewRequest;
                toJSON(message: _49.UpdateViewRequest): unknown;
                fromPartial<I_37 extends Exact<DeepPartial<_49.UpdateViewRequest>, I_37>>(object: I_37): _49.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _49.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetViewRequest;
                fromJSON(object: any): _49.GetViewRequest;
                toJSON(message: _49.GetViewRequest): unknown;
                fromPartial<I_38 extends Exact<DeepPartial<_49.GetViewRequest>, I_38>>(object: I_38): _49.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _49.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DeleteViewRequest;
                fromJSON(object: any): _49.DeleteViewRequest;
                toJSON(message: _49.DeleteViewRequest): unknown;
                fromPartial<I_39 extends Exact<DeepPartial<_49.DeleteViewRequest>, I_39>>(object: I_39): _49.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _49.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListSinksRequest;
                fromJSON(object: any): _49.ListSinksRequest;
                toJSON(message: _49.ListSinksRequest): unknown;
                fromPartial<I_40 extends Exact<DeepPartial<_49.ListSinksRequest>, I_40>>(object: I_40): _49.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _49.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListSinksResponse;
                fromJSON(object: any): _49.ListSinksResponse;
                toJSON(message: _49.ListSinksResponse): unknown;
                fromPartial<I_41 extends Exact<DeepPartial<_49.ListSinksResponse>, I_41>>(object: I_41): _49.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _49.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetSinkRequest;
                fromJSON(object: any): _49.GetSinkRequest;
                toJSON(message: _49.GetSinkRequest): unknown;
                fromPartial<I_42 extends Exact<DeepPartial<_49.GetSinkRequest>, I_42>>(object: I_42): _49.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _49.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CreateSinkRequest;
                fromJSON(object: any): _49.CreateSinkRequest;
                toJSON(message: _49.CreateSinkRequest): unknown;
                fromPartial<I_43 extends Exact<DeepPartial<_49.CreateSinkRequest>, I_43>>(object: I_43): _49.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _49.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateSinkRequest;
                fromJSON(object: any): _49.UpdateSinkRequest;
                toJSON(message: _49.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends Exact<DeepPartial<_49.UpdateSinkRequest>, I_44>>(object: I_44): _49.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _49.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DeleteSinkRequest;
                fromJSON(object: any): _49.DeleteSinkRequest;
                toJSON(message: _49.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends Exact<DeepPartial<_49.DeleteSinkRequest>, I_45>>(object: I_45): _49.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _49.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.LogExclusion;
                fromJSON(object: any): _49.LogExclusion;
                toJSON(message: _49.LogExclusion): unknown;
                fromPartial<I_46 extends Exact<DeepPartial<_49.LogExclusion>, I_46>>(object: I_46): _49.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _49.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListExclusionsRequest;
                fromJSON(object: any): _49.ListExclusionsRequest;
                toJSON(message: _49.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends Exact<DeepPartial<_49.ListExclusionsRequest>, I_47>>(object: I_47): _49.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _49.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ListExclusionsResponse;
                fromJSON(object: any): _49.ListExclusionsResponse;
                toJSON(message: _49.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends Exact<DeepPartial<_49.ListExclusionsResponse>, I_48>>(object: I_48): _49.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _49.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetExclusionRequest;
                fromJSON(object: any): _49.GetExclusionRequest;
                toJSON(message: _49.GetExclusionRequest): unknown;
                fromPartial<I_49 extends Exact<DeepPartial<_49.GetExclusionRequest>, I_49>>(object: I_49): _49.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _49.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CreateExclusionRequest;
                fromJSON(object: any): _49.CreateExclusionRequest;
                toJSON(message: _49.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends Exact<DeepPartial<_49.CreateExclusionRequest>, I_50>>(object: I_50): _49.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _49.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateExclusionRequest;
                fromJSON(object: any): _49.UpdateExclusionRequest;
                toJSON(message: _49.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends Exact<DeepPartial<_49.UpdateExclusionRequest>, I_51>>(object: I_51): _49.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _49.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.DeleteExclusionRequest;
                fromJSON(object: any): _49.DeleteExclusionRequest;
                toJSON(message: _49.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends Exact<DeepPartial<_49.DeleteExclusionRequest>, I_52>>(object: I_52): _49.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _49.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetCmekSettingsRequest;
                fromJSON(object: any): _49.GetCmekSettingsRequest;
                toJSON(message: _49.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends Exact<DeepPartial<_49.GetCmekSettingsRequest>, I_53>>(object: I_53): _49.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _49.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateCmekSettingsRequest;
                fromJSON(object: any): _49.UpdateCmekSettingsRequest;
                toJSON(message: _49.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends Exact<DeepPartial<_49.UpdateCmekSettingsRequest>, I_54>>(object: I_54): _49.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _49.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CmekSettings;
                fromJSON(object: any): _49.CmekSettings;
                toJSON(message: _49.CmekSettings): unknown;
                fromPartial<I_55 extends Exact<DeepPartial<_49.CmekSettings>, I_55>>(object: I_55): _49.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _49.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetSettingsRequest;
                fromJSON(object: any): _49.GetSettingsRequest;
                toJSON(message: _49.GetSettingsRequest): unknown;
                fromPartial<I_56 extends Exact<DeepPartial<_49.GetSettingsRequest>, I_56>>(object: I_56): _49.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _49.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.UpdateSettingsRequest;
                fromJSON(object: any): _49.UpdateSettingsRequest;
                toJSON(message: _49.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends Exact<DeepPartial<_49.UpdateSettingsRequest>, I_57>>(object: I_57): _49.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _49.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Settings;
                fromJSON(object: any): _49.Settings;
                toJSON(message: _49.Settings): unknown;
                fromPartial<I_58 extends Exact<DeepPartial<_49.Settings>, I_58>>(object: I_58): _49.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _49.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CopyLogEntriesRequest;
                fromJSON(object: any): _49.CopyLogEntriesRequest;
                toJSON(message: _49.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends Exact<DeepPartial<_49.CopyLogEntriesRequest>, I_59>>(object: I_59): _49.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _49.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CopyLogEntriesMetadata;
                fromJSON(object: any): _49.CopyLogEntriesMetadata;
                toJSON(message: _49.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends Exact<DeepPartial<_49.CopyLogEntriesMetadata>, I_60>>(object: I_60): _49.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _49.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CopyLogEntriesResponse;
                fromJSON(object: any): _49.CopyLogEntriesResponse;
                toJSON(message: _49.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends Exact<DeepPartial<_49.CopyLogEntriesResponse>, I_61>>(object: I_61): _49.CopyLogEntriesResponse;
            };
            LogEntry_LabelsEntry: {
                encode(message: _48.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LogEntry_LabelsEntry;
                fromJSON(object: any): _48.LogEntry_LabelsEntry;
                toJSON(message: _48.LogEntry_LabelsEntry): unknown;
                fromPartial<I_62 extends Exact<DeepPartial<_48.LogEntry_LabelsEntry>, I_62>>(object: I_62): _48.LogEntry_LabelsEntry;
            };
            LogEntry: {
                encode(message: _48.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LogEntry;
                fromJSON(object: any): _48.LogEntry;
                toJSON(message: _48.LogEntry): unknown;
                fromPartial<I_63 extends Exact<DeepPartial<_48.LogEntry>, I_63>>(object: I_63): _48.LogEntry;
            };
            LogEntryOperation: {
                encode(message: _48.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LogEntryOperation;
                fromJSON(object: any): _48.LogEntryOperation;
                toJSON(message: _48.LogEntryOperation): unknown;
                fromPartial<I_64 extends Exact<DeepPartial<_48.LogEntryOperation>, I_64>>(object: I_64): _48.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _48.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LogEntrySourceLocation;
                fromJSON(object: any): _48.LogEntrySourceLocation;
                toJSON(message: _48.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends Exact<DeepPartial<_48.LogEntrySourceLocation>, I_65>>(object: I_65): _48.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _48.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LogSplit;
                fromJSON(object: any): _48.LogSplit;
                toJSON(message: _48.LogSplit): unknown;
                fromPartial<I_66 extends Exact<DeepPartial<_48.LogSplit>, I_66>>(object: I_66): _48.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _52.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Operation;
            fromJSON(object: any): _52.Operation;
            toJSON(message: _52.Operation): unknown;
            fromPartial<I extends Exact<DeepPartial<_52.Operation>, I>>(object: I): _52.Operation;
        };
        GetOperationRequest: {
            encode(message: _52.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GetOperationRequest;
            fromJSON(object: any): _52.GetOperationRequest;
            toJSON(message: _52.GetOperationRequest): unknown;
            fromPartial<I_1 extends Exact<DeepPartial<_52.GetOperationRequest>, I_1>>(object: I_1): _52.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _52.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ListOperationsRequest;
            fromJSON(object: any): _52.ListOperationsRequest;
            toJSON(message: _52.ListOperationsRequest): unknown;
            fromPartial<I_2 extends Exact<DeepPartial<_52.ListOperationsRequest>, I_2>>(object: I_2): _52.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _52.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ListOperationsResponse;
            fromJSON(object: any): _52.ListOperationsResponse;
            toJSON(message: _52.ListOperationsResponse): unknown;
            fromPartial<I_3 extends Exact<DeepPartial<_52.ListOperationsResponse>, I_3>>(object: I_3): _52.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _52.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.CancelOperationRequest;
            fromJSON(object: any): _52.CancelOperationRequest;
            toJSON(message: _52.CancelOperationRequest): unknown;
            fromPartial<I_4 extends Exact<DeepPartial<_52.CancelOperationRequest>, I_4>>(object: I_4): _52.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _52.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DeleteOperationRequest;
            fromJSON(object: any): _52.DeleteOperationRequest;
            toJSON(message: _52.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends Exact<DeepPartial<_52.DeleteOperationRequest>, I_5>>(object: I_5): _52.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _52.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WaitOperationRequest;
            fromJSON(object: any): _52.WaitOperationRequest;
            toJSON(message: _52.WaitOperationRequest): unknown;
            fromPartial<I_6 extends Exact<DeepPartial<_52.WaitOperationRequest>, I_6>>(object: I_6): _52.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _52.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OperationInfo;
            fromJSON(object: any): _52.OperationInfo;
            toJSON(message: _52.OperationInfo): unknown;
            fromPartial<I_7 extends Exact<DeepPartial<_52.OperationInfo>, I_7>>(object: I_7): _52.OperationInfo;
        };
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _63.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DoubleValue;
            fromJSON(object: any): _63.DoubleValue;
            toJSON(message: _63.DoubleValue): unknown;
            fromPartial<I extends Exact<DeepPartial<_63.DoubleValue>, I>>(object: I): _63.DoubleValue;
        };
        FloatValue: {
            encode(message: _63.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.FloatValue;
            fromJSON(object: any): _63.FloatValue;
            toJSON(message: _63.FloatValue): unknown;
            fromPartial<I_1 extends Exact<DeepPartial<_63.FloatValue>, I_1>>(object: I_1): _63.FloatValue;
        };
        Int64Value: {
            encode(message: _63.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Int64Value;
            fromJSON(object: any): _63.Int64Value;
            toJSON(message: _63.Int64Value): unknown;
            fromPartial<I_2 extends Exact<DeepPartial<_63.Int64Value>, I_2>>(object: I_2): _63.Int64Value;
        };
        UInt64Value: {
            encode(message: _63.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UInt64Value;
            fromJSON(object: any): _63.UInt64Value;
            toJSON(message: _63.UInt64Value): unknown;
            fromPartial<I_3 extends Exact<DeepPartial<_63.UInt64Value>, I_3>>(object: I_3): _63.UInt64Value;
        };
        Int32Value: {
            encode(message: _63.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Int32Value;
            fromJSON(object: any): _63.Int32Value;
            toJSON(message: _63.Int32Value): unknown;
            fromPartial<I_4 extends Exact<DeepPartial<_63.Int32Value>, I_4>>(object: I_4): _63.Int32Value;
        };
        UInt32Value: {
            encode(message: _63.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UInt32Value;
            fromJSON(object: any): _63.UInt32Value;
            toJSON(message: _63.UInt32Value): unknown;
            fromPartial<I_5 extends Exact<DeepPartial<_63.UInt32Value>, I_5>>(object: I_5): _63.UInt32Value;
        };
        BoolValue: {
            encode(message: _63.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BoolValue;
            fromJSON(object: any): _63.BoolValue;
            toJSON(message: _63.BoolValue): unknown;
            fromPartial<I_6 extends Exact<DeepPartial<_63.BoolValue>, I_6>>(object: I_6): _63.BoolValue;
        };
        StringValue: {
            encode(message: _63.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.StringValue;
            fromJSON(object: any): _63.StringValue;
            toJSON(message: _63.StringValue): unknown;
            fromPartial<I_7 extends Exact<DeepPartial<_63.StringValue>, I_7>>(object: I_7): _63.StringValue;
        };
        BytesValue: {
            encode(message: _63.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BytesValue;
            fromJSON(object: any): _63.BytesValue;
            toJSON(message: _63.BytesValue): unknown;
            fromPartial<I_8 extends Exact<DeepPartial<_63.BytesValue>, I_8>>(object: I_8): _63.BytesValue;
        };
        field_KindFromJSON(object: any): _62.Field_Kind;
        field_KindToJSON(object: _62.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _62.Field_Cardinality;
        field_CardinalityToJSON(object: _62.Field_Cardinality): string;
        syntaxFromJSON(object: any): _62.Syntax;
        syntaxToJSON(object: _62.Syntax): string;
        Field_Kind: typeof _62.Field_Kind;
        Field_Cardinality: typeof _62.Field_Cardinality;
        Syntax: typeof _62.Syntax;
        Type: {
            encode(message: _62.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Type;
            fromJSON(object: any): _62.Type;
            toJSON(message: _62.Type): unknown;
            fromPartial<I_9 extends Exact<DeepPartial<_62.Type>, I_9>>(object: I_9): _62.Type;
        };
        Field: {
            encode(message: _62.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Field;
            fromJSON(object: any): _62.Field;
            toJSON(message: _62.Field): unknown;
            fromPartial<I_10 extends Exact<DeepPartial<_62.Field>, I_10>>(object: I_10): _62.Field;
        };
        Enum: {
            encode(message: _62.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Enum;
            fromJSON(object: any): _62.Enum;
            toJSON(message: _62.Enum): unknown;
            fromPartial<I_11 extends Exact<DeepPartial<_62.Enum>, I_11>>(object: I_11): _62.Enum;
        };
        EnumValue: {
            encode(message: _62.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.EnumValue;
            fromJSON(object: any): _62.EnumValue;
            toJSON(message: _62.EnumValue): unknown;
            fromPartial<I_12 extends Exact<DeepPartial<_62.EnumValue>, I_12>>(object: I_12): _62.EnumValue;
        };
        Option: {
            encode(message: _62.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Option;
            fromJSON(object: any): _62.Option;
            toJSON(message: _62.Option): unknown;
            fromPartial<I_13 extends Exact<DeepPartial<_62.Option>, I_13>>(object: I_13): _62.Option;
        };
        Timestamp: {
            encode(message: _61.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Timestamp;
            fromJSON(object: any): _61.Timestamp;
            toJSON(message: _61.Timestamp): unknown;
            fromPartial<I_14 extends Exact<DeepPartial<_61.Timestamp>, I_14>>(object: I_14): _61.Timestamp;
        };
        nullValueFromJSON(object: any): _60.NullValue;
        nullValueToJSON(object: _60.NullValue): string;
        NullValue: typeof _60.NullValue;
        Struct_FieldsEntry: {
            encode(message: _60.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Struct_FieldsEntry;
            fromJSON(object: any): _60.Struct_FieldsEntry;
            toJSON(message: _60.Struct_FieldsEntry): unknown;
            fromPartial<I_15 extends Exact<DeepPartial<_60.Struct_FieldsEntry>, I_15>>(object: I_15): _60.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _60.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Struct;
            fromJSON(object: any): _60.Struct;
            toJSON(message: _60.Struct): unknown;
            fromPartial<I_16 extends Exact<DeepPartial<_60.Struct>, I_16>>(object: I_16): _60.Struct;
        };
        Value: {
            encode(message: _60.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Value;
            fromJSON(object: any): _60.Value;
            toJSON(message: _60.Value): unknown;
            fromPartial<I_17 extends Exact<DeepPartial<_60.Value>, I_17>>(object: I_17): _60.Value;
        };
        ListValue: {
            encode(message: _60.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ListValue;
            fromJSON(object: any): _60.ListValue;
            toJSON(message: _60.ListValue): unknown;
            fromPartial<I_18 extends Exact<DeepPartial<_60.ListValue>, I_18>>(object: I_18): _60.ListValue;
        };
        SourceContext: {
            encode(message: _59.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SourceContext;
            fromJSON(object: any): _59.SourceContext;
            toJSON(message: _59.SourceContext): unknown;
            fromPartial<I_19 extends Exact<DeepPartial<_59.SourceContext>, I_19>>(object: I_19): _59.SourceContext;
        };
        FieldMask: {
            encode(message: _58.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.FieldMask;
            fromJSON(object: any): _58.FieldMask;
            toJSON(message: _58.FieldMask): unknown;
            fromPartial<I_20 extends Exact<DeepPartial<_58.FieldMask>, I_20>>(object: I_20): _58.FieldMask;
        };
        Empty: {
            encode(_: _57.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Empty;
            fromJSON(_: any): _57.Empty;
            toJSON(_: _57.Empty): unknown;
            fromPartial<I_21 extends Exact<DeepPartial<_57.Empty>, I_21>>(_: I_21): _57.Empty;
        };
        Duration: {
            encode(message: _56.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Duration;
            fromJSON(object: any): _56.Duration;
            toJSON(message: _56.Duration): unknown;
            fromPartial<I_22 extends Exact<DeepPartial<_56.Duration>, I_22>>(object: I_22): _56.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _55.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _55.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _55.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _55.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _55.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _55.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _55.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _55.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _55.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _55.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _55.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _55.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _55.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _55.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _55.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _55.FieldOptions_CType;
        FieldOptions_JSType: typeof _55.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _55.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _55.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FileDescriptorSet;
            fromJSON(object: any): _55.FileDescriptorSet;
            toJSON(message: _55.FileDescriptorSet): unknown;
            fromPartial<I_23 extends Exact<DeepPartial<_55.FileDescriptorSet>, I_23>>(object: I_23): _55.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _55.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FileDescriptorProto;
            fromJSON(object: any): _55.FileDescriptorProto;
            toJSON(message: _55.FileDescriptorProto): unknown;
            fromPartial<I_24 extends Exact<DeepPartial<_55.FileDescriptorProto>, I_24>>(object: I_24): _55.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _55.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DescriptorProto;
            fromJSON(object: any): _55.DescriptorProto;
            toJSON(message: _55.DescriptorProto): unknown;
            fromPartial<I_25 extends Exact<DeepPartial<_55.DescriptorProto>, I_25>>(object: I_25): _55.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _55.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _55.DescriptorProto_ExtensionRange;
            toJSON(message: _55.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends Exact<DeepPartial<_55.DescriptorProto_ExtensionRange>, I_26>>(object: I_26): _55.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _55.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DescriptorProto_ReservedRange;
            fromJSON(object: any): _55.DescriptorProto_ReservedRange;
            toJSON(message: _55.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends Exact<DeepPartial<_55.DescriptorProto_ReservedRange>, I_27>>(object: I_27): _55.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _55.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ExtensionRangeOptions;
            fromJSON(object: any): _55.ExtensionRangeOptions;
            toJSON(message: _55.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends Exact<DeepPartial<_55.ExtensionRangeOptions>, I_28>>(object: I_28): _55.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _55.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FieldDescriptorProto;
            fromJSON(object: any): _55.FieldDescriptorProto;
            toJSON(message: _55.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends Exact<DeepPartial<_55.FieldDescriptorProto>, I_29>>(object: I_29): _55.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _55.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.OneofDescriptorProto;
            fromJSON(object: any): _55.OneofDescriptorProto;
            toJSON(message: _55.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends Exact<DeepPartial<_55.OneofDescriptorProto>, I_30>>(object: I_30): _55.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _55.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EnumDescriptorProto;
            fromJSON(object: any): _55.EnumDescriptorProto;
            toJSON(message: _55.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends Exact<DeepPartial<_55.EnumDescriptorProto>, I_31>>(object: I_31): _55.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _55.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _55.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _55.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends Exact<DeepPartial<_55.EnumDescriptorProto_EnumReservedRange>, I_32>>(object: I_32): _55.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _55.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EnumValueDescriptorProto;
            fromJSON(object: any): _55.EnumValueDescriptorProto;
            toJSON(message: _55.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends Exact<DeepPartial<_55.EnumValueDescriptorProto>, I_33>>(object: I_33): _55.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _55.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ServiceDescriptorProto;
            fromJSON(object: any): _55.ServiceDescriptorProto;
            toJSON(message: _55.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends Exact<DeepPartial<_55.ServiceDescriptorProto>, I_34>>(object: I_34): _55.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _55.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MethodDescriptorProto;
            fromJSON(object: any): _55.MethodDescriptorProto;
            toJSON(message: _55.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends Exact<DeepPartial<_55.MethodDescriptorProto>, I_35>>(object: I_35): _55.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _55.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FileOptions;
            fromJSON(object: any): _55.FileOptions;
            toJSON(message: _55.FileOptions): unknown;
            fromPartial<I_36 extends Exact<DeepPartial<_55.FileOptions>, I_36>>(object: I_36): _55.FileOptions;
        };
        MessageOptions: {
            encode(message: _55.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MessageOptions;
            fromJSON(object: any): _55.MessageOptions;
            toJSON(message: _55.MessageOptions): unknown;
            fromPartial<I_37 extends Exact<DeepPartial<_55.MessageOptions>, I_37>>(object: I_37): _55.MessageOptions;
        };
        FieldOptions: {
            encode(message: _55.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.FieldOptions;
            fromJSON(object: any): _55.FieldOptions;
            toJSON(message: _55.FieldOptions): unknown;
            fromPartial<I_38 extends Exact<DeepPartial<_55.FieldOptions>, I_38>>(object: I_38): _55.FieldOptions;
        };
        OneofOptions: {
            encode(message: _55.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.OneofOptions;
            fromJSON(object: any): _55.OneofOptions;
            toJSON(message: _55.OneofOptions): unknown;
            fromPartial<I_39 extends Exact<DeepPartial<_55.OneofOptions>, I_39>>(object: I_39): _55.OneofOptions;
        };
        EnumOptions: {
            encode(message: _55.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EnumOptions;
            fromJSON(object: any): _55.EnumOptions;
            toJSON(message: _55.EnumOptions): unknown;
            fromPartial<I_40 extends Exact<DeepPartial<_55.EnumOptions>, I_40>>(object: I_40): _55.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _55.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EnumValueOptions;
            fromJSON(object: any): _55.EnumValueOptions;
            toJSON(message: _55.EnumValueOptions): unknown;
            fromPartial<I_41 extends Exact<DeepPartial<_55.EnumValueOptions>, I_41>>(object: I_41): _55.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _55.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ServiceOptions;
            fromJSON(object: any): _55.ServiceOptions;
            toJSON(message: _55.ServiceOptions): unknown;
            fromPartial<I_42 extends Exact<DeepPartial<_55.ServiceOptions>, I_42>>(object: I_42): _55.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _55.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MethodOptions;
            fromJSON(object: any): _55.MethodOptions;
            toJSON(message: _55.MethodOptions): unknown;
            fromPartial<I_43 extends Exact<DeepPartial<_55.MethodOptions>, I_43>>(object: I_43): _55.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _55.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.UninterpretedOption;
            fromJSON(object: any): _55.UninterpretedOption;
            toJSON(message: _55.UninterpretedOption): unknown;
            fromPartial<I_44 extends Exact<DeepPartial<_55.UninterpretedOption>, I_44>>(object: I_44): _55.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _55.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.UninterpretedOption_NamePart;
            fromJSON(object: any): _55.UninterpretedOption_NamePart;
            toJSON(message: _55.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends Exact<DeepPartial<_55.UninterpretedOption_NamePart>, I_45>>(object: I_45): _55.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _55.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.SourceCodeInfo;
            fromJSON(object: any): _55.SourceCodeInfo;
            toJSON(message: _55.SourceCodeInfo): unknown;
            fromPartial<I_46 extends Exact<DeepPartial<_55.SourceCodeInfo>, I_46>>(object: I_46): _55.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _55.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.SourceCodeInfo_Location;
            fromJSON(object: any): _55.SourceCodeInfo_Location;
            toJSON(message: _55.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends Exact<DeepPartial<_55.SourceCodeInfo_Location>, I_47>>(object: I_47): _55.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _55.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GeneratedCodeInfo;
            fromJSON(object: any): _55.GeneratedCodeInfo;
            toJSON(message: _55.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends Exact<DeepPartial<_55.GeneratedCodeInfo>, I_48>>(object: I_48): _55.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _55.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _55.GeneratedCodeInfo_Annotation;
            toJSON(message: _55.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends Exact<DeepPartial<_55.GeneratedCodeInfo_Annotation>, I_49>>(object: I_49): _55.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _54.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Api;
            fromJSON(object: any): _54.Api;
            toJSON(message: _54.Api): unknown;
            fromPartial<I_50 extends Exact<DeepPartial<_54.Api>, I_50>>(object: I_50): _54.Api;
        };
        Method: {
            encode(message: _54.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Method;
            fromJSON(object: any): _54.Method;
            toJSON(message: _54.Method): unknown;
            fromPartial<I_51 extends Exact<DeepPartial<_54.Method>, I_51>>(object: I_51): _54.Method;
        };
        Mixin: {
            encode(message: _54.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Mixin;
            fromJSON(object: any): _54.Mixin;
            toJSON(message: _54.Mixin): unknown;
            fromPartial<I_52 extends Exact<DeepPartial<_54.Mixin>, I_52>>(object: I_52): _54.Mixin;
        };
        Any: {
            encode(message: _53.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Any;
            fromJSON(object: any): _53.Any;
            toJSON(message: _53.Any): unknown;
            fromPartial<I_53 extends Exact<DeepPartial<_53.Any>, I_53>>(object: I_53): _53.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _66.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Status;
            fromJSON(object: any): _66.Status;
            toJSON(message: _66.Status): unknown;
            fromPartial<I extends Exact<DeepPartial<_66.Status>, I>>(object: I): _66.Status;
        };
        RetryInfo: {
            encode(message: _65.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.RetryInfo;
            fromJSON(object: any): _65.RetryInfo;
            toJSON(message: _65.RetryInfo): unknown;
            fromPartial<I_1 extends Exact<DeepPartial<_65.RetryInfo>, I_1>>(object: I_1): _65.RetryInfo;
        };
        DebugInfo: {
            encode(message: _65.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DebugInfo;
            fromJSON(object: any): _65.DebugInfo;
            toJSON(message: _65.DebugInfo): unknown;
            fromPartial<I_2 extends Exact<DeepPartial<_65.DebugInfo>, I_2>>(object: I_2): _65.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _65.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QuotaFailure;
            fromJSON(object: any): _65.QuotaFailure;
            toJSON(message: _65.QuotaFailure): unknown;
            fromPartial<I_3 extends Exact<DeepPartial<_65.QuotaFailure>, I_3>>(object: I_3): _65.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _65.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QuotaFailure_Violation;
            fromJSON(object: any): _65.QuotaFailure_Violation;
            toJSON(message: _65.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends Exact<DeepPartial<_65.QuotaFailure_Violation>, I_4>>(object: I_4): _65.QuotaFailure_Violation;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _65.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _65.ErrorInfo_MetadataEntry;
            toJSON(message: _65.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_5 extends Exact<DeepPartial<_65.ErrorInfo_MetadataEntry>, I_5>>(object: I_5): _65.ErrorInfo_MetadataEntry;
        };
        ErrorInfo: {
            encode(message: _65.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ErrorInfo;
            fromJSON(object: any): _65.ErrorInfo;
            toJSON(message: _65.ErrorInfo): unknown;
            fromPartial<I_6 extends Exact<DeepPartial<_65.ErrorInfo>, I_6>>(object: I_6): _65.ErrorInfo;
        };
        PreconditionFailure: {
            encode(message: _65.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PreconditionFailure;
            fromJSON(object: any): _65.PreconditionFailure;
            toJSON(message: _65.PreconditionFailure): unknown;
            fromPartial<I_7 extends Exact<DeepPartial<_65.PreconditionFailure>, I_7>>(object: I_7): _65.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _65.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PreconditionFailure_Violation;
            fromJSON(object: any): _65.PreconditionFailure_Violation;
            toJSON(message: _65.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends Exact<DeepPartial<_65.PreconditionFailure_Violation>, I_8>>(object: I_8): _65.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _65.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BadRequest;
            fromJSON(object: any): _65.BadRequest;
            toJSON(message: _65.BadRequest): unknown;
            fromPartial<I_9 extends Exact<DeepPartial<_65.BadRequest>, I_9>>(object: I_9): _65.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _65.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BadRequest_FieldViolation;
            fromJSON(object: any): _65.BadRequest_FieldViolation;
            toJSON(message: _65.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends Exact<DeepPartial<_65.BadRequest_FieldViolation>, I_10>>(object: I_10): _65.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _65.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.RequestInfo;
            fromJSON(object: any): _65.RequestInfo;
            toJSON(message: _65.RequestInfo): unknown;
            fromPartial<I_11 extends Exact<DeepPartial<_65.RequestInfo>, I_11>>(object: I_11): _65.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _65.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ResourceInfo;
            fromJSON(object: any): _65.ResourceInfo;
            toJSON(message: _65.ResourceInfo): unknown;
            fromPartial<I_12 extends Exact<DeepPartial<_65.ResourceInfo>, I_12>>(object: I_12): _65.ResourceInfo;
        };
        Help: {
            encode(message: _65.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Help;
            fromJSON(object: any): _65.Help;
            toJSON(message: _65.Help): unknown;
            fromPartial<I_13 extends Exact<DeepPartial<_65.Help>, I_13>>(object: I_13): _65.Help;
        };
        Help_Link: {
            encode(message: _65.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Help_Link;
            fromJSON(object: any): _65.Help_Link;
            toJSON(message: _65.Help_Link): unknown;
            fromPartial<I_14 extends Exact<DeepPartial<_65.Help_Link>, I_14>>(object: I_14): _65.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _65.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.LocalizedMessage;
            fromJSON(object: any): _65.LocalizedMessage;
            toJSON(message: _65.LocalizedMessage): unknown;
            fromPartial<I_15 extends Exact<DeepPartial<_65.LocalizedMessage>, I_15>>(object: I_15): _65.LocalizedMessage;
        };
        codeFromJSON(object: any): _64.Code;
        codeToJSON(object: _64.Code): string;
        Code: typeof _64.Code;
    };
}
