/* tslint:disable */
/* eslint-disable */
/**
 * base
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'lastName': string;
}
/**
 * 
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * If a new email is given, the user\'s email verified property will be set to false.
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'lastName'?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'lastName'?: string;
}

/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new user.
         * @summary Create New User
         * @param {CreateUserRequest} [createUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (createUserRequest?: CreateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {UpdateUserRequest} [updateUserRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userId: number, updateUserRequest?: UpdateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUser', 'userId', userId)
            const localVarPath = `/users/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new user.
         * @summary Create New User
         * @param {CreateUserRequest} [createUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(createUserRequest?: CreateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(createUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {UpdateUserRequest} [updateUserRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(userId: number, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(userId, updateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Create a new user.
         * @summary Create New User
         * @param {CreateUserRequest} [createUserRequest] Post the necessary fields for the API to create a new user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(createUserRequest?: CreateUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.createUser(createUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the information of the user with the matching user ID.
         * @summary Get User Info by User ID
         * @param {number} userId Id of an existing user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the information of an existing user.
         * @summary Update User Information
         * @param {number} userId Id of an existing user.
         * @param {UpdateUserRequest} [updateUserRequest] Patch user properties to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(userId: number, updateUserRequest?: UpdateUserRequest, options?: any): AxiosPromise<User> {
            return localVarFp.updateUser(userId, updateUserRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Create a new user.
     * @summary Create New User
     * @param {CreateUserRequest} [createUserRequest] Post the necessary fields for the API to create a new user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUser(createUserRequest?: CreateUserRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).createUser(createUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the information of the user with the matching user ID.
     * @summary Get User Info by User ID
     * @param {number} userId Id of an existing user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUser(userId: number, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the information of an existing user.
     * @summary Update User Information
     * @param {number} userId Id of an existing user.
     * @param {UpdateUserRequest} [updateUserRequest] Patch user properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateUser(userId: number, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).updateUser(userId, updateUserRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


