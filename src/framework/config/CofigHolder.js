
let config = {
  "logo": null,
  "logoText": null,
  "footerText": null
};

export function setLogo(logo) {
  config.logo = logo;
}

export function setLogoText(logoText) {
  config.logoText = logoText;
}

export function setFooterText(footerText) {
  config.footerText = footerText;
}

export function setConfig(conf) {
  config = conf;
}

export function getConfig() {
  return config;
}
