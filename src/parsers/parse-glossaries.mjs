import gTypes from '../constants/g-types.mjs';

const parseGlossaries = (glossaries) =>
  glossaries.map(
    ({ $: { g_type: gType = 'unspecified', 'xml:lang': lang = 'eng' } = {}, $text: text }) => ({
      glossaryType: gTypes[gType],
      lang,
      meaning: text,
    }),
  );

export default parseGlossaries;

/*
  gloss

  gloss xml:lang: The xml:lang attribute defines the target language of the
    gloss. It will be coded using the three-letter language code from
    the ISO 639 standard. When absent, the value "eng" (i.e. English)
    is the default value.
  gloss g_gend: The g_gend attribute defines the gender of the gloss (typically
    a noun in the target language. When absent, the gender is either
    not relevant or has yet to be provided.
*/

/*
  language list:
  - dut
  - eng
  - fre
  - ger
  - hun
  - rus
  - slv
  - spa
  - swe
*/
