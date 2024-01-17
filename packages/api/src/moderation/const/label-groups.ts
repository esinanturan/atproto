/** this doc is generated by ./scripts/code/labels.mjs **/
import { LabelGroupDefinitionMap } from '../types'
import { LABELS } from './labels'

export const LABEL_GROUPS: LabelGroupDefinitionMap = {
  system: {
    id: 'system',
    configurable: false,
    labels: [
      LABELS['!hide'],
      LABELS['!no-promote'],
      LABELS['!warn'],
      LABELS['!no-unauthenticated'],
    ],
    strings: {
      settings: {
        en: {
          name: 'System',
          description: 'Moderator overrides for special cases.',
        },
      },
    },
  },
  legal: {
    id: 'legal',
    configurable: false,
    labels: [LABELS['dmca-violation'], LABELS['doxxing']],
    strings: {
      settings: {
        en: {
          name: 'Legal',
          description: 'Content removed for legal reasons.',
        },
      },
    },
  },
  porn: {
    id: 'porn',
    configurable: true,
    labels: [LABELS['porn']],
    strings: {
      settings: {
        en: {
          name: 'Explicit Sexual Images',
          description: 'i.e. pornography.',
        },
      },
    },
  },
  suggestive: {
    id: 'suggestive',
    configurable: true,
    labels: [LABELS['sexual']],
    strings: {
      settings: {
        en: {
          name: 'Sexually Suggestive',
          description: 'Does not include nudity.',
        },
      },
    },
  },
  nudity: {
    id: 'nudity',
    configurable: true,
    labels: [LABELS['nudity']],
    strings: {
      settings: {
        en: {
          name: 'Other Nudity',
          description: 'Including non-sexual and artistic.',
        },
      },
    },
  },
  violence: {
    id: 'violence',
    configurable: true,
    labels: [
      LABELS['nsfl'],
      LABELS['corpse'],
      LABELS['gore'],
      LABELS['torture'],
      LABELS['self-harm'],
    ],
    strings: {
      settings: {
        en: {
          name: 'Violence',
          description: 'Content which is violent or deeply disturbing.',
        },
      },
    },
  },
  hate: {
    id: 'hate',
    configurable: true,
    labels: [
      LABELS['intolerant-race'],
      LABELS['intolerant-gender'],
      LABELS['intolerant-sexual-orientation'],
      LABELS['intolerant-religion'],
      LABELS['intolerant'],
      LABELS['icon-intolerant'],
    ],
    strings: {
      settings: {
        en: {
          name: 'Intolerance',
          description:
            'Content or behavior which is hateful or intolerant toward a group of people.',
        },
      },
    },
  },
  rude: {
    id: 'rude',
    configurable: true,
    labels: [LABELS['threat']],
    strings: {
      settings: {
        en: {
          name: 'Rude',
          description: 'Behavior which is rude toward other users.',
        },
      },
    },
  },
  curation: {
    id: 'curation',
    configurable: true,
    labels: [LABELS['spoiler']],
    strings: {
      settings: {
        en: {
          name: 'Curational',
          description:
            'Subjective moderation geared towards curating a more positive environment.',
        },
      },
    },
  },
  spam: {
    id: 'spam',
    configurable: true,
    labels: [LABELS['spam']],
    strings: {
      settings: {
        en: {
          name: 'Spam',
          description: "Content which doesn't add to the conversation.",
        },
      },
    },
  },
  misinfo: {
    id: 'misinfo',
    configurable: true,
    labels: [
      LABELS['account-security'],
      LABELS['net-abuse'],
      LABELS['impersonation'],
      LABELS['scam'],
      LABELS['misleading'],
    ],
    strings: {
      settings: {
        en: {
          name: 'Misinformation',
          description: 'Content which misleads or defrauds users.',
        },
      },
    },
  },
}
