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
import { V1JobCondition } from './v1JobCondition';

/**
 * JobStatus represents the current state of a Job.
 */
export class V1JobStatus {
    /**
     * The number of actively running pods.
     */
    'active'?: number;
    /**
     * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    'completionTime'?: Date;
    /**
     * The latest available observations of an object\'s current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     */
    'conditions'?: Array<V1JobCondition>;
    /**
     * The number of pods which reached phase Failed.
     */
    'failed'?: number;
    /**
     * Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    'startTime'?: Date;
    /**
     * The number of pods which reached phase Succeeded.
     */
    'succeeded'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'active',
            baseName: 'active',
            type: 'number',
        },
        {
            name: 'completionTime',
            baseName: 'completionTime',
            type: 'Date',
        },
        {
            name: 'conditions',
            baseName: 'conditions',
            type: 'Array<V1JobCondition>',
        },
        {
            name: 'failed',
            baseName: 'failed',
            type: 'number',
        },
        {
            name: 'startTime',
            baseName: 'startTime',
            type: 'Date',
        },
        {
            name: 'succeeded',
            baseName: 'succeeded',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return V1JobStatus.attributeTypeMap;
    }
}
