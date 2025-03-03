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

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class V1EventSeries {
    /**
     * Number of occurrences in this series up to the last heartbeat time
     */
    'count'?: number;
    /**
     * Time of the last occurrence observed
     */
    'lastObservedTime'?: Date;
    /**
     * State of this Series: Ongoing or Finished Deprecated. Planned removal for 1.18
     */
    'state'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'lastObservedTime',
            baseName: 'lastObservedTime',
            type: 'Date',
        },
        {
            name: 'state',
            baseName: 'state',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1EventSeries.attributeTypeMap;
    }
}
