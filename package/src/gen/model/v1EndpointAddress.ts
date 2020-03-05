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
import { V1ObjectReference } from './v1ObjectReference';

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export class V1EndpointAddress {
    /**
     * The Hostname of this endpoint
     */
    'hostname'?: string;
    /**
     * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
     */
    'ip': string;
    /**
     * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
     */
    'nodeName'?: string;
    'targetRef'?: V1ObjectReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'hostname',
            baseName: 'hostname',
            type: 'string',
        },
        {
            name: 'ip',
            baseName: 'ip',
            type: 'string',
        },
        {
            name: 'nodeName',
            baseName: 'nodeName',
            type: 'string',
        },
        {
            name: 'targetRef',
            baseName: 'targetRef',
            type: 'V1ObjectReference',
        },
    ];

    static getAttributeTypeMap() {
        return V1EndpointAddress.attributeTypeMap;
    }
}
