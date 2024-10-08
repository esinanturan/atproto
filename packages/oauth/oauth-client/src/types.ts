import {
  oauthClientIdSchema,
  oauthClientMetadataSchema,
} from '@atproto/oauth-types'
import z from 'zod'

// Note: These types are not prefixed with `OAuth` because they are not specific
// to OAuth. They are specific to this packages. OAuth specific types are in
// `@atproto/oauth-types`.

export type AuthorizeOptions = {
  display?: 'page' | 'popup' | 'touch' | 'wap'
  redirect_uri?: string
  prompt?: 'login' | 'none' | 'consent' | 'select_account'
  scope?: string
  state?: string
  signal?: AbortSignal

  // Borrowed from OIDC
  ui_locales?: string
}

export const clientMetadataSchema = oauthClientMetadataSchema.extend({
  client_id: oauthClientIdSchema.url(),
})

export type ClientMetadata = z.infer<typeof clientMetadataSchema>
