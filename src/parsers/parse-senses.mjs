import extractText from '../utils/extract-text.mjs';
import parseLanguageSources from './parse-language-sources.mjs';
import parseGlossaries from './parse-glossaries.mjs';
import getEntityEq from '../utils/get-entity-eq.mjs';

const parseSenses = ({
  ant: antonym,
  dial,
  field,
  gloss: glossaries = [],
  lsource: languageSources = [],
  misc,
  pos,
  s_inf: senseInformation,
  stagk: kanjiRestricted,
  stagr: readingRestricted,
  xref,
}) => ({
  antonyms: extractText(antonym),
  crossReferences: extractText(xref),
  dialect: extractText(dial),
  fields: extractText(field),
  glossaries: parseGlossaries(glossaries),
  kanjiRestricted: extractText(kanjiRestricted),
  lsources: parseLanguageSources(languageSources),
  misc: extractText(misc, getEntityEq),
  partOfSpeech: extractText(pos, getEntityEq),
  readingRestricted: extractText(readingRestricted),
  senseInformation: extractText(senseInformation),
});

export default parseSenses;

/*
  ant: This element is used to indicate another entry which is an
    antonym of the current entry/sense. The content of this element
    must exactly match that of a keb or reb element in another entry.

  dial: For words specifically associated with regional dialects in
    Japanese, the entity code for that dialect, e.g. ksb for Kansaiben.

  gloss Within each sense will be one or more "glosses", i.e.
    target-language words or phrases which are equivalents to the
    Japanese word. This element would normally be present, however it
    may be omitted in entries which are purely for a cross-reference.

  lsource: This element records the information about the source
    language(s) of a loan-word/gairaigo. If the source language is other
    than English, the language is indicated by the xml:lang attribute.
    The element value (if any) is the source word or phrase.

  misc: This element is used for other relevant information about
    the entry/sense. As with part-of-speech, information will usually
    apply to several senses.

  s_inf: The sense-information elements provided for additional
    information to be recorded about a sense. Typical usage would
    be to indicate such things as level of currency of a sense, the
    regional variations, etc.

  stagk
  stagr: These elements, if present, indicate that the sense is restricted
    to the lexeme represented by the keb and/or reb.

  xref: This element is used to indicate a cross-reference to another
    entry with a similar or related meaning or sense. The content of
    this element is typically a keb or reb element in another entry. In some
    cases a keb will be followed by a reb and/or a sense number to provide
    a precise target for the cross-reference. Where this happens, a JIS
    "centre-dot" (0x2126) is placed between the components of the
    cross-reference. The target keb or reb must not contain a centre-dot.
*/
