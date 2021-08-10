export const generateId = (name = "category") => {
  return { id: `${name}-${(Math.random() * 1000).toFixed(0)}` };
};

export const taxSlabValues = [0, 5, 12, 18, 28];
