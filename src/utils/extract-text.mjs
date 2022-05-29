const extractText = (array, callback) =>
  array?.map?.(({ $text: text }) => (callback ? callback(text) : text));

export default extractText;
