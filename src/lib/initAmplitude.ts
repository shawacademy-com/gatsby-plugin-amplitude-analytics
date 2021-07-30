import {AmplitudeClient, Config} from '../types/amplitude';

/**
 *
 *
 * @param {*} instance
 * @return {*} 
 */
const isValidAmplitudeInstance = (instance: any) => {
  return !!instance && typeof instance.init === "function" && typeof instance.logEvent === "function";
}

/**
 *
 *
 * @param {AmplitudeClient} amplitudeInstance
 * @param {string} apiKey
 * @param {string} [userId]
 * @param {any} [userProperties]
 * @param {Config} [config]
 * @return {*} 
 */
function initAmplitude(amplitudeInstance: AmplitudeClient, apiKey: string, userId?: string, userProperties?: any, config?: Config) {
  return () => {
    if (isValidAmplitudeInstance(amplitudeInstance)) {
      if (apiKey) {
        amplitudeInstance.init(apiKey, undefined, config);
      }
      if (userId) {
        amplitudeInstance.setUserId(userId);
      }
      if (userProperties) {
        amplitudeInstance.setUserProperties(userProperties)
      }
    }
  };
}

export {
  initAmplitude
}