// kieu lai, nhan dau vao la string nhung tra ve number 
interface HybridInterface {
  (str: string): number;
  numb: number;
  add(): void;
}

var hybrid: HybridInterface;
hybrid = <HybridInterface>function (str: string) {
  if (str === 'demo') {
    return 1;
  }
  return 0;
}

hybrid.numb = 555;
hybrid.add = function () {
  hybrid.numb += 5;
  console.log(hybrid.name);
}

console.log(hybrid("demo"));
console.log(hybrid.numb);
hybrid.add;
