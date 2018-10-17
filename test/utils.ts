export const filename = (entry: string) => (entry.split('/').pop() as string).slice(0, -3);
