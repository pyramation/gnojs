import { FileDescriptorProto } from "../descriptor";
import * as _m0 from "protobufjs/minimal";
/** The version number of protocol compiler. */
export interface Version {
    major: number;
    minor: number;
    patch: number;
    /**
     * A suffix for alpha, beta or rc release, e.g., "alpha-1", "rc2". It should
     * be empty for mainline stable releases.
     */
    suffix: string;
}
/** An encoded CodeGeneratorRequest is written to the plugin's stdin. */
export interface CodeGeneratorRequest {
    /**
     * The .proto files that were explicitly listed on the command-line.  The
     * code generator should generate code only for these files.  Each file's
     * descriptor will be included in proto_file, below.
     */
    fileToGenerate: string[];
    /** The generator parameter passed on the command-line. */
    parameter: string;
    /**
     * FileDescriptorProtos for all files in files_to_generate and everything
     * they import.  The files will appear in topological order, so each file
     * appears before any file that imports it.
     *
     * protoc guarantees that all proto_files will be written after
     * the fields above, even though this is not technically guaranteed by the
     * protobuf wire format.  This theoretically could allow a plugin to stream
     * in the FileDescriptorProtos and handle them one by one rather than read
     * the entire set into memory at once.  However, as of this writing, this
     * is not similarly optimized on protoc's end -- it will store all fields in
     * memory at once before sending them to the plugin.
     *
     * Type names of fields and extensions in the FileDescriptorProto are always
     * fully qualified.
     */
    protoFile: FileDescriptorProto[];
    /** The version number of protocol compiler. */
    compilerVersion: Version;
}
/** The plugin writes an encoded CodeGeneratorResponse to stdout. */
export interface CodeGeneratorResponse {
    /**
     * Error message.  If non-empty, code generation failed.  The plugin process
     * should exit with status code zero even if it reports an error in this way.
     *
     * This should be used to indicate errors in .proto files which prevent the
     * code generator from generating correct code.  Errors which indicate a
     * problem in protoc itself -- such as the input CodeGeneratorRequest being
     * unparseable -- should be reported by writing a message to stderr and
     * exiting with a non-zero status code.
     */
    error: string;
    file: CodeGeneratorResponse_File[];
}
/** Represents a single generated file. */
export interface CodeGeneratorResponse_File {
    /**
     * The file name, relative to the output directory.  The name must not
     * contain "." or ".." components and must be relative, not be absolute (so,
     * the file cannot lie outside the output directory).  "/" must be used as
     * the path separator, not "\".
     *
     * If the name is omitted, the content will be appended to the previous
     * file.  This allows the generator to break large files into small chunks,
     * and allows the generated text to be streamed back to protoc so that large
     * files need not reside completely in memory at one time.  Note that as of
     * this writing protoc does not optimize for this -- it will read the entire
     * CodeGeneratorResponse before writing files to disk.
     */
    name: string;
    /**
     * If non-empty, indicates that the named file should already exist, and the
     * content here is to be inserted into that file at a defined insertion
     * point.  This feature allows a code generator to extend the output
     * produced by another code generator.  The original generator may provide
     * insertion points by placing special annotations in the file that look
     * like:
     * @@protoc_insertion_point(NAME)
     * The annotation can have arbitrary text before and after it on the line,
     * which allows it to be placed in a comment.  NAME should be replaced with
     * an identifier naming the point -- this is what other generators will use
     * as the insertion_point.  Code inserted at this point will be placed
     * immediately above the line containing the insertion point (thus multiple
     * insertions to the same point will come out in the order they were added).
     * The double-@ is intended to make it unlikely that the generated code
     * could contain things that look like insertion points by accident.
     *
     * For example, the C++ code generator places the following line in the
     * .pb.h files that it generates:
     * // @@protoc_insertion_point(namespace_scope)
     * This line appears within the scope of the file's package namespace, but
     * outside of any particular class.  Another plugin can then specify the
     * insertion_point "namespace_scope" to generate additional classes or
     * other declarations that should be placed in this scope.
     *
     * Note that if the line containing the insertion point begins with
     * whitespace, the same whitespace will be added to every line of the
     * inserted text.  This is useful for languages like Python, where
     * indentation matters.  In these languages, the insertion point comment
     * should be indented the same amount as any inserted code will need to be
     * in order to work correctly in that context.
     *
     * The code generator that generates the initial file and the one which
     * inserts into it must both run as part of a single invocation of protoc.
     * Code generators are executed in the order in which they appear on the
     * command line.
     *
     * If |insertion_point| is present, |name| must also be present.
     */
    insertionPoint: string;
    /** The file contents. */
    content: string;
}
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version;
};
export declare const CodeGeneratorRequest: {
    encode(message: CodeGeneratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorRequest;
    fromJSON(object: any): CodeGeneratorRequest;
    toJSON(message: CodeGeneratorRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<CodeGeneratorRequest>, I>>(object: I): CodeGeneratorRequest;
};
export declare const CodeGeneratorResponse: {
    encode(message: CodeGeneratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorResponse;
    fromJSON(object: any): CodeGeneratorResponse;
    toJSON(message: CodeGeneratorResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<CodeGeneratorResponse>, I>>(object: I): CodeGeneratorResponse;
};
export declare const CodeGeneratorResponse_File: {
    encode(message: CodeGeneratorResponse_File, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeGeneratorResponse_File;
    fromJSON(object: any): CodeGeneratorResponse_File;
    toJSON(message: CodeGeneratorResponse_File): unknown;
    fromPartial<I extends Exact<DeepPartial<CodeGeneratorResponse_File>, I>>(object: I): CodeGeneratorResponse_File;
};
