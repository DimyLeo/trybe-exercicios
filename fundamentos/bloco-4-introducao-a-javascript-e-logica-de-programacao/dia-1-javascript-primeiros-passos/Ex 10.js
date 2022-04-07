const a = 10;
const b = 15;

if (a >= 0 && b >= 0) {
    const totalProduto = a * 1.2;
    const total = (b - totalProduto) * 1000;
    console.log(total);
  } else {
    console.log("Error, Foda em pae");
  };