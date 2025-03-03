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
import { IoMesosphereDexV1alpha1ClientSpec } from './ioMesosphereDexV1alpha1ClientSpec';
import { V1ObjectMeta } from './v1ObjectMeta';

/**
 * Client is the Schema for the clients API
 */
export class IoMesosphereDexV1alpha1Client {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    'apiVersion'?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: IoMesosphereDexV1alpha1ClientSpec;
    /**
     * ClientStatus defines the observed state of Client
     */
    'status'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'apiVersion',
            baseName: 'apiVersion',
            type: 'string',
        },
        {
            name: 'kind',
            baseName: 'kind',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'V1ObjectMeta',
        },
        {
            name: 'spec',
            baseName: 'spec',
            type: 'IoMesosphereDexV1alpha1ClientSpec',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'object',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereDexV1alpha1Client.attributeTypeMap;
    }
}
