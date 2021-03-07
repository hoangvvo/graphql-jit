export default function genFn() {
  let src = ``;
  function line(fmt: string) {
    return (src += fmt + "\n");
  }
  line.toString = () => src;
  return line;
}
