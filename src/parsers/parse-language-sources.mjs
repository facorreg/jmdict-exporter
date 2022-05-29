const parseLanguageSources = (languageSources) =>
  languageSources.map(({ $: { 'xml:lang': lang } = {}, $text: word }) => ({
    lang,
    word,
  }));

export default parseLanguageSources;

/*
  lsource

  lsource xml:lang:
    The xml:lang attribute defines the language(s) from which
    a loanword is drawn.  It will be coded using the three-letter language
    code from the ISO 639-2 standard. When absent, the value "eng" (i.e.
    English) is the default value. The bibliographic (B) codes are used.
*/

/*
  language source list
  - afr
  - ain
  - alg
  - amh
  - ara
  - arn
  - bnt
  - bre
  - bul
  - bur
  - chi
  - chn
  - cze
  - dan
  - dut
  - eng
  - epo
  - est
  - fil
  - fin
  - fre
  - geo
  - ger
  - glg
  - grc
  - gre
  - haw
  - heb
  - hin
  - hun
  - ice
  - ind
  - ita
  - khm
  - kor
  - kur
  - lat
  - mal
  - mao
  - may
  - mnc
  - mol
  - mon
  - nor
  - per
  - pol
  - por
  - rum
  - rus
  - san
  - scr
  - slo
  - slv
  - som
  - spa
  - swa
  - swe
  - tah
  - tam
  - tha
  - tib
  - tur
  - urd
  - vie
  - yid
*/
