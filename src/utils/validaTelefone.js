export function validaTelefone(val) {
  val = val.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").replaceAll("-", "").trim()
  if (val.length == 11) {
    return true
  } else if (val.length == 10) {
    return true
  } else {
    return false
  }
}
