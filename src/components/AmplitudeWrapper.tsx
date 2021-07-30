import React from 'react';
import PropTypes from 'prop-types';
import { initAmplitude } from '../lib/initAmplitude';
import {AmplitudeClient, Config} from '../types/amplitude'

declare type Props = {
  // should be a AmplitudeClient -- but not requiring this
  amplitudeInstance: AmplitudeClient;
  // Pass empty "" if you're testing/development
  apiKey: string;
  // User ID to identify this session with
  userId?: string;
  userProperties?: any, 
  config?: Config;
  children: React.ReactNode;
};

/**
 *
 *
 * @export
 * @param {Props} props
 * @return {*} 
 */
export function AmplitudeWrapper(props: Props) {
  const { amplitudeInstance, apiKey, userId, userProperties, config } = props;

  // Memoize so it's only really called if the params change
  const init = React.useMemo(() => initAmplitude(amplitudeInstance, apiKey, userId, userProperties, config), [
    amplitudeInstance,
    apiKey,
    userId,
    userProperties,
    config,
  ]);

  init();

  return (
    <>
      {props.children}
    </>
  );
}

AmplitudeWrapper.propTypes = {
  amplitudeInstance: PropTypes.object.isRequired,
  apiKey: PropTypes.string,
  userId: PropTypes.string,
  userProperties: PropTypes.object,
  config: PropTypes.object,
};