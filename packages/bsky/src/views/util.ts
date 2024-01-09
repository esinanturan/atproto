import { AtUri } from '@atproto/syntax'
import { Record as PostRecord } from '../lexicon/types/app/bsky/feed/post'
import {
  Record as GateRecord,
  isFollowingRule,
  isListRule,
  isMentionRule,
} from '../lexicon/types/app/bsky/feed/threadgate'
import { isMention } from '../lexicon/types/app/bsky/richtext/facet'

const now = () => {
  return new Date().toISOString()
}

export const compositeTime = (createdAt = now(), indexedAt = now()): string => {
  return createdAt < indexedAt ? createdAt : indexedAt
}

export const creatorFromUri = (uri: string): string => {
  return new AtUri(uri).hostname
}

export const parseThreadGate = (
  replierDid: string,
  ownerDid: string,
  rootPost: PostRecord | null,
  gate: GateRecord | null,
): ParsedThreadGate => {
  if (replierDid === ownerDid) {
    return { canReply: true }
  }
  // if gate.allow is unset then *any* reply is allowed, if it is an empty array then *no* reply is allowed
  if (!gate || !gate.allow) {
    return { canReply: true }
  }

  const allowMentions = !!gate.allow.find(isMentionRule)
  const allowFollowing = !!gate.allow.find(isFollowingRule)
  const allowListUris = gate.allow?.filter(isListRule).map((item) => item.list)

  // check mentions first since it's quick and synchronous
  if (allowMentions) {
    const isMentioned = rootPost?.facets?.some((facet) => {
      return facet.features.some(
        (item) => isMention(item) && item.did === replierDid,
      )
    })
    if (isMentioned) {
      return { canReply: true, allowMentions, allowFollowing, allowListUris }
    }
  }
  return { allowMentions, allowFollowing, allowListUris }
}

type ParsedThreadGate = {
  canReply?: boolean
  allowMentions?: boolean
  allowFollowing?: boolean
  allowListUris?: string[]
}