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
import { V1SELinuxOptions } from './v1SELinuxOptions';

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class V1beta1SELinuxStrategyOptions {
    /**
     * rule is the strategy that will dictate the allowable labels that may be set.
     */
    'rule': string;
    'seLinuxOptions'?: V1SELinuxOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'rule',
            baseName: 'rule',
            type: 'string',
        },
        {
            name: 'seLinuxOptions',
            baseName: 'seLinuxOptions',
            type: 'V1SELinuxOptions',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1SELinuxStrategyOptions.attributeTypeMap;
    }
}
