const loops = () => {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
};
console.log(loops());
