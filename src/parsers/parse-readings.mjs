import extractText from '../utils/extract-text.mjs';

const parseReadings = ({
  reb,
  re_nokanji: notTrueKanjiReading,
  re_restr: restr,
  re_pri: pri,
  re_inf: readingInformation,
}) => ({
  frquencies: extractText(pri),
  notTrueKanjiReading: Boolean(notTrueKanjiReading?.length),
  reading: extractText(reb)?.[0],
  readingInformation: extractText(readingInformation),
  readingRestricted: extractText(restr),
});

export default parseReadings;

/*
  reb: this element content is restricted to kana and related
    characters such as chouon and kurikaeshi. Kana usage will be
    consistent between the keb and reb elements; e.g. if the keb
    contains katakana, so too will the reb.

  re_nokanji: This element, which will usually have a null value, indicates
    that the reb, while associated with the keb, cannot be regarded
    as a true reading of the kanji. It is typically used for words
    such as foreign place names, gairaigo which can be in kanji or
    katakana, etc.

  re_restr: This element is used to indicate when the reading only applies
    to a subset of the keb elements in the entry. In its absence, all
    readings apply to all kanji elements. The contents of this element
    must exactly match those of one of the keb elements.

  re_inf: General coded information pertaining to the specific reading.
    Typically it will be used to indicate some unusual aspect of
    the reading.

  re_pri: This and the equivalent ke_pri field are provided to record
    information about the relative priority of the entry,  and consist
    of codes indicating the word appears in various references which
    can be taken as an indication of the frequency with which the word
    is used. This field is intended for use either by applications which
    want to concentrate on entries of  a particular priority, or to
    generate subset files.
    The current values in this field are:
    - news1/2: appears in the "wordfreq" file compiled by Alexandre Girardi
    from the Mainichi Shimbun. (See the Monash ftp archive for a copy.)
    Words in the first 12,000 in that file are marked "news1" and words
    in the second 12,000 are marked "news2".
    - ichi1/2: appears in the "Ichimango goi bunruishuu", Senmon Kyouiku
    Publishing, Tokyo, 1998.  (The entries marked "ichi2" were
    demoted from ichi1 because they were observed to have low
    frequencies in the WWW and newspapers.)
    - spec1 and spec2: a small number of words use this marker when they
    are detected as being common, but are not included in other lists.
    - gai1/2: common loanwords, based on the wordfreq file.
    - nfxx: this is an indicator of frequency-of-use ranking in the
    wordfreq file. "xx" is the number of the set of 500 words in which
    the entry can be found, with "01" assigned to the first 500, "02"
    to the second, and so on. (The entries with news1, ichi1, spec1, spec2
    and gai1 values are marked with a "(P)" in the EDICT and EDICT2
    files.)

    The reason both the kanji and reading elements are tagged is because
    on occasions a priority is only associated with a particular
    kanji/reading pair.
*/
