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
import { V2beta2ExternalMetricStatus } from './v2beta2ExternalMetricStatus';
import { V2beta2ObjectMetricStatus } from './v2beta2ObjectMetricStatus';
import { V2beta2PodsMetricStatus } from './v2beta2PodsMetricStatus';
import { V2beta2ResourceMetricStatus } from './v2beta2ResourceMetricStatus';

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export class V2beta2MetricStatus {
    'external'?: V2beta2ExternalMetricStatus;
    'object'?: V2beta2ObjectMetricStatus;
    'pods'?: V2beta2PodsMetricStatus;
    'resource'?: V2beta2ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object.
     */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'external',
            baseName: 'external',
            type: 'V2beta2ExternalMetricStatus',
        },
        {
            name: 'object',
            baseName: 'object',
            type: 'V2beta2ObjectMetricStatus',
        },
        {
            name: 'pods',
            baseName: 'pods',
            type: 'V2beta2PodsMetricStatus',
        },
        {
            name: 'resource',
            baseName: 'resource',
            type: 'V2beta2ResourceMetricStatus',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V2beta2MetricStatus.attributeTypeMap;
    }
}
