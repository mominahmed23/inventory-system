export const generateId = (name = "category") => {
  return { id: `${name}-${(Math.random() * 1000).toFixed(0)}` };
};

export const taxSlabValues = [0, 5, 12, 18, 28];

export const colorG = {
  salesPrice: "#ff0808",
  purchasePrice: "#ffe007",
  mrp: "#6c6c6c",
};
