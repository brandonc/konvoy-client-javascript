/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { NetworkingV1beta1IngressBackend } from './networkingV1beta1IngressBackend';

/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 */
export class NetworkingV1beta1HTTPIngressPath {
    'backend': NetworkingV1beta1IngressBackend;
    /**
     * Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a \'/\'. If unspecified, the path defaults to a catch all sending traffic to the backend.
     */
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'backend',
            baseName: 'backend',
            type: 'NetworkingV1beta1IngressBackend',
        },
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return NetworkingV1beta1HTTPIngressPath.attributeTypeMap;
    }
}
