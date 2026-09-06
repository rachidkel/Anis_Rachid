export const ASSETS = {
  home: {
    hero: {
      avatarSmile: require("@/assets/images/home/hero/avatar-smile.webp"),
    },
    letsConnect: {
      avatarBigSmile: require("@/assets/images/home/letsConnect/avatar-big-smile.webp"),
      behance: require("@/assets/images/home/letsConnect/behance.webp"),
      discord: require("@/assets/images/home/letsConnect/discord.webp"),
      dribbble: require("@/assets/images/home/letsConnect/dribbble.webp"),
      facebook: require("@/assets/images/home/letsConnect/facebook.webp"),
      github: require("@/assets/images/home/letsConnect/github.webp"),
      gmail: require("@/assets/images/home/letsConnect/gmail.webp"),
      instagram: require("@/assets/images/home/letsConnect/instagram.webp"),
      linkedin: require("@/assets/images/home/letsConnect/linkedin.webp"),
      pinterest: require("@/assets/images/home/letsConnect/pinterest.webp"),
      slack: require("@/assets/images/home/letsConnect/slack.webp"),
      tiktok: require("@/assets/images/home/letsConnect/tiktok.webp"),
      twitter: require("@/assets/images/home/letsConnect/twitter.webp"),
      youtube: require("@/assets/images/home/letsConnect/youtube.webp"),
    },
    myLatestProject: {
      figma: require("@/assets/images/home/myLatestProject/figma.webp"),
      rocket: require("@/assets/images/home/myLatestProject/rocket.webp"),
      suitcase: require("@/assets/images/home/myLatestProject/suitcase.webp"),
    },
  },
  decoratives: {
    quadrilateral: require("@/assets/images/decoratives/quadrilateral.webp"),
    triangle: require("@/assets/images/decoratives/triangle.webp"),
    twistedTorus: require("@/assets/images/decoratives/twisted-torus.webp"),
    zigZag: require("@/assets/images/decoratives/zig-zag.webp"),
    bulb: require("@/assets/images/decoratives/bulb.webp"),
    heart: require("@/assets/images/decoratives/heart.webp"),
    paintKit: require("@/assets/images/decoratives/paint-kit.webp"),
    teaCup: require("@/assets/images/decoratives/tea-cup.webp"),
  },
} as const;

// Helper types for LetsConnect
export type LetsConnectIconKey = Exclude<
  keyof typeof ASSETS.home.letsConnect,
  "avatarBigSmile"
>;
export type LetsConnectAssetMap = typeof ASSETS.home.letsConnect;
