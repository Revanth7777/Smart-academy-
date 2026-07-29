export const ACADEMY_PHONE_DISPLAY = "9444490828";
export const ACADEMY_PHONE_E164 = "919444490828";

export const academyTelHref = `tel:+${ACADEMY_PHONE_E164}`;
export const academyWhatsAppHref = `https://wa.me/${ACADEMY_PHONE_E164}`;

/** GPS: 12°49'16.2"N 79°41'49.7"E */
export const ACADEMY_LAT = 12.8211667;
export const ACADEMY_LNG = 79.6971389;

export const ACADEMY_ADDRESS =
  "Kancheepuram - Vandavasi Road, Sevilimedu, Kanchipuram - 631501";

export const ACADEMY_ADDRESS_LINES = [
  "Kancheepuram - Vandavasi Road, Sevilimedu",
  "Kanchipuram - 631501",
] as const;

export const academyMapsEmbedSrc = `https://maps.google.com/maps?q=${ACADEMY_LAT},${ACADEMY_LNG}&hl=en&z=16&output=embed`;
export const academyMapsOpenHref = `https://www.google.com/maps/search/?api=1&query=${ACADEMY_LAT},${ACADEMY_LNG}`;
