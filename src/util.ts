export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function formatName(name: string) {
  const words = name.split("-");
  return words.map(capitalizeFirstLetter).join(" ");
}
