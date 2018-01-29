{
  "name": "Navigate unpinned tabs",
  "description": "Ignore pinned tabs with using the keyboard shortcuts ctrl/cmd + [1-8].",
  "homepage_url": "https://github.com/naxoc/navigate-unpinned",
  "manifest_version": 2,
  "version": "1.0",
  "background": {
    "scripts": ["background.js"]
  },

  "commands": {
    "1": {
      "suggested_key": { "default": "Ctrl+1" },
      "description": "Focus tab 1"
    },
    "2": {
      "suggested_key": { "default": "Ctrl+2" },
      "description": "Focus tab 2"
    },
    "3": {
      "suggested_key": { "default": "Ctrl+3" },
      "description": "Focus tab 3"
    },
    "4": {
      "suggested_key": { "default": "Ctrl+4" },
      "description": "Focus tab 4"
    },
    "5": {
      "suggested_key": { "default": "Ctrl+5" },
      "description": "Focus tab 5"
    },
    "6": {
      "suggested_key": { "default": "Ctrl+6" },
      "description": "Focus tab 6"
    },
    "7": {
      "suggested_key": { "default": "Ctrl+7" },
      "description": "Focus tab 7"
    },
    "8": {
      "suggested_key": { "default": "Ctrl+8" },
      "description": "Focus tab 8"
    }
  },

  "permissions": [
    "tabs"
  ]
}
