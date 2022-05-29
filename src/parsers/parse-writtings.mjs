import extractText from '../utils/extract-text.mjs';
import getEntityEq from '../utils/get-entity-eq.mjs';

const parseWrittings = ({ keb, ke_inf: orthographyInformation, ke_pri: pri }) => ({
  frequencies: extractText(pri),
  orthographyInformation: extractText(orthographyInformation, getEntityEq),
  writting: extractText(keb)?.[0],
});

export default parseWrittings;

/*
  keb: This element will contain a word or short phrase in Japanese
    which is written using at least one non-kana character (usually kanji,
    but can be other characters). The valid characters are
    kanji, kana, related characters such as chouon and kurikaeshi, and
    in exceptional cases, letters from other alphabets.

  ke_inf: This is a coded information field related specifically to the
    orthography of the keb, and will typically indicate some unusual
    aspect, such as okurigana irregularity.

  ke_pri: This and the equivalent re_pri field are provided to record
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
