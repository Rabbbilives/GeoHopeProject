// src/utils/loadImages.ts
const imageModules = import.meta.glob('../../assets/images/**/*.{jpg,png}', { eager: true });

const images: Record<string, string> = Object.entries(imageModules).reduce(
  (acc, [path, module]) => {
    const fileName = path.split('/').pop()?.replace(/\.(jpg|png)$/, '');
    if (fileName) {
      acc[fileName] = (module as { default: string }).default;
    }
    return acc;
  },
  {} as Record<string, string>
);

export default images;
