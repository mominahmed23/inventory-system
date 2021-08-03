export const generateId = (name = "category") => {
  return { id: `${name}-${(Math.random() * 1000).toFixed(0)}` };
};
