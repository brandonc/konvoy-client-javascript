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
import { V1ExecAction } from './v1ExecAction';
import { V1HTTPGetAction } from './v1HTTPGetAction';
import { V1TCPSocketAction } from './v1TCPSocketAction';

/**
 * Handler defines a specific action that should be taken
 */
export class V1Handler {
    'exec'?: V1ExecAction;
    'httpGet'?: V1HTTPGetAction;
    'tcpSocket'?: V1TCPSocketAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'exec',
            baseName: 'exec',
            type: 'V1ExecAction',
        },
        {
            name: 'httpGet',
            baseName: 'httpGet',
            type: 'V1HTTPGetAction',
        },
        {
            name: 'tcpSocket',
            baseName: 'tcpSocket',
            type: 'V1TCPSocketAction',
        },
    ];

    static getAttributeTypeMap() {
        return V1Handler.attributeTypeMap;
    }
}
