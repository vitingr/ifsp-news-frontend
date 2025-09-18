import { ACCESS_TOKEN_EXPIRES_MINUTES } from './accessTokenExpiresMinutes'

// For use with Date.now()
export const ACCESS_TOKEN_EXPIRES_MILLISECONDS =
  ACCESS_TOKEN_EXPIRES_MINUTES * 60 * 1000
